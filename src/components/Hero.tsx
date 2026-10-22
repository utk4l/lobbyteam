import React, { useRef, useState } from 'react';
import { ArrowUpRight, ArrowRight, Check, Play, Pause } from 'lucide-react';
import { MagneticGlassSwitchboard } from './MagneticGlassSwitchboard';

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayback = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="relative pt-24 pb-16 sm:pt-36 sm:pb-28 overflow-hidden">
      
      {/* Background Video Layer — Fixed viewport height on mobile to prevent distortion & 400% zoom */}
      <div className="absolute top-0 left-0 right-0 h-[560px] sm:h-[720px] lg:h-full overflow-hidden pointer-events-none z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-[center_20%] sm:object-center opacity-90 sm:opacity-95 filter contrast-[1.08] saturate-[1.05]"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Delicate daylight fade: gentle vignette and smooth bottom blend into #F5F5F7 */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5F5F7]/15 via-transparent to-[#F5F5F7]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_35%,rgba(245,245,247,0.3)_0%,transparent_60%,rgba(245,245,247,0.95)_100%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Top Centered Hero Copy Container */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-16">
          
          {/* Top Row: Architectural Live Pill + Ambient Video Badge */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-5 sm:mb-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#E5E5EA] shadow-apple-subtle">
              <span className="flex h-2 w-2 relative shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
              </span>
              <span className="font-mono text-[10px] sm:text-[11px] tracking-channelTag uppercase font-semibold text-[#1D1D1F]">
                TENANT-DEFINED POLICY · NO GUESSWORK
              </span>
            </div>

            {/* Video ambient indicator / pause toggle */}
            <button
              onClick={togglePlayback}
              title={isPlaying ? "Pause ambient background" : "Play ambient background"}
              className="pointer-events-auto inline-flex items-center space-x-1.5 px-2.5 py-1.5 rounded-full bg-white/85 hover:bg-white backdrop-blur-md border border-[#E5E5EA] text-[#6E6E73] hover:text-[#1D1D1F] transition-all text-[10px] font-mono shadow-apple-subtle"
            >
              {isPlaying ? (
                <>
                  <Pause className="h-2.5 w-2.5 text-[#10B981]" />
                  <span className="uppercase tracking-wider">Ambient On</span>
                </>
              ) : (
                <>
                  <Play className="h-2.5 w-2.5 text-[#86868B]" />
                  <span className="uppercase tracking-wider">Paused</span>
                </>
              )}
            </button>
          </div>

          {/* Main Headline — Responsive font size, sentence case only with daylight text halo */}
          <h1 className="text-3xl sm:text-5xl lg:text-[68px] font-semibold tracking-tighterHeading text-[#1D1D1F] leading-[1.12] sm:leading-[1.08] mb-5 sm:mb-6 drop-shadow-[0_2px_14px_rgba(255,255,255,0.9)]">
            One digital team for every way customers reach you.
          </h1>

          {/* Subheadline — Exact copy from lobbyteam-full-extraction.md with daylight text halo */}
          <p className="text-base sm:text-lg lg:text-xl text-[#2C2C2E] leading-relaxed max-w-3xl mx-auto font-normal mb-6 sm:mb-8 px-1 sm:px-0 drop-shadow-[0_1px_10px_rgba(255,255,255,0.95)]">
            LobbyTeam answers phone calls, responds to emails and chats, calls back when a conversation needs a voice, and routes to the right human when that is the best next step. Behind every interaction, coordinated agents interpret the request, apply your business rules, and guide the customer toward a useful outcome.
          </p>

          {/* Value highlight pill */}
          <div className="inline-flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2 text-xs font-mono text-[#6E6E73] mb-6 sm:mb-8 py-2 px-3 sm:px-4 rounded-[12px] bg-white/85 backdrop-blur-md border border-[#E5E5EA] shadow-apple-subtle">
            <span className="inline-flex items-center text-[#1D1D1F] font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-[#10B981] mr-1.5 sm:mr-2" />
              Works alongside your people.
            </span>
            <span className="text-[#86868B] hidden sm:inline">|</span>
            <span className="inline-flex items-center text-[#1D1D1F] font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-[#10B981] mr-1.5 sm:mr-2" />
              Never asks customers to start over.
            </span>
          </div>

          {/* Primary & Secondary Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 max-w-xs sm:max-w-none mx-auto">
            <a
              href="https://lobbyteam.sophimind.com/app"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-[14px] bg-[#1D1D1F] hover:bg-black text-white text-sm font-medium transition-all shadow-apple-card active:scale-[0.98]"
            >
              <span>Open LobbyTeam</span>
              <ArrowUpRight className="h-4 w-4 text-white/70" />
            </a>

            <a
              href="#pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-[14px] bg-white/95 hover:bg-white text-[#1D1D1F] border border-[#E5E5EA] text-sm font-medium transition-all shadow-apple-subtle hover:border-[#D1D1D6]"
            >
              <span>See pricing plans</span>
              <ArrowRight className="h-4 w-4 text-[#86868B]" />
            </a>
          </div>

          {/* Plain trust metrics */}
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#E5E5EA]/80 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-8 text-xs text-[#6E6E73]">
            <div className="flex items-center space-x-1.5">
              <Check className="h-3.5 w-3.5 text-[#10B981] shrink-0" />
              <span>Multi-channel intake (Phone, Chat, WhatsApp, QR)</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Check className="h-3.5 w-3.5 text-[#10B981] shrink-0" />
              <span>Zero token math (Interaction Units)</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Check className="h-3.5 w-3.5 text-[#10B981] shrink-0" />
              <span>Context carried to human handoff</span>
            </div>
          </div>
        </div>

        {/* Centerpiece Motion Graphic: The Magnetic Glass Switchboard */}
        <div className="w-full relative">
          <MagneticGlassSwitchboard />
        </div>

      </div>
    </section>
  );
};
