import type { ReactNode } from 'react';

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqCategory = {
  slug: string;
  title: string;
  items: FaqItem[];
};

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    slug: 'what-lobbyteam-is',
    title: 'What LobbyTeam Is',
    items: [
      {
        question: 'What is LobbyTeam?',
        answer: 'LobbyTeam is a coordinated digital front-door team for your business. It helps customers, visitors, prospects, and callers reach an answer, a completed request, or the right human next step across configured channels such as phone, website chat, email, SMS, WhatsApp, and physical-lobby experiences.',
      },
      {
        question: 'What is a digital decision team for a website?',
        answer: 'A digital decision team helps website visitors understand what a business offers, connect it to their own situation, and choose the right next step. LobbyTeam can ask clarifying questions, explain approved options, share relevant resources, and route the visitor to a human with context when the decision needs expertise.',
      },
      {
        question: 'Can LobbyTeam help a visitor decide which product or service fits?',
        answer: 'Yes, when the business provides approved product, service, audience, and problem guidance. LobbyTeam can learn what the visitor is trying to accomplish, ask focused questions, explain relevant paths, and offer a resource, conversation, booking, or human handoff without claiming certainty beyond the configured rules.',
      },
      {
        question: 'What problem does LobbyTeam solve?',
        answer: 'LobbyTeam helps businesses close the gap between first contact and useful progress. It addresses missed calls, unanswered messages, repetitive front-desk work, appointment phone tag, unclear ownership, and handoffs that lose the customer context.',
      },
      {
        question: 'Who is LobbyTeam for?',
        answer: 'LobbyTeam is designed for solopreneurs, small offices, appointment-driven businesses, online businesses, field-service teams, sales teams, support teams, and physical visitor operations that need a more reliable way to answer, handle, route, and follow through on customer requests.',
      },
      {
        question: 'Is LobbyTeam useful for a solopreneur?',
        answer: 'Yes. A solopreneur often has to answer calls, schedule work, sell, support customers, and follow up alone. LobbyTeam provides a reliable first response, handles defined workflows, and makes the next action visible without pretending to replace the owner.',
      },
      {
        question: 'What does “business front door” mean?',
        answer: 'The business front door is the first place a customer, visitor, prospect, or partner reaches you. It may be a phone line, receptionist, website, inbox, chat window, SMS number, WhatsApp account, kiosk, tablet, or QR code. LobbyTeam helps that arrival move toward a useful next step.',
      },
    ],
  },
  {
    slug: 'how-lobbyteam-is-different',
    title: 'How LobbyTeam Is Different',
    items: [
      {
        question: 'How is LobbyTeam different from an AI receptionist?',
        answer: 'An AI receptionist usually describes one system that answers a call or message. LobbyTeam is broader: one agent engages the customer while specialized digital agents help interpret the request, apply your business rules, complete configured work, route to the right human, and preserve context for follow-through.',
      },
      {
        question: 'How is LobbyTeam different from a chatbot?',
        answer: 'A chatbot is usually a conversational interface for answering questions. LobbyTeam is a front-door operating layer that can answer, collect context, complete configured work, route to a person or team, preserve the conversation, and make the next action visible.',
      },
      {
        question: 'How is LobbyTeam different from voicemail?',
        answer: 'Voicemail records that someone called. LobbyTeam is designed to understand why they reached out, provide approved information, collect useful context, identify urgency, route the request, and make follow-up visible instead of leaving the message in an unowned queue.',
      },
      {
        question: 'How is LobbyTeam different from call forwarding?',
        answer: 'Call forwarding sends a call to a destination. LobbyTeam can apply business rules about who should receive the request, whether it can be handled first, which region or shift owns it, what context the human needs, and what backup path applies if the preferred person is unavailable.',
      },
      {
        question: 'Does LobbyTeam replace human staff?',
        answer: 'No. LobbyTeam works alongside receptionists, office managers, coordinators, sales teams, dispatchers, and support staff. It handles defined first-contact work and reduces repetitive interruption while people remain accountable for relationships, exceptions, judgment, and sensitive decisions.',
      },
    ],
  },
  {
    slug: 'coordinated-digital-team',
    title: 'How The Coordinated Team Works',
    items: [
      {
        question: 'What does the LobbyTeam digital team do?',
        answer: 'One agent may engage the customer while specialized agents help interpret the request, check approved business guidance, identify urgency or ownership, select a configured workflow, and prepare the next step or human handoff. The customer experiences one clear conversation rather than a collection of disconnected systems.',
      },
      {
        question: 'How does LobbyTeam understand what a customer needs?',
        answer: 'LobbyTeam uses the customer’s conversation and the business guidance configured for the account to identify the request, missing information, urgency, relevant service or product, and appropriate next step. It should ask only the questions needed to move the request forward.',
      },
      {
        question: 'How does LobbyTeam apply our business rules?',
        answer: 'The business defines its approved knowledge, workflows, routing rules, escalation rules, contacts, schedules, and actions. LobbyTeam applies those rules within the configured workflow and routes requests to a human when the rules require judgment or the information is insufficient.',
      },
      {
        question: 'What happens when LobbyTeam does not know an answer?',
        answer: 'LobbyTeam should not guess. It should use the configured fallback, explain that human help is needed, collect the missing context, send an approved resource, or route the request to the right person according to the business’s escalation rules.',
      },
      {
        question: 'When does LobbyTeam involve a human?',
        answer: 'LobbyTeam involves a human when the business rules require approval, the request is sensitive or complex, the customer asks for a person, the system lacks confidence, or the configured workflow reaches an escalation point. The human should receive the relevant conversation context.',
      },
    ],
  },
  {
    slug: 'channels-and-workflows',
    title: 'Channels And Workflows',
    items: [
      {
        question: 'Where can customers interact with LobbyTeam?',
        answer: 'Depending on account configuration, customers can interact through phone, website chat, email, SMS, WhatsApp, a kiosk, a tablet, a QR code, or an outbound workflow. Buyers should verify which channels and actions are enabled for their specific account.',
      },
      {
        question: 'Can LobbyTeam answer phone calls?',
        answer: 'LobbyTeam can support phone workflows when telephony is configured. It may answer questions, collect information, schedule work, route the call, request a callback, or escalate to a human depending on the permissions and workflow configured for the business.',
      },
      {
        question: 'Can LobbyTeam respond to email and website chat?',
        answer: 'Yes, when those channels are connected and configured. LobbyTeam can answer approved questions, collect missing details, send approved resources, distinguish sales from support requests, and guide the conversation toward a completed request or human next step.',
      },
      {
        question: 'Can LobbyTeam use SMS and WhatsApp?',
        answer: 'SMS and WhatsApp workflows may be supported when configured. The business must confirm the required accounts, consent, message rules, templates, and operational behavior before using these channels for customer communication.',
      },
      {
        question: 'Can visitors use a kiosk, tablet, or QR code?',
        answer: 'A physical-lobby experience can be made available through a kiosk, tablet, or QR code. LobbyTeam can answer approved visitor questions, provide directions or information, notify a host, start a voice interaction when configured, or request human assistance.',
      },
    ],
  },
  {
    slug: 'human-handoffs-and-routing',
    title: 'Human Handoffs And Routing',
    items: [
      {
        question: 'How does a customer reach a human?',
        answer: 'The configured workflow may support a live transfer, phone call, video call, callback request, SMS or email escalation, team notification, ticket, or asynchronous follow-up. The customer should be told what will happen next rather than being left with an unexplained handoff.',
      },
      {
        question: 'How does LobbyTeam choose the right person?',
        answer: 'The business can define routing signals such as request type, expertise, location, language, urgency, customer ownership, business hours, time zone, shift, availability, and primary or backup contacts. LobbyTeam applies those rules to guide the handoff.',
      },
      {
        question: 'What context does a human receive?',
        answer: 'The handoff should include what the customer wants, what has already been answered, the stated problem, urgency, requested next step, relevant account or service context, resources already shared, and the reason for escalation so the customer does not have to start over.',
      },
      {
        question: 'What happens when the preferred person is unavailable?',
        answer: 'The business should configure a backup path. It may route to another person or team, create a callback task, send a message, create a ticket, or record an owned follow-up. The exact behavior depends on the account’s routing and notification configuration.',
      },
      {
        question: 'Can LobbyTeam route across locations and time zones?',
        answer: 'Yes, when the locations, schedules, teams, and routing rules are configured. LobbyTeam can support routing based on time zone, business hours, expertise, urgency, availability, language, region, account ownership, and primary or backup responsibility.',
      },
    ],
  },
  {
    slug: 'setup-and-integrations',
    title: 'Setup And Integrations',
    items: [
      {
        question: 'What does the business provide during setup?',
        answer: 'The business provides information about its services, products, customers, common questions, approved answers, workflows, staff, schedules, routing rules, escalation paths, consent language, integrations, and desired outcomes. LobbyTeam uses this material to build a useful front-door configuration.',
      },
      {
        question: 'Can setup start with one workflow?',
        answer: 'Yes. A business can start with one painful, measurable workflow such as appointment rescheduling, after-hours support, repetitive front-desk questions, field-service intake, or inbound inquiry response, then add more detail and workflows over time.',
      },
      {
        question: 'Can LobbyTeam work with our calendar or CRM?',
        answer: 'LobbyTeam can work with calendars, CRMs, ticketing systems, and workflow tools when the required integration, permissions, fields, and rules are supported and configured. The buyer should confirm whether LobbyTeam reads, creates, updates, or only recommends actions in each system.',
      },
      {
        question: 'What happens when an integration fails?',
        answer: 'The request and conversation context should not disappear. The configured fallback should preserve the request, notify the appropriate owner, retry where supported, and make the failure visible for correction. Duplicate handling and retry behavior should be confirmed during setup.',
      },
      {
        question: 'Can workflows change after launch?',
        answer: 'Yes. The business should be able to add approved knowledge, questions, resources, contacts, schedules, routing rules, and workflows as it learns. The initial launch should solve one useful problem without requiring every future scenario to be defined in advance.',
      },
    ],
  },
  {
    slug: 'safety-privacy-and-boundaries',
    title: 'Safety, Privacy And Boundaries',
    items: [
      {
        question: 'Does LobbyTeam invent answers?',
        answer: 'It should not. LobbyTeam should use approved business knowledge and configured guidance. When it lacks enough information or confidence, it should use an approved fallback, collect context, or route the request to a human instead of inventing a claim or promise.',
      },
      {
        question: 'Can LobbyTeam make sensitive business decisions?',
        answer: 'LobbyTeam can apply approved workflows and actions, but humans remain accountable for sensitive, technical, commercial, security, emergency, clinical, legal, financial, and other judgment-heavy decisions. The business should define which requests always require human review.',
      },
      {
        question: 'Is LobbyTeam a security or emergency-response system?',
        answer: 'No. A physical-lobby experience can provide information and route visitors to a human, but it does not replace security personnel, access control, identity verification, emergency response, incident handling, or building safety procedures.',
      },
      {
        question: 'How is customer consent handled?',
        answer: 'Consent may be required before capturing contact information, recording communications, sending follow-up, or using certain messaging channels. The business is responsible for approving appropriate consent language and operating lawfully in the jurisdictions where it does business.',
      },
      {
        question: 'Who owns the customer data?',
        answer: 'The customer’s business data should remain owned by the customer, subject to the service agreement and applicable law. Buyers should review export, retention, deletion, backup, subprocessors, analytics, and account-termination terms before deployment.',
      },
    ],
  },
  {
    slug: 'pricing-and-value',
    title: 'Pricing And Value',
    items: [
      {
        question: 'How much does LobbyTeam cost?',
        answer: 'The working pricing concept has three monthly plans: Starter at $49 for 20 Interaction Units, Essential at $99 for 75 Interaction Units, and Full Front Door at $299 for 500 Interaction Units. Production pricing and billing behavior should be confirmed before purchase.',
      },
      {
        question: 'What is an Interaction Unit?',
        answer: 'An Interaction Unit is one handled customer interaction, whatever the channel. It counts when LobbyTeam reaches a useful outcome such as an answer, completed message, scheduled request, or owned human next step. The billing guardrails are one connected phone minute, one email up to 300 words, one text message within the published size limit, one WhatsApp message up to 500 characters, or one website chat conversation up to 15 turns; turn 16 starts a new unit. Phone time rounds up, so 61 seconds is 2 units. Failed connections and misdials do not count.',
      },
      {
        question: 'How should we measure LobbyTeam’s value?',
        answer: 'Measure progress rather than conversation volume. Useful measures include missed calls reduced, first-response time, completed requests, appointments booked or recovered, correct human handoffs, follow-up completion, after-hours coverage, staff interruption reduced, and qualified sales conversations.',
      },
      {
        question: 'What should we test before expanding usage?',
        answer: 'Start with one workflow and test routine questions, missing information, urgent requests, requests outside approved knowledge, human escalation, unavailable contacts, integration failures, and cross-channel continuation. Expand only after the workflow produces the intended customer and team outcome.',
      },
      {
        question: 'Is LobbyTeam a good fit for every business?',
        answer: 'LobbyTeam may be a poor fit for a business that wants a fully human-staffed call center, cannot define an accountable escalation owner, needs security or emergency decisions, expects unrestricted autonomous behavior, or has no reliable channel or workflow destination for customer requests.',
      },
    ],
  },
];

export const HOMEPAGE_FAQS = FAQ_CATEGORIES.flatMap((category) => category.items).slice(0, 6);

export function buildFaqJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_CATEGORIES.flatMap((category) => category.items).map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

export function FaqAnswer({ answer }: { answer: string }): ReactNode {
  return <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-ink/65">{answer}</p>;
}
