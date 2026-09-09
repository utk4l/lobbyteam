import { useEffect, useRef, useState } from 'react';
import { Check, MessageCircle, Phone, PhoneCall, UserRound } from 'lucide-react';

type ChatLine = { who: 'VISITOR' | 'LOBBYTEAM'; text: string; at: number };
type CallLine = { who: 'CALLER' | 'LOBBYTEAM' | 'DEREK'; text: string; at: number };

const CALL_HANDOFF = 11200;
const CALL_END = 22500;
const LOOP = 27000;
const TYPING_MS = 22;

const CHAT_LINES: ChatLine[] = [
  { who: 'VISITOR', text: 'We have a technical question about our setup.', at: 1200 },
  { who: 'LOBBYTEAM', text: 'I can help with that. Let me call you now as that may be better.', at: 4700 },
  { who: 'VISITOR', text: 'Yes, I need someone who knows the technical side.', at: 7800 },
  { who: 'LOBBYTEAM', text: 'I am calling Derek, your tech lead, and passing along what you told me.', at: 9200 },
];

const CALL_LINES: CallLine[] = [
  { who: 'CALLER', text: 'Hi, I was just chatting with your team on the website.', at: 1500 },
  { who: 'LOBBYTEAM', text: 'I have your context. I am patching you through to Derek, our tech lead.', at: 3900 },
  { who: 'DEREK', text: 'Hey, I have the details. Let us solve this together.', at: 7000 },
];

const BARS = [42, 68, 50, 82, 56, 92, 46, 74, 62, 88, 52, 66, 44, 78, 58, 94, 48, 72, 60, 86, 54, 70, 45, 80, 57, 76];

function ResolvedChip({ on, label }: { on: boolean; label: string }) {
  return (
    <div className={`tk flex items-center gap-2.5 rounded-sm border border-moss/30 bg-moss/10 px-3 py-2.5 ${on ? 'tk-on' : ''}`}>
      <Check size={14} className="shrink-0 text-moss" aria-hidden="true" />
      <span className="text-[12px] font-medium text-moss">{label}</span>
    </div>
  );
}

