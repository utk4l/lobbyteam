---
title: LobbyTeam guided website tour feature specification
tags: [lobbyteam, feature-spec, website, guided-tour, co-browsing, request-resolution]
type: product-specification
status: planned
parent: ../plans/TODO_lobbyteam_guided_website_tour.md
related:
  - ../messaging/LobbyTeam%20personas%20and%20use%20cases.md
  - ../messaging/LobbyTeam%20comprehensive%20messaging%20guide.md
  - ../plans/TODO_lobbyteam_b2b_frontline_assistant.md
---

# LobbyTeam Guided Website Tour

## 1. Feature summary

The Guided Website Tour lets a website visitor speak with LobbyTeam about who they are and what they need. LobbyTeam then presents a focused, personalized path through the business’s approved website content.

The visitor enters through a visible **Talk to the LobbyTeam** button. The button opens a dedicated route:

`https://{customer-domain}/lobby-team`

Inside that route, the visitor can:

- chat with LobbyTeam;
- use voice when enabled;
- see the relevant pages, services, products, resources, and proof selected for them;
- understand why each item is relevant;
- move through a co-browsable guided view;
- return to standard website navigation;
- ask for a human, booking, quote, callback, or other next step.

This is not an unrestricted AI page builder. LobbyTeam selects and sequences approved content blocks. The renderer controls layout, accessibility, and safety.

## 2. Problem

Many websites are organized around the business’s internal vocabulary. Visitors arrive with a situation, role, question, or desired outcome. They often do not know:

- which product or service applies;
- which page to read first;
- what terminology to search for;
- what proof they should look at;
- whether the business is relevant to them;
- what to do after reading.

The visitor must perform the translation from “my situation” to “your site structure.” That creates confusion, abandonment, weak inquiries, and unnecessary human explanation.

## 3. Product outcome

LobbyTeam should help the visitor reach a confident next action faster than ordinary website navigation.

The product is successful when the visitor can say:

> “This business understands my situation, I can see why this is relevant, and I know what to do next.”

The business is successful when the session creates a better-qualified next step with durable context, such as:

- a booking;
- a quote or inquiry;
- a product/service selection;
- a human conversation;
- a tracked request;
- a resource path the visitor can share or revisit.

## 4. Product principles

### Personalize the path, not the truth

LobbyTeam can select and sequence approved information. It cannot invent business facts, claims, prices, availability, eligibility, guarantees, or proof.

### Explain relevance

Every recommended page, content block, product, or action should have a plain-language reason:

> “You said you manage a multi-location team, so this section explains how the service handles shared ownership and routing.”

### One clear next action

The experience should not end with an endless content carousel. Each stage should offer a useful next action, while preserving the ability to ask another question.

### Preserve continuity

The visitor’s role, goal, questions, content path, and selected next action must remain available if the session becomes a LobbyTeam request or human handoff.

### Be honest about status

The system must distinguish:

- content was shown;
- a recommendation was made;
- a request was created;
- a human was notified;
- a human accepted ownership;
- an action completed;
- the visitor confirmed the result.

### Keep the normal website available

The visitor must be able to leave the guided experience, return to the original site, or navigate normally. LobbyTeam is an assistive path, not a trap.

## 5. Target users

### Visitor

Wants to understand relevance without learning the business’s navigation or terminology.

### Website owner or marketing lead

Wants more qualified actions from existing traffic and better insight into what visitors are trying to accomplish.

### Sales, service, or operations owner

Wants visitor intent, questions, and content context preserved when a person must take over.

### Content owner

Wants control over approved facts, proof, audience metadata, expiration, ownership, and review.

## 6. End-to-end experience

### 6.1 Standard website entry

The host site displays a CTA:

`Talk to the LobbyTeam`

The CTA may be placed in the header, hero, navigation, contact area, or relevant content sections. The initial implementation should use one stable route rather than a complex embedded widget.

The route may receive signed or validated context:

- source URL;
- referrer;
- site/location ID;
- campaign or attribution ID;
- selected product/service ID;
- language;
- existing visitor session ID, when permitted.

Do not put sensitive customer data in the URL.

