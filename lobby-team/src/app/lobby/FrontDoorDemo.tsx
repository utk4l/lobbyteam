import { useEffect, useState } from 'react';
import {
  ArrowRight,
  Check,
  ClipboardCheck,
  Mail,
  MessageCircle,
  Phone,
  PhoneCall,
  UserRound,
} from 'lucide-react';

type Scenario = {
  id: string;
  channel: string;
  request: string;
  response: string;
  decision: string;
  action: string;
  human: string;
  detail: string;
  log: string[];
  icon: typeof MessageCircle;
  tone: string;
};

const SCENARIOS: Scenario[] = [
  {
    id: 'chat-callback',
    channel: 'Website chat',
    request: 'I need help choosing the right service. Can someone talk me through it?',
    response: 'I can get the right person on the phone so you do not have to repeat this.',
    decision: 'A phone conversation will serve this customer better.',
    action: 'Callback initiated',
    human: 'Maya · Customer support',
    detail: 'Calling a configured human when available',
    log: ['Chat received', 'Need understood', 'Callback initiated', 'Interaction logged'],
    icon: MessageCircle,
    tone: 'bg-moss/10 text-moss',
  },
  {
    id: 'email-callback',
    channel: 'Email',
    request: 'Could someone call me about the issue in my account?',
    response: 'I have your context. I am finding the right person to call you back.',
    decision: 'This request is better resolved by phone.',
    action: 'Callback requested',
    human: 'Jordan · Account team',
    detail: 'Near-instant when configured and a human is available',
    log: ['Email received', 'Account context attached', 'Callback requested', 'Interaction logged'],
    icon: Mail,
    tone: 'bg-[#b56b32]/10 text-[#9b5727]',
  },
  {
    id: 'voice-handoff',
    channel: 'Voice call',
    request: 'This is technical. I need to speak with someone who can help.',
    response: 'I understand. I am connecting you to the configured technical support person now.',
    decision: 'Human support is required.',
    action: 'Routing to a human',
    human: 'Alex · Technical support',
    detail: 'Calling the configured human phone number',
    log: ['Voice call received', 'Technical need identified', 'Human handoff started', 'Interaction logged'],
    icon: Phone,
    tone: 'bg-ink/10 text-ink',
  },
];

export function FrontDoorDemo() {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const scenario = SCENARIOS[scenarioIndex];
  const ChannelIcon = scenario.icon;

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = () => setReducedMotion(mediaQuery.matches);
    updateMotion();
    mediaQuery.addEventListener('change', updateMotion);
    return () => mediaQuery.removeEventListener('change', updateMotion);
  }, []);

  useEffect(() => {
    if (reducedMotion) return undefined;
    const timer = window.setInterval(() => {
      setScenarioIndex((currentIndex) => (currentIndex + 1) % SCENARIOS.length);
    }, 7200);
    return () => window.clearInterval(timer);
  }, [reducedMotion]);

  return (
    <div className="relative" aria-label="LobbyTeam multi-channel routing demonstration">
      <div className="mb-3 flex items-center justify-between px-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/45">
        <span className="flex items-center gap-2"><span className="live-dot h-2 w-2 rounded-full bg-live" />LobbyTeam in action</span>
        <span>One interaction record</span>
      </div>
      <div className="rounded-md border border-ink/10 bg-white p-4 shadow-[0_30px_80px_-50px_rgba(23,21,18,.55)] md:p-5">
        <div className="flex flex-wrap gap-2 border-b border-ink/10 pb-4" role="tablist" aria-label="Choose a LobbyTeam scenario">
          {SCENARIOS.map((item, index) => {
            const Icon = item.icon;
            return <button key={item.id} type="button" role="tab" aria-selected={index === scenarioIndex} onClick={() => setScenarioIndex(index)} className={`fluid inline-flex items-center gap-2 rounded-full border px-3 py-2 font-mono text-[10px] uppercase tracking-[0.08em] ${index === scenarioIndex ? 'border-ink bg-ink text-paper' : 'border-ink/10 text-ink/50 hover:border-ink/30'}`}><Icon size={13} />{item.channel}</button>;
          })}
        </div>

        <div key={scenario.id} className="lobby-demo-scene mt-5 grid gap-4 lg:grid-cols-[1fr_34px_1fr] lg:items-center">
          <div className="rounded-sm border border-ink/10 bg-paper/70 p-4">
            <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.12em] text-ink/40"><span className="flex items-center gap-2"><ChannelIcon size={13} />{scenario.channel}</span><span className="text-live">Live</span></div>
            <div className="mt-5 space-y-3">
              <div className="max-w-[92%] rounded-sm bg-white px-3.5 py-3 text-[13px] leading-relaxed text-ink/75 shadow-sm">{scenario.request}</div>
              <div className="ml-auto max-w-[92%] rounded-sm bg-ink px-3.5 py-3 text-[13px] leading-relaxed text-paper">{scenario.response}</div>
            </div>
          </div>

          <div className="hidden place-items-center text-moss lg:grid" aria-hidden="true"><ArrowRight size={22} /></div>
          <div className="grid place-items-center text-moss lg:hidden" aria-hidden="true"><span className="rotate-90"><ArrowRight size={22} /></span></div>

          <div className="space-y-3">
            <div className="rounded-sm border border-moss/25 bg-moss/5 p-4" aria-live="polite">
              <p className="font-mono text-[9px] uppercase tracking-[0.13em] text-moss">Decision made</p>
              <p className="mt-2 text-sm font-medium leading-relaxed">{scenario.decision}</p>
            </div>
            <div className="rounded-sm border border-ink/10 bg-white p-4">
              <div className="flex items-start gap-3"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ink text-paper"><PhoneCall size={15} /></span><div><p className="font-mono text-[9px] uppercase tracking-[0.13em] text-ink/40">{scenario.action}</p><p className="mt-1 text-sm font-medium">{scenario.human}</p><p className="mt-1 text-xs leading-relaxed text-ink/50">{scenario.detail}</p></div></div>
            </div>
          </div>
        </div>

        <div className="mt-5 border-t border-ink/10 pt-4">
          <div className="flex items-center justify-between gap-4"><p className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.13em] text-ink/40"><ClipboardCheck size={13} /> Interaction log</p><span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.1em] text-moss"><Check size={12} /> Context preserved</span></div>
          <div className="mt-3 grid gap-2 sm:grid-cols-4">{scenario.log.map((entry, index) => <div key={entry} className="flex items-center gap-2 text-xs text-ink/60"><span className={`grid h-5 w-5 shrink-0 place-items-center rounded-full ${index === scenario.log.length - 1 ? 'bg-moss text-paper' : 'bg-ink/8 text-ink/45'}`}>{index === scenario.log.length - 1 ? <Check size={11} /> : index + 1}</span><span>{entry}</span></div>)}</div>
        </div>
      </div>
      <p className="mt-3 flex items-center justify-end gap-1.5 font-mono text-[9px] uppercase tracking-[0.11em] text-ink/35"><UserRound size={12} />Configured rules keep humans in control</p>
    </div>
  );
}
