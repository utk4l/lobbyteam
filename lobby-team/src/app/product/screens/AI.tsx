import { useEffect, useState } from 'react';
import { AI_STATS } from '../data';
import { Eyebrow, Panel, StatNumber, btnGhost } from '../ui';

/* Watch Live — the system working autonomously, right now.
   Same story as the hero deck: Neha's return question, resolved without a human. */
const WL_LINES = [
  { who: 'customer' as const, text: 'Can I return this?', at: 900 },
  { who: 'ai' as const, text: 'Yes — checking whether your order is eligible for a return.', at: 3400 },
  { who: 'customer' as const, text: 'Okay, how do I send it back?', at: 8600 },
  { who: 'ai' as const, text: 'Your order is eligible. I emailed a prepaid return label — drop it at any counter by Sunday.', at: 11200 },
];
const WL_ACTIONS = [
  { at: 2800, text: 'Identified order #5510 from the account' },
  { at: 5200, text: 'Checked return policy — bought Aug 21, eligible' },
  { at: 10600, text: 'Created a prepaid return label and emailed it' },
  { at: 13600, text: 'Resolved — no human needed' },
];
const WL_LOOP = 16400;
const WL_TYPING = 22;

function WatchLive({ onOpenConv }: { onOpenConv: (id: string) => void }) {
  const [now, setNow] = useState(0);
  useEffect(() => {
    const start = Date.now();
    const id = setInterval(() => setNow((Date.now() - start) % WL_LOOP), 60);
    return () => clearInterval(id);
  }, []);

  return (
    <Panel className="overflow-hidden">
      <div className="flex items-center justify-between border-b border-ink/10 px-5 py-3.5">
        <div className="flex items-center gap-3">
          <span className="live-dot h-2 w-2 rounded-full bg-live" aria-hidden="true" />
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/70">Live</span>
          <span className="hidden font-mono text-[11px] text-ink/35 sm:inline">Neha Gupta · Website chat</span>
        </div>
        <button onClick={() => onOpenConv('c6')} className="fluid font-mono text-[10px] uppercase tracking-[0.12em] text-ink/50 underline underline-offset-4 hover:text-moss">
          Open conversation
        </button>
      </div>

      <div className="grid md:grid-cols-[1.2fr_0.8fr]">
        {/* The conversation, typing itself */}
        <div className="flex min-h-[260px] flex-col justify-end gap-3 px-5 py-5 md:border-r md:border-ink/10">
          {WL_LINES.map((l, i) => {
            if (now < l.at) return null;
            const chars = Math.min(l.text.length, Math.floor((now - l.at) / WL_TYPING));
            const typing = chars < l.text.length;
            return (
              <div key={i} className={`flex ${l.who === 'ai' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[90%] rounded-sm px-3.5 py-2.5 text-[13.5px] leading-relaxed ${
                    l.who === 'ai' ? 'bg-ink text-paper' : 'bg-ink/[0.04] text-ink/85'
                  }`}
                >
                  {l.text.slice(0, chars)}
                  {typing && (
                    <span className="cursor-blink ml-0.5 inline-block h-[1em] w-[6px] translate-y-[2px] bg-ink/70" aria-hidden="true" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* What the AI is doing, as it happens */}
        <div className="bg-paper/60 px-5 py-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/40">AI, working</p>
          <ul className="mt-4 space-y-3">
            {WL_ACTIONS.map((a, i) => (
              <li key={i} className={`tk flex items-start gap-2.5 ${now >= a.at ? 'tk-on' : ''}`}>
                <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-moss" aria-hidden="true" />
                <span className="text-[13px] leading-snug text-ink/70">{a.text}</span>
              </li>
            ))}
          </ul>
          {now >= WL_ACTIONS[3].at && (
            <div className="tk tk-on mt-5 inline-flex items-center gap-2 rounded-sm border border-moss/30 bg-moss/10 px-3 py-2">
              <svg className="h-3.5 w-3.5 text-moss" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 8.5 6.5 12 13 4.5" />
              </svg>
              <span className="text-[12px] font-medium text-moss">Resolved · no human needed</span>
            </div>
          )}
        </div>
      </div>
    </Panel>
  );
}

export function AI({ onOpenConv }: { onOpenConv: (id: string) => void }) {
  const maxChannel = Math.max(...AI_STATS.channels.map((c) => c.n));

  return (
    <div className="mx-auto max-w-5xl px-6 py-10 md:py-14">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-3">
            <span className="live-dot h-2 w-2 rounded-full bg-live" aria-hidden="true" />
            <Eyebrow>Always on</Eyebrow>
          </div>
          <h1 className="mt-3 font-display text-5xl leading-[1.02] tracking-[-0.01em] md:text-6xl">Your AI</h1>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink/60">
            Handling conversations automatically. It asks for help only where you told it to.
          </p>
        </div>
        <button className={btnGhost} onClick={() => onOpenConv('c6')}>
          Open the live one
        </button>
      </div>

      {/* What it handled today */}
      <div className="mt-10 grid gap-px overflow-hidden rounded-md border border-ink/10 bg-ink/10 sm:grid-cols-4">
        {[
          { n: AI_STATS.handled, label: 'handled today', tone: undefined },
          { n: AI_STATS.resolved, label: 'resolved', tone: 'text-moss' },
          { n: AI_STATS.needsYou, label: 'asked for you', tone: 'text-warn' },
          { n: AI_STATS.leads, label: 'became leads', tone: undefined },
        ].map((s) => (
          <div key={s.label} className="bg-white px-6 py-6">
            <StatNumber value={s.n} tone={s.tone} />
            <p className="mt-2 text-sm font-medium">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid items-start gap-8 lg:grid-cols-[1fr_320px]">
        <WatchLive onOpenConv={onOpenConv} />

        <div className="space-y-6">
          <div>
            <Eyebrow className="mb-3">Where it asks for help</Eyebrow>
            <Panel className="divide-y divide-ink/10">
              {AI_STATS.asks.map((a, i) => (
                <div key={i} className="flex items-baseline justify-between gap-4 px-4 py-3">
                  <div className="min-w-0">
                    <p className="text-[13px] leading-snug text-ink/75">{a.name}</p>
                    <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-ink/35">{a.note}</p>
                  </div>
                  <span className={`font-display text-2xl leading-none ${a.n > 0 ? 'text-warn' : 'text-ink/25'}`}>{a.n}</span>
                </div>
              ))}
            </Panel>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-ink/35">
              You decide these rules — in plain language
            </p>
          </div>

          <div>
            <Eyebrow className="mb-3">By channel</Eyebrow>
            <Panel className="space-y-4 px-5 py-5">
              {AI_STATS.channels.map((c) => (
                <div key={c.name}>
                  <div className="flex items-baseline justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink/45">{c.name}</span>
                    <span className="font-mono text-[12px] tabular-nums text-ink/70">{c.n}</span>
                  </div>
                  <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-ink/[0.07]">
                    <div className="h-full rounded-full bg-ink/60" style={{ width: `${(c.n / maxChannel) * 100}%` }} />
                  </div>
                </div>
              ))}
            </Panel>
          </div>
        </div>
      </div>
    </div>
  );
}
