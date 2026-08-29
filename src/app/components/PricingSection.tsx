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
    q: 'Do I need technical setup?',
    a: 'No. It works from the first call with safe defaults. Add your business details and it gets better — but nothing blocks going live.',
  },
  {
    q: 'Can I cancel?',
    a: 'Anytime, with no notice period and no lockup. Your full data export comes with you.',
  },
];

type Tier = {
  name: string;
  price: string;
  blurb: string;
  calls: string;
  sms: string;
  actions: string;
  cta: string;
  popular?: boolean;
};

const TIERS: Tier[] = [
  {
    name: 'Solo',
    price: '$49',
    blurb: 'For one person wearing every hat. Never miss a lead again.',
    calls: '400',
    sms: '800',
    actions: '2,000',
    cta: 'Start 14 days free',
  },
  {
    name: 'Team',
    price: '$149',
    blurb: 'For small teams juggling phones, chats, and customers all day. Most businesses land here.',
    calls: '1,500',
    sms: '3,000',
    actions: '7,500',
    cta: 'Start 14 days free',
    popular: true,
  },
  {
    name: 'Scale',
    price: '$399',
    blurb: 'Multi-location and heavy call traffic. Every plan, at full volume.',
    calls: '5,000',
    sms: '10,000',
    actions: '25,000',
    cta: 'Start 14 days free',
  },
];

const EVERY_PLAN = [
  'Phone, website chat, and WhatsApp',
  'All four jobs: answers, handles, remembers, shows its work',
  'Zoho CRM sync',
  'Watch live, replay any call, export everything',
];

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
    <div className={`flex items-baseline justify-between gap-3 border-b py-2 text-[13px] last:border-b-0 ${dark ? 'border-paper/15' : 'border-ink/10'}`}>
      <span className="opacity-60">{label}</span>
      <span className="font-medium tabular-nums">
        {value}
        <span className="ml-1 font-mono text-[10px] uppercase opacity-50">/mo</span>
      </span>
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
        <p className={`font-mono text-[11px] uppercase tracking-[0.16em] ${dark ? 'text-paper/50' : 'text-ink/40'}`}>
          {tier.name}
        </p>
        <div className="mt-5 flex items-baseline gap-1.5">
          <span className="font-display text-5xl leading-none">{tier.price}</span>
          <span className={`font-mono text-xs ${dark ? 'text-paper/50' : 'text-ink/40'}`}>/mo</span>
        </div>
        <p className={`mt-4 text-[13px] leading-relaxed ${dark ? 'text-paper/70' : 'text-ink/60'}`}>
          {tier.blurb}
        </p>
        <div className={`mt-6 rounded-sm border px-4 py-2 ${dark ? 'border-paper/15' : 'border-ink/10'}`}>
          <p className={`pt-1 font-mono text-[9px] uppercase tracking-[0.16em] ${dark ? 'text-paper/40' : 'text-ink/35'}`}>
            Volume included
          </p>
          <Meter label="Calls received" value={tier.calls} dark={dark} />
          <Meter label="SMS sent" value={tier.sms} dark={dark} />
          <Meter label="AI actions" value={tier.actions} dark={dark} />
        </div>
        <a
          href="#top"
          className={`fluid mt-6 inline-flex w-full items-center justify-center rounded-sm px-4 py-3 text-[15px] font-medium ${
            dark
              ? 'bg-paper text-ink hover:bg-live'
              : 'bg-ink text-paper hover:bg-moss'
          }`}
        >
          {tier.cta}
        </a>
        <p
          className={`mt-3 text-center font-mono text-[9px] uppercase tracking-[0.12em] ${
            dark ? 'text-paper/40' : 'text-ink/40'
          }`}
        >
'14 days free first · No card'
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
        <div className="mt-14 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TIERS.map((t, i) => (
            <TierCard key={t.name} tier={t} delay={i * 40} />
          ))}
        </div>

        {/* Overage, said plainly */}
        <Reveal>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-ink/50">
            Go over a tier? Calls keep getting answered. Overage is billed at a published rate,
            shown to you before you subscribe — never mid-call.
          </p>
        </Reveal>

        {/* Every plan */}
        <Reveal>
          <div className="mt-12 rounded-md border border-ink/10 bg-white p-7 md:p-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/40">
              On every plan, free or not
            </p>
            <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {EVERY_PLAN.map((f) => (
                <li key={f} className="flex gap-3 text-[14px] text-ink/70">
                  <Check className="text-moss" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Enterprise */}
        <Reveal>
          <div className="mt-4 grid items-center gap-8 rounded-md border border-ink/15 bg-ink p-8 text-paper md:grid-cols-[1fr_auto] md:p-10">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-paper/50">
                Enterprise
              </p>
              <h3 className="mt-3 font-display text-2xl md:text-3xl">
                Custom volume, real security, a human on the line.
              </h3>
              <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-paper/65">
                Custom call and message limits, dedicated onboarding and support, enterprise
                security with SSO, and a priority line with an SLA.
              </p>
            </div>
            {/* Point at the contact page when it exists */}
            <a
              href="#top"
              className="fluid inline-flex items-center justify-center gap-2 rounded-sm bg-paper px-6 py-3.5 text-[15px] font-medium text-ink hover:bg-live"
            >
              Contact sales <span aria-hidden="true">→</span>
            </a>
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
