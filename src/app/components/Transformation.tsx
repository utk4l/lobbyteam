import { Reveal } from './Reveal';

const ROWS = [
  {
    before:
      'The phone rang three times while you were on another call. You never found out what they wanted.',
    after:
      'The agent answers every call, transcribes it, and turns it into a ticket with a summary the moment it ends.',
  },
  {
    before: 'A lead messaged at 9 pm asking for a quote. You replied in the morning. The deal was gone.',
    after: 'The AI answers right away, qualifies the lead, and books a callback while they are still asking.',
  },
  {
    before: 'You cannot listen to every call, so you have no idea how good your support really is.',
    after:
      'Every conversation is summarized and QA scored. Read a short summary instead of missing an hour of calls.',
  },
];

export function Transformation() {
  return (
    <section id="proof" className="scroll-mt-16 border-t border-ink/10 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* Sticky intro */}
        <div className="self-start lg:sticky lg:top-28">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/40">
            Before / after
          </p>
          <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-[-0.01em] md:text-5xl">
            Your customers are calling. Right now, someone is missing them.
          </h2>
          <div className="mt-12 rounded-md border border-ink/10 bg-white p-7">
            <p className="font-display text-6xl leading-none">100%</p>
            <p className="mt-3 text-sm leading-relaxed text-ink/60">
              of every conversation is transcribed, summarized, and QA scored.
            </p>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/40">
              A typical BPO listens to 2 to 5%
            </p>
          </div>
        </div>

        {/* Rows */}
        <div className="space-y-4">
          {ROWS.map((row, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="grid gap-6 rounded-md border border-ink/10 bg-white p-6 transition-colors duration-500 hover:border-ink/35 md:grid-cols-2 md:gap-8 md:p-8">
                <div className="md:border-r md:border-ink/10 md:pr-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/35">
                    Before
                  </p>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink/45">{row.before}</p>
                </div>
                <div>
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
