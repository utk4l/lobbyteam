import { ReactNode } from 'react';
import { BrandIcon, BrandName, Icon, IconName } from '../components/Icons';
import { Navigation } from '../components/Navigation';
import { Reveal } from '../components/Reveal';
import { Footer } from '../components/Footer';

type Status = 'Built in' | 'Live';

type Tool = {
  name: string;
  icon: IconName;
  brand?: BrandName;
  line: string;
  status: Status;
};

type Group = {
  id: string;
  group: string;
  blurb: string;
  tools: Tool[];
};

const GROUPS: Group[] = [
  {
    id: 'cat-service-management',
    group: 'Service management',
    blurb: 'Turn every answered call into a job in the software your team already runs on.',
    tools: [
      {
        name: 'ServiceM8',
        icon: 'calendar',
        brand: 'servicem8',
        line: 'Turn answered calls into ServiceM8 jobs, ready to schedule.',
        status: 'Live',
      },
      {
        name: 'simPRO',
        icon: 'calendar',
        brand: 'simpro',
        line: 'Turn answered calls into simPRO jobs, ready to schedule.',
        status: 'Live',
      },
    ],
  },
  {
    id: 'cat-calendars',
    group: 'Calendars',
    blurb: 'Converso checks your real availability and books straight into your calendar.',
    tools: [
      {
        name: 'Google Calendar',
        icon: 'calendar',
        brand: 'googlecalendar',
        line: 'Converso books jobs against your live Google Calendar availability.',
        status: 'Live',
      },
      {
        name: 'Outlook Calendar',
        icon: 'calendar',
        brand: 'outlook',
        line: 'Check availability and book straight into Outlook.',
        status: 'Live',
      },
    ],
  },
  {
    id: 'cat-accounting',
    group: 'Accounting',
    blurb: 'Send customers and invoices to your accounting tools the moment a job wraps.',
    tools: [
      {
        name: 'Xero',
        icon: 'note',
        brand: 'xero',
        line: 'Raise and send Xero invoices as soon as a job wraps up.',
        status: 'Live',
      },
      {
        name: 'QuickBooks',
        icon: 'note',
        brand: 'quickbooks',
        line: 'Sync new customers and invoices to QuickBooks Online.',
        status: 'Live',
      },
    ],
  },
  {
    id: 'cat-communication',
    group: 'Communication',
    blurb: 'Answer calls and follow up by SMS, WhatsApp, and email, all from one place.',
    tools: [
      {
        name: 'Phone',
        icon: 'phone',
        line: 'Built in, no connection needed: answers every call and books the work on the spot.',
        status: 'Built in',
      },
      {
        name: 'SMS',
        icon: 'chat',
        line: 'Built in, no connection needed: text callers booking confirmations and reminders instantly.',
        status: 'Built in',
      },
      {
        name: 'WhatsApp',
        icon: 'whatsapp',
        brand: 'whatsapp',
        line: 'Answer enquiries and book jobs on WhatsApp — same front desk, same notes.',
        status: 'Built in',
      },
      {
        name: 'iMessage',
        icon: 'imessage',
        brand: 'imessage',
        line: 'Answer enquiries in iMessage through Apple Business Connect — same front desk, same notes.',
        status: 'Built in',
      },
      {
        name: 'Website chat',
        icon: 'chat',
        line: 'Paste one script tag and your site answers visitors while you are working.',
        status: 'Built in',
      },
      {
        name: 'Gmail',
        icon: 'chat',
        brand: 'gmail',
        line: 'Follow up callers by email from your connected Gmail.',
        status: 'Live',
      },
      {
        name: 'Outlook',
        icon: 'chat',
        brand: 'outlook',
        line: 'Send confirmations and quotes from your Outlook inbox.',
        status: 'Live',
      },
    ],
  },
  {
    id: 'cat-automation',
    group: 'Automation',
    blurb: 'Wire Converso into thousands of tools with no-code automation and webhooks.',
    tools: [
      {
        name: 'Zapier',
        icon: 'loop',
        brand: 'zapier',
        line: 'Wire Converso into thousands of apps with Zapier.',
        status: 'Live',
      },
      {
        name: 'Webhooks',
        icon: 'webhook',
        line: 'Send call and booking events to any endpoint you like.',
        status: 'Live',
      },
    ],
  },
];

function StatusChip({ status }: { status: Status }) {
  return (
    <span className="shrink-0 rounded-sm border border-moss/30 bg-moss/10 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-moss">
      {status}
    </span>
  );
}

const FAQS = [
  {
    q: 'Don’t see the tool you use?',
    a: 'We are adding integrations in the order customers ask for them. Tell us what you run your business on and we will prioritise it.',
  },
  {
    q: 'How long does each connection take?',
    a: 'A new phone number: live in your sign-up session. Porting your existing number: a few days, and the new number runs meanwhile.',
  },
  {
    q: 'Is my business data secure?',
    a: 'Everything is isolated per business, you can export or delete it at any time, and it belongs to you — not to us.',
  },
  {
    q: 'Do you have an API?',
    a: 'Full export in standard formats is available on every plan.',
  },
];

