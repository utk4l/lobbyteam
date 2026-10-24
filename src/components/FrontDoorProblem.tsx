import React from 'react';
import { AlertCircle, CheckCircle2, ShieldAlert, Layers } from 'lucide-react';

export const FrontDoorProblem: React.FC = () => {
  return (
    <section id="problem" className="py-16 sm:py-24 lg:py-28 bg-[#F5F5F7] border-t border-[#E5E5EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-[#E5E5EA] shadow-apple-subtle mb-4">
            <span className="text-[10px] uppercase tracking-wider font-semibold text-[#6E6E73]">
              Why we built this
            </span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tighterHeading text-[#1D1D1F] leading-tight mb-4">
            Customers do not care which channel they used. They care whether they got somewhere.
          </h2>
          <p className="font-subheading text-sm sm:text-base lg:text-lg text-[#515154] leading-relaxed">
            Answering a ring or receiving an email doesn't solve the customer's problem. When messages sit in inboxes or callers get transferred blindly, customers get frustrated having to repeat their story, and your staff gets pulled away from their primary work.
          </p>
        </div>

        {/* Cal.com Exposed Hairline Comparison Bento */}
        <div className="relative rounded-[20px] sm:rounded-[24px] border border-[#E5E5EA] bg-white overflow-hidden shadow-apple-card">
          
          {/* Subtle Corner Crosshairs (desktop only) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:flex h-5 w-5 items-center justify-center text-[12px] text-[#86868B]">
            +
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20 hidden lg:flex h-5 w-5 items-center justify-center text-[12px] text-[#86868B]">
            +
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#E5E5EA]">
            
            {/* LEFT: The Front Desk Today */}
            <div className="p-5 sm:p-8 lg:p-12 bg-[#FBFBFD] flex flex-col justify-between">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 sm:mb-8">
                  <div className="flex items-center space-x-2.5">
                    <div className="h-7 w-7 rounded-[8px] bg-[#E5E5EA] text-[#6E6E73] flex items-center justify-center shrink-0">
                      <AlertCircle className="h-4 w-4" />
                    </div>
                    <span className="text-[11px] sm:text-[12px] uppercase tracking-wider font-semibold text-[#6E6E73]">
                      Your front desk today
                    </span>
                  </div>
                  <span className="self-start sm:self-auto text-[10px] sm:text-[11px] text-[#86868B] bg-[#E5E5EA]/60 px-2 py-0.5 rounded">
                    Constantly interrupted
                  </span>
                </div>

                <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                  {[
                    { step: '01', title: 'Answers the same 5 questions', desc: 'Recites office hours, pricing, and directions while visitors in the waiting room wait for attention.' },
                    { step: '02', title: 'Takes incomplete messages', desc: 'Jots down a name and callback number with no details on what the customer actually needs.' },
                    { step: '03', title: 'Gets trapped in phone tag', desc: 'Schedules obvious appointments, but spends half the day calling back customers to confirm or reschedule.' },
                    { step: '04', title: 'Transfers callers blindly', desc: 'Passes callers to teammates who are busy or away, dropping customers straight into voicemail.' },
                  ].map((item) => (
                    <div
                      key={item.step}
                      className="p-3.5 sm:p-4 rounded-[14px] bg-white border border-[#E5E5EA] shadow-apple-subtle flex items-start space-x-3"
                    >
                      <span className="text-xs font-semibold text-[#86868B] mt-0.5 shrink-0">
                        {item.step}
                      </span>
                      <div>
                        <h4 className="font-heading text-sm font-semibold text-[#1D1D1F] mb-0.5">
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

              {/* Problem Box */}
              <div className="p-3.5 sm:p-4 rounded-[16px] bg-[#F5F5F7] border border-[#E5E5EA]">
                <div className="flex items-center space-x-2 text-[10px] sm:text-[11px] uppercase text-[#86868B] mb-1 font-semibold">
                  <ShieldAlert className="h-3.5 w-3.5 text-[#86868B] shrink-0" />
                  <span>The core friction</span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-[#1D1D1F] leading-snug">
                  Your desk gets interrupted by dozens of small tasks every hour, while phones, emails, and WhatsApp conversations sit in completely separate silos.
                </p>
              </div>
            </div>

            {/* RIGHT: What Changes with LobbyTeam */}
            <div className="p-5 sm:p-8 lg:p-12 bg-white flex flex-col justify-between">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 sm:mb-8">
                  <div className="flex items-center space-x-2.5">
                    <div className="h-7 w-7 rounded-[8px] bg-[#10B981]/15 text-[#047857] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-4 w-4 text-[#10B981]" />
                    </div>
                    <span className="text-[11px] sm:text-[12px] uppercase tracking-wider font-semibold text-[#1D1D1F]">
                      With LobbyTeam in place
                    </span>
                  </div>
                  <span className="self-start sm:self-auto text-[10px] sm:text-[11px] text-[#047857] bg-[#10B981]/10 px-2 py-0.5 rounded font-medium border border-[#10B981]/20">
                    Progress on the first contact
                  </span>
                </div>

                <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                  {[
                    {
                      tag: 'ANSWER',
                      title: 'Answers approved questions instantly',
                      desc: 'Gives callers and chat visitors clear, verified answers regarding your hours, location, services, and appointment preparation.',
                    },
                    {
                      tag: 'COMPLETE',
                      title: 'Completes real scheduling tasks',
                      desc: 'Checks live calendar slots, books appointments, reschedules existing bookings, and sends text reminders automatically.',
                    },
                    {
                      tag: 'ROUTE',
                      title: 'Prepares warm staff handoffs',
                      desc: 'When a customer has a complex or sensitive request, routes to the right teammate with the full conversation summary on screen.',
                    },
                    {
                      tag: 'REMEMBER',
                      title: 'Keeps one shared memory',
                      desc: 'Every phone call, text, email, and front desk check-in stays in one thread. The customer never has to re-explain their situation.',
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
                          <h4 className="font-heading text-sm font-semibold text-[#1D1D1F]">
                            {item.title}
                          </h4>
                          <span className="text-[9px] sm:text-[10px] text-[#10B981] tracking-wider uppercase font-medium">
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

              {/* Solution Box */}
              <div className="p-3.5 sm:p-4 rounded-[16px] bg-[#10B981]/5 border border-[#10B981]/25">
                <div className="flex items-center space-x-2 text-[10px] sm:text-[11px] uppercase text-[#047857] mb-1 font-semibold">
                  <Layers className="h-3.5 w-3.5 text-[#10B981] shrink-0" />
                  <span>The result for your team</span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-[#1D1D1F] leading-snug">
                  Routine requests get resolved without ringing phones off the hook, while your team gets all the context they need to handle important cases with care.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
