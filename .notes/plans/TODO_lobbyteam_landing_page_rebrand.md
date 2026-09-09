---
title: LobbyTeam landing page rebrand and legacy route
tags: [lobbyteam, landing-page, messaging, rebrand]
type: implementation-plan
status: active
---

# LobbyTeam Landing Page And Blog Launch

## Objective

Create a genuinely new, outcome-led LobbyTeam homepage while preserving the current landing page at `/old-landing`. Retain the current page's visual quality as a design reference, but use a new information architecture and persona-led story. Add the WordPress-backed blog experience using the same Devon Blog and post-series approach already proven in At Your Service. LobbyTeam posts must be filtered by the WordPress category slug `lobby-team`.

## Decisions

- The public product name is **LobbyTeam**.
- `/` will become the new LobbyTeam homepage.
- `/old-landing` will preserve the current landing-page experience as a legacy reference.
- The new homepage leads with the business outcome: every customer reaches an answer, completed request, or the right human next step.
- The new homepage explains that LobbyTeam works across phone, website chat, email, SMS, WhatsApp, and configured kiosk, tablet, or QR-code experiences.
- LobbyTeam handles defined requests and intelligently routes exceptions to the right human with context.
- The visual language remains substantially unchanged; this is a messaging and information-architecture improvement, not a visual redesign.
- The legacy route should be marked `noindex` if it remains publicly reachable, so it does not compete with the new homepage in search.
- The new homepage is not a copy refresh of the old page; it is a new outcome-led and persona-led experience.
- The public blog lives at `/blog` and reads from Devon Blog through WordPress REST.
- LobbyTeam WordPress posts are selected by the `lobby-team` category, not by a copied numeric ID from At Your Service.
- Blog articles support WordPress post-series, tags, article pages, tag pages, JSON-LD, Open Graph metadata, and sitemap entries.
- `/who-is-this-for` will be the new persona and use-case directory, not a generic list of verticals.
- The current Integrations experience will remain available at `/old-integrations`.
- `/integrations` will be the new outcome-led workflow-fit page.
- `/about` will point visitors to the LobbyTeam presentation at `https://show.iqwyk.com/sophimind/lobbyteam-by-sophimind`.
- The public discovery layer includes `/blog`, article pages, tag pages, post-series context, `/sitemap.xml`, and `/llms.txt`.
- The homepage will include a concise FAQ section with a link to the comprehensive `/faqs` page.
- The full FAQ page will be based on [LobbyTeam comprehensive buyer FAQ](../messaging/LobbyTeam%20comprehensive%20buyer%20FAQ.md), with public answers reviewed against production capability.
- FAQ copy will explain that LobbyTeam is a coordinated digital front-door team, not a generic AI receptionist, chatbot, call center, or security replacement.
- The public FAQ is curated into eight external-audience categories with five non-duplicate questions per category; internal implementation questions remain unpublished.
- WordPress content is served through a same-origin cached runtime with a 10-minute fresh window and up to 7 days of stale fallback.
- `/sitemap.xml` is served dynamically by the same runtime and includes current `lobby-team` posts, tags, and post-series.
- `#pricing` remains a homepage section and will use the working Interaction Unit pricing concept: `$49` for 20 units, `$99` for 75 units, and `$299` for 500 units.

## Recommended Execution Sequence

The launch sequence is correct only when it includes a content and capability lock before code changes and a public crawl after deployment:

1. Lock production-safe capability claims, pricing, FAQ answers, and authority boundaries.
2. Implement the homepage FAQ preview and full `/faqs` page.
3. Add FAQPage JSON-LD, metadata, navigation/footer links, sitemap inclusion, and `llms.txt` coverage.
4. Build locally and validate routes, schema, metadata, and generated discovery files.
5. Commit and push the approved implementation to Git.
6. Pull the exact commit on Manas, build there, and install `dist`.
7. Verify Caddy and Cloudflare coexistence without changing BoothTeam routes.
8. Smoke-test all public pages and crawl the deployed discovery surfaces.
9. Publish the first LobbyTeam articles under the `lobby-team` category.

