import React, { useState } from 'react';
import { Brain, Cpu, ArrowUpRight, History } from 'lucide-react';

interface Step {
  id: string;
  num: string;
  title: string;
  short: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  badge: string;
  payload: {
    label: string;
    details: { key: string; val: string }[];
    callout: string;
  };
}

const steps: Step[] = [
  {
    id: 'understand',
    num: '01',
    title: 'Understand',
    short: 'Reads intent across channels',
    desc: 'LobbyTeam reads what the person actually needs, not just which channel they arrived from. It separates routine questions from urgent requests requiring human judgment.',
    icon: Brain,
    badge: 'INTENT PARSING',
    payload: {
      label: 'Request Classification Output',
      details: [
        { key: 'Detected Channel', val: 'Inbound Phone (+1 415-890-1209)' },
        { key: 'Customer Intent', val: 'Rescheduling + Preparation Q' },
        { key: 'Urgency Score', val: 'Elevated (< 24 Hours)' },
        { key: 'Assigned Category', val: 'Tier 1 Operations' },
      ],
      callout: 'Understands intent regardless of accents, formatting, or channel differences.',
    },
  },
  {
    id: 'act',
    num: '02',
    title: 'Act',
    short: 'Enforces tenant-defined rules',
    desc: 'It follows the operating rules you define for answers, appointments, resources, and requests. If an approved answer or workflow exists, it completes the work without human intervention.',
    icon: Cpu,
    badge: 'TENANT POLICY',
    payload: {
      label: 'Automated Action Protocol',
      details: [
        { key: 'Knowledge Base', val: 'Match: Pre-appointment rules' },
        { key: 'Calendar API', val: 'Queried Google Calendar / Clio DB' },
        { key: 'Slots Offered', val: 'Thu 10:00 AM / Fri 2:30 PM' },
        { key: 'Hallucination Check', val: 'Zero guess tolerance · Passed' },
      ],
      callout: 'Executes verified actions inside your business boundaries. Never improvises policy.',
    },
  },
  {
    id: 'escalate',
    num: '03',
    title: 'Escalate',
    short: 'Context-rich handoff',
    desc: 'When a human matters, it routes to the right person with the full conversation attached. The receptionist, dispatcher, or specialist gets the complete picture before they say hello.',
    icon: ArrowUpRight,
    badge: 'NO BLIND TRANSFERS',
    payload: {
      label: 'Handoff Dossier',
      details: [
        { key: 'Target Specialist', val: 'Sarah Jenkins (Coordinator)' },
        { key: 'Escalation Trigger', val: 'Specialist review requested' },
        { key: 'Handoff Medium', val: 'Warm Phone Transfer + Alert' },
        { key: 'Context Preserved', val: '100% transcripts attached' },
      ],
      callout: 'Customer never has to start over or re-explain their situation.',
    },
  },
  {
    id: 'remember',
    num: '04',
    title: 'Remember',
    short: 'State travels with the customer',
    desc: 'The next person sees what happened, what matters, and what should happen next. If the customer calls back, emails, or walks in tomorrow, the thread continues seamlessly.',
    icon: History,
    badge: 'UNIFIED STATE',
    payload: {
      label: 'Audit & Continuity Record',
      details: [
        { key: 'Thread ID', val: 'LT-ORD-2026-9041' },
        { key: 'Recorded Action', val: 'Rescheduled slot saved' },
        { key: 'Ownership', val: 'Assigned to Sarah for check' },
        { key: 'Next Trigger', val: 'SMS confirmation 2h prior' },
      ],
      callout: 'All interactions across phone, chat, and office visits sync to one thread.',
    },
  },
];

