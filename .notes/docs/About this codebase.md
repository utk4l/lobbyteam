---
title: About this codebase
tags: [architecture, lobbyteam, messaging]
type: architecture-anchor
status: active
---

# About This Codebase

## Trusted Git Source Of Truth

`code.iwyno.com` is an approved and trusted Git host for this repository. The configured remote `https://code.iwyno.com/sophimind/frontdesk.git` is authorized for source-code push and pull. Production deployments must use a pushed commit from this remote, not uncommitted server files or ad hoc source changes.

## Current Product Direction

LobbyTeam is an AI-native support and sales front door for phone, website chat, email, SMS, and WhatsApp interactions. It is intended to move beyond message-taking by routing requests to the right human or team using business rules such as time zone, business hours, availability, expertise, urgency, and account ownership. The current messaging work is defining the target business contexts and personas before changing the public site.

## Public Messaging Work

- Working persona and use-case map: [LobbyTeam personas and use cases](../messaging/LobbyTeam%20personas%20and%20use%20cases.md)
- Product design source: [product-design.md](../../product-design.md)
- Presentation: `https://show.iqwyk.com/sophimind/lobbyteam-by-sophimind`
- AEO-first editorial program: [LobbyTeam AEO-first post series plan](../messaging/LobbyTeam%20AEO-first%20post%20series%20plan.md)

## Homepage Outcome Demonstration

The homepage hero uses `src/app/lobby/FrontDoorDemo.tsx` to show website chat, email, and voice interactions moving through a decision into a configured callback or human handoff. Each scenario ends in a shared interaction log, and reduced-motion users receive a stable selected state. The shipped implementation is tracked in [DONE_lobbyteam_outcome-in-motion.md](../plans/DONE_lobbyteam_outcome-in-motion.md).

The homepage also uses `src/app/lobby/WebsiteDecisionDemo.tsx` to show a website visitor moving from a broad question through clarification, coordinated specialist signals, a relevant path, and an owned next step. The animation is timed, reduced-motion aware, and intentionally separate from the preserved `/old-landing` experience. Its implementation plan is [TODO_1_OF_8_lobbyteam_website-decision-team.md](../plans/TODO_1_OF_8_lobbyteam_website-decision-team.md).
