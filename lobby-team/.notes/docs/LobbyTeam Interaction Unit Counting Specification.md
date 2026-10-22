---
title: LobbyTeam Interaction Unit Counting Specification
tags: [lobbyteam, billing, pricing, interaction-units, internal-spec]
type: billing-specification
status: working-draft
---

# LobbyTeam Interaction Unit Counting Specification

## Purpose

This is the internal billing recipe for the customer-facing Interaction Unit promise:

> One Interaction Unit is one customer interaction we handle, whatever the channel.

The customer sees a simple usage row. The billing system keeps the exact event, status, and counting rule needed to reproduce the invoice.

## Canonical billing row

Every billable or excluded event must resolve to one immutable usage row with:

| Field | Meaning |
|---|---|
| `account_id` | Customer account being billed |
| `channel` | `phone`, `email`, `sms`, `whatsapp`, or `chat` |
| `source_event_id` | Provider or product event that caused the row |
| `event_type` | Connected call, processed message, or completed chat turn |
| `occurred_at` | Time the billable event happened |
| `status` | `billable`, `excluded`, `reversed`, or `refunded` |
| `units` | Non-negative unit quantity |
| `exclusion_reason` | Required when the row is not billable |
| `spec_version` | Counting rules used for the row |
| `idempotency_key` | Stable key preventing duplicate billing |

The invoice, usage report, and support dispute tool must read from this same projection. Provider cost records may contain more detail but must not silently change customer units.

## Billable-event rules

### Phone

- Bill connected duration only.
- Round up to whole minutes: `units = ceil(connected_seconds / 60)`.
- A connected call lasting 1–60 seconds is 1 unit; 61 seconds is 2 units.
- Misdials, failed connections, busy signals, unanswered calls, abandoned calls before connection, and duplicate provider callbacks are 0 units.
- Voicemail is not a connected phone minute and is excluded from phone units. If a later product decision bills a successfully delivered voicemail as a message, it must create a separate message row and never a phone-duration row.
- A human transfer does not add a second unit. The connected duration remains one call meter.

### Email

- One successfully processed inbound email row is 1 unit.
- One successfully processed outbound email row is 1 unit.
- Do not inspect words, characters, attachments, or model tokens for normal unit counting.
- Delivery failures, hard bounces, rejected sends, provider retries of the same message, internal notes, and system-only notifications are 0 units.
- If an outbound email is initially accepted but later hard-bounces, reverse the provisional row or do not bill it until the provider status is settled. The implementation must choose one consistent settlement policy before launch.

### SMS and WhatsApp

- One successfully processed inbound or outbound customer message row is 1 unit.
- Do not bill by telecom segment, character count, token count, or provider retry.
- Delivery receipts, typing indicators, read receipts, internal notes, and duplicate webhook deliveries are 0 units.
- Failed or rejected sends are 0 units. A provider retry uses the original `idempotency_key` and cannot create another unit.
- Provider segment counts and delivery fees remain internal cost-accounting fields.

### Website chat

Chat is the only channel that needs sessionization.

- A session belongs to one account, visitor/conversation identity, and chat channel.
- A new session starts when there is no prior activity for 30 minutes or more, or when the visitor/conversation identity changes.
- A turn is one customer message followed by LobbyTeam’s first qualifying response, completed action, or human handoff. Streaming chunks, retries, typing events, and duplicate webhook deliveries are not turns.
- Each completed turn increments the session turn count by one.
- Turns 1–15 consume 1 unit. Turn 16 starts a second unit; every additional block of 15 turns consumes another unit.
- A customer message that receives no response, action, or handoff remains unbilled until the configured response window closes; the final closure behavior must be tested before launch.
- A human handoff after a completed turn does not add a separate unit.

Formula: `chat_units = ceil(completed_turns / 15)` for each session, with zero units when there are zero completed turns.

## Exclusions and noise

These events must never create customer units:

- misdials and unconnected calls;
- failed, rejected, or bounced outbound messages;
- delivery/read/typing receipts;
- provider retries and duplicate webhooks;
- internal notes, staff-only messages, and system health events;
- model/tool traces, token usage, prompt count, and agent-to-agent messages;
- a human handoff, summary, or routing event by itself.

## Invoice-period behavior

- Assign a row to the invoice period using the event’s canonical `occurred_at`, not webhook arrival time.
- Late provider events must be handled by a documented adjustment or credit policy; never silently rewrite a paid invoice.
- Reversals and refunds retain the original source row and spec version so support can explain the change.
- Counting rules are versioned. Existing rows are not reinterpreted because a later rule changes.

## Reconciliation contract

For every invoice period:

1. Sum `units` from billable usage rows by account and channel.
2. Apply the plan’s included allowance and published overage rate.
3. Show the same channel totals in the customer usage report.
4. Preserve links from invoice lines to the underlying usage rows.
5. Verify that replaying source events produces the same total.

The customer-facing report should show plain rows such as `Phone · 2 units · 61-second connected call` or `SMS · 1 unit · message handled`. It should not expose tokens, provider segments, internal agent traces, or implementation names.

## Dispute examples

Support should answer disputes from the usage row, not from a separate manual spreadsheet:

- “Why did this call use 2 units?” — It connected for 61 seconds, and phone time rounds up by connected minute.
- “Why did three SMS segments use 1 unit?” — Customer billing counts one successfully processed text message; telecom segments are internal cost data.
- “Why did the handoff not add a unit?” — The handoff is part of the handled interaction and is not billed separately.
- “Why was this failed call not billed?” — It never connected, so it created an excluded phone event with a recorded reason.

## Open implementation decisions

- Choose whether outbound email billing waits for final delivery settlement or uses provisional billing with automatic reversal.
- Define the response-window timeout for an unanswered chat message.
- Confirm whether any configured outbound workflow creates message rows before or after provider acceptance.
- Confirm retention, export, and support access for usage rows.
- Validate the economics of connected phone minutes before publishing the final tier allowances.
