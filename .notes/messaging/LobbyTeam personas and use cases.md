---
title: LobbyTeam personas and use-case storyboards
tags: [lobbyteam, product, personas, use-cases, front-door, storyboards]
type: product-storyboard
status: working-draft
parent: ../plans/master_execution_plan.md
related:
  - ../plans/TODO_lobbyteam_b2b_frontline_assistant.md
  - LobbyTeam comprehensive messaging guide.md
---

# LobbyTeam Personas And Use-Case Storyboards

## Purpose

This document gives the product and development team a shared picture of what LobbyTeam is supposed to do for real people.

It is not a list of disconnected features. Every story describes the same product job:

> **LobbyTeam is the request-to-resolution layer for a business. It receives inbound work from every configured channel, handles safe work, coordinates human handoffs, keeps the customer informed, and follows the open request until closure.**

For a business, phone, email, website, SMS, and physical-office QR entry points can feed the same LobbyTeam request lifecycle. A DID, VoIP number, office line, or service line can route to LobbyTeam, and a solopreneur can forward a cell or business number when unavailable. Missed-call recovery is one deployment mode—not the product category.

This storyboard should help the team decide:

- who the product serves;
- what problem each person is trying to solve;
- what LobbyTeam should do at each step;
- when automation is allowed to act;
- when a human must take over;
- what context must survive the handoff;
- what outcome proves the workflow worked;
- what evidence allows the system to say that the work is resolved.

## Product boundary

LobbyTeam is a multi-channel inbound work orchestration and request-to-resolution layer. It is not a generic chatbot, a voicemail replacement only, or an autonomous replacement for accountable staff. It may handle the work itself, hand it to one or more humans, or create and track an open ticket when work remains.

The business defines:

- approved knowledge and answers;
- intake questions and required information;
- actions LobbyTeam may perform;
- routing, hours, availability, and backup rules;
- escalation thresholds;
- consent, recording, and retention rules;
- decisions that always require a person.

LobbyTeam applies those rules, makes progress where it is safe to do so, and makes uncertainty, ownership, handoff history, customer updates, and closure evidence visible.

## The shared LobbyTeam loop

Every channel and persona should map to this operating loop:

1. **Arrive** — A customer, visitor, prospect, partner, or employee reaches a configured phone, email, website, SMS, or QR entry point.
2. **Create or attach** — LobbyTeam creates one durable request/work item or attaches the new channel session to the existing request.
3. **Understand** — It determines the person’s intent, urgency, context, desired outcome, and missing information.
4. **Check** — It checks approved knowledge, business rules, permissions, schedules, integrations, and human-only boundaries.
5. **Act** — It answers, collects information, books, reschedules, creates a task, or performs another configured safe action.
6. **Decide** — LobbyTeam determines whether it can complete the work, needs a human, or must open/keep an asynchronous ticket.
7. **Handoff** — It offers the work to the right owner or queue with a concise summary, relevant history, required information, due time, and routing reason.
8. **Acknowledge** — A human or queue accepts responsibility. Delivery of a notification is not ownership.
9. **Bird-dog** — LobbyTeam tracks each handoff, watches deadlines, follows the backup path, records progress, and updates the customer with factual status.
10. **Resolve or explicitly leave unresolved** — The request closes only with evidence appropriate to the workflow. If no resolution is proven, it remains open or is marked unresolved with a reason and customer-visible status.

### Canonical request model

Do not treat one phone call, email, or chat session as the whole case. Keep these concepts separate:

- **Contact:** the customer, visitor, or organization;
- **Request/work item:** the durable business problem or desired outcome;
- **Conversation:** the customer-facing history across one or more channels;
- **Channel session:** a specific call, email thread, web session, SMS exchange, or QR interaction;
- **Assignment:** an owner or queue responsible for the next action;
- **Handoff:** an auditable transfer of responsibility between LobbyTeam, a queue, and a human;
- **Commitment:** what was promised, to whom, by when, and whether it was confirmed;
- **External action:** a booking, ticket write, callback, transfer, or other provider operation;
- **Closure evidence:** the proof that the requested work was completed or why it remains unresolved.

