---
title: LobbyTeam messaging pitches guideline
tags: [lobbyteam, messaging, positioning, pitches, sales-enablement]
type: feature-plan
status: active
parent: master_execution_plan.md
track_id: lobbyteam-messaging-pitches
related:
  - ../messaging/LobbyTeam%20comprehensive%20messaging%20guide.md
  - ../messaging/LobbyTeam%20comprehensive%20buyer%20FAQ.md
  - ../messaging/LobbyTeam%20personas%20and%20use%20cases.md
---

# LobbyTeam Messaging Pitches Guideline

## Initiative / Track

- **Initiative:** LobbyTeam product positioning and sales enablement
- **Track ID:** `lobbyteam-messaging-pitches`
- **Summary:** Consolidate the product story into reusable 30-second, 60-second, 90-second, investor, and outcome-oriented target-customer pitches.
- **Owner:** SophiMind product and marketing
- **Priority:** High
- **Status:** Todo/ACTIVE
- **Dependencies:** Confirmed LobbyTeam product definition; existing canonical messaging, FAQ, personas, and outcome-led source copy.
- **Risk:** Overstating capabilities that are still marked for production verification, especially phone, outbound, routing, integrations, and live handoffs.

## Problem

LobbyTeam has strong positioning material spread across several documents. The existing short pitches are useful but need one clear guideline that explains when to use each length and provides long-form narratives for investors and target customers. Without that structure, the product can sound like an AI receptionist, chatbot, or generic automation tool instead of a digital frontline that turns customer arrival into progress.

## Goal

Create one canonical pitch guideline inside the existing LobbyTeam comprehensive messaging guide. Every pitch should consistently explain:

1. LobbyTeam is a digital team and frontline intake for a business.
2. It receives customers wherever they arrive.
3. It helps answer, complete, route, and follow through on requests.
4. It connects people to the right human with context when needed.
5. The business controls its knowledge, workflows, permissions, routing, and human boundaries.

## Scope

- Rewrite the 30-second pitch for fast introductions.
- Rewrite the 60-second pitch for a clearer problem-to-outcome explanation.
- Rewrite the 90-second pitch for a fuller product and differentiation explanation.
- Add a long-form investor pitch focused on category, wedge, operating model, defensibility, expansion, and measurable business value without unsupported financial claims.
- Add a long-form outcome-oriented target-customer pitch focused on the buyer’s operational pain, customer experience, workflow, human handoff, and first measurable use case.
- Add usage guidance, audience, purpose, and claim guardrails for each pitch length.
- Keep all claims aligned with the canonical FAQ, personas, AEO plan, landing critique, and source marketing copy.
- Preserve the distinction between current/configured capabilities and capabilities requiring production verification.

## Out Of Scope

- Changing the public website copy or application code.
- Final pricing, financial projections, market-size claims, or investor metrics that have not been verified.
- Claiming universal channel support, live transfer, outbound calling, or integration behavior without production evidence.
- Replacing the existing comprehensive messaging guide with a second parallel guide.

## Acceptance Criteria

- [x] **DONE — Pitch architecture:** The guide explains the purpose, audience, and appropriate use of each pitch length.
- [x] **DONE — Short pitches:** The guide contains polished 30-second, 60-second, and 90-second pitches with consistent product language.
- [x] **DONE — Investor pitch:** The guide contains a long-form investor narrative covering the problem, product category, wedge, differentiation, operating model, expansion path, and risks without invented proof.
- [x] **DONE — Target-customer pitch:** The guide contains a long-form outcome-oriented narrative covering persona, problem, benefit, proof, boundaries, and a practical starting workflow.
- [x] **DONE — Claim safety:** The guide labels configured or verification-dependent capabilities and avoids presenting future work as generally available.
- [x] **DONE — Cross-document alignment:** The new material agrees with the buyer FAQ, personas/use-cases guide, AEO plan, landing critique, architecture anchor, and source marketing copy.
- [x] **DONE — Editorial QA:** The document is junior-developer and sales-team friendly, uses plain language, and passes `git diff --check`.

## Ordered Implementation / QA Tasks

1. Read and reconcile the source marketing copy and all existing LobbyTeam messaging documents.
2. Define the pitch ladder and audience/use-case for each pitch length.
3. Draft and insert the five canonical pitches into the existing comprehensive messaging guide.
4. Add usage notes, proof guidance, and claim boundaries.
5. Review the full guide for contradictory wording or unsupported capability claims.
6. Run Markdown and Git whitespace checks; update the architecture anchor and chat log.

## Decisions

- The existing `LobbyTeam comprehensive messaging guide.md` remains the canonical target document.
- “Digital team” and “digital frontline” are the primary product metaphors; “AI receptionist” is a comparison category, not the core identity.
- The central outcome is progress: an answer, a completed request, a scheduled next step, or a useful handoff with clear ownership.
- Investor language will describe the opportunity and operating model without inventing traction, revenue, market size, or performance metrics.
- Customer language will lead with the buyer’s operational problem and desired result before describing agents or technical architecture.
