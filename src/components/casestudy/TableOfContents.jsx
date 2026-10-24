import { useMemo } from 'react';
import useScrollSpy from '../../hooks/useScrollSpy.js';

/**
 * Sticky table of contents for case study pages.
 * Clicking an item smooth-scrolls to the section; the active item is
 * highlighted as you read.
 */
export default function TableOfContents({ items }) {
  const ids = useMemo(() => items.map((i) => i.id), [items]);
  const active = useScrollSpy(ids);

  return (
    <nav aria-label="Case study contents" className="sticky top-28">
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-muted">On this page</p>
      <ol className="space-y-1 border-l-2 border-border">
        {items.map((item, i) => {
          const isActive = active === item.id;
          return (
            <li key={item.id} className="relative">
              <a
                href={`#${item.id}`}
                aria-current={isActive ? 'true' : undefined}
                className={`-ml-0.5 block border-l-2 py-1.5 pl-4 text-sm leading-snug transition-colors duration-200 ${
                  isActive
                    ? 'border-accent-600 font-bold text-ink'
                    : 'border-transparent text-muted hover:text-ink'
                }`}
              >
                <span className="mr-2 font-mono text-[11px] font-bold text-muted">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {item.label}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
