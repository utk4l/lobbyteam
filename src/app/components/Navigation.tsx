import { useEffect, useState } from 'react';

const LINKS = [
  { href: '#proof', label: 'Why it works' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
];

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
    <header className="fixed top-0 inset-x-0 z-50 px-6">
      {/* Fluid island nav */}
      <nav
        aria-label="Main"
        className="mt-6 mx-auto w-max max-w-full flex items-center justify-between gap-4 rounded-full border border-zinc-200/70 bg-white/70 backdrop-blur-xl pl-2 pr-2 h-12"
      >
        <a href="#top" className="fluid flex items-center gap-2 rounded-full pl-1 pr-2 py-1 hover:bg-zinc-100/70" aria-label="Converso home">
          <span className="w-7 h-7 rounded-lg bg-zinc-950 flex items-center justify-center">
            <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              <path d="M2.5 3.5h11v7H7l-3.5 3v-3h-1v-7z" />
              <path d="M5.5 7h5M5.5 9h3" />
            </svg>
          </span>
          <span className="text-sm font-semibold text-zinc-950">Converso</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="fluid text-sm text-zinc-500 hover:text-zinc-950 px-1"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#pricing"
            className="fluid hidden sm:inline-flex bg-zinc-950 text-white text-sm font-semibold px-3 py-2 rounded-full hover:bg-zinc-800"
          >
            Start free
          </a>
          {/* Hamburger: lines morph into an X */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="fluid md:hidden w-8 h-8 rounded-full relative hover:bg-zinc-100/70"
          >
            <span
              className={`fluid absolute left-1/2 top-1/2 w-4 h-0.5 bg-zinc-950 -translate-x-1/2 -translate-y-1/2 ${
                open ? 'rotate-45' : ''
              }`}
            />
            <span
              className={`fluid absolute left-1/2 top-1/2 w-4 h-0.5 bg-zinc-950 -translate-x-1/2 -translate-y-1/2 ${
                open ? '-rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Modal expansion: heavy glass overlay with staggered mask reveal */}
      <div
        className={`fixed inset-0 z-40 md:hidden backdrop-blur-3xl bg-white/80 transition-opacity duration-700 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-6 pt-12 flex flex-col">
          {LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`fluid text-2xl font-semibold text-zinc-950 py-4 border-b border-zinc-200/70 ${
                open ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: open ? `${100 + i * 75}ms` : '0ms' }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={() => setOpen(false)}
            className={`fluid mt-8 inline-flex w-max bg-zinc-950 text-white text-base font-semibold px-3 py-2 rounded-full ${
              open ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
            style={{ transitionDelay: open ? '400ms' : '0ms' }}
          >
            Start free
          </a>
        </div>
      </div>
    </header>
  );
}
