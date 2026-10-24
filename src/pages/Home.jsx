import Seo from '../components/ui/Seo.jsx';
import Hero from '../components/sections/Hero.jsx';
import FeaturedProjects from '../components/sections/FeaturedProjects.jsx';
import Process from '../components/sections/Process.jsx';
import Learning from '../components/sections/Learning.jsx';
import Skills from '../components/sections/Skills.jsx';
import Services from '../components/sections/Services.jsx';
import Testimonials from '../components/sections/Testimonials.jsx';
import Faq from '../components/sections/Faq.jsx';
import Contact from '../components/sections/Contact.jsx';

export default function Home() {
  return (
    <main>
      <Seo
        title=""
        description="Hina Rasheed designs and builds websites, web apps and Shopify stores that turn visitors into customers. Figma, React, Tailwind & Shopify for small businesses."
        path="/"
      />
      <Hero />
      <FeaturedProjects />
      <Process />
      <Learning />
      <Skills />
      <Services />
      <Testimonials />
      <Faq />
      <Contact />
      {/* site.about content is available in src/data/site.js if you want an About block */}
    </main>
  );
}