### 6.2 Welcome

LobbyTeam should explain:

- what it can help with;
- that it is an automated LobbyTeam experience when disclosure is required;
- whether voice, recording, transcription, or follow-up is available;
- how to return to normal navigation.

Example:

> “Tell me what you are trying to accomplish, and I’ll show you the parts of this business that are most relevant. You can type, use your voice, or continue browsing normally.”

### 6.3 Context capture

LobbyTeam should ask the minimum useful questions. Possible fields include:

- role or identity category;
- organization or business type;
- situation or problem;
- desired outcome;
- urgency or timing;
- location or service area;
- relevant product/service interest;
- preferred next action.

The system should not require a long form before showing value. It should use progressive disclosure.

### 6.4 Guided path generation

LobbyTeam retrieves eligible approved content blocks and constructs a guided view specification.

The selection process should consider:

- visitor-stated role;
- visitor-stated goal;
- current site context;
- content audience metadata;
- product/service relationships;
- proof and resource relationships;
- business rules;
- language and accessibility;
- content freshness;
- confidence and ambiguity.

When confidence is low or content is contradictory, LobbyTeam should ask a clarifying question or show the standard website path. It should not confidently generate a personalized answer from weak evidence.

### 6.5 Guided view

The view may contain:

- a plain-language summary of the visitor’s stated goal;
- recommended path overview;
- relevant product/service cards;
- proof or case-study blocks;
- FAQs or resources;
- comparison blocks;
- next-action cards;
- human-help CTA;
- “why this is relevant” explanations;
- progress indicator;
- return-to-site control.

The view must be rendered from a typed schema. The model may select and order allowed blocks, but does not return arbitrary HTML, scripts, CSS, or navigation controls.

### 6.6 Co-browsing

The first version should implement guided co-browsing as shared focus over the generated view, not remote control of the visitor’s entire browser.

The visitor should be able to see:

- the active content block;
- the reason it was selected;
- the next recommended block;
- which questions have been answered;
- which next actions are available.

Later versions may support live human co-browsing or synchronized navigation, but that requires additional consent, privacy, session-control, and security design.

### 6.7 Text and voice

Text and voice are two channel sessions over one tour session.

Switching modes must preserve:

- visitor context;
- conversation summary;
- current guided-view position;
- selected content;
- unanswered questions;
- next-action options;
- consent and recording state.

Voice must not silently enable recording or transcription. The visitor must see the active mode and relevant disclosure.

### 6.8 Next action

The experience should offer one primary next action, with secondary options. Possible actions include:

- book a meeting or appointment;
- request a quote;
- ask a human;
- start a callback request;
- send a resource;
- submit a service request;
- continue to a product/service page;
- create an open tracked request.

Every action must create an auditable event. Consequential actions require confirmation and idempotency.

### 6.9 Handoff to LobbyTeam operations

When the visitor asks for a human or selects a tracked action, create or attach to a LobbyTeam request/work item containing:

- visitor/contact data permitted by consent;
- stated role and goal;
- questions asked and answered;
- content shown and versions;
- paths selected and skipped;
- visitor uncertainty or unresolved questions;
- requested outcome;
- consent and contact preferences;
- suggested owner or queue;
- next action and due time;
- source URL and campaign context;
- tour session ID.

The receiving human should not need to ask the visitor to repeat the tour.

## 7. Content system

### 7.1 Content block types

Initial supported types:

- `summary`;
- `product_or_service`;
- `problem_solution`;
- `proof`;
- `comparison`;
- `faq`;
- `resource`;
- `case_study`;
- `call_to_action`;
- `human_handoff`.

### 7.2 Content block fields

Required fields:

- stable ID;
- type;
- title;
- body or structured fields;
- source URL or source record;
- audience/role tags;
- problem/goal tags;
- product/service relationships;
- supported claims;
- owner;
- version;
- effective timestamp;
- review timestamp;
- expiry timestamp when applicable;
- visibility and permission policy;
- accessibility metadata;
- allowed calls to action.

### 7.3 Content approval

Only approved and active content may be shown in a guided view.

Content must support:

