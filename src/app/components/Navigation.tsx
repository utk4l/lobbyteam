import { useEffect, useState } from 'react';

type NavLink = { id?: string; href: string; label: string };

const LINKS: NavLink[] = [
  { id: 'problem', href: '#problem', label: 'Why it works' },
  { id: 'how-it-works', href: '#how-it-works', label: 'How it works' },
  { id: 'who-its-for', href: '#who-its-for', label: 'Who it is for' },
  { href: '/integrations', label: 'Integrations' },
  { id: 'pricing', href: '#pricing', label: 'Pricing' },
];

const SECTION_IDS = LINKS.filter((l) => l.id).map((l) => l.id as string);
const CTA_HREF = '/app';

function isIntegrationsPath() {
  return window.location.pathname.replace(/\/+$/, '').endsWith('/integrations');
}

function Wordmark() {
  return (
    <a href="#top" className="flex items-center gap-2.5 rounded-sm px-0.5 py-0.5" aria-label="Converso home">
      <span className="flex h-8 w-8 items-center justify-center rounded-md bg-ink">
        <svg
          className="h-4 w-4 text-paper"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 2.8 3.4 4.4c-.6.6-.8 1.4-.5 2.2.6 1.9 1.8 3.7 3.5 4.9 1.2 1 2.7 1.6 4.2 1.7.7 0 1.4-.2 1.9-.7l1-1M6.5 10.2c.4-.4.5-1 .3-1.5l-.5-1c.9.2 1.9 0 2.6-.6.7-.6 1-1.5.8-2.4l1 .5c.5.2 1.1.1 1.5-.3l1.6-1.6" />
        </svg>
      </span>
      <span className="text-[17px] font-semibold tracking-tight">Converso</span>
    </a>
  );
}

function NavItem({ link, active, onClick }: { link: NavLink; active: boolean; onClick?: () => void }) {
  return (
    <a
      href={link.href}
      onClick={onClick}
      aria-current={active ? 'page' : undefined}
      className={`group relative py-1.5 text-[14px] transition-colors duration-200 ${
        active ? 'font-semibold text-ink' : 'font-medium text-ink/55 hover:text-ink'
      }`}
    >
      {link.label}
      <span
        aria-hidden="true"
        className={`absolute inset-x-0 -bottom-px h-[2px] rounded-full bg-moss transition-transform duration-300 ease-[var(--ease-fluid)] ${
          active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
        }`}
      />
    </a>
  );
}

export function Navigation({ remote = false }: { remote?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(remote ? null : null);
  const onIntegrations = remote || isIntegrationsPath();

  const a = (href: string) => (remote && href.startsWith('#') ? `/${href}` : href);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      if (isIntegrationsPath()) {
        setActive('integrations');
        return;
      }
      const pos = window.scrollY + 120;
      let current: string | null = null;
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top + window.scrollY <= pos) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const isActive = (l: NavLink) => (l.href === '/integrations' ? onIntegrations : active === l.id);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-shadow duration-300 ${
        scrolled ? 'border-ink/10 bg-paper/90 shadow-[0_1px_24px_rgba(0,0,0,0.06)] backdrop-blur-md' : 'border-ink/10 bg-paper/85 backdrop-blur-md'
      }`}
    >
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 md:px-6">
        <Wordmark />

        <div className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <NavItem key={l.href} link={{ ...l, href: a(l.href) }} active={isActive(l)} />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={a(CTA_HREF)}
            className="fluid group hidden items-center gap-1.5 rounded-md bg-ink px-4 py-2.5 text-sm font-semibold text-paper transition-colors duration-200 hover:bg-moss sm:inline-flex"
          >
            Try it free
            <svg
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="relative flex h-10 w-10 items-center justify-center rounded-md border border-ink/15 lg:hidden"
          >
            <span
              className={`absolute h-[1.5px] w-4 rounded-full bg-ink transition-all duration-300 ease-[var(--ease-fluid)] ${
                open ? 'rotate-45' : '-translate-y-[3.5px]'
              }`}
            />
            <span
              className={`absolute h-[1.5px] w-4 rounded-full bg-ink transition-all duration-300 ease-[var(--ease-fluid)] ${
                open ? '-rotate-45' : 'translate-y-[3.5px]'
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile sheet */}
      <div
        className={`fixed inset-0 top-16 z-40 flex flex-col bg-paper/97 backdrop-blur-md transition-opacity duration-300 lg:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="flex flex-col px-6 pt-8">
          {LINKS.map((l, i) => (
            <a
              key={l.href}
              href={a(l.href)}
              onClick={() => setOpen(false)}
              aria-current={isActive(l) ? 'page' : undefined}
              className={`flex items-center justify-between border-b border-ink/10 py-5 font-display text-3xl tracking-tight transition-all duration-300 ease-[var(--ease-fluid)] ${
                open ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              } ${isActive(l) ? 'text-moss' : 'text-ink'}`}
              style={{ transitionDelay: open ? `${40 + i * 40}ms` : '0ms' }}
            >
              {l.label}
              <span className="font-mono text-xs text-ink/30" aria-hidden="true">
                0{i + 1}
              </span>
            </a>
          ))}
          <a
            href={a(CTA_HREF)}
            onClick={() => setOpen(false)}
            className={`fluid mt-8 inline-flex justify-center gap-2 rounded-md bg-ink px-4 py-4 text-base font-semibold text-paper transition-all duration-300 ease-[var(--ease-fluid)] ${
              open ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
            style={{ transitionDelay: '240ms' }}
          >
            Try it free
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </header>
  );
}
