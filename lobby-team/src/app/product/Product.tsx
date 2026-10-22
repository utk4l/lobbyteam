import { useState } from 'react';
import { CONVERSATIONS, CONTACTS } from './data';
import { Wordmark } from './ui';
import { Today } from './screens/Today';
import { Inbox } from './screens/Inbox';
import { ConversationView } from './screens/Conversation';
import { ContactView } from './screens/Contact';
import { AI } from './screens/AI';

export type Screen = 'today' | 'inbox' | 'conversation' | 'contact' | 'ai';

const NAV: { key: Screen; label: string; n: string }[] = [
  { key: 'today', label: 'Today', n: '01' },
  { key: 'inbox', label: 'Inbox', n: '02' },
  { key: 'conversation', label: 'Conversation', n: '03' },
  { key: 'contact', label: 'Contact', n: '04' },
  { key: 'ai', label: 'AI', n: '05' },
];

function initialScreen(): Screen {
  const s = new URLSearchParams(window.location.search).get('s');
  return NAV.some((n) => n.key === s) ? (s as Screen) : 'today';
}

export function Product() {
  const [screen, setScreen] = useState<Screen>(initialScreen);
  const [convId, setConvId] = useState(CONVERSATIONS[0].id);
  const [contactId, setContactId] = useState(CONTACTS[0].id);

  const go = (s: Screen) => {
    setScreen(s);
    window.scrollTo(0, 0);
  };
  const openConv = (id: string) => {
    setConvId(id);
    go('conversation');
  };
  const openContact = (id: string) => {
    setContactId(id);
    go('contact');
  };

  return (
    <div className="min-h-screen bg-paper text-ink">
      {/* Top bar */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-paper/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <a
              href="/"
              className="fluid font-mono text-[11px] uppercase tracking-[0.14em] text-ink/45 hover:text-ink"
            >
              ← Site
            </a>
            <span className="h-4 w-px bg-ink/15" aria-hidden="true" />
            <Wordmark small />
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.14em] text-ink/35 sm:inline">
              Product preview
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink/40">Thursday, Aug 27</span>
        </div>
      </header>

      <div className="mx-auto flex max-w-7xl pt-16">
        {/* Rail */}
        <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-52 shrink-0 flex-col border-r border-ink/10 px-4 py-8 md:flex">
          <nav aria-label="Product" className="space-y-1">
            {NAV.map((item) => (
              <button
                key={item.key}
                onClick={() => go(item.key)}
                className={`fluid flex w-full items-center justify-between rounded-sm px-3 py-2.5 text-left text-sm ${
                  screen === item.key ? 'bg-ink text-paper' : 'text-ink/60 hover:bg-ink/[0.04] hover:text-ink'
                }`}
              >
                {item.label}
                <span className={`font-mono text-[10px] ${screen === item.key ? 'text-paper/40' : 'text-ink/25'}`}>
                  {item.n}
                </span>
              </button>
            ))}
          </nav>
          <div className="mt-auto rounded-md border border-ink/10 bg-white px-4 py-3.5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-ink font-mono text-[11px] text-paper">R</span>
              <div className="min-w-0">
                <p className="truncate text-[13px] font-medium">Owner</p>
                <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-ink/35">Demo workspace</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Mobile tabs */}
        <div className="min-w-0 flex-1">
          <nav
            aria-label="Product"
            className="sticky top-16 z-40 flex gap-1 overflow-x-auto border-b border-ink/10 bg-paper/95 px-4 py-2 backdrop-blur-md md:hidden"
          >
            {NAV.map((item) => (
              <button
                key={item.key}
                onClick={() => go(item.key)}
                className={`shrink-0 rounded-sm px-3 py-1.5 text-[13px] ${
                  screen === item.key ? 'bg-ink text-paper' : 'text-ink/55'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {screen === 'today' && (
            <Today
              onOpenConv={openConv}
              onOpenContact={openContact}
              onGoInbox={() => go('inbox')}
              onGoAI={() => go('ai')}
            />
          )}
          {screen === 'inbox' && <Inbox onOpenConv={openConv} />}
          {screen === 'conversation' && (
            <ConversationView id={convId} onBack={() => go('inbox')} onOpenContact={openContact} />
          )}
          {screen === 'contact' && (
            <ContactView id={contactId} onBack={() => go('inbox')} onOpenConv={openConv} />
          )}
          {screen === 'ai' && <AI onOpenConv={openConv} />}
        </div>
      </div>
    </div>
  );
}
