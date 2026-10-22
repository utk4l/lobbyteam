import { CONVERSATIONS, type Conversation } from '../data';
import { Eyebrow, OutcomeChip } from '../ui';

type Props = { onOpenConv: (id: string) => void };

/* One row = one conversation. No ticket number, no SLA, no category. */
function Row({ c, onOpen }: { c: Conversation; onOpen: (id: string) => void }) {
  return (
    <button
      onClick={() => onOpen(c.id)}
      className="fluid group flex w-full items-center gap-4 border-b border-ink/10 px-5 py-4 text-left last:border-b-0 hover:bg-ink/[0.02]"
    >
      {/* person */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2.5">
          <span className="truncate text-[15px] font-medium">{c.name}</span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.12em] text-ink/35 sm:inline">
            {c.channel} · {c.intent}
          </span>
        </div>
        <p className="mt-1 truncate text-sm text-ink/55">{c.last}</p>
      </div>
      <OutcomeChip outcome={c.outcome} className="hidden sm:inline-flex" />
      <span className="w-8 shrink-0 text-right font-mono text-[11px] tabular-nums text-ink/35">{c.time}</span>
      <span className="hidden text-ink/25 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-ink/60 sm:inline" aria-hidden="true">
        →
      </span>
    </button>
  );
}

export function Inbox({ onOpenConv }: Props) {
  const needsYou = CONVERSATIONS.filter((c) => c.outcome === 'needs-you' || c.outcome === 'active');
  const settled = CONVERSATIONS.filter((c) => c.outcome !== 'needs-you' && c.outcome !== 'active');

  return (
    <div className="mx-auto max-w-4xl px-6 py-10 md:py-14">
      <Eyebrow>Inbox</Eyebrow>
      <h1 className="mt-3 font-display text-5xl leading-[1.02] tracking-[-0.01em] md:text-6xl">Who is talking</h1>
      <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink/60">
        Conversations, not tickets. Each row is a person and where it stands.
      </p>

      <div className="mt-10">
        <Eyebrow className="mb-3">Needs attention · {needsYou.length}</Eyebrow>
        <div className="overflow-hidden rounded-md border border-ink/10 bg-white">
          {needsYou.map((c) => (
            <Row key={c.id} c={c} onOpen={onOpenConv} />
          ))}
        </div>

        <Eyebrow className="mb-3 mt-8">Everything else · {settled.length}</Eyebrow>
        <div className="overflow-hidden rounded-md border border-ink/10 bg-white">
          {settled.map((c) => (
            <Row key={c.id} c={c} onOpen={onOpenConv} />
          ))}
        </div>
      </div>
    </div>
  );
}
