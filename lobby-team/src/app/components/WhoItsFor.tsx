import { Reveal } from './Reveal';

const POINTS = [
  'Your phone goes to voicemail sometimes. And you wish it didn\u2019t.',
  'You\u2019d rather read a 30-second note than listen to a voicemail.',
  'A lead that waits overnight is a lead you lose.',
  'You shouldn\u2019t have to be the front desk and the business at the same time.',
];

function Check() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 shrink-0 text-moss"
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
  );
}

export function WhoItsFor() {
  return (
    <section id="who-its-for" className="scroll-mt-16 border-t border-ink/10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/40">
              Who it is for
            </p>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-[-0.01em] md:text-5xl">
              If this sounds like you,
              <br />
              it is for you.
            </h2>
            <ul className="mt-10 space-y-5">
              {POINTS.map((p) => (
                <li key={p} className="flex items-start gap-3.5">
                  <Check />
                  <span className="text-[15px] leading-relaxed text-ink/70">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={80}>
            <div className="rounded-md border border-ink/10 bg-white p-8 md:p-10">
              <p className="font-display text-2xl leading-snug md:text-3xl">
                That is who we built this for.
                <br />
                <span className="text-ink/45">
                  You stay on the work — Converso runs the front desk.
                </span>
              </p>
              <a
                href="#pricing"
                className="fluid mt-8 inline-flex items-center gap-2 rounded-sm bg-ink px-6 py-3.5 text-[15px] font-medium text-paper hover:bg-moss"
              >
                Try it free <span aria-hidden="true">→</span>
              </a>
              <p className="mt-3.5 font-mono text-[10px] uppercase tracking-[0.12em] text-ink/40">
                14 days free · No card required
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
