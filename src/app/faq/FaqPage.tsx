import { useEffect } from 'react';
import { LobbyFooter } from '../lobby/LobbyFooter';
import { LobbyNavigation } from '../lobby/LobbyNavigation';
import { FAQ_CATEGORIES, FaqAnswer, buildFaqJsonLd } from './faqData';

const SITE_URL = 'https://lobbyteam.sophimind.com';

export function FaqPage() {
  useEffect(() => {
    document.title = 'LobbyTeam FAQs | How the digital front door works';
    const description = 'Answers about LobbyTeam, coordinated digital agents, channels, human handoffs, setup, safety, pricing, and buyer evaluation.';
    let meta = document.head.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
    meta.content = description;
    let ogTitle = document.head.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    if (!ogTitle) { ogTitle = document.createElement('meta'); ogTitle.setAttribute('property', 'og:title'); document.head.appendChild(ogTitle); }
    ogTitle.content = document.title;
    let ogDescription = document.head.querySelector<HTMLMetaElement>('meta[property="og:description"]');
    if (!ogDescription) { ogDescription = document.createElement('meta'); ogDescription.setAttribute('property', 'og:description'); document.head.appendChild(ogDescription); }
    ogDescription.content = description;
    let ogUrl = document.head.querySelector<HTMLMetaElement>('meta[property="og:url"]');
    if (!ogUrl) { ogUrl = document.createElement('meta'); ogUrl.setAttribute('property', 'og:url'); document.head.appendChild(ogUrl); }
    ogUrl.content = `${SITE_URL}/faqs`;
    let twitterCard = document.head.querySelector<HTMLMetaElement>('meta[name="twitter:card"]');
    if (!twitterCard) { twitterCard = document.createElement('meta'); twitterCard.name = 'twitter:card'; document.head.appendChild(twitterCard); }
    twitterCard.content = 'summary_large_image';
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = `${SITE_URL}/faqs`;
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.dataset.lobbyteamFaq = 'true';
    script.textContent = JSON.stringify(buildFaqJsonLd());
    document.head.appendChild(script);
    return () => { document.head.querySelector('script[data-lobbyteam-faq]')?.remove(); };
  }, []);

  return <div className="min-h-screen bg-paper text-ink"><LobbyNavigation /><main id="main" className="pt-16"><section className="relative overflow-hidden border-b border-ink/10 pb-20 pt-24 md:pb-28 md:pt-36"><div className="dot-grid pointer-events-none absolute inset-0" aria-hidden="true" /><div className="relative mx-auto max-w-6xl px-6"><p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/50">Buyer guide</p><h1 className="mt-7 max-w-4xl font-display text-[clamp(3rem,7vw,6.2rem)] leading-[.91] tracking-[-0.045em]">LobbyTeam <em>FAQs.</em></h1><p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/65">Clear answers about the coordinated digital front-door team, how it works alongside your people, and what to evaluate before you put it in front of customers.</p></div></section><section className="py-16 md:py-24"><div className="mx-auto max-w-5xl px-6"><div className="space-y-16">{FAQ_CATEGORIES.map((category, index) => <section key={category.slug} id={category.slug} aria-labelledby={`${category.slug}-heading`}><div className="flex items-baseline gap-4 border-b border-ink/15 pb-4"><span className="font-mono text-xs text-moss">0{index + 1}</span><h2 id={`${category.slug}-heading`} className="font-display text-4xl leading-none md:text-5xl">{category.title}</h2></div><div className="mt-5 divide-y divide-ink/10">{category.items.map((item) => <details key={item.question} className="group py-5"><summary className="flex cursor-pointer list-none items-start justify-between gap-8 font-display text-2xl leading-tight marker:hidden"><span>{item.question}</span><span className="font-mono text-lg text-moss transition-transform group-open:rotate-45" aria-hidden="true">+</span></summary><FaqAnswer answer={item.answer} /></details>)}</div></section>)}</div></div></section><section className="border-t border-ink/10 bg-ink py-20 text-paper md:py-28"><div className="mx-auto max-w-6xl px-6"><h2 className="max-w-3xl font-display text-4xl leading-[1.02] md:text-6xl">Still deciding where LobbyTeam fits?</h2><p className="mt-6 max-w-xl text-[15px] leading-relaxed text-paper/65">Start with the business context that sounds most like yours, then define the one front-door workflow worth improving first.</p><a href="/who-is-this-for" className="fluid mt-9 inline-flex rounded-sm bg-paper px-6 py-3.5 text-[15px] font-medium text-ink hover:bg-moss hover:text-paper">Find your use case →</a></div></section></main><LobbyFooter /></div>;
}