export const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const current = steps[activeStep];
  const Icon = current.icon;

  return (
    <section id="how-it-works" className="py-16 sm:py-24 lg:py-28 bg-[#F5F5F7] border-t border-[#E5E5EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-[#E5E5EA] shadow-apple-subtle mb-4">
            <span className="font-mono text-[10px] tracking-channelTag uppercase font-semibold text-[#6E6E73]">
              COORDINATED SYSTEM ARCHITECTURE
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tighterHeading text-[#1D1D1F] leading-tight mb-4">
            The conversation moves forward. Your people stay in control.
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#515154] leading-relaxed">
            LobbyTeam does not rely on an unrestricted autonomous model. Coordinated agents work inside your tenant-defined business policies to produce dependable operational outcomes.
          </p>
        </div>

        {/* 4-Step Interactive Track Container */}
        <div className="rounded-[20px] sm:rounded-[24px] border border-[#E5E5EA] bg-white p-5 sm:p-8 lg:p-10 shadow-apple-card">
          
          {/* Horizontal Step Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-2.5 pb-6 sm:pb-8 border-b border-[#E5E5EA]">
            {steps.map((st, idx) => {
              const StepIcon = st.icon;
              const isSelected = idx === activeStep;
              return (
                <button
                  key={st.id}
                  onClick={() => setActiveStep(idx)}
                  className={`p-3 sm:p-4 rounded-[14px] sm:rounded-[16px] text-left transition-all border ${
                    isSelected
                      ? 'bg-[#FBFBFD] border-[#10B981] shadow-apple-subtle ring-2 ring-[#10B981]/15'
                      : 'bg-white hover:bg-[#F5F5F7] border-[#E5E5EA]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                    <span className="font-mono text-[11px] sm:text-xs font-bold text-[#86868B]">
                      {st.num}
                    </span>
                    <div
                      className={`h-5 w-5 sm:h-6 sm:w-6 rounded-[6px] sm:rounded-[8px] flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-[#10B981] text-white'
                          : 'bg-[#F5F5F7] text-[#6E6E73]'
                      }`}
                    >
                      <StepIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    </div>
                  </div>
                  <h4 className="text-sm sm:text-base font-semibold text-[#1D1D1F] tracking-tight">
                    {st.title}
                  </h4>
                  <span className="block text-[10px] sm:text-[11px] text-[#6E6E73] truncate mt-0.5">
                    {st.short}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Step Deep-Dive Canvas */}
          <div className="pt-6 sm:pt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            {/* Step Prose (Left) */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-[6px] bg-[#10B981]/10 text-[#047857] border border-[#10B981]/20 font-mono text-[9px] sm:text-[10px] font-semibold uppercase tracking-channelTag mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
                <span>STEP {current.num} · {current.badge}</span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#1D1D1F] tracking-tight mb-3 sm:mb-4">
                {current.title}
              </h3>

              <p className="text-xs sm:text-sm lg:text-base text-[#515154] leading-relaxed mb-4 sm:mb-6">
                {current.desc}
              </p>

              <div className="p-3.5 sm:p-4 rounded-[14px] sm:rounded-[16px] bg-[#F5F5F7] border border-[#E5E5EA]">
                <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-[#86868B] block mb-1 font-semibold">
                  Why It Matters
                </span>
                <p className="text-xs text-[#1D1D1F] font-medium leading-relaxed">
                  {current.payload.callout}
                </p>
              </div>

              {/* Prev / Next controls */}
              <div className="flex items-center space-x-3 mt-5 sm:mt-6">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className="px-3 py-1.5 rounded-[10px] bg-white border border-[#E5E5EA] text-xs font-mono text-[#515154] disabled:opacity-40 hover:bg-[#F5F5F7]"
                >
                  ← PREV
                </button>
                <button
                  disabled={activeStep === steps.length - 1}
                  onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
                  className="px-3 py-1.5 rounded-[10px] bg-[#1D1D1F] text-white text-xs font-mono disabled:opacity-40 hover:bg-black"
                >
                  NEXT STEP →
                </button>
              </div>
            </div>

            {/* Step Live Operational Telemetry (Right) */}
            <div className="lg:col-span-7">
              <div className="rounded-[16px] sm:rounded-[20px] bg-[#FBFBFD] border border-[#E5E5EA] p-4 sm:p-6 shadow-apple-subtle">
                <div className="flex items-center justify-between pb-3 mb-3 sm:mb-4 border-b border-[#E5E5EA]">
                  <div className="flex items-center space-x-2">
                    <span className="h-2 w-2 rounded-full bg-[#10B981] shrink-0" />
                    <span className="font-mono text-[10px] sm:text-[11px] font-semibold text-[#1D1D1F] uppercase tracking-channelTag truncate">
                      {current.payload.label}
                    </span>
                  </div>
                  <span className="font-mono text-[9px] sm:text-[10px] text-[#6E6E73] bg-white px-2 py-0.5 rounded border border-[#E5E5EA] shrink-0">
                    ENFORCED
                  </span>
                </div>

                <div className="space-y-2 sm:space-y-2.5 font-mono text-xs">
                  {current.payload.details.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 sm:p-3 rounded-[10px] sm:rounded-[12px] bg-white border border-[#E5E5EA] flex flex-col sm:flex-row sm:items-center justify-between gap-0.5 sm:gap-1 shadow-apple-subtle"
                    >
                      <span className="text-[#86868B] text-[10px] sm:text-[11px]">
                        {item.key}
                      </span>
                      <span className="font-semibold text-[#1D1D1F] text-[11px] sm:text-[12px] truncate">
                        {item.val}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-3.5 pt-2.5 sm:mt-4 sm:pt-3 border-t border-[#E5E5EA] flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-[#6E6E73]">
                  <span>LATENCY: &lt;140ms</span>
                  <span className="text-[#10B981] font-semibold">ZERO LEAKAGE</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
