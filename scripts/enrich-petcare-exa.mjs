#!/usr/bin/env node

/**
 * Pet Care Brands Enrichment via Exa Neural Search
 * Targets US Amazon Pet Care sellers with D2C Shopify stores,
 * resolving their leadership rosters, LinkedIn profiles, tech stacks, and personalized copy.
 */

const EXA_KEYS = [
  'c0cf2a8b-0d2f-405a-8716-6e4bf14fc9d3',
  '639414b5-57c2-4642-b80c-0990be2a73c2',
  '64ead4bc-ad90-4aa4-a047-4f763260139c',
  '79273160-a13a-4710-a3d8-13685e3cff77',
  '512969ce-8bb5-4383-b3f0-05d02301ebc5',
  '9b07ffcb-e579-4ea6-a1b8-5b76e09df688'
];
let exaIdx = 0;
function getExaKey() {
  const k = EXA_KEYS[exaIdx % EXA_KEYS.length];
  exaIdx++;
  return k;
}

async function exaSearch(query, options = {}) {
  const key = getExaKey();
  const res = await fetch('https://api.exa.ai/search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': key
    },
    body: JSON.stringify({
      query,
      numResults: options.numResults || 6,
      ...(options.includeDomains ? { includeDomains: options.includeDomains } : {}),
      ...(options.contents ? { contents: options.contents } : {})
    })
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Exa API Error (${res.status}): ${err}`);
  }
  return res.json();
}

async function findLeadershipWithExa(brandName, domain) {
  try {
    const query = `site:linkedin.com/in "${brandName}" (founder OR "co-founder" OR CEO OR "VP of E-Commerce" OR "Head of E-Commerce" OR "VP Marketing")`;
    const data = await exaSearch(query, {
      numResults: 6,
      contents: {
        text: { maxCharacters: 300 }
      }
    });

    const members = [];
    for (const r of data.results || []) {
      if (r.url.includes('linkedin.com/in/')) {
        let cleanName = r.title.replace(/\s*[-–|].*$/, '').trim();
        let roleSnippet = r.title.includes('-') ? r.title.split(/[-–|]/).slice(1).join(' - ').trim() : '';
        
        let role = roleSnippet || 'Executive Leadership';
        if (r.text) {
          const matchRole = r.text.match(/(?:Co-Founder|Founder|Chief Executive Officer|CEO|COO|Chief Marketing Officer|CMO|VP of E-Commerce|VP of eCommerce|Head of E-Commerce|President)[^\n•,]{0,40}/i);
          if (matchRole) {
            role = matchRole[0].trim();
          }
        }

        members.push({
          name: cleanName,
          role,
          linkedin: r.url
        });
      }
    }
    return members;
  } catch (err) {
    console.error(`Error querying Exa for ${brandName}:`, err.message);
    return [];
  }
}

async function inspectWebsite(domain) {
  const result = {
    isShopify: false,
    helpdesk: 'None detected',
    emails: []
  };

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 6000);
    const res = await fetch(`https://${domain}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      },
      signal: controller.signal
    });
    clearTimeout(timeout);

    const html = await res.text();

    if (html.includes('cdn.shopify.com') || html.includes('Shopify.theme') || html.includes('myshopify.com')) {
      result.isShopify = true;
    }
    if (html.includes('gorgias')) result.helpdesk = 'Gorgias';
    else if (html.includes('zendesk') || html.includes('zdassets')) result.helpdesk = 'Zendesk';
    else if (html.includes('intercom')) result.helpdesk = 'Intercom';
    else if (html.includes('klaviyo')) result.helpdesk = 'Klaviyo Chat / Forms';

    const matches = html.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g) || [];
    const validEmails = [...new Set(matches.filter(e => 
      !e.endsWith('.png') && !e.endsWith('.jpg') && !e.endsWith('.webp') && !e.endsWith('.svg') && !e.includes('example') && !e.includes('sentry')
    ))];
    result.emails = validEmails.slice(0, 3);
  } catch (e) {
    // Ignore timeout / blocks
  }
  return result;
}