### Minimum request record

Every meaningful interaction should be able to produce, subject to channel and consent:

- customer or visitor identity and contact details when available;
- channel and entry point;
- intent and urgency;
- relevant account, location, appointment, or order context;
- what LobbyTeam said or did;
- what information is still missing;
- transcript, summary, or message history;
- current owner or queue and backup path;
- lifecycle state and assignment state;
- next action, due time, and customer-visible commitment;
- handoff history and acknowledgement state;
- customer-update history and delivery state;
- external action status and provider IDs;
- escalation or routing reason;
- consent and recording state;
- closure evidence, unresolved reason, and reopen state.

## Inbound channels and deployment modes

The product loop is the same even though the phone setup differs.

| Deployment | Entry point | What the customer experiences | Primary value |
|---|---|---|---|
| Business-first line | DID, VoIP number, office line, or service line routes to LobbyTeam first | LobbyTeam answers immediately before the request reaches a queue or voicemail | The business has a consistent first response |
| Owner coverage | Solopreneur forwards a cell or business number when unavailable | LobbyTeam manages intake instead of carrier voicemail | The owner does not lose the request while busy |
| Digital front door | Website, email, SMS, or web form | LobbyTeam answers, gathers context, and keeps the request moving | The request does not stop at “we received your message” |
| Physical reception | QR code leading to text or voice chat | LobbyTeam uses location and entry-point context to welcome, guide, or create a request | The visitor gets a tracked next step without waiting at an unattended desk |

## Personas

### 1. Economic buyer — owner or founder

**Who they are:** A small-business owner, practice owner, founder, or partner accountable for revenue, customer experience, and operating cost.

**What they want:** More customers reach a useful next step without adding another full-time person or creating an opaque automation system.

**What frustrates them:** Calls arrive while they are serving someone else. Follow-up depends on memory. Staff repeat the same answers. The owner cannot tell which requests are still waiting.

**What convinces them:** Simple setup, clear control, visible ownership, and measurable improvement in first response, completed work, bookings, or follow-through.

**Product promise:** “Give your business a reliable first response and make every important next step visible.”

### 2. Operational owner — office manager or team lead

**Who they are:** An office manager, receptionist lead, scheduling coordinator, support manager, sales coordinator, dispatcher, or workforce lead.

**What they want:** To configure rules, protect staff time, see the queue, and make sure requests do not disappear.

**What frustrates them:** Setup is hard. Routing is unclear. Automation creates cleanup work. Alerts arrive without enough context or without a clear action.

**What convinces them:** Safe permissions, easy workflow configuration, clear queues, useful alerts, backup rules, and an audit trail.

**Product promise:** “You decide what LobbyTeam can do, who owns each request, and what happens when the preferred person is unavailable.”

### 3. Human escalation owner — receptionist, specialist, dispatcher, or advisor

**Who they are:** The person who takes over when judgment, expertise, approval, or a sensitive decision is required.

**What they want:** The right request at the right time, with enough context to act without asking the customer to start over.

**What frustrates them:** Vague messages, duplicate calls, noisy alerts, missing details, and unclear ownership.

**What convinces them:** A concise summary, live context or transfer when supported, clear reason for escalation, and a controlled way to accept or reject ownership.

**Product promise:** “Receive the request with the customer’s goal, the information already collected, and the next action that needs you.”

### 4. Distributed support owner — regional or follow-the-sun lead

**Who they are:** A support leader coordinating people across countries, time zones, shifts, or specialist teams.

**What they want:** Predictable coverage and routing that considers expertise, availability, location, language, urgency, and customer ownership.

**What frustrates them:** Simple time-of-day rules send work to the wrong team. Overnight requests become unowned. Context is lost between regions.

**What convinces them:** Explicit routing reasons, shift-aware fallback, consistent handoffs, and accountability across teams.

**Product promise:** “Route the request to the right human wherever that person is working, with one shared interaction history.”

