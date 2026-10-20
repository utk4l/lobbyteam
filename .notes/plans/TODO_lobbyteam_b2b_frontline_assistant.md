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
  - ../messaging/LobbyTeam%20personas%20and%20use%20cases.md
  - ../docs/About%20this%20codebase.md
---

# LobbyTeam B2B Frontline Assistant

## Initiative / Track

- **Initiative:** LobbyTeam application/backend product buildout
- **Track ID:** `lobbyteam-b2b-frontline-assistant`
- **Summary:** Build the B2B first-response layer for business phone and customer-entry channels: answer, understand, monitor, take over, route, summarize, notify, and follow through.
- **Owner:** SophiMind product and engineering
- **Priority:** High
- **Status:** Todo/ACTIVE
- **Dependencies:** LobbyTeam application/backend foundation; evolving `app-boothteam` mobile client; verified telephony, recording, consent, routing, and notification capabilities.
- **Launch wedge:** Solopreneurs and small teams with an inbound business line, especially appointment-driven or phone-dependent teams.

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

LobbyTeam should become the business’s first-response layer: the digital front desk that answers a configured inbound line or channel before the request disappears into voicemail, a queue, or an unowned inbox. For a small business, that frontline should be able to receive an inbound request immediately, understand the need, complete safe defined work, show the responsible person what is happening, and transfer control with context when human judgment is needed.

There are two deployment modes for the same product loop:

1. **Business-first routing:** A business DID, VoIP number, office line, or service line routes to LobbyTeam first. LobbyTeam answers immediately, handles configured requests, and routes or transfers the rest to the right person.
2. **Owner-coverage routing:** A solopreneur forwards a cell or business number to LobbyTeam when unavailable. LobbyTeam turns an otherwise missed call into managed intake and owned follow-up instead of carrier voicemail.

The B2B promise:

> **LobbyTeam handles the first customer request, keeps your team in control, and turns the interaction into completed work or clearly owned follow-up.**

## Target Users

- **Primary buyer:** Owner or practice owner of a small business.
- **Operational champion:** Office manager, receptionist, coordinator, dispatcher, or support lead.
- **Human operator:** The person who monitors, takes over, approves, routes, or completes the request.
- **Customer or visitor:** The person who needs an answer, appointment, service, direction, or human help.

## Proposed Capability Set

### Phase 1 — Inbound Frontline Loop

- Business phone or configured inbound channel receives the request.
- LobbyTeam identifies intent, urgency, customer context, and required workflow.
- Business owner configures approved questions, answers, actions, and escalation rules.
- Operator receives an alert when a request needs attention.
- Operator can view the live interaction where supported.
- Operator can take over or accept the handoff where supported.
- Interaction creates a summary, transcript or message history, owner, status, and next action.

### Phase 2 — Small-Team Operations

- Routing by request type, expertise, location, hours, availability, and ownership.
- Primary and backup contacts.
- Callback, appointment, rescheduling, and reminder workflows where configured.
- Team inbox or work queue that shows unowned, active, waiting, and completed requests.
- Mobile notifications and operator actions in `app-boothteam`.
- Human-readable reason for routing and escalation.
- Contact and conversation history across configured channels.

### Phase 3 — Business Front-Door Expansion

- Website chat, email, SMS, WhatsApp, kiosk, tablet, and QR entry points.
- Multi-location and follow-the-sun coverage.
- CRM, calendar, ticketing, and service-management integrations.
- Outbound callbacks and approved follow-up workflows.
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

Start with **inbound front-door coverage** for one business line or customer-entry channel. The line may be an office main number, business DID, VoIP service line, appointment line, or an owner’s forwarded phone. Missed-call recovery is one useful deployment mode, not the product category.

1. A customer calls the configured business line or entry point.
2. LobbyTeam answers immediately and asks the minimum useful questions.
3. It answers approved basics or collects appointment/service details.
4. It creates a concise interaction record.
5. The owner or staff member receives a notification.
6. The responsible person monitors, takes over, calls back, schedules, or routes the request.
7. The system records the owner and next action.

## Success Measures

- First-response time
- Percentage of defined requests with an owner
- Handoff completeness
- Human takeover or callback response time
- Appointments booked, confirmed, rescheduled, or recovered
- Requests completed without unnecessary escalation
- Staff interruption reduced
- Customer repetition reduced
- Follow-up completion
- Gross margin per handled interaction

## Ordered Implementation / QA Tasks

1. **Todo/ACTIVE — Capability matrix:** Verify which inbound channels, DID/VoIP/cell forwarding, telephony actions, recording, transcript, notification, takeover, routing, and mobile actions exist today.
2. **Todo/ACTIVE — Storyboard and workflow scope:** Use the personas and use-case storyboards to select the smallest inbound front-door workflow with one line, one owner, one backup, one fallback, and one success metric; include missed-call recovery as a deployment option.
3. **Todo/ACTIVE — Backend contract:** Define interaction, participant, workflow state, owner, escalation, transcript, summary, consent, and next-action contracts in `lobbyteam`.
4. **Todo/ACTIVE — Operator experience:** Design the web/mobile surfaces for alert, live context, takeover, handoff acceptance, and follow-up.
5. **Todo/ACTIVE — Safety and consent:** Define recording, transcript, contact capture, retention, access, opt-out, and human-only boundaries.
6. **Todo/ACTIVE — Pilot QA:** Test routine, incomplete, urgent, unknown, unavailable-owner, failed-integration, and human-takeover scenarios.
7. **Todo/ACTIVE — Outcome evidence:** Measure the first workflow against a customer baseline before expanding to more channels or industries.

## Decisions

- LobbyTeam is the B2B product application/backend; `booth-team` remains the separate BoothTeam application/backend.
- `app-boothteam` evolves as the mobile operator surface for both products.
- Solopreneurs and small teams with an inbound line are the sweet spot; appointment-driven and phone-dependent teams are the first wedge.
- Equal AI is a reference for the interaction loop and operator control, not a model to copy as a consumer call-screening product.
- The first product milestone is an owned inbound workflow, not a complete omnichannel platform.
