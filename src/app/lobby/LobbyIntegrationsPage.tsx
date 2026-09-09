import { Reveal } from '../components/Reveal';
import { LobbyFooter } from './LobbyFooter';
import { LobbyNavigation } from './LobbyNavigation';

const GROUPS = [
  {
    label: 'Where requests arrive',
    title: 'Meet customers where they already reach you.',
    body: 'Phone, website chat, email, SMS, WhatsApp, and configured kiosk, tablet, or QR-code experiences can become one front door for the business.',
    items: ['Phone and voicemail recovery', 'Website chat', 'Email and SMS', 'WhatsApp', 'Kiosk, tablet, or QR code'],
  },
  {
    label: 'Where work gets completed',
    title: 'Move the request into the work already happening.',
    body: 'Connect the systems your team uses for calendars, service work, customer records, accounting, and workflow automation. LobbyTeam should make the work easier to own, not create another inbox to check.',
    items: ['Calendars and appointments', 'Service-management tools', 'CRM and customer records', 'Accounting systems', 'Webhooks and workflow tools'],
  },
  {
    label: 'Where humans take over',
    title: 'Make the handoff useful, not just urgent.',
    body: 'When a person needs to step in, LobbyTeam routes the request according to your rules and includes the context, urgency, and requested next step.',
    items: ['Team inboxes', 'Phone transfer or callback', 'SMS and email escalation', 'Time-zone and shift routing', 'Human-owned follow-up'],
  },
];

export function LobbyIntegrationsPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <LobbyNavigation />
      <main id="main" className="pt-16">
        <section className="relative overflow-hidden pb-20 pt-24 md:pb-28 md:pt-36"><div className="dot-grid pointer-events-none absolute inset-0" aria-hidden="true" /><div className="relative mx-auto max-w-6xl px-6"><Reveal><p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/50">Workflow fit</p><h1 className="mt-7 max-w-4xl font-display text-[clamp(3rem,7vw,6.2rem)] leading-[.91] tracking-[-0.045em]">Keep the front door connected to the <em>work behind it.</em></h1><p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/65">LobbyTeam fits around the tools and people your business already depends on. The goal is not another system of record. The goal is a customer request that reaches the right place with less friction.</p></Reveal></div></section>
        <section className="border-t border-ink/10 py-20 md:py-28"><div className="mx-auto max-w-6xl px-6"><div className="space-y-20">{GROUPS.map((group, index) => <Reveal key={group.label} delay={index * 50}><article className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:gap-20"><div><p className="font-mono text-[10px] uppercase tracking-[0.15em] text-moss">0{index + 1} · {group.label}</p><h2 className="mt-5 max-w-md font-display text-4xl leading-[1.02] md:text-5xl">{group.title}</h2></div><div><p className="max-w-xl text-[15px] leading-relaxed text-ink/60">{group.body}</p><div className="mt-8 grid gap-3 sm:grid-cols-2">{group.items.map((item) => <div key={item} className="rounded-sm border border-ink/10 bg-white px-4 py-4 text-sm text-ink/70"><span className="mr-2 text-moss">✓</span>{item}</div>)}</div></div></article></Reveal>)}</div></div></section>
        <section className="border-t border-ink/10 bg-ink py-20 text-paper md:py-28"><div className="mx-auto max-w-6xl px-6"><Reveal><p className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper/45">A useful boundary</p><h2 className="mt-6 max-w-3xl font-display text-4xl leading-[1.02] md:text-6xl">We will tell you what is connected, what is configured, and what still needs a human.</h2><p className="mt-7 max-w-xl text-[15px] leading-relaxed text-paper/60">Availability depends on the channel, integration, and workflow you configure. LobbyTeam never needs to pretend a connection exists when it does not.</p><a href="/#pricing" className="fluid mt-9 inline-flex items-center gap-2 rounded-sm bg-paper px-6 py-3.5 text-[15px] font-medium text-ink hover:bg-moss hover:text-paper">See the plans <span aria-hidden="true">→</span></a></Reveal></div></section>
      </main>
      <LobbyFooter />
    </div>
  );
}
