import Seo from '../components/ui/Seo.jsx';
import Button from '../components/ui/Button.jsx';
import { projects } from '../data/content.js';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="container-x section pt-40 text-center">
      <Seo title="Page not found" description="This page does not exist." path="/404" />
      <p className="text-7xl font-extrabold tracking-tight text-accent-600">404</p>
      <h1 className="mt-4 text-3xl font-extrabold">This page doesn’t exist</h1>
      <p className="mx-auto mt-3 max-w-md text-muted">
        The link may be old, or I may have moved something. Try one of these instead:
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button to="/" iconAfter="arrow-right">
          Back home
        </Button>
        <Button to="/projects" variant="secondary">
          All projects
        </Button>
      </div>
      <ul className="mx-auto mt-12 flex max-w-2xl flex-wrap justify-center gap-2">
        {projects.map((p) => (
          <li key={p.slug}>
            <Link
              to={`/work/${p.slug}`}
              className="inline-block rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-muted transition-colors hover:border-accent-400 hover:text-ink"
            >
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
