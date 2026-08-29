import { Reveal } from './Reveal';

const ROWS = [
  {
    before:
      'The phone rang three times while you were on another call. You never found out what they wanted.',
    agitate: 'That was probably a job. It went to whoever picked up next.',
    after:
      'It rings once, and it is answered — any hour. You get a short note of what happened.',
  },
  {
    before: 'A lead messaged at 9 pm asking for a quote. You replied in the morning. The deal was gone.',
    agitate: 'The first business that answers is usually the one that gets the work.',
    after:
      'It answers in seconds, works out what they need, and books the callback while they are still asking.',
  },
  {
    before: "You can't listen to every call, so you have no idea how good your support really is.",
    agitate: 'Problems hide in the calls you never hear — until a customer tells someone else.',
    after:
      'Every call becomes a 30-second note. You read what matters instead of listening to hours of recordings.',
  },
];

export function Problem() {
  return (
    <section id="problem" className="scroll-mt-16 border-t border-ink/10 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* Sticky intro */}
        <div className="self-start lg:sticky lg:top-28">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/40">
            Sound familiar?
          </p>
          <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-[-0.01em] md:text-5xl">
            Your customers are calling.
            <br />
            Right now, someone is missing them.
          </h2>
          <div className="mt-12 rounded-md border border-ink/10 bg-white p-7">
            <p className="font-display text-6xl leading-none">100%</p>
            <p className="mt-3 text-sm leading-relaxed text-ink/60">
              of your conversations end with a note: who called, what they needed, what happened
              next.
            </p>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/40">
              A human team listens to 2 to 5%
            </p>
          </div>
        </div>

        {/* Rows */}
        <div className="space-y-4">
          {ROWS.map((row, i) => (
            <Reveal key={i} delay={i * 40}>
              <div className="rounded-md border border-ink/10 bg-white p-6 transition-colors duration-500 hover:border-ink/35 md:p-8">
                <p className="text-[15px] leading-relaxed text-ink/45">{row.before}</p>
                <p className="mt-4 border-l-2 border-ink/15 pl-4 text-[13px] leading-relaxed text-ink/40">
                  {row.agitate}
                </p>
                <div className="mt-5 border-t border-ink/10 pt-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-moss">
                    With Converso
                  </p>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink">{row.after}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
