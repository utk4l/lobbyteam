/* One coherent demo story for the product spine.
   Conversation = what happened. Work = what you need to do.
   Every conversation ends in exactly one outcome: resolved / needs you / lead. */

export type Outcome = 'resolved' | 'needs-you' | 'lead' | 'active' | 'blocked';

export type Message = { who: 'customer' | 'ai'; text: string };

export type Conversation = {
  id: string;
  name: string;
  channel: 'Phone' | 'WhatsApp' | 'Website chat';
  intent: 'Support' | 'Sales';
  last: string;
  time: string;
  outcome: Outcome;
  summary: string;
  contactId: string;
  messages: Message[];
  whatHappened: { t: string; text: string }[];
  /** Why this ended in "needs you" (or why it's a lead) — evidence, not a score */
  why?: string[];
  aiActions: string[];
  qa?: number;
};

export const CONVERSATIONS: Conversation[] = [
  {
    id: 'c1',
    name: 'Rahul Sharma',
    channel: 'WhatsApp',
    intent: 'Support',
    last: 'I want a full refund. It is too much for what I got.',
    time: '4m',
    outcome: 'needs-you',
    summary:
      'Rahul purchased Pro on Aug 24 and asked for a full refund today, saying onboarding has been slow. The AI offered a 30% extension credit per policy; he asked for the full amount instead. A decision is needed: approve ₹14,999 or hold the extension offer.',
    contactId: 'rahul',
    messages: [
      { who: 'customer', text: 'Hi, I need a refund for my Pro plan. I paid in August and setup has been slow.' },
      { who: 'ai', text: 'Of course, Rahul. Let me check your order and our refund policy.' },
      { who: 'ai', text: "You're on Pro, purchased Aug 24 for ₹14,999/year. Within 7 days it's a full refund; after that I can offer a 30% credit toward an extension." },
      { who: 'customer', text: 'I want a full refund. It is too much for what I got.' },
      { who: 'ai', text: "I understand. A full refund at 38 days is above my approval limit, so I'm bringing this to you with everything I've checked. You'll get a decision within a few hours." },
    ],
    whatHappened: [
      { t: '10:38', text: 'Customer asked for a full refund' },
      { t: '10:38', text: 'Found order #4821 — Pro plan, purchased Aug 24' },
      { t: '10:39', text: 'Checked refund policy — outside the 7-day full-refund window' },
      { t: '10:39', text: 'Offered a 30% extension credit, per policy' },
      { t: '10:40', text: 'Customer declined and asked for the full amount' },
      { t: '10:41', text: "Refund exceeds the AI's ₹2,000 approval limit" },
      { t: '10:41', text: 'Escalated to you with full context' },
    ],
    why: [
      'Refund of ₹14,999 requested',
      'Your policy caps AI approval at ₹2,000',
      'Customer has an active subscription since Aug 24',
      'Second refund conversation this quarter',
    ],
    aiActions: ['Checked order and purchase date', 'Checked refund policy', 'Calculated entitlement', 'Drafted two options for you'],
  },
  {
    id: 'c2',
    name: 'Priya Singh · Acme Corp',
    channel: 'Phone',
    intent: 'Sales',
    last: 'Thursday works. Send the calendar invite.',
    time: '12m',
    outcome: 'lead',
    summary:
      'Acme Corp asked for an enterprise quote for 80 seats and booked a call for Thursday 4 pm. The AI qualified the lead from the conversation — company size, buying intent, budget signal, and timeline all came from what Priya said.',
    contactId: 'acme',
    messages: [
      { who: 'customer', text: 'Hi, we looked at your plans. What would enterprise pricing be for 80 people?' },
      { who: 'ai', text: "Happy to. For 80 seats that's our Enterprise plan. Can I book 15 minutes with our team on Thursday? I'll have the exact quote ready." },
      { who: 'customer', text: 'Thursday works. Send the calendar invite.' },
      { who: 'ai', text: "Booked — Thursday, 4 pm. I've added everything from this call to your file." },
    ],
    whatHappened: [
      { t: '10:38', text: 'Asked for enterprise pricing for 80 seats' },
      { t: '10:39', text: 'Matched to the Enterprise plan' },
      { t: '10:40', text: 'Asked about SSO and data migration' },
      { t: '10:41', text: 'Booked a callback — Thursday 4 pm' },
      { t: '10:41', text: 'Created a lead with the evidence below' },
    ],
    why: [
      'Company size — 80 employees',
      'Buying intent — high (pricing + SSO questions)',
      'Budget signal — asked for an enterprise quote',
      'Timeline — this month',
      'Confidence — high',
    ],
    aiActions: ['Matched plan to team size', 'Answered SSO and migration questions', 'Booked the callback', 'Wrote the lead into your pipeline'],
  },
  {
    id: 'c3',
    name: 'Rahul Sharma',
    channel: 'Phone',
    intent: 'Support',
    last: 'Perfect, thanks!',
    time: '38m',
    outcome: 'resolved',
    summary:
      'Delivery question on order A1042. The order shipped that morning; the AI confirmed out-for-delivery status and sent the tracking link. Resolved in 24 seconds.',
    contactId: 'rahul',
    messages: [
      { who: 'customer', text: "Hi, my order A1042 hasn't arrived yet." },
      { who: 'ai', text: 'Checking your order now, one second.' },
      { who: 'ai', text: 'It shipped this morning and is out for delivery. It should reach you by 6 pm. I just sent the tracking link.' },
      { who: 'customer', text: 'Perfect, thanks!' },
    ],
    whatHappened: [
      { t: '10:02', text: 'Call answered on the first ring' },
      { t: '10:02', text: 'Identified order A1042 from the caller' },
      { t: '10:03', text: 'Checked shipping status — out for delivery' },
      { t: '10:03', text: 'Sent the tracking link on WhatsApp' },
      { t: '10:03', text: 'Customer confirmed — call resolved' },
    ],
    aiActions: ['Checked the order', 'Checked the delivery policy', 'Replied with tracking', 'QA score 98 / 100'],
    qa: 98,
  },
  {
    id: 'c4',
    name: 'Meera Iyer',
    channel: 'Website chat',
    intent: 'Sales',
    last: 'Is there a plan for 5 people?',
    time: '1h',
    outcome: 'active',
    summary: 'The AI is comparing plans with Meera for a 5-person team. No action needed yet.',
    contactId: 'meera',
    messages: [
      { who: 'customer', text: 'Is there a plan for 5 people?' },
      { who: 'ai', text: 'Yes — the Team plan covers up to 10 seats. I can send you the pricing, or book a quick call if you want a walkthrough.' },
    ],
    whatHappened: [
      { t: '09:52', text: 'Asked about team pricing' },
      { t: '09:53', text: 'Matched to the Team plan' },
      { t: '09:53', text: 'Offered pricing and a call — waiting for her answer' },
    ],
    aiActions: ['Matched plan to team size', 'Waiting for the customer'],
  },
  {
    id: 'c5',
    name: 'Karan Patel',
    channel: 'WhatsApp',
    intent: 'Support',
    last: 'Order confirmed. Thanks!',
    time: '2h',
    outcome: 'resolved',
    summary: 'Karan moved from monthly to the annual plan. The AI handled the change and sent the receipt.',
    contactId: 'karan',
    messages: [
      { who: 'customer', text: 'Can I switch to the annual plan? I always forget to renew.' },
      { who: 'ai', text: 'Done — you are on annual now, billed ₹14,999, next renewal Aug 2027. Receipt is on its way.' },
      { who: 'customer', text: 'Order confirmed. Thanks!' },
    ],
    whatHappened: [
      { t: '08:47', text: 'Asked to switch to annual billing' },
      { t: '08:48', text: 'Applied the change and prorated the difference' },
      { t: '08:48', text: 'Sent the receipt' },
    ],
    aiActions: ['Checked current plan', 'Applied the change', 'Sent the receipt', 'QA score 97 / 100'],
    qa: 97,
  },
  {
    id: 'c6',
    name: 'Neha Gupta',
    channel: 'Website chat',
    intent: 'Support',
    last: 'Can I return this?',
    time: 'now',
    outcome: 'active',
    summary: 'Neha is asking about a return. The AI is checking eligibility right now — watch it on the AI screen.',
    contactId: 'neha',
    messages: [
      { who: 'customer', text: 'Can I return this?' },
      { who: 'ai', text: 'Yes — let me check whether your order is eligible for a return.' },
    ],
    whatHappened: [
      { t: '10:44', text: 'Asked about a return' },
      { t: '10:44', text: 'Checking order #5510 and the return policy…' },
    ],
    aiActions: ['Checking order and return policy'],
  },
];

