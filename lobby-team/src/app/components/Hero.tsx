import { LiveConversation } from './LiveConversation';

export function Hero() {
  return (
    <section id="top" className="relative pt-32 lg:pt-40">
      <div className="dot-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-6 pb-20 lg:pb-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
          {/* Copy */}
          <div className="min-w-0">
            <p className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/55">
              <span className="live-dot h-2 w-2 rounded-full bg-live" aria-hidden="true" />
              Converso · Your AI front desk
            </p>
            <h1 className="mt-7 font-display text-[clamp(1.75rem,8vw,3.5rem)] leading-[0.98] tracking-[-0.015em]">
              Every customer greeted.
              <br />
              Every job booked.
              <br />
              <span className="italic text-ink/40">Even when you are not at the desk.</span>
            </h1>
            <p className="mt-8 max-w-[46ch] text-lg leading-relaxed text-ink/65">
              Converso runs your front desk: it answers the phone, works out what people need,
              books the work, and follows up until it is done. Start to finish, any hour — so
              nothing is lost between the hello and the done.
            </p>
            <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
              <a
                href="#pricing"
                className="fluid inline-flex items-center justify-center gap-2 rounded-sm bg-ink px-7 py-4 text-base font-medium text-paper hover:bg-moss"
              >
                Try it free
                <span aria-hidden="true">→</span>
              </a>
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink/50">
                14 days free · No card required · Cancel anytime
              </p>
            </div>
          </div>

          {/* The product, mid-call */}
          <div className="min-w-0">
            <LiveConversation />
          </div>
        </div>
      </div>
    </section>
  );
}
