import { Reveal } from './Reveal';

const BENEFITS = [
  {
    title: 'Never lose a lead again',
    body: 'The sales agent qualifies every inbound on the spot and books the callback before the interest cools.',
  },
  {
    title: 'Know what every customer said',
    body: '100% of calls and chats are transcribed and summarized the moment they end. Nothing lives only in a voicemail box.',
  },
  {
    title: 'Stay in control at all times',
    body: 'Take over any conversation with full context. The AI steps back and waits until you are done.',
  },
  {
    title: 'Your CRM fills itself',
    body: 'Every contact, ticket, and summary syncs to Zoho. Your CRM keeps profile fields; we add the interactions.',
  },
  {
    title: 'Prove your quality',
    body: 'Every conversation is QA scored against your policies, not a random sample of calls.',
  },
];

export function Benefits() {
  return (
    <section className="bg-white py-24 border-t border-zinc-100">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-4">
            What you get
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-zinc-950 max-w-2xl">
            You run the business. The AI runs the front desk.
          </h2>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.title} delay={(i % 3) * 100}>
              <div className="border-t border-zinc-200 pt-4">
                <h3 className="text-lg font-semibold text-zinc-950">{b.title}</h3>
                <p className="mt-2 text-base text-zinc-500">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
