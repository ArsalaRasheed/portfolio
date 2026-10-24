import { projects } from '../../data/content.js';
import ProjectGrid from '../projects/ProjectGrid.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import Button from '../ui/Button.jsx';
import Reveal from '../ui/Reveal.jsx';

export default function FeaturedProjects() {
  return (
    <section id="work" className="section scroll-mt-24">
      <div className="container-x">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:mb-14 md:flex-row md:items-end">
          <SectionHeading
            number="01"
            eyebrow="Featured projects"
            title="Real projects. Real problem-solving."
            description="Every project below starts with a problem, not a colour palette. Open a case study to see the research, the trade-offs and the results."
          />
          <Reveal delay={0.1}>
            <Button to="/projects" variant="secondary" iconAfter="arrow-right" className="shrink-0">
              All projects
            </Button>
          </Reveal>
        </div>

        <ProjectGrid projects={projects} bento />
      </div>
    </section>
  );
}
