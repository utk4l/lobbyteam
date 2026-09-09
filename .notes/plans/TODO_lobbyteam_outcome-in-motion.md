---
title: LobbyTeam multi-channel outcome animation
tags: [lobbyteam, homepage, animation, callbacks, human-handoff]
type: implementation-plan
status: active
---

# LobbyTeam Multi-Channel Outcome Animation

## Objective

Make the homepage show LobbyTeam making a decision across channels instead of only describing a digital front door. The hero must visibly connect a website chat, email, or voice call to a callback or human handoff and preserve the interaction record.

## Decisions

- The hero uses one reusable state-driven `FrontDoorDemo` component, not several unrelated mock windows.
- The demo rotates through website chat, email, and voice-call scenarios.
- Chat and email scenarios show a configured callback decision; the voice scenario shows routing to a configured human phone number.
- Every scenario ends with the same interaction log: channel received, need understood, action started, and context preserved.
- The copy qualifies callback behavior as configured and dependent on human availability.
- The old landing page remains unchanged at `/old-landing`.
- `prefers-reduced-motion` disables automatic rotation and leaves the selected scenario visible.

## Checklist

- [x] Add the multi-channel scenario component and explicit decision states. (Coded/Deploy-QA pending.)
- [x] Replace the static homepage request card with the visual demo. (Coded/Deploy-QA pending.)
- [x] Add callback, human-routing, and interaction-log copy with capability boundaries. (Coded/Deploy-QA pending.)
- [x] Add motion and reduced-motion styling without adding a new dependency. (Coded/Deploy-QA pending.)
- [x] Run the production build and diff checks. (DONE: `npm run build`; `git diff --check` passed.)
- [ ] Push the commit and deploy the exact release on Manas. (Todo/ACTIVE.)
- [ ] Verify the homepage and legacy `/old-landing` route through Cloudflare. (Todo/ACTIVE.)

## Public Story

1. A customer starts in chat, email, or voice.
2. LobbyTeam understands whether the request should stay digital or move to a phone conversation.
3. LobbyTeam initiates a configured callback or routes a voice conversation to the right human.
4. The reason, action, destination, and outcome are recorded in one interaction timeline.

## Guardrails

- Do not imply that every chat or email automatically produces a call.
- Do not show real phone numbers or personal customer information in the animation.
- Do not imply a human is always immediately available.
- Do not claim LobbyTeam replaces accountable human judgment.
