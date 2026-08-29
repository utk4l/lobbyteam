import { useEffect, useRef, useState } from 'react';

const STATS = [
  { n: 0, suffix: '', label: "missed calls. It rings once, and it's answered. Any hour, any day." },
  { n: 2, suffix: 'min', label: 'from sign-up to a number that answers your customers.' },
  { n: 30, suffix: 'sec', label: 'to read any call. Who, what they needed, what happened.' },
  { n: 14, suffix: 'days', label: 'free, full features, no card. Walk away with your data if it is not for you.' },
];

function useCountUp(target: number, active: boolean, duration = 1000) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    if (target === 0) {
      setValue(0);
      return;
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(target);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const step = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);
  return value;
}

function Stat({ n, suffix, label, active }: (typeof STATS)[number] & { active: boolean }) {
  const value = useCountUp(n, active);
  return (
    <div className="border-ink/10 px-2 py-10 sm:px-6 lg:border-l lg:first:border-l-0">
      <p className="flex items-baseline gap-1.5">
        <span className="font-display text-6xl leading-none md:text-7xl">{value}</span>
        {suffix && <span className="font-mono text-sm text-ink/45">{suffix}</span>}
      </p>
      <p className="mt-4 max-w-[26ch] text-sm leading-relaxed text-ink/55">{label}</p>
    </div>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="border-t border-ink/10">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/40">
          What this gets you
        </p>
        <div ref={ref} className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <Stat key={s.label} {...s} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
