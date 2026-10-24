#!/usr/bin/env node

/**
 * LobbyTeam / SalesCom: Universal Brand Scraper & Lead Enrichment Engine
 * 
 * Usage:
 *   1. Single Store Ad-Hoc:
 *      node enrich-amazon-brands.mjs "Olipop" "drinkolipop.com"
 *      node enrich-amazon-brands.mjs "Chubbies" "chubbiesshorts.com"
 * 
 *   2. Batch Mode (Default seed catalog):
 *      node enrich-amazon-brands.mjs
 */

import dns from 'dns/promises';

// Active API Keys from salescom environment
const HUNTER_KEYS = [
  '76f8113f8263cbf461cfa8b081625afdfad933e7',
  'f86808e323598d389e650f20b104d86f8d9da801'
];
let hunterKeyIdx = 0;
function getHunterKey() {
  const key = HUNTER_KEYS[hunterKeyIdx % HUNTER_KEYS.length];
  hunterKeyIdx++;
  return key;
}

// Default Seed Brands
const DEFAULT_SEED_BRANDS = [
  { name: 'Branch Furniture', category: 'Office Ergonomics', aov: 320, amazonReviews: '4,500+', domainOverride: 'branchfurniture.com' },
  { name: 'Lomi', category: 'Kitchen Tech / Eco', aov: 350, amazonReviews: '3,200+', domainOverride: 'lomi.com' },
  { name: 'Ridge Wallet', category: 'EDC / Accessories', aov: 95, amazonReviews: '22,000+', domainOverride: 'ridge.com' },
  { name: 'Coop Sleep Goods', category: 'Bedding / Ergonomics', aov: 95, amazonReviews: '34,000+', domainOverride: 'coopsleepgoods.com' },
  { name: 'FlexiSpot', category: 'Standing Desks', aov: 280, amazonReviews: '12,000+', domainOverride: 'flexispot.com' },
  { name: 'MaryRuth Organics', category: 'Supplements', aov: 55, amazonReviews: '28,000+', domainOverride: 'maryruthorganics.com' },
  { name: 'InstaNatural', category: 'Skincare', aov: 40, amazonReviews: '15,000+', domainOverride: 'instanatural.com' },
  { name: 'Soundcore', category: 'Premium Audio', aov: 79, amazonReviews: '45,000+', domainOverride: 'soundcore.com' },
  { name: 'Liquid Death', category: 'Beverage / D2C', aov: 35, amazonReviews: '18,000+', domainOverride: 'liquiddeath.com' },
  { name: 'Byoma', category: 'Skincare / Beauty', aov: 38, amazonReviews: '8,500+', domainOverride: 'byoma.com' }
];

// 1. Resolve Brand Name to Candidate Domain
async function resolveDomain(brand) {
  if (brand.domainOverride) return { domain: brand.domainOverride, resolved: true };
  const clean = brand.name.toLowerCase().replace(/[^a-z0-9]/g, '');
  const candidate = `${clean}.com`;
  try {
    const lookup = await dns.lookup(candidate);
    return { domain: candidate, ip: lookup.address, resolved: true };
  } catch (err) {
    return { domain: candidate, ip: null, resolved: false };
  }
}