### 5. Customer, prospect, visitor, or partner

**Who they are:** Anyone arriving at the business’s front door through phone, chat, email, SMS, WhatsApp, a form, or a physical location.

**What they want:** To be understood quickly, get an answer or useful progress, and know what happens next.

**What frustrates them:** Voicemail, delayed replies, repeated explanations, unclear handoffs, and being sent to the wrong person.

**What convinces them:** A prompt response, focused questions, a useful answer, a confirmed next step, and a human who already understands the situation.

**Product promise:** “You do not need to understand the company’s org chart to get to the right next step.”

## Storyboard format

Each storyboard below uses the same format so it can become a product requirement, workflow test, or customer-facing example.

- **Context:** what is happening in the business;
- **Primary persona:** who owns the problem;
- **Entry point:** where the customer arrives;
- **Trigger:** what starts the interaction;
- **LobbyTeam behavior:** what the product should do;
- **Human boundary:** what requires a person or approval;
- **Handoff payload:** what must be passed forward;
- **Successful outcome:** how the business and customer know it worked;
- **Build notes:** capabilities, states, and failure paths the team should account for.

# Core storyboards

## 1. Business line answered first

**Context:** A small office has a main DID or VoIP number. The receptionist is already helping someone in person.

**Primary persona:** Office manager and front-desk team.

**Entry point:** Business DID, VoIP number, or office main line routed to LobbyTeam first.

**Trigger:** A customer calls and wants to book, reschedule, ask a routine question, or reach a specific person.

**LobbyTeam behavior:** LobbyTeam answers immediately, identifies the reason for the call, checks approved knowledge and workflow rules, and completes the defined action when possible. It should not make the caller wait for voicemail simply because the receptionist is occupied.

**Human boundary:** Sensitive, uncertain, technical, clinical, legal, financial, emergency, or policy-exception requests go to a human. A configured human may take over or accept the handoff.

**Handoff payload:** Caller identity and contact, reason for calling, relevant appointment or account details, questions already answered, missing information, urgency, routing reason, owner, and next action.

**Successful outcome:** The caller gets an answer, completed action, live transfer, callback commitment, or clearly owned next step.

**Build notes:** Support line configuration, business hours, overflow behavior, live status, owner and backup routing, transfer or callback state, transcript/summary state, and failed-provider fallback.

## 2. Solopreneur coverage instead of voicemail

**Context:** An owner is driving, with another customer, on a job, or outside working hours.

**Primary persona:** Solopreneur or owner-operator.

**Entry point:** Owner’s cell or business number forwarded to LobbyTeam when unavailable.

**Trigger:** A customer calls while the owner cannot answer.

**LobbyTeam behavior:** LobbyTeam explains that it can take the request, asks only the useful questions, answers approved basics, and creates an owned follow-up. It should make the owner’s availability visible without pretending to be the owner.

**Human boundary:** The owner decides pricing exceptions, commitments, sensitive advice, urgent situations, and work outside configured authority.

**Handoff payload:** Customer identity, request, urgency, location or service details, preferred callback time, relevant history, and suggested next action.

**Successful outcome:** The owner receives a useful request instead of a voicemail or missed-call notification with no context.

**Build notes:** Forwarding/on-call setup, unavailable status, notification preferences, callback queue, owner acknowledgment, backup path, and status transitions from new to contacted to completed.

## 3. Appointment booking, confirmation, and rescheduling

**Context:** An appointment-driven business spends staff time handling routine calendar requests.

**Primary persona:** Scheduler, office manager, or practice owner.

**Entry point:** Phone, website, chat, email, SMS, or WhatsApp.

**Trigger:** A person wants to book, confirm, move, cancel, or join a waitlist.

**LobbyTeam behavior:** LobbyTeam identifies the request, asks required intake questions, checks permitted availability, and performs the configured calendar action or creates a complete request for staff.

**Human boundary:** Eligibility, clinical or professional judgment, exceptions, disputes, and calendar conflicts outside the configured rules require a human.

