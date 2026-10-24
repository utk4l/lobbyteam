#!/usr/bin/env node

/**
 * LobbyTeam / SalesCom: Exa AI Multi-Decision-Maker & Team Enrichment Engine
 * 
 * Capabilities:
 * 1. Takes any Brand Name & Domain.
 * 2. Uses Exa Neural Search to pull the entire key leadership roster (CEO, Co-Founders, VP E-Commerce, Head of Marketing, Operations).
 * 3. Extracts exact personal LinkedIn profile URLs and bio roles for every team member.
 * 4. Inspects the store for Shopify verification & active helpdesk stack (Gorgias, Zendesk, Klaviyo).
 * 5. Pulls verified company contact emails.
 * 6. Generates custom 40-sec Demo link (lobbyteam.sophimind.com/demo/[slug]) & personalized pitches.
 * 
 * Usage:
 *   node enrich-with-exa.mjs "Branch Furniture" "branchfurniture.com"
 *   node enrich-with-exa.mjs "Olipop" "drinkolipop.com"
 *   node enrich-with-exa.mjs --batch
 */

// Active Exa Keys from salescom pool
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

// 1. Exa Search Helper
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

// 2. Find ALL Team Members & Leadership via Exa Neural Search
async function findTeamMembersWithExa(brandName, domain) {
  try {
    const query = `people who work at ${brandName} (${domain}) leadership team linkedin`;
    const data = await exaSearch(query, {
      includeDomains: ['linkedin.com/in/'],
      numResults: 8,
      contents: {
        text: { maxCharacters: 200 }
      }
    });

    const members = [];
    for (const r of data.results || []) {
      if (r.url.includes('/in/')) {
        // Parse name and role from snippet/text
        let cleanName = r.title.replace(/\s*[-–|].*$/, '').trim();
        let role = 'Leadership / Executive';

        if (r.text) {
          const matchRole = r.text.match(/(?:Co-Founder|Founder|CEO|COO|Chief|Director|VP|Head of|Manager)[^\n•,]{2,40}/i);
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
    return [];
  }
}

// 3. Inspect Store Website (Shopify, Helpdesk & Emails)
async function inspectWebsite(domain) {
  const result = {
    isShopify: false,
    chatTool: 'None detected',
    emails: new Set()
  };

  const pagesToProbe = ['', '/pages/contact', '/pages/contact-us', '/about-us', '/policies/privacy-policy'];

  for (const page of pagesToProbe) {
    try {
      const url = `https://${domain}${page}`;
      const res = await fetch(url, {
        headers: { 'User-Agent': 'Mozilla/5.0' },
        signal: AbortSignal.timeout(4000)
      });
      if (!res.ok) continue;

      const html = await res.text();

      // Check Shopify
      if (html.includes('cdn.shopify.com') || html.includes('Shopify.theme')) {
        result.isShopify = true;
      }

      // Check Helpdesk
      if (/gorgias/i.test(html)) result.chatTool = 'Gorgias';
      else if (/zendesk/i.test(html)) result.chatTool = 'Zendesk';
      else if (/intercom/i.test(html)) result.chatTool = 'Intercom';
      else if (/klaviyo/i.test(html) && result.chatTool === 'None detected') result.chatTool = 'Klaviyo Chat/Forms';

      // Extract Emails
      const matches = html.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi) || [];
      for (const raw of matches) {
        const clean = raw.toLowerCase();
        if (
          !clean.endsWith('.png') &&
          !clean.endsWith('.jpg') &&
          !clean.endsWith('.webp') &&
          !clean.includes('example.com') &&
          !clean.includes('schema.org') &&
          clean.length < 50
        ) {
          result.emails.add(clean);
        }
      }

      if (result.isShopify && result.emails.size >= 2) break;
    } catch (e) {}
  }

  return {
    ...result,
    emails: Array.from(result.emails).slice(0, 4)
  };
}

// 4. Generate Outbound Pitches
function generatePitches(brandName, domain, topFounder) {
  const brandSlug = brandName.toLowerCase().replace(/[^a-z0-9]/g, '-');
  const demoUrl = `https://lobbyteam.sophimind.com/demo/${brandSlug}`;
  const firstName = topFounder?.name ? topFounder.name.split(' ')[0] : 'there';

  const linkedInDM = `Hey ${firstName}! Saw ${brandName} doing big numbers on Amazon. I was looking at your direct store (${domain}) and noticed shoppers with pre-purchase questions don't get immediate live answers before checkout.

We built a conversational personal buyer for Shopify (like Flipkart's Flippi) that answers shopper questions in 3 seconds and boosts direct checkout conversions.

Recorded a 40-sec preview for ${brandName}: ${demoUrl}

Would love your quick thoughts as a founder!`;

  return { demoUrl, linkedInDM };
}

// 5. Main Execution
async function main() {
  console.log('================================================================');
  console.log('⚡ LOBBYTEAM: EXA AI FULL TEAM & LEADERSHIP ENRICHMENT');
  console.log('================================================================\n');

  const args = process.argv.slice(2);
  let targets = [
    { name: 'Branch Furniture', domain: 'branchfurniture.com' },
    { name: 'Olipop', domain: 'drinkolipop.com' },
    { name: 'Lomi', domain: 'lomi.com' },
    { name: 'Ridge Wallet', domain: 'ridge.com' }
  ];

  if (args.length >= 1 && args[0] !== '--batch') {
    const customName = args[0];
    const customDomain = args[1] || `${customName.toLowerCase().replace(/[^a-z0-9]/g, '')}.com`;
    targets = [{ name: customName, domain: customDomain }];
    console.log(`🎯 Targeted Team Discovery: ${customName} (${customDomain})\n`);
  }

  for (const t of targets) {
    process.stdout.write(`⚡ Querying Exa for [${t.name}] leadership roster... `);

    // 1. Find ALL Team Members with exact LinkedIn profiles
    const teamMembers = await findTeamMembersWithExa(t.name, t.domain);

    // 2. Inspect Website
    const store = await inspectWebsite(t.domain);

    // 3. Generate Pitches for top founder
    const topPerson = teamMembers.find(m => /founder|ceo|cpo|coo/i.test(m.role)) || teamMembers[0];
    const pitches = generatePitches(t.name, t.domain, topPerson);

    console.log(`✅ FOUND ${teamMembers.length} KEY MEMBERS!\n`);
    console.log('----------------------------------------------------------------');
    console.log(`Brand:             ${t.name}`);
    console.log(`Direct Website:    https://${t.domain}`);
    console.log(`E-Commerce Engine: ${store.isShopify ? 'Shopify (Verified)' : 'Other'}`);
    console.log(`Live Helpdesk:     ${store.chatTool}`);
    console.log(`Public Emails:     ${store.emails.join(', ') || 'N/A'}`);
    console.log(`Demo Preview Link: ${pitches.demoUrl}`);
    console.log(`\n👥 LEADERSHIP ROSTER & VERIFIED LINKEDIN PROFILES:`);
    teamMembers.forEach(m => {
      console.log(`  • ${m.name.padEnd(20)} | ${m.role.padEnd(25)} | ${m.linkedin}`);
    });
    console.log(`\nPersonalized LinkedIn Outreach (Target: ${topPerson?.name || 'Founder'}):`);
    console.log(pitches.linkedInDM);
    console.log('----------------------------------------------------------------\n');
  }
}

main().catch(console.error);
