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
| A | Homepage and full FAQ | Coded, deploy-QA pending | TODO_lobbyteam_landing_page_rebrand.md |
| B | Git and Manas deployment | Active | TODO_lobbyteam_landing_page_rebrand.md |
| C | Blog publishing | Active | ../messaging/LobbyTeam AEO-first post series plan.md |
| D | Pricing validation | Active | TODO_lobbyteam_pricing_concept.md |
| E | Multi-channel outcome animation | Coded, deploy-QA pending | TODO_lobbyteam_outcome-in-motion.md |

## Ordered Actions

1. Verify FAQ answers against the capability matrix.
2. Validate the homepage FAQ and /faqs schema locally.
3. Install and supervise the content proxy on Manas.
4. Add the Caddy routes for dynamic sitemap and same-origin WordPress content.
5. Build and validate locally and on Manas.
6. Commit and push to Git.
7. Pull the exact commit on Manas and deploy atomically.
8. Run Cloudflare edge smoke tests and a public discovery crawl.
9. Publish the first five foundational LobbyTeam articles.
10. Deploy and verify the multi-channel outcome animation and legacy route preservation.
