import { convById, contactById, type Conversation } from '../data';
import { Eyebrow, OutcomeChip, Panel, btnGhost, btnPrimary } from '../ui';

type Props = {
  id: string;
  onBack: () => void;
  onOpenContact: (id: string) => void;
};

export function ConversationView({ id, onBack, onOpenContact }: Props) {
  const c: Conversation | undefined = convById[id] as Conversation | undefined;
  if (!c) return null;
  const contact = contactById[c.contactId];
  const needsYou = c.outcome === 'needs-you';

  return (
    <div className="mx-auto max-w-6xl px-6 py-10 md:py-14">
      <button onClick={onBack} className="fluid font-mono text-[11px] uppercase tracking-[0.14em] text-ink/45 hover:text-ink">
        ← Inbox
      </button>

      <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
        <div>
          <h1 className="font-display text-4xl leading-[1.05] tracking-[-0.01em] md:text-5xl">{c.name}</h1>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-ink/45">
            {c.channel} · {c.intent} · {c.time} ago
          </p>
        </div>
        <div className="flex items-center gap-3">
          <OutcomeChip outcome={c.outcome} />
          {needsYou ? (
            <button className={btnPrimary}>Take over</button>
          ) : (
            <button className={btnGhost}>Message</button>
          )}
        </div>
      </div>

      <div className="mt-8 grid items-start gap-8 lg:grid-cols-[1fr_380px]">
        {/* The conversation itself */}
        <Panel className="overflow-hidden">
          <div className="border-b border-ink/10 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/35">
            Conversation · {c.channel}
          </div>
          <div className="space-y-4 px-5 py-5">
            {c.messages.map((m, i) => (
              <div key={i} className={`flex ${m.who === 'ai' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] rounded-sm px-4 py-3 text-[14px] leading-relaxed ${
                    m.who === 'ai' ? 'bg-ink text-paper' : 'bg-ink/[0.04] text-ink/85'
                  }`}
                >
                  <p className={`mb-1 font-mono text-[9px] uppercase tracking-[0.14em] ${m.who === 'ai' ? 'text-paper/40' : 'text-ink/35'}`}>
                    {m.who === 'ai' ? 'Converso AI' : c.name.split(' · ')[0]}
                  </p>
                  {m.text}
                </div>
              </div>
            ))}
            {needsYou && (
              <div className="flex items-center gap-3 rounded-sm border border-warn/30 bg-warn/[0.06] px-4 py-3">
                <span className="h-2 w-2 shrink-0 rounded-full bg-warn" aria-hidden="true" />
                <p className="text-[13px] font-medium text-warn">AI handed this to you — decision needed</p>
              </div>
            )}
          </div>
        </Panel>

        {/* The "what happened" layer — AI reasoning in plain language */}
        <div className="space-y-6">
          <div>
            <Eyebrow className="mb-3">What happened</Eyebrow>
            <ol className="relative space-y-4 border-l border-ink/10 pl-5">
              {c.whatHappened.map((s, i) => (
                <li key={i} className="relative">
                  <span className="absolute -left-[26px] top-[7px] h-2 w-2 rounded-full border border-white bg-ink/30" aria-hidden="true" />
                  <p className="font-mono text-[10px] tabular-nums tracking-[0.08em] text-ink/35">{s.t}</p>
                  <p className="mt-0.5 text-sm leading-snug text-ink/75">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>

          {c.why && (
            <div>
              <Eyebrow className={`mb-3 ${needsYou ? 'text-warn/70' : 'text-ink/40'}`}>
                {needsYou ? 'Why this needs you' : 'Why this is qualified'}
              </Eyebrow>
              <Panel className="divide-y divide-ink/10">
                {c.why.map((w, i) => (
                  <div key={i} className="flex items-center gap-3 px-4 py-2.5">
                    <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${needsYou ? 'bg-warn' : 'bg-moss'}`} aria-hidden="true" />
                    <span className="text-[13px] leading-snug text-ink/70">{w}</span>
                  </div>
                ))}
              </Panel>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-ink/35">
                Evidence from the conversation — not a score
              </p>
            </div>
          )}

          <div>
            <Eyebrow className="mb-3">AI actions</Eyebrow>
            <Panel className="divide-y divide-ink/10">
              {c.aiActions.map((a, i) => (
                <div key={i} className="flex items-center gap-3 px-4 py-2.5">
                  <svg className="h-3.5 w-3.5 shrink-0 text-moss" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 8.5 6.5 12 13 4.5" />
                  </svg>
                  <span className="text-[13px] text-ink/70">{a}</span>
                </div>
              ))}
            </Panel>
          </div>

          <div>
            <Eyebrow className="mb-3">Summary</Eyebrow>
            <Panel className="p-5">
              <p className="text-sm leading-relaxed text-ink/70">{c.summary}</p>
              {typeof c.qa === 'number' && (
                <p className="mt-4 border-t border-ink/10 pt-4 font-mono text-[10px] uppercase tracking-[0.12em] text-moss">
                  QA score {c.qa} / 100 · policy OK
                </p>
              )}
            </Panel>
          </div>

          {contact && (
            <button
              onClick={() => onOpenContact(contact.id)}
              className="fluid flex w-full items-center justify-between rounded-md border border-ink/10 bg-white px-5 py-4 text-left hover:border-ink/35"
            >
              <span>
                <span className="block text-sm font-medium">{contact.name}</span>
                <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-[0.12em] text-ink/40">
                  {contact.relation} · view the relationship
                </span>
              </span>
              <span className="text-ink/30" aria-hidden="true">→</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
