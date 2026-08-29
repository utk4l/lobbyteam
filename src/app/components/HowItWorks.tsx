import { Reveal } from './Reveal';

const STEPS = [
  {
    n: '01',
    title: 'Pick a number',
    body: 'Sign up with your phone and business name, then choose a local number. It goes live right away — no waiting for anything to be ported.',
    tag: '30 seconds',
  },
  {
    n: '02',
    title: 'Tell it about your business',
    body: 'Paste your website or a few lines about what you do. Or skip it. It starts with safe defaults and takes a message.',
    tag: '0 to 60 s, skippable',
  },
  {
    n: '03',
    title: 'Call it and watch it work',
    body: 'Call your own business number. Converso answers, you watch what it says appear word for word — and the note about the call writes itself.',
    tag: '← this is the demo',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-16 border-t border-ink/10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/40">
              How it works
            </p>
            <h2 className="mt-6 max-w-xl font-display text-4xl leading-[1.05] tracking-[-0.01em] md:text-5xl">
              Live in under two minutes.
            </h2>
          </div>
          <a
            href="#pricing"
            className="fluid inline-flex items-center gap-2 rounded-sm border border-ink/25 px-5 py-3 text-sm font-medium hover:border-ink hover:bg-ink hover:text-paper"
          >
            Start free
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <ol className="mt-16 border-t border-ink/10">
          {STEPS.map((s, i) => (
            <li key={s.n} className="border-b border-ink/10">
              <Reveal delay={i * 40}>
                <div className="grid items-baseline gap-4 py-10 md:grid-cols-[130px_1fr_auto] md:gap-8">
                  <span className="font-display text-6xl leading-none text-ink/20 md:text-7xl">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl">{s.title}</h3>
                    <p className="mt-3 max-w-[52ch] text-[15px] leading-relaxed text-ink/60">
                      {s.body}
                    </p>
                  </div>
                  <span className="whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.14em] text-moss">
                    {s.tag}
                  </span>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
