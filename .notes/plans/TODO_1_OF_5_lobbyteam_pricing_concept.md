---
title: LobbyTeam outcome pricing concept
tags: [lobbyteam, pricing, messaging, unit-economics]
type: pricing-plan
status: active
---

# LobbyTeam Outcome Pricing Concept

## Objective

Define an outcome-led pricing story for a `$299/month` LobbyTeam plan with one channel-neutral interaction unit that customers can understand across phone, website, email, SMS, and WhatsApp.

The customer-facing concept is the pricing menu. The exact billing recipe is maintained separately in [LobbyTeam Interaction Unit Counting Specification](../docs/LobbyTeam%20Interaction%20Unit%20Counting%20Specification.md) and implemented only after reconciliation tests pass.

## Checklist

- [x] Define the customer outcome and pricing promise. DONE
- [x] Define the Interaction Unit and edge cases. DONE
- [x] Recommend the included monthly volume, overage posture, and safeguards. DONE
- [ ] Identify economics and product decisions to validate before publishing pricing.
- [x] Review and approve the working concept before changing public pricing copy or code. DONE for the current working tiers; production validation remains open.

## Decisions

- Lead with the business problem and outcome, not “AI agents” or a list of automations.
- Recommended public structure: `$49/month` for 20 units, `$99/month` for 75 units, and `$299/month` for 500 units.
- An Interaction Unit is one handled customer interaction, whatever the channel. Channel guardrails are one connected phone minute, one email up to 300 words, one text message within the published size limit, one WhatsApp message up to 500 characters, or one website chat conversation up to 15 turns; turn 16 starts a new unit.
- Phone time rounds up, so 61 seconds is 2 units. Failed connections and misdials do not count. A unit is counted when LobbyTeam reaches a useful outcome such as an answer, completed message, scheduled request, or owned human next step.
- Overage rates: `$0.99`, `$0.79`, and `$0.59` respectively. The `$99` tier must earn its place through predictability or additional operating value because it is not cheaper than Starter at low usage.
- The concept is not yet public pricing. Voice duration, supported channels, overage, and routing capabilities require validation before launch.

### 2026-10-04 tightening

- Customer-facing copy leads with one handled interaction across channels; channel limits stay in the fine print as predictable billing guardrails.
- “SMS segment” is removed from buyer-facing language. The product may retain telecom-specific internal meters, but customers see “text message.”
- Website chat is defined as one conversation up to 15 turns; turn 16 starts a new unit. Phone rounding is explicit: 61 seconds is 2 units.
- The value story is reconciled by counting handled interactions that reach an answer, completed request, scheduled request, or owned human next step. Voice-heavy economics remain the open validation gate.
