import { Link, useParams } from 'react-router-dom';
import { getProject, getNextProject } from '../data/content.js';
import Seo from '../components/ui/Seo.jsx';
import Button from '../components/ui/Button.jsx';
import Tag from '../components/ui/Tag.jsx';
import Icon from '../components/ui/Icon.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import ReadingProgress from '../components/casestudy/ReadingProgress.jsx';
import TableOfContents from '../components/casestudy/TableOfContents.jsx';
import CaseSection from '../components/casestudy/CaseSection.jsx';
import ProjectArt from '../components/projects/ProjectArt.jsx';
import BeforeAfterSlider from '../components/projects/BeforeAfterSlider.jsx';
import { BrowserFrame, PhoneFrame } from '../components/projects/DeviceFrame.jsx';

const TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'problem', label: 'Problem & Goals' },
  { id: 'research', label: 'Research & Users' },
  { id: 'ux', label: 'UX Process' },
  { id: 'ui', label: 'UI Design' },
  { id: 'development', label: 'Development' },
  { id: 'challenges', label: 'Challenges & Solutions' },
  { id: 'result', label: 'Final Result' },
  { id: 'impact', label: 'Results & Impact' },
  { id: 'learnings', label: 'Key Learnings' },
  { id: 'improvements', label: "What I'd Improve" },
];

