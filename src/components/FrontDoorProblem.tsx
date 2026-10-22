import React from 'react';
import { AlertCircle, CheckCircle2, ShieldAlert, Layers } from 'lucide-react';

export const FrontDoorProblem: React.FC = () => {
  return (
    <section id="problem" className="py-16 sm:py-24 lg:py-28 bg-[#F5F5F7] border-t border-[#E5E5EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-[#E5E5EA] shadow-apple-subtle mb-4">
            <span className="font-mono text-[10px] tracking-channelTag uppercase font-semibold text-[#6E6E73]">
              THE ARCHITECTURAL SHIFT
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tighterHeading text-[#1D1D1F] leading-tight mb-4">
            Customers do not care which channel they used. They care whether they got somewhere.
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#515154] leading-relaxed">
            Intake is not the same as progress. A call answered without resolution, an unowned email, or a visitor waiting without context creates the gap where time, trust, and customers are lost.
          </p>
        </div>

        {/* Cal.com Exposed Hairline Comparison Bento */}
        <div className="relative rounded-[20px] sm:rounded-[24px] border border-[#E5E5EA] bg-white overflow-hidden shadow-apple-card">
          
          {/* Subtle Corner Architectural Crosshairs (desktop only) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:flex h-5 w-5 items-center justify-center font-mono text-[12px] text-[#86868B]">
            +
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20 hidden lg:flex h-5 w-5 items-center justify-center font-mono text-[12px] text-[#86868B]">
            +
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#E5E5EA]">
            
            {/* LEFT: The Front Desk Today (The Problem) */}
            <div className="p-5 sm:p-8 lg:p-12 bg-[#FBFBFD] flex flex-col justify-between">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 sm:mb-8">
                  <div className="flex items-center space-x-2.5">
                    <div className="h-7 w-7 rounded-[8px] bg-[#E5E5EA] text-[#6E6E73] flex items-center justify-center shrink-0">
                      <AlertCircle className="h-4 w-4" />
                    </div>
                    <span className="font-mono text-[11px] sm:text-[12px] tracking-channelTag uppercase font-semibold text-[#6E6E73]">
                      THE FRONT DESK TODAY
                    </span>
                  </div>
                  <span className="self-start sm:self-auto font-mono text-[10px] sm:text-[11px] text-[#86868B] bg-[#E5E5EA]/60 px-2 py-0.5 rounded">
                    FRAGILE & INTERRUPTED
                  </span>
                </div>

                <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                  {[
                    { step: '01', title: 'Answers questions', desc: 'Recites static office info over and over while physical visitors wait.' },
                    { step: '02', title: 'Takes messages', desc: 'Transcribes fragmented names and callback numbers with zero operational context.' },
                    { step: '03', title: 'Books the easy ones', desc: 'Schedules obvious slots, but phone tag consumes the remainder of the calendar.' },
                    { step: '04', title: 'Waits for help on everything else', desc: 'Blind transfers callers into empty departments or full voicemail boxes.' },
                  ].map((item) => (
                    <div
                      key={item.step}
                      className="p-3.5 sm:p-4 rounded-[14px] bg-white border border-[#E5E5EA] shadow-apple-subtle flex items-start space-x-3"
                    >
                      <span className="font-mono text-xs font-semibold text-[#86868B] mt-0.5 shrink-0">
                        {item.step}
                      </span>
                      <div>
                        <h4 className="text-sm font-semibold text-[#1D1D1F] mb-0.5">
                          {item.title}
                        </h4>
                        <p className="text-xs text-[#6E6E73] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Problem Punchline Box */}
              <div className="p-3.5 sm:p-4 rounded-[16px] bg-[#F5F5F7] border border-[#E5E5EA]">
                <div className="flex items-center space-x-2 text-[10px] sm:text-[11px] font-mono uppercase text-[#86868B] mb-1 font-semibold">
                  <ShieldAlert className="h-3.5 w-3.5 text-[#86868B] shrink-0" />
                  <span>The Real Problem</span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-[#1D1D1F] leading-snug">
                  The desk keeps getting more ways to be interrupted, while each tool (phone, email, chat, CRM) operates as a disconnected island.
                </p>
              </div>
            </div>

            {/* RIGHT: What Changes with LobbyTeam (The Solution) */}
            <div className="p-5 sm:p-8 lg:p-12 bg-white flex flex-col justify-between">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 sm:mb-8">
                  <div className="flex items-center space-x-2.5">
                    <div className="h-7 w-7 rounded-[8px] bg-[#10B981]/15 text-[#047857] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-4 w-4 text-[#10B981]" />
                    </div>
                    <span className="font-mono text-[11px] sm:text-[12px] tracking-channelTag uppercase font-semibold text-[#1D1D1F]">
                      WHAT CHANGES WITH LOBBYTEAM
                    </span>
                  </div>
                  <span className="self-start sm:self-auto font-mono text-[10px] sm:text-[11px] text-[#047857] bg-[#10B981]/10 px-2 py-0.5 rounded font-medium border border-[#10B981]/20">
                    A FRONT DOOR THAT DOES NOT STOP AT HELLO
                  </span>
                </div>

                <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                  {[
                    {
                      tag: 'ANSWER',
                      title: 'Answer',
                      desc: 'Give people a useful answer instead of a voicemail, form receipt, or dead end. Approved policy is applied instantly.',
                    },
                    {
                      tag: 'COMPLETE',
                      title: 'Complete',
                      desc: 'Handle the requests you define: appointments, callbacks, reminders, messages, and structured qualification.',
                    },
                    {
                      tag: 'ROUTE',
                      title: 'Route',
                      desc: 'Send exceptions to the right human with the complete context they need to pick up smoothly without asking them to repeat.',
                    },
                    {
                      tag: 'FOLLOW THROUGH',
                      title: 'Follow through',
                      desc: 'Keep ownership visible so the customer never starts over. The thread persists across phone, chat, and staff handoffs.',
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="p-3.5 sm:p-4 rounded-[14px] bg-[#FBFBFD] border border-[#E5E5EA] hover:border-[#10B981]/40 transition-colors shadow-apple-subtle flex items-start space-x-3 group"
                    >
                      <div className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-[#10B981]/10 text-[#10B981] mt-0.5 shrink-0">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-0.5">
                          <h4 className="text-sm font-semibold text-[#1D1D1F]">
                            {item.title}
                          </h4>
                          <span className="font-mono text-[9px] sm:text-[10px] text-[#10B981] tracking-wider uppercase font-medium">
                            {item.tag}
                          </span>
                        </div>
                        <p className="text-xs text-[#515154] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solution Punchline Box */}
              <div className="p-3.5 sm:p-4 rounded-[16px] bg-[#10B981]/5 border border-[#10B981]/25">
                <div className="flex items-center space-x-2 text-[10px] sm:text-[11px] font-mono uppercase text-[#047857] mb-1 font-semibold">
                  <Layers className="h-3.5 w-3.5 text-[#10B981] shrink-0" />
                  <span>The Strategic Outcome</span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-[#1D1D1F] leading-snug">
                  The customer experiences one business with clear accountability, while your human team stays focused on high-judgment work.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
