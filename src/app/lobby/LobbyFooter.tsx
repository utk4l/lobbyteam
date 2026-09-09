export function LobbyFooter() {
  return (
    <footer className="border-t border-ink/10">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 px-6 py-12 md:flex-row md:items-end">
        <div className="max-w-sm">
          <div className="flex items-center gap-2.5"><span className="grid h-7 w-7 place-items-center rounded-sm bg-ink text-paper">L</span><span className="text-[15px] font-semibold">LobbyTeam</span></div>
          <p className="mt-4 text-sm leading-relaxed text-ink/50">Make sure every customer reaches an answer, a completed request, or the right human next step.</p>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-12 gap-y-3">
          <a href="/who-is-this-for" className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/50 hover:text-ink">Who it is for</a>
          <a href="/integrations" className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/50 hover:text-ink">Integrations</a>
          <a href="/blog" className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/50 hover:text-ink">Blog</a>
          <a href="/about" className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/50 hover:text-ink">About</a>
          <a href="/#pricing" className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/50 hover:text-ink">Pricing</a>
          <a href="/old-landing" className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/50 hover:text-ink">Legacy site</a>
        </nav>
      </div>
      <div className="mx-auto flex max-w-6xl justify-between gap-4 border-t border-ink/10 px-6 py-5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/35"><span>© 2026 LobbyTeam</span><span>By SophiMind</span></div>
    </footer>
  );
}