- draft;
- review;
- approved;
- active;
- expired;
- withdrawn;
- archived.

If a content block is withdrawn, new tours must not use it. Existing sessions should either preserve a historical reference or replace it with a safe fallback.

## 8. Guided-view contract

The model or selection service returns a typed view specification similar to:

```json
{
  "tourSessionId": "tour_123",
  "title": "A useful path for your operations team",
  "visitorGoal": "Understand how requests are routed across locations",
  "sections": [
    {
      "contentBlockId": "content_456",
      "type": "problem_solution",
      "reasonShown": "Matches the visitor's stated multi-location routing need",
      "sourceUrl": "/workflows/multi-location-routing",
      "contentVersion": "2026-10-20T12:00:00Z",
      "actions": ["read_more", "ask_question", "talk_to_human"]
    }
  ],
  "primaryNextAction": {
    "type": "talk_to_human",
    "label": "Talk to the right person"
  },
  "fallback": {
    "type": "standard_navigation",
    "reason": "No approved content path met the confidence threshold"
  }
}
```

The actual schema is an engineering decision, but it must enforce:

- approved content IDs only;
- known versions only;
- allowed block types only;
- allowed actions only;
- no arbitrary markup or scripts;
- provenance for every displayed fact;
- a safe fallback.

## 9. State model

### Tour session lifecycle

`created` → `welcomed` → `context-gathering` → `path-proposed` → `path-active` → `next-action-offered` → `converted` / `abandoned` / `fallback` / `expired`.

### Request lifecycle after conversion

`new` → `triaged` → `waiting-on-human` / `in-progress` → `waiting-on-customer` / `waiting-on-business` → `resolved` → `closed`.

### Handoff lifecycle

`offered` → `delivered` → `viewed` → `accepted` / `rejected` / `expired` → `reassigned`.

A notification being delivered does not mean a human accepted the work.

## 10. API and integration surface

The first implementation should define contracts for:

### Session

- create tour session;
- attach source-site context;
- resume tour session;
- expire tour session;
- retrieve current tour state.

### Conversation

- send visitor text;
- start/end voice session;
- switch text/voice mode;
- retrieve safe conversation summary;
- record consent and disclosure state.

### Content

- retrieve eligible content blocks;
- validate content version and permissions;
- create guided-view specification;
- record content shown;
- withdraw or expire content.

### Actions

- create booking/request/callback;
- request human handoff;
- create or attach work item;
- send customer update;
- reopen request;
- record closure evidence.

All external writes require:

- tenant/account authorization;
- idempotency key;
- timeout and retry policy;
- provider response capture;
- reconciliation path;
- audit event.

## 11. Privacy and security

- Do not place sensitive visitor data in route parameters.
- Scope content access to the business, site, location, and visitor authorization.
- Separate customer-visible content from internal notes and restricted content.
- Redact secrets and unnecessary personal data before model calls and logs.
- Record consent separately for follow-up, voice, recording, transcription, and marketing.
- Apply retention rules to tour transcripts, voice recordings, summaries, analytics, and audit events separately.
- Support deletion, export, correction, and offboarding.
- Prevent cross-tenant retrieval and cross-customer context leakage.
- Protect against prompt injection in content, URLs, forms, CRM data, and visitor messages.
- Provide a kill switch for the tour, voice, content block, and outbound action independently.

## 12. Accessibility

The route and renderer must support:

- keyboard-only navigation;
- screen readers and semantic landmarks;
- visible focus;
- reduced motion;
- high contrast;
- readable text sizing;
- captions and transcripts for voice;
- text alternative for every visual recommendation;
- no time-limited interaction without extension;
- escape to normal site navigation;
- clear error and fallback states.

## 13. Analytics

### Event taxonomy

- `tour_cta_viewed`;
- `tour_started`;
- `tour_welcomed`;
- `visitor_context_submitted`;
- `clarifying_question_asked`;
- `content_block_shown`;
- `content_block_opened`;
- `content_path_changed`;
- `text_voice_switched`;
- `fallback_shown`;
- `next_action_offered`;
- `next_action_selected`;
- `human_handoff_requested`;
- `request_created`;
- `request_owner_acknowledged`;
- `request_resolved`;
- `request_reopened`;
- `tour_abandoned`.

