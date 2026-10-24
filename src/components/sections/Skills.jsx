import { skillGroups } from '../../data/content.js';
import SectionHeading from '../ui/SectionHeading.jsx';
import Reveal from '../ui/Reveal.jsx';
import Icon from '../ui/Icon.jsx';

function SkillBar({ name, level, delay }) {
  return (
    <li>
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-sm font-medium text-ink">{name}</span>
        <span className="font-mono text-xs font-bold text-muted">{level}%</span>
      </div>
      <div
        className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-surface-2"
        role="progressbar"
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${name}: ${level}%`}
      >
        <Reveal className="h-full" delay={delay}>
          <div
            className="h-full rounded-full bg-gradient-to-r from-accent-600 to-accent-400"
            style={{ width: `${level}%` }}
          />
        </Reveal>
      </div>
    </li>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section scroll-mt-24 border-y border-border bg-surface">
      <div className="container-x">
        <SectionHeading
          number="04"
          eyebrow="Skills"
          title="The toolkit"
          description="An honest picture of what I use daily, what I am strong at, and where I am still growing."
          align="center"
          className="mb-14"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.06} className="h-full">
              <div className="flex h-full flex-col rounded-lg border border-border bg-bg p-6 transition-all duration-400 ease-out hover:-translate-y-1 hover:border-accent-300 hover:shadow-lift dark:hover:border-accent-800">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent-600/10 text-accent-700 dark:text-accent-300">
                    <Icon name={group.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="text-base font-bold">{group.title}</h3>
                </div>
                <ul className="mt-6 flex-1 space-y-5">
                  {group.skills.map((s, si) => (
                    <SkillBar key={s.name} name={s.name} level={s.level} delay={0.1 + si * 0.05} />
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
