---
title: LobbyTeam public metadata hardening
tags: [lobbyteam, seo, aeo, json-ld, opengraph]
type: feature-plan
status: done
track_id: lobbyteam-public-metadata
parent: master_execution_plan.md
---

# LobbyTeam public metadata hardening

## Plain-English objective

Make the public LobbyTeam homepage, FAQ route, and client-rendered field notes expose consistent canonical, Open Graph/Twitter, and JSON-LD metadata.

## Checklist

- [x] DONE: add homepage Organization, WebSite, and SoftwareApplication JSON-LD.
- [x] DONE: add homepage social image metadata and use a stable served brand asset.
- [x] DONE: add route metadata for client-rendered FAQs and field notes.
- [x] DONE: run the production build and live HTML smoke checks.

## Decisions

1. Use the stable Show-hosted Sophimind brand asset until a LobbyTeam-specific social image exists.
2. Keep private and legacy routes out of indexable metadata; the existing client route marks legacy views noindex.

## Verification

The production Vite build passed on Manas. The versioned static release was published behind Caddy, and `https://lobbyteam.sophimind.com/` returned HTTP 200. Representative live HTML checks found JSON-LD, Open Graph, and canonical tags.