export type WorkItem = {
  id: string;
  text: string;
  person: string;
  reason: string;
  action: string;
  kind: 'needs-you' | 'active' | 'lead';
  convId?: string;
  contactId?: string;
};

export const WORK: WorkItem[] = [
  {
    id: 'w1',
    text: 'Refund request — ₹14,999',
    person: 'Rahul Sharma',
    reason: "AI couldn't approve this under your policy.",
    action: 'Review',
    kind: 'needs-you',
    convId: 'c1',
    contactId: 'rahul',
  },
  {
    id: 'w2',
    text: 'Enterprise opportunity — 80 seats',
    person: 'Acme Corp · Priya Singh',
    reason: 'AI identified a high-intent opportunity. Quote due before Thursday.',
    action: 'Follow up',
    kind: 'lead',
    convId: 'c2',
    contactId: 'acme',
  },
];

export const ACTIVITY = [
  { t: '10:44', text: 'Started checking a return for Neha Gupta', outcome: 'active' as Outcome },
  { t: '10:42', text: 'Resolved a delivery question — Rahul Sharma', outcome: 'resolved' as Outcome },
  { t: '10:41', text: 'Qualified Acme Corp as a lead', outcome: 'lead' as Outcome },
  { t: '10:41', text: "Escalated a refund request — over the AI's limit", outcome: 'needs-you' as Outcome },
  { t: '10:24', text: 'Booked a Thursday callback for Acme Corp', outcome: 'resolved' as Outcome },
  { t: '10:18', text: 'Answered a pricing question — Meera Iyer', outcome: 'active' as Outcome },
  { t: '09:56', text: 'Processed a plan change — Karan Patel', outcome: 'resolved' as Outcome },
];

