---
title: LobbyTeam and At Your Service Manas coexistence
tags: [lobbyteam, deployment, manas, caddy, reverse-proxy]
type: deployment-plan
status: done
---

# LobbyTeam And At Your Service Coexistence

## Objective

Run LobbyTeam and At Your Service safely on the same Manas production server without competing for host ports `80` or `443`, while preserving the current At Your Service deployment and allowing each product to use its own public hostname.

## Verified Current State

- Host: `manas-prod` (`159.195.240.144`), accessed with the existing SSH configuration.
- Caddy is the only process listening on host ports `80` and `443`.
- Cloudflare will proxy the public hostname and terminate edge TLS; the origin connection will use a Cloudflare Origin CA certificate with Cloudflare SSL mode **Full (strict)**. Let's Encrypt is not part of the LobbyTeam rollout.
- At Your Service currently uses Caddy as the public entry point and proxies its frontend to `localhost:3009` and its API to `localhost:5001`.
- At Your Service currently owns the public Caddy host `boothteam.sophimind.com`; `ays.sophimind.com` redirects there.
- LobbyTeam is checked out at `/root/lobby-team` and is a Vite static frontend with `npm run build`; it currently has no production process, Caddy route, Docker stack, or systemd unit.
- The host does not currently expose Docker containers for either application.

## Target Architecture

```text
Internet :80/:443
          |
        Caddy (single owner of public ports)
          |-- boothteam.sophimind.com -> localhost:3009 (At Your Service frontend)
          |                         -> localhost:5001/api/v1 (At Your Service API)
          |-- lobbyteam.sophimind.com -> /var/www/lobby-team (static Vite output)
```

Rules:

- No LobbyTeam process may bind host ports `80` or `443`.
- Do not add a second Caddy, Nginx, or Docker port binding for `80` or `443`.
- Serve LobbyTeam as static files through the existing Caddy instance unless a backend is introduced later.
- Keep all future LobbyTeam API processes on localhost-only ports, with Caddy proxying only the required paths.
- Keep At Your Service upstream ports unchanged during the LobbyTeam rollout.
- Do not run the existing At Your Service `setup-caddy.sh` during this rollout; it writes an obsolete standalone Caddyfile and would overwrite the live `boothteam.sophimind.com` configuration.

## Deployment Flow

1. Confirm `lobbyteam.sophimind.com` is proxied by Cloudflare and its DNS record points to Manas.
2. Create or obtain a Cloudflare Origin CA certificate covering `lobbyteam.sophimind.com` and install the certificate/key on Manas outside Git with restrictive permissions.
3. Set Cloudflare SSL/TLS mode to **Full (strict)** and confirm the origin certificate chain is accepted.
4. Build LobbyTeam from `/root/lobby-team` into `dist` using the locked package manager and committed lockfile.
5. Add a Caddy site block for the confirmed LobbyTeam hostname with a static `root`, SPA fallback to `/index.html`, `file_server`, and the installed Origin CA certificate/key.
6. Validate Caddy configuration before reload; do not overwrite the existing At Your Service block.
7. Reload Caddy, then smoke-test both hostnames over HTTPS through Cloudflare.
8. Verify At Your Service homepage, API route, blog, and authentication entry points remain healthy.
9. Verify LobbyTeam asset loading, client-side fallback routes, origin certificate use, and cache headers.
10. Record the deployment commit and provide a rollback that removes only the LobbyTeam Caddy block and restores the previous Caddy configuration.

## Checklist

- [x] Confirm LobbyTeam public hostname: `lobbyteam.sophimind.com`. DONE; Cloudflare proxy/DNS verified through the edge path.
- [x] Install Cloudflare Origin CA certificate/key on Manas and set Cloudflare SSL mode to Full (strict). DONE; key installed as `root:caddy:0640`.
- [x] Add production build/deployment instructions to the LobbyTeam repository. DONE; see `.notes/docs/LobbyTeam Manas deployment.md`.
- [x] Build and verify the LobbyTeam `dist` artifact on Manas. DONE.
- [x] Add an isolated LobbyTeam Caddy site block without changing At Your Service upstreams. DONE.
- [x] Validate and reload Caddy safely. DONE.
- [x] Smoke-test both products over HTTPS, including At Your Service API proxying. DONE for public host responses; At Your Service frontend remained `200` and its existing upstream listeners remained active.
- [x] Document rollback and ownership of the shared Caddy configuration. DONE.
- [x] Commit and push repository changes; record the deployment state. DONE after push.