// 2. Inspect Direct Website: Shopify, Chat tools, and Public Emails
async function inspectWebsite(domain) {
  const result = {
    isShopify: false,
    chatTool: 'None detected',
    emails: new Set(),
    statusCode: null,
    accessible: false
  };

  const pagesToProbe = ['', '/pages/contact', '/pages/contact-us', '/pages/about-us', '/policies/privacy-policy'];

  for (const page of pagesToProbe) {
    try {
      const url = `https://${domain}${page}`;
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
        },
        signal: AbortSignal.timeout(4500)
      });

      if (!result.statusCode) result.statusCode = res.status;
      if (!res.ok) continue;

      result.accessible = true;
      const html = await res.text();

      // Check Shopify
      if (html.includes('cdn.shopify.com') || html.includes('Shopify.theme')) {
        result.isShopify = true;
      }

      // Check Helpdesk / Chat
      if (/gorgias/i.test(html)) result.chatTool = 'Gorgias';
      else if (/zendesk/i.test(html)) result.chatTool = 'Zendesk';
      else if (/intercom/i.test(html)) result.chatTool = 'Intercom';
      else if (/tidio/i.test(html)) result.chatTool = 'Tidio';
      else if (/klaviyo/i.test(html) && result.chatTool === 'None detected') result.chatTool = 'Klaviyo Chat/Forms';

      // Extract Emails
      const matches = html.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi) || [];
      for (const rawEmail of matches) {
        const cleanEmail = rawEmail.toLowerCase();
        if (
          !cleanEmail.endsWith('.png') &&
          !cleanEmail.endsWith('.jpg') &&
          !cleanEmail.endsWith('.webp') &&
          !cleanEmail.includes('sentry') &&
          !cleanEmail.includes('example.com') &&
          !cleanEmail.includes('schema.org') &&
          !cleanEmail.includes('wixpress') &&
          cleanEmail.length < 50
        ) {
          result.emails.add(cleanEmail);
        }
      }

      if (result.isShopify && result.emails.size >= 3) break;
    } catch (e) {
      // Continue
    }
  }

  return {
    ...result,
    emails: Array.from(result.emails).slice(0, 5)
  };
}

// 3. Search Founder, CEO, and Decision Makers with LinkedIn via Enrichment Engine
async function findDecisionMakers(domain) {
  try {
    const apiKey = getHunterKey();
    const url = `https://api.hunter.io/v2/domain-search?domain=${encodeURIComponent(domain)}&api_key=${apiKey}&limit=10`;
    const res = await fetch(url, { signal: AbortSignal.timeout(5000) });
    const data = await res.json();
    const emails = data.data?.emails || [];

    const decisionMakers = [];
    for (const e of emails) {
      const title = e.position || '';
      const name = `${e.first_name || ''} ${e.last_name || ''}`.trim();
      const isExec = /founder|ceo|cpo|coo|owner|president|director|head of|vp|ecommerce|marketing/i.test(title);
      
      if (name && (isExec || e.linkedin)) {
        decisionMakers.push({
          name,
          title: title || 'Executive / Founder',
          email: e.value,
          linkedin: e.linkedin || null
        });
      }
    }

    return decisionMakers.slice(0, 4);
  } catch (err) {
    return [];
  }
}

// 4. Generate Personalized Outbound Copy for Email, LinkedIn DM, and X
function generateOutboundCopy(brand, domain, storeInfo, decisionMakers) {
  const brandSlug = brand.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
  const demoUrl = `https://lobbyteam.sophimind.com/demo/${brandSlug}`;
  const targetPerson = decisionMakers[0] || { name: 'Founder / E-Commerce Lead', title: 'Executive' };
  const firstName = targetPerson.name.split(' ')[0] || 'there';

  const emailPitch = `Subject: Shifting ${brand.name}'s Amazon volume to ${domain}

Hi ${firstName},

Saw ${brand.name} doing serious numbers on Amazon for your ${brand.category} line (${brand.amazonReviews || 'high review volume'}). But paying Amazon 15%+ on every checkout eats into your margins when you already have ${domain}.

The reason shoppers bounce back to Amazon is certainty: they want immediate answers to compatibility, sizing, and shipping questions before paying.

We built LobbyTeam: an interactive personal buyer (like Flipkart's Flippi) for your Shopify store. It answers shoppers' pre-purchase questions in 3 seconds, guides them through your catalog, and captures direct checkouts.

I put together a 40-second preview of what your shoppers would experience:
👉 ${demoUrl}

Takes 2 minutes to install on Shopify. Worth a quick 5-min look?`;

  const linkedInPitch = `Hey ${firstName}! Saw ${brand.name} crushing it on Amazon. I was looking at your direct store (${domain}) and noticed shoppers with pre-purchase questions don't get immediate live answers before checkout.

We built a conversational personal buyer for Shopify (like Flipkart's Flippi) that answers shopper questions in 3 seconds and boosts direct conversions.

Recorded a 40-sec preview for ${brand.name}: ${demoUrl}

Would love your quick thoughts as a founder!`;

  return { demoUrl, emailPitch, linkedInPitch, targetPerson };
}