**Handoff payload:** Customer details, appointment type, eligibility answers, preferred times, current appointment, requested change, constraints, and customer confirmation.

**Successful outcome:** The appointment is changed or a clearly owned scheduling task is created with a promised follow-up.

**Build notes:** Calendar permissions, idempotency, timezone handling, cancellation policy, confirmation state, waitlist state, and integration failure recovery.

## 4. Website visitor needs help choosing a path

**Context:** A visitor understands the problem they have but does not understand the business’s products, services, or next step.

**Primary persona:** Website owner, founder, or inbound-sales lead.

**Entry point:** Website chat, guided assistant, or contact flow.

**Trigger:** The visitor asks a question, compares options, or describes a desired outcome.

**LobbyTeam behavior:** LobbyTeam asks one or two focused questions, connects the need to approved products or services, shares a relevant resource, and offers booking or human help when needed.

**Human boundary:** Custom advice, commercial exceptions, complex requirements, and high-value opportunities may require a salesperson or specialist.

**Handoff payload:** Visitor’s stated goal, needs, fit signals, questions, resources shown, requested next step, and consent to be contacted.

**Successful outcome:** The visitor can choose a useful next step instead of abandoning the site or submitting an empty form.

**Build notes:** Approved content sources, qualification fields, lead consent, source attribution, conversation context in CRM, and clear distinction between education and sales advice.

## 5. Customer support and service triage

**Context:** Existing customers need help with an order, account, delivery, billing issue, technical problem, or open case.

**Primary persona:** Support lead or service manager.

**Entry point:** Phone, email, chat, SMS, WhatsApp, or support form.

**Trigger:** A customer asks for help or reports a problem.

**LobbyTeam behavior:** LobbyTeam identifies the customer and issue, checks approved account or case context, resolves simple requests, gathers the details needed for a harder request, and routes it to the correct queue or person.

**Human boundary:** Refund exceptions, account-security decisions, disputes, technical judgment, and policy exceptions require authorized staff.

**Handoff payload:** Customer/account identity, issue category, affected order or case, reproduction or delivery details, prior steps, urgency, and requested outcome.

**Successful outcome:** The issue is resolved, placed with the correct owner, or given a clear response and follow-up time. The customer does not repeat the story.

**Build notes:** Authentication boundary, ticket state, duplicate detection, priority rules, SLA clock, escalation reason, and customer-visible status.

## 6. Field-service request becomes dispatch work

**Context:** A plumbing, HVAC, electrical, cleaning, pest-control, landscaping, repair, or home-care business has no receptionist sitting at a desk.

**Primary persona:** Dispatcher or owner-operator.

**Entry point:** Service line, website, SMS, or after-hours call.

**Trigger:** A customer reports a new job, urgent problem, quote request, or follow-up need.

**LobbyTeam behavior:** LobbyTeam collects location, service type, urgency, access details, customer contact, and preferred time. It checks the service area and configured urgency rules, then books, requests dispatch, or escalates.

**Human boundary:** Safety, emergency classification, diagnosis, pricing exceptions, and technician assignment outside rules require a human.

**Handoff payload:** Address, problem description, urgency, access constraints, customer history, photos or links when available, and requested time window.

**Successful outcome:** The customer receives a service window, callback commitment, or clearly owned dispatch task.

**Build notes:** Location validation, service-area rules, urgent escalation, technician availability, dispatch queue, SMS updates, and backup contact behavior.

## 7. Inbound lead is qualified while intent is fresh

**Context:** A prospect arrives from a website, campaign, referral, phone call, or email. The team does not want to lose the opportunity while deciding who should respond.

**Primary persona:** Founder, sales lead, or sales coordinator.

**Entry point:** Website, phone, email, SMS, or campaign response.

**Trigger:** A prospect asks whether the business can help and wants information, a quote, demo, consultation, or meeting.

**LobbyTeam behavior:** LobbyTeam identifies the desired outcome, asks approved qualification questions, answers basic product/service questions, and books or routes the opportunity.

**Human boundary:** Pricing negotiation, contractual commitments, solution design, and high-value judgment require a salesperson or owner.

