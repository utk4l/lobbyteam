import { Reveal } from './Reveal';

export function Legal() {
  return (
    <section className="border-t border-ink/10 py-16">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
        <Reveal>
          <div id="privacy" className="scroll-mt-24">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/40">
              Privacy
            </h3>
            <p className="mt-4 max-w-[52ch] text-sm leading-relaxed text-ink/55">
              We store call recordings, transcripts, and contact data per business, isolated from
              every other business. Every recorded call plays the consent notice you configure, in the
              language you choose. You can export or delete your data at any time from settings.
            </p>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div id="terms" className="scroll-mt-24">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/40">
              Terms
            </h3>
            <p className="mt-4 max-w-[52ch] text-sm leading-relaxed text-ink/55">
              You pay for what Converso handles, at the rate published before you subscribe.
              Cancel anytime from settings. Your full data export stays available on your account
              for 30 days after cancellation.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
