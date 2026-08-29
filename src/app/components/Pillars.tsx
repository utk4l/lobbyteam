import { ReactNode } from 'react';
import { Icon, IconName } from './Icons';
import { Reveal } from './Reveal';

function Chip({ label, dark }: { label: string; dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-sm border px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] ${
        dark ? 'border-moss/40 bg-moss/15 text-moss' : 'border-moss/30 bg-moss/10 text-moss'
      }`}
    >
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
      {label}
    </span>
  );
}

/* 01 — the door */
function GreetMock() {
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
          "Hi — it is Sam again, about the kitchen tap."
        </p>
      </div>
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink/35">Converso</p>
        <p className="mt-1 text-[15px] leading-snug text-ink">
          "You are all set in my notes. The part arrived yesterday — shall I book you for
          Thursday at 2?"
        </p>
      </div>
      <div className="pt-1">
        <Chip label="Greeted like a regular · 8 s" />
      </div>
    </div>
  );
}

/* 02 — the sort */
function SortMock() {
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

/* 03 — the booking */
function BookMock() {
  return (
    <div className="space-y-4">
      <div className="rounded-sm border border-ink/10 bg-white px-4 py-3.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="font-mono text-[11px] text-ink/70">Thursday · 2 pm — Sam R. · Kitchen tap</span>
          <Chip label="Booked · texted to confirm" />
        </div>
        <p className="mt-2 text-[13px] leading-relaxed text-ink/55">
          Address, part, and time on the job card. The calendar has it before you hear about it.
        </p>
      </div>
      <div className="rounded-sm border border-ink/10 bg-white px-4 py-3.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="font-mono text-[11px] text-ink/70">Reminder · Wed 9 am</span>
          <Chip label="Sent automatically" />
        </div>
        <p className="mt-2 text-[13px] leading-relaxed text-ink/55">
          "See you Thursday at 2, Sam — 15 Crown St. Reply R to reschedule."
        </p>
      </div>
    </div>
  );
}

/* 04 — the follow-up */
function FollowUpMock() {
  return (
    <div className="space-y-4">
      <div className="rounded-sm border border-ink/10 bg-white px-4 py-3.5">
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-[11px] text-ink/70">Day 0 — confirmation text sent</span>
        </div>
        <div className="mt-3 flex items-center justify-between gap-2">
          <span className="font-mono text-[11px] text-ink/70">Day 1 — "How did it go?"</span>
          <span className="font-mono text-[11px] text-ink/55">"Perfect. Thanks." </span>
        </div>
        <div className="mt-3 flex items-center justify-between gap-2">
          <span className="font-mono text-[11px] text-ink/70">Day 3 — review request sent</span>
          <Chip label="5 stars" />
        </div>
      </div>
    </div>
  );
}

/* 05 — the proof of work (dark row) */
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
            <span className="w-10 shrink-0 text-paper/30">{s.t}</span>
            <span className="text-paper/75">{s.text}</span>
          </li>
        ))}
      </ul>
      <p className="border-t border-paper/15 pt-3 font-mono text-[11px] text-paper/75">
        Brought it to you, with everything it checked.
      </p>
      <div>
        <span className="inline-flex items-center gap-2 rounded-sm bg-paper px-4 py-2 text-[12px] font-medium text-ink">
          Take over this conversation <span aria-hidden="true">→</span>
        </span>
        <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.1em] text-paper/40">
          Converso steps back · the context stays
        </p>
      </div>
    </div>
  );
}

type Pillar = {
  n: string;
  job: string;
  icon: IconName;
  title: string;
  body: string;
  mock: ReactNode;
  caption: string;
  cta?: { href: string; label: string };
  dark?: boolean;
};

const PILLARS: Pillar[] = [
  {
    n: '01',
    job: 'Greet',
    icon: 'greet',
    title: 'Every customer greeted like a regular. Any hour, any day.',
    body: 'First ring or first message, day or night. Converso knows who they are, what they asked about last time, and what your business does — so the first ten seconds feel like coming back, not starting over.',
    mock: <GreetMock />,
    caption: 'A returning customer, greeted with their history in hand',
    cta: { href: '#how-it-works', label: 'Your number, live in 2 minutes' },
  },
  {
    n: '02',
    job: 'Sort',
    icon: 'funnel',
    title: 'It works out what they need — and handles it.',
    body: "Most contacts don't need you. It answers the question, fixes the problem, or qualifies the lead — while they are still on the line. The ones that do need you arrive already sorted.",
    mock: <SortMock />,
    caption: 'Same hour. Same phone. Two different endings — both handled.',
  },
  {
    n: '03',
    job: 'Book',
    icon: 'calendar',
    title: 'The calendar fills itself.',
    body: 'Jobs get booked, callbacks get scheduled, reminders go out — before you have to think about any of it. Your day assembles itself from the conversations.',
    mock: <BookMock />,
    caption: 'No address typed twice. No "wait, what time did they say?"',
  },
  {
    n: '04',
    job: 'Follow up',
    icon: 'loop',
    title: 'The last mile is where customers are won.',
    body: 'Confirmation the same minute, a check-in the next day, a review request when it is done. Customers finish feeling looked after — and you find out how, in thirty seconds.',
    mock: <FollowUpMock />,
    caption: 'The conversation does not end when the call does.',
  },
  {
    n: '05',
    job: 'Shows its work',
    icon: 'eye',
    title: 'And every step, written down with a reason.',
    body: 'When Converso does something, you can see what it did, when, and why. One tap puts you in the conversation, with the full context. You are never locked out of your own customers.',
    mock: <TrailMock />,
    caption: 'Ask it why it did anything. It will tell you.',
    dark: true,
  },
];

export function Pillars() {
  return (
    <section id="what-it-does" className="scroll-mt-16 border-t border-ink/10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/40">
            The front desk, end to end
          </p>
          <h2 className="mt-6 max-w-2xl font-display text-4xl leading-[1.05] tracking-[-0.01em] md:text-5xl">
            From the first hello to the last follow-up.
          </h2>
          <p className="mt-6 max-w-[52ch] text-[15px] leading-relaxed text-ink/60">
            A customer comes through the door. Converso walks them all the way: it greets, it
            sorts, it books, it follows up — and it writes down every step.
          </p>
        </Reveal>

        <div className="mt-16 space-y-4">
          {PILLARS.map((p, i) => (
            <Reveal key={p.n} delay={Math.min(i, 2) * 40}>
              <div
                className={`relative grid items-center gap-8 overflow-hidden rounded-md p-6 transition-colors duration-500 md:grid-cols-[0.9fr_1.1fr] md:gap-10 md:p-10 ${
                  p.dark
                    ? 'bg-ink text-paper'
                    : 'border border-ink/10 bg-white hover:border-ink/35'
                }`}
              >
                {p.dark && <div className="dot-grid-dark pointer-events-none absolute inset-0" aria-hidden="true" />}
                <div className="relative min-w-0">
                  <div className="flex items-baseline gap-4">
                    <span
                      className={`font-display text-4xl leading-none ${
                        p.dark ? 'text-paper/25' : 'text-ink/20'
                      }`}
                    >
                      {p.n}
                    </span>
                    <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-moss">
                      <span className="grid h-6 w-6 place-items-center rounded-sm border border-moss/30 bg-moss/10">
                        <Icon name={p.icon} className="h-3 w-3" />
                      </span>
                      {p.job}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl leading-tight md:text-3xl">{p.title}</h3>
                  <p
                    className={`mt-4 max-w-[46ch] text-[15px] leading-relaxed ${
                      p.dark ? 'text-paper/65' : 'text-ink/60'
                    }`}
                  >
                    {p.body}
                  </p>
                  {p.cta && (
                    <a
                      href={p.cta.href}
                      className="fluid mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-ink/60 hover:text-moss"
                    >
                      {p.cta.label} <span aria-hidden="true">→</span>
                    </a>
                  )}
                </div>
                <div className="relative min-w-0">
                  <div
                    className={`rounded-md border p-5 md:p-6 ${
                      p.dark ? 'border-paper/15 bg-paper/5' : 'border-ink/10 bg-paper/60'
                    }`}
                  >
                    {p.mock}
                  </div>
                  <p
                    className={`mt-4 font-mono text-[10px] uppercase tracking-[0.12em] ${
                      p.dark ? 'text-paper/35' : 'text-ink/35'
                    }`}
                  >
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