**Handoff payload:** Need, fit signals, company or account context, timing, budget signals when appropriate, questions, source, and requested next step.

**Successful outcome:** The right opportunity reaches the right person with enough context to continue the conversation.

**Build notes:** Lead status, consent, CRM ownership, duplicate contact handling, response SLA, and qualification confidence.

## 8. Physical visitor reception

**Context:** A visitor arrives at an office, clinic, showroom, campus, shared workspace, or building while reception is busy or unattended.

**Primary persona:** Office manager, building manager, or host.

**Entry point:** Kiosk, tablet, QR code, or reception device.

**Trigger:** A visitor needs directions, check-in, a host, accessibility assistance, delivery instructions, or general help.

**LobbyTeam behavior:** LobbyTeam welcomes the visitor, asks why they are there, gives approved directions or instructions, and notifies or routes to the host or responsible team.

**Human boundary:** LobbyTeam is not a security guard and does not make access, identity, safety, emergency, or restricted-area decisions.

**Handoff payload:** Visitor name, reason for visit, host or department, arrival time, accessibility or delivery detail, and notification status.

**Successful outcome:** The visitor knows where to go or has a clearly notified human contact.

**Build notes:** Host directory, notification acknowledgement, visitor status, accessibility options, device availability, privacy, and physical-security integration boundary.

## 9. After-hours and overflow coverage

**Context:** The normal team is closed, on another call, at lunch, on a job, or handling a surge.

**Primary persona:** Owner, operations lead, or on-call manager.

**Entry point:** Any configured channel with hours or capacity rules.

**Trigger:** A request arrives outside normal coverage or while the team is at capacity.

**LobbyTeam behavior:** LobbyTeam responds consistently, determines urgency, completes safe defined work, and follows the configured after-hours or overflow path.

**Human boundary:** Emergency, safety, high-risk, or urgent requests use the business’s explicit escalation process. LobbyTeam must not invent an emergency response.

**Handoff payload:** Request, urgency, time received, customer context, attempts made, escalation path, and response deadline.

**Successful outcome:** The customer receives immediate useful guidance or a clear committed next step; the business knows who owns the follow-up.

**Build notes:** Hours, holidays, capacity state, on-call schedule, escalation timers, acknowledgements, retry behavior, and customer-visible expectations.

## 10. Multi-location and distributed routing

**Context:** A business has several offices, clinics, stores, service areas, departments, or regional teams.

**Primary persona:** Operations lead or regional support lead.

**Entry point:** Shared number, website, inbox, or location-specific channel.

**Trigger:** A customer needs a location, service, specialist, or regional team.

**LobbyTeam behavior:** LobbyTeam understands the request once, checks location, ownership, hours, availability, expertise, language, urgency, and account context, then routes to the correct destination.

**Human boundary:** Exceptions to ownership or service policy require an authorized operator.

**Handoff payload:** Customer and account, requested service, location, routing signals, reason for destination, prior interaction, and fallback path.

**Successful outcome:** The request reaches the right location or owner without the customer repeating the story.

**Build notes:** Location directory, timezone, schedules, skills, queues, routing explanation, backup order, and cross-location visibility.

## 11. Follow-the-sun support

**Context:** A business has teams in different countries or shifts. A U.S. request arrives outside U.S. hours while a configured regional team is available.

**Primary persona:** Global support or operations lead.

**Entry point:** Shared phone, chat, email, or service channel.

**Trigger:** A request arrives when the preferred regional team is closed or unavailable.

**LobbyTeam behavior:** LobbyTeam identifies the customer’s location, request type, urgency, language, current coverage, and expertise requirement. It routes to the available configured team or creates an owned follow-up if no live team is appropriate.

**Human boundary:** LobbyTeam follows configured routing policy; it does not make unsupported assumptions about regional responsibility or urgency.

**Handoff payload:** Full interaction context, routing signals, customer ownership, time received, region selected, and fallback reason.

**Successful outcome:** The customer reaches the right available human or receives a clear owned follow-up with no context loss.

