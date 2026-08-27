import { Reveal } from './Reveal';

const FAQS = [
  {
    q: 'How fast until my number is live?',
    a: 'Under two minutes. You pick a local number during sign up, then call it and watch the AI answer.',
  },
  {
    q: 'Does it work with my CRM?',
    a: 'Zoho first: your CRM keeps profile fields, and we add every conversation, ticket, and summary. HubSpot and Salesforce are on the roadmap.',
  },
  {
    q: 'What happens when the AI gets something wrong?',
    a: 'It escalates to you as a ticket with the full transcript, a summary, and a suggested resolution. You can take over any conversation at any moment.',
  },
  {
    q: 'Do I need technical setup?',
    a: 'No. It works from the first call with safe default agents. Add your business knowledge and it improves; nothing blocks launch.',
  },
  {
    q: 'Which channels does it start on?',
    a: 'Phone, WhatsApp, and website chat. Pick one or all three.',
  },
  {
    q: 'Who owns the data?',
    a: 'You do. Full export in standard formats, anytime, including on the way out.',
  },
  {
    q: 'Can I cancel?',
    a: 'Anytime. No setup fee, no lockup, no notice period.',
  },
];

const INCLUDED = [
  { k: 'No setup fee', v: 'The number is live in your sign-up session, not in a project.' },
  { k: 'No minimum seats', v: 'One owner or ten staff; you pay per conversation, not per seat.' },
  { k: 'Overage is published', v: 'The per-conversation rate is shown before you subscribe.' },
  { k: 'Cancel anytime', v: 'No lockup, no notice period. Your full export comes with you.' },
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

export function PricingSection() {
  return (
    <section id="pricing" className="scroll-mt-16 border-t border-ink/10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/40">Pricing</p>
          <h2 className="mt-6 max-w-2xl font-display text-4xl leading-[1.05] tracking-[-0.01em] md:text-5xl">
            Pay for what it handles.
          </h2>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink/60">
            Pricing is usage based. There is no setup fee and no minimum seat count. Scale up or down, or cancel, at any
            time.
          </p>
        </Reveal>

        {/* Plans */}
        <div className="mt-14 grid max-w-4xl gap-4 md:grid-cols-2">
          <Reveal>
            <div className="relative flex h-full flex-col overflow-hidden rounded-md bg-ink p-8 text-paper">
              <span className="absolute right-4 top-4 rounded-sm bg-moss px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-paper">
                40% off, lifetime
              </span>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-paper/50">
                Early access
              </p>
              <p className="mt-1 text-sm text-paper/50">Limited slots · first cohort</p>
              <div className="mt-8 flex items-baseline gap-2">
                <span className="font-display text-7xl leading-none">$30</span>
                <span className="font-mono text-xs text-paper/50">/month</span>
              </div>
              <ul className="mt-9 space-y-3.5 text-[15px] text-paper/75">
                <li className="flex gap-3">
                  <Check className="text-live" />
                  All channels: phone, WhatsApp, website chat
                </li>
                <li className="flex gap-3">
                  <Check className="text-live" />
                  Support, sales &amp; escalation agents
                </li>
                <li className="flex gap-3">
                  <Check className="text-live" />
                  Zoho CRM sync
                </li>
                <li className="flex gap-3">
                  <Check className="text-live" />
                  Live watch, replay, QA, and full export
                </li>
              </ul>
              <a
                href="#top"
                className="fluid mt-10 inline-flex w-full items-center justify-center rounded-sm bg-paper px-5 py-4 text-base font-medium text-ink hover:bg-live"
              >
                Get early access
              </a>
              <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.12em] text-paper/40">
                Free 14 days first · No card
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="flex h-full flex-col rounded-md border border-ink/10 bg-white p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/40">
                Standard
              </p>
              <p className="mt-1 text-sm text-ink/45">
                Regular pricing after the early access wave
              </p>
              <div className="mt-8 flex items-baseline gap-2">
                <span className="font-display text-7xl leading-none text-ink">$50</span>
                <span className="font-mono text-xs text-ink/40">/month</span>
              </div>
              <ul className="mt-9 space-y-3.5 text-[15px] text-ink/60">
                <li className="flex gap-3">
                  <Check className="text-ink/40" />
                  Everything in early access, same features
                </li>
                <li className="flex gap-3">
                  <Check className="text-ink/40" />
                  Overage at a published rate per conversation
                </li>
                <li className="flex gap-3">
                  <Check className="text-ink/40" />
                  Free for 14 days first, no card
                </li>
              </ul>
              <a
                href="#top"
                className="fluid mt-10 inline-flex w-full items-center justify-center rounded-sm border border-ink/25 px-5 py-4 text-base font-medium text-ink hover:border-ink hover:bg-ink hover:text-paper"
              >
                Start the free trial
              </a>
            </div>
          </Reveal>
        </div>

        {/* Always included */}
        <Reveal>
          <dl className="mt-10 grid max-w-4xl gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
            {INCLUDED.map((it) => (
              <div
                key={it.k}
                className="border-ink/10 py-6 pr-4 lg:border-l lg:first:border-l-0 lg:pl-6 lg:first:pl-0"
              >
                <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink/40">
                  {it.k}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink/65">{it.v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Final CTA + mini FAQ */}
        <div className="mt-24 grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <h3 className="font-display text-4xl leading-[1.05] tracking-[-0.01em] md:text-5xl">
              Your next customer should not hear voicemail.
            </h3>
            <p className="mt-7 max-w-[46ch] text-[15px] leading-relaxed text-ink/60">
              Pick a number, call it, and watch the AI answer. If it is not for you in 14 days,
              walk away with all your data.
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
                Free 14 days · No card · No setup fee
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div id="faq" className="scroll-mt-24">
              <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/40">
                Quick answers
              </p>
              <div className="divide-y divide-ink/10 border-t border-ink/10">
                {FAQS.map(({ q, a }) => (
                  <details key={q} className="group py-4">
                    <summary className="fluid flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-medium [&::-webkit-details-marker]:hidden">
                      {q}
                      <span className="font-mono text-lg leading-none text-ink/35 transition-transform duration-500 group-open:rotate-45">
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
