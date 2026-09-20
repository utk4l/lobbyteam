---
title: LobbyTeam dynamic sitemap resilience
tags: [lobbyteam, sitemap, wordpress, seo]
type: feature-plan
status: active
track_id: lobbyteam-dynamic-sitemap
parent: master_execution_plan.md
---

# LobbyTeam dynamic sitemap resilience

## Plain-English objective

Generate LobbyTeam's sitemap from the current WordPress category, posts, tags, and series at request time with a ten-minute cache, while still returning core public URLs if WordPress is temporarily unavailable.

## Checklist

- [x] DONE: keep the runtime content-proxy sitemap as the canonical `/sitemap.xml` route.
- [x] DONE: preserve cached core routes when the WordPress source cannot be reached.
- [ ] Todo/ACTIVE: deploy and verify runtime refresh and fallback behavior.

## Decisions

1. No scheduled sitemap job is needed: the runtime endpoint refreshes from WordPress after the cache window and serves stale cached data when available.
2. The build-time `public/sitemap.xml` remains a fallback artifact only; Caddy routes `/sitemap.xml` to the runtime proxy.
