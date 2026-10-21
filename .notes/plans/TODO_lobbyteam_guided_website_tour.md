---
title: LobbyTeam guided website tour
tags: [lobbyteam, product, website, co-browsing, personalization, conversion]
type: feature-plan
status: active
parent: master_execution_plan.md
track_id: lobbyteam-guided-website-tour
related:
  - ../docs/LobbyTeam%20guided%20website%20tour%20feature%20specification.md
  - ../messaging/LobbyTeam%20personas%20and%20use%20cases.md
  - ../messaging/LobbyTeam%20comprehensive%20messaging%20guide.md
  - TODO_lobbyteam_b2b_frontline_assistant.md
---

# LobbyTeam Guided Website Tour

## Initiative / Track

- **Initiative:** LobbyTeam request-to-resolution product expansion
- **Track ID:** `lobbyteam-guided-website-tour`
- **Summary:** Let a website visitor open `/lobby-team`, explain who they are and what they need, and receive a personalized, co-browsable path through approved website content using text or voice.
- **Owner:** SophiMind product and engineering
- **Priority:** Medium, later phase
- **Status:** Todo/ACTIVE
- **Dependencies:** LobbyTeam request/work-item model; approved content model; website route and embedding strategy; text and voice interaction capability; privacy, accessibility, analytics, and human-handoff controls.
- **Launch boundary:** This is not a Phase 1 promise. The first release should prove guided relevance for one audience, one recurring question, and one measurable next action.

## Product thesis

Visitors often know the problem they are trying to solve but do not know the company’s vocabulary, navigation, product map, or best next step. Static pages make the visitor do the translation work.

LobbyTeam should turn that exploration into a guided conversation:

> **Tell LobbyTeam who you are and what you are trying to accomplish. It will show you the few parts of the business that matter, explain why they matter, and help you take the next step.**

The experience is not unrestricted page generation. It is a personalized path composed from approved content blocks, page metadata, product/service records, resources, proof, and calls to action.

## User experience

### Entry

The host website displays a visible call to action:

> **Talk to the LobbyTeam**

Activating it opens:

`https://{customer-domain}/lobby-team`

The route carries the source-site, location, campaign, and entry-point context needed to preserve continuity. It should work as a dedicated route first. An embedded or side-panel mode can follow after the route experience is reliable.

### Guided interaction

1. LobbyTeam welcomes the visitor and explains the experience.
2. It asks who the visitor is or what role they have, only when useful.
3. It asks what they are trying to accomplish.
4. It identifies the relevant approved content, products, services, proof, and next steps.
5. It presents a focused guided view instead of sending the visitor through generic navigation.
6. The visitor can ask follow-up questions by text or voice.
7. The visitor can co-browse the presented path and return to standard navigation.
8. LobbyTeam offers one clear next action, such as read, compare, book, request help, contact a human, or create a tracked request.
9. If a human is needed, the request carries the tour context, questions, content shown, uncertainty, and requested outcome into the LobbyTeam work lifecycle.

### Design principle

> **Personalize the path, not the truth.**

Every displayed section should answer:

1. Why am I seeing this?
2. What does it prove?
3. What should I do next?

## Personas

### Visitor

Needs to understand whether the business is relevant without learning the company’s information architecture first.

### Website owner or marketing lead

Needs more qualified visitors to reach a useful action without rewriting the whole website for every audience.

### Sales, service, or operations owner

Needs the visitor’s intent and context to survive the transition from website exploration to a human request.

### Content owner

Needs control over which content can be shown, in what context, with what proof, and with what expiry or review state.

## Scope

### In scope for the first experiment

- Talk to the LobbyTeam CTA.
- Dedicated `/lobby-team` route.
- Visitor role and goal capture.
- Text conversation.
- Approved content selection and sequencing.
- Dynamic guided view using reusable content blocks.
- Explanation of why a block or path was shown.
- One next-action CTA.
- Context record for the session and resulting request.
- Basic analytics against normal website navigation.
- Safe return to the standard website.

### Later in the track

- Voice conversation over the same tour state.
- Live human co-browsing or takeover.
- Shared links for a buyer or team to revisit the guided path.
- Multi-stakeholder buying rooms.
- CRM and marketing-automation updates.
- Industry-specific tour templates.
- Adaptive recommendations based on verified outcome data.

### Out of scope for the first experiment

- Arbitrary AI-generated pages.
- Unsupported product, price, eligibility, legal, medical, financial, or safety claims.
- Autonomous commitments on behalf of the business.
- Personalization based on sensitive attributes without explicit authorization.
- Replacing the customer’s CMS or website navigation.
- Claiming conversion lift before a measured comparison exists.

## Canonical data and system contracts

The feature must connect to the broader LobbyTeam request-to-resolution model.

### Tour session

Stores:

- visitor/session identifier;
- source URL and entry-point context;
- business, site, location, and campaign context;
- visitor-provided role and goal;
- questions asked and answers given;
- content blocks and paths shown;
- content provenance and versions;
- text/voice channel sessions;
- next actions offered and selected;
- consent and privacy state;
- resulting request/work-item ID, if created.

