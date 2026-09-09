---
title: LobbyTeam blog taxonomy and series cleanup
tags: [lobbyteam, blog, wordpress, taxonomy, post-series, content-cleanup]
type: content-maintenance-plan
status: active
---

# LobbyTeam Blog Taxonomy And Series Cleanup

## Problem

LobbyTeam articles have relevant WordPress tags, but the published post bodies also contain the WordPress post-series plugin's generated series box. The frontend already renders its own series selector, so visitors see the series navigation twice.

## Checklist

- [ ] Audit all published `lobby-team` posts, tags, series, and duplicate series markup.
- [ ] Normalize each article to three-to-six relevant, problem-shaped tags without removing valid intent coverage.
- [ ] Remove only the generated `wp-post-series-box` markup from stored post content; keep the frontend series selector and post-series taxonomy.
- [ ] Verify the first five foundational articles and the remaining published batches through WordPress and public article routes.
- [ ] Commit source and execution records to Git, then update Manas from the pushed commit.
- [ ] Close the plan with a production verification record.

## Decisions

- WordPress post series remains the canonical series relationship.
- The LobbyTeam frontend remains responsible for the visible series selector on article pages.
- Stored article content should contain only editorial content, not plugin-generated navigation markup.
- Tags describe reader intent or problem context, not internal product modules.
