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
    description: 'For a solo practitioner or small desk testing their first automated phone line or website chat.',
    units: 20,
    extraUnitPrice: '$0.99 per extra unit',
    features: [
      '20 included interaction units every month',
      '$0.99 per extra unit if you exceed (calls never drop)',
      '1 dedicated channel (Phone, WhatsApp, or Web Chat)',
      'Answers approved FAQs and enforces office hours',
      'Sends email or SMS alerts to your team when a handoff is needed',
      'No setup fees, no contracts, cancel anytime',
    ],
  },
  {
    id: 'essential',
    name: 'Essential',
    price: '$99',
    description: 'Our most popular plan for clinics, law offices, and service teams with active daily appointment traffic.',
    units: 75,
    extraUnitPrice: '$0.79 per extra unit',
    isPopular: true,
    features: [
      '75 included interaction units every month',
      '$0.79 discounted rate per extra unit',
      'Multi-channel intake (Phone + WhatsApp + Web Chat)',
      'Live calendar booking and automatic rescheduling',
      'Voicemail recovery and intelligent outbound callbacks',
      'Warm live transfers to staff with caller summary attached',
      'Routes calls based on team shifts and time zones',
    ],
  },
  {
    id: 'full-front-door',
    name: 'Full Front Door',
    price: '$299',
    description: 'Comprehensive coverage for high-volume practices with multiple locations and on-call staff rotations.',
    units: 500,
    extraUnitPrice: '$0.59 per extra unit',
    features: [
      '500 included interaction units every month',
      '$0.59 lowest rate per extra unit',
      'Full coverage across Phone, WhatsApp, Chat, Email, and Lobby QR',
      'Complete appointment lifecycle (bookings, reminders, no-show recovery)',
      'Direct webhooks to your CRM, EHR, or practice software',
      'Priority routing rules by department and provider',
      'Dedicated setup assistance and office rule review',
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
            <span className="text-[10px] uppercase tracking-wider font-semibold text-[#6E6E73]">
              Clear, visible pricing
            </span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tighterHeading text-[#1D1D1F] leading-tight mb-4">
            Choose the right front-door coverage for your team.
          </h2>
          <p className="font-subheading text-sm sm:text-base lg:text-lg text-[#515154] leading-relaxed">
            No confusing token math or hidden usage charges. An Interaction Unit is a plain measure: 1 unit equals 1 minute of phone time or 1 message.
          </p>
        </div>

        {/* Visual Equation Bar */}
        <div className="mb-10 sm:mb-14 p-4 sm:p-6 rounded-[20px] bg-white border border-[#E5E5EA] shadow-apple-subtle max-w-4xl mx-auto">
          <div className="text-center mb-4">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold text-[#1D1D1F]">
              What is 1 Interaction Unit?
            </span>
            <p className="text-xs text-[#6E6E73] mt-0.5">
              One simple unit covers every way a customer contacts your team:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center">
            <div className="p-2.5 sm:p-3 rounded-[12px] bg-[#FBFBFD] border border-[#E5E5EA]">
              <Phone className="h-4 w-4 text-[#1D1D1F] mx-auto mb-1" />
              <span className="block text-[10px] sm:text-[11px] font-semibold text-[#1D1D1F]">1 Phone Min</span>
              <span className="text-[9px] sm:text-[10px] text-[#86868B] block truncate">Inbound or callback</span>
            </div>
            <div className="p-2.5 sm:p-3 rounded-[12px] bg-[#FBFBFD] border border-[#E5E5EA]">
              <Mail className="h-4 w-4 text-[#1D1D1F] mx-auto mb-1" />
              <span className="block text-[10px] sm:text-[11px] font-semibold text-[#1D1D1F]">1 Short Email</span>
              <span className="text-[9px] sm:text-[10px] text-[#86868B] block truncate">Read & replied</span>
            </div>
            <div className="p-2.5 sm:p-3 rounded-[12px] bg-[#FBFBFD] border border-[#E5E5EA]">
              <Smartphone className="h-4 w-4 text-[#1D1D1F] mx-auto mb-1" />
              <span className="block text-[10px] sm:text-[11px] font-semibold text-[#1D1D1F]">1 SMS</span>
              <span className="text-[9px] sm:text-[10px] text-[#86868B] block truncate">Text reminder</span>
            </div>
            <div className="p-2.5 sm:p-3 rounded-[12px] bg-[#FBFBFD] border border-[#E5E5EA]">
              <MessageSquare className="h-4 w-4 text-[#1D1D1F] mx-auto mb-1" />
              <span className="block text-[10px] sm:text-[11px] font-semibold text-[#1D1D1F]">1 WhatsApp</span>
              <span className="text-[9px] sm:text-[10px] text-[#86868B] block truncate">Customer chat</span>
            </div>
            <div className="col-span-2 sm:col-span-1 p-2.5 sm:p-3 rounded-[12px] bg-[#FBFBFD] border border-[#E5E5EA]">
              <Zap className="h-4 w-4 text-[#10B981] mx-auto mb-1" />
              <span className="block text-[10px] sm:text-[11px] font-semibold text-[#1D1D1F]">1 Web Chat Turn</span>
              <span className="text-[9px] sm:text-[10px] text-[#86868B] block truncate">Live site visitor</span>
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
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#10B981] text-white px-3 py-0.5 rounded-full text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase shadow-sm whitespace-nowrap">
                  Most popular for small teams
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading text-lg sm:text-xl font-semibold text-[#1D1D1F]">
                    {plan.name}
                  </h3>
                  <span className="text-[11px] sm:text-xs font-semibold px-2 py-0.5 rounded bg-[#F5F5F7] text-[#6E6E73] border border-[#E5E5EA]">
                    {plan.units} UNITS
                  </span>
                </div>

                <p className="text-xs text-[#6E6E73] min-h-[32px] mb-5 sm:mb-6 leading-relaxed">
                  {plan.description}
                </p>

                <div className="mb-5 pb-5 sm:mb-6 sm:pb-6 border-b border-[#E5E5EA]">
                  <div className="flex items-baseline space-x-1.5">
                    <span className="font-heading text-3xl sm:text-5xl font-semibold tracking-tight text-[#1D1D1F] tabular-nums">
                      {plan.price}
                    </span>
                    <span className="text-xs text-[#6E6E73]">
                      / month
                    </span>
                  </div>
                  <span className="block text-xs text-[#10B981] mt-1.5 font-medium">
                    + {plan.extraUnitPrice}
                  </span>
                </div>

                <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                  <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider text-[#86868B] font-semibold">
                    What is included:
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
                  className={`w-full py-3 sm:py-3.5 px-4 rounded-[12px] sm:rounded-[14px] text-xs font-medium uppercase tracking-wider flex items-center justify-center space-x-2 transition-all ${
                    plan.isPopular
                      ? 'bg-[#1D1D1F] text-white hover:bg-black shadow-apple-card'
                      : 'bg-[#F5F5F7] text-[#1D1D1F] hover:bg-[#E5E5EA] border border-[#E5E5EA]'
                  }`}
                >
                  <span>Get started with {plan.name}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-70" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Contact Note */}
        <div className="mt-8 sm:mt-12 text-center text-xs text-[#6E6E73] px-2">
          <p>
            Need custom volume or enterprise setup? Message us on WhatsApp at{' '}
            <a
              href="https://wa.me/919518076748"
              className="text-[#1D1D1F] font-semibold underline hover:text-[#10B981]"
            >
              +91 95180 76748
            </a>{' '}
            or email <a href="mailto:support@salesn.com" className="text-[#1D1D1F] font-semibold underline hover:text-[#10B981]">support@salesn.com</a>
          </p>
        </div>

      </div>
    </section>
  );
};
