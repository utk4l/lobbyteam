---
title: LobbyTeam website decision team positioning
tags: [lobbyteam, website, messaging, decision-team, conversion]
type: implementation-plan
status: proposed
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

- [ ] Add the website decision-team positioning to the canonical messaging guide.
- [ ] Add the use case to the personas/use-cases and comprehensive buyer FAQ documents.
- [ ] Update homepage hero and supporting sections so website decision assistance leads alongside phone and support routing.
- [ ] Add a visual homepage story showing visitor question → clarification → relevant path → resource or human next step.
- [ ] Add or revise homepage CTA language around helping visitors decide what fits.
- [ ] Verify authority boundaries, unsupported claims, accessibility, responsive layout, and reduced-motion behavior.
- [ ] Run production build, diff checks, and public-route smoke tests.
- [ ] Commit, push, deploy the exact release to Manas, and verify `/` plus `/old-landing`.

## Suggested Visual Flow

1. Visitor arrives with a broad question.
2. LobbyTeam identifies the visitor's goal and asks one useful clarifying question.
3. LobbyTeam connects the need to a relevant product, service, or workflow.
4. LobbyTeam provides an approved answer or resource.
5. If human judgment is useful, LobbyTeam routes the visitor to the correct human with context.
6. The decision and next action remain visible in the interaction record.

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