### Content block

Every block should have:

- stable ID;
- source URL or business record;
- approved title and body;
- audience, role, problem, and intent metadata;
- supported claims and proof;
- call to action;
- owner;
- effective date and review/expiry date;
- visibility and permission rules;
- accessibility requirements;
- version and provenance.

### Guided view

The system should produce a structured view specification, not raw arbitrary HTML. The view may contain approved sections, cards, comparisons, proof, resources, questions, and calls to action. The renderer owns layout and accessibility; LobbyTeam selects and sequences approved content.

## Safety, trust, and accessibility requirements

- Identify the experience as LobbyTeam or an automated assistant where required.
- Do not imply that generated relevance is verified customer identity.
- Distinguish visitor-provided facts from business-verified facts.
- Do not expose private CRM, account, internal-note, or restricted content.
- Use approved content only, with provenance and version traceability.
- Abstain or route to a human when content is stale, contradictory, missing, or uncertain.
- Support keyboard navigation, screen readers, focus management, reduced motion, and a standard-navigation fallback.
- Do not trap the visitor inside the guided view.
- Make text-to-voice and voice-to-text state changes visible.
- Record consent separately for follow-up, recording, and other contact purposes.
- Redact sensitive visitor data from analytics, notifications, and logs.
- Let the business disable a content block or the entire tour immediately.

## Success measures

The first experiment must compare guided visitors with a normal-navigation baseline where possible.

- Time to first relevant content.
- Percentage reaching a meaningful next action.
- Qualified inquiry or booking rate.
- Human handoff completeness.
- Visitor-reported confidence or clarity.
- Repeat questions reduced.
- Tour abandonment rate.
- Percentage of sessions requiring fallback to normal navigation.
- Cost per successfully advanced request.
- Resulting request closure rate when a work item is created.

Do not use time-on-page or tour length as the primary success metric.

## Ordered implementation and QA checklist

1. **Todo/ACTIVE — Experience contract:** Define the `/lobby-team` route, CTA behavior, session continuity, text interaction, standard-navigation fallback, and first next-action contract.
2. **Todo/ACTIVE — Content contract:** Define content blocks, metadata, provenance, approval, versioning, expiry, owner, accessibility, and visibility rules.
3. **Todo/ACTIVE — Guided-view schema:** Define the structured view specification and renderer boundary. Prohibit arbitrary model-generated HTML in the first release.
4. **Todo/ACTIVE — Visitor context:** Define role, goal, questions, source, campaign, consent, and privacy fields, including data-minimization rules.
5. **Todo/ACTIVE — Request integration:** Attach the tour session to the canonical LobbyTeam request/work item when the visitor selects a human, booking, inquiry, or other tracked action.
6. **Todo/ACTIVE — Text prototype:** Build one audience, one recurring question, one approved content library, and one next action.
7. **Todo/ACTIVE — Co-browse prototype:** Show the selected content path and the active block being discussed. Support return to normal navigation.
8. **Todo/ACTIVE — Voice mode:** Add voice only after text state and guided-view continuity are reliable.
9. **Todo/ACTIVE — Safety and accessibility QA:** Test stale content, conflicting content, unsupported questions, prompt injection, sensitive data, consent refusal, keyboard navigation, screen readers, reduced motion, and fallback.
10. **Todo/ACTIVE — Outcome experiment:** Compare guided and normal navigation, measure qualified next actions, and review request closure outcomes.
11. **Todo/ACTIVE — Go/no-go review:** Expand only if the experience improves a meaningful next action without unacceptable content, privacy, accessibility, or operating cost failures.

## Decisions

- The feature is a guided relevance and request-advancement experience, not a generic tour builder.
- `/lobby-team` is the initial product route.
- The Talk to the LobbyTeam CTA is the primary entry point.
- Text and voice are interaction modes over one guided-tour state.
- Co-browsing shows a structured view composed from approved content blocks.
- The renderer controls layout and accessibility; the model does not generate unrestricted page markup.
- A tour session becomes part of the request-to-resolution lifecycle when it creates a tracked next action.
- The first proof is improved qualified next action, not engagement novelty.
- This feature remains later phase and is not a Phase 1 capability claim.

## Risks

- Visitors may prefer normal browsing or asynchronous content.
- Personalization may require too much content preparation.
- The experience may become a polished slide show without business impact.
- Existing interactive-demo, co-browsing, support, or sales tools may cover the generic feature set.
- Voice and co-browsing may create disproportionate cost or privacy complexity.
- Incorrect recommendations or stale content may damage trust.
- The customer may not connect the experience to an accountable human or measurable closure.

## Decision gate

Proceed beyond the first experiment only if the evidence shows that guided relevance helps visitors reach a qualified next action faster or more reliably than standard navigation, and the resulting requests can enter LobbyTeam with durable context and closure tracking.
