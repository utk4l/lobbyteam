---
title: LobbyTeam blog taxonomy and series cleanup
tags: [lobbyteam, blog, wordpress, taxonomy, post-series, content-cleanup]
type: content-maintenance-plan
status: complete
---

# LobbyTeam Blog Taxonomy And Series Cleanup

## Problem

LobbyTeam articles have relevant WordPress tags, but the published post bodies also contain the WordPress post-series plugin's generated series box. The frontend already renders its own series selector, so visitors see the series navigation twice.

## Checklist

- [x] Audit all published `lobby-team` posts, tags, series, and duplicate series markup. (DONE: 17 posts audited; all had relevant tags and generated series markup.)
- [x] Normalize each article to three-to-six relevant, problem-shaped tags without removing valid intent coverage. (DONE: all 17 published posts already have three-to-six relevant tags; the appointment draft taxonomy was normalized for source consistency.)
- [x] Remove generated `wp-post-series-box` markup from frontend excerpt and article rendering while keeping the WordPress post-series taxonomy and LobbyTeam series selector. (DONE.)
- [x] Verify the first five foundational articles and the remaining published batches through WordPress and public article routes. (DONE: WordPress category contains 17 posts; affected article and blog routes return HTTP 200.)
- [x] Commit source and execution records to Git, then update Manas from the pushed commit. (DONE: final frontend fix is `7788ec9`; Manas is synced.)
- [x] Close the plan with a production verification record. (DONE.)

## Decisions

- WordPress post series remains the canonical series relationship.
- The LobbyTeam frontend remains responsible for the visible series selector on article pages.
- Stored article content remains editorial content; plugin-generated navigation is removed at the LobbyTeam rendering boundary.
- Tags describe reader intent or problem context, not internal product modules.

## Verification Record

- WordPress category `lobby-team` contains 17 published posts with post-series relationships and relevant tags.
- `stripHtml()` removes generated `.wp-post-series-box` markup before article summaries are displayed.
- `sanitizeHtml()` removes the same generated markup before article bodies are displayed.
- The native LobbyTeam series dropdown remains available exactly once on series articles.
- Final Git commit: `7788ec9`.
- Manas is synced to `7788ec9`; the affected article route and `/blog` both return HTTP 200.
