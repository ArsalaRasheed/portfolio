import { projects } from '../data/content.js';
import Seo from '../components/ui/Seo.jsx';
import ProjectGrid from '../components/projects/ProjectGrid.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';

export default function Projects() {
  return (
    <main className="section pt-32 md:pt-40">
      <Seo
        title="Projects & Case Studies"
        description="Web apps, landing pages, Shopify stores and AI products — each with the problem, the process and the results."
        path="/projects"
      />
      <div className="container-x">
        <SectionHeading
          as="h1"
          eyebrow="All projects"
          title="Case studies, not just screenshots."
          description="Filter by category and open any project to see the full process — research, wireframes, design decisions, code and results."
          className="mb-12"
        />
        <ProjectGrid projects={projects} bento={false} />
      </div>
    </main>
  );
}
