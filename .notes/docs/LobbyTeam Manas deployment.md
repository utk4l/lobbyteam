---
title: LobbyTeam Manas deployment
tags: [lobbyteam, deployment, manas, caddy, cloudflare]
type: operational-runbook
status: active
---

# LobbyTeam Manas Deployment

## Production Shape

LobbyTeam is a Vite static frontend. It is built on Manas and served from:

```text
/var/www/lobby-team
```

The host-level Caddy instance is the only public listener on ports `80` and `443`. At Your Service remains behind the existing Caddy routes and keeps its current upstreams unchanged.

```text
lobbyteam.sophimind.com -> /var/www/lobby-team
boothteam.sophimind.com -> localhost:3009
boothteam.sophimind.com/api/v1/* -> localhost:5001
```

## TLS And Proxy

- Cloudflare proxy is enabled for `lobbyteam.sophimind.com`.
- Cloudflare SSL/TLS mode is **Full (strict)**.
- Caddy uses the Cloudflare Origin CA certificate:
  - `/etc/caddy/certs/sophimind.crt`
  - `/etc/caddy/certs/sophimind.key`
- The certificate covers `*.sophimind.com` and `sophimind.com`.
- The private key is owned by `root:caddy` with mode `0640`; it is not stored in Git.
- Do not run the legacy At Your Service `setup-caddy.sh`; it overwrites the shared Caddyfile.

## Caddy Site Block

The LobbyTeam block is additive and must not replace the At Your Service blocks:

```caddyfile
lobbyteam.sophimind.com {
    tls /etc/caddy/certs/sophimind.crt /etc/caddy/certs/sophimind.key
    root * /var/www/lobby-team
    try_files {path} /index.html
    encode gzip
    file_server
}
```

## Deployment Steps

```bash
cd /root/lobby-team
npm ci
npm run build
install -d -m 0755 /var/www/lobby-team
cp -a dist/. /var/www/lobby-team/
find /var/www/lobby-team -type d -exec chmod 0755 {} +
find /var/www/lobby-team -type f -exec chmod 0644 {} +
caddy validate --config /etc/caddy/Caddyfile
systemctl reload caddy
```

Validate through Cloudflare after reload:

```bash
curl -fsSI https://lobbyteam.sophimind.com/
curl -fsSI https://lobbyteam.sophimind.com/industries
curl -fsSI https://boothteam.sophimind.com/
```

## Rollback

Remove only the LobbyTeam Caddy block, restore the previous Caddyfile if needed, run `caddy validate`, and reload Caddy. Do not stop the At Your Service PM2 processes or change ports `3009` and `5001`.

## Verified Deployment

- LobbyTeam build completed on Manas.
- Origin certificate loaded after setting key permissions to `root:caddy:0640`.
- Caddy reload succeeded.
- Cloudflare edge returned `200` for LobbyTeam `/` and `/industries`.
- Existing BoothTeam host returned `200` after the reload.

