import { useEffect, useState } from 'react';

type CallLine = { who: 'CALLER' | 'CONVERSO'; text: string; at: number };
type ChatLine = { who: 'VISITOR' | 'CONVERSO'; text: string; at: number };

/* Timeline (ms within one loop) */
const RING_END = 1400; // call answered
const RESOLVED_AT = 11800; // call resolution chip
const CALL_HANDOFF = 12800; // call card slides away
const CHAT_START = 13600; // chat card takes the front
const CHAT_CHIP_AT = 9800; // relative to CHAT_START
const LOOP = 25200;
const TYPING_MS = 22;

const CALL_LINES: CallLine[] = [
  { who: 'CALLER', text: "Hi, my order A1042 hasn't arrived yet.", at: 2200 },
  { who: 'CONVERSO', text: 'Checking your order now, one second.', at: 5400 },
  {
    who: 'CONVERSO',
    text: 'It shipped this morning, out for delivery — should reach you by 6 pm. Tracking link sent.',
    at: 7800,
  },
  { who: 'CALLER', text: 'Perfect, thanks!', at: 10800 },
];

const CHAT_LINES: ChatLine[] = [
  { who: 'VISITOR', text: 'Hi! Do you ship to Bangalore this week?', at: 500 },
  { who: 'CONVERSO', text: 'We do — 2 to 3 days. What do you need?', at: 2200 },
  { who: 'VISITOR', text: 'Three M2 stands, with delivery.', at: 3800 },
  { who: 'CONVERSO', text: "That's ₹14,700. Shall I book Thursday?", at: 5500 },
  { who: 'VISITOR', text: 'Yes, Thursday works.', at: 7100 },
  { who: 'CONVERSO', text: 'Booked — confirmation sent. Ticket #4822.', at: 8600 },
];

const BARS = [42, 68, 50, 82, 56, 92, 46, 74, 62, 88, 52, 66, 44, 78, 58, 94, 48, 72, 60, 86, 54, 70, 45, 80, 57, 76];

function ResolvedChip({ on, label }: { on: boolean; label: string }) {
  return (
    <div className={`tk flex items-center gap-2.5 rounded-sm border border-moss/30 bg-moss/10 px-3 py-2.5 ${on ? 'tk-on' : ''}`}>
      <svg className="h-3.5 w-3.5 shrink-0 text-moss" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 8.5 6.5 12 13 4.5" />
      </svg>
      <span className="text-[12px] font-medium text-moss">{label}</span>
    </div>
  );
}