## Proposed Homepage Flow

1. Hero: outcome, audience, and a concise explanation of what LobbyTeam does.
2. Problem: missed calls, unanswered messages, repetitive front-desk work, and unclear ownership.
3. Outcome cards: answer, complete, route, and follow through.
4. Contexts: office front desk, appointment operations, online business, physical lobby, after-hours support, and follow-the-sun routing.
5. How it works: understand the request, complete configured work, preserve context, and connect the right human.
6. Human boundary: LobbyTeam works alongside staff and does not replace security, emergency response, or accountable human decisions.
7. Pricing: show the approved working concept only after pricing is reviewed for production readiness.
8. FAQ preview: answer the highest-friction buyer questions and link to `/faqs` for the complete evaluation guide.
9. Final CTA and footer discovery links.

## Homepage FAQ Section

Place a concise FAQ block after pricing and before the final CTA. It should answer the questions a first-time buyer needs before clicking through:

- What is LobbyTeam?
- How is LobbyTeam different from an AI receptionist?
- Does LobbyTeam replace our receptionist or support team?
- What does the coordinated digital team do?
- Where can customers interact with LobbyTeam?
- What happens when LobbyTeam does not know an answer?
- How does a request reach the right human?
- Is LobbyTeam useful for a solopreneur or small business?

Each answer should be short, outcome-led, and link to the full FAQ page. The homepage must not become a wall of text; the preview should create confidence and curiosity, while `/faqs` carries the complete buyer evaluation content.

## Full FAQ Page

Create `/faqs` using the comprehensive buyer FAQ as the source document. Organize the public page into these sections:

1. **What LobbyTeam is:** identity, front-door definition, outcome, and target businesses.
2. **How the coordinated team works:** engaging agent, specialist agents, business rules, authority boundaries, and uncertainty handling.
3. **Channels and workflows:** phone, website chat, email, SMS, WhatsApp, kiosk, tablet, QR code, appointments, support, sales, and physical visitor assistance.
4. **Human handoffs and routing:** ownership, context, availability, expertise, urgency, after-hours, regions, backups, and failed handoffs.
5. **Setup and integrations:** business knowledge, workflows, staff, calendars, CRM, ticketing, webhooks, and launch requirements.
6. **Safety, privacy, and data:** consent, retention, export, human accountability, security boundaries, and emergency limitations.
7. **Pricing and measurement:** Interaction Units, overage, usage, and outcome metrics.
8. **Comparisons and buyer evaluation:** AI receptionist, chatbot, call center, virtual receptionist, voicemail, call forwarding, lead form, and lead scanner.

The page should include a clear CTA to identify the visitor's use case and a link to the LobbyTeam presentation through `/about`.

## FAQ Discovery Requirements

- Use one H1: `LobbyTeam FAQs`.
- Use problem-shaped H2/H3 questions rather than feature labels.
- Give every answer a self-contained first paragraph suitable for answer engines to quote.
- Add `FAQPage` JSON-LD only for questions and answers visible on the page.
- Add canonical, Open Graph, and descriptive metadata.
- Link the homepage FAQ preview to the corresponding full-page anchor where useful.
- Include `/faqs` in `sitemap.xml`, `llms.txt`, navigation, and footer discovery links.
- Do not claim live transfers, outbound calls, calendar actions, CRM behavior, or channels unless verified for the production account.
- Keep the FAQ aligned with the comprehensive buyer FAQ document and update both when capability or pricing changes.

## Who Is This For Page

Use `/who-is-this-for` as the discoverable natural-language URL. Its job is to answer “which front-door problem are you trying to solve?” rather than publish a generic list of verticals. The page should open with a clear outcome and then present concrete operating contexts:

