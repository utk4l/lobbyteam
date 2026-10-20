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

LobbyTeam is a digital team that becomes the intake and frontline wherever a business's customers or visitors arrive: phone, website chat, email, SMS, WhatsApp, or configured physical-lobby experiences. It receives the initial request, helps the person get an answer or complete the intended task, and connects them to the right person in the business when human help, judgment, or ownership is needed. It is intended to move beyond message-taking by routing requests using business rules such as time zone, business hours, availability, expertise, urgency, and account ownership.

## Repository Boundaries

This repository is becoming the LobbyTeam application/backend as the product moves from public-site work into operational product work. The current `/app` route is still a presentation/demo surface while that application/backend evolves. `/Users/deepesh/code/booth-team` is the separate BoothTeam product’s web application/backend. `/Users/deepesh/code/app-boothteam` is the mobile application, which will evolve to support both BoothTeam and LobbyTeam. The repository remote is named `frontdesk`, which is an implementation/repository name rather than the customer-facing product name.

## Public Messaging Work

The canonical messaging guide now uses a narrow launch wedge—appointment-driven small offices and lean teams—while retaining the broader business-front-door category for expansion. Its pitch ladder leads with the concrete “digital front desk” outcome, then explains configured workflows, human handoffs, channels, and coordinated specialist automation as supporting proof. Investor messaging describes expansion and defensibility as hypotheses to prove through workflow and outcome data, not established traction.

- Working persona and use-case map: [LobbyTeam personas and use cases](../messaging/LobbyTeam%20personas%20and%20use%20cases.md)
- Product design source: [product-design.md](../../product-design.md)
- Presentation: `https://show.iqwyk.com/sophimind/lobbyteam-by-sophimind`
- AEO-first editorial program: [LobbyTeam AEO-first post series plan](../messaging/LobbyTeam%20AEO-first%20post%20series%20plan.md)

## Interaction Unit Pricing Model

The working pricing model treats one Interaction Unit as one handled customer interaction, regardless of channel. The internal [Interaction Unit Counting Specification](LobbyTeam%20Interaction%20Unit%20Counting%20Specification.md) is the billing recipe: connected phone duration, successfully processed message rows, and deterministic chat turn blocks. Customers are not billed by word count, character count, telecom segment count, token count, or hidden agent actions. Pricing remains a working concept until reconciliation, production billing behavior, and voice-heavy economics are validated. The customer-facing sources are the [pricing concept](../pricing/LobbyTeam%20%24299%20pricing%20concept.md), [buyer FAQ](../messaging/LobbyTeam%20comprehensive%20buyer%20FAQ.md), and `src/app/faq/faqData.tsx`.

## Homepage Outcome Demonstration

The homepage hero uses `src/app/lobby/FrontDoorDemo.tsx` to show website chat, email, and voice interactions moving through a decision into a configured callback or human handoff. Each scenario ends in a shared interaction log, and reduced-motion users receive a stable selected state. The shipped implementation is tracked in [DONE_lobbyteam_outcome-in-motion.md](../plans/DONE_lobbyteam_outcome-in-motion.md).

The homepage also uses `src/app/lobby/WebsiteDecisionDemo.tsx` to show a website visitor moving from a broad question through clarification, coordinated specialist signals, a relevant path, and an owned next step. The animation is timed, reduced-motion aware, and intentionally separate from the preserved `/old-landing` experience. Its shipped implementation is tracked in [DONE_lobbyteam_website-decision-team.md](../plans/DONE_lobbyteam_website-decision-team.md).

## Blog Runtime Cache

The browser WordPress client in `src/app/blog/wordpress.ts` uses a versioned localStorage namespace and validates an empty post response against WordPress's total-count header. If a cached empty page conflicts with a non-zero category, it retries without the cache. This prevents an old empty blog response from hiding published content while preserving stale-content behavior for genuine upstream outages.

The same client removes the WordPress-generated `.wp-post-series-box` before rendering excerpts and article bodies. The LobbyTeam article page owns the visible series dropdown, so the plugin's rendered navigation is not shown a second time.
