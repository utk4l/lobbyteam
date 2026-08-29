import { Reveal } from './Reveal';

export function SocialProof() {
  return (
    <section id="proof" className="scroll-mt-16 border-t border-ink/10 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/40">
            Customer proof
          </p>
          <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-[-0.01em] md:text-5xl">
            We publish real results.
            <br />
            So there are none yet.
          </h2>
          <p className="mt-7 max-w-[48ch] text-[15px] leading-relaxed text-ink/60">
            Converso is onboarding its first customers right now. When their numbers land — calls
            answered, leads booked, hours back — they go here with names attached. We would rather
            have an empty wall than a fake one.
          </p>
          <p className="mt-7 font-mono text-[11px] uppercase tracking-[0.14em] text-moss">
            Early access: limited slots, 40% off for life
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex min-h-[300px] flex-col items-center justify-center rounded-md border border-dashed border-ink/25 bg-white/60 p-10 text-center">
            <span className="font-display text-8xl leading-none text-ink/15" aria-hidden="true">
              &ldquo;
            </span>
            <p className="mt-5 max-w-[32ch] text-[15px] leading-relaxed text-ink/45">
              Results from the first customers go here — with a name, a role, and a number.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
