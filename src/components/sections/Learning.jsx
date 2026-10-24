import { learningTimeline, mistakes, learningGoals } from '../../data/content.js';
import SectionHeading from '../ui/SectionHeading.jsx';
import Reveal from '../ui/Reveal.jsx';
import Icon from '../ui/Icon.jsx';
import Tag from '../ui/Tag.jsx';

export default function Learning() {
  return (
    <section id="learning" className="section scroll-mt-24">
      <div className="container-x">
        <SectionHeading
          number="03"
          eyebrow="Learning & growth"
          title="I show my work — including the mistakes."
          description="I am not pretending to know everything. Here is the actual path: courses, first client projects, what went wrong, and what I am learning next."
          className="mb-14"
        />

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          {/* Timeline */}
          <div>
            <ol className="relative space-y-8 border-l-2 border-border pl-8">
              {learningTimeline.map((item, i) => (
                <Reveal as="li" key={item.title} delay={i * 0.05} className="relative">
                  <span className="absolute -left-[41px] grid h-6 w-6 place-items-center rounded-full border-2 border-border bg-surface text-accent-600">
                    <span className="h-2 w-2 rounded-full bg-accent-600" />
                  </span>
                  <div className="rounded-lg border border-border bg-surface p-5 transition-all duration-400 hover:-translate-y-0.5 hover:shadow-lift sm:p-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-sm font-bold text-accent-700 dark:text-accent-300">{item.period}</span>
                      <Tag tone="outline">{item.tag}</Tag>
                    </div>
                    <h3 className="mt-2 text-lg font-bold leading-snug">{item.title}</h3>
                    <p className="mt-0.5 text-sm font-medium text-muted">{item.place}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>

          {/* Mistakes + goals */}
          <div className="space-y-8">
            <Reveal>
              <div className="rounded-lg border border-border bg-surface p-6">
                <h3 className="flex items-center gap-2 text-lg font-bold">
                  <Icon name="lightbulb" className="h-5 w-5 text-amber-500" />
                  Mistakes I made (and what they taught me)
                </h3>
                <ul className="mt-5 space-y-5">
                  {mistakes.map((m) => (
                    <li key={m.mistake} className="border-l-2 border-accent-200 pl-4 dark:border-accent-800">
                      <p className="text-sm font-bold text-ink">{m.mistake}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{m.result}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-lg border border-accent-700 bg-accent-700 p-6 text-accent-50">
                <h3 className="flex items-center gap-2 text-lg font-bold">
                  <Icon name="target" className="h-5 w-5" />
                  Current learning goals
                </h3>
                <ul className="mt-5 space-y-3">
                  {learningGoals.map((g) => (
                    <li key={g} className="flex items-start gap-3 text-sm leading-relaxed">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white/20">
                        <Icon name="check" className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
