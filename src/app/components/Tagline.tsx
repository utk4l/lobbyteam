import { useEffect, useRef } from 'react';

const WORDS =
  'Your customers get answered at 2 am. You wake up to a summary, not voicemail.'
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
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <p
          ref={ref}
          className="text-4xl md:text-5xl font-semibold text-zinc-950 max-w-[680px]"
        >
          {WORDS.map(({ text, key }) => (
            <span key={key} className="tl-word whitespace-pre">
              {text}
              {' '}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
