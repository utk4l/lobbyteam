import { useEffect, useRef } from 'react';

const WORDS =
  'Your customers get answered at 2 am. By morning, you have a written summary of every call.'
    .split(' ')
    .map((w, i) => ({ text: w, key: i }));

export function Tagline() {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const words = Array.from(root.querySelectorAll<HTMLSpanElement>('.tl-word'));
    const observers = words.map((word) => {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              word.classList.add('on');
              io.disconnect();
            }
          });
        },
        { rootMargin: '0px 0px -30% 0px' }
      );
      io.observe(word);
      return io;
    });
    return () => observers.forEach((io) => io.disconnect());
  }, []);

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-10 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/40">
          The point
        </p>
        <p ref={ref} className="max-w-4xl text-balance font-display text-4xl leading-[1.12] tracking-[-0.01em] sm:text-5xl md:text-6xl">
          {WORDS.map(({ text, key }) => (
            <span key={key} className="tl-word">
              {text}{' '}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
