import { contactById, CONVERSATIONS, type Contact } from '../data';
import { Eyebrow, OutcomeChip, Panel, btnGhost, btnPrimary } from '../ui';

type Props = { id: string; onBack: () => void; onOpenConv: (id: string) => void };

export function ContactView({ id, onBack, onOpenConv }: Props) {
  const c: Contact | undefined = contactById[id] as Contact | undefined;
  if (!c) return null;
  const convCount = CONVERSATIONS.filter((x) => x.contactId === c.id).length;

  return (
    <div className="mx-auto max-w-5xl px-6 py-10 md:py-14">
      <button onClick={onBack} className="fluid font-mono text-[11px] uppercase tracking-[0.14em] text-ink/45 hover:text-ink">
        ← Back
      </button>

      <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
        <div>
          <h1 className="font-display text-4xl leading-[1.05] tracking-[-0.01em] md:text-5xl">{c.name}</h1>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-ink/45">
            {c.relation} · since {c.since} · {convCount} conversation{convCount === 1 ? '' : 's'}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className={btnGhost}>Message</button>
          <button className={btnPrimary}>Create work</button>
        </div>
      </div>

      <div className="mt-8 grid items-start gap-8 lg:grid-cols-[1fr_320px]">
        {/* The relationship, in time order — channel is metadata */}
        <div>
          <Eyebrow className="mb-4">Timeline</Eyebrow>
          <div className="space-y-3">
            {c.timeline.map((t, i) => (
              <Panel key={i} className="flex flex-wrap items-center gap-x-5 gap-y-2 px-5 py-4">
                <span className="w-14 shrink-0 font-mono text-[11px] tabular-nums text-ink/40">{t.date}</span>
                <span className="w-24 shrink-0 font-mono text-[10px] uppercase tracking-[0.12em] text-ink/45">
                  {t.type}
                </span>
                <span className="min-w-0 flex-1 text-sm text-ink/80">{t.text}</span>
                {t.channel && (
                  <span className="hidden font-mono text-[10px] uppercase tracking-[0.12em] text-ink/30 sm:inline">
                    {t.channel}
                  </span>
                )}
                {t.outcome && <OutcomeChip outcome={t.outcome} />}
              </Panel>
            ))}
          </div>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-ink/35">
            Every channel, one relationship — this history makes the AI better with each conversation
          </p>
        </div>

        {/* Work for this person, then the quiet profile */}
        <div className="space-y-6">
          {c.work.length > 0 && (
            <div>
              <Eyebrow className="mb-3">Work</Eyebrow>
              <div className="space-y-2.5">
                {c.work.map((w, i) => (
                  <Panel key={i} className="flex items-center gap-3 px-4 py-3">
                    <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${w.state === 'needs-you' ? 'bg-warn' : 'bg-active'}`} aria-hidden="true" />
                    <span className="min-w-0 text-[13px] leading-snug text-ink/75">{w.text}</span>
                  </Panel>
                ))}
              </div>
            </div>
          )}
          <div>
            <Eyebrow className="mb-3">Profile</Eyebrow>
            <Panel className="divide-y divide-ink/10">
              {c.profile.map((p, i) => (
                <div key={i} className="flex items-baseline justify-between gap-4 px-4 py-2.5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink/35">{p.k}</span>
                  <span className="text-right text-[13px] text-ink/70">{p.v}</span>
                </div>
              ))}
            </Panel>
          </div>
        </div>
      </div>
    </div>
  );
}
