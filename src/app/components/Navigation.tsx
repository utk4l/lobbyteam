import { useEffect, useState } from 'react';

const LINKS = [
  { href: '#problem', label: 'Why it works' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#who-its-for', label: 'Who it is for' },
  { href: '/app', label: 'See it work' },
  { href: '#pricing', label: 'Pricing' },
];

function Wordmark() {
  return (
    <a href="#top" className="fluid flex items-center gap-2.5 rounded-sm px-1 py-1" aria-label="Converso home">
      <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-ink">
        <svg className="h-3.5 w-3.5 text-paper" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
          <path d="M2.5 3.5h11v7H7l-3.5 3v-3h-1v-7z" />
          <path d="M5.5 7h5M5.5 9h3" />
        </svg>
      </span>
      <span className="text-[15px] font-semibold tracking-tight">Converso</span>
    </a>
  );
}

export function Navigation() {
  const [open, setOpen] = useState(false);

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

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-paper/85 backdrop-blur-md">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
      >
        <Wordmark />

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="fluid font-mono text-[11px] uppercase tracking-[0.14em] text-ink/55 hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#pricing"
            className="fluid hidden rounded-sm bg-ink px-4 py-2 text-sm font-medium text-paper hover:bg-moss sm:inline-flex"
          >
            Try it free
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="fluid relative h-9 w-9 rounded-sm md:hidden"
          >
            <span
              className={`absolute left-1/2 top-1/2 h-0.5 w-4 -translate-x-1/2 -translate-y-1/2 bg-ink transition-transform duration-300 ease-[var(--ease-fluid)] ${open ? 'rotate-45' : ''}`}
            />
            <span
              className={`absolute left-1/2 top-1/2 h-0.5 w-4 -translate-x-1/2 -translate-y-1/2 bg-ink transition-transform duration-300 ease-[var(--ease-fluid)] ${open ? '-rotate-45' : ''}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile sheet */}
      <div
        className={`fixed inset-0 top-16 z-40 bg-paper/97 backdrop-blur-md transition-opacity duration-300 md:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="flex h-full flex-col px-6 pt-10">
          {LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`flex items-center justify-between border-b border-ink/10 py-5 font-display text-3xl transition-all duration-300 ease-[var(--ease-fluid)] ${
                open ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{ transitionDelay: open ? `${40 + i * 40}ms` : '0ms' }}
            >
              {l.label}
              <span className="font-mono text-xs text-ink/30" aria-hidden="true">
                0{i + 1}
              </span>
            </a>
          ))}
          <a
            href="#pricing"
            onClick={() => setOpen(false)}
            className={`fluid mt-8 inline-flex justify-center rounded-sm bg-ink px-4 py-4 text-base font-medium text-paper transition-all duration-300 ease-[var(--ease-fluid)] ${
              open ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
            style={{ transitionDelay: '240ms' }}
          >
            Try it free
          </a>
        </div>
      </div>
    </header>
  );
}
