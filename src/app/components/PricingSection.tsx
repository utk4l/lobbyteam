import { Fragment } from 'react';
import { Icon, IconName } from './Icons';
import { Reveal } from './Reveal';

const FAQS = [
  {
    q: 'How fast until my number is live?',
    a: 'Under two minutes. Pick a number when you sign up, then call it — watching it answer is part of the sign-up.',
  },
  {
    q: 'What does it cost?',
    a: '14 days free first, no card. Then flat-rate tiers by volume, priced on this page. Overage is a published rate too.',
  },
  {
    q: 'What happens when it gets something wrong?',
    a: 'It tells you — with everything it checked and what it suggests you do. And you can jump into any conversation at any moment; it steps back.',
  },
  {
    q: 'What does it actually do all day?',
    a: 'The front desk, end to end: greets every caller and visitor, works out what they need, resolves what it can, books the rest, and follows up until it is done.',
  },
  {
    q: 'Can I cancel?',
    a: 'Anytime, with no notice period and no lockup. Your full data export comes with you.',
  },
];

type Tier = {
  name: string;
  icon: IconName;
  bar?: number;
  price: string;
  priceNote?: string;
  blurb: string;
  roi: string;
  roiSub?: string;
  calls?: string;
  sms?: string;
  actions?: string;
  features?: string[];
  cta: string;
  popular?: boolean;
  onRequest?: boolean;
};

const TIERS: Tier[] = [
  {
    name: 'Starter',
    icon: 'spark',
    bar: 8,
    price: '$49',
    blurb: 'For one person wearing every hat. Never miss a lead again.',
    roi: 'Pays for itself in one job',
    calls: '400',
    sms: '800',
    actions: '2,000',
    cta: 'Start 14 days free',
  },
  {
    name: 'Pro',
    icon: 'star',
    bar: 30,
    price: '$149',
    blurb: 'For small teams juggling phones, chats, and customers all day. Most businesses land here.',
    roi: 'Pays for itself in one job',
    roiSub: '≈ $850 back a month',
    calls: '1,500',
    sms: '3,000',
    actions: '7,500',
    cta: 'Start 14 days free',
    popular: true,
  },
  {
    name: 'Max',
    icon: 'bolt',
    bar: 100,
    price: '$399',
    blurb: 'Multi-location and heavy call traffic. Every plan, at full volume.',
    roi: 'Pays for itself in two jobs',
    roiSub: '≈ $3,600 back a month',
    calls: '5,000',
    sms: '10,000',
    actions: '25,000',
    cta: 'Start 14 days free',
  },
  {
    name: 'Ultra',
    icon: 'gem',
    price: 'On request',
    priceNote: 'Priced for your volume',
    blurb: 'Custom volume, real security, and a human on the line.',
    roi: 'We model your ROI before you commit',
    features: [
      'Custom call, SMS & AI action volume',
      'Enterprise security & SSO',
      'Dedicated onboarding & support',
      'Priority line with an SLA',
    ],
    cta: 'Contact sales',
    onRequest: true,
  },
];


type CompareCell = boolean | string;

const COMPARE: { group: string; rows: [string, CompareCell, CompareCell, CompareCell, CompareCell][] }[] = [
  {
    group: 'Volume included',
    rows: [
      ['Calls received', '400/mo', '1,500/mo', '5,000/mo', 'Custom'],
      ['SMS sent', '800/mo', '3,000/mo', '10,000/mo', 'Custom'],
      ['AI actions', '2,000/mo', '7,500/mo', '25,000/mo', 'Custom'],
    ],
  },
  {
    group: 'Front desk',
    rows: [
      ['Answers the phone 24/7', true, true, true, true],
      ['Website chat, WhatsApp & iMessage', true, true, true, true],
      ['Books jobs, callbacks & confirms', true, true, true, true],
      ['Follow-ups, reminders & review requests', true, true, true, true],
    ],
  },
  {
    group: 'Back office',
    rows: [
      ['Every conversation summarized', true, true, true, true],
      ['Customer history, in one place', true, true, true, true],
      ['Watch live & replay any call', true, true, true, true],
    ],
  },
  {
    group: 'Control & trust',
    rows: [
      ['Take over any conversation', true, true, true, true],
      ['Your rules: tone, hours & boundaries', true, true, true, true],
      ['Trained on your business', true, true, true, true],
      ['Full data export, anytime', true, true, true, true],
    ],
  },
  {
    group: 'Support',
    rows: [
      ['Support', 'Email', 'Priority chat', 'Priority chat + phone', 'Dedicated CSM & SLA'],
      ['Enterprise security & SSO', false, false, false, true],
    ],
  },
];

