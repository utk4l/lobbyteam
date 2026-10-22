import { Reveal } from '../components/Reveal';
import { LobbyFooter } from './LobbyFooter';
import { LobbyNavigation } from './LobbyNavigation';

const CONTEXTS = [
  { number: '01', title: 'Office front desk', signal: 'Calls, visitors, appointments', problem: 'The receptionist is answering phones, taking messages, rescheduling appointments, and trying to keep the office moving at the same time.', outcome: 'LobbyTeam handles the first request, completes the work you define, and gives your staff the context to take over cleanly.' },
  { number: '02', title: 'Appointment-heavy teams', signal: 'Confirm, remind, reschedule', problem: 'The work is not difficult, but it is constant. A missed confirmation or reschedule becomes an empty slot and another phone call.', outcome: 'LobbyTeam turns appointment traffic into confirmed actions and owned follow-up instead of phone tag.' },
  { number: '03', title: 'Online businesses', signal: 'Chat, email, SMS, WhatsApp', problem: 'Visitors arrive with questions across different channels, and the answer depends on who happens to see the message first.', outcome: 'LobbyTeam gives each inquiry a relevant answer or a clear human next step while keeping the conversation attached.' },
  { number: '04', title: 'Physical office lobbies', signal: 'Kiosk, tablet, QR code', problem: 'A visitor arrives when the desk is busy, the right person is elsewhere, or the question belongs to another team.', outcome: 'LobbyTeam can orient the visitor, start a voice interaction, or connect them to a human. It is not a security guard or emergency response system.' },
  { number: '05', title: 'After-hours and multi-location teams', signal: 'Time zones, shifts, escalation', problem: 'The customer reaches the business outside normal hours, but the right human may be working in another location or time zone.', outcome: 'LobbyTeam routes by hours, availability, expertise, urgency, and ownership so the request reaches the right person with context.' },
];

export function WhoIsThisForPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <LobbyNavigation />
      <main id="main" className="pt-16">
        <section className="relative overflow-hidden pb-20 pt-24 md:pb-28 md:pt-36"><div className="dot-grid pointer-events-none absolute inset-0" aria-hidden="true" /><div className="relative mx-auto max-w-6xl px-6"><Reveal><p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/50">Who LobbyTeam is for</p><h1 className="mt-7 max-w-4xl font-display text-[clamp(3rem,7vw,6.2rem)] leading-[.91] tracking-[-0.045em]">Which part of your front door needs to work <em>better?</em></h1><p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/65">LobbyTeam is for businesses where a missed call, unanswered message, or unclear handoff costs time, trust, or the next opportunity.</p></Reveal></div></section>
        <section className="border-t border-ink/10 py-20 md:py-28"><div className="mx-auto max-w-6xl px-6"><div className="space-y-4">{CONTEXTS.map((context, index) => <Reveal key={context.number} delay={index * 35}><article className="grid gap-6 rounded-md border border-ink/10 bg-white p-7 md:grid-cols-[70px_1fr_1fr] md:gap-10 md:p-10"><div className="font-mono text-2xl text-moss">{context.number}</div><div><p className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink/40">{context.signal}</p><h2 className="mt-4 font-display text-3xl md:text-4xl">{context.title}</h2><p className="mt-5 text-[15px] leading-relaxed text-ink/60">{context.problem}</p></div><div className="border-t border-ink/10 pt-5 md:border-l md:border-t-0 md:pl-8 md:pt-0"><p className="font-mono text-[10px] uppercase tracking-[0.15em] text-moss">What changes</p><p className="mt-4 text-[15px] leading-relaxed text-ink/70">{context.outcome}</p></div></article></Reveal>)}</div></div></section>
        <section className="border-t border-ink/10 bg-ink py-20 text-paper md:py-28"><div className="mx-auto max-w-6xl px-6"><Reveal><p className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper/45">The common thread</p><h2 className="mt-6 max-w-3xl font-display text-4xl leading-[1.02] md:text-6xl">The customer should not have to know who owns the answer.</h2><p className="mt-7 max-w-xl text-[15px] leading-relaxed text-paper/60">LobbyTeam helps the business understand the request, apply its rules, and make the next step visible to the person who needs to own it.</p><a href="/#pricing" className="fluid mt-9 inline-flex items-center gap-2 rounded-sm bg-paper px-6 py-3.5 text-[15px] font-medium text-ink hover:bg-moss hover:text-paper">See the plans <span aria-hidden="true">→</span></a></Reveal></div></section>
      </main>
      <LobbyFooter />
    </div>
  );
}
