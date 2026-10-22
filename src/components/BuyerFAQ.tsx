import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: 'OVERVIEW',
    q: 'What is LobbyTeam?',
    a: 'LobbyTeam is an automated front-door team for busy offices and service businesses. It answers your incoming phone calls, website chats, and WhatsApp messages, answering approved questions and scheduling appointments on your live calendar. When someone needs personal help, it hands off to your team with the full backstory attached.',
  },
  {
    category: 'DIFFERENCE',
    q: 'How is it different from a basic website chatbot or phone receptionist?',
    a: 'Most chatbots only work when someone is browsing your website, and traditional phone services treat every call as a disconnected ticket. LobbyTeam connects your phone lines, website, WhatsApp, email, and lobby tablet into one shared memory. If a client calls about an appointment and later messages on WhatsApp, your team sees the full history without making the client repeat themselves.',
  },
  {
    category: 'STAFFING',
    q: 'Does it replace our front desk staff?',
    a: 'No. It removes the constant interruptions that pull staff away from in-person clients. LobbyTeam handles the repetitive questions (directions, hours, basic pricing, standard bookings) so your receptionist can give full attention to visitors in the room and handle sensitive client care.',
  },
  {
    category: 'ACCURACY',
    q: 'What happens when a caller asks something LobbyTeam does not know?',
    a: 'It never guesses or invents answers. When an inquiry falls outside your approved rules, LobbyTeam lets the caller know it will connect them with your team, gathers the specific context, and sends a priority notification to the person responsible for that topic.',
  },
  {
    category: 'CHANNELS',
    q: 'Which channels can my customers use to reach it?',
    a: 'You can configure LobbyTeam to handle regular telephone calls, website live chat, WhatsApp messages, SMS, email, and physical tablet or QR-code check-ins in your reception lobby.',
  },
  {
    category: 'CALENDAR',
    q: 'Can it actually book and reschedule appointments on our calendar?',
    a: 'Yes. When connected to your calendar or booking software, LobbyTeam checks your live availability according to your scheduling buffer rules, books or moves the slot, and sends an immediate confirmation message.',
  },
  {
    category: 'SOLO OPERATORS',
    q: 'Can a solo owner or consultant use it?',
    a: 'Yes. Solo practitioners, attorneys, and service contractors use LobbyTeam to capture inbound leads and handle client questions while they are in meetings, working on client projects, or off the clock.',
  },
  {
    category: 'SETUP',
    q: 'How do we get started?',
    a: 'Start by automating the single request that interrupts your day the most—such as missed phone calls or appointment rescheduling. Define your approved answers and operating hours, connect your preferred channel, and go live.',
  },
];

export const BuyerFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-16 sm:py-24 lg:py-28 bg-[#F5F5F7] border-t border-[#E5E5EA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-[#E5E5EA] shadow-apple-subtle mb-4">
            <span className="text-[10px] uppercase tracking-wider font-semibold text-[#6E6E73]">
              Frequently asked questions
            </span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tighterHeading text-[#1D1D1F] leading-tight mb-4">
            Everything you need to know before putting LobbyTeam at your front door.
          </h2>
          <p className="font-subheading text-sm sm:text-base text-[#515154] leading-relaxed">
            Straight answers to the most common questions business owners and office managers ask us.
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
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left group"
                >
                  <div className="flex items-center space-x-3 pr-4">
                    <span className="text-[10px] text-[#86868B] uppercase tracking-wider shrink-0 hidden sm:inline-block w-24">
                      {faq.category}
                    </span>
                    <span className="font-heading text-base sm:text-lg font-semibold text-[#1D1D1F] group-hover:text-[#10B981] transition-colors">
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
                  <div className="px-5 sm:px-6 pb-5 pt-1 border-t border-[#F5F5F7] text-sm text-[#515154] leading-relaxed bg-[#FBFBFD]">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-10 sm:mt-12 p-5 sm:p-6 rounded-[20px] bg-white border border-[#E5E5EA] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-heading text-sm sm:text-base font-semibold text-[#1D1D1F]">
              Have a question about your specific office setup?
            </h4>
            <p className="text-xs text-[#6E6E73] mt-0.5">
              Chat directly with our team on WhatsApp or send us an email.
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <a
              href="https://wa.me/919518076748"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-[12px] bg-[#10B981] text-white text-xs font-semibold hover:bg-[#059669] transition-colors"
            >
              WhatsApp Us
            </a>
            <a
              href="mailto:support@salesn.com"
              className="px-4 py-2 rounded-[12px] bg-[#F5F5F7] text-[#1D1D1F] border border-[#E5E5EA] text-xs font-medium hover:bg-[#E5E5EA] transition-colors"
            >
              support@salesn.com
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
