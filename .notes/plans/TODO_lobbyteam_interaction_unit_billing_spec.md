---
title: LobbyTeam Interaction Unit billing specification
tags: [lobbyteam, pricing, billing, interaction-units, unit-economics]
type: implementation-plan
status: active
parent: master_execution_plan.md
related:
  - TODO_1_OF_5_lobbyteam_pricing_concept.md
---

# LobbyTeam Interaction Unit Billing Specification

## Objective

Make Interaction Units easy to measure, explain, invoice, and dispute. The customer-facing pricing concept is the menu; [LobbyTeam Interaction Unit Counting Specification](../docs/LobbyTeam%20Interaction%20Unit%20Counting%20Specification.md) is the internal recipe. Both documents must produce the same invoice number.

## Plain-English problem

The current concept mixes a simple promise with channel-specific limits. Word and character caps require extra content inspection, create edge cases at word 301 or character 501, and make the customer do channel math. The meter should count durable rows the product already writes wherever possible.

## Design rule

> If counting a unit requires a new measurement or a new interpretation of an existing row, the definition is wrong.

The billing system may retain detailed provider and cost data internally, but customer billing uses a small, deterministic set of billable events:

- connected phone duration;
- successfully processed message rows; and
- deterministic chat turns grouped into 15-turn blocks.

## Checklist

- [ ] Approve the two-document model and the canonical billable-event ledger.
- [ ] Lock exact phone, email, SMS, WhatsApp, and chat counting rules in the internal specification.
- [ ] Remove word/character limits and telecom segment language from the customer meter; retain fair-use language separately.
- [ ] Define exclusions, idempotency, retries, provider status changes, refunds, and invoice-period boundaries.
- [ ] Build a reconciliation fixture set covering normal use, mixed channels, retries, failures, and disputes.
- [ ] Implement one versioned counting function or billing projection per channel.
- [ ] Reconcile sample invoices against the ledger and customer-visible usage report.
- [ ] Validate voice-heavy economics and approve the production pricing posture.
- [ ] Update public pricing, FAQ, and overage copy only after the internal spec and reconciliation tests pass.

## Decisions

- The customer promise remains: **one Interaction Unit is one customer interaction we handle, whatever the channel.**
- Email, SMS, and WhatsApp are counted by successfully processed message row, not word count, character count, or telecom segment count.
- Phone uses connected duration rounded up to whole minutes; unconnected calls, misdials, failed attempts, and unanswered calls do not create phone units.
- Chat is the only channel with sessionization logic: a session uses a 30-minute inactivity boundary, and every 15 completed turns consume one unit.
- The internal spec is authoritative for billing behavior. Public copy may summarize it but must not invent a second meter.
- Pricing is not publishable until the same billable-event rows drive the invoice, usage report, and dispute explanation.

## Non-goals

- Replacing provider cost accounting. Telecom segments, token counts, delivery fees, and model usage may remain internal cost fields.
- Promising unlimited usage. Fair-use and abuse protections remain separate from the normal unit meter.
- Designing the final billing UI or payment-provider integration in this document.

## Acceptance criteria

- A developer can calculate units from stored event rows without inspecting message content.
- A customer can understand a usage row without knowing internal provider terminology.
- Replaying the same provider webhook does not add units twice.
- A failed, bounced, or unconnected event has an explicit non-billable reason.
- Chat counts are reproducible from visitor, account, timestamp, and message events.
- Every invoice line can link back to billable rows and the counting-spec version.
- A support agent can explain a disputed unit using the customer-visible channel, timestamp, and event outcome.

## Validation scenarios

| Scenario | Expected result |
|---|---|
| 61-second connected call | 2 phone units |
| 10-second misdial or failed call | 0 units |
| One inbound email and one successful reply | 2 message units |
| Email accepted, then bounced | 0 outbound unit; provider cost remains internal |
| SMS gateway reports three telecom segments | 1 SMS unit |
| WhatsApp message retried by webhook | 1 WhatsApp unit |
| Chat with 15 completed turns | 1 chat unit |
| Chat with 16 completed turns | 2 chat units; turn 16 starts the second |
| Chat idle for 30 minutes or more | New chat session |
| Human handoff after a billable interaction | No extra unit for the handoff itself |

## Master-plan sync

Pricing validation remains in the master plan until the implementation, reconciliation, and voice-economics gates are complete. After Deploy-QA evidence is recorded, move this plan to `DONE_` and update the pricing plan link and master-plan status.