### Primary measures

- time to first relevant content;
- meaningful next-action rate;
- qualified request rate;
- human handoff completeness;
- request owner acknowledgement rate;
- request closure rate;
- time to request resolution;
- fallback rate;
- content correction rate;
- cost per successfully advanced request.

Do not optimize the first experiment for time on page, number of messages, tour length, or model activity.

## 14. Acceptance criteria

The first release is acceptable only when:

1. The Talk to the LobbyTeam CTA opens `/lobby-team` with validated source context.
2. A visitor can complete the first experience without filling a long form.
3. The system can identify one supported visitor goal and select approved content for it.
4. Every displayed content block has a source, version, and reason shown.
5. The view uses typed approved blocks and cannot render arbitrary model HTML or scripts.
6. The visitor can ask follow-up questions and return to standard navigation.
7. The primary next action creates a durable event and is idempotent.
8. A human request creates a LobbyTeam work item with the tour context attached.
9. The receiving human can see what the visitor said and what content they saw.
10. The system does not claim that a human accepted work until acknowledgement exists.
11. Stale, conflicting, unsupported, or withdrawn content triggers clarification or safe fallback.
12. Keyboard, screen-reader, reduced-motion, text-only, and voice-transcript paths work.
13. Privacy, consent, retention, and redaction behavior are tested.
14. Provider failure, model failure, duplicate action, abandonment, and route refresh are recoverable.
15. Analytics can compare guided sessions with normal navigation.
16. The team can disable the feature or a content block without a code deployment.

## 15. QA scenarios

### Happy path

- Visitor states role and goal.
- LobbyTeam selects three relevant approved blocks.
- Visitor follows the guided path.
- Visitor selects a booking or human action.
- Work item is created with complete context.

### Ambiguity

- Visitor gives an underspecified goal.
- LobbyTeam asks one focused question.
- It does not over-personalize before enough context exists.

### Unsupported request

- Visitor asks for a claim not present in approved content.
- LobbyTeam says it cannot verify the answer and offers a human or standard navigation.

### Stale content

- A content block is expired or withdrawn during a session.
- New display is blocked or replaced with a safe fallback.

### Handoff

- Visitor asks for a human.
- Work item is created.
- Queue receives it.
- Customer sees factual status.
- No human acknowledgement keeps the request open and triggers fallback.

### Voice switch

- Visitor moves from text to voice.
- Tour position, context, content, and consent state remain consistent.

### Failure

- Content service unavailable.
- Model unavailable.
- Request write times out.
- Analytics fails.
- Visitor refreshes or returns later.

The visitor must receive a safe, understandable fallback and the business must retain enough audit information to recover the request.

## 16. Rollout sequence

### Phase 0: Content and experience design

Choose one audience, one recurring question, one content library, and one next action. Produce the content inventory and manual guided-tour prototype.

### Phase 1: Text route prototype

Ship `/lobby-team`, CTA, session state, text interaction, typed guided view, standard-navigation fallback, and analytics.

### Phase 2: Request integration

Connect the primary next action to the LobbyTeam request/work-item model, including human handoff, context preservation, ownership, customer updates, and closure tracking.

### Phase 3: Co-browse and voice

Add active-block focus, text/voice continuity, transcript, consent, and voice fallback after the text route is reliable.

### Phase 4: Outcome experiment

Compare guided and normal navigation for one customer and one audience. Review next-action quality, request closure, cost, accessibility, and content corrections.

### Phase 5: Expansion

Add more audiences, content libraries, shared links, stakeholder collaboration, CRM integration, and vertical templates only after the first experiment proves a meaningful outcome.

## 17. Go/no-go decision

Expand only if the feature demonstrates all three:

1. Visitors reach a meaningful next action faster or more reliably than normal navigation.
2. The business receives better-qualified requests with usable context.
3. The experience operates within acceptable content, privacy, accessibility, reliability, and unit-cost limits.

If the only improvement is longer sessions or positive novelty feedback, do not expand the feature.