export function WebsiteDecisionDemo() {
  const [now, setNow] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const fastTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = () => setReducedMotion(mediaQuery.matches);
    updateMotion();
    mediaQuery.addEventListener('change', updateMotion);
    return () => mediaQuery.removeEventListener('change', updateMotion);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setNow(LOOP - 1);
      return undefined;
    }
    const startedAt = Date.now();
    const timer = window.setInterval(() => setNow((Date.now() - startedAt) % LOOP), 60);
    return () => window.clearInterval(timer);
  }, [reducedMotion]);

  useEffect(() => () => window.clearTimeout(fastTimer.current), []);

  const chatFront = now < CALL_HANDOFF || now >= CALL_END;
  const callFront = !chatFront;
  const callElapsed = now >= CALL_HANDOFF ? now - CALL_HANDOFF : now + LOOP - CALL_HANDOFF;
  const answered = callElapsed >= 900;
  const callLive = callFront && answered && callElapsed < 9400;
  const chatElapsed = now < CALL_HANDOFF ? now : now + LOOP - CALL_HANDOFF;
  const chatActive = chatElapsed < CALL_HANDOFF;
  const chatResolved = chatElapsed >= 10000;
  const callResolved = callElapsed >= 9000;
  const seconds = answered ? Math.min(24, Math.floor((callElapsed - 900) / 350)) : 0;

  const swapSpeed = reducedMotion ? '' : 'card-swap';
  const frontPosition = 'z-10 translate-y-0 translate-x-0 scale-100 opacity-100';
  const backPosition = 'card-swap-exit z-0 -translate-y-5 translate-x-5 scale-[0.985] opacity-80';

  return (
    <div className="relative" aria-label="LobbyTeam website chat and phone handoff demonstration">
      <div className="mb-3 flex items-center justify-between px-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/45">
        <span className="flex items-center gap-2"><span className="live-dot h-2 w-2 rounded-full bg-live" />LobbyTeam in action</span>
        <span>Chat → phone → Derek</span>
      </div>

      <div className="relative min-h-[520px] cursor-default">
        <div className={`absolute inset-0 ${swapSpeed} ${chatFront ? frontPosition : backPosition}`}>
          <div className="flex h-full flex-col overflow-hidden rounded-md border border-ink/15 bg-white shadow-[0_1px_0_rgba(23,21,18,0.05),0_32px_64px_-32px_rgba(23,21,18,0.3)]">
            <div className="flex items-center gap-2 border-b border-ink/10 bg-paper/75 px-5 py-3.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#e5a292]" /><span className="h-2.5 w-2.5 rounded-full bg-[#e2c47b]" /><span className="h-2.5 w-2.5 rounded-full bg-[#9bc6a7]" />
              <div className="ml-3 flex min-w-0 flex-1 items-center gap-2 rounded-sm border border-ink/10 bg-white px-3 py-1.5 font-mono text-[9px] text-ink/40"><span className="text-live">●</span> yourwebsite.com / chat</div>
            </div>
            <div className="flex flex-1 flex-col justify-end gap-2.5 overflow-hidden px-5 py-5">
              <div className="mb-auto flex items-center justify-between border-b border-ink/10 pb-4"><span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink/70"><MessageCircle size={13} /> Website chat</span><span className="font-mono text-[11px] text-live">Live</span></div>
              {CHAT_LINES.map((line, index) => {
                if (!chatActive && !chatResolved) return null;
                if (chatElapsed < line.at) return null;
                const characters = Math.min(line.text.length, Math.floor((chatElapsed - line.at) / TYPING_MS));
                const typing = characters < line.text.length;
                return <div key={`${line.who}-${index}`} className="anim-rise"><p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink/35">{line.who}</p><p className={`mt-1 max-w-[88%] text-[15px] leading-snug ${line.who === 'LOBBYTEAM' ? 'ml-auto text-ink' : 'text-ink/75'}`}>{line.text.slice(0, characters)}{typing && <span className="cursor-blink ml-0.5 inline-block h-[1em] w-[7px] translate-y-[2px] bg-ink/70" />}</p></div>;
              })}
              <div className="pt-2"><ResolvedChip on={chatResolved} label="Decision made · phone is better" /></div>
            </div>
            <div className="flex items-center justify-between border-t border-ink/10 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.12em] text-ink/35"><span>Website visitor</span><span className="flex items-center gap-1.5 text-moss"><PhoneCall size={12} /> Calling Derek</span></div>
          </div>
        </div>

        <div className={`relative ${swapSpeed} ${callFront ? frontPosition : backPosition}`}>
          <div className="flex min-h-[520px] flex-col overflow-hidden rounded-md border border-ink/15 bg-white shadow-[0_1px_0_rgba(23,21,18,0.05),0_32px_64px_-32px_rgba(23,21,18,0.3)]">
            <div className="flex items-center justify-between border-b border-ink/10 px-5 py-3.5"><div className="flex items-center gap-3"><span className={`h-2 w-2 rounded-full ${answered && callFront ? 'live-dot bg-live' : 'bg-ink/25'}`} /><span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/70">{answered ? 'Live call' : 'Incoming…'}</span><span className="font-mono text-[11px] tabular-nums text-ink/40">{String(seconds).padStart(2, '0')}s</span></div><span className="font-mono text-[11px] text-ink/35">Derek · Tech lead</span></div>
            <div className="flex h-12 items-center gap-[3px] px-5 pt-4">{BARS.map((height, index) => <span key={index} className={`wave w-[3px] rounded-full bg-ink/60 ${callLive ? 'wave-bar' : 'scale-y-[0.22] opacity-40'}`} style={{ height: `${height}%`, animationDelay: callLive ? `${-((index * 137) % 1100) / 1000}s` : undefined, animationDuration: `${0.9 + (index % 5) * 0.12}s` }} />)}</div>
            <div className="min-h-[310px] flex-1 space-y-5 px-5 py-5">
              {!answered && <p className="pt-2 font-mono text-[12px] text-ink/40">Calling Derek<span className="cursor-blink ml-1 inline-block h-3 w-1.5 translate-y-0.5 bg-ink/40" /></p>}
              {CALL_LINES.map((line, index) => {
                if (callElapsed < line.at) return null;
                const characters = Math.min(line.text.length, Math.floor((callElapsed - line.at) / TYPING_MS));
                const typing = characters < line.text.length;
                return <div key={`${line.who}-${index}`} className="anim-rise"><p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink/35">{line.who}</p><p className={`mt-1 text-[15px] leading-snug ${line.who === 'DEREK' ? 'text-moss' : line.who === 'LOBBYTEAM' ? 'text-ink' : 'text-ink/75'}`}>{line.text.slice(0, characters)}{typing && <span className="cursor-blink ml-0.5 inline-block h-[1em] w-[7px] translate-y-[2px] bg-ink/70" />}</p></div>;
              })}
              <div className="pt-1"><ResolvedChip on={callResolved} label="Connected · Context passed to Derek" /></div>
            </div>
            <div className="border-t border-ink/10 px-5 py-4"><div className="flex items-center justify-between gap-4"><p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-ink/35"><UserRound size={13} /> Human handoff</p><span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-moss"><Check size={12} /> Context preserved</span></div><p className="mt-3 text-sm leading-relaxed text-ink/60">Derek sees the visitor's question, the decision to call, and everything already discussed.</p></div>
          </div>
        </div>
      </div>

      <p className="mt-6 flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.12em] text-ink/35"><span>It does more than interact. It guides what happens next.</span><span className="hidden items-center gap-1.5 text-moss sm:flex"><Phone size={12} /> Phone + chat, one thread</span></p>
    </div>
  );
}
