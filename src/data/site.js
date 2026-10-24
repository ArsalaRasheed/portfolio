/* ============================================================================
 *  SITE-WIDE SETTINGS — name, hero copy, stats, contact, social links
 *  🔶 Search for "TODO" to find everything you still need to fill in.
 * ==========================================================================*/

export const site = {
  name: 'Hina Rasheed',
  role: 'UI/UX Designer & Web Developer',
  // TODO: replace with your real domain (used for SEO tags, sitemap, og:image)
  domain: 'https://hinarasheed.dev',

  hero: {
    badge: 'Available for freelance',
    // Keep the headline short, confident and benefit-led
    headlineBefore: 'I design and build websites and stores that turn ',
    headlineAccent: 'visitors into customers',
    headlineAfter: '.',
    subhead:
      'I’m Hina — a UI/UX designer and web developer helping small businesses look credible, load fast and sell online with Figma, React, Tailwind and Shopify.',
    ctaPrimary: { label: 'View Case Studies', to: '#work' },
    ctaSecondary: { label: 'Let’s Work Together', to: '#contact' },
    chips: ['Figma', 'React', 'Tailwind', 'Shopify', 'AI'],
    // TODO: replace with real numbers — these are placeholders you can edit
    stats: [
      { value: 15, suffix: '+', label: 'Projects delivered' },
      { value: 2, suffix: '+', label: 'Years of experience' },
      { value: 12, suffix: '+', label: 'Tools I design & build with' },
      { value: 95, suffix: '+', label: 'Avg. Lighthouse score' },
    ],
  },

  about: {
    eyebrow: 'About',
    title: 'Design that solves a problem. Code that survives launch.',
    body: [
      'I help small businesses build a web presence that actually works — clear messaging, calm design, and code that loads fast on a phone.',
      'My process is simple: understand the problem, wireframe the flow, design it properly in Figma, then build it with clean, responsive code. No jargon, no disappearing acts.',
    ],
  },

  /* ---------------------------------------------------------------------------
   * CONTACT — form, email, socials
   * -------------------------------------------------------------------------*/
  contact: {
    eyebrow: 'Contact',
    title: "Let’s work together",
    subtitle:
      'Tell me about your project — a website, a Shopify store, a landing page or an AI feature. I reply within 24 hours.',
    // TODO: real email (already filled in)
    email: 'hk4949387@gmail.com',
    // TODO: replace with your real LinkedIn profile URL
    linkedin: 'https://www.linkedin.com/in/YOUR-USERNAME',
    // TODO: replace with your real WhatsApp number (international format, no + or spaces)
    whatsapp: '923095026170',
    whatsappLabel: '+92 309 5026170', // display label for the number above
    // TODO: optional — set a real form endpoint (Formspree, Netlify Forms, Web3Forms…)
    // e.g. formEndpoint: 'https://formspree.io/f/xxxxxxx'
    // If left empty, the form opens the visitor’s email client with the message pre-filled.
    formEndpoint: '',
    projectTypes: [
      'Website Design & Development',
      'Figma to Code',
      'Shopify Store Setup',
      'Landing Page',
      'AI Chatbot Integration',
      'Mobile App UI',
      'Something else',
    ],
    availability: {
      badge: 'Available for freelance',
      note: 'Open to freelance projects · Remote worldwide · Also open to full-time roles',
    },
  },

  /* ---------------------------------------------------------------------------
   * NAV + FOOTER
   * -------------------------------------------------------------------------*/
  nav: [
    { label: 'Work', to: '/#work' },
    { label: 'Process', to: '/#process' },
    { label: 'Services', to: '/#services' },
    { label: 'About', to: '/#learning' },
    { label: 'Contact', to: '/#contact' },
  ],

  footer: {
    tagline: 'Websites and stores that turn visitors into customers.',
    builtWith: 'Designed in Figma · Built with React, Tailwind CSS & Framer Motion',
    // TODO: add a GitHub link if you have one, e.g. { label: 'GitHub', url: 'https://github.com/…', icon: 'github' }
    socials: [
      { label: 'Email', url: 'mailto:hk4949387@gmail.com', icon: 'mail' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/YOUR-USERNAME', icon: 'linkedin' }, // TODO
      { label: 'WhatsApp', url: 'https://wa.me/923095026170', icon: 'whatsapp' },
    ],
  },
};
