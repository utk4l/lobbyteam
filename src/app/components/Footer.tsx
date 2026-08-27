const LINKS = [
  { href: '#top', label: 'Product' },
  { href: '#proof', label: 'Why it works' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
  { href: '#privacy', label: 'Privacy policy' },
  { href: '#terms', label: 'Terms of service' },
];

export function Footer() {
  return (
    <footer className="border-t border-ink/10">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-ink">
                <svg
                  className="h-3.5 w-3.5 text-paper"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M2.5 3.5h11v7H7l-3.5 3v-3h-1v-7z" />
                  <path d="M5.5 7h5M5.5 9h3" />
                </svg>
              </span>
              <span className="text-[15px] font-semibold tracking-tight">Converso</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink/50">
              AI support and sales for small business. Your support team is live in a minute.
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-16 gap-y-3">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="fluid font-mono text-[11px] uppercase tracking-[0.14em] text-ink/50 hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-14 flex flex-wrap justify-between gap-3 border-t border-ink/10 pt-6 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/35">
          <span>© 2026 Converso</span>
          <span>Calls may be recorded with a configurable consent notice</span>
        </div>
      </div>
    </footer>
  );
}