function Section({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <section className={`border-t border-ink/10 py-24 md:py-28 ${className ?? ''}`}>
      <div className="mx-auto max-w-6xl px-6">{children}</div>
    </section>
  );
}

export function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navigation remote />
      <main id="main" className="pt-16">
        {/* Hero */}
        <section className="relative pb-4 pt-24 md:pt-32">
          <div className="dot-grid pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="relative mx-auto max-w-6xl px-6">
            <p className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/55">
              <span className="live-dot h-2 w-2 rounded-full bg-live" aria-hidden="true" />
              Converso integrates
            </p>
            <h1 className="mt-7 max-w-3xl font-display text-[clamp(1.75rem,7vw,3.25rem)] leading-[1.0] tracking-[-0.015em]">
              with the tools you already run.
            </h1>
            <p className="mt-7 max-w-[52ch] text-lg leading-relaxed text-ink/65">
              Connect your calendars, accounting, and channels, and every conversation lands in the tools
              you already use. No new app to log into, no second system of record — the work just shows
              up where you expect it.
            </p>
            <p className="mt-10 max-w-[52ch] border-l-2 border-moss/40 pl-5 text-[15px] leading-relaxed text-ink/55">
              Converso was never meant to be one more app on your phone. It sits on top of the
              tools you already run, so the front desk feels like part of your day — not a new one.
            </p>
          </div>
        </section>

        {/* Directory */}
        <Section>
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/40">
              Every tool, one front desk
            </p>
            <h2 className="mt-6 max-w-xl font-display text-4xl leading-[1.05] tracking-[-0.01em] md:text-5xl">
              Find the software you already use.
            </h2>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {GROUPS.map((g) => (
                <a
                  key={g.group}
                  href={`#${g.id}`}
                  className="rounded-sm border border-ink/15 bg-white px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-ink/55 transition-colors hover:border-ink/40 hover:text-ink"
                >
                  {g.group}
                </a>
              ))}
            </div>
          </Reveal>
          <div className="mt-12 space-y-14">
            {GROUPS.map((g, gi) => (
              <Reveal key={g.group} delay={gi * 40}>
                <div id={g.id} className="scroll-mt-24">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="font-display text-2xl">{g.group}</h3>
                    <p className="max-w-[44ch] text-sm leading-relaxed text-ink/50">{g.blurb}</p>
                  </div>
                  <div className="mt-6 grid gap-4 md:grid-cols-3">
                    {g.tools.map((t) => (
                      <div
                        key={t.name}
                        className="flex flex-col rounded-md border border-ink/10 bg-white p-6 transition-colors duration-500 hover:border-ink/35"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className="flex items-center gap-3 text-[15px] font-semibold">
                            <span className="grid h-9 w-9 place-items-center rounded-sm border border-ink/10 bg-paper text-ink/60">
                              {t.brand ? (
                                <BrandIcon name={t.brand} className="h-4.5 w-auto max-w-8" />
                              ) : (
                                <Icon name={t.icon} className="h-4.5 w-4.5" />
                              )}
                            </span>
                            {t.name}
                          </span>
                          <StatusChip status={t.status} />
                        </div>
                        <p className="mt-3 text-[13.5px] leading-relaxed text-ink/60">{t.line}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* FAQ */}
        <Section>
          <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/40">
                Frequently asked
              </p>
              <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-[-0.01em] md:text-5xl">
                Before you ask.
              </h2>
            </Reveal>
            <Reveal delay={60}>
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
            </Reveal>
          </div>
        </Section>

        {/* CTA */}
        <Section className="pb-28">
          <Reveal>
            <div className="relative overflow-hidden rounded-md bg-ink px-8 py-14 text-paper md:px-14">
              <div className="dot-grid-dark pointer-events-none absolute inset-0" aria-hidden="true" />
              <h2 className="relative max-w-2xl font-display text-3xl leading-[1.05] tracking-[-0.01em] md:text-5xl">
                Ready to stop being the front desk?
              </h2>
              <p className="relative mt-6 max-w-[48ch] text-[15px] leading-relaxed text-paper/65">
                Converso answers, sorts, books, and follows up — and the work lands in the tools
                you already run. Live in two minutes, free for 14 days, no card.
              </p>
              <a
                href="/#pricing"
                className="fluid relative mt-9 inline-flex items-center gap-2 rounded-sm bg-paper px-7 py-4 text-base font-medium text-ink hover:bg-live"
              >
                Try it free <span aria-hidden="true">→</span>
              </a>
            </div>
          </Reveal>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
