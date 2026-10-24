import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ProjectCard from './ProjectCard.jsx';
import { projectFilters } from '../../data/content.js';

/**
 * Filterable bento grid of projects.
 * - `bento` layout gives the first card a large hero slot on desktop.
 */
export default function ProjectGrid({ projects, bento = false, showFilters = true }) {
  const [filter, setFilter] = useState('All');

  const filtered = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter, projects]
  );

  return (
    <>
      {showFilters && (
        <div
          className="mb-8 flex flex-wrap items-center gap-2 sm:mb-10"
          role="group"
          aria-label="Filter projects by category"
        >
          {projectFilters.map((f) => {
            const active = f === filter;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={active}
                className={`label border px-3.5 py-2 transition-colors duration-300 ${
                  active
                    ? 'border-accent-700 bg-accent-700 text-accent-50'
                    : 'border-border bg-transparent text-muted hover:border-ink/30 hover:text-ink'
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>
      )}

      <motion.div
        layout
        className={`grid gap-5 sm:gap-6 ${
          bento
            ? 'lg:grid-cols-2 lg:auto-rows-fr xl:grid-cols-3'
            : 'sm:grid-cols-2 lg:grid-cols-3'
        }`}
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.div
              layout
              key={p.slug}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.2), ease: [0.22, 1, 0.36, 1] }}
              className={bento && i === 0 ? 'lg:col-span-2 lg:row-span-2 xl:col-span-2' : ''}
            >
              <ProjectCard project={p} large={bento && i === 0} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="border border-dashed border-border py-16 text-center text-muted">
          No projects in this category yet — check back soon.
        </p>
      )}
    </>
  );
}
