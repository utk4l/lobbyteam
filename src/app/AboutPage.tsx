import { useEffect } from 'react';

const PRESENTATION_URL = 'https://show.iqwyk.com/sophimind/lobbyteam-by-sophimind';

export function AboutPage() {
  useEffect(() => { window.location.replace(PRESENTATION_URL); }, []);
  return <main className="grid min-h-screen place-items-center bg-paper px-6 text-ink"><div className="max-w-lg text-center"><p className="font-mono text-[10px] uppercase tracking-[0.15em] text-moss">About LobbyTeam</p><h1 className="mt-5 font-display text-5xl">Meet LobbyTeam by SophiMind.</h1><p className="mt-5 text-ink/60">Opening the LobbyTeam presentation...</p><a href={PRESENTATION_URL} className="mt-8 inline-flex rounded-sm bg-ink px-6 py-3.5 text-sm font-medium text-paper">Open presentation →</a></div></main>;
}
