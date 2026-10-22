import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MessageSquare, Smartphone, QrCode, CheckCircle2, UserCheck, ShieldCheck, CalendarCheck, ArrowDown } from 'lucide-react';

interface ChannelNode {
  id: string;
  label: string;
  shortLabel: string;
  sub: string;
  icon: React.ComponentType<{ className?: string }>;
  y: number; // percentage in SVG coordinate space
}

const channels: ChannelNode[] = [
  { id: 'phone', label: 'PHONE', shortLabel: 'Phone', sub: '+1 (555) 234-8901', icon: Phone, y: 18 },
  { id: 'chat', label: 'WEB CHAT', shortLabel: 'Web Chat', sub: 'lobbyteam.com/live', icon: MessageSquare, y: 34 },
  { id: 'email', label: 'EMAIL', shortLabel: 'Email', sub: 'hello@client.com', icon: Mail, y: 50 },
  { id: 'whatsapp', label: 'WHATSAPP', shortLabel: 'WhatsApp', sub: '+91 95180 76748', icon: Smartphone, y: 66 },
  { id: 'qr', label: 'LOBBY QR', shortLabel: 'Lobby QR', sub: 'Tablet Kiosk', icon: QrCode, y: 82 },
];

export const MagneticGlassSwitchboard: React.FC = () => {
  const [activeChannelIndex, setActiveChannelIndex] = useState(0);
  const [pulseCount, setPulseCount] = useState(0);
  const [centerPuckActive, setCenterPuckActive] = useState<number>(0);

  // Auto-cycle through incoming channels smoothly
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveChannelIndex((prev) => (prev + 1) % channels.length);
      setPulseCount((c) => c + 1);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  // Sync center agent highlights to the pulse lifecycle
  useEffect(() => {
    setCenterPuckActive(0);
    const t1 = setTimeout(() => setCenterPuckActive(1), 800);
    const t2 = setTimeout(() => setCenterPuckActive(2), 1600);
    const t3 = setTimeout(() => setCenterPuckActive(3), 2400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [pulseCount]);

  const activeChannel = channels[activeChannelIndex];

  return (
    <div className="relative w-full overflow-hidden rounded-[20px] sm:rounded-[24px] border border-[#E5E5EA] bg-white/85 sm:bg-white/70 backdrop-blur-xl shadow-apple-card">
      
      {/* Top subtle architectural telemetry bar (fully responsive) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E5E5EA] px-4 sm:px-5 py-2.5 sm:py-3 bg-[#FBFBFD]/95 gap-1.5 sm:gap-0">
        <div className="flex items-center space-x-2.5">
          <span className="flex h-2 w-2 relative shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
          </span>
          <span className="font-mono text-[10px] sm:text-[11px] font-medium tracking-channelTag uppercase text-[#1D1D1F] truncate">
            MAGNETIC SWITCHBOARD · TELEMETRY
          </span>
        </div>
        <div className="flex items-center space-x-3 text-[10px] sm:text-[11px] font-mono text-[#6E6E73]">
          <span className="hidden sm:inline-block">
            LATENCY: <span className="tabular-nums font-semibold text-[#1D1D1F]">38ms</span>
          </span>
          <span className="text-[10px] sm:text-[11px]">
            ACTIVE: <span className="font-semibold text-[#10B981]">{activeChannel.label}</span>
          </span>
          <span className="text-[#86868B]">
            THREAD: <span className="tabular-nums font-semibold text-[#1D1D1F]">#LT-8942</span>
          </span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MOBILE / TABLET VIEW (< 1024px)                                           */}
      {/* ========================================================================= */}
      <div className="block lg:hidden p-4 sm:p-6 space-y-4">
        
        {/* Step 1: Channel Selector (Horizontal scrolling / wrap pills) */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-[10px] uppercase tracking-channelTag text-[#6E6E73] font-semibold">
              01 · INCOMING ARRIVAL
            </span>
            <span className="font-mono text-[9px] text-[#10B981] bg-[#10B981]/10 px-1.5 py-0.5 rounded font-medium">
              TAP TO SWITCH
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {channels.map((ch, idx) => {
              const Icon = ch.icon;
              const isActive = idx === activeChannelIndex;
              return (
                <button
                  key={`mobile-${ch.id}`}
                  onClick={() => {
                    setActiveChannelIndex(idx);
                    setPulseCount((c) => c + 1);
                  }}
                  className={`flex items-center space-x-2 px-2.5 py-2 rounded-[12px] text-left transition-all border ${
                    isActive
                      ? 'bg-white border-[#10B981] shadow-apple-subtle ring-2 ring-[#10B981]/20'
                      : 'bg-[#FBFBFD] border-[#E5E5EA] text-[#6E6E73]'
                  } ${idx === 4 ? 'col-span-2 sm:col-span-1' : ''}`}
                >
                  <div
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-[8px] transition-colors ${
                      isActive ? 'bg-[#10B981] text-white' : 'bg-[#F5F5F7] text-[#6E6E73]'
                    }`}
                  >
                    <Icon className="h-3 w-3" />
                  </div>
                  <div className="min-w-0">
                    <span className="block font-mono text-[10px] font-semibold text-[#1D1D1F] truncate">
                      {ch.shortLabel}
                    </span>
                    <span className="block font-mono text-[8px] text-[#86868B] truncate">
                      {ch.sub}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Vertical Pulse Connector 1 */}
        <div className="flex flex-col items-center justify-center py-1">
          <div className="h-6 w-0.5 bg-[#E5E5EA] relative overflow-hidden rounded-full">
            <motion.div
              key={`mobile-vpulse-1-${pulseCount}`}
              className="w-full h-3 bg-[#10B981] rounded-full"
              initial={{ y: -12 }}
              animate={{ y: 24 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
            />
          </div>
          <ArrowDown className="h-3 w-3 text-[#10B981] -mt-0.5" />
        </div>

        {/* Step 2: Coordinated AI Core (The 3 Agent Pucks) */}
        <div className="p-3.5 rounded-[18px] bg-[#FBFBFD] border border-[#E5E5EA]">
          <div className="flex items-center justify-between mb-3">
            <span className="font-mono text-[10px] uppercase tracking-channelTag text-[#6E6E73] font-semibold">
              02 · COORDINATED DIGITAL TEAM
            </span>
            <span className="font-mono text-[9px] text-[#047857] bg-[#10B981]/10 px-1.5 py-0.5 rounded font-medium">
              3 AGENTS ACTIVE
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {/* Understand */}
            <div
              className={`p-2.5 rounded-[14px] border text-center transition-all ${
                centerPuckActive >= 1
                  ? 'bg-white border-[#10B981] shadow-apple-subtle ring-1 ring-[#10B981]/30'
                  : 'bg-white/60 border-[#E5E5EA]'
              }`}
            >
              <div className="flex items-center justify-center space-x-1 mb-1">
                <span className="font-mono text-[9px] font-bold text-[#1D1D1F]">UNDERSTAND</span>
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    centerPuckActive >= 1 ? 'bg-[#10B981]' : 'bg-[#D1D1D6]'
                  }`}
                />
              </div>
              <span className="block text-[9px] text-[#6E6E73] leading-tight">
                Intent Parsed
              </span>
            </div>

            {/* Act */}
            <div
              className={`p-2.5 rounded-[14px] border text-center transition-all ${
                centerPuckActive >= 2
                  ? 'bg-white border-[#10B981] shadow-apple-subtle ring-1 ring-[#10B981]/30'
                  : 'bg-white/60 border-[#E5E5EA]'
              }`}
            >
              <div className="flex items-center justify-center space-x-1 mb-1">
                <span className="font-mono text-[9px] font-bold text-[#1D1D1F]">ACT</span>
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    centerPuckActive >= 2 ? 'bg-[#10B981]' : 'bg-[#D1D1D6]'
                  }`}
                />
              </div>
              <span className="block text-[9px] text-[#6E6E73] leading-tight">
                Policy Checked
              </span>
            </div>

            {/* Route */}
            <div
              className={`p-2.5 rounded-[14px] border text-center transition-all ${
                centerPuckActive >= 3
                  ? 'bg-white border-[#10B981] shadow-apple-subtle ring-1 ring-[#10B981]/30'
                  : 'bg-white/60 border-[#E5E5EA]'
              }`}
            >
              <div className="flex items-center justify-center space-x-1 mb-1">
                <span className="font-mono text-[9px] font-bold text-[#1D1D1F]">ROUTE</span>
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    centerPuckActive >= 3 ? 'bg-[#10B981]' : 'bg-[#D1D1D6]'
                  }`}
                />
              </div>
              <span className="block text-[9px] text-[#6E6E73] leading-tight">
                Context Bound
              </span>
            </div>
          </div>

          {/* Micro badges on mobile */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5">
            <span className="font-mono text-[9px] bg-[#10B981]/10 text-[#047857] border border-[#10B981]/20 px-2 py-0.5 rounded-full font-medium inline-flex items-center space-x-1">
              <CheckCircle2 className="h-2.5 w-2.5 text-[#10B981]" />
              <span>Policy verified</span>
            </span>
            <span className="font-mono text-[9px] bg-[#10B981]/10 text-[#047857] border border-[#10B981]/20 px-2 py-0.5 rounded-full font-medium inline-flex items-center space-x-1">
              <CheckCircle2 className="h-2.5 w-2.5 text-[#10B981]" />
              <span>Calendar checked</span>
            </span>
            <span className="font-mono text-[9px] bg-[#10B981]/10 text-[#047857] border border-[#10B981]/20 px-2 py-0.5 rounded-full font-medium inline-flex items-center space-x-1">
              <CheckCircle2 className="h-2.5 w-2.5 text-[#10B981]" />
              <span>Context bound</span>
            </span>
          </div>
        </div>

        {/* Vertical Pulse Connector 2 */}
        <div className="flex flex-col items-center justify-center py-1">
          <div className="h-6 w-0.5 bg-[#E5E5EA] relative overflow-hidden rounded-full">
            <motion.div
              key={`mobile-vpulse-2-${pulseCount}`}
              className="w-full h-3 bg-[#10B981] rounded-full"
              initial={{ y: -12 }}
              animate={{ y: 24 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
            />
          </div>
          <ArrowDown className="h-3 w-3 text-[#10B981] -mt-0.5" />
        </div>

        {/* Step 3: Human Handoff Card (Derek Hastings) */}
        <div className="p-4 rounded-[18px] bg-white border border-[#E5E5EA] shadow-apple-card">
          <div className="flex items-center justify-between pb-2.5 border-b border-[#E5E5EA] mb-3">
            <div className="flex items-center space-x-2.5">
              <div className="relative">
                <div className="h-8 w-8 rounded-full bg-[#1D1D1F] text-white flex items-center justify-center font-medium text-[11px]">
                  DH
                </div>
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-[#10B981] border-2 border-white" />
              </div>
              <div>
                <span className="block text-xs font-semibold text-[#1D1D1F]">
                  Derek Hastings
                </span>
                <span className="block font-mono text-[9px] text-[#6E6E73]">
                  Coordinator · Available
                </span>
              </div>
            </div>
            <span className="font-mono text-[9px] text-[#047857] bg-[#10B981]/10 border border-[#10B981]/20 px-1.5 py-0.5 rounded font-semibold uppercase">
              WARM HANDOFF
            </span>
          </div>

          <div className="space-y-2">
            <div className="p-2.5 rounded-[10px] bg-[#FBFBFD] border border-[#ECECEE]">
              <span className="block font-mono text-[8px] uppercase text-[#86868B] mb-0.5 font-semibold">
                Captured Request & Context
              </span>
              <p className="text-[11px] font-medium text-[#1D1D1F] leading-snug">
                "Rescheduling 2:00 PM consultation to Thursday afternoon due to flight delay."
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[9px] font-mono">
              <div className="p-2 rounded-[8px] bg-[#F5F5F7] border border-[#E5E5EA]">
                <span className="block text-[#86868B]">CHANNEL</span>
                <span className="font-semibold text-[#1D1D1F] truncate block">{activeChannel.label}</span>
              </div>
              <div className="p-2 rounded-[8px] bg-[#F5F5F7] border border-[#E5E5EA]">
                <span className="block text-[#86868B]">AVAILABILITY</span>
                <span className="font-semibold text-[#10B981] truncate block">Thu 3:30 PM Open</span>
              </div>
            </div>
          </div>

          <div className="mt-2.5 pt-2 border-t border-[#E5E5EA] flex items-center justify-between text-[10px] text-[#6E6E73]">
            <span className="inline-flex items-center space-x-1">
              <UserCheck className="h-3 w-3 text-[#10B981]" />
              <span className="font-medium text-[#1D1D1F]">Zero repeated explanation</span>
            </span>
            <span className="font-mono text-[9px] text-[#10B981]">100% Preserved</span>
          </div>
        </div>

        {/* Mobile bottom note */}
        <div className="pt-2 text-center text-[10px] font-mono text-[#86868B]">
          WORKS ALONGSIDE YOUR PEOPLE · ZERO HALLUCINATION POLICY
        </div>

      </div>

      {/* ========================================================================= */}
      {/* DESKTOP VIEW (>= 1024px)                                                  */}
      {/* ========================================================================= */}
      <div className="hidden lg:flex relative min-h-[560px] w-full p-8 flex-col justify-between">
        {/* Subtle grid background */}
        <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />

        {/* Coded SVG Dynamic Wave Lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          preserveAspectRatio="none"
          viewBox="0 0 1000 500"
        >
          <defs>
            <linearGradient id="emeraldBeamDesk" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#10B981" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#34C759" stopOpacity="1" />
            </linearGradient>
            <filter id="emeraldGlowDesk" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#10B981" floodOpacity="0.6" />
            </filter>
          </defs>

          {/* Background guide hairlines */}
          {channels.map((ch, idx) => (
            <path
              key={`guide-desk-${ch.id}`}
              d={`M 170 ${ch.y * 5} C 320 ${ch.y * 5}, 360 250, 480 250`}
              fill="none"
              stroke="#E5E5EA"
              strokeWidth="1.2"
              strokeDasharray={idx === activeChannelIndex ? 'none' : '3 3'}
              opacity={idx === activeChannelIndex ? 0.9 : 0.35}
            />
          ))}

          {/* Connect center cluster to right handoff destination */}
          <path
            d="M 520 250 C 660 250, 720 250, 830 250"
            fill="none"
            stroke="#E5E5EA"
            strokeWidth="1.5"
          />

          {/* Active Flow Pulse Path */}
          <motion.path
            key={`active-path-desk-${activeChannelIndex}-${pulseCount}`}
            d={`M 170 ${activeChannel.y * 5} C 320 ${activeChannel.y * 5}, 360 250, 480 250 L 830 250`}
            fill="none"
            stroke="url(#emeraldBeamDesk)"
            strokeWidth="2.5"
            filter="url(#emeraldGlowDesk)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 1, 1, 0.4] }}
            transition={{
              duration: 2.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          />

          {/* Flowing particle along path */}
          <motion.circle
            key={`pulse-particle-desk-${activeChannelIndex}-${pulseCount}`}
            r="4"
            fill="#10B981"
            filter="url(#emeraldGlowDesk)"
            initial={{ offsetDistance: "0%" }}
            animate={{ offsetDistance: "100%" }}
            style={{
              offsetPath: `path("M 170 ${activeChannel.y * 5} C 320 ${activeChannel.y * 5}, 360 250, 480 250 L 830 250")`,
            }}
            transition={{
              duration: 2.8,
              ease: "easeInOut",
            }}
          />
        </svg>

        {/* 3 Columns Desktop Layout */}
        <div className="relative z-10 grid grid-cols-12 gap-4 items-center h-full my-auto">
          
          {/* ZONE 1: Arrival Channels (Left) */}
          <div className="col-span-3 flex flex-col space-y-2.5">
            <div className="mb-1 flex items-center justify-between">
              <span className="font-mono text-[10px] tracking-channelTag uppercase text-[#6E6E73] font-semibold">
                01 · ARRIVAL NODES
              </span>
              <span className="font-mono text-[10px] text-[#10B981] font-medium">5 CHANNELS ACTIVE</span>
            </div>

            {channels.map((ch, idx) => {
              const Icon = ch.icon;
              const isActive = idx === activeChannelIndex;
              return (
                <button
                  key={`desk-${ch.id}`}
                  onClick={() => {
                    setActiveChannelIndex(idx);
                    setPulseCount((c) => c + 1);
                  }}
                  className={`group relative flex items-center justify-between px-3.5 py-2.5 rounded-[14px] text-left transition-all duration-200 border ${
                    isActive
                      ? 'bg-white border-[#10B981] shadow-apple-card ring-2 ring-[#10B981]/20'
                      : 'bg-white/80 hover:bg-white border-[#E5E5EA] hover:border-[#D1D1D6] shadow-apple-subtle'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-[10px] transition-colors ${
                        isActive
                          ? 'bg-[#10B981] text-white shadow-sm'
                          : 'bg-[#F5F5F7] text-[#6E6E73] group-hover:text-[#1D1D1F]'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-1.5">
                        <span className="font-mono text-[11px] font-semibold tracking-channelTag uppercase text-[#1D1D1F]">
                          {ch.label}
                        </span>
                        {isActive && (
                          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#10B981] animate-pulse" />
                        )}
                      </div>
                      <span className="block font-mono text-[10px] text-[#86868B]">
                        {ch.sub}
                      </span>
                    </div>
                  </div>

                  {isActive && (
                    <span className="font-mono text-[9px] font-medium text-[#10B981] uppercase tracking-wider bg-[#10B981]/10 px-1.5 py-0.5 rounded">
                      Firing
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* ZONE 2: Coordinated AI Team (Center Glass Pucks) */}
          <div className="col-span-5 flex flex-col items-center justify-center px-2 py-4">
            <div className="mb-4 text-center">
              <span className="font-mono text-[10px] tracking-channelTag uppercase text-[#6E6E73] font-semibold">
                02 · COORDINATED DIGITAL TEAM
              </span>
              <p className="text-xs text-[#86868B] mt-0.5">
                Specialized agents interpret, check policy, and route
              </p>
            </div>

            {/* The 3 Coordinated Pucks */}
            <div className="w-full flex items-center justify-center gap-3">
              {/* Puck 1: Understand */}
              <div
                className={`relative flex-1 max-w-[155px] p-3.5 rounded-[18px] border transition-all duration-300 ${
                  centerPuckActive >= 1
                    ? 'bg-white border-[#10B981] shadow-apple-card ring-2 ring-[#10B981]/15'
                    : 'bg-white/70 border-[#E5E5EA]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] font-bold tracking-channelTag uppercase text-[#1D1D1F]">
                    UNDERSTAND
                  </span>
                  <div
                    className={`h-2 w-2 rounded-full transition-colors ${
                      centerPuckActive >= 1 ? 'bg-[#10B981]' : 'bg-[#D1D1D6]'
                    }`}
                  />
                </div>
                <div className="text-[11px] text-[#515154] leading-tight mb-2.5">
                  Reads intent across channel boundaries
                </div>
                <div className="inline-flex items-center space-x-1 px-1.5 py-0.5 rounded-[6px] bg-[#F5F5F7] border border-[#E5E5EA] text-[10px] font-mono text-[#1D1D1F]">
                  <CheckCircle2 className="h-3 w-3 text-[#10B981]" />
                  <span>Intent parsed</span>
                </div>
              </div>

              {/* Puck 2: Act */}
              <div
                className={`relative flex-1 max-w-[155px] p-3.5 rounded-[18px] border transition-all duration-300 ${
                  centerPuckActive >= 2
                    ? 'bg-white border-[#10B981] shadow-apple-card ring-2 ring-[#10B981]/15'
                    : 'bg-white/70 border-[#E5E5EA]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] font-bold tracking-channelTag uppercase text-[#1D1D1F]">
                    ACT
                  </span>
                  <div
                    className={`h-2 w-2 rounded-full transition-colors ${
                      centerPuckActive >= 2 ? 'bg-[#10B981]' : 'bg-[#D1D1D6]'
                    }`}
                  />
                </div>
                <div className="text-[11px] text-[#515154] leading-tight mb-2.5">
                  Applies tenant operating policy
                </div>
                <div className="inline-flex items-center space-x-1 px-1.5 py-0.5 rounded-[6px] bg-[#F5F5F7] border border-[#E5E5EA] text-[10px] font-mono text-[#1D1D1F]">
                  <ShieldCheck className="h-3 w-3 text-[#10B981]" />
                  <span>Policy checked</span>
                </div>
              </div>

              {/* Puck 3: Route */}
              <div
                className={`relative flex-1 max-w-[155px] p-3.5 rounded-[18px] border transition-all duration-300 ${
                  centerPuckActive >= 3
                    ? 'bg-white border-[#10B981] shadow-apple-card ring-2 ring-[#10B981]/15'
                    : 'bg-white/70 border-[#E5E5EA]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] font-bold tracking-channelTag uppercase text-[#1D1D1F]">
                    ROUTE
                  </span>
                  <div
                    className={`h-2 w-2 rounded-full transition-colors ${
                      centerPuckActive >= 3 ? 'bg-[#10B981]' : 'bg-[#D1D1D6]'
                    }`}
                  />
                </div>
                <div className="text-[11px] text-[#515154] leading-tight mb-2.5">
                  Prepares context-rich handoff
                </div>
                <div className="inline-flex items-center space-x-1 px-1.5 py-0.5 rounded-[6px] bg-[#F5F5F7] border border-[#E5E5EA] text-[10px] font-mono text-[#1D1D1F]">
                  <CalendarCheck className="h-3 w-3 text-[#10B981]" />
                  <span>Context bound</span>
                </div>
              </div>
            </div>

            {/* Live Micro-Badges Attaching Container */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`badges-desk-${pulseCount}`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="flex flex-wrap items-center justify-center gap-1.5"
                >
                  <span className="font-mono text-[10px] bg-[#10B981]/10 text-[#047857] border border-[#10B981]/20 px-2 py-0.5 rounded-full inline-flex items-center space-x-1 font-medium">
                    <CheckCircle2 className="h-3 w-3 text-[#10B981]" />
                    <span>✓ Policy approved</span>
                  </span>
                  <span className="font-mono text-[10px] bg-[#10B981]/10 text-[#047857] border border-[#10B981]/20 px-2 py-0.5 rounded-full inline-flex items-center space-x-1 font-medium">
                    <CheckCircle2 className="h-3 w-3 text-[#10B981]" />
                    <span>✓ Calendar checked</span>
                  </span>
                  <span className="font-mono text-[10px] bg-[#10B981]/10 text-[#047857] border border-[#10B981]/20 px-2 py-0.5 rounded-full inline-flex items-center space-x-1 font-medium">
                    <CheckCircle2 className="h-3 w-3 text-[#10B981]" />
                    <span>✓ Context attached</span>
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* ZONE 3: Destination Outcome & Human Handoff (Right) */}
          <div className="col-span-4 flex flex-col justify-center">
            <div className="mb-1 flex items-center justify-between">
              <span className="font-mono text-[10px] tracking-channelTag uppercase text-[#6E6E73] font-semibold">
                03 · OUTCOME & HANDOFF
              </span>
              <span className="font-mono text-[10px] text-[#1D1D1F] font-medium">NO BLIND TRANSFER</span>
            </div>

            {/* Human Handoff Card */}
            <motion.div
              layout
              className="relative p-5 rounded-[20px] bg-white border border-[#E5E5EA] shadow-apple-card"
            >
              <div className="flex items-center space-x-3 pb-3 border-b border-[#E5E5EA]">
                <div className="relative">
                  <div className="h-10 w-10 rounded-full bg-[#1D1D1F] text-white flex items-center justify-center font-medium text-xs">
                    DH
                  </div>
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-[#10B981] border-2 border-white" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-semibold text-[#1D1D1F]">
                      Derek Hastings
                    </span>
                    <span className="font-mono text-[10px] bg-[#F5F5F7] border border-[#E5E5EA] px-1.5 py-0.5 rounded text-[#515154]">
                      Coordinator
                    </span>
                  </div>
                  <span className="text-xs text-[#6E6E73]">
                    Available · Desk Phone & Dashboard
                  </span>
                </div>
              </div>

              {/* Handed-off Payload Dossier */}
              <div className="mt-3 space-y-2">
                <div className="p-2.5 rounded-[12px] bg-[#FBFBFD] border border-[#ECECEE]">
                  <div className="flex items-center justify-between text-[11px] mb-1">
                    <span className="font-mono uppercase text-[#86868B] text-[9px] font-semibold">
                      Reason for Contact
                    </span>
                    <span className="font-mono text-[10px] text-[#10B981] font-semibold">
                      HIGH PRIORITY
                    </span>
                  </div>
                  <p className="text-xs font-medium text-[#1D1D1F]">
                    "Rescheduling 2:00 PM consultation to Thursday afternoon due to flight delay."
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
                  <div className="p-2 rounded-[10px] bg-[#F5F5F7] border border-[#E5E5EA]">
                    <span className="block text-[#86868B] text-[9px]">ORIGIN</span>
                    <span className="font-semibold text-[#1D1D1F]">{activeChannel.label}</span>
                  </div>
                  <div className="p-2 rounded-[10px] bg-[#F5F5F7] border border-[#E5E5EA]">
                    <span className="block text-[#86868B] text-[9px]">CALENDAR STATUS</span>
                    <span className="font-semibold text-[#10B981]">Thursday 3:30 PM Open</span>
                  </div>
                </div>

                <div className="pt-1 flex items-center justify-between text-[11px] text-[#6E6E73]">
                  <span className="inline-flex items-center space-x-1">
                    <UserCheck className="h-3.5 w-3.5 text-[#10B981]" />
                    <span className="font-medium text-[#1D1D1F]">Customer never repeats story</span>
                  </span>
                  <span className="font-mono text-[10px] text-[#86868B]">100% state preserved</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Bottom Status Ticker Desktop */}
        <div className="mt-6 pt-3 border-t border-[#E5E5EA] flex items-center justify-between text-xs text-[#6E6E73]">
          <div className="flex items-center space-x-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
            <span className="font-mono text-[11px] uppercase">
              Current thread: <strong className="text-[#1D1D1F]">{activeChannel.label}</strong> → Verified against tenant policy → Scheduled next step
            </span>
          </div>
          <span className="font-mono text-[10px] text-[#86868B]">
            WORKS ALONGSIDE YOUR PEOPLE · ZERO HALLUCINATION POLICY
          </span>
        </div>
      </div>

    </div>
  );
};
