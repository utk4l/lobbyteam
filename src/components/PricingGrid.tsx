import React from 'react';
import { Check, ArrowUpRight, Phone, Mail, MessageSquare, Smartphone, Zap } from 'lucide-react';

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  units: number;
  extraUnitPrice: string;
  isPopular?: boolean;
  features: string[];
}

const plans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$49',
    description: 'Start with one focused workflow.',
    units: 20,
    extraUnitPrice: '$0.99 per extra unit',
    features: [
      '20 included interaction units / month',
      '$0.99 per extra unit (never blocked)',
      '1 dedicated intake workflow (e.g. Phone or Chat)',
      'Approved knowledge base & policy enforcement',
      'Context-rich email / SMS staff handoff',
      'No setup fees · Cancel anytime',
    ],
  },
  {
    id: 'essential',
    name: 'Essential',
    price: '$99',
    description: 'Predictable coverage for a small team.',
    units: 75,
    extraUnitPrice: '$0.79 per extra unit',
    isPopular: true,
    features: [
      '75 included interaction units / month',
      '$0.79 per extra unit (discounted overage)',
      'Multi-channel intake (Phone + Web Chat + WhatsApp)',
      'Appointment calendar booking & rescheduling',
      'Voicemail recovery & intelligent outbound callback',
      'Warm human transfers with structured dossiers',
      'Time-zone & shift-aware routing',
    ],
  },
  {
    id: 'full-front-door',
    name: 'Full Front Door',
    price: '$299',
    description: 'Use LobbyTeam across channels and workflows.',
    units: 500,
    extraUnitPrice: '$0.59 per extra unit',
    features: [
      '500 included interaction units / month',
      '$0.59 per extra unit (lowest overage tier)',
      'Complete omnichannel coverage (Phone, Email, Chat, WhatsApp, Lobby QR)',
      'Full appointment lifecycle (book, remind, reschedule, no-show recovery)',
      'Priority routing & custom CRM/EHR webhooks',
      'Multi-location & departmental escalation matrices',
      'Dedicated tenant onboarding & policy auditing',
    ],
  },
];