export default function CaseStudy() {
  const { slug } = useParams();
  const project = getProject(slug);

  if (!project) {
    return (
      <main className="container-x section text-center">
        <Seo title="Case study not found" description="This case study does not exist." path={`/work/${slug}`} />
        <h1 className="text-3xl font-extrabold">Case study not found</h1>
        <p className="mt-3 text-muted">That project does not exist (yet).</p>
        <Button to="/projects" className="mt-8" iconAfter="arrow-right">
          Browse all projects
        </Button>
      </main>
    );
  }

  const next = getNextProject(slug);
  const o = project.overview;

  return (
    <main>
      <Seo
        title={`${project.title} — Case Study`}
        description={project.summary}
        path={`/work/${project.slug}`}
      />
      <ReadingProgress />

      {/* ================= HEADER ================= */}
      <header className="relative overflow-hidden pb-14 pt-32 md:pt-40">
        <div
          className="pointer-events-none absolute -top-32 right-0 h-[420px] w-[420px] rounded-full opacity-20 blur-3xl"
          style={{ background: `radial-gradient(circle, ${project.art.colors[1]} 0%, transparent 70%)` }}
          aria-hidden="true"
        />
        <div className="container-x relative">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link to="/" className="transition-colors hover:text-ink">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link to="/projects" className="transition-colors hover:text-ink">
                  Projects
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-semibold text-ink">{project.title}</li>
            </ol>
          </nav>

          <div className="grid items-end gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <Tag tone="accent">{project.category}</Tag>
                <span className="text-sm font-semibold text-muted">{project.year}</span>
              </div>
              <h1 className="mt-4 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
                {project.title}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{project.summary}</p>

              <div className="mt-7 flex flex-wrap gap-3">
                {project.liveUrl && (
                  <Button href={project.liveUrl} iconAfter="external-link">
                    Live demo
                  </Button>
                )}
                {project.figmaUrl && (
                  <Button href={project.figmaUrl} variant="secondary" iconAfter="external-link">
                    Figma file
                  </Button>
                )}
              </div>
            </div>

            <Reveal delay={0.1} className="overflow-hidden border border-border">
              <div className="aspect-[16/11] w-full">
                <ProjectArt art={project.art} slug={project.slug} rounded="rounded-none" />
              </div>
            </Reveal>
          </div>
        </div>
      </header>

      {/* ================= BODY ================= */}
      <div className="container-x pb-24">
        <div className="grid gap-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16">
          {/* Sticky TOC (desktop) */}
          <aside className="hidden lg:block">
            <TableOfContents items={TOC} />
          </aside>

          <article>
            {/* 01 — Overview */}
            <CaseSection id="overview" n="01" title="Overview" intro={o.intro}>
              <dl className="grid gap-4 sm:grid-cols-2">
                {[
                  { label: 'Client / idea', value: o.client, icon: 'users' },
                  { label: 'My role', value: o.role, icon: 'pencil' },
                  { label: 'Timeline', value: o.timeline, icon: 'clock' },
                  { label: 'Tools & stack', value: o.tools, icon: 'layers' },
                ].map((item) => (
                  <div key={item.label} className="rounded-lg border border-border bg-surface p-5 sm:p-6">
                    <dt className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted">
                      <Icon name={item.icon} className="h-4 w-4 text-accent-600" />
                      {item.label}
                    </dt>
                    <dd className="mt-2.5 text-[15px] leading-relaxed text-ink">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </CaseSection>

            {/* 02 — Problem & Goals */}
            <CaseSection id="problem" n="02" title="Problem & Goals">
              <Reveal>
                <div className="border border-accent-700/20 bg-surface p-6 sm:p-7">
                  <p className="text-[15px] leading-relaxed text-ink sm:text-base">{project.problem.problem}</p>
                </div>
              </Reveal>
              <Reveal delay={0.05}>
                <h3 className="mt-10 flex items-center gap-2 text-lg font-bold">
                  <Icon name="target" className="h-5 w-5 text-accent-600" />
                  Goals
                </h3>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {project.problem.goals.map((g) => (
                    <li key={g} className="flex items-start gap-3 rounded-lg border border-border bg-surface p-4 text-sm leading-relaxed">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent-600/10 text-accent-700 dark:text-accent-300">
                        <Icon name="check" className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {g}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </CaseSection>

            {/* 03 — Research */}
            <CaseSection id="research" n="03" title="Research & User Understanding" intro="Before designing anything, I made sure I understood who this is for — and what they currently suffer through.">
              {/* Personas */}
              <Reveal>
                <h3 className="flex items-center gap-2 text-lg font-bold">
                  <Icon name="users" className="h-5 w-5 text-accent-600" />
                  Personas
                </h3>
                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  {project.research.personas.map((p) => (
                    <div key={p.name} className="flex flex-col rounded-lg border border-border bg-surface p-6">
                      <div className="flex items-center gap-3">
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent-600 text-sm font-extrabold text-white">
                          {p.name.split(' ')[0].slice(0, 2).toUpperCase()}
                        </span>
                        <div>
                          <p className="text-sm font-bold">{p.name}</p>
                          <p className="text-xs text-muted">{p.role}</p>
                        </div>
                      </div>
                      <p className="mt-4 border-l-2 border-accent-200 pl-3 text-sm italic leading-relaxed text-ink dark:border-accent-800">
                        “{p.quote}”
                      </p>
                      <div className="mt-5 space-y-4 text-sm">
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider text-muted">Goals</p>
                          <ul className="mt-2 space-y-1.5">
                            {p.goals.map((x) => (
                              <li key={x} className="flex items-start gap-2 text-muted">
                                <Icon name="check" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" strokeWidth={2.6} />
                                {x}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider text-muted">Pain points</p>
                          <ul className="mt-2 space-y-1.5">
                            {p.pains.map((x) => (
                              <li key={x} className="flex items-start gap-2 text-muted">
                                <Icon name="x" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-red-500" strokeWidth={2.6} />
                                {x}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* Competitors */}
              <Reveal delay={0.05}>
                <h3 className="mt-12 flex items-center gap-2 text-lg font-bold">
                  <Icon name="magnifier" className="h-5 w-5 text-accent-600" />
                  Competitor notes
                </h3>
                <ul className="mt-5 divide-y divide-border overflow-hidden rounded-lg border border-border bg-surface">
                  {project.research.competitors.map((c) => (
                    <li key={c.name} className="grid gap-1 p-5 sm:grid-cols-[200px_1fr] sm:gap-6">
                      <p className="text-sm font-bold">{c.name}</p>
                      <p className="text-sm leading-relaxed text-muted">{c.note}</p>
                    </li>
                  ))}
                </ul>
              </Reveal>

              {/* Pain points */}
              <Reveal delay={0.05}>
                <h3 className="mt-12 flex items-center gap-2 text-lg font-bold">
                  <Icon name="bolt" className="h-5 w-5 text-accent-600" />
                  Key pain points
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.research.painPoints.map((p) => (
                    <li key={p}>
                      <Tag>{p}</Tag>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </CaseSection>

            {/* 04 — UX Process */}
            <CaseSection id="ux" n="04" title="UX Process" intro="Flow first, screens second. I settle what the user does before deciding what it looks like.">
              {/* User flow */}
              <Reveal>
                <h3 className="flex items-center gap-2 text-lg font-bold">
                  <Icon name="arrow-right" className="h-5 w-5 text-accent-600" />
                  Core user flow
                </h3>
                <ol className="mt-5 grid gap-3 md:flex md:flex-wrap md:items-stretch">
                  {project.ux.userFlow.map((step, i) => (
                    <li key={step} className="flex flex-1 items-stretch">
                      <div className="flex w-full items-start gap-3 rounded-lg border border-border bg-surface p-4">
                        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent-600 text-[11px] font-bold text-white">
                          {i + 1}
                        </span>
                        <p className="text-sm leading-relaxed text-muted">{step}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </Reveal>

              {/* Wireframes */}
              <Reveal delay={0.05}>
                <h3 className="mt-12 flex items-center gap-2 text-lg font-bold">
                  <Icon name="layers" className="h-5 w-5 text-accent-600" />
                  Wireframes
                </h3>
                <div className="mt-5 grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-center">
                  <p className="text-[15px] leading-relaxed text-muted">{project.ux.wireframes}</p>
                  <div className="aspect-[16/10] w-full overflow-hidden rounded-lg border border-border">
                    <ProjectArt art={project.art} slug={project.slug} mode="wireframe" rounded="rounded-none" />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <h3 className="mt-12 flex items-center gap-2 text-lg font-bold">
                  <Icon name="pencil" className="h-5 w-5 text-accent-600" />
                  Figma screens &amp; prototyping
                </h3>
                <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-muted">{project.ux.figmaScreens}</p>
                {project.ux.figmaImage && (
                  <figure className="mt-6 overflow-hidden rounded-lg border border-border bg-surface">
                    <img
                      src={project.ux.figmaImage}
                      alt={project.ux.figmaImageCaption || 'Figma screens'}
                      loading="lazy"
                      decoding="async"
                      className="w-full"
                    />
                    {project.ux.figmaImageCaption && (
                      <figcaption className="border-t border-border px-5 py-3 text-sm text-muted">
                        {project.ux.figmaImageCaption}
                      </figcaption>
                    )}
                  </figure>
                )}
                {project.ux.figmaImage && project.figmaUrl && (
                  <a
                    href={project.figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-700 underline-offset-4 hover:underline dark:text-accent-300"
                  >
                    View the full Figma file
                    <Icon name="external-link" className="h-4 w-4" />
                  </a>
                )}
              </Reveal>
            </CaseSection>

            {/* 05 — UI Design */}
            <CaseSection id="ui" n="05" title="UI Design" intro={project.ui.systemNote}>
              {/* Palette */}
              <Reveal>
                <h3 className="flex items-center gap-2 text-lg font-bold">
                  <Icon name="sparkles" className="h-5 w-5 text-accent-600" />
                  Colour system
                </h3>
                <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                  {project.ui.colors.map((c) => (
                    <li key={c.name} className="overflow-hidden rounded-lg border border-border bg-surface">
                      <div className="h-16 w-full" style={{ backgroundColor: c.hex }} />
                      <div className="p-3">
                        <p className="text-sm font-bold">{c.name}</p>
                        <p className="font-mono text-xs text-muted">{c.hex}</p>
                        <p className="mt-1 text-[11px] leading-tight text-muted">{c.note}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <div className="mt-10 grid gap-6 md:grid-cols-2">
                <Reveal delay={0.05}>
                  <div className="h-full rounded-lg border border-border bg-surface p-6">
                    <h3 className="flex items-center gap-2 text-lg font-bold">
                      <Icon name="layout" className="h-5 w-5 text-accent-600" />
                      Typography
                    </h3>
                    <p className="mt-4 text-4xl font-extrabold leading-none tracking-tight">Aa</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{project.ui.typography}</p>
                  </div>
                </Reveal>
                <Reveal delay={0.1}>
                  <div className="h-full rounded-lg border border-border bg-surface p-6">
                    <h3 className="flex items-center gap-2 text-lg font-bold">
                      <Icon name="beaker" className="h-5 w-5 text-accent-600" />
                      Components built
                    </h3>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {project.ui.components.map((c) => (
                        <li key={c}>
                          <Tag tone="outline">{c}</Tag>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            </CaseSection>

            {/* 06 — Development */}
            <CaseSection id="development" n="06" title="Development" intro="Design is only half the job. Here is how it went from Figma to something real people can use.">
              <Reveal>
                <ul className="flex flex-wrap gap-2">
                  {project.development.stack.map((s) => (
                    <li key={s}>
                      <Tag tone="accent">{s}</Tag>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {project.development.decisions.map((d, i) => (
                  <Reveal key={d.title} delay={i * 0.05} className="h-full">
                    <div className="h-full rounded-lg border border-border bg-surface p-6">
                      <div className="flex items-start gap-3">
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-accent-600/10 font-mono text-xs font-bold text-accent-700 dark:text-accent-300">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <h3 className="text-base font-bold leading-snug">{d.title}</h3>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-muted">{d.detail}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </CaseSection>

            {/* 07 — Challenges */}
            <CaseSection id="challenges" n="07" title="Challenges & Solutions" intro="Nothing went perfectly. Here is what broke, and what I did about it.">
              <div className="space-y-5">
                {project.challenges.map((c, i) => (
                  <Reveal key={i} delay={i * 0.05}>
                    <div className="overflow-hidden rounded-lg border border-border bg-surface">
                      <div className="border-l-4 border-red-400 p-5 sm:p-6">
                        <p className="text-xs font-bold uppercase tracking-wider text-red-500">Challenge</p>
                        <p className="mt-2 text-[15px] leading-relaxed text-ink">{c.challenge}</p>
                      </div>
                      <div className="border-l-4 border-emerald-400 bg-surface-2/60 p-5 sm:p-6">
                        <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                          Solution
                        </p>
                        <p className="mt-2 text-[15px] leading-relaxed text-muted">{c.solution}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </CaseSection>

            {/* 08 — Final Result */}
            <CaseSection id="result" n="08" title="Final Result" intro={project.result.summary}>
              {/* Before / after */}
              {project.result.beforeAfter && (
                <Reveal>
                  <BeforeAfterSlider
                    title={project.result.beforeAfter.title}
                    note={project.result.beforeAfter.note}
                    before={<ProjectArt art={project.art} slug={project.slug} mode="wireframe" rounded="rounded-none" />}
                    after={<ProjectArt art={project.art} slug={project.slug} rounded="rounded-none" />}
                  />
                </Reveal>
              )}

              {/* Device mockups — drop /images/<slug>.png (+ -mobile.png) to replace */}
              <Reveal delay={0.05}>
                <div className="mt-10 flex flex-col items-center gap-8 sm:flex-row sm:items-end sm:justify-center">
                  <BrowserFrame url={project.liveUrl?.replace(/^https?:\/\//, '') || 'your-site.com'} className="w-full max-w-xl">
                    <ProjectArt art={project.art} slug={project.slug} rounded="rounded-none" />
                  </BrowserFrame>
                  <PhoneFrame>
                    <ProjectArt art={project.art} slug={project.slug} mobile rounded="rounded-none" />
                  </PhoneFrame>
                </div>
              </Reveal>

              {project.result.links.length > 0 && (
                <Reveal delay={0.05}>
                  <div className="mt-10 flex flex-wrap gap-3">
                    {project.result.links.map((l) => (
                      <Button key={l.label} href={l.url} variant={l.label.toLowerCase().includes('live') || l.label.toLowerCase().includes('demo') || l.label.toLowerCase().includes('store') || l.label.toLowerCase().includes('prototype') ? 'primary' : 'secondary'} iconAfter="external-link">
                        {l.label}
                      </Button>
                    ))}
                  </div>
                </Reveal>
              )}
            </CaseSection>

            {/* 09 — Impact */}
            <CaseSection id="impact" n="09" title="Results & Impact" intro="Numbers where I have them — and honest context around them.">
              <Reveal>
                <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                  {project.impact.map((m) => (
                    <div key={m.label} className="rounded-lg border border-border bg-surface p-5 text-center sm:p-6">
                      <dd className="text-3xl font-extrabold tracking-tight text-accent-700 dark:text-accent-300">{m.value}</dd>
                      <dt className="mt-2 text-sm font-semibold leading-snug text-ink">{m.label}</dt>
                      {m.note && <p className="mt-1 text-xs leading-snug text-muted">{m.note}</p>}
                    </div>
                  ))}
                </dl>
              </Reveal>
              {project.feedback && (
                <Reveal delay={0.05}>
                  <blockquote className="mt-8 rounded-lg border border-border bg-surface p-6 sm:p-8">
                    <Icon name="quote" className="h-8 w-8 text-accent-300" strokeWidth={1.4} />
                    <p className="mt-3 text-lg leading-relaxed text-ink">{project.feedback}</p>
                  </blockquote>
                </Reveal>
              )}
            </CaseSection>

            {/* 10 — Learnings */}
            <CaseSection id="learnings" n="10" title="Key Learnings">
              <ul className="grid gap-3 md:grid-cols-2">
                {project.learnings.map((l, i) => (
                  <Reveal as="li" key={i} delay={i * 0.05} className="h-full">
                    <div className="flex h-full items-start gap-3 rounded-lg border border-border bg-surface p-5">
                      <Icon name="lightbulb" className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                      <p className="text-[15px] leading-relaxed text-muted">{l}</p>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </CaseSection>

            {/* 11 — Improvements */}
            <CaseSection id="improvements" n="11" title="What I’d Improve Next">
              <ul className="space-y-3">
                {project.improvements.map((x, i) => (
                  <Reveal as="li" key={i} delay={i * 0.05} className="flex items-start gap-3 rounded-lg border border-dashed border-border bg-surface/60 p-5">
                    <Icon name="arrow-up-right" className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" />
                    <p className="text-[15px] leading-relaxed text-muted">{x}</p>
                  </Reveal>
                ))}
              </ul>
            </CaseSection>
          </article>
        </div>
      </div>

      {/* ================= NEXT PROJECT ================= */}
      <section className="border-t border-border bg-surface">
        <div className="container-x py-16 md:py-20">
          <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-muted">Next project</p>
          <Link
            to={`/work/${next.slug}`}
            className="group mx-auto mt-6 flex max-w-3xl flex-col items-center gap-6 rounded-lg border border-border bg-bg p-6 text-center transition-all duration-400 ease-out hover:-translate-y-1 hover:border-accent-300 hover:shadow-lift sm:flex-row sm:text-left"
          >
            <div className="aspect-[16/10] w-full overflow-hidden rounded-lg sm:w-56 sm:shrink-0">
              <ProjectArt art={next.art} slug={next.slug} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-muted">{next.category}</p>
              <h3 className="mt-1 text-2xl font-extrabold tracking-tight">{next.title}</h3>
              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">{next.summary}</p>
            </div>
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-accent-600 text-white transition-transform duration-300 group-hover:translate-x-1">
              <Icon name="arrow-right" className="h-5 w-5" />
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
