import { Icon, IconName } from './Icons';
import { Reveal } from './Reveal';

const ROWS: { where: string; icon: IconName; before: string; agitate: string; after: string }[] = [
  {
    where: 'The door',
    icon: 'door',
    before:
      'The phone rang three times while you were on another call. You never found out what they wanted.',
    agitate: 'That was probably a job. It went to whoever picked up next.',
    after:
      'It rings once, and it is answered — any hour. And by the time you see it, it is all written down.',
  },
  {
    where: 'The middle',
    icon: 'exchange',
    before: 'A customer called back and had to explain everything again, because no one remembered the first call.',
    agitate: "Making a customer repeat themselves is how 'helpful business' becomes 'we'll go elsewhere.'",
    after:
      'It knows who they are and what they asked about last time. Every conversation carries the history forward.',
  },
  {
    where: 'The exit',
    icon: 'exit',
    before: "The job went fine. Nobody followed up. You never found out if they were happy — or if they'll come back.",
    agitate: 'The last impression is the one that decides the next ten customers — and it is the one you are too busy to give.',
    after:
      'Confirmation the same minute, a check-in the next day, a review request when it is done. The last mile is handled too.',
  },
];

export function Problem() {
  return (
    <section id="problem" className="scroll-mt-16 border-t border-ink/10 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* Sticky intro */}
        <div className="self-start lg:sticky lg:top-28">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/40">
            The in-between
          </p>
          <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-[-0.01em] md:text-5xl">
            Customers do not leave on the first call.
            <br />
            They leave in the in-between.
          </h2>
          <div className="mt-12 rounded-md border border-ink/10 bg-white p-7">
            <p className="font-display text-6xl leading-none">100%</p>
            <p className="mt-3 text-sm leading-relaxed text-ink/60">
              of your customers get the whole journey — greeted, sorted, booked, followed up.
            </p>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/40">
              A busy front desk gets the first hello
            </p>
          </div>
        </div>

        {/* Rows */}
        <div className="space-y-4">
          {ROWS.map((row, i) => (
            <Reveal key={i} delay={i * 40}>
              <div className="rounded-md border border-ink/10 bg-white p-6 transition-colors duration-500 hover:border-ink/35 md:p-8">
                <p className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.16em] text-ink/35">
                  <span className="grid h-7 w-7 place-items-center rounded-sm border border-ink/10 bg-paper text-ink/45">
                    <Icon name={row.icon} className="h-3.5 w-3.5" />
                  </span>
                  {row.where}
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-ink/45">{row.before}</p>
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
