import { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  Check,
  FileText,
  MessageCircle,
  Network,
  Sparkles,
  UserRound,
} from 'lucide-react';

const LOOP_MS = 19000;
const TICK_MS = 80;

const VISITOR_MESSAGE = 'We need a better way to support our customers across locations.';
const CLARIFY_MESSAGE = 'Are you mainly trying to answer questions, route support, or coordinate the next step?';

const TEAM_SIGNALS = [
  ['Understand', 'Customer support', 'text-moss'],
  ['Find the fit', 'Distributed teams', 'text-[#9b5727]'],
  ['Guide next', 'Human handoff ready', 'text-ink/60'],
] as const;

function typeText(text: string, elapsed: number, start: number, duration: number) {
  if (elapsed <= start) return '';
  return text.slice(0, Math.min(text.length, Math.floor(((elapsed - start) / duration) * text.length)));
}

export function WebsiteDecisionDemo() {
  const [elapsed, setElapsed] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = () => setReducedMotion(mediaQuery.matches);
    updateMotion();
    mediaQuery.addEventListener('change', updateMotion);
    return () => mediaQuery.removeEventListener('change', updateMotion);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setElapsed(LOOP_MS - 1);
      return undefined;
    }
    const startedAt = Date.now();
    const timer = window.setInterval(() => setElapsed((Date.now() - startedAt) % LOOP_MS), TICK_MS);
    return () => window.clearInterval(timer);
  }, [reducedMotion]);

  const visitorText = useMemo(() => typeText(VISITOR_MESSAGE, elapsed, 550, 1600), [elapsed]);
  const clarifyText = useMemo(() => typeText(CLARIFY_MESSAGE, elapsed, 4200, 1100), [elapsed]);
  const visitorDone = elapsed >= 2150;
  const clarifyDone = elapsed >= 5550;
  const teamActive = elapsed >= 5900;
  const recommendationVisible = elapsed >= 9000;
  const outcomeVisible = elapsed >= 12400;
  const logVisible = elapsed >= 14500;

  return (
    <div className="relative" aria-label="LobbyTeam website decision team demonstration">
      <div className="mb-3 flex items-center justify-between px-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/45">
        <span className="flex items-center gap-2"><span className="live-dot h-2 w-2 rounded-full bg-live" />A website decision team in action</span>
        <span>Visitor to next step</span>
      </div>

      <div className="website-decision-shell overflow-hidden rounded-md border border-ink/15 bg-white shadow-[0_32px_80px_-40px_rgba(23,21,18,.6)]">
        <div className="flex items-center gap-2 border-b border-ink/10 bg-paper/75 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#e5a292]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#e2c47b]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#9bc6a7]" />
          <div className="ml-3 flex min-w-0 flex-1 items-center gap-2 rounded-sm border border-ink/10 bg-white px-3 py-1.5 font-mono text-[9px] text-ink/40">
            <span className="text-live">●</span> yourwebsite.com / help
          </div>
        </div>

        <div className="grid gap-0 lg:grid-cols-[1.12fr_.88fr]">
          <div className="flex min-h-[390px] flex-col border-b border-ink/10 bg-paper/40 p-5 lg:border-b-0 lg:border-r">
            <div className="flex items-center justify-between border-b border-ink/10 pb-4">
              <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-ink/50"><MessageCircle size={13} /> Website conversation</span>
              <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-live">Live</span>
            </div>
            <div className="flex flex-1 flex-col justify-end gap-3 py-5">
              <div className={`max-w-[92%] rounded-sm bg-white px-3.5 py-3 text-[13px] leading-relaxed text-ink/75 shadow-sm ${visitorText ? 'anim-rise' : 'invisible'}`}>
                {visitorText}<span className="cursor-blink ml-0.5 inline-block h-[1em] w-[6px] translate-y-0.5 bg-ink/60" />
              </div>
              {visitorDone && <div className="ml-auto max-w-[92%] rounded-sm bg-ink px-3.5 py-3 text-[13px] leading-relaxed text-paper anim-rise">I can help you find the right path. Let me understand what you need first.</div>}
              <div className={`max-w-[92%] rounded-sm border border-moss/25 bg-moss/10 px-3.5 py-3 text-[13px] leading-relaxed text-ink/75 ${clarifyText ? 'anim-rise' : 'invisible'}`}>
                {clarifyText}<span className="cursor-blink ml-0.5 inline-block h-[1em] w-[6px] translate-y-0.5 bg-moss" />
              </div>
              {clarifyDone && <div className="ml-auto max-w-[92%] rounded-sm bg-ink px-3.5 py-3 text-[13px] leading-relaxed text-paper anim-rise">We need to support customers and route complex questions to our team.</div>}
            </div>
            <div className="flex items-center gap-2 border-t border-ink/10 pt-4 font-mono text-[9px] uppercase tracking-[0.1em] text-ink/35"><span className="h-1.5 w-1.5 rounded-full bg-live" /> LobbyTeam is listening for the outcome</div>
          </div>

          <div className="relative min-h-[390px] bg-white p-5">
            <div className="flex items-center justify-between border-b border-ink/10 pb-4">
              <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-ink/50"><Network size={13} /> Team at work</span>
              <span className={`font-mono text-[9px] uppercase tracking-[0.1em] ${teamActive ? 'text-moss' : 'text-ink/30'}`}>{teamActive ? 'Interpreting' : 'Standing by'}</span>
            </div>

            <div className="relative mt-5 space-y-2.5">
              {TEAM_SIGNALS.map(([label, value, tone], index) => (
                <div key={label} className={`website-decision-signal ${teamActive ? 'website-decision-signal-active' : ''}`} style={{ animationDelay: `${index * 100}ms` }}>
                  <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-paper ${tone}`}><Sparkles size={14} /></span>
                  <div className="min-w-0"><p className="font-mono text-[9px] uppercase tracking-[0.1em] text-ink/40">{label}</p><p className="mt-0.5 text-xs text-ink/70">{value}</p></div>
                  <span className={`ml-auto h-1.5 w-1.5 shrink-0 rounded-full ${teamActive ? 'bg-live' : 'bg-ink/15'}`} />
                </div>
              ))}
            </div>

            <div className={`mt-5 rounded-sm border border-ink/10 bg-paper/65 p-4 transition-all duration-700 ${recommendationVisible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'}`} aria-live="polite">
              <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-moss">Relevant path found</p>
              <p className="mt-2 font-display text-xl leading-tight">Support and workflow coordination</p>
              <p className="mt-2 text-xs leading-relaxed text-ink/55">A resource is ready, and a human can join when the question needs one.</p>
              <div className="mt-4 flex flex-wrap gap-2"><span className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.08em] text-ink/55"><FileText size={11} /> Guide ready</span><span className="inline-flex items-center gap-1.5 rounded-full bg-ink px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.08em] text-paper"><UserRound size={11} /> Human available</span></div>
            </div>

            <div className={`mt-4 flex items-center gap-2 text-xs text-ink/55 transition-all duration-500 ${outcomeVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}><span className="grid h-6 w-6 place-items-center rounded-full bg-moss text-paper"><Check size={12} /></span><span>Next step offered with context attached</span><ArrowRight size={14} className="ml-auto text-moss" /></div>
          </div>
        </div>

        <div className={`border-t border-ink/10 px-5 py-4 transition-all duration-700 ${logVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-40'}`}>
          <div className="flex items-center justify-between gap-4"><p className="font-mono text-[9px] uppercase tracking-[0.13em] text-ink/40">Interaction record</p><span className="font-mono text-[9px] uppercase tracking-[0.1em] text-moss">Decision visible</span></div>
          <div className="mt-3 grid gap-2 text-xs text-ink/60 sm:grid-cols-4"><span className="flex items-center gap-2"><b className="h-1.5 w-1.5 rounded-full bg-live" />Question received</span><span className="flex items-center gap-2"><b className="h-1.5 w-1.5 rounded-full bg-live" />Need understood</span><span className="flex items-center gap-2"><b className="h-1.5 w-1.5 rounded-full bg-live" />Path identified</span><span className="flex items-center gap-2"><b className="h-1.5 w-1.5 rounded-full bg-moss" />Next step owned</span></div>
        </div>
      </div>
      <p className="mt-3 flex items-center justify-end gap-1.5 font-mono text-[9px] uppercase tracking-[0.11em] text-ink/35"><Network size={12} /> One agent engages. A team helps decide what happens next.</p>
    </div>
  );
}
