---
title: LobbyTeam B2B frontline assistant
tags: [lobbyteam, product-strategy, b2b, voice, human-handoff, mobile]
type: feature-plan
status: active
parent: master_execution_plan.md
track_id: lobbyteam-b2b-frontline-assistant
related:
  - ../messaging/LobbyTeam%20comprehensive%20messaging%20guide.md
  - ../messaging/LobbyTeam%20personas%20and%20use%20cases.md
  - ../docs/About%20this%20codebase.md
---

# LobbyTeam B2B Frontline Assistant

## Initiative / Track

- **Initiative:** LobbyTeam application/backend product buildout
- **Track ID:** `lobbyteam-b2b-frontline-assistant`
- **Summary:** Build the B2B multi-channel inbound request-to-resolution layer: receive, understand, handle, hand off, ticket, update, follow through, and verify closure.
- **Owner:** SophiMind product and engineering
- **Priority:** High
- **Status:** Todo/ACTIVE
- **Dependencies:** LobbyTeam application/backend foundation; evolving `app-boothteam` mobile client; verified telephony, recording, consent, routing, and notification capabilities.
- **Launch wedge:** Solopreneurs and small teams where inbound requests arrive through multiple channels and are frequently lost between people, inboxes, and systems.

## Product Insight From Equal AI

Equal AI’s public product shows a clear consumer interaction loop:

1. The assistant answers an inbound call.
2. It uses context and user preferences to decide how to manage the call.
3. The owner receives a notification and can monitor the conversation.
4. The owner can take over while the assistant is still speaking.
5. The call produces a summary, recording, and full conversation history.
6. The owner can customize the questions or messages used during the call.

Equal is B2C and protects an individual’s time. LobbyTeam should adapt the same interaction pattern to B2B operations: protect a small team’s capacity while making sure a customer, visitor, or caller reaches an owned business next step.

## Product Thesis

LobbyTeam should become the business’s request-to-resolution layer: a digital team that receives inbound work from phone, email, website, SMS, and physical-office QR entry points; decides whether it can handle the work, needs a human, or must open a ticket; preserves context across one or more human handoffs; keeps the customer informed; and follows the open loop until closure is verified or explicitly marked unresolved.

There are two deployment modes for the same product loop:

1. **Business-first routing:** A business DID, VoIP number, office line, or service line routes to LobbyTeam first. LobbyTeam answers immediately, handles configured requests, and routes or transfers the rest to the right person.
2. **Owner-coverage routing:** A solopreneur forwards a cell or business number to LobbyTeam when unavailable. LobbyTeam turns an otherwise missed call into managed intake and owned follow-up instead of carrier voicemail.

The B2B promise:

> **LobbyTeam makes sure every inbound request has context, an accountable next action, visible progress, and a path to verified closure.**

## Target Users

- **Primary buyer:** Owner or practice owner of a small business.
- **Operational champion:** Office manager, receptionist, coordinator, dispatcher, or support lead.
- **Human operator:** The person who monitors, takes over, approves, routes, or completes the request.
- **Customer or visitor:** The person who needs an answer, appointment, service, direction, or human help.

## Proposed Capability Set

### Phase 1 — Multi-channel Request Lifecycle

- Phone, email, website, SMS, or physical-office QR entry point receives the request.
- LobbyTeam creates or attaches to one durable request/work item across channel sessions.
- LobbyTeam identifies intent, urgency, customer context, required workflow, and human-only boundaries.
- LobbyTeam handles safe configured work or decides that human work/ticketing is required.
- Operator receives an auditable handoff with context, routing reason, next action, and due time.
- Human or queue acknowledgement is recorded separately from notification delivery.
- LobbyTeam tracks the request through one or more handoffs, customer updates, retries, and overdue escalation.
- Closure requires evidence; otherwise the request remains open or is explicitly marked unresolved.

### Phase 2 — Small-Team Operations

- Routing by request type, expertise, location, hours, availability, and ownership.
- Primary and backup contacts.
- Callback, appointment, rescheduling, and reminder workflows where configured.
- Team inbox or work queue that shows unowned, active, waiting, overdue, resolved, closed, and unresolved requests.
- Mobile notifications and operator actions in `app-boothteam`.
- Human-readable reason for routing and escalation.
- Contact, conversation, request, assignment, handoff, commitment, and closure history across configured channels.

### Phase 3 — Business Front-Door Expansion

- Additional website chat, WhatsApp, kiosk, tablet, and QR entry points.
- Multi-location and follow-the-sun coverage.
- CRM, calendar, ticketing, and service-management integrations.
- Customer progress updates, outbound callbacks, and approved follow-up workflows.
- Outcome analytics: response time, completion, handoff quality, owner response, and follow-up completion.
- Vertical workflow templates for appointment-heavy offices, field service, and support teams.

