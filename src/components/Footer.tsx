import React from 'react';
import { ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-[#E5E5EA] pt-16 pb-12 text-[#1D1D1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-14 border-b border-[#E5E5EA]">
          
          {/* Brand Col */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2.5 mb-4">
              <div className="h-8 w-8 rounded-[9px] bg-[#1D1D1F] flex items-center justify-center text-white font-semibold text-sm">
                LT
              </div>
              <span className="font-semibold text-base tracking-tight text-[#1D1D1F]">
                LobbyTeam <span className="font-mono text-xs text-[#86868B] font-normal">by SophiMind</span>
              </span>
            </div>
            <p className="text-sm text-[#515154] leading-relaxed max-w-sm mb-6">
              Make sure every customer reaches an answer, a completed request, or the right human next step. Works alongside your staff, preserving context across all channels.
            </p>
            <div className="flex items-center space-x-2 text-xs font-mono text-[#6E6E73]">
              <span className="h-2 w-2 rounded-full bg-[#10B981]" />
              <span>ALL SYSTEMS OPERATIONAL · ZERO GUESSWORK</span>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <span className="block font-mono text-[11px] font-semibold tracking-channelTag uppercase text-[#86868B] mb-4">
              PRODUCT
            </span>
            <ul className="space-y-2.5 text-xs font-medium text-[#515154]">
              <li>
                <a href="#problem" className="hover:text-[#1D1D1F] transition-colors">
                  The Front-Door Problem
                </a>
              </li>
              <li>
                <a href="#audiences" className="hover:text-[#1D1D1F] transition-colors">
                  Who It Is For
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#1D1D1F] transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#1D1D1F] transition-colors">
                  Interaction Unit Pricing
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-[#1D1D1F] transition-colors">
                  Buyer FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Field Notes / Articles */}
          <div>
            <span className="block font-mono text-[11px] font-semibold tracking-channelTag uppercase text-[#86868B] mb-4">
              FIELD NOTES
            </span>
            <ul className="space-y-2.5 text-xs font-medium text-[#515154]">
              <li>
                <a href="https://lobbyteam.sophimind.com/blog" target="_blank" rel="noopener noreferrer" className="hover:text-[#1D1D1F] transition-colors">
                  Reduce Appointment Phone Tag
                </a>
              </li>
              <li>
                <a href="https://lobbyteam.sophimind.com/blog" target="_blank" rel="noopener noreferrer" className="hover:text-[#1D1D1F] transition-colors">
                  Safe AI Appointment Workflows
                </a>
              </li>
              <li>
                <a href="https://lobbyteam.sophimind.com/blog" target="_blank" rel="noopener noreferrer" className="hover:text-[#1D1D1F] transition-colors">
                  Modern Front Desk Operations
                </a>
              </li>
              <li>
                <a href="https://lobbyteam.sophimind.com/blog" target="_blank" rel="noopener noreferrer" className="hover:text-[#1D1D1F] transition-colors">
                  Recovering No-Shows
                </a>
              </li>
              <li>
                <a href="https://lobbyteam.sophimind.com/blog" target="_blank" rel="noopener noreferrer" className="hover:text-[#1D1D1F] transition-colors">
                  Warm Routing vs Blind Transfers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <span className="block font-mono text-[11px] font-semibold tracking-channelTag uppercase text-[#86868B] mb-4">
              CONTACT & DESK
            </span>
            <ul className="space-y-2.5 text-xs font-medium text-[#515154]">
              <li>
                <a
                  href="https://wa.me/919518076748"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-[#10B981] hover:underline"
                >
                  <span>WhatsApp: +91 95180 76748</span>
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="mailto:support@salesn.com" className="hover:text-[#1D1D1F] transition-colors">
                  support@salesn.com
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="https://show.iqwyk.com/sophimind/lobbyteam-by-sophimind"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-[#1D1D1F] hover:underline"
                >
                  <span>19-Slide Master Presentation</span>
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://lobbyteam.sophimind.com/app"
                  className="inline-flex items-center space-x-1 text-[#1D1D1F] font-semibold hover:underline"
                >
                  <span>Open LobbyTeam App</span>
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#86868B]">
          <div className="flex items-center space-x-2">
            <span>© 2026 LobbyTeam by SophiMind. All rights reserved.</span>
          </div>
          <div className="flex items-center space-x-6 font-mono text-[11px]">
            <span>TENANT-DEFINED POLICY</span>
            <span>HUMAN ACCOUNTABILITY</span>
            <span>CAL.COM × APPLE DESIGN</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
