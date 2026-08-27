import { useEffect, useState } from 'react';

type Step =
  | { from: 'customer'; text: string; at: number }
  | { from: 'ai'; text: string; at: number }
  | { from: 'status'; text: string; at: number; until: number };

const EVENTS: Step[] = [
  { from: 'customer', text: "Hi, my order #A1042 hasn't arrived yet.", at: 900 },
  { from: 'status', text: 'AI is checking order A1042', at: 2600, until: 4200 },
  {
    from: 'ai',
    text: 'It shipped this morning and is out for delivery, it should reach you by 6 pm. I have just sent the tracking link.',
    at: 4200,
  },
  { from: 'customer', text: 'Perfect, thanks!', at: 6400 },
];

const RESOLVED_AT = 7600;
const LOOP = 10800;

export function LiveConversation() {
  const [now, setNow] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const id = setInterval(() => setNow((Date.now() - start) % LOOP), 100);
    return () => clearInterval(id);
  }, []);

  const resolved = now >= RESOLVED_AT;
  const shown = EVENTS.filter((e) =>
    e.from === 'status' ? now >= e.at && now < e.until : now >= e.at
  );

  return (
    <div className="w-full max-w-md mx-auto bg-white border border-zinc-200 rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-zinc-100">
        <div className="flex items-center gap-3">
          <span
            className="w-8 h-8 rounded-full bg-zinc-100 text-zinc-500 text-xs font-semibold flex items-center justify-center"
            aria-hidden="true"
          >
            RS
          </span>
          <div>
            <p className="text-sm text-zinc-950">Rahul Sharma</p>
            <p className="text-xs text-zinc-400 mt-1">WhatsApp · Support</p>
          </div>
        </div>
        <span className="flex items-center gap-2 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200/70 rounded-full px-3 py-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
          LIVE
        </span>
      </div>

      {/* Messages */}
      <div className="px-6 py-6 space-y-4 min-h-72">
        {shown.map((e, i) =>
          e.from === 'status' ? (
            <p key={i} className="text-xs text-zinc-400 pl-1 animate-pulse">
              {e.text}…
            </p>
          ) : (
            <div key={i} className="max-w-[85%]">
              <p className="text-xs text-zinc-400 mb-2">{e.from === 'customer' ? 'Rahul' : 'AI agent'}</p>
              <div
                className={`text-sm rounded-lg px-4 py-3 ${
                  e.from === 'customer'
                    ? 'bg-zinc-100 text-zinc-800'
                    : 'bg-white border border-zinc-200 text-zinc-800'
                }`}
              >
                {e.text}
              </div>
            </div>
          )
        )}
        <div className={`transition-opacity duration-700 ${resolved ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex items-center gap-2 pt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
            <p className="text-xs font-medium text-emerald-700">Resolved automatically</p>
            <span className="text-xs text-zinc-400">· 24 s</span>
          </div>
          <p className="text-xs text-zinc-400 mt-2">
            Checked order · Checked delivery policy · Replied with tracking
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-3 border-t border-zinc-100 bg-zinc-50/60 flex items-center justify-between">
        <p className="text-xs text-zinc-400">Every action logged with its reason</p>
        <a href="#how-it-works" className="fluid text-sm font-medium text-zinc-950 hover:underline underline-offset-2">
          Watch live →
        </a>
      </div>
    </div>
  );
}
