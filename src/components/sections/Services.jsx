import { services } from '../../data/content.js';
import SectionHeading from '../ui/SectionHeading.jsx';
import Reveal from '../ui/Reveal.jsx';
import Icon from '../ui/Icon.jsx';
import Button from '../ui/Button.jsx';

const iconMap = {
  layout: 'layout',
  code: 'code',
  bag: 'bag',
  rocket: 'rocket',
  chat: 'chat',
  mobile: 'mobile',
};

export default function Services() {
  return (
    <section id="services" className="section scroll-mt-24">
      <div className="container-x">
        <SectionHeading
          number="05"
          eyebrow="Services"
          title="How I can help your business"
          description="Whether you need a brand-new website or a Figma file turned into code, here is exactly what I deliver."
          className="mb-14"
        />

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05} className="h-full">
              <article className="group flex h-full flex-col rounded-lg border border-border bg-surface p-6 transition-all duration-400 ease-out hover:-translate-y-1 hover:border-accent-300 hover:shadow-lift dark:hover:border-accent-800 sm:p-7">
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-accent-600/10 text-accent-700 transition-all duration-300 group-hover:bg-accent-600 group-hover:text-white dark:bg-accent-600/15 dark:text-accent-300">
                  <Icon name={iconMap[s.icon] || 'layout'} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold leading-snug">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{s.text}</p>
                <ul className="mt-5 space-y-2 border-t border-border pt-5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-muted">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" strokeWidth={2.4} />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-12">
          <div className="flex flex-col items-center justify-between gap-6 rounded-lg border border-accent-200 bg-accent-50 p-8 text-center dark:border-accent-900 dark:bg-accent-950 sm:p-10 md:flex-row md:text-left">
            <div>
              <h3 className="text-xl font-bold text-accent-900 dark:text-accent-100">
                Not sure which one you need?
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-accent-800/90 dark:text-accent-200/90">
                Tell me about your business and I will recommend the smallest project that gets you the result —
                no upselling, no jargon.
              </p>
            </div>
            <Button to="/#contact" size="lg" className="shrink-0">
              Get a free quote
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
