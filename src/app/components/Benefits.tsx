import { Reveal } from './Reveal';

const CARD =
  'flex flex-col rounded-md border border-ink/10 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-ink/35 md:p-7';

function LeadCard() {
  return (
    <div className="mt-6 rounded-sm border border-ink/10 bg-paper px-4 py-3 font-mono text-[11px] leading-relaxed text-ink/70">
      <p className="flex justify-between gap-4">
        <span>Lead · Priya M.</span>
        <span className="text-moss">Qualified</span>
      </p>
      <p className="mt-1 text-ink/45">Need: 3 seats · Budget: set · Timing: this week</p>
      <p className="mt-1 flex justify-between gap-4 text-ink/45">
        <span>Next step</span>
        <span>Callback booked · 4:00 pm</span>
      </p>
    </div>
  );
}

function SummaryLines() {
  return (
    <div className="mt-6 space-y-1.5 font-mono text-[11px] text-ink/55">
      <p>Issue: Order delayed</p>
      <p>Sentiment: Positive</p>
      <p>Action: Tracking sent</p>
    </div>
  );
}

function Takeover() {
  return (
    <div className="mt-6">
      <span className="inline-flex items-center gap-2 rounded-sm bg-ink px-4 py-2 text-[12px] font-medium text-paper">
        Take over this call <span aria-hidden="true">→</span>
      </span>
      <p className="mt-2.5 font-mono text-[10px] uppercase tracking-[0.1em] text-ink/40">
        AI steps back · full context attached
      </p>
    </div>
  );
}

function ZohoRow() {
  return (
    <div className="mt-6 flex items-center justify-between rounded-sm border border-ink/10 bg-paper px-4 py-2.5 font-mono text-[11px] text-ink/70">
      <span>Rahul Sharma</span>
      <span className="text-moss">Synced → Zoho</span>
    </div>
  );
}

function QARing() {
  return (
    <div className="mt-6 flex items-center gap-4">
      <span
        className="grid h-14 w-14 shrink-0 place-items-center rounded-full"
        style={{ background: 'conic-gradient(#1a6b50 98%, #e7e4da 0)' }}
        aria-hidden="true"
      >
        <span className="grid h-10 w-10 place-items-center rounded-full bg-white font-mono text-[12px] text-ink">
          98
        </span>
      </span>
      <span className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.1em] text-ink/40">
        QA score,
        <br />
        on every call
      </span>
    </div>
  );
}

export function Benefits() {
  return (
    <section className="border-t border-ink/10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/40">
            What you get
          </p>
          <h2 className="mt-6 max-w-2xl font-display text-4xl leading-[1.05] tracking-[-0.01em] md:text-5xl">
            You run the business. The AI runs the front desk.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-6">
          <Reveal className="md:col-span-4">
            <div className={CARD}>
              <h3 className="font-display text-2xl">Never lose a lead again</h3>
              <p className="mt-3 max-w-[46ch] text-[15px] leading-relaxed text-ink/60">
                The sales agent qualifies every lead on the spot and books the callback before
                the interest cools.
              </p>
              <LeadCard />
            </div>
          </Reveal>

          <Reveal delay={60} className="md:col-span-2">
            <div className={CARD}>
              <h3 className="font-display text-2xl">Know what every customer said</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/60">
                Every call and chat gets summarized the moment it ends.
              </p>
              <SummaryLines />
            </div>
          </Reveal>

          <Reveal className="md:col-span-2">
            <div className={CARD}>
              <h3 className="font-display text-2xl">Stay in control at all times</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/60">
                Take over any conversation with full context. The AI steps back and waits.
              </p>
              <Takeover />
            </div>
          </Reveal>

          <Reveal delay={60} className="md:col-span-2">
            <div className={CARD}>
              <h3 className="font-display text-2xl">Your CRM fills itself</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/60">
                Every contact, ticket, and summary syncs to Zoho. Your CRM keeps the profile; we
                add the interactions.
              </p>
              <ZohoRow />
            </div>
          </Reveal>

          <Reveal delay={120} className="md:col-span-2">
            <div className={CARD}>
              <h3 className="font-display text-2xl">Prove your quality</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/60">
                Every conversation is QA scored against your policies, not a random sample of
                calls.
              </p>
              <QARing />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
