---
title: LobbyTeam modern office front-desk series
tags: [lobbyteam, blog, wordpress, aeo, front-desk, office-operations]
type: publishing-plan
status: complete
---

# LobbyTeam Modern Office Front-Desk Series

## Objective

Implement the next AEO-first editorial batch from the LobbyTeam strategy: five articles for office owners, office managers, receptionists, and coordinators who need better front-desk coverage without replacing accountable staff.

## Article Batch

1. What should an office receptionist automate first?
2. How to handle more office calls without making customers wait
3. How to reduce repetitive questions at the front desk
4. How to manage calls, visitors, and appointments when the receptionist is busy
5. How an office can route callers to the right person without transferring them blindly

## Checklist

- [x] Draft all five articles using the AEO quality gate and human-boundary requirements. (DONE)
- [x] Create or reuse the WordPress post series and create only relevant intent tags. (DONE: series `modern-office-front-desk`, ID `774`.)
- [x] Publish or idempotently update all five posts under category `lobby-team`. (DONE: posts `1615`–`1619`, category ID `764`.)
- [x] Commit the source drafts, strategy status, and publishing record to Git. (DONE.)
- [x] Deploy the current LobbyTeam frontend from Git on Manas and verify blog discovery routes. (DONE: exact Git release synced and static build installed.)
- [x] Verify article routes, post-series metadata, tags, category isolation, and sitemap entries. (DONE: all five article routes, series metadata, tags, category, and sitemap verified from Manas.)

## Decisions

- Keep the series focused on office front-desk outcomes: fewer interruptions, clearer intake, and better human ownership.
- Explain LobbyTeam after the operating problem, not as the first sentence of every article.
- State that LobbyTeam works alongside receptionists and does not replace security, emergency response, identity verification, or accountable office decisions.
- Use the post-series slug `modern-office-front-desk` and publish all five articles under it.

## Verification Record

- WordPress category: `lobby-team` (ID `764`).
- WordPress series: `modern-office-front-desk` (ID `774`).
- Published posts: `1615`–`1619`.
- Public checks from Manas: `/blog`, all five article routes, and `/sitemap.xml` returned HTTP 200.
- Source of truth: pushed Git commit recorded in the final chat-log entry.
