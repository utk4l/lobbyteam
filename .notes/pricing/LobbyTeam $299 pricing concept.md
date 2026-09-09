---
title: LobbyTeam $299 pricing concept
tags: [lobbyteam, pricing, outcome-focused, unit-economics]
type: pricing-concept
status: working-draft
---

# LobbyTeam $299 Pricing Concept

## Start With The Problem

The buyer is not looking for AI agents that perform a list of tasks. They are trying to solve a front-door problem:

- Calls are missed or answered without being resolved.
- Website, email, and chat inquiries sit without clear ownership.
- Staff spend time repeating the same answers and scheduling work.
- After-hours requests wait until the wrong person is available.
- Customers are routed to the wrong person or asked to start over.
- Follow-up depends on somebody remembering to do it.

The outcome LobbyTeam sells:

> **Every customer reaches an answer, a completed request, or the right human next step.**

## Proposed Price

### LobbyTeam — from $49/month

> **A reliable front door for your business, starting at $49/month.**

LobbyTeam answers, understands, completes, and routes customer requests across the channels the business connects. It gives the customer progress and gives the business clear ownership of what happens next.

### What is included

- A choice of 20, 75, or 500 Interaction Units per month
- Phone, website chat, email, SMS, and WhatsApp interactions where connected and available for the account
- Business-specific answers and operating rules
- Appointment, callback, message, ticket, and handoff workflows where configured
- Intelligent routing to the right person or team based on time, location, availability, expertise, urgency, and ownership rules
- After-hours and overflow routing
- Conversation summary and next-action context for human handoffs
- Contact and conversation history
- Human takeover at any point
- Standard integrations and export capabilities supported by the plan
- No setup fee
- No seat-based pricing
- Cancel or change the plan when the business needs to

The wording should avoid implying that every channel or workflow is automatically available without configuration. The buyer connects the channels and defines the rules; LobbyTeam turns them into a usable front door.

## Recommended Three-Tier Pricing

Three tiers are stronger than one `$299` plan because they let a small business start with a low commitment and move up as LobbyTeam becomes part of its daily front door. The tiers represent expected interaction volume, not three different AI products.

### The proposed structure

| Plan | Monthly price | Included Interaction Units | Proposed overage |
|---|---:|---:|---:|
| Starter | `$49/month` | 20 | `$0.99/unit` |
| Essential | `$99/month` | 75 | `$0.79/unit` |
| Full Front Door | `$299/month` | 500 | `$0.59/unit` |

### What works

- `$49` is an approachable way to test LobbyTeam on a small volume of calls, messages, or website requests.
- `$299` becomes a meaningful operating plan for a business that expects regular customer traffic.
- A single Interaction Unit still works across phone, email, SMS, WhatsApp, and website chat.
- The buyer can understand the offer without learning a separate price for every channel.

### What needs to change

The new overage rates are directionally better. At 75 units, Starter would cost `$103.45` (`$49 + 55 x $0.99`) while Essential costs `$99`, so the `$99` tier becomes economically rational at its included allowance. Essential can still provide additional predictability and operating value before the customer reaches that point.

The `$0.59` overage on the `$299` tier is almost equal to the plan's included-unit average of about `$0.60`. That is easy to explain and avoids making the first unit after the allowance look strangely cheaper than the included units.

### Recommended tier structure

| Plan | Monthly price | Included Interaction Units | Overage | Best fit |
|---|---:|---:|---:|---|
| Starter | `$49/month` | 20 | `$0.99/unit` | A solo operator testing one narrow front-door workflow |
| Essential | `$99/month` | 75 | `$0.79/unit` | A small office or online business that wants predictable coverage |
| Full Front Door | `$299/month` | 500 | `$0.59/unit` | A business using LobbyTeam across multiple channels, shifts, or workflows |

The `$299` tier becomes economically attractive at roughly 304 units compared with Essential. The `$99` tier should therefore earn its place through predictable spend, additional workflow capacity, or better operating controls, not only through the lower overage rate.

### Simpler alternative: automatic plan upgrade

If we want to preserve exactly 20, 75, and 500 included units, use automatic plan transitions instead of letting customers remain indefinitely on a more expensive overage path:

- `$49/month` includes 20 units.
- `$99/month` includes 75 units.
- `$299/month` includes 500 units.
- When usage reaches the next tier, LobbyTeam recommends or automatically applies the better plan with clear notice.

This is easier to explain than making customers compare arithmetic, and the `$99` tier becomes the sensible upgrade once a customer is approaching 75 units.

### Feature posture

Do not make the tiers feel like Starter has a “dumb” LobbyTeam and Full Front Door has the “real” product. The outcome should remain the same at every tier: the customer reaches an answer, completed request, or the right human next step.

Reasonable differences may be:

- Included Interaction Units
- Number of connected phone numbers or locations
- History and reporting retention
- Number of routing schedules or teams
- Advanced CRM and workflow integrations
- Priority support

Do not gate basic human handoff or clear usage reporting behind the `$299` tier. Those are trust requirements for every plan.

## The Unit: Interaction Unit

### Customer-facing definition

> **An Interaction Unit is a standard measure of communication: one phone minute, one short email, one SMS, one WhatsApp message, or one website chat turn.**

It is intentionally not a token, seat, ticket, API request, or hidden AI action. Each channel has a simple public conversion rule so a customer can understand what usage means.

