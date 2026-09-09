---
title: LobbyTeam master execution plan
tags: [lobbyteam, master-plan, execution, website, messaging]
type: orchestration-plan
status: active
---

# LobbyTeam Master Execution Plan

## Objective

Bring LobbyTeam to a coherent, discoverable, outcome-led public launch while preserving the legacy experience and deploying through Git to Manas.

## Priority Map

| Priority | Track | Status | Plan |
|---|---|---|---|
| A | Public site and FAQ launch | Coded, deploy-QA pending | TODO_lobbyteam_landing_page_rebrand.md |
| B | WordPress blog and discovery | Coded, dynamic runtime deploy pending | TODO_lobbyteam_landing_page_rebrand.md |
| C | Manas deployment and Cloudflare coexistence | Done | DONE_lobbyteam_manas_coexistence.md |
| D | AEO-first editorial program | Active | ../messaging/LobbyTeam AEO-first post series plan.md |
| E | Pricing validation | Active | TODO_lobbyteam_pricing_concept.md |
| F | Multi-channel outcome animation | Done | DONE_lobbyteam_outcome-in-motion.md |
| G | Website decision team positioning | Proposed | TODO_lobbyteam_website-decision-team.md |

## Current Product Truth

- Public product name: LobbyTeam.
- Primary outcome: every customer reaches an answer, a completed request, or the right human next step.
- LobbyTeam is a coordinated digital front-door team, not merely an AI receptionist.
- The visible agent can engage while specialized agents interpret, apply configured rules, route, and prepare context.
- Humans remain accountable for sensitive, technical, commercial, security, emergency, clinical, legal, and other judgment-heavy decisions.
- Legacy homepage: /old-landing.
- Legacy integrations: /old-integrations.
- New homepage: /.
- Persona page: /who-is-this-for.
- New workflow-fit integrations: /integrations.
- Blog category: WordPress slug lobby-team.
- Presentation: /about points to the LobbyTeam presentation.
- Static frontend is served from /var/www/lobby-team through host-level Caddy on Manas.
- Cloudflare Origin CA is the shared origin certificate policy for Sophimind domains.

## Ordered Launch Sequence

1. Lock the public capability matrix, pricing posture, FAQ answers, and unsupported-claim boundaries.
2. Implement the homepage FAQ preview and full /faqs page from the buyer FAQ source.
3. Add FAQPage JSON-LD, page metadata, navigation/footer links, sitemap inclusion, and llms.txt coverage.
4. Run the production build and validate all route fallbacks, schema, metadata, and generated discovery files locally.
5. Commit the implementation and push the approved commit to the configured Git remote.
6. Pull the exact commit on manas-prod under /root/lobby-team.
7. Run the production build on Manas and install dist into /var/www/lobby-team.
8. Verify that Caddy remains the single 80/443 owner and that no unrelated BoothTeam route changed.
9. Smoke-test all public URLs through the Cloudflare edge.
10. Crawl the deployed pages to confirm one H1, valid JSON-LD, canonical URLs, robots behavior, sitemap inclusion, and no stale Converso copy.
11. Publish the first LobbyTeam WordPress articles under the lobby-team category and verify article, tag, and series discovery.

## Shipped Work

- Outcome-led LobbyTeam homepage and preserved legacy homepage.
- New persona/use-case page.
- New workflow-fit integrations page and preserved legacy integrations.
- Cloudflare Origin CA coexistence on Manas.
- WordPress blog client with category isolation, article, tag, and series routes.
- Build-generated sitemap, robots.txt, and llms.txt.
- Cached same-origin WordPress runtime and dynamic sitemap endpoint, pending Manas service installation.
- Canonical messaging guide and comprehensive buyer FAQ.
- Multi-channel hero demo showing callback, human routing, and interaction logging, pending deployment verification.

## Deferred Or Open Work

- Manas installation and Cloudflare route verification for the FAQ and dynamic content runtime.
- Prerendered HTML for public marketing routes if crawl testing shows client rendering is insufficient.
- Production verification of every public capability claim.
- Final pricing validation against real channel economics.
- Publish and maintain the editorial program.
- Add analytics and conversion measurement for intent progression.
- Decide whether the legacy routes should be noindex at the server or document level.

## Branch Registry

| Branch | Repo | Track | Status | Handoff | Feature plan |
|---|---|---|---|---|---|
| main | lobbyteam | public launch | Active | Current workspace | TODO_lobbyteam_landing_page_rebrand.md |
