import { Reveal } from './Reveal';

const STEPS = [
  {
    n: '01',
    title: 'Pick a number',
    body: 'Sign up with your phone and business name, then choose a local number. It is live right away, no porting wait.',
  },
  {
    n: '02',
    title: 'Tell it about your business',
    body: 'Paste your website or a few lines about what you do. Or skip it. The agent starts with safe defaults and takes a message.',
  },
  {
    n: '03',
    title: 'Call it and watch it work',
    body: 'Call your own business number. The AI answers, and you watch the transcript stream in while the ticket and summary write themselves.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-zinc-50 border-t border-zinc-100 py-24 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-4">
            How it works
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-zinc-950">
            Live in under two minutes.
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-8 md:gap-16">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <div>
                <p className="text-sm font-medium text-zinc-300 tabular-nums">{s.n}</p>
                <h3 className="mt-3 text-lg font-semibold text-zinc-950">{s.title}</h3>
                <p className="mt-2 text-base text-zinc-500">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <a
            href="#pricing"
            className="fluid inline-flex items-center bg-zinc-950 text-white text-base font-semibold px-3 py-2 rounded-lg hover:bg-zinc-800"
          >
            Start free, live in 2 minutes
          </a>
        </Reveal>
      </div>
    </section>
  );
}