// 5. Main Execution Loop
async function main() {
  console.log('================================================================');
  console.log('🚀 LOBBYTEAM: UNIVERSAL BRAND & FOUNDER LINKEDIN ENRICHMENT');
  console.log('================================================================\n');

  // Check if CLI arguments provided (e.g., node enrich-amazon-brands.mjs "Olipop" "drinkolipop.com")
  const args = process.argv.slice(2);
  let brandsToProcess = DEFAULT_SEED_BRANDS;

  if (args.length >= 1) {
    const customName = args[0];
    const customDomain = args[1] || `${customName.toLowerCase().replace(/[^a-z0-9]/g, '')}.com`;
    brandsToProcess = [{
      name: customName,
      category: 'D2C Consumer Brand',
      aov: 65,
      amazonReviews: '10,000+',
      domainOverride: customDomain
    }];
    console.log(`🎯 Custom target specified: ${customName} -> ${customDomain}\n`);
  }

  const enrichedLeads = [];

  for (const brand of brandsToProcess) {
    process.stdout.write(`Scanning [${brand.name}]... `);
    const domainInfo = await resolveDomain(brand);

    if (!domainInfo.resolved) {
      console.log('❌ Domain resolution failed.');
      continue;
    }

    const storeInfo = await inspectWebsite(domainInfo.domain);
    const decisionMakers = await findDecisionMakers(domainInfo.domain);
    const outbound = generateOutboundCopy(brand, domainInfo.domain, storeInfo, decisionMakers);

    const leadRecord = {
      brand: brand.name,
      domain: domainInfo.domain,
      category: brand.category,
      estimatedAov: `$${brand.aov}`,
      amazonVolume: brand.amazonReviews,
      isShopify: storeInfo.isShopify,
      currentChatTool: storeInfo.chatTool,
      publicEmails: storeInfo.emails,
      decisionMakers,
      targetPerson: outbound.targetPerson,
      demoPreviewUrl: outbound.demoUrl,
      emailPitch: outbound.emailPitch,
      linkedInPitch: outbound.linkedInPitch
    };

    enrichedLeads.push(leadRecord);
    const execName = decisionMakers[0]?.name ? `${decisionMakers[0].name} (${decisionMakers[0].title})` : 'General Lead';
    console.log(`✅ [${domainInfo.domain}] | Exec: ${execName} | LinkedIn: ${decisionMakers[0]?.linkedin ? 'FOUND' : 'N/A'}`);
  }

  console.log('\n================================================================');
  console.log(`🎉 ENRICHED ${enrichedLeads.length} BRANDS WITH FOUNDERS & LINKEDIN`);
  console.log('================================================================\n');

  // Print Lead Cards
  for (let i = 0; i < enrichedLeads.length; i++) {
    const item = enrichedLeads[i];
    console.log(`--- [LEAD CARD ${i + 1}]: ${item.brand.toUpperCase()} ---`);
    console.log(`Brand:             ${item.brand}`);
    console.log(`Direct Website:    https://${item.domain}`);
    console.log(`E-Commerce Engine: ${item.isShopify ? 'Shopify (Verified)' : 'Other'}`);
    console.log(`Chat/Helpdesk:     ${item.currentChatTool}`);
    console.log(`Key Executives Found:`);
    if (item.decisionMakers.length > 0) {
      item.decisionMakers.forEach(m => {
        console.log(`  • ${m.name} - ${m.title}`);
        console.log(`    Direct Email: ${m.email}`);
        console.log(`    LinkedIn:     ${m.linkedin || 'N/A'}`);
      });
    } else {
      console.log(`  • Public Emails: ${item.publicEmails.join(', ')}`);
    }
    console.log(`Demo Preview URL:  ${item.demoPreviewUrl}`);
    console.log(`\nPersonalized LinkedIn DM:`);
    console.log(item.linkedInPitch);
    console.log('\n----------------------------------------------------------------\n');
  }
}

main().catch(console.error);
