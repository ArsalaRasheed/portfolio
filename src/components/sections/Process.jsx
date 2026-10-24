import { processSteps } from '../../data/content.js';
import SectionHeading from '../ui/SectionHeading.jsx';
import Reveal from '../ui/Reveal.jsx';
import Icon from '../ui/Icon.jsx';

export default function Process() {
  return (
    <section id="process" className="section scroll-mt-24 border-y border-border bg-surface">
      <div className="container-x">
        <SectionHeading
          number="02"
          eyebrow="How I work"
          title="My design & dev process"
          description="Six steps, every project. You always know what is happening, what is next and what I need from you."
          align="center"
          className="mb-14"
        />

        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, i) => (
            <Reveal as="li" key={step.n} delay={i * 0.06} className="relative">
              <div className="group h-full rounded-lg border border-border bg-bg p-6 transition-all duration-400 ease-out hover:-translate-y-1 hover:border-accent-300 hover:shadow-lift dark:hover:border-accent-800">
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-accent-600/10 text-accent-700 transition-colors duration-300 group-hover:bg-accent-600 group-hover:text-white dark:text-accent-300">
                    <Icon name={step.icon} className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-sm font-bold text-muted">{step.n}</span>
                </div>
                <h3 className="mt-5 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
                <p className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-accent-700 dark:text-accent-300">
                  <Icon name="clock" className="h-3.5 w-3.5" />
                  {step.duration}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
