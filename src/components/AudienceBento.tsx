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
    title: 'Office front desks',
    channels: ['PHONE', 'VISITORS', 'APPOINTMENTS'],
    situation: 'Phones ring constantly while your receptionist is trying to welcome a visitor, manage paperwork, and keep the waiting room moving.',
    change: 'LobbyTeam handles the incoming calls and routine bookings so your front desk can give full, undivided attention to the person in front of them.',
    icon: Building2,
    colSpan: 'lg:col-span-7',
  },
  {
    id: 'appointments',
    num: '02',
    title: 'Appointment-heavy practices',
    channels: ['CONFIRM', 'REMIND', 'RESCHEDULE'],
    situation: 'Staff spends hours every week playing phone tag to confirm bookings, and sudden cancellations turn into empty slots and lost revenue.',
    change: 'LobbyTeam handles 24/7 rescheduling, sends gentle appointment reminders, and immediately offers cancellations to waiting clients.',
    icon: Calendar,
    colSpan: 'lg:col-span-5',
  },
  {
    id: 'online',
    num: '03',
    title: 'Online businesses & solo founders',
    channels: ['CHAT', 'EMAIL', 'SMS', 'WHATSAPP'],
    situation: 'New leads arrive after hours or during deep work. By the time someone checks the inbox the next morning, the prospect has moved on.',
    change: 'LobbyTeam answers pricing and service questions across WhatsApp and chat 24/7, booking qualified sales meetings directly on your calendar.',
    icon: Globe,
    colSpan: 'lg:col-span-4',
  },
  {
    id: 'lobby',
    num: '04',
    title: 'Physical office lobbies',
    channels: ['KIOSK', 'TABLET', 'QR CODE'],
    situation: 'Visitors arrive when the front desk is away on lunch or busy in a meeting, leaving guests waiting without knowing who to contact.',
    change: 'A tablet or QR code greets guests at the door, notifies their host via text or Slack, and answers basic building directions.',
    icon: QrCode,
    colSpan: 'lg:col-span-4',
  },
  {
    id: 'afterhours',
    num: '05',
    title: 'After-hours & multi-location teams',
    channels: ['TIME ZONES', 'SHIFTS', 'ESCALATION'],
    situation: 'Inquiries arrive outside normal office hours, but team members work across different time zones and on-call rotations.',
    change: 'LobbyTeam identifies whether a request is an emergency and escalates directly to the on-call specialist with full context attached.',
    icon: Clock,
    colSpan: 'lg:col-span-4',
  },
];

export const AudienceBento: React.FC = () => {
  return (
    <section id="audiences" className="py-16 sm:py-24 lg:py-28 bg-[#F5F5F7] border-t border-[#E5E5EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-[#E5E5EA] shadow-apple-subtle mb-4">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#6E6E73]">
                Who uses LobbyTeam
              </span>
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tighterHeading text-[#1D1D1F] leading-tight">
              Built for businesses where missed calls mean lost clients.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-subheading text-sm sm:text-base text-[#6E6E73] max-w-md">
            Whether you run a clinic, an accounting practice, or a solo advisory firm, LobbyTeam ensures every caller and visitor reaches a prompt resolution.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {audiences.map((aud) => {
            const Icon = aud.icon;
            return (
              <div
                key={aud.id}
                className={`${aud.colSpan} p-5 sm:p-8 rounded-[20px] sm:rounded-[24px] bg-white border border-[#E5E5EA] shadow-apple-subtle hover:shadow-apple-card transition-all duration-300 flex flex-col justify-between group relative overflow-hidden`}
              >
                {/* Top Bar with Number & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <span className="text-sm font-bold text-[#86868B]">
                      {aud.num}
                    </span>
                    <div className="h-8 w-8 rounded-[10px] bg-[#F5F5F7] border border-[#E5E5EA] flex items-center justify-center text-[#1D1D1F] group-hover:bg-[#10B981] group-hover:text-white transition-colors">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  <h3 className="font-heading text-lg sm:text-xl font-semibold text-[#1D1D1F] tracking-tight mb-3">
                    {aud.title}
                  </h3>

                  {/* Channel Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {aud.channels.map((ch) => (
                      <span
                        key={ch}
                        className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-[6px] bg-[#F5F5F7] border border-[#E5E5EA] text-[#6E6E73]"
                      >
                        {ch}
                      </span>
                    ))}
                  </div>

                  {/* Situation & Change */}
                  <div className="space-y-3">
                    <div className="p-3.5 rounded-[16px] bg-[#FBFBFD] border border-[#ECECEE]">
                      <span className="block text-[9px] uppercase tracking-wider text-[#86868B] mb-1 font-semibold">
                        The daily friction
                      </span>
                      <p className="text-xs text-[#515154] leading-relaxed">
                        {aud.situation}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-[16px] bg-[#10B981]/5 border border-[#10B981]/20">
                      <div className="flex items-center space-x-1.5 mb-1">
                        <Check className="h-3 w-3 text-[#10B981]" />
                        <span className="text-[9px] uppercase tracking-wider text-[#047857] font-semibold">
                          How LobbyTeam helps
                        </span>
                      </div>
                      <p className="text-xs text-[#1D1D1F] font-medium leading-relaxed">
                        {aud.change}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom link */}
                <div className="mt-5 sm:mt-6 pt-3 border-t border-[#E5E5EA] flex items-center justify-between text-xs text-[#6E6E73]">
                  <span className="text-[10px] text-[#86868B]">
                    Full thread continuity
                  </span>
                  <span className="inline-flex items-center text-[#1D1D1F] font-medium group-hover:translate-x-0.5 transition-transform">
                    <span>Deploy this flow</span>
                    <ArrowRight className="h-3 w-3 ml-1 text-[#86868B]" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-6 p-5 sm:p-8 rounded-[20px] bg-white border border-[#E5E5EA] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-[#10B981] font-semibold">
              The bottom line
            </span>
            <h4 className="font-heading text-base sm:text-lg font-semibold text-[#1D1D1F] mt-1">
              Your customer should never have to guess who owns the answer.
            </h4>
            <p className="text-xs text-[#6E6E73] mt-0.5 max-w-2xl">
              LobbyTeam interprets incoming requests, applies your approved office rules, and brings in the right person only when human care is genuinely needed.
            </p>
          </div>
          <a
            href="https://lobbyteam.sophimind.com/app"
            className="px-4 py-2.5 rounded-[12px] bg-[#1D1D1F] text-white text-xs font-medium hover:bg-black transition-colors shrink-0"
          >
            Start with one workflow
          </a>
        </div>

      </div>
    </section>
  );
};
