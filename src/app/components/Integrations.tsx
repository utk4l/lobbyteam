const CRMS = [
  { name: 'Zoho', status: 'Live' },
  { name: 'HubSpot', status: 'Coming' },
  { name: 'Salesforce', status: 'Coming' },
];

const CHANNELS = ['Phone', 'Website chat', 'WhatsApp'];

export function Integrations() {
  return (
    <section className="border-t border-ink/10 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/40">
              Plugs in
            </p>
            <h2 className="mt-5 font-display text-3xl leading-[1.05] tracking-[-0.01em] md:text-4xl">
              Works with what you already run.
            </h2>
            <p className="mt-5 max-w-[40ch] text-[15px] leading-relaxed text-ink/60">
              Your phone, your website, your CRM. Converso plugs in where you already are — and
              your data stays yours.
            </p>
          </div>
          <div className="space-y-8">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/35">
                Your CRM
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {CRMS.map((c) => (
                  <span
                    key={c.name}
                    className="inline-flex items-center gap-2.5 rounded-sm border border-ink/15 bg-white px-4 py-2.5"
                  >
                    <span className="text-sm font-medium">{c.name}</span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink/40">
                      {c.status}
                    </span>
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/35">
                Where it answers
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {CHANNELS.map((c) => (
                  <span
                    key={c}
                    className="rounded-sm border border-ink/15 bg-white px-4 py-2.5 text-sm font-medium"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
