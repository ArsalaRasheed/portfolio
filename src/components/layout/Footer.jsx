import { Link } from 'react-router-dom';
import { site } from '../../data/site.js';
import { projects } from '../../data/content.js';
import Icon from '../ui/Icon.jsx';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-x section !py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5" aria-label={`${site.name} — home`}>
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent-700 font-display text-sm font-semibold italic text-accent-50">
                HR
              </span>
              <span className="text-[15px] font-bold tracking-tight">{site.name}</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">{site.footer.tagline}</p>
            <div className="mt-6 flex items-center gap-2">
              {site.footer.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target={s.url.startsWith('http') ? '_blank' : undefined}
                  rel={s.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-400 hover:text-accent-700 dark:hover:text-accent-300"
                >
                  <Icon name={s.icon} className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <nav aria-label="Footer">
            <h3 className="text-sm font-bold uppercase tracking-wider text-muted">Pages</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                { label: 'Home', to: '/' },
                { label: 'All Projects', to: '/projects' },
                ...site.nav
                  .filter((n) => n.label !== 'Work')
                  .map((n) => ({ label: n.label, to: n.to })),
              ].map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-muted transition-colors hover:text-accent-700 dark:hover:text-accent-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Case studies */}
          <nav aria-label="Case studies">
            <h3 className="text-sm font-bold uppercase tracking-wider text-muted">Case studies</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {projects.map((p) => (
                <li key={p.slug}>
                  <Link
                    to={`/work/${p.slug}`}
                    className="text-muted transition-colors hover:text-accent-700 dark:hover:text-accent-300"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-sm text-muted sm:flex-row sm:items-center">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            <Icon name="heart" className="h-4 w-4 text-accent-600" />
            {site.footer.builtWith}
          </p>
        </div>
      </div>
    </footer>
  );
}
