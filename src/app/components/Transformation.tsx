import { Reveal } from './Reveal';

const ROWS = [
  {
    before:
      'The phone rang three times while you were on another call. You never found out what they wanted.',
    after:
      'Every call is answered, transcribed, and turned into a ticket with a summary the moment it ends.',
  },
  {
    before:
      'A lead messaged at 9 pm asking for a quote. You replied in the morning. The deal was gone.',
    after:
      'The AI answers right away, qualifies the lead, and books a callback while they are still asking.',
  },
  {
    before:
      'You cannot listen to every call, so you have no idea how good your support really is.',
    after:
      'Every conversation is summarized and QA scored. Read a short summary instead of missing an hour of calls.',
  },
];

export function Transformation() {
  return (
    <section id="proof" className="bg-white border-t border-zinc-100 py-24 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-4">
            Before / after
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-zinc-950 max-w-2xl">
            Your customers are calling. Right now, someone is missing them.
          </h2>
        </Reveal>

        <div className="mt-16">
          {ROWS.map((row, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="grid md:grid-cols-2 gap-6 md:gap-16 py-10 border-t border-zinc-100">
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-zinc-300 mb-3">
                    Before
                  </p>
                  <p className="text-lg text-zinc-400">{row.before}</p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-emerald-600 mb-3">
                    With Converso
                  </p>
                  <p className="text-lg text-zinc-950">{row.after}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-2 text-sm text-zinc-400">
            BPOs typically listen to 2 to 5% of calls. Here, 100% of conversations are transcribed,
            summarized, and QA scored.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
