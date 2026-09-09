import { Reveal } from '../components/Reveal';
import { LobbyFooter } from './LobbyFooter';
import { LobbyNavigation } from './LobbyNavigation';

const OUTCOMES = [
  ['01', 'Answer', 'Give people a useful answer instead of a voicemail, form receipt, or dead end.'],
  ['02', 'Complete', 'Handle the requests you define: appointments, callbacks, reminders, messages, and more.'],
  ['03', 'Route', 'Send the exceptions to the right human with the context they need to pick up smoothly.'],
  ['04', 'Follow through', 'Keep ownership visible so the customer does not have to start over.'],
];

const PERSONAS = [
  ['Office front desk', 'Calls, visitors, appointments', 'Keep the front desk responsive while your people stay focused on the work.'],
  ['Appointment-heavy teams', 'Confirm, remind, reschedule', 'Turn appointment traffic into completed bookings instead of repeated phone tag.'],
  ['Online businesses', 'Chat, email, SMS, WhatsApp', 'Give every online inquiry a clear answer or a clear next step.'],
  ['After-hours teams', 'Time zones, shifts, escalation', 'Route the request to the right available human, even when the usual office is closed.'],
];

function Arrow() { return <span aria-hidden="true">→</span>; }

export function LandingPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <LobbyNavigation />
      <main id="main">
        <section id="top" className="relative overflow-hidden pb-24 pt-36 md:pb-32 md:pt-48">
          <div className="dot-grid pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <Reveal>
              <p className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/50"><span className="live-dot h-2 w-2 rounded-full bg-live" />The business front door</p>
              <h1 className="mt-7 max-w-3xl font-display text-[clamp(3.2rem,7vw,6.6rem)] leading-[.91] tracking-[-0.045em]">Make sure every customer reaches the <em>right next step.</em></h1>
              <p className="mt-8 max-w-[49ch] text-lg leading-relaxed text-ink/65">LobbyTeam answers calls and messages, handles the requests you define, and routes the rest to the right human with the context they need.</p>
              <div className="mt-10 flex flex-wrap items-center gap-4"><a href="/who-is-this-for" className="fluid inline-flex items-center gap-2 rounded-sm bg-ink px-6 py-3.5 text-[15px] font-medium text-paper hover:bg-moss">Find your use case <Arrow /></a><a href="#how-it-works" className="fluid inline-flex items-center gap-2 rounded-sm border border-ink/20 px-6 py-3.5 text-[15px] font-medium hover:border-ink">See how it works <Arrow /></a></div>
              <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.13em] text-ink/40">Works alongside your people. Never asks customers to start over.</p>
            </Reveal>
            <Reveal delay={100}>
              <div className="relative rounded-md border border-ink/10 bg-white p-5 shadow-[0_30px_80px_-50px_rgba(23,21,18,.55)] md:p-7">
                <div className="flex items-center justify-between border-b border-ink/10 pb-4"><span className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink/45">Incoming request</span><span className="rounded-full bg-moss/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.1em] text-moss">In progress</span></div>
                <p className="mt-6 font-display text-2xl leading-tight md:text-3xl">“I need to move my appointment, but I’m not sure who handles it.”</p>
                <div className="mt-7 space-y-3">
                  {['Understands the request', 'Checks the approved next step', 'Routes with the full context'].map((step, index) => <div key={step} className="flex items-center gap-3 rounded-sm border border-ink/10 bg-paper/65 px-3.5 py-3"><span className="grid h-6 w-6 place-items-center rounded-full bg-ink font-mono text-[10px] text-paper">0{index + 1}</span><span className="text-sm text-ink/70">{step}</span><span className="ml-auto text-moss">✓</span></div>)}
                </div>
                <div className="mt-6 border-t border-ink/10 pt-5"><p className="font-mono text-[9px] uppercase tracking-[0.15em] text-ink/40">Next step</p><p className="mt-2 text-sm font-medium">Connect to the scheduling team with the request attached.</p></div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="problem" className="border-t border-ink/10 bg-ink py-24 text-paper md:py-32"><div className="mx-auto max-w-6xl px-6"><Reveal><p className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper/45">The front-door problem</p><h2 className="mt-6 max-w-3xl font-display text-4xl leading-[1.02] tracking-[-0.02em] md:text-6xl">Customers do not care which channel they used. They care whether they got somewhere.</h2></Reveal><div className="mt-16 grid gap-px overflow-hidden rounded-md bg-paper/15 md:grid-cols-2">{['Calls become voicemails.', 'Messages wait for “later.”', 'Staff repeat the same answers.', 'The handoff loses the context.'].map((item, index) => <div key={item} className="bg-ink p-7 md:p-9"><span className="font-mono text-xs text-moss">0{index + 1}</span><p className="mt-8 max-w-xs font-display text-2xl leading-tight text-paper/90">{item}</p></div>)}</div></div></section>

        <section id="outcomes" className="border-t border-ink/10 py-24 md:py-32"><div className="mx-auto max-w-6xl px-6"><Reveal><p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/40">What changes</p><h2 className="mt-6 max-w-2xl font-display text-4xl leading-[1.02] tracking-[-0.02em] md:text-6xl">A front door that does not stop at hello.</h2></Reveal><div className="mt-14 grid gap-4 md:grid-cols-2">{OUTCOMES.map(([number, title, body]) => <Reveal key={number}><article className="rounded-md border border-ink/10 bg-white p-7 transition-colors hover:border-ink/30 md:p-9"><span className="font-mono text-2xl text-moss">{number}</span><h3 className="mt-12 font-display text-3xl">{title}</h3><p className="mt-4 max-w-sm text-[15px] leading-relaxed text-ink/60">{body}</p></article></Reveal>)}</div></div></section>

        <section className="border-t border-ink/10 bg-white py-24 md:py-32"><div className="mx-auto max-w-6xl px-6"><Reveal><p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/40">Built around your reality</p><h2 className="mt-6 max-w-2xl font-display text-4xl leading-[1.02] tracking-[-0.02em] md:text-6xl">Different businesses. Same need: clear ownership.</h2></Reveal><div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2">{PERSONAS.map(([title, situation, body], index) => <Reveal key={title} delay={index * 40}><a href="/who-is-this-for" className="group block border-t border-ink/15 pt-5"><div className="flex items-start justify-between gap-6"><div><p className="font-mono text-[10px] uppercase tracking-[0.15em] text-moss">{situation}</p><h3 className="mt-4 font-display text-3xl group-hover:text-moss">{title}</h3></div><span className="font-mono text-sm text-ink/30">0{index + 1}</span></div><p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink/60">{body}</p><span className="mt-6 inline-flex items-center gap-2 text-sm font-medium">Explore this use case <Arrow /></span></a></Reveal>)}</div></div></section>

        <section id="how-it-works" className="border-t border-ink/10 py-24 md:py-32"><div className="mx-auto max-w-6xl px-6"><div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr] lg:gap-24"><Reveal><p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/40">How it works</p><h2 className="mt-6 font-display text-4xl leading-[1.02] tracking-[-0.02em] md:text-6xl">The conversation moves forward. Your people stay in control.</h2></Reveal><Reveal delay={80}><div className="divide-y divide-ink/10 border-t border-ink/10">{[['01', 'Understand', 'LobbyTeam reads what the person needs, not just which channel they used.'], ['02', 'Act', 'It follows the operating rules you define for answers, appointments, resources, and requests.'], ['03', 'Escalate', 'When a human matters, it routes to the right person with the conversation attached.'], ['04', 'Remember', 'The next person sees what happened, what matters, and what should happen next.']].map(([number, title, body]) => <div key={number} className="grid gap-4 py-6 sm:grid-cols-[48px_150px_1fr] sm:items-start"><span className="font-mono text-sm text-moss">{number}</span><h3 className="font-medium">{title}</h3><p className="text-[15px] leading-relaxed text-ink/55">{body}</p></div>)}</div></Reveal></div></div></section>

        <section id="pricing" className="border-t border-ink/10 bg-paper py-24 md:py-32"><div className="mx-auto max-w-6xl px-6"><Reveal><p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/40">Simple, visible usage</p><h2 className="mt-6 max-w-2xl font-display text-4xl leading-[1.02] tracking-[-0.02em] md:text-6xl">Choose the amount of front-door coverage you need.</h2><p className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink/60">An Interaction Unit is a plain-language measure across the channels your customers use. No token math. No surprise AI-action meter.</p></Reveal><div className="mt-14 grid gap-4 md:grid-cols-3">{[['Starter', '$49', '20', '$0.99', 'Start with one focused workflow.'], ['Essential', '$99', '75', '$0.79', 'Predictable coverage for a small team.'], ['Full Front Door', '$299', '500', '$0.59', 'Use LobbyTeam across channels and workflows.']].map(([name, price, units, overage, fit], index) => <Reveal key={name} delay={index * 50}><article className={`rounded-md p-7 md:p-8 ${index === 1 ? 'bg-ink text-paper' : 'border border-ink/10 bg-white'}`}><p className={`font-mono text-[10px] uppercase tracking-[0.15em] ${index === 1 ? 'text-paper/50' : 'text-ink/40'}`}>{name}</p><p className="mt-7 font-display text-5xl">{price}<span className={`font-mono text-xs ${index === 1 ? 'text-paper/45' : 'text-ink/40'}`}> / month</span></p><p className={`mt-5 text-sm ${index === 1 ? 'text-paper/70' : 'text-ink/60'}`}>{fit}</p><div className={`mt-8 border-t pt-5 font-mono text-[11px] uppercase tracking-[0.1em] ${index === 1 ? 'border-paper/15 text-paper/60' : 'border-ink/10 text-ink/50'}`}><p>{units} included units</p><p className="mt-2">{overage} per extra unit</p></div></article></Reveal>)}</div><p className="mt-7 max-w-2xl font-mono text-[10px] uppercase tracking-[0.12em] text-ink/40">1 phone minute · 1 short email · 1 SMS · 1 WhatsApp message · 1 website chat turn</p></div></section>

        <section id="final-cta" className="border-t border-ink/10 py-24 md:py-32"><div className="mx-auto max-w-6xl px-6"><Reveal><div className="relative overflow-hidden rounded-md bg-ink px-8 py-14 text-paper md:px-14 md:py-20"><div className="dot-grid-dark pointer-events-none absolute inset-0" aria-hidden="true" /><p className="relative font-mono text-[11px] uppercase tracking-[0.18em] text-moss">The next step</p><h2 className="relative mt-6 max-w-3xl font-display text-4xl leading-[1.02] tracking-[-0.02em] md:text-6xl">Give your customers a front door that knows where to take them.</h2><p className="relative mt-6 max-w-xl text-[15px] leading-relaxed text-paper/65">Start with the one request that keeps interrupting your team. Build from there.</p><a href="/app" className="fluid relative mt-9 inline-flex items-center gap-2 rounded-sm bg-paper px-6 py-3.5 text-[15px] font-medium text-ink hover:bg-moss hover:text-paper">Open LobbyTeam <Arrow /></a></div></Reveal></div></section>
      </main>
      <LobbyFooter />
    </div>
  );
}
