import { AI_STATS, ACTIVITY, WORK } from '../data';
import { Eyebrow, OutcomeChip, Panel, StatNumber, btnPrimary, btnGhost, OUTCOME } from '../ui';

type Props = {
  onOpenConv: (id: string) => void;
  onOpenContact: (id: string) => void;
  onGoInbox: () => void;
  onGoAI: () => void;
};

export function Today({ onOpenConv, onOpenContact, onGoInbox, onGoAI }: Props) {
  return (
    <div className="mx-auto max-w-5xl px-6 py-10 md:py-14">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <Eyebrow>Thursday, Aug 27</Eyebrow>
          <h1 className="mt-3 font-display text-5xl leading-[1.02] tracking-[-0.01em] md:text-6xl">Today</h1>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink/60">
            What happened while you weren&apos;t looking, and what needs you now.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className={btnGhost} onClick={onGoInbox}>
            Inbox
          </button>
          <button className={btnPrimary} onClick={onGoAI}>
            <span className="live-dot h-2 w-2 rounded-full bg-live" aria-hidden="true" />
            Watch live
          </button>
        </div>
      </div>

      {/* The three numbers that matter */}
      <div className="mt-10 grid gap-px overflow-hidden rounded-md border border-ink/10 bg-ink/10 sm:grid-cols-3">
        {[
          { n: AI_STATS.handled, label: 'conversations handled', sub: 'across phone, WhatsApp, and website chat', tone: undefined },
          { n: AI_STATS.resolved, label: 'resolved automatically', sub: 'no human touched these', tone: 'text-moss' },
          { n: AI_STATS.needsYou, label: 'need your attention', sub: 'decisions only you can make', tone: 'text-warn' },
        ].map((s) => (
          <div key={s.label} className="bg-white px-6 py-7">
            <StatNumber value={s.n} tone={s.tone} />
            <p className="mt-3 text-sm font-medium">{s.label}</p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-ink/40">{s.sub}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        {/* NEEDS YOU — the only place you act */}
        <div>
          <Eyebrow className="mb-4">Needs you · {WORK.length}</Eyebrow>
          <div className="space-y-3">
            {WORK.map((w) => (
              <Panel key={w.id} className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="truncate text-[15px] font-medium">{w.text}</p>
                    <button
                      className="mt-0.5 text-sm text-ink/50 hover:text-ink"
                      onClick={() => w.contactId && onOpenContact(w.contactId)}
                    >
                      {w.person}
                    </button>
                    <p className="mt-3 max-w-[46ch] text-sm leading-relaxed text-ink/60">{w.reason}</p>
                  </div>
                  <OutcomeChip outcome={w.kind} />
                </div>
                <div className="mt-5 flex items-center gap-3 border-t border-ink/10 pt-4">
                  <button
                    className="fluid rounded-sm bg-ink px-4 py-2 text-sm font-medium text-paper hover:bg-moss"
                    onClick={() => (w.convId ? onOpenConv(w.convId) : undefined)}
                  >
                    {w.action}
                  </button>
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink/35">
                    Full context attached
                  </span>
                </div>
              </Panel>
            ))}
            {WORK.length === 0 && (
              <Panel className="p-6 text-sm text-ink/50">Nothing needs you. The AI is on it.</Panel>
            )}
          </div>
        </div>

        {/* ACTIVITY — the AI at work, human-readable */}
        <div>
          <Eyebrow className="mb-4">Activity</Eyebrow>
          <Panel className="divide-y divide-ink/10">
            {ACTIVITY.map((a, i) => (
              <div key={i} className="flex items-baseline gap-4 px-5 py-3.5">
                <span className="w-11 shrink-0 font-mono text-[11px] tabular-nums text-ink/40">{a.t}</span>
                <span className={`h-1.5 w-1.5 shrink-0 translate-y-[1px] rounded-full ${OUTCOME[a.outcome].dot}`} aria-hidden="true" />
                <span className="min-w-0 text-sm leading-snug text-ink/75">{a.text}</span>
              </div>
            ))}
          </Panel>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-ink/35">
            Every action is logged with the reason the AI gave
          </p>
        </div>
      </div>
    </div>
  );
}
