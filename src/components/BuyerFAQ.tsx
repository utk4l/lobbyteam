import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowUpRight } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: 'ESSENTIALS',
    q: 'What is LobbyTeam?',
    a: 'LobbyTeam is a coordinated digital front-door team. One part engages the customer; other parts help understand the request, apply your business rules, and guide what happens next. Its goal is a useful answer, a completed request, or the right human next step — not another isolated chatbot.',
  },
  {
    category: 'ARCHITECTURE',
    q: 'How is it different from a chatbot or AI receptionist?',
    a: 'A chatbot usually waits for one style of conversation. A single AI receptionist usually carries the whole interaction alone. LobbyTeam is a coordinated team: one agent engages the customer while specialized agents interpret the request, verify tenant rules, and coordinate the next step behind the scenes.',
  },
  {
    category: 'STAFFING',
    q: 'Does it replace our staff?',
    a: 'No. LobbyTeam works alongside receptionists, office managers, sales teams, dispatchers, and support staff. Humans remain fully accountable for sensitive, clinical, commercial, or judgment-heavy decisions.',
  },
  {
    category: 'SAFETY',
    q: 'What happens when it does not know an answer?',
    a: 'LobbyTeam should not guess. It operates under a zero-hallucination policy. When outside approved rules, it triggers an approved fallback, gathers context, and routes to the designated human owner.',
  },
  {
    category: 'CHANNELS',
    q: 'Where can customers interact with it?',
    a: 'Depending on configuration, customers can use inbound phone calls, website chat, email, SMS, WhatsApp, and physical office lobby kiosks, tablets, or QR-code scan points.',
  },
  {
    category: 'OPERATIONS',
    q: 'Does it book appointments and take messages?',
    a: 'Yes — with context. It can book, reschedule, or cancel appointments based on your calendar permissions and rules. When taking a message, it captures the exact purpose, urgency, and relevant details rather than just a name and phone number.',
  },
  {
    category: 'AUDIENCE',
    q: 'Is it useful for a solopreneur?',
    a: 'Yes. A solo operator gets a reliable, immediate first response and makes follow-up visible across channels without pretending the owner is available everywhere at once.',
  },
  {
    category: 'ONBOARDING',
    q: 'How do we start?',
    a: 'Choose the one workflow that hurts your team the most — missed calls, appointment reschedules, repetitive FAQs, or callback follow-ups. Define your approved knowledge and routing rules, then connect the channel.',
  },
  {
    category: 'MEASUREMENT',
    q: 'How do we know if it is working?',
    a: 'Look for completed work rather than conversation volume: faster acknowledgement, zero repeated explanations by callers, reduced front-desk interruption, and accurate handoffs to staff.',
  },
];

export const BuyerFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-20 sm:py-28 bg-[#F5F5F7] border-t border-[#E5E5EA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-[#E5E5EA] shadow-apple-subtle mb-4">
            <span className="font-mono text-[10px] tracking-channelTag uppercase font-semibold text-[#6E6E73]">
              QUESTIONS WORTH ANSWERING
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tighterHeading text-[#1D1D1F] leading-tight mb-4">
            Before you put a digital team at your front door.
          </h2>
          <p className="text-base text-[#515154] leading-relaxed">
            Essential questions every business owner should ask before adopting front-door automation.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-[18px] bg-white border border-[#E5E5EA] shadow-apple-subtle overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-4 sm:py-5 flex items-center justify-between text-left group"
                >
                  <div className="flex items-center space-x-3 pr-4">
                    <span className="font-mono text-[10px] text-[#86868B] uppercase tracking-channelTag shrink-0 hidden sm:inline-block w-20">
                      {faq.category}
                    </span>
                    <span className="text-base sm:text-lg font-semibold text-[#1D1D1F] group-hover:text-[#10B981] transition-colors">
                      {faq.q}
                    </span>
                  </div>
                  <div
                    className={`h-7 w-7 rounded-[8px] bg-[#F5F5F7] flex items-center justify-center text-[#6E6E73] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 bg-[#1D1D1F] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 border-t border-[#F5F5F7] text-sm text-[#515154] leading-relaxed bg-[#FBFBFD]">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-6 rounded-[20px] bg-white border border-[#E5E5EA] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-semibold text-[#1D1D1F]">
              Have a specific front-door workflow question?
            </h4>
            <p className="text-xs text-[#6E6E73] mt-0.5">
              Talk directly with our operational engineers on WhatsApp or email.
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <a
              href="https://wa.me/919518076748"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-[12px] bg-[#10B981] text-white text-xs font-mono font-semibold hover:bg-[#059669] transition-colors"
            >
              WhatsApp Us
            </a>
            <a
              href="mailto:support@salesn.com"
              className="px-4 py-2 rounded-[12px] bg-[#F5F5F7] text-[#1D1D1F] border border-[#E5E5EA] text-xs font-mono font-medium hover:bg-[#E5E5EA] transition-colors"
            >
              support@salesn.com
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
