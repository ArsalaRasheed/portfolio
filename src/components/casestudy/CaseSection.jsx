import Reveal from '../ui/Reveal.jsx';

/** Numbered editorial section used across all case studies. */
export default function CaseSection({ id, n, title, intro, children, className = '' }) {
  return (
    <section id={id} className={`scroll-mt-28 border-t border-border py-12 first:border-t-0 first:pt-0 md:py-16 ${className}`}>
      <Reveal>
        <div className="flex items-baseline gap-4">
          <span className="font-display text-sm font-semibold italic text-accent-700 dark:text-accent-300">{n}</span>
          <h2 className="font-display text-[1.7rem] font-semibold tracking-[-0.015em] sm:text-[2.1rem]">{title}</h2>
        </div>
        {intro && <p className="mt-5 max-w-3xl text-[16px] leading-relaxed text-muted">{intro}</p>}
      </Reveal>
      <div className="mt-8">{children}</div>
    </section>
  );
}