**Build notes:** Timezone and shift data, regional queues, language, skills, service level, routing audit, translation boundary, and transfer failure handling.

## 12. Recurring outreach and follow-through

**Context:** The business needs to confirm an appointment, request missing information, fill a cancellation, reactivate a customer, renew a service, or check satisfaction.

**Primary persona:** Operations owner, scheduler, account manager, or support lead.

**Entry point:** A follow-up task created by an earlier interaction or a configured business list.

**Trigger:** A due follow-up, appointment event, missing field, cancellation, renewal date, or customer request.

**LobbyTeam behavior:** LobbyTeam sends or places the configured follow-up through an approved channel, identifies the response, updates the record, and routes exceptions.

**Human boundary:** Complaints, disputes, sensitive information, pricing, cancellation exceptions, and judgment-heavy conversations require a person.

**Handoff payload:** Original request, reason for outreach, response, attempt history, consent, requested action, owner, and next due time.

**Successful outcome:** The next conversation happens, the record is updated, and unresolved work is visible.

**Build notes:** Consent, quiet hours, retry limits, idempotency, opt-out, attempt history, and task ownership.

## 13. Internal office, vendor, or partner front door

**Context:** Employees, candidates, vendors, delivery drivers, and partners arrive through a shared office number, inbox, form, or lobby.

**Primary persona:** Office operations or people operations lead.

**Entry point:** Shared internal/external channel or physical reception.

**Trigger:** A person needs a department, host, delivery instruction, candidate coordinator, or internal service.

**LobbyTeam behavior:** LobbyTeam identifies the purpose, gives approved information, and routes to the responsible internal owner.

**Human boundary:** Access, identity, HR, security, and confidential internal decisions require authorized staff.

**Handoff payload:** Person, organization, purpose, host or department, arrival details, and required action.

**Successful outcome:** The arrival reaches the right internal contact without interrupting unrelated staff.

**Build notes:** Separate internal policies and permissions, directory sync, privacy boundary, security integration, and audience-specific knowledge.

## Cross-story requirements

### Configuration

The operator must be able to configure, per business and per entry point:

- channels and phone numbers;
- business hours, holidays, and overflow rules;
- knowledge sources and approved answers;
- intake questions and required fields;
- allowed actions and integrations;
- owners, teams, locations, skills, and backups;
- transfer, callback, queue, and escalation behavior;
- human-only decisions;
- consent, recording, transcript, and retention behavior;
- notification preferences and acknowledgement rules.

### Interaction states

At minimum, separate these dimensions rather than mixing them into one status:

- **Request lifecycle:** `new`, `triaged`, `in-progress`, `waiting-on-customer`, `waiting-on-business`, `resolved`, `closed`, `unresolved-expired`, `reopened`;
- **Assignment:** `unassigned`, `offered`, `delivered`, `acknowledged`, `accepted`, `rejected`, `expired`, `reassigned`;
- **Commitment:** `none`, `provisional`, `confirmed`, `due`, `overdue`, `fulfilled`, `breached`;
- **Channel session:** `active`, `ended`, `transferred`, `dropped`, `failed`;
- **External action:** `requested`, `processing`, `succeeded`, `failed`, `reconciling`;
- **Customer update:** `drafted`, `sent`, `delivered`, `read`, `acknowledged` where supported.

The exact state model is an engineering decision, but no request should be represented as resolved merely because a response was generated, a ticket was created, or a notification was delivered. The customer and operator should always be able to answer: What happened? Who owns it? What happens next? When? What proves it is done?

### Handoff quality bar

A handoff is not complete merely because a message was sent. A useful handoff includes:

1. the customer’s desired outcome;
2. what LobbyTeam already understood;
3. what was answered or attempted;
4. what remains unknown;
5. why this person or team received it;
6. what action is requested;
7. when the action is due;
8. what happens if the recipient is unavailable.

The system must record `offered`, `delivered`, `viewed`, `accepted`, `rejected`, `expired`, and `reassigned` where the channel supports those signals. A notification delivery receipt must never be treated as human ownership.