- **Office front desk:** answer calls, take messages, schedule and reschedule appointments, and route the request with ownership.
- **Appointment-heavy business:** confirm, remind, reschedule, and recover appointment work without making customers start over.
- **Online business:** respond to website chat, email, SMS, and WhatsApp inquiries and guide visitors toward a completed request or human next step.
- **Physical lobby:** provide a kiosk, tablet, or QR-code front door that can answer questions, start a voice interaction, and connect a visitor to a human when needed; clearly state that it is not security or emergency response.
- **After-hours and multi-location teams:** route by time zone, hours, availability, expertise, urgency, and ownership so the right human receives the context.

Each persona card should follow the same sequence: who is searching, what breaks today, what LobbyTeam changes, and what the customer receives. Avoid creating thin SEO pages for every industry until there is a distinct workflow, proof, and call to action for that industry.

Recommended page CTA: **See how LobbyTeam could handle your front door.**

## Pricing Page And Homepage Pricing Section

The pricing section should explain the outcome before the meter:

> LobbyTeam helps every customer reach an answer, complete a request, or reach the right human next step.

Show the working three-tier structure:

| Plan | Monthly price | Included Interaction Units | Overage |
|---|---:|---:|---:|
| Starter | `$49/month` | 20 | `$0.99/unit` |
| Essential | `$99/month` | 75 | `$0.79/unit` |
| Full Front Door | `$299/month` | 500 | `$0.59/unit` |

Explain one Interaction Unit in plain language: one connected phone minute, one email up to 300 words, one SMS segment, one WhatsApp message up to 500 characters, or one website chat turn. State that the exact channels and workflows depend on configuration, and do not promise unsupported integrations or unlimited service.

The homepage should show a concise pricing summary and link to a fuller pricing explanation if one is added. Pricing must not lead with “AI actions,” tokens, or implementation details.

## Integrations Page

Keep the existing page unchanged at `/old-integrations`. Build a new `/integrations` page as reassurance that LobbyTeam fits the business's existing operating system:

1. Hero: **Keep the front door connected to the work behind it.**
2. Explain that customers can reach the business through the configured channels, while completed requests and human handoffs land in the tools the team already uses.
3. Organize the directory by outcome:
   - **Where requests arrive:** phone, website chat, email, SMS, WhatsApp, and configured physical-lobby surfaces.
   - **Where work gets completed:** calendars, service-management tools, accounting, CRM, and workflow tools.
   - **Where humans take over:** team inboxes, notifications, escalation routes, and webhooks.
4. Every integration card should say what customer or staff problem it solves, what action occurs, and whether it is actually live, configured, or planned.
5. Replace all Converso references, AI-first claims, and unsupported “live” labels.
6. End with a human-centered CTA and an FAQ covering setup, data ownership, fallbacks, and unsupported systems.

## Blog Integration Flow

1. Resolve the WordPress category by slug `lobby-team`, with a production environment override available if needed.
2. Fetch paginated posts, embedded featured media, tags, and post-series metadata from Devon Blog.
3. Render `/blog` with the LobbyTeam visual system and links to article, tag, and series views.
4. Render individual article pages with sanitized WordPress HTML, series dropdown, tags, metadata, and a LobbyTeam CTA.
5. Include published posts and tag routes in the sitemap; retain graceful empty/error states if WordPress is unavailable.
6. Add only LobbyTeam-relevant article content to the category; do not mix At Your Service/BoothTeam posts.

## Checklist

