---
title: LobbyTeam blog display cache fix
tags: [lobbyteam, blog, wordpress, cache, frontend, production-fix]
type: bugfix-plan
status: active
---

# LobbyTeam Blog Display Cache Fix

## Problem

WordPress contains the published LobbyTeam articles and the same-origin content endpoint returns them, but `/blog` can render the empty state. The browser client currently treats cached empty results as valid and hides request failures behind the same empty-state message.

## Plan

- [ ] Version the browser cache namespace so previously cached empty responses cannot mask current WordPress content.
- [ ] Validate post responses against WordPress total-count metadata and retry once when a cached empty result conflicts with a non-zero category.
- [ ] Build locally and verify the blog route plus TypeScript output.
- [ ] Commit and push the fix to Git as source of truth.
- [ ] Pull the exact commit on Manas, rebuild, install the static frontend, and verify `/blog` and the live content endpoint.
- [ ] Close this plan with production evidence.

## Decisions

- Keep the existing seven-day stale-content behavior for real upstream outages.
- Do not remove caching; invalidate only the old browser namespace and reject contradictory empty results.
- Preserve the existing category isolation by the `lobby-team` slug.
