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
    <footer className="bg-white border-t border-zinc-100">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-zinc-950 flex items-center justify-center">
                <svg
                  className="w-3.5 h-3.5 text-white"
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
              <span className="text-sm font-semibold text-zinc-950">Converso</span>
            </div>
            <p className="mt-3 text-sm text-zinc-400">
              AI support and sales for small business. Your support team, live in a minute.
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-16 gap-y-3 text-sm">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} className="fluid text-zinc-500 hover:text-zinc-950">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <p className="mt-16 text-xs text-zinc-400">
          © 2026 Converso. Calls may be recorded with a configurable consent notice.
        </p>
      </div>
    </footer>
  );
}
