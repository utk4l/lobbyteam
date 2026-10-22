---
title: LobbyTeam dynamic content runtime
tags: [lobbyteam, wordpress, caching, sitemap, manas, operations]
type: deployment-runbook
status: active
---

# LobbyTeam Dynamic Content Runtime

## Purpose

LobbyTeam is a static Vite frontend served by Caddy, but its public blog and sitemap depend on Devon Blog WordPress. The content proxy keeps those surfaces same-origin, cached, and resilient when WordPress is slow or unavailable.

## Runtime

The repository contains `server/content-proxy.mjs`. It listens on `127.0.0.1:3011` and provides:

- `/content/wp-json/wp/v2/*` for cached WordPress REST reads
- `/sitemap.xml` for a dynamic sitemap containing core pages and published `lobby-team` posts, tags, and post-series

Cache behavior:

- Fresh cache: 10 minutes
- Stale fallback: up to 7 days
- Persistent cache directory: `/var/lib/lobbyteam-content`
- WordPress category selected by slug: `lobby-team`
- Devon Blog requests include the required WAF bypass header

## Manas Setup

Create a systemd service for the runtime:

```ini
[Unit]
Description=LobbyTeam dynamic content proxy
After=network-online.target

[Service]
Type=simple
WorkingDirectory=/root/lobby-team
ExecStart=/usr/bin/node /root/lobby-team/server/content-proxy.mjs
Environment=CONTENT_PROXY_PORT=3011
Environment=CONTENT_CACHE_DIR=/var/lib/lobbyteam-content
Environment=SITE_URL=https://lobbyteam.sophimind.com
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
```

Create `/var/lib/lobbyteam-content`, enable the service, and verify it listens only on localhost.

## Caddy Routes

Within the `lobbyteam.sophimind.com` site block, route these paths before the static file handler:

```caddy
handle /sitemap.xml {
    reverse_proxy localhost:3011
}

handle /content/* {
    reverse_proxy localhost:3011
}
```

The existing static fallback remains responsible for the Vite application and public files.

## Failure Behavior

- A successful WordPress response is cached on disk and in memory.
- A WordPress failure serves the last-known-good response while it is within the stale window.
- A request with no valid cache returns a controlled `502`; it must not appear as an empty blog.
- The sitemap uses cached WordPress responses, so a temporary upstream failure does not erase known URLs.

## Verification

```bash
curl -fsSI http://127.0.0.1:3011/sitemap.xml
curl -fsSI https://lobbyteam.sophimind.com/sitemap.xml
curl -fsSI https://lobbyteam.sophimind.com/content/wp-json/wp/v2/categories?slug=lobby-team
```

Confirm `200`, XML or JSON content type, `cache-control`, and `x-lobbyteam-cache` headers. Never log WordPress payloads or customer PII.