## B2B Product Translation

| Equal-style consumer capability | LobbyTeam B2B equivalent |
|---|---|
| Screen unknown personal calls | Intake customer, visitor, prospect, or service requests |
| Personal preferences | Business policies, approved knowledge, workflows, permissions, and routing rules |
| Green-card or caller context | Customer profile, intent, urgency, account/location context, and requested outcome |
| Live call monitoring | Operator view of the active interaction and current workflow state |
| Take over call | Human takeover, transfer, callback ownership, or approval step |
| Call summary and recording | Summary, transcript, consent-aware recording, routing reason, owner, and next action |
| Custom questions to caller | Business-defined intake and qualification questions |
| Notification when assistant answers | Alert the responsible person or team when attention is needed |
| Personal call history | Account-level interaction history and follow-through record |

## Non-Goals And Boundaries

- Do not position LobbyTeam as a human-staffed call center.
- Do not promise live monitoring, recording, transfer, or takeover until each channel and provider path is verified.
- Do not make security, emergency, clinical, legal, financial, or other judgment-heavy decisions autonomously.
- Do not expose recordings or transcripts without consent, retention, access-control, and export/delete rules.
- Do not treat “multiple agents” as the product moat; the value is controlled workflow execution, ownership, context, and outcomes.
- Do not build a broad B2B communications suite before one inbound workflow proves useful for a small team.

## First Workflow Recommendation

Start with one **request-to-resolution workflow across the inbound channels the customer already uses**. The initial channel set may include phone, email, website, SMS, and a location-specific QR entry point. The product milestone is not answering one channel; it is carrying one request across channels and people until closure.

1. A customer calls, emails, uses the website, sends an SMS, or scans a location QR code.
2. LobbyTeam creates or attaches to one durable request/work item.
3. It asks the minimum useful questions and checks approved policy and workflow rules.
4. It handles safe defined work or offers the request to the right human or queue.
5. The handoff records delivery, acknowledgement, owner, next action, due time, and routing reason.
6. If work remains open, LobbyTeam follows the backup path, watches deadlines, and updates the customer with factual progress.
7. The request closes only with evidence, or remains open/explicitly unresolved with a reason.

## Success Measures

- Percentage of qualified requests with an acknowledged owner
- Time to first owner
- Handoff acknowledgement and expiry rate
- Customer-update compliance
- Time to resolution
- Verified completion rate
- Reopen rate
- Unresolved and overdue aging
- Customer repetition reduced
- Fully loaded cost per successfully advanced request

## Ordered Implementation / QA Tasks

1. **Todo/ACTIVE — Capability matrix:** Verify phone, email, website, SMS, QR/text/voice entry, forwarding, provider events, notification, handoff, ticketing, customer updates, and mobile actions.
2. **Todo/ACTIVE — Storyboard and workflow scope:** Select one request type that can be carried across supported channels from intake to closure, with one owner/queue, one backup, one fallback, and one success metric.
3. **Todo/ACTIVE — Canonical work model:** Define contact, request/work item, conversation, channel session, assignment, handoff, commitment, external action, customer update, and closure evidence contracts in `lobbyteam`.
4. **Todo/ACTIVE — Lifecycle and handoff state machines:** Define legal transitions, acknowledgement, deadlines, retries, reassignment, reopen, unresolved expiry, idempotency, and reconciliation.
5. **Todo/ACTIVE — Operator experience:** Design web/mobile surfaces for queue visibility, context, accept/reject, takeover, reassignment, customer updates, overdue work, and closure evidence.
6. **Todo/ACTIVE — Safety and consent:** Define AI disclosure, recording, transcript, contact capture, retention, access, opt-out, identity, sensitive-request, emergency, and human-only boundaries.
7. **Todo/ACTIVE — Pilot QA:** Test routine, incomplete, urgent, unknown, duplicate, abandonment, unavailable-owner, failed-integration, failed-handoff, provider-outage, customer-update, and closure scenarios.
8. **Todo/ACTIVE — Outcome evidence:** Measure verified request advancement, time to owner, time to resolution, unresolved aging, reopen rate, customer-update compliance, and fully loaded cost against a baseline.

## Decisions

- LobbyTeam is the B2B product application/backend; `booth-team` remains the separate BoothTeam application/backend.
- `app-boothteam` evolves as the mobile operator surface for both products.
- Solopreneurs and small teams with fragmented inbound work are the sweet spot; appointment-driven, service, support, and phone-dependent workflows are candidate wedges.
- Equal AI is a reference for the interaction loop and operator control, not a model to copy as a consumer call-screening product.
- The first product milestone is one multi-channel request-to-resolution workflow, not a collection of channel-specific bots.
- The product invariant is: every request has durable context, a next action, accountable ownership or an explicit open queue, customer-visible progress, and verified closure or an explicit unresolved state.
