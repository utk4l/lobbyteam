import { useEffect, useState } from 'react';

const LINKS = [
  { href: '/who-is-this-for', label: 'Who it is for' },
  { href: '/#how-it-works', label: 'How it works' },
  { href: '/integrations', label: 'Integrations' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/#pricing', label: 'Pricing' },
];

function Mark() {
  return (
    <span className="grid h-8 w-8 place-items-center rounded-md bg-ink text-paper" aria-hidden="true">
      <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M4 5.5h12v7H9l-3.5 3v-3H4z" />
        <path d="M7 8.5h6M7 10.8h4" />
      </svg>
    </span>
  );
}

export function LobbyNavigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-shadow duration-300 ${scrolled ? 'border-ink/10 bg-paper/90 shadow-[0_1px_24px_rgba(0,0,0,0.06)] backdrop-blur-md' : 'border-ink/10 bg-paper/85 backdrop-blur-md'}`}>
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 md:px-6">
        <a href="/" className="flex items-center gap-2.5 rounded-sm px-0.5 py-0.5" aria-label="LobbyTeam home">
          <Mark />
          <span className="text-[17px] font-semibold tracking-tight">LobbyTeam</span>
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {LINKS.map((link) => <a key={link.href} href={link.href} className="text-[14px] font-medium text-ink/55 transition-colors hover:text-ink">{link.label}</a>)}
        </div>
        <div className="flex items-center gap-3">
          <a href="/#pricing" className="fluid hidden rounded-md bg-ink px-4 py-2.5 text-sm font-semibold text-paper hover:bg-moss sm:inline-flex">See the plans <span className="ml-1.5" aria-hidden="true">→</span></a>
          <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'} className="relative flex h-10 w-10 items-center justify-center rounded-md border border-ink/15 lg:hidden">
            <span className={`absolute h-[1.5px] w-4 rounded-full bg-ink transition-transform ${open ? 'rotate-45' : '-translate-y-[3.5px]'}`} />
            <span className={`absolute h-[1.5px] w-4 rounded-full bg-ink transition-transform ${open ? '-rotate-45' : 'translate-y-[3.5px]'}`} />
          </button>
        </div>
      </nav>
      <div className={`fixed inset-0 top-16 z-40 flex flex-col bg-paper/97 px-6 pt-8 backdrop-blur-md transition-opacity lg:hidden ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}`}>
        {LINKS.map((link, index) => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="flex items-center justify-between border-b border-ink/10 py-5 font-display text-3xl tracking-tight"><span>{link.label}</span><span className="font-mono text-xs text-ink/30">0{index + 1}</span></a>)}
        <a href="/app" onClick={() => setOpen(false)} className="mt-8 inline-flex justify-center rounded-md bg-ink px-5 py-3.5 text-sm font-semibold text-paper">Open LobbyTeam <span className="ml-2">→</span></a>
      </div>
    </header>
  );
}