export function LiveConversation() {
  const [now, setNow] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const id = setInterval(() => setNow((Date.now() - start) % LOOP), 60);
    return () => clearInterval(id);
  }, []);

  const answered = now >= RING_END;
  const callLive = answered && now < CALL_HANDOFF; // waveform dancing
  const inCall = now < CALL_HANDOFF; // call card in front, chat card peeking
  const chatNow = now - CHAT_START;
  const sec = answered
    ? Math.min(24, Math.floor(((now - RING_END) / (RESOLVED_AT - RING_END)) * 24))
    : 0;

  return (
    <div>
      <div className="relative" aria-hidden="true">
        {/* Back card: website chat */}
        <div
          className={`card-swap absolute inset-0 ${
            inCall ? 'z-0 -translate-y-5 translate-x-5 opacity-80' : 'z-10 translate-x-0 translate-y-0 opacity-100'
          }`}
        >
          <div className="flex h-full flex-col overflow-hidden rounded-md border border-ink/15 bg-white shadow-[0_1px_0_rgba(23,21,18,0.05),0_32px_64px_-32px_rgba(23,21,18,0.3)]">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-ink/10 px-5 py-3.5">
              <div className="flex items-center gap-3">
                <span
                  className={`h-2 w-2 rounded-full ${!inCall ? 'live-dot bg-live' : 'bg-ink/25'}`}
                />
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/70">
                  Website chat
                </span>
              </div>
              <span className="font-mono text-[11px] text-ink/35">converso.com</span>
            </div>

            {/* Chat, pinned to the bottom like a real thread */}
            <div className="flex flex-1 flex-col justify-end gap-2.5 overflow-hidden px-5 py-5">
              {CHAT_LINES.map((l, i) => {
                const typing = l.who === 'CONVERSO' && chatNow >= l.at - 900 && chatNow < l.at;
                return (
                  <div key={i}>
                    {typing && (
                      <div className="anim-rise mb-0.5 flex justify-end">
                        <span className="inline-flex items-center gap-1 rounded-sm bg-ink px-3 py-2.5">
                          {[0, 1, 2].map((d) => (
                            <span
                              key={d}
                              className="cursor-blink h-1.5 w-1.5 rounded-full bg-paper/70"
                              style={{ animationDelay: `${d * 0.2}s` }}
                            />
                          ))}
                        </span>
                      </div>
                    )}
                    {chatNow >= l.at && (
                      <div className={`anim-rise flex ${l.who === 'VISITOR' ? 'justify-start' : 'justify-end'}`}>
                        <span
                          className={`max-w-[85%] rounded-sm px-3 py-2 text-[13px] leading-snug ${
                            l.who === 'VISITOR'
                              ? 'bg-ink/5 text-ink/80'
                              : 'bg-ink text-paper'
                          }`}
                        >
                          {l.text}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
              <div className="mt-1.5">
                <ResolvedChip on={chatNow >= CHAT_CHIP_AT} label="Lead qualified · Ticket #4822" />
              </div>
            </div>
          </div>
        </div>

        {/* Front card: live call with audio + transcript */}
        <div
          className={`card-swap relative z-[1] ${
            inCall ? '' : 'pointer-events-none translate-x-10 translate-y-10 scale-[0.98] opacity-0'
          }`}
        >
          <div className="flex flex-col overflow-hidden rounded-md border border-ink/15 bg-white shadow-[0_1px_0_rgba(23,21,18,0.05),0_32px_64px_-32px_rgba(23,21,18,0.3)]">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-ink/10 px-5 py-3.5">
              <div className="flex items-center gap-3">
                <span className={`h-2 w-2 rounded-full ${answered ? 'live-dot bg-live' : 'bg-ink/25'}`} />
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/70">
                  {answered ? 'Live call' : 'Incoming…'}
                </span>
                <span className="font-mono text-[11px] tabular-nums text-ink/40">
                  {String(sec).padStart(2, '0')}s
                </span>
              </div>
              <span className="font-mono text-[11px] text-ink/35">Rahul · +91 98450 22314</span>
            </div>

            {/* Audio */}
            <div className="flex h-9 items-center gap-[3px] px-5 pt-4">
              {BARS.map((h, i) => (
                <span
                  key={i}
                  className={`w-[3px] rounded-full bg-ink/60 ${
                    callLive ? 'wave-bar' : 'scale-y-[0.22] opacity-40'
                  }`}
                  style={{
                    height: `${h}%`,
                    animationDelay: callLive ? `${-((i * 137) % 1100) / 1000}s` : undefined,
                    animationDuration: `${0.9 + (i % 5) * 0.12}s`,
                  }}
                />
              ))}
            </div>

            {/* Transcript, writing itself */}
            <div className="min-h-[230px] flex-1 space-y-4 px-5 py-5">
              {!answered && (
                <p className="pt-2 font-mono text-[12px] text-ink/40">
                  Ringing your number
                  <span className="cursor-blink ml-1 inline-block h-3 w-1.5 translate-y-0.5 bg-ink/40" />
                </p>
              )}
              {CALL_LINES.map((l, i) => {
                if (now < l.at) return null;
                const chars = Math.min(l.text.length, Math.floor((now - l.at) / TYPING_MS));
                const typing = chars < l.text.length;
                return (
                  <div key={i}>
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink/35">{l.who}</p>
                    <p
                      className={`mt-1 text-[15px] leading-snug ${
                        l.who === 'CONVERSO' ? 'text-ink' : 'text-ink/75'
                      }`}
                    >
                      {l.text.slice(0, chars)}
                      {typing && (
                        <span className="cursor-blink ml-0.5 inline-block h-[1em] w-[7px] translate-y-[2px] bg-ink/70" />
                      )}
                    </p>
                  </div>
                );
              })}
              <div className="pt-1">
                <ResolvedChip on={now >= RESOLVED_AT} label="Resolved by AI · 24 s · Ticket #4821" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Caption lives outside the deck so the link stays reachable */}
      <div className="mt-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.12em] text-ink/35">
        <span>The agent logs every action with a reason</span>
        <a
          href="#how-it-works"
          className="fluid normal-case tracking-normal text-[11px] text-ink/60 underline underline-offset-4 hover:text-moss"
        >
          Watch live →
        </a>
      </div>
    </div>
  );
}