export const PricingGrid: React.FC = () => {
  return (
    <section id="pricing" className="py-16 sm:py-24 lg:py-28 bg-[#F5F5F7] border-t border-[#E5E5EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-[#E5E5EA] shadow-apple-subtle mb-4">
            <span className="font-mono text-[10px] tracking-channelTag uppercase font-semibold text-[#6E6E73]">
              SIMPLE, VISIBLE USAGE
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tighterHeading text-[#1D1D1F] leading-tight mb-4">
            Choose the amount of front-door coverage you need.
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#515154] leading-relaxed">
            An Interaction Unit is a plain-language measure across the channels your customers use. No token math. No surprise AI-action meters.
          </p>
        </div>

        {/* Visual Equation Bar */}
        <div className="mb-10 sm:mb-14 p-4 sm:p-6 rounded-[20px] bg-white border border-[#E5E5EA] shadow-apple-subtle max-w-4xl mx-auto">
          <div className="text-center mb-4">
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-channelTag font-semibold text-[#1D1D1F]">
              WHAT IS 1 INTERACTION UNIT?
            </span>
            <p className="text-xs text-[#6E6E73] mt-0.5">
              One plain unit equalizes every way a customer communicates with your business:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center">
            <div className="p-2.5 sm:p-3 rounded-[12px] bg-[#FBFBFD] border border-[#E5E5EA]">
              <Phone className="h-4 w-4 text-[#1D1D1F] mx-auto mb-1" />
              <span className="block font-mono text-[10px] sm:text-[11px] font-semibold text-[#1D1D1F]">1 Phone Min</span>
              <span className="text-[9px] sm:text-[10px] text-[#86868B] block truncate">Inbound / callback</span>
            </div>
            <div className="p-2.5 sm:p-3 rounded-[12px] bg-[#FBFBFD] border border-[#E5E5EA]">
              <Mail className="h-4 w-4 text-[#1D1D1F] mx-auto mb-1" />
              <span className="block font-mono text-[10px] sm:text-[11px] font-semibold text-[#1D1D1F]">1 Short Email</span>
              <span className="text-[9px] sm:text-[10px] text-[#86868B] block truncate">Parsed & answered</span>
            </div>
            <div className="p-2.5 sm:p-3 rounded-[12px] bg-[#FBFBFD] border border-[#E5E5EA]">
              <Smartphone className="h-4 w-4 text-[#1D1D1F] mx-auto mb-1" />
              <span className="block font-mono text-[10px] sm:text-[11px] font-semibold text-[#1D1D1F]">1 SMS</span>
              <span className="text-[9px] sm:text-[10px] text-[#86868B] block truncate">Notification</span>
            </div>
            <div className="p-2.5 sm:p-3 rounded-[12px] bg-[#FBFBFD] border border-[#E5E5EA]">
              <MessageSquare className="h-4 w-4 text-[#1D1D1F] mx-auto mb-1" />
              <span className="block font-mono text-[10px] sm:text-[11px] font-semibold text-[#1D1D1F]">1 WhatsApp</span>
              <span className="text-[9px] sm:text-[10px] text-[#86868B] block truncate">Customer chat</span>
            </div>
            <div className="col-span-2 sm:col-span-1 p-2.5 sm:p-3 rounded-[12px] bg-[#FBFBFD] border border-[#E5E5EA]">
              <Zap className="h-4 w-4 text-[#10B981] mx-auto mb-1" />
              <span className="block font-mono text-[10px] sm:text-[11px] font-semibold text-[#1D1D1F]">1 Web Chat Turn</span>
              <span className="text-[9px] sm:text-[10px] text-[#86868B] block truncate">Live visitor</span>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-[20px] sm:rounded-[24px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                plan.isPopular
                  ? 'bg-white border-2 border-[#10B981] shadow-apple-card ring-2 sm:ring-4 ring-[#10B981]/10'
                  : 'bg-white border border-[#E5E5EA] shadow-apple-subtle hover:shadow-apple-card'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#10B981] text-white px-3 py-0.5 rounded-full font-mono text-[9px] sm:text-[10px] font-semibold tracking-channelTag uppercase shadow-sm whitespace-nowrap">
                  MOST POPULAR FOR SMALL TEAMS
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-[#1D1D1F]">
                    {plan.name}
                  </h3>
                  <span className="font-mono text-[11px] sm:text-xs font-semibold px-2 py-0.5 rounded bg-[#F5F5F7] text-[#6E6E73] border border-[#E5E5EA]">
                    {plan.units} UNITS
                  </span>
                </div>

                <p className="text-xs text-[#6E6E73] min-h-[28px] mb-5 sm:mb-6">
                  {plan.description}
                </p>

                <div className="mb-5 pb-5 sm:mb-6 sm:pb-6 border-b border-[#E5E5EA]">
                  <div className="flex items-baseline space-x-1.5">
                    <span className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#1D1D1F] tabular-nums">
                      {plan.price}
                    </span>
                    <span className="text-xs text-[#6E6E73] font-mono">
                      / month
                    </span>
                  </div>
                  <span className="block text-xs font-mono text-[#10B981] mt-1.5 font-medium">
                    + {plan.extraUnitPrice}
                  </span>
                </div>

                <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                  <span className="block font-mono text-[9px] sm:text-[10px] uppercase tracking-channelTag text-[#86868B] font-semibold">
                    WHAT'S INCLUDED:
                  </span>
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-[#515154]">
                      <Check className="h-3.5 w-3.5 text-[#10B981] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <a
                  href="https://lobbyteam.sophimind.com/app"
                  className={`w-full py-3 sm:py-3.5 px-4 rounded-[12px] sm:rounded-[14px] text-xs font-medium font-mono uppercase tracking-wider flex items-center justify-center space-x-2 transition-all ${
                    plan.isPopular
                      ? 'bg-[#1D1D1F] text-white hover:bg-black shadow-apple-card'
                      : 'bg-[#F5F5F7] text-[#1D1D1F] hover:bg-[#E5E5EA] border border-[#E5E5EA]'
                  }`}
                >
                  <span>Select {plan.name}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-70" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Guarantee Note */}
        <div className="mt-8 sm:mt-12 text-center text-xs text-[#6E6E73] font-mono px-2">
          <p>
            NEED HIGHER CAPACITY OR ENTERPRISE DISPATCH? REACH US VIA WHATSAPP AT{' '}
            <a
              href="https://wa.me/919518076748"
              className="text-[#1D1D1F] font-semibold underline hover:text-[#10B981]"
            >
              +91 95180 76748
            </a>{' '}
            OR EMAIL <a href="mailto:support@salesn.com" className="text-[#1D1D1F] font-semibold underline hover:text-[#10B981]">SUPPORT@SALESN.COM</a>
          </p>
        </div>

      </div>
    </section>
  );
};