- [x] Snapshot the current homepage into a dedicated legacy view available at `/old-landing`. (DONE)
- [x] Add route detection and rendering for `/old-landing` without breaking `/app` or `/integrations`. (DONE)
- [x] Replace public-facing Converso labels with LobbyTeam labels on the new homepage and shared navigation/footer surfaces. (DONE)
- [x] Rewrite homepage copy around customer outcomes, supported contexts, and human handoff boundaries. (DONE)
- [x] Preserve the current Integrations view at `/old-integrations` and add a new outcome-led `/integrations` page. (DONE)
- [x] Add a persona/use-case-led `/who-is-this-for` page and link to it from the primary navigation or homepage context section. (DONE)
- [x] Replace the homepage pricing section with the approved working Interaction Unit tiers and link to the detailed pricing explanation when ready. (DONE)
- [x] Reposition `/integrations` around workflow fit, outcome, and verified availability while preserving the route. (DONE)
- [x] Preserve the current visual system while adjusting section hierarchy and content density for the new message. (DONE)
- [x] Add the Devon Blog WordPress integration for category slug `lobby-team`. (DONE: category resolved by slug at runtime.)
- [x] Add LobbyTeam blog index, article, tag, and post-series rendering using the established At Your Service pattern. (DONE.)
- [x] Add blog metadata, JSON-LD, Open Graph values, and build-generated sitemap entries. (DONE.)
- [x] Add page title, description, canonical URL, and legacy `noindex` handling. (DONE for the new FAQ route and legacy client routes; deploy-QA remains below.)
- [x] Add homepage FAQ preview with six high-intent buyer questions and a `Full FAQ` link. (Coded/Deploy-QA pending.)
- [x] Add `/faqs` using the comprehensive buyer FAQ structure, with public-safe answers and section anchors. (Coded/Deploy-QA pending.)
- [x] Add FAQPage JSON-LD, metadata, sitemap inclusion, and `llms.txt` link for `/faqs`. (Coded/Deploy-QA pending.)
- [x] Add cached same-origin WordPress content runtime with stale fallback. (Coded/Deploy-QA pending.)
- [x] Add dynamic sitemap runtime and Manas runbook. (Coded/Deploy-QA pending.)
- [x] Add `/about` presentation destination and public `/llms.txt` discovery summary. (DONE.)
- [x] Run the production build and verify both `/` and `/old-landing` locally. (DONE: Vite production build passed.)
- [x] Review the rendered homepage messaging before committing and pushing. (DONE: route/content review completed.)
- [ ] Commit and push the approved implementation to the configured Git remote.
- [ ] Pull the pushed commit on `manas-prod` under `/root/lobby-team`.
- [ ] Run the production build on Manas and install `dist` into `/var/www/lobby-team`.
- [ ] Verify the homepage, `/faqs`, `/blog`, `/sitemap.xml`, `/robots.txt`, `/llms.txt`, `/about`, `/who-is-this-for`, `/integrations`, `/old-landing`, and `/old-integrations` through the Cloudflare edge.
- [ ] Confirm Caddy remains the single host-level 80/443 owner and that the shared Cloudflare Origin CA route is unchanged.

## Acceptance Criteria

- A first-time visitor understands within the first screen that LobbyTeam is the business front door for calls, messages, and visitor requests.
- The first screen states the outcome before describing AI or implementation details.
- `/old-landing` remains accessible and visually matches the pre-rebrand page.
- `/blog` shows only posts assigned to the WordPress `lobby-team` category.
- Blog article pages expose tags and a post-series dropdown when WordPress provides them.
- The homepage answers the highest-friction buyer questions and links to the complete `/faqs` page.
- `/faqs` provides comprehensive public answers with valid FAQPage JSON-LD and no unsupported capability claims.
- No public homepage section calls the product Converso.
- The new page makes clear that LobbyTeam can answer, complete, or route requests and works with human staff.
- The homepage does not claim unsupported channels, integrations, service levels, or human staffing.
- The existing `/app` and `/integrations` views continue to render.

## Validation Before Implementation

- Confirm which channels are production-ready enough to list as supported on the public homepage.
- Confirm whether pricing should appear on the first implementation or remain in the pricing concept until unit economics are validated.
- Verify the `lobby-team` category from the Manas-reachable WordPress environment during implementation; use the slug as the application-level source of truth.
- Verify every FAQ answer against the production build and configured capabilities before publishing.

## Glossary

- **Outcome-led messaging:** Lead with the customer result rather than the technology used to produce it.
- **Legacy route:** A preserved page retained for reference but not positioned as the primary public experience.
- **Human handoff:** Passing a request to an accountable person with the conversation context needed to continue it.
