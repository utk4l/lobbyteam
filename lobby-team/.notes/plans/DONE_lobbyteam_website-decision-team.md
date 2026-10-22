---
title: LobbyTeam website decision team positioning
tags: [lobbyteam, website, messaging, decision-team, conversion]
type: implementation-plan
status: complete
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
- [x] Run production build, diff checks, and public-route smoke tests. (DONE: build and diff checks passed; `/`, `/old-landing`, `/faqs`, and `/sitemap.xml` returned HTTP 200.)
- [x] Commit, push, deploy the exact release to Manas, and verify `/` plus `/old-landing`. (DONE: commit `759a01b` is active at `/var/www/releases/lobbyteam/759a01b`; Caddy and content proxy are active.)

## Revised Visual Direction

The previous `FrontDoorDemo` read as a dashboard because the visitor, decision, and handoff were presented as separate static cards with manual tabs. The new hero borrows the stronger mechanics from the preserved legacy `LiveConversation` animation:

- A timed narrative rather than a tabbed panel
- Visitor messages typing into a live website conversation
- A visible “thinking team” moment where context is gathered and the relevant path changes
- A relevant path appearing as the visitor clarifies what they need
- A clear transition from question to recommendation, resource, or human handoff
- A visible interaction timeline showing what LobbyTeam understood and why it chose the next step
- Motion that feels like work happening, not decorative floating cards
- Reduced-motion behavior that freezes on a complete, understandable state

The scene feels like a small operating room behind the website: one agent talks to the visitor while the team interprets the need, finds the relevant path, and prepares the next action.

## Public Visual Flow

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

## Production Verification

- Local Vite production build passed.
- `git diff --check` passed.
- Manas release `/var/www/releases/lobbyteam/759a01b` is active.
- Caddy and `lobbyteam-content.service` are active.
- Cloudflare smoke checks returned HTTP 200 for `/`, `/old-landing`, `/faqs`, and `/sitemap.xml`.

## Follow-Up Visual Refinement

The original decision-team demo was replaced with a communication-first deck inspired by `/old-landing`. It now animates a website chat conversation, a decision to use a phone call, a live waveform and transcript, and a handoff to Derek with the prior context preserved. The revised component passed the production build and diff checks; its deployment is tracked in the follow-up chat log.
