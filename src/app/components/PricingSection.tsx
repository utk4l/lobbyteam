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

export function PricingSection() {
  return (
    <section id="pricing" className="bg-zinc-50 border-t border-zinc-100 py-24 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-4">
            Pricing
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-zinc-950">
            Pay for what it handles.
          </h2>
          <p className="mt-4 text-lg text-zinc-500 max-w-xl">
            Priced by usage. No setup fee. No minimum seats. Scale up or down, or cancel at any
            time.
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-3xl">
          <Reveal>
            <div className="bg-white border border-zinc-950 rounded-2xl p-8">
              <p className="text-sm font-semibold text-zinc-950">Early access</p>
              <p className="mt-1 text-xs text-zinc-400">Limited slots · 40% lifetime discount</p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-5xl font-semibold text-zinc-950">$30</span>
                <span className="text-zinc-500">/month</span>
              </div>
              <ul className="mt-8 space-y-3 text-base text-zinc-600">
                <li>All channels: phone, WhatsApp, website chat</li>
                <li>Support, sales, and escalation agents</li>
                <li>Zoho CRM sync</li>
                <li>Live watch, replay, QA, and full export</li>
                <li>Free for 14 days first, no card</li>
              </ul>
              <a
                href="#top"
                className="fluid mt-8 inline-flex w-full justify-center bg-zinc-950 text-white text-base font-semibold px-3 py-2 rounded-lg hover:bg-zinc-800"
              >
                Get early access
              </a>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="bg-white border border-zinc-200 rounded-2xl p-8">
              <p className="text-sm font-semibold text-zinc-950">Standard</p>
              <p className="mt-1 text-xs text-zinc-400">
                Regular pricing after the early access wave
              </p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-5xl font-semibold text-zinc-950">$50</span>
                <span className="text-zinc-500">/month</span>
              </div>
              <ul className="mt-8 space-y-3 text-base text-zinc-600">
                <li>Everything in early access, same features</li>
                <li>Overage at a published rate per conversation</li>
                <li>Free for 14 days first, no card</li>
              </ul>
              <a
                href="#top"
                className="fluid mt-8 inline-flex w-full justify-center bg-white border border-zinc-300 text-zinc-950 text-base font-semibold px-3 py-2 rounded-lg hover:bg-zinc-50"
              >
                Start the free trial
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-10 max-w-3xl grid sm:grid-cols-3 gap-6 text-sm text-zinc-500">
            <p>
              Overage beyond your plan bills at a published rate per conversation, shown before you
              sign up. <span className="text-zinc-400">[Exact rate listed at checkout]</span>
            </p>
            <p>
              The trial runs 14 days with full features and no card. On day 13 you see a plain
              recap of what was handled and what it would cost, with no surprise charges after
              that.
            </p>
            <p>
              Cancel anytime. Your data comes with you, full export in standard formats.
            </p>
          </div>
        </Reveal>

        {/* Final CTA, identical to the top, with the mini FAQ beside it */}
        <div className="mt-24 grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <Reveal>
            <h3 className="text-3xl font-semibold text-zinc-950">
              Your next customer should not hear voicemail.
            </h3>
            <p className="mt-4 text-base text-zinc-500 max-w-[680px]">
              Pick a number, call it, and watch the AI answer. If it is not for you in 14 days,
              walk away with all your data.
            </p>
            <div className="mt-10">
              <a
                href="#top"
                className="fluid inline-flex items-center bg-zinc-950 text-white text-base font-semibold px-3 py-2 rounded-lg hover:bg-zinc-800"
              >
                Start free, live in 2 minutes
              </a>
              <p className="mt-4 text-sm text-zinc-400">
                Free for 14 days · No credit card · No setup fee
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div id="faq" className="scroll-mt-24">
              <p className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-6">
                Quick answers
              </p>
              <div className="divide-y divide-zinc-200 border-t border-zinc-200">
                {FAQS.map(({ q, a }) => (
                  <details key={q} className="group py-4">
                    <summary className="fluid cursor-pointer list-none flex items-center justify-between gap-4 text-base font-medium text-zinc-950">
                      {q}
                      <span className="text-lg leading-none text-zinc-400 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-sm text-zinc-500">{a}</p>
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
