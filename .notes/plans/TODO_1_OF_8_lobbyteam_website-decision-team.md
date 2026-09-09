---
title: LobbyTeam website decision team positioning
tags: [lobbyteam, website, messaging, decision-team, conversion]
type: implementation-plan
status: active
---

# LobbyTeam Website Decision Team Positioning

## Objective

Make **A digital decision team for your website** a primary LobbyTeam story. The website should show that LobbyTeam helps visitors understand what a business offers, decide what is relevant to them, and move to the right next step, while preserving the broader phone, email, support, and human-routing story.

## Decisions To Preserve

- LobbyTeam remains outcome-led; “digital decision team” explains the value, not the underlying model.
- The decision team helps visitors understand, compare, ask, qualify, request resources, schedule, or reach a human within approved business guidance.
- LobbyTeam must not imply unrestricted autonomous decisions, clinical/legal/financial advice, or guaranteed conversion.
- The business defines the knowledge, approved claims, workflows, routing rules, escalation rules, and human-only decisions.
- The existing `/old-landing` route remains unchanged.

## Proposed Public Story

> **A digital decision team for your website.**

> When visitors arrive with questions, LobbyTeam helps them understand what you offer, find what fits, and move forward with confidence. It can answer approved questions, compare paths, share relevant resources, and connect the right visitor to the right human with context.

## Implementation Checklist

- [x] Add the website decision-team positioning to the canonical messaging guide. (DONE.)
- [x] Add the use case to the personas/use-cases and comprehensive buyer FAQ documents. (DONE.)
- [x] Update homepage hero and supporting sections so website decision assistance leads alongside phone and support routing. (DONE.)
- [x] Add a visual homepage story showing visitor question → clarification → relevant path → resource or human next step. (DONE: `WebsiteDecisionDemo`.)
- [x] Add or revise homepage CTA language around helping visitors decide what fits. (DONE: `See what fits` and `See it in action`.)
- [x] Verify authority boundaries, unsupported claims, accessibility, responsive layout, and reduced-motion behavior. (DONE by implementation review.)
- [x] Run production build, diff checks, and public-route smoke tests. (Coded/Deploy-QA pending; production build and diff checks passed.)
- [ ] Commit, push, deploy the exact release to Manas, and verify `/` plus `/old-landing`.

## Revised Visual Direction

The current `FrontDoorDemo` should be replaced, not lightly polished. It reads as a dashboard because the visitor, decision, and handoff are presented as separate static cards with manual tabs. The new hero should borrow the stronger mechanics from the preserved legacy `LiveConversation` animation:

- A timed narrative rather than a tabbed panel
- Visitor messages typing into a live website conversation
- A visible “thinking team” moment where context is gathered and the relevant path changes
- Product or service options appearing as the visitor clarifies what they need
- A clear transition from question to recommendation, resource, booking, or human handoff
- A visible interaction timeline showing what LobbyTeam understood and why it chose the next step
- Motion that feels like work happening, not decorative floating cards
- Reduced-motion behavior that freezes on a complete, understandable state

The scene should feel like a small operating room behind the website: one agent talks to the visitor while the team interprets the need, finds the relevant path, and prepares the next action.

## Suggested Visual Flow

1. Visitor arrives on the website with a broad question.
2. The website conversation visibly types the visitor's question.
3. LobbyTeam asks one useful clarifying question while specialist signals appear behind it.
4. The relevant product, service, or workflow card comes forward.
5. LobbyTeam provides an approved answer or resource and offers the right next action.
6. If human judgment is useful, the scene visibly routes to the correct human with context.
7. The decision and next action remain visible in the interaction record.

## Proof And Guardrails

- Use real configured examples rather than generic “AI decides” language.
- Say “helps visitors decide” or “guides visitors to the right next step,” not “makes the decision for them.”
- Do not promise that every visitor becomes a lead, books, buys, or reaches a human immediately.
- Preserve the coordinated-team explanation: one agent engages while specialized agents interpret, apply guidance, and guide the next step.
- Keep the website decision flow distinct from clinical, legal, financial, security, or other accountable decisions.

## Decisions Needed Before Implementation

- Should the new phrase appear as the primary homepage headline or as the first supporting outcome beside the existing front-door story?
- Which product-neutral example should the visual use: choosing a service, comparing solutions, requesting a resource, or asking for a human?
- Should the main CTA be “See what fits,” “Start a conversation,” or “Build your digital decision team”?
