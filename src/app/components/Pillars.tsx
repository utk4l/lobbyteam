import { ReactNode } from 'react';
import { Reveal } from './Reveal';

function Chip({ label, tone = 'moss' }: { label: string; tone?: 'moss' | 'ink' }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-sm border px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] ${
        tone === 'moss' ? 'border-moss/30 bg-moss/10 text-moss' : 'border-ink/15 bg-ink/5 text-ink/60'
      }`}
    >
      {tone === 'moss' && (
        <svg
          className="h-3 w-3"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 8.5 6.5 12 13 4.5" />
        </svg>
      )}
      {label}
    </span>
  );
}


/* 01 — a call, mid-flight */
function CallMock() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between border-b border-ink/10 pb-3">
        <span className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-ink/70">
          <span className="live-dot h-2 w-2 rounded-full bg-live" /> Live call
        </span>
        <span className="font-mono text-[11px] text-ink/35">Sam · +1 415 555 0182</span>
      </div>
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink/35">Caller</p>
        <p className="mt-1 text-[15px] leading-snug text-ink/75">
          "Hi — do you do same-day repairs?"
        </p>
      </div>
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink/35">Converso</p>
        <p className="mt-1 text-[15px] leading-snug text-ink">
          "Of course. Where are you, and what is the issue?"
        </p>
      </div>
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink/35">Converso</p>
        <p className="mt-1 text-[15px] leading-snug text-ink">
          "Done — I have booked you for 2 pm. You will get a text to confirm."
        </p>
      </div>
      <div className="pt-1">
        <Chip label="Booked · 2 pm · confirmation sent" />
      </div>
    </div>
  );
}

/* 02 — two endings, same hour */
function HandlesMock() {
  return (
    <div className="space-y-4">
      <div className="rounded-sm border border-ink/10 bg-white px-4 py-3.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="font-mono text-[11px] text-ink/70">Order #4821 delayed</span>
          <Chip label="Done · no one needed" />
        </div>
        <p className="mt-2 text-[13px] leading-relaxed text-ink/55">
          Explained the delay, sent the tracking link. Customer is on their way.
        </p>
      </div>
      <div className="rounded-sm border border-ink/10 bg-white px-4 py-3.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="font-mono text-[11px] text-ink/70">New lead · Priya S.</span>
          <Chip label="Callback booked · 4:00 pm" />
        </div>
        <p className="mt-2 text-[13px] leading-relaxed text-ink/55">
          Wants 3 seats, asked about pricing, deciding this week. Everything written down.
        </p>
      </div>
    </div>
  );
}

/* 03 — the 30-second note */
function RemembersMock() {
  return (
    <div className="space-y-4">
      <div className="rounded-sm border border-ink/10 bg-white px-4 py-3.5 font-mono text-[11px] leading-relaxed text-ink/70">
        <p className="flex justify-between gap-4">
          <span>Priya S. · called 9:41 am</span>
          <span className="text-moss">Nothing needed</span>
        </p>
        <p className="mt-1.5 text-ink/50">Asked about order #4821</p>
        <p className="mt-1 text-ink/50">Tracking sent · happy with the answer</p>
      </div>
      <a
        href="/app"
        className="flex items-center justify-between rounded-sm border border-ink/10 bg-white px-4 py-3 font-mono text-[11px] text-ink/60 transition-colors hover:border-ink/30 hover:text-ink"
      >
        Rahul S. — everything he has ever said, in one place
        <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}

/* 04 — the trail, every step with a reason */
function TrailMock() {
  const steps = [
    { t: '10:38', text: 'Customer asked for a full refund' },
    { t: '10:38', text: 'Found order #4821 — bought 38 days ago' },
    { t: '10:39', text: 'Full-refund window is 7 days — passed' },
    { t: '10:39', text: 'Offered a 30-day extension credit, per your policy' },
    { t: '10:41', text: 'He asked for the full amount — above its approval limit' },
  ];
  return (
    <div className="space-y-4">
      <ul className="space-y-2.5">
        {steps.map((s, i) => (
          <li key={i} className="flex gap-3 font-mono text-[11px] leading-relaxed">
            <span className="w-10 shrink-0 text-ink/30">{s.t}</span>
            <span className="text-ink/70">{s.text}</span>
          </li>
        ))}
      </ul>
      <p className="border-t border-ink/10 pt-3 font-mono text-[11px] text-ink/70">
        Brought it to you, with everything it checked.
      </p>
      <div>
        <span className="inline-flex items-center gap-2 rounded-sm bg-ink px-4 py-2 text-[12px] font-medium text-paper">
          Take over this call <span aria-hidden="true">→</span>
        </span>
        <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.1em] text-ink/40">
          Converso steps back · the context stays
        </p>
      </div>
    </div>
  );
}

type Pillar = {
  n: string;
  job: string;
  title: string;
  body: string;
  mock: ReactNode;
  caption: string;
  cta?: { href: string; label: string };
};

const PILLARS: Pillar[] = [
  {
    n: '01',
    job: 'Answers',
    title: 'Every call answered. Any hour, any day.',
    body: 'First ring, day or night. Converso sounds like your team, because it knows your business — what you do, what you charge, what it can promise.',
    mock: <CallMock />,
    caption: 'A real call, streamed live as it happens',
    cta: { href: '#how-it-works', label: 'Your number, live in 2 minutes' },
  },
  {
    n: '02',
    job: 'Handles',
    title: 'It works out what they need — and handles it.',
    body: "Most calls don't need you. It answers the question, fixes the problem, or books the follow-up — while they are still on the line. The calls that do need you arrive already sorted.",
    mock: <HandlesMock />,
    caption: 'Same hour. Same phone. Two different endings — both handled.',
  },
  {
    n: '03',
    job: 'Remembers',
    title: 'By morning, it is all written down.',
    body: 'Every call, chat, and message ends as a short note: who, what they needed, what happened next. Open any customer and see their whole story in one place. Your CRM fills itself as it goes.',
    mock: <RemembersMock />,
    caption: '30 seconds to read. An hour of call to record.',
  },
  {
    n: '04',
    job: 'Shows its work',
    title: 'It never fakes it. Every step has a reason.',
    body: 'When Converso does something, you can see what it did, when, and why. And one tap puts you on the call, with the full context. You are never locked out of your own customers.',
    mock: <TrailMock />,
    caption: 'Ask it why it did anything. It will tell you.',
  },
];

export function Pillars() {
  return (
    <section id="what-it-does" className="scroll-mt-16 border-t border-ink/10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/40">
            The four jobs
          </p>
          <h2 className="mt-6 max-w-2xl font-display text-4xl leading-[1.05] tracking-[-0.01em] md:text-5xl">
            Four things. Done every single time.
          </h2>
          <p className="mt-6 max-w-[52ch] text-[15px] leading-relaxed text-ink/60">
            It answers, it handles, it remembers, and it shows its work. That is the whole job —
            and it does not get tired of it.
          </p>
        </Reveal>

        <div className="mt-16 space-y-4">
          {PILLARS.map((p, i) => (
            <Reveal key={p.n} delay={Math.min(i, 2) * 40}>
              <div className="grid items-center gap-8 rounded-md border border-ink/10 bg-white p-6 transition-colors duration-500 hover:border-ink/35 md:grid-cols-[0.9fr_1.1fr] md:gap-10 md:p-10">
                <div className="min-w-0">
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-4xl leading-none text-ink/20">{p.n}</span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-moss">
                      {p.job}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl leading-tight md:text-3xl">{p.title}</h3>
                  <p className="mt-4 max-w-[46ch] text-[15px] leading-relaxed text-ink/60">{p.body}</p>
                  {p.cta && (
                    <a
                      href={p.cta.href}
                      className="fluid mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-ink/60 hover:text-moss"
                    >
                      {p.cta.label} <span aria-hidden="true">→</span>
                    </a>
                  )}
                </div>
                <div className="min-w-0">
                  <div className="rounded-md border border-ink/10 bg-paper/60 p-5 md:p-6">{p.mock}</div>
                  <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.12em] text-ink/35">
                    {p.caption}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
