import type { ReactNode } from 'react';
import type { Outcome } from './data';

export const OUTCOME: Record<Outcome, { label: string; text: string; dot: string }> = {
  resolved: { label: 'Resolved', text: 'text-moss', dot: 'bg-moss' },
  'needs-you': { label: 'Needs you', text: 'text-warn', dot: 'bg-warn' },
  lead: { label: 'Lead', text: 'text-ink', dot: 'bg-ink' },
  active: { label: 'In progress', text: 'text-active', dot: 'bg-active' },
  blocked: { label: 'Blocked', text: 'text-blocked', dot: 'bg-blocked' },
};

export function OutcomeChip({ outcome, className = '' }: { outcome: Outcome; className?: string }) {
  const o = OUTCOME[outcome];
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-sm border border-ink/10 bg-white px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] ${o.text} ${className}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${o.dot}`} aria-hidden="true" />
      {o.label}
    </span>
  );
}

export function Eyebrow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p className={`font-mono text-[10px] uppercase tracking-[0.18em] text-ink/40 ${className}`}>{children}</p>
  );
}

export function Panel({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-md border border-ink/10 bg-white ${className}`}>{children}</div>
  );
}

/* Buttons — business decisions, quiet chrome */
export const btnPrimary =
  'fluid inline-flex items-center justify-center gap-2 rounded-sm bg-ink px-5 py-3 text-sm font-medium text-paper hover:bg-moss';
export const btnGhost =
  'fluid inline-flex items-center justify-center gap-2 rounded-sm border border-ink/25 px-5 py-3 text-sm font-medium text-ink hover:border-ink hover:bg-ink hover:text-paper';

export function Wordmark({ small = false }: { small?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span className={`flex items-center justify-center rounded-sm bg-ink ${small ? 'h-6 w-6' : 'h-7 w-7'}`}>
        <svg
          className={`text-paper ${small ? 'h-3 w-3' : 'h-3.5 w-3.5'}`}
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
      <span className={`font-semibold tracking-tight ${small ? 'text-sm' : 'text-[15px]'}`}>Converso</span>
    </span>
  );
}

/* Big display number, like the landing Stats section */
export function StatNumber({ value, suffix, tone = 'text-ink' }: { value: number; suffix?: string; tone?: string }) {
  return (
    <p className="flex items-baseline gap-1.5">
      <span className={`font-display text-6xl leading-none md:text-7xl ${tone}`}>{value}</span>
      {suffix && <span className="font-mono text-sm text-ink/45">{suffix}</span>}
    </p>
  );
}