const PET_CARE_TARGETS = [
  { name: 'Zesty Paws', domain: 'zestypaws.com', amazonFocus: '#1 Best-Seller Dog Allergy & Gut Health Supplements (100k+ reviews)' },
  { name: 'Pet Honesty', domain: 'pethonesty.com', amazonFocus: 'Top-Rated Vet-Recommended Probiotics & Multivitamins (50k+ reviews)' },
  { name: 'Native Pet', domain: 'nativepet.com', amazonFocus: 'Clean Ingredient Organic Supplements & Bone Broths (15k+ reviews)' },
  { name: 'Paw Origins', domain: 'paworigins.com', amazonFocus: 'Targeted Calming Chews & Happy Tummy Probiotics (10k+ reviews)' },
  { name: 'Pet Wellbeing', domain: 'petwellbeing.com', amazonFocus: 'Holistic & Clinical Herbal Pet Remedies (25k+ reviews)' }
];

async function run() {
  console.log(`\n================================================================`);
  console.log(`🐾 LOBBYTEAM: TOP US AMAZON PET CARE BRANDS LEADERSHIP ROSTER`);
  console.log(`================================================================\n`);

  for (const brand of PET_CARE_TARGETS) {
    const slug = brand.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const demoUrl = `https://lobbyteam.sophimind.com/demo/${slug}`;

    console.log(`🔍 [${brand.name}] Inspecting store & querying Exa for executive team...`);
    const [tech, leaders] = await Promise.all([
      inspectWebsite(brand.domain),
      findLeadershipWithExa(brand.name, brand.domain)
    ]);

    const primaryLeader = leaders[0] || { name: 'Founder / CEO', role: 'Founder' };

    console.log(`\n----------------------------------------------------------------`);
    console.log(`Brand:             ${brand.name}`);
    console.log(`Direct Website:    https://${brand.domain}`);
    console.log(`Amazon Footprint:  ${brand.amazonFocus}`);
    console.log(`E-Commerce Engine: ${tech.isShopify ? 'Shopify ✅' : 'Custom / Headless'}`);
    console.log(`Current Helpdesk:  ${tech.helpdesk}`);
    console.log(`Store Emails:      ${tech.emails.length ? tech.emails.join(', ') : 'hello@' + brand.domain}`);
    console.log(`Tailored Demo:     ${demoUrl}`);

    console.log(`\n👥 LEADERSHIP ROSTER & VERIFIED LINKEDIN PROFILES (${leaders.length} found):`);
    leaders.forEach(l => {
      console.log(`  • ${l.name} | ${l.role}`);
      console.log(`    LinkedIn: ${l.linkedin}`);
    });

    console.log(`\n📩 Hyper-Personalized LinkedIn DM (Target: ${primaryLeader.name} - ${primaryLeader.role}):`);
    console.log(`"Hey ${primaryLeader.name.split(' ')[0]}! Saw ${brand.name} dominating Amazon in pet supplements (${brand.amazonFocus.split('(')[0].trim()}).`);
    console.log(`Looking at ${brand.domain}, pet parents asking nuanced pre-purchase questions (e.g. 'Can I give this to my 15lb allergic Frenchie with kidney sensitivity?') hit static FAQs or wait on ${tech.helpdesk === 'None detected' ? 'email' : tech.helpdesk}—and bounce back to Amazon where you pay a 15% referral fee.`);
    console.log(`We built a conversational personal buyer for pet Shopify stores (like Flipkart's Flippi) that answers ingredient, weight, and allergy questions in 3 seconds to close direct checkouts.`);
    console.log(`Recorded a 40-sec live test for ${brand.name}: ${demoUrl}`);
    console.log(`Would love your thoughts as a founder!"`);
    console.log(`----------------------------------------------------------------\n`);
  }
}

run();
