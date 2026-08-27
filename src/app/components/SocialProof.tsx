import { Reveal } from './Reveal';

export function SocialProof() {
  return (
    <section className="bg-white border-t border-zinc-100 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-10">
            Customer proof
          </p>
          <div className="border border-dashed border-zinc-300 rounded-2xl px-8 py-12 text-center">
            <p className="text-lg text-zinc-500">
              Real customers and real numbers go here: a name, a role, a company, and a specific
              result.
            </p>
            <p className="mt-2 text-sm text-zinc-400">
              Placeholder on purpose. We publish actual quotes only.
            </p>
          </div>
          <div className="mt-8 border border-dashed border-zinc-300 rounded-2xl px-8 py-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            <span className="text-sm text-zinc-400">Customer logos go here</span>
            <span className="text-sm text-zinc-500 font-medium">Syncs with Zoho CRM</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
