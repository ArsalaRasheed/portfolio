import { testimonials, projects } from '../../data/content.js';
import SectionHeading from '../ui/SectionHeading.jsx';
import Reveal from '../ui/Reveal.jsx';
import Icon from '../ui/Icon.jsx';
import { Link } from 'react-router-dom';

export default function Testimonials() {
  return (
    <section id="testimonials" className="section scroll-mt-24 border-y border-border bg-surface">
      <div className="container-x">
        <SectionHeading
          number="06"
          eyebrow="Testimonials"
          title="What clients say"
          description="Real feedback from the people I have built for."
          align="center"
          className="mb-14"
        />

        {/* TODO in content.js: replace these three placeholder quotes with real client testimonials */}
        <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => {
            const project = projects.find((p) => p.slug === t.project);
            return (
              <Reveal key={i} delay={i * 0.08} className="h-full">
                <figure className="flex h-full flex-col rounded-lg border border-border bg-bg p-6 transition-all duration-400 ease-out hover:-translate-y-1 hover:shadow-lift sm:p-7">
                  <Icon name="quote" className="h-8 w-8 text-accent-300" strokeWidth={1.4} />
                  <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink">“{t.quote}”</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent-600 text-sm font-extrabold text-white">
                      {t.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')
                        .slice(0, 2)
                        .toUpperCase()}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-bold">{t.name}</p>
                      <p className="truncate text-xs text-muted">
                        {t.role}
                        {t.company ? ` · ${t.company}` : ''}
                      </p>
                    </div>
                  </figcaption>
                  {project && (
                    <Link
                      to={`/work/${project.slug}`}
                      className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-accent-700 hover:text-accent-800 dark:text-accent-300 dark:hover:text-accent-200"
                    >
                      See the {project.title} case study
                      <Icon name="arrow-right" className="h-3.5 w-3.5" />
                    </Link>
                  )}
                </figure>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