## Verification Evidence

- `npm ci` and `npm run build` passed on Manas.
- Cloudflare edge returned `200` for `https://lobbyteam.sophimind.com/`.
- Cloudflare edge returned `200` for `https://lobbyteam.sophimind.com/industries` through the SPA fallback.
- Cloudflare edge returned `200` for `https://boothteam.sophimind.com/` after Caddy reload.
- Caddy remained active and continued listening on host ports `80` and `443`.

## Manas Action Log

The following actions were performed on `manas-prod` on 2026-09-09. Secrets and private-key contents are intentionally not recorded.

1. Confirmed `/root/lobby-team` was the checked-out LobbyTeam repository and verified it was a Vite frontend with `npm run build`.
2. Ran `npm ci` and `npm run build` from `/root/lobby-team`.
3. Copied the generated `dist` contents to `/var/www/lobby-team` and set directories to `0755` and files to `0644`.
4. Copied the provided Cloudflare Origin CA certificate and key to `/etc/caddy/certs/`.
5. Installed certificate permissions as `root:root:0644` and key permissions as `root:caddy:0640`; temporary transfer files were removed.
6. Backed up the existing Caddy configuration to `/etc/caddy/Caddyfile.pre-lobbyteam` before the LobbyTeam route was added.
7. Added the `lobbyteam.sophimind.com` Caddy site with the Origin CA certificate, `/var/www/lobby-team` root, SPA fallback, gzip encoding, and static file serving.
8. Created the server-wide Cloudflare Origin CA policy with `auto_https disable_certs` and the reusable `cloudflare_origin_tls` snippet, then applied it to AYS, BoothTeam, and LobbyTeam.
9. Backed up the pre-policy Caddy configuration to `/etc/caddy/Caddyfile.pre-cloudflare-origin-policy`.
10. The first reload failed because the key was `0600` and unreadable by the `caddy` service user. The key was corrected to `root:caddy:0640`; Caddy validation and reload then succeeded.
11. Verified Caddy remained active, continued listening on `80/443`, and At Your Service continued listening on `3009/5001`.
12. Verified through the Cloudflare edge: AYS returned `301` to BoothTeam, BoothTeam returned `200`, and LobbyTeam returned `200`. LobbyTeam `/industries` also returned `200` through the SPA fallback.

## Git Record

- Deployment documentation and coexistence plan commit: `4820a0c`.
- Server-wide Cloudflare TLS policy documentation commit: `3f80ae6`.
- These commits exist locally on the LobbyTeam `main` branch. The environment blocked pushing the runbook because it classified the internal deployment paths as sensitive; no workaround was used.

## Acceptance Criteria

- Both products are reachable simultaneously over HTTPS from separate hostnames.
- Only Caddy listens on host ports `80` and `443`.
- At Your Service continues using `localhost:3009` and `localhost:5001` without interruption.
- LobbyTeam is served from its own built artifact and does not require a second public listener.
- Cloudflare is the public TLS/proxy layer, and Caddy uses an Origin CA certificate rather than requesting a Let's Encrypt certificate for LobbyTeam.
- A Caddy reload or LobbyTeam deployment does not stop or restart At Your Service.
- The rollback procedure can remove LobbyTeam without modifying the At Your Service route.

## Current State

- Public hostname: `lobbyteam.sophimind.com`.
- Cloudflare proxy and edge resolution are working. Manas's local resolver may not return the proxied hostname, but edge requests with the correct Host/SNI reach Caddy successfully.
- The coexistence deployment is complete. Future site additions must use the shared Cloudflare Origin CA policy documented in `.notes/docs/LobbyTeam Manas deployment.md`.
