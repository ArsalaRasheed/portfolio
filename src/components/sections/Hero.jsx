import { motion, useReducedMotion } from 'framer-motion';
import { site } from '../../data/site.js';
import Button from '../ui/Button.jsx';
import CountUp from '../ui/CountUp.jsx';
import Reveal from '../ui/Reveal.jsx';
import ProjectArt from '../projects/ProjectArt.jsx';
import { projects } from '../../data/content.js';

export default function Hero() {
  const reduce = useReducedMotion();
  const { hero } = site;
  const flagship = projects.find((p) => p.slug === 'classpilot') || projects[0];

  const fade = (delay) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40">
      {/* paper grain texture */}
      <div className="paper-grain pointer-events-none absolute inset-0" aria-hidden="true" />
      {/* editorial top rule */}
      <div className="container-x relative">
        <motion.div {...fade(0)} className="flex items-center justify-between border-b border-border pb-4">
          <span className="label text-muted">UI/UX Designer &amp; Web Developer</span>
          <span className="label hidden text-muted sm:inline">Portfolio — {new Date().getFullYear()}</span>
        </motion.div>

        <div className="grid items-end gap-10 pt-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pt-14">
          {/* ---------- Headline ---------- */}
          <div>
            <motion.p
              {...fade(0.05)}
              className="mb-8 inline-flex items-center gap-2.5 border border-border bg-surface px-3.5 py-1.5 text-[13px] font-semibold"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-emerald-500" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {hero.badge}
            </motion.p>

            <motion.h1
              {...fade(0.1)}
              className="font-display text-[2.6rem] font-semibold leading-[1.06] tracking-[-0.02em] sm:text-6xl md:text-[4.4rem]"
            >
              {hero.headlineBefore}
              <em className="font-display font-normal italic text-accent-700 dark:text-accent-300">{hero.headlineAccent}</em>
              {hero.headlineAfter}
            </motion.h1>

            <motion.p {...fade(0.18)} className="mt-7 max-w-xl text-[17px] leading-relaxed text-muted">
              {hero.subhead}
            </motion.p>

            <motion.div {...fade(0.26)} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button to={hero.ctaPrimary.to} size="lg" iconAfter="arrow-right">
                {hero.ctaPrimary.label}
              </Button>
              <Button to={hero.ctaSecondary.to} size="lg" variant="secondary">
                {hero.ctaSecondary.label}
              </Button>
            </motion.div>
          </div>

          {/* ---------- Selected work preview ---------- */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            <div className="mb-3 flex items-baseline justify-between">
              <span className="label text-muted">Selected work</span>
              <span className="label text-muted">{flagship.category}</span>
            </div>
            <div className="aspect-[16/11] w-full">
              <ProjectArt art={flagship.art} slug={flagship.slug} bare mobile={false} rounded="rounded-lg" />
            </div>
            <p className="mt-3 text-sm text-muted">
              <span className="font-semibold text-ink">{flagship.title}</span> — {flagship.summary.split('.')[0]}.
            </p>
          </motion.div>
        </div>

        {/* ---------- Stats: editorial strip ---------- */}
        <Reveal className="mt-16 md:mt-24">
          <dl className="grid grid-cols-2 border-y border-border md:grid-cols-4">
            {hero.stats.map((s, i) => (
              <div
                key={s.label}
                className={`px-1 py-8 md:px-6 ${i > 0 ? 'md:border-l md:border-border' : ''} ${i % 2 === 1 ? 'border-l border-border pl-5 md:pl-6' : ''} ${i >= 2 ? 'border-t border-border md:border-t-0' : ''}`}
              >
                <dd className="font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
                  <CountUp to={s.value} suffix={s.suffix} />
                </dd>
                <dt className="mt-2 text-sm text-muted">{s.label}</dt>
              </div>
            ))}
          </dl>
          {/* TODO in site.js: replace the stat numbers above with your real figures */}
        </Reveal>
      </div>
    </section>
  );
}