const PLAN_HEADS = [
  { name: 'Starter', price: '$49/mo' },
  { name: 'Pro', price: '$149/mo', popular: true },
  { name: 'Max', price: '$399/mo' },
  { name: 'Ultra', price: 'On request' },
];

function CompareTable() {
  return (
    <div className="overflow-x-auto rounded-md border border-ink/10 bg-white">
      <table className="w-full min-w-[720px] border-collapse text-left">
        <thead>
          <tr className="border-b border-ink/10">
            <th className="w-[34%] p-4 align-bottom md:p-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/40">
                Feature
              </span>
            </th>
            {PLAN_HEADS.map((h) => (
              <th key={h.name} className="p-4 align-bottom md:px-5">
                <div className={h.popular ? 'rounded-sm bg-ink px-3 py-2.5' : 'px-3 py-2.5'}>
                  <p className={`text-sm font-semibold ${h.popular ? 'text-paper' : ''}`}>
                    {h.name}
                    {h.popular && (
                      <span className="ml-2 font-mono text-[9px] uppercase tracking-[0.1em] text-moss">
                        Most popular
                      </span>
                    )}
                  </p>
                  <p className={`font-mono text-[10px] ${h.popular ? 'text-paper/50' : 'text-ink/40'}`}>
                    {h.price}
                  </p>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {COMPARE.map((g) => (
            <Fragment key={g.group}>
              <tr className="border-b border-ink/10 bg-paper/60">
                <td colSpan={5} className="px-4 py-2.5 md:px-5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/45">
                    {g.group}
                  </span>
                </td>
              </tr>
              {g.rows.map((r) => (
                <tr key={r[0]} className="border-b border-ink/5 last:border-b-0">
                  <td className="px-4 py-3 text-[13px] text-ink/70 md:px-5">{r[0]}</td>
                  {r.slice(1).map((cell, i) => (
                    <td key={i} className="px-4 py-3 text-[13px] md:px-5">
                      {cell === true ? (
                        <Check className="h-4 w-4 text-moss" />
                      ) : cell === false ? (
                        <span className="text-ink/25">—</span>
                      ) : (
                        <span className={i === 3 && cell === 'Custom' ? 'font-medium' : 'text-ink/70'}>
                          {cell}
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </Fragment>
          ))}
          <tr>
            <td className="px-4 py-4 md:px-5" />
            {PLAN_HEADS.map((h) => (
              <td key={h.name} className="px-4 py-4 md:px-5">
                <a
                  href="#top"
                  className={`fluid inline-flex w-full items-center justify-center rounded-sm px-3 py-2.5 text-[13px] font-medium ${
                    h.popular
                      ? 'bg-ink text-paper hover:bg-moss'
                      : 'border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-paper'
                  }`}
                >
                  {h.name === 'Ultra' ? 'Contact sales' : 'Start 14 days free'}
                </a>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}



function Check({ className }: { className?: string }) {
  return (
    <svg
      className={`mt-0.5 h-4 w-4 shrink-0 ${className ?? ''}`}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 8.5 6.5 12 13 4.5" />
    </svg>
  );
}

function Meter({ label, value, dark }: { label: string; value: string; dark?: boolean }) {
  return (
    <div
      className={`flex items-baseline justify-between gap-3 border-b py-2 text-[13px] last:border-b-0 ${
        dark ? 'border-paper/15' : 'border-ink/10'
      }`}
    >
      <span className="opacity-60">{label}</span>
      <span className="font-medium tabular-nums">
        {value}
        <span className="ml-1 font-mono text-[10px] uppercase opacity-50">/mo</span>
      </span>
    </div>
  );
}

function RoiBadge({ roi, roiSub, dark }: { roi: string; roiSub?: string; dark?: boolean }) {
  return (
    <div
      className={`rounded-sm border px-3.5 py-2.5 ${
        dark ? 'border-moss/40 bg-moss/15' : 'border-moss/30 bg-moss/10'
      }`}
    >
      <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-moss">
        Projected ROI
      </p>
      <p className={`mt-1 text-[12.5px] font-medium leading-snug ${dark ? 'text-paper/85' : 'text-ink/75'}`}>
        {roi}
      </p>
      {roiSub && (
        <p className={`mt-0.5 font-mono text-[11px] leading-snug ${dark ? 'text-moss' : 'text-moss'}`}>
          {roiSub}
        </p>
      )}
    </div>
  );
}

function TierCard({ tier, delay }: { tier: Tier; delay: number }) {
  const dark = tier.popular;
  return (
    <Reveal delay={delay} className="h-full">
      <div
        className={`relative flex h-full flex-col rounded-md p-6 ${
          dark
            ? 'bg-ink text-paper shadow-[0_32px_64px_-40px_rgba(23,21,18,0.5)]'
            : 'border border-ink/10 bg-white'
        }`}
      >
        {tier.popular && (
          <span className="absolute right-4 top-4 rounded-sm bg-moss px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-paper">
            Most popular
          </span>
        )}
        <p className={`flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.16em] ${dark ? 'text-paper/50' : 'text-ink/40'}`}>
          <span className={`grid h-7 w-7 place-items-center rounded-sm border ${dark ? 'border-moss/40 bg-moss/15 text-moss' : 'border-ink/10 bg-paper text-ink/55'}`}>
            <Icon name={tier.icon} className="h-3.5 w-3.5" />
          </span>
          {tier.name}
        </p>
        <div className="mt-5 flex items-baseline gap-1.5">
          <span className={`font-display leading-none ${tier.onRequest ? 'text-3xl' : 'text-5xl'}`}>
            {tier.price}
          </span>
          {!tier.onRequest && (
            <span className={`font-mono text-xs ${dark ? 'text-paper/50' : 'text-ink/40'}`}>/mo</span>
          )}
        </div>
        {tier.priceNote && (
          <p className={`mt-1 font-mono text-[10px] uppercase tracking-[0.12em] ${dark ? 'text-paper/40' : 'text-ink/40'}`}>
            {tier.priceNote}
          </p>
        )}
        <p className={`mt-4 text-[13px] leading-relaxed ${dark ? 'text-paper/70' : 'text-ink/60'}`}>
          {tier.blurb}
        </p>
        <div className="mt-5">
          <RoiBadge roi={tier.roi} roiSub={tier.roiSub} dark={dark} />
        </div>
        {tier.calls !== undefined && (
          <div className={`mt-5 rounded-sm border px-4 py-2 ${dark ? 'border-paper/15' : 'border-ink/10'}`}>
            <p
              className={`pt-1 font-mono text-[9px] uppercase tracking-[0.16em] ${
                dark ? 'text-paper/40' : 'text-ink/35'
              }`}
            >
              Volume included
            </p>
            <Meter label="Calls received" value={tier.calls} dark={dark} />
            <Meter label="SMS sent" value={tier.sms ?? '—'} dark={dark} />
            <Meter label="AI actions" value={tier.actions ?? '—'} dark={dark} />
            {tier.bar !== undefined && (
              <div className={`mt-3 h-1 overflow-hidden rounded-full ${dark ? 'bg-paper/15' : 'bg-ink/8'}`}>
                <div className="h-full rounded-full bg-moss" style={{ width: `${tier.bar}%` }} />
              </div>
            )}
          </div>
        )}
        {tier.features && (
          <ul
            className={`mt-5 space-y-2.5 rounded-sm border p-4 text-[13px] leading-snug ${
              dark ? 'border-paper/15 text-paper/75' : 'border-ink/10 text-ink/70'
            }`}
          >
            {tier.features.map((f) => (
              <li key={f} className="flex gap-2.5">
                <Check className={dark ? 'text-moss' : 'text-moss'} />
                {f}
              </li>
            ))}
          </ul>
        )}
        <a
          href="#top"
          className={`fluid mt-6 inline-flex w-full items-center justify-center rounded-sm px-4 py-3 text-[15px] font-medium ${
            dark ? 'bg-paper text-ink hover:bg-live' : 'bg-ink text-paper hover:bg-moss'
          }`}
        >
          {tier.cta}
        </a>
        <p
          className={`mt-3 text-center font-mono text-[9px] uppercase tracking-[0.12em] ${
            dark ? 'text-paper/40' : 'text-ink/40'
          }`}
        >
          {tier.onRequest ? 'Replies within one business day' : '14 days free first · No card'}
        </p>
      </div>
    </Reveal>
  );
}

export function PricingSection() {
  return (
    <section id="pricing" className="scroll-mt-16 border-t border-ink/10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/40">Pricing</p>
          <h2 className="mt-6 max-w-2xl font-display text-4xl leading-[1.05] tracking-[-0.01em] md:text-5xl">
            Try it free. Grow when the phone gets busy.
          </h2>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink/60">
            Start with 14 days free, no card required. When your volume grows, the plan grows
            with it. Flat rate per tier, published here, no per-call surprises.
          </p>
        </Reveal>

        {/* Tiers */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TIERS.map((t, i) => (
            <TierCard key={t.name} tier={t} delay={i * 40} />
          ))}
        </div>

        {/* The assumption behind the ROI badges, stated plainly */}
        <Reveal>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-ink/50">
            The ROI math, stated plainly: each recovered job or sale is assumed to be worth
            about $250. If yours is worth more, so is the return.
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/50">
            Go over a tier and calls keep getting answered — overage is a published rate, shown
            before you subscribe, never mid-call.
          </p>
        </Reveal>

        {/* Compare features & plans */}
        <Reveal>
          <div className="mt-16">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/40">
                  Compare features &amp; plans
                </p>
                <h3 className="mt-4 font-display text-2xl md:text-3xl">
                  The front desk is the same on every plan.
                  <br />
                  Volume is the only fence.
                </h3>
              </div>
              <p className="max-w-[34ch] text-sm leading-relaxed text-ink/50">
                Paid plans differ in volume and the level of support behind them. Everything else
                is in from the first call.
              </p>
            </div>
            <CompareTable />
          </div>
        </Reveal>

        {/* Final CTA + mini FAQ */}
        <div className="mt-24 grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <h3 className="font-display text-4xl leading-[1.05] tracking-[-0.01em] md:text-5xl">
              Your next customer should not hear voicemail.
            </h3>
            <p className="mt-7 max-w-[46ch] text-[15px] leading-relaxed text-ink/60">
              Pick a number, call it, and watch the AI answer. It is free for 14 days — and if
              it is not for you, walk away with all your data.
            </p>
            <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <a
                href="#top"
                className="fluid inline-flex items-center gap-2 rounded-sm bg-ink px-7 py-4 text-base font-medium text-paper hover:bg-moss"
              >
                Start free, live in 2 minutes
                <span aria-hidden="true">→</span>
              </a>
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink/45">
                14 days free · No card · Cancel anytime
              </p>
            </div>
          </Reveal>

          <Reveal delay={40}>
            <div id="faq" className="scroll-mt-24">
              <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/40">
                Quick answers
              </p>
              <div className="divide-y divide-ink/10 border-t border-ink/10">
                {FAQS.map(({ q, a }) => (
                  <details key={q} className="group py-4">
                    <summary className="fluid flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-medium [&::-webkit-details-marker]:hidden">
                      {q}
                      <span className="font-mono text-lg leading-none text-ink/35 transition-transform duration-300 ease-[var(--ease-fluid)] group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-ink/55">{a}</p>
                  </details>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
