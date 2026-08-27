import { LiveConversation } from './LiveConversation';

export function Hero() {
  return (
    <section id="top" className="bg-white pt-24 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Copy */}
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-6">
              AI support and sales agent
            </p>
            <h1 className="text-5xl md:text-6xl font-semibold max-w-[680px] bg-gradient-to-r from-black to-[#666666] bg-clip-text text-transparent">
              Every call answered.
              <br />
              Every lead followed up.
              <br />
              Without hiring.
            </h1>
            <p className="mt-6 text-lg text-zinc-500 max-w-[680px]">
              Converso puts an AI agent on your phone, WhatsApp, and website chat in under two
              minutes. It resolves support on its own, qualifies leads in real time, and pings you
              only when a person is needed.
            </p>
            <div className="mt-10">
              <a
                href="#pricing"
                className="fluid inline-flex items-center bg-zinc-950 text-white text-base font-semibold px-3 py-2 rounded-lg hover:bg-zinc-800"
              >
                Start free, live in 2 minutes
              </a>
              <p className="mt-4 text-sm text-zinc-400">
                Free for 14 days · No credit card · No setup fee
              </p>
            </div>
            <p className="mt-10 text-sm text-zinc-400">
              Phone · WhatsApp · Website chat · Syncs with Zoho CRM
            </p>
          </div>

          {/* Hero visual: the live conversation */}
          <LiveConversation />
        </div>
      </div>
    </section>
  );
}