export type TimelineEntry = {
  date: string;
  type: string;
  text: string;
  channel?: string;
  outcome?: Outcome;
};

export type Contact = {
  id: string;
  name: string;
  relation: string;
  since: string;
  timeline: TimelineEntry[];
  work: { text: string; state: Outcome }[];
  profile: { k: string; v: string }[];
};

export const CONTACTS: Contact[] = [
  {
    id: 'rahul',
    name: 'Rahul Sharma',
    relation: 'Customer',
    since: 'Aug 12, 2026',
    timeline: [
      { date: 'Today', type: 'Conversation', text: 'Refund request — needs you', channel: 'WhatsApp', outcome: 'needs-you' },
      { date: 'Today', type: 'Conversation', text: 'Order A1042 delivery question — resolved', channel: 'Phone', outcome: 'resolved' },
      { date: 'Aug 24', type: 'Purchase', text: 'Pro plan · ₹14,999/yr' },
      { date: 'Aug 20', type: 'Conversation', text: 'Asked about team seats — answered', channel: 'Website chat', outcome: 'resolved' },
      { date: 'Aug 12', type: 'First contact', text: 'Pricing question on WhatsApp', channel: 'WhatsApp', outcome: 'resolved' },
    ],
    work: [{ text: 'Decide the refund — ₹14,999 or the extension offer', state: 'needs-you' }],
    profile: [
      { k: 'Phone', v: '+91 98450 22314' },
      { k: 'Plan', v: 'Pro · since Aug 24' },
      { k: 'Location', v: 'Mumbai, IN' },
      { k: 'CRM', v: 'Zoho · synced 5m ago' },
    ],
  },
  {
    id: 'acme',
    name: 'Acme Corp',
    relation: 'Lead',
    since: 'Aug 20, 2026',
    timeline: [
      { date: 'Today', type: 'Lead', text: 'Enterprise plan · ₹5,000/mo — callback Thursday 4 pm', channel: 'Phone', outcome: 'lead' },
      { date: 'Aug 20', type: 'Conversation', text: 'Enterprise pricing inquiry — answered', channel: 'Website chat', outcome: 'resolved' },
    ],
    work: [{ text: 'Send the enterprise quote before Thursday', state: 'active' }],
    profile: [
      { k: 'Person', v: 'Priya Singh · Operations' },
      { k: 'Size', v: '80 employees' },
      { k: 'City', v: 'Bengaluru, IN' },
      { k: 'CRM', v: 'Zoho · synced 2m ago' },
    ],
  },
  {
    id: 'meera',
    name: 'Meera Iyer',
    relation: 'Prospect',
    since: 'Today',
    timeline: [
      { date: 'Today', type: 'Conversation', text: 'Team pricing for 5 — in progress', channel: 'Website chat', outcome: 'active' },
    ],
    work: [],
    profile: [
      { k: 'Plan interest', v: 'Team · 5 seats' },
      { k: 'CRM', v: 'Zoho · synced 1h ago' },
    ],
  },
  {
    id: 'karan',
    name: 'Karan Patel',
    relation: 'Customer',
    since: 'Jun 3, 2026',
    timeline: [
      { date: 'Today', type: 'Conversation', text: 'Moved to annual billing — done', channel: 'WhatsApp', outcome: 'resolved' },
      { date: 'Jun 3', type: 'Purchase', text: 'Team plan · monthly' },
    ],
    work: [],
    profile: [
      { k: 'Plan', v: 'Team · annual since today' },
      { k: 'CRM', v: 'Zoho · synced 2h ago' },
    ],
  },
  {
    id: 'neha',
    name: 'Neha Gupta',
    relation: 'Customer',
    since: 'Aug 21, 2026',
    timeline: [
      { date: 'Today', type: 'Conversation', text: 'Return question — being handled now', channel: 'Website chat', outcome: 'active' },
      { date: 'Aug 21', type: 'Purchase', text: 'Order #5510 · M2 stand' },
    ],
    work: [],
    profile: [
      { k: 'Last order', v: '#5510 · Aug 21' },
      { k: 'CRM', v: 'Zoho · synced now' },
    ],
  },
];

export const AI_STATS = {
  handled: 84,
  resolved: 71,
  needsYou: 2,
  leads: 5,
  channels: [
    { name: 'Phone', n: 38 },
    { name: 'WhatsApp', n: 34 },
    { name: 'Website chat', n: 12 },
  ],
  asks: [
    { name: 'Refunds above ₹2,000', n: 2, note: 'this week' },
    { name: 'Complaints where the customer sounded upset', n: 1, note: 'this week' },
    { name: 'Anything the AI is unsure about', n: 0, note: 'this week' },
  ],
};

export const byId = (arr: { id: string }[]) => Object.fromEntries(arr.map((x) => [x.id, x]));
export const convById = byId(CONVERSATIONS);
export const contactById = byId(CONTACTS);
