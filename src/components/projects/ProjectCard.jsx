import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProjectArt from './ProjectArt.jsx';
import Tag from '../ui/Tag.jsx';
import Icon from '../ui/Icon.jsx';

/**
 * ProjectCard — editorial case-study card with hairline borders.
 * `large` switches to the wide hero variant of the grid.
 *
 * Screenshots: drop public/images/<slug>.png and it appears automatically.
 */
export default function ProjectCard({ project, large = false }) {
  const hasLive = project.liveUrl && !project.liveUrl.includes('example');
  const hasFigma = project.figmaUrl && !project.figmaUrl.includes('example');

  return (
    <motion.article className="group flex h-full flex-col border border-border bg-surface transition-colors duration-400 ease-out hover:border-ink/25">
      {/* Artwork */}
      <div className={`relative w-full overflow-hidden ${large ? 'min-h-[240px] flex-1 sm:min-h-[300px]' : 'aspect-[16/10]'}`}>
        <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.02]">
          <ProjectArt art={project.art} slug={project.slug} className="h-full w-full" rounded="rounded-none" />
        </div>
      </div>

      {/* Body */}
      <div className={`flex flex-col gap-5 border-t border-border p-5 sm:p-6 ${large ? 'md:flex-row md:items-end md:justify-between' : ''}`}>
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2.5">
            <Tag tone="accent">{project.category}</Tag>
            <span className="label text-muted">{project.year}</span>
          </div>
          <h3 className={`mt-3 font-display font-semibold tracking-[-0.01em] ${large ? 'text-2xl sm:text-3xl' : 'text-xl'}`}>
            <Link to={`/work/${project.slug}`} className="after:absolute after:inset-0 after:content-['']">
              {project.title}
            </Link>
          </h3>
          <p className={`mt-2.5 text-[15px] leading-relaxed text-muted ${large ? 'max-w-lg' : 'line-clamp-3'}`}>{project.summary}</p>

          <ul className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.slice(0, large ? 6 : 3).map((t) => (
              <li key={t}>
                <Tag tone="outline">{t}</Tag>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions sit above the card-wide link overlay */}
        <div className={`relative z-10 flex shrink-0 flex-wrap gap-2 ${large ? 'md:flex-col md:items-stretch' : ''}`}>
          <Link
            to={`/work/${project.slug}`}
            className="inline-flex items-center gap-1.5 rounded-lg bg-accent-700 px-4 py-2 text-[13px] font-semibold text-accent-50 transition-colors hover:bg-accent-800"
          >
            Case study
            <Icon name="arrow-right" className="h-3.5 w-3.5" />
          </Link>
          {hasLive && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-[13px] font-semibold text-ink transition-colors hover:border-ink/30"
            >
              Live demo
              <Icon name="external-link" className="h-3.5 w-3.5" />
            </a>
          )}
          {hasFigma && (
            <a
              href={project.figmaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-[13px] font-semibold text-ink transition-colors hover:border-ink/30"
            >
              Figma
              <Icon name="external-link" className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
