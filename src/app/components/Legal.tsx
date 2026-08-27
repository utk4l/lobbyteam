import { Reveal } from './Reveal';

export function Legal() {
  return (
    <section className="bg-white py-16 border-t border-zinc-100">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        <Reveal>
          <div id="privacy" className="scroll-mt-24">
            <h3 className="text-lg font-semibold text-zinc-950">Privacy</h3>
            <p className="mt-3 text-sm text-zinc-500">
              We store call recordings, transcripts, and contact data per business, isolated from
              every other business. Recordings play the consent notice you configure, in the
              language you choose. You can export or delete your data at any time from settings.
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div id="terms" className="scroll-mt-24">
            <h3 className="text-lg font-semibold text-zinc-950">Terms</h3>
            <p className="mt-3 text-sm text-zinc-500">
              You pay for what the agents handle, at the rate published before you subscribe.
              Cancel anytime from settings. Your full data export stays available on your account
              for 30 days after cancellation.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