### Failure and fallback behavior

Every workflow needs an explicit path for:

- no answer from the preferred human;
- no available backup;
- failed phone, calendar, CRM, or notification integration;
- missing required information;
- contradictory business rules;
- customer opt-out or consent refusal;
- urgent or unsafe language;
- unsupported request;
- duplicate or repeated interaction;
- customer asks for a human immediately.

The fallback should preserve the interaction record and make ownership visible. It should never silently claim completion.

### Customer progress updates

Customer updates must describe facts, not reassurance. Each update should state:

1. what actually happened;
2. who or what owns the next action;
3. what happens next;
4. the expected time or deadline;
5. what the customer should do if that time passes.

Track generated, sent, delivered, read, and acknowledged separately where supported. Never tell the customer that a human is working on the request until a human or queue has accepted responsibility.

### Closure evidence

The product must distinguish:

- `acknowledged`: request received;
- `routed`: destination selected;
- `delivered`: destination received the work;
- `accepted`: a human or queue assumed responsibility;
- `action-completed`: the requested action executed;
- `customer-confirmed`: the customer accepted the result where required;
- `closed`: no further action is expected, with a reason;
- `unresolved-expired`: administratively closed without proof of resolution.

“No response” must never be represented as “resolved.” A closure record needs evidence appropriate to the workflow, such as a verified external write, human resolution note, successful callback outcome, customer confirmation, or documented unresolved reason.

## Outcome measures

Use request-to-resolution outcomes rather than conversation volume as the primary proof:

- percentage of qualified requests with an acknowledged owner;
- time to first owner;
- handoff acknowledgement and expiry rate;
- customer-update compliance;
- time to resolution;
- verified completion rate;
- reopen rate;
- unresolved and overdue aging;
- customer repetition reduced;
- staff interruption reduced;
- fully loaded cost per successfully advanced request.

## Launch recommendation

The story should be broad enough to describe the product and narrow enough to build and sell.

### Initial product wedge

Start with one request-to-resolution workflow across the inbound channels the customer already uses. The initial channel set may include phone, email, website, SMS, and a location-specific QR entry point, but every channel must create or attach to the same durable request and closure model.

The first pilot should support:

1. one defined request type;
2. the supported inbound channels for that request;
3. one primary owner or queue;
4. one backup path;
5. one human escalation rule;
6. one durable request/work item with channel sessions attached;
7. customer progress updates;
8. verified closure or an explicit unresolved state;
9. one measurable outcome.

The first workflow may be appointment intake, service request intake, routine front-desk questions, or managed callback intake. The decision is not “which channel do we support?” but “which request can LobbyTeam reliably carry from arrival to closure across the channels customers use?”

### Expansion order

1. More inbound phone workflows and business-line routing.
2. Appointment, service, support, and sales workflow templates.
3. Operator mobile notifications, live context, takeover, and follow-up.
4. Website chat, email, SMS, WhatsApp, and shared interaction history.
5. Outbound confirmations, reminders, callbacks, and reactivation.
6. Multi-location, distributed teams, integrations, analytics, and vertical templates.
7. Physical visitor reception and internal/partner front-door workflows where the safety and access boundaries are explicitly supported.

## Product decisions still requiring verification

Before a storyboard becomes a promised capability, verify:

- Which phone providers and DID/VoIP forwarding paths are supported?
- Can LobbyTeam answer first, transfer live, or only create an asynchronous handoff?
- Which channels are live today: phone, email, chat, SMS, and WhatsApp?
- Can it book, reschedule, cancel, and waitlist, or only request human action?
- Can it create tickets and assign them to a person or team?
- Can routing use timezone, hours, shifts, availability, expertise, urgency, and account ownership?
- What recording, transcript, consent, retention, export, and deletion controls exist?
- What happens when the preferred human does not answer?
- Which integrations and vertical workflows are available at launch?

Until a capability is verified in the application/backend and its provider path, describe it as configured, planned, or a workflow to prove—not as a universally available feature.
