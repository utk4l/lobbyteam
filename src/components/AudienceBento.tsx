import React from 'react';
import { Building2, Calendar, Globe, QrCode, Clock, ArrowRight, Check } from 'lucide-react';

interface AudienceItem {
  id: string;
  num: string;
  title: string;
  channels: string[];
  situation: string;
  change: string;
  icon: React.ComponentType<{ className?: string }>;
  colSpan?: string;
}

const audiences: AudienceItem[] = [
  {
    id: 'office',
    num: '01',
    title: 'Office front desk',
    channels: ['PHONE', 'VISITORS', 'APPOINTMENTS'],
    situation: 'The receptionist is answering phones, taking messages, rescheduling appointments, and trying to keep the office moving at the same time.',
    change: 'LobbyTeam handles the first request, completes the work you define, and gives your staff the context to take over cleanly.',
    icon: Building2,
    colSpan: 'lg:col-span-7',
  },
  {
    id: 'appointments',
    num: '02',
    title: 'Appointment-heavy teams',
    channels: ['CONFIRM', 'REMIND', 'RESCHEDULE'],
    situation: 'The work is not difficult, but it is constant. A missed confirmation or reschedule becomes an empty slot and another phone call.',
    change: 'LobbyTeam turns appointment traffic into confirmed actions and owned follow-up instead of phone tag.',
    icon: Calendar,
    colSpan: 'lg:col-span-5',
  },
  {
    id: 'online',
    num: '03',
    title: 'Online businesses',
    channels: ['CHAT', 'EMAIL', 'SMS', 'WHATSAPP'],
    situation: 'Visitors arrive with questions across different channels, and the answer depends on who happens to see the message first.',
    change: 'LobbyTeam gives each inquiry a relevant answer or a clear human next step while keeping the conversation attached.',
    icon: Globe,
    colSpan: 'lg:col-span-4',
  },
  {
    id: 'lobby',
    num: '04',
    title: 'Physical office lobbies',
    channels: ['KIOSK', 'TABLET', 'QR CODE'],
    situation: 'A visitor arrives when the desk is busy, the right person is elsewhere, or the question belongs to another team.',
    change: 'LobbyTeam can orient the visitor, start a voice interaction, or connect them to a human host.',
    icon: QrCode,
    colSpan: 'lg:col-span-4',
  },
  {
    id: 'afterhours',
    num: '05',
    title: 'After-hours and multi-location teams',
    channels: ['TIME ZONES', 'SHIFTS', 'ESCALATION'],
    situation: 'The customer reaches the business outside normal hours, but the right human may be working in another location or time zone.',
    change: 'LobbyTeam routes by hours, availability, expertise, urgency, and ownership so the request reaches the right person with context.',
    icon: Clock,
    colSpan: 'lg:col-span-4',
  },
];

export const AudienceBento: React.FC = () => {
  return (
    <section id="audiences" className="py-20 sm:py-28 bg-[#F5F5F7] border-t border-[#E5E5EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-[#E5E5EA] shadow-apple-subtle mb-4">
              <span className="font-mono text-[10px] tracking-channelTag uppercase font-semibold text-[#6E6E73]">
                BUILT AROUND YOUR REALITY
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tighterHeading text-[#1D1D1F] leading-tight">
              Different businesses. Same need: clear ownership.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-[#6E6E73] max-w-md">
            LobbyTeam is for businesses where a missed call, unanswered message, or unclear handoff costs time, trust, or the next opportunity.
          </p>
        </div>

        {/* Bento Grid with optical nested radius */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {audiences.map((aud) => {
            const Icon = aud.icon;
            return (
              <div
                key={aud.id}
                className={`${aud.colSpan} p-6 sm:p-8 rounded-[24px] bg-white border border-[#E5E5EA] shadow-apple-subtle hover:shadow-apple-card transition-all duration-300 flex flex-col justify-between group relative overflow-hidden`}
              >
                {/* Top Bar with Number & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-sm font-bold text-[#86868B]">
                      {aud.num}
                    </span>
                    <div className="h-8 w-8 rounded-[10px] bg-[#F5F5F7] border border-[#E5E5EA] flex items-center justify-center text-[#1D1D1F] group-hover:bg-[#10B981] group-hover:text-white transition-colors">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-[#1D1D1F] tracking-tight mb-3">
                    {aud.title}
                  </h3>

                  {/* Channel Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {aud.channels.map((ch) => (
                      <span
                        key={ch}
                        className="font-mono text-[10px] tracking-channelTag uppercase px-2 py-0.5 rounded-[6px] bg-[#F5F5F7] border border-[#E5E5EA] text-[#6E6E73]"
                      >
                        {ch}
                      </span>
                    ))}
                  </div>

                  {/* Situation & Change (nested radius box) */}
                  <div className="space-y-3">
                    <div className="p-3.5 rounded-[16px] bg-[#FBFBFD] border border-[#ECECEE]">
                      <span className="block font-mono text-[9px] uppercase tracking-wider text-[#86868B] mb-1 font-semibold">
                        The Current Friction
                      </span>
                      <p className="text-xs text-[#515154] leading-relaxed">
                        {aud.situation}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-[16px] bg-[#10B981]/5 border border-[#10B981]/20">
                      <div className="flex items-center space-x-1.5 mb-1">
                        <Check className="h-3 w-3 text-[#10B981]" />
                        <span className="font-mono text-[9px] uppercase tracking-wider text-[#047857] font-semibold">
                          What Changes
                        </span>
                      </div>
                      <p className="text-xs text-[#1D1D1F] font-medium leading-relaxed">
                        {aud.change}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom link indicator */}
                <div className="mt-6 pt-3 border-t border-[#E5E5EA] flex items-center justify-between text-xs text-[#6E6E73]">
                  <span className="font-mono text-[10px] text-[#86868B]">
                    Full thread continuity
                  </span>
                  <span className="inline-flex items-center text-[#1D1D1F] font-medium group-hover:translate-x-0.5 transition-transform">
                    <span>Deploy workflow</span>
                    <ArrowRight className="h-3 w-3 ml-1 text-[#86868B]" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Common Thread Callout */}
        <div className="mt-6 p-6 sm:p-8 rounded-[20px] bg-white border border-[#E5E5EA] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-channelTag text-[#10B981] font-semibold">
              THE COMMON THREAD
            </span>
            <h4 className="text-lg font-semibold text-[#1D1D1F] mt-1">
              The customer should not have to know who owns the answer.
            </h4>
            <p className="text-xs text-[#6E6E73] mt-0.5 max-w-2xl">
              LobbyTeam helps the business understand the request, apply its rules, and make the next step visible to the person who needs to own it.
            </p>
          </div>
          <a
            href="https://lobbyteam.sophimind.com/app"
            className="px-4 py-2.5 rounded-[12px] bg-[#1D1D1F] text-white text-xs font-medium hover:bg-black transition-colors shrink-0"
          >
            Start with one request
          </a>
        </div>

      </div>
    </section>
  );
};
