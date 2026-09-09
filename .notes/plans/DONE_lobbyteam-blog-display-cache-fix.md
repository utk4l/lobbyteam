---
title: LobbyTeam blog display cache fix
tags: [lobbyteam, blog, wordpress, cache, frontend, production-fix]
type: bugfix-plan
status: complete
---

# LobbyTeam Blog Display Cache Fix

## Problem

WordPress contains the published LobbyTeam articles and the same-origin content endpoint returns them, but `/blog` can render the empty state. The browser client currently treats cached empty results as valid and hides request failures behind the same empty-state message.

## Plan

- [x] Version the browser cache namespace so previously cached empty responses cannot mask current WordPress content. (DONE: cache namespace `v2`.)
- [x] Validate post responses against WordPress total-count metadata and retry once when a cached empty result conflicts with a non-zero category. (DONE.)
- [x] Build locally and verify the blog route plus TypeScript output. (DONE: production Vite build passed.)
- [x] Commit and push the fix to Git as source of truth. (DONE: commit `fa13d3d`.)
- [x] Pull the exact commit on Manas, rebuild, install the static frontend, and verify `/blog` and the live content endpoint. (DONE: Manas is on `fa13d3d`; content category and posts endpoints return HTTP 200 with 12 posts on page one.)
- [x] Close this plan with production evidence. (DONE.)

## Verification Record

- The `lobby-team` WordPress category endpoint returns HTTP 200 and category ID `764` reports 17 published posts.
- The live posts endpoint returns HTTP 200 and 12 posts on the first page.
- `/blog` and `/sitemap.xml` return HTTP 200 after deployment.
- Manas `/root/lobby-team` is clean and synced to the pushed source-of-truth release.

## Decisions

- Keep the existing seven-day stale-content behavior for real upstream outages.
- Do not remove caching; invalidate only the old browser namespace and reject contradictory empty results.
- Preserve the existing category isolation by the `lobby-team` slug.