### Examples

Each of these counts as one Interaction Unit:

- One connected minute of a phone call, rounded up to the next minute.
- One email received or sent up to 300 words.
- One SMS message segment up to 160 characters.
- One WhatsApp message up to 500 characters.
- One website chat turn: one customer message plus LobbyTeam's response.
- One unanswered outbound call attempt, including a voicemail attempt. An answered outbound call consumes its connected minutes instead of an additional attempt unit.

### Cross-channel rule

If a customer moves from chat to email or from a phone call to SMS while pursuing the same request, each actual communication is metered according to its channel. The customer is not charged a separate platform fee for changing channels, but the individual messages or call minutes still count.

This is important to the trust story: the customer sees exactly what was counted rather than an opaque “AI usage” number.

### Practical boundary

For reliable economics, the public conversion table should be:

| Channel | Included unit | Counting rule |
|---|---|---|
| Phone | 1 connected minute | Partial minutes round up. An unanswered outbound attempt counts as 1 unit; an answered call uses its connected minutes only. |
| Email | 1 email up to 300 words | Each received or sent email counts separately. Every additional 300 words uses 1 more unit. |
| SMS | 1 message segment | Each 160-character SMS segment counts as 1 unit. |
| WhatsApp | 1 message up to 500 characters | Each received or sent message counts separately. Longer messages use additional units by 500-character block. |
| Website chat | 1 chat turn | One customer message plus one LobbyTeam response counts as 1 unit. |

Human handoff, routing, summarization, and recording the context do not create a second unit by themselves. The communication that caused the handoff is what counts.

## Why 500 Is The Recommended Full Front-Door Volume

500 Interaction Units is a better initial full-front-door allowance than “unlimited” because it:

- Gives a small business enough room to use LobbyTeam as a real front door: for example, 50 ten-minute calls, 500 short emails, or a mix of voice and messaging.
- Keeps the `$299` price connected to meaningful usage rather than unlimited infrastructure risk.
- Covers a mix of calls, chat, email, SMS, and WhatsApp using one visible meter.
- Creates a natural expansion path for businesses with higher traffic.
- Allows the team to observe real channel mix and average voice duration before promising a larger included volume.

The headline should not imply that every customer gets the same business value from 500 units. A medical office with 500 phone minutes and an online business with 500 short messages have different economics and workloads. The plan should be validated against actual usage before final publication.

## Overage Recommendation

Recommended starting posture:

- Starter includes 20 units with `$0.99` overage.
- Essential includes 75 units with `$0.79` overage.
- Full Front Door includes 500 units with `$0.59` overage.
- Never silently stop handling a live customer because the allowance was reached.
- Notify the account owner at 70%, 90%, and 100% usage.
- At 100%, continue service under the published overage rate unless the account owner has chosen a hard limit.
- Show the customer the unit breakdown by channel, not just one unexplained total.

The public page should show the arithmetic plainly:

> **LobbyTeam starts at $49/month. One phone minute, one short email, one SMS, one WhatsApp message, or one website chat turn uses one Interaction Unit.**

## Alternative Included Volumes To Test

The three tiers are the working public structure. Validate the unit economics before publishing, especially for voice-heavy customers and outbound calling.

## Outcome-Led Pricing Language

### Strong version

> **Make sure every customer reaches the right next step.**
>
> LobbyTeam answers your calls and messages, handles the requests you define, and routes the rest to the right human with the context they need. Plans start at `$49/month`, with 500 Interaction Units included in the Full Front Door plan.

### More operational version

> **A front door that does not stop at hello.**
>
> LobbyTeam turns calls, chats, emails, texts, and WhatsApp messages into answers, completed requests, scheduled appointments, or owned human handoffs. Start at `$49/month` and move to Full Front Door coverage at `$299/month`.

### What to avoid

- “A team of AI agents that answers phone, chat, and WhatsApp.”
- “Unlimited AI automation.”
- “Replace your receptionist.”
- “One price for every channel” without explaining the Interaction Unit conversion table.
- Pricing based on tokens, prompts, API calls, or internal agent actions.
- Promising live human routing before live transfer and availability behavior are verified.

## Validation Required Before Publishing

- What channels are actually live at launch?
- Is a phone call routed live, transferred, or converted into an asynchronous handoff?
- Can the system route by time zone, business hours, shift, availability, expertise, urgency, and account ownership?
- What is the actual cost of one connected phone minute?
- Are inbound and outbound phone minutes priced the same?
- Are automated reminders and follow-up messages counted as SMS, email, or WhatsApp units?
- Are email word limits measured on inbound text, outbound text, or both?
- What happens when an account reaches 100% usage?
- What is the actual cost of 500 mixed units by channel?
- Does the 14-day trial include a usage allowance and show a plain-language usage recap?
- Which outcome should the pricing page measure: requests resolved, requests routed, appointments completed, or conversations handled?

## Recommendation

Keep the public offer simple:

> **LobbyTeam starts at $49/month and scales to $299/month for 500 Interaction Units. It helps every customer get an answer, complete a request, or reach the right human with useful context.**

Do not publish the plan until the team validates the conversion table and voice economics. The customer should see one understandable unit; the product and finance teams still need detailed internal meters for channel cost, duration, outbound attempts, message length, and agent work.
