---
title: LobbyTeam next steps
tags: [lobbyteam, next-steps, execution, faq, deployment]
type: orchestration-plan
status: active
---

# Next Steps

## Priority Map

| Priority | Track | Status | Plan |
|---|---|---|---|
| A | Homepage and full FAQ | Coded, deploy-QA pending | TODO_9_OF_26_lobbyteam_landing_page_rebrand.md |
| B | Git and Manas deployment | Active | TODO_9_OF_26_lobbyteam_landing_page_rebrand.md |
| C | Blog publishing | Done | DONE_lobbyteam-modern-office-front-desk-series.md |
| D | Pricing validation and Interaction Unit billing | Active | TODO_1_OF_5_lobbyteam_pricing_concept.md; TODO_lobbyteam_interaction_unit_billing_spec.md |
| E | Multi-channel outcome animation | Done | DONE_lobbyteam_outcome-in-motion.md |
| F | Website decision team positioning | Done | DONE_lobbyteam_website-decision-team.md |
| G | Messaging pitch system | Done | DONE_lobbyteam_messaging_pitches_guideline.md |

## Ordered Actions

1. Verify FAQ answers against the capability matrix.
2. Validate the homepage FAQ and /faqs schema locally.
3. Install and supervise the content proxy on Manas.
4. Add the Caddy routes for dynamic sitemap and same-origin WordPress content.
5. Build and validate locally and on Manas.
6. Commit and push to Git.
7. Pull the exact commit on Manas and deploy atomically.
8. Run Cloudflare edge smoke tests and a public discovery crawl.
9. [DONE] Publish the first five foundational LobbyTeam articles under the `lobby-team` category and verify their live routes and sitemap entries.
10. [DONE] Deploy and verify the multi-channel outcome animation and legacy route preservation.
11. Review and approve the website decision-team positioning plan before implementation.
12. [DONE] Deploy and verify the website decision-team homepage animation.
13. [DONE] Publish and verify the five-article Modern Office Front Desk series.
14. [DONE] Publish and verify the seven-article Appointment Operations Without Phone Tag series; prepare Series 5 next.
15. [DONE] Fix stale empty browser cache behavior on `/blog` and verify the live WordPress content endpoint.
16. [DONE] Remove duplicate WordPress series text from LobbyTeam article rendering and verify the live article route.
17. [DONE] Draft and approve the five-pitch LobbyTeam messaging guideline in the canonical comprehensive messaging guide.
