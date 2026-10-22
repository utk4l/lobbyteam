import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pt-2.5 sm:pt-3">
      <nav
        className={`w-full max-w-7xl transition-all duration-200 rounded-[16px] sm:rounded-[20px] px-3.5 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between border ${
          scrolled
            ? 'bg-white/85 backdrop-blur-2xl border-[#E5E5EA] shadow-apple-card'
            : 'bg-white/70 backdrop-blur-xl border-white/60 shadow-apple-subtle'
        }`}
      >
        {/* Brand */}
        <a href="#" className="flex items-center space-x-2 group shrink-0">
          <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-[8px] sm:rounded-[9px] bg-[#1D1D1F] flex items-center justify-center text-white font-semibold text-xs sm:text-sm shadow-sm transition-transform group-hover:scale-105">
            LT
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-1.5">
              <span className="font-semibold text-sm sm:text-[15px] tracking-tight text-[#1D1D1F]">
                LobbyTeam
              </span>
              <span className="font-mono text-[8px] sm:text-[9px] tracking-wider uppercase bg-[#F5F5F7] border border-[#E5E5EA] px-1 sm:px-1.5 py-0.2 rounded text-[#6E6E73]">
                by SophiMind
              </span>
            </div>
            <span className="text-[10px] text-[#86868B] font-mono -mt-0.5 hidden sm:block">
              Front door intelligence
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-7 text-[13px] font-medium text-[#515154]">
          <a href="#problem" className="hover:text-[#1D1D1F] transition-colors">
            Front-door problem
          </a>
          <a href="#audiences" className="hover:text-[#1D1D1F] transition-colors">
            Who it is for
          </a>
          <a href="#how-it-works" className="hover:text-[#1D1D1F] transition-colors">
            How it works
          </a>
          <a href="#pricing" className="hover:text-[#1D1D1F] transition-colors">
            Pricing
          </a>
          <a href="#faqs" className="hover:text-[#1D1D1F] transition-colors">
            FAQs
          </a>
        </div>

        {/* CTA Actions */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <a
            href="https://wa.me/919518076748"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-[12px] text-[12px] font-medium text-[#1D1D1F] bg-[#F5F5F7] hover:bg-[#E5E5EA] border border-[#E5E5EA] transition-all"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
            <span className="font-mono text-[11px]">WhatsApp Desk</span>
          </a>

          <a
            href="https://lobbyteam.sophimind.com/app"
            className="inline-flex items-center space-x-1 px-3 py-1.5 sm:px-4 sm:py-2 rounded-[10px] sm:rounded-[12px] text-xs sm:text-[13px] font-medium text-white bg-[#1D1D1F] hover:bg-black transition-all shadow-sm active:scale-95 whitespace-nowrap"
          >
            <span>Open LobbyTeam</span>
            <ArrowUpRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-white/70" />
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="absolute top-14 left-3 right-3 bg-white/95 backdrop-blur-2xl border border-[#E5E5EA] rounded-[18px] p-4 shadow-apple-card flex flex-col space-y-3 md:hidden z-50">
          <a
            href="#problem"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-[#1D1D1F] py-1.5 border-b border-[#F5F5F7]"
          >
            Front-door problem
          </a>
          <a
            href="#audiences"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-[#1D1D1F] py-1.5 border-b border-[#F5F5F7]"
          >
            Who it is for
          </a>
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-[#1D1D1F] py-1.5 border-b border-[#F5F5F7]"
          >
            How it works
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-[#1D1D1F] py-1.5 border-b border-[#F5F5F7]"
          >
            Pricing
          </a>
          <a
            href="#faqs"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-[#1D1D1F] py-1.5"
          >
            FAQs
          </a>
          <a
            href="https://wa.me/919518076748"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center py-2.5 rounded-[12px] bg-[#F5F5F7] border border-[#E5E5EA] text-xs font-mono font-medium"
          >
            WhatsApp Support: +91 95180 76748
          </a>
        </div>
      )}
    </header>
  );
};
