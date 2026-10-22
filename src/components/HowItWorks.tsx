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
    short: 'Identifies the true intent',
    desc: 'LobbyTeam reads or listens to what the customer actually wants. It immediately separates routine questions about hours or parking from urgent matters that require your staff.',
    icon: Brain,
    badge: 'INTENT PARSING',
    payload: {
      label: 'Request Classification Summary',
      details: [
        { key: 'Arrival Channel', val: 'Inbound Phone (+1 415-890-1209)' },
        { key: 'Customer Intent', val: 'Reschedule booking + Preparation Q' },
        { key: 'Urgency Level', val: 'Time sensitive (Booking < 24 Hours)' },
        { key: 'Assigned Category', val: 'Appointment Operations' },
      ],
      callout: 'Understands customer intent regardless of phone accents or typing shortcuts.',
    },
  },
  {
    id: 'act',
    num: '02',
    title: 'Act',
    short: 'Completes tasks on the spot',
    desc: 'It checks your live calendar, references your approved facts, and completes the booking or question immediately. No waiting on hold, no phone tag.',
    icon: Cpu,
    badge: 'OFFICE RULES',
    payload: {
      label: 'Verified Action Log',
      details: [
        { key: 'Knowledge Base', val: 'Match: Pre-appointment preparation rules' },
        { key: 'Calendar Connection', val: 'Queried Google Calendar & Office DB' },
        { key: 'Offered Windows', val: 'Thu 10:00 AM / Fri 2:30 PM' },
        { key: 'Policy Check', val: 'Strict adherence · Zero hallucination' },
      ],
      callout: 'Executes verified actions inside your boundaries. It never improvises or promises what you cannot deliver.',
    },
  },
  {
    id: 'escalate',
    num: '03',
    title: 'Route',
    short: 'Hands off with full context',
    desc: 'When a customer has a unique question or requires human care, LobbyTeam transfers to the right person with the full conversation summary on screen.',
    icon: ArrowUpRight,
    badge: 'WARM TRANSFERS',
    payload: {
      label: 'Staff Handoff Summary',
      details: [
        { key: 'Target Team Member', val: 'Sarah Jenkins (Coordinator)' },
        { key: 'Escalation Reason', val: 'Specialist medical review requested' },
        { key: 'Delivery Method', val: 'Warm Phone Transfer + Slack alert' },
        { key: 'Context Preserved', val: 'Full transcript & details attached' },
      ],
      callout: 'Your teammate picks up the phone already knowing who is calling and what they need.',
    },
  },
  {
    id: 'remember',
    num: '04',
    title: 'Remember',
    short: 'Keeps one continuous thread',
    desc: 'If a customer calls today, texts tomorrow, and walks in on Friday, your team sees one unified history. The customer never has to re-explain their situation.',
    icon: History,
    badge: 'SHARED MEMORY',
    payload: {
      label: 'Customer Thread Record',
      details: [
        { key: 'Conversation ID', val: 'LT-ORD-2026-9041' },
        { key: 'Recorded Action', val: 'Rescheduled slot saved; prep emailed' },
        { key: 'Assigned Owner', val: 'Sarah Jenkins (Follow-up assigned)' },
        { key: 'Upcoming Step', val: 'Automated SMS reminder 2h prior' },
      ],
      callout: 'Phone calls, WhatsApp messages, and lobby visits all sync to the same customer profile.',
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
            <span className="text-[10px] uppercase tracking-wider font-semibold text-[#6E6E73]">
              How an interaction flows
            </span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tighterHeading text-[#1D1D1F] leading-tight mb-4">
            The conversation moves forward. Your people stay in control.
          </h2>
          <p className="font-subheading text-sm sm:text-base lg:text-lg text-[#515154] leading-relaxed">
            LobbyTeam never guesses or makes things up. It only answers questions you have approved and only books slots you have opened. If something falls outside your rules, it hands off cleanly to your staff.
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
                    <span className="text-[11px] sm:text-xs font-bold text-[#86868B]">
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
                  <h4 className="font-heading text-sm sm:text-base font-semibold text-[#1D1D1F] tracking-tight">
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
              <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-[6px] bg-[#10B981]/10 text-[#047857] border border-[#10B981]/20 text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
                <span>STEP {current.num} · {current.badge}</span>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-semibold text-[#1D1D1F] tracking-tight mb-3 sm:mb-4">
                {current.title}
              </h3>

              <p className="font-subheading text-xs sm:text-sm lg:text-base text-[#515154] leading-relaxed mb-4 sm:mb-6">
                {current.desc}
              </p>

              <div className="p-3.5 sm:p-4 rounded-[14px] sm:rounded-[16px] bg-[#F5F5F7] border border-[#E5E5EA]">
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#86868B] block mb-1 font-semibold">
                  Why this helps you
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
                  className="px-3 py-1.5 rounded-[10px] bg-white border border-[#E5E5EA] text-xs text-[#515154] disabled:opacity-40 hover:bg-[#F5F5F7]"
                >
                  ← PREV
                </button>
                <button
                  disabled={activeStep === steps.length - 1}
                  onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
                  className="px-3 py-1.5 rounded-[10px] bg-[#1D1D1F] text-white text-xs disabled:opacity-40 hover:bg-black"
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
                    <span className="text-[10px] sm:text-[11px] font-semibold text-[#1D1D1F] uppercase tracking-wider truncate">
                      {current.payload.label}
                    </span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] text-[#6E6E73] bg-white px-2 py-0.5 rounded border border-[#E5E5EA] shrink-0">
                    APPROVED RULES
                  </span>
                </div>

                <div className="space-y-2 sm:space-y-2.5 text-xs">
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

                <div className="mt-3.5 pt-2.5 sm:mt-4 sm:pt-3 border-t border-[#E5E5EA] flex items-center justify-between text-[10px] sm:text-[11px] text-[#6E6E73]">
                  <span>SPEED: &lt;140ms</span>
                  <span className="text-[#10B981] font-semibold">100% PRIVATE</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
