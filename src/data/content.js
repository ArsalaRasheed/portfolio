/* ============================================================================
 *  SITE CONTENT — EDIT EVERYTHING HERE
 * ============================================================================
 *  This is the ONLY file you need to touch to update your copy, projects,
 *  case studies, skills, services, testimonials and contact details.
 *
 *  🔶 PLACEHOLDERS are marked with  // TODO:  — search this file for "TODO"
 *  to find every value you still need to replace with real information
 *  (links, numbers, testimonials, client names, metrics, WhatsApp, LinkedIn).
 *
 *  📸 SCREENSHOTS: your images live in src/assets/ and are imported below.
 *     To swap a screenshot, replace the file (same name) — nothing else to do.
 *     Set `image: ''` on a project to fall back to the CSS mockup.
 *
 *  Tips
 *  • Case study sections mirror the page structure exactly:
 *    overview → problem → research → ux → ui → development → challenges
 *    → result → impact → learnings → improvements
 * ==========================================================================*/

import { site } from './site.js';

// 📸 Your actual project screenshots (src/assets/)
import classpilotImg from '../assets/classpilot.png';
import touristoImg from '../assets/touristo.png';
import shopifyImg from '../assets/shopify.png';
import chatbotImg from '../assets/chatbot.jpeg';
import figmaScreensImg from '../assets/figma.png';
import landingPageImg from '../assets/landingpage.png';

export { site };

/* ---------------------------------------------------------------------------
 * PROJECTS + FULL CASE STUDIES
 * Filter categories: 'Web App' | 'Landing Page' | 'E-commerce' | 'AI'
 * `art.variant` picks the built-in CSS mockup:
 *   'dashboard' | 'landing' | 'store' | 'chat' | 'marketplace'
 * -------------------------------------------------------------------------*/
export const projects = [
  {
    slug: 'classpilot',
    title: 'ClassPilot',
    category: 'Web App',
    year: '2025', // TODO: confirm year
    featured: true,
    badge: 'Flagship case study',
    summary:
      'An institute management platform — admissions, attendance, exams, fees and parent communication for academies, all from one screen.',
    tags: ['Figma', 'React', 'Tailwind CSS', 'Design System'],
    art: {
      variant: 'dashboard',
      colors: ['#3730A3', '#EEF0FB'],
      image: classpilotImg,
      alt: 'ClassPilot landing page — run your institute from one screen',
      objectPos: 'left top', // wide shot — keep the headline visible when cropped
    },
    // No public demo or Figma link shared yet — buttons stay hidden while these are empty.
    liveUrl: '',
    figmaUrl: '',
    caseUrl: '/work/classpilot',

    overview: {
      client:
        'A platform for academies and coaching institutes — built to replace the messy stack of Excel files and WhatsApp groups. [TODO: confirm if this was a client brief or your own product concept]',
      role: 'UI/UX Designer & Front-end Developer — end-to-end: research, wireframes, Figma UI, React build.',
      timeline: '6 weeks (design 3 weeks · build 3 weeks)',
      tools: 'Figma, React, Tailwind CSS, JavaScript, localStorage (demo data layer)',
      intro:
        'ClassPilot started as a simple question: why does an institute still keep attendance in one file, fees in another, and updates in a WhatsApp group nobody can search? I designed and built one screen that runs the whole institute.',
    },

    problem: {
      problem:
        'The institute ran on paper registers, Excel fee sheets and scattered WhatsApp groups. Admissions lived in one notebook, attendance in another, exam marks in a third, and fee status was a monthly guessing game. Admins re-typed the same data twice, teachers lost class time marking registers, and parents had no way to know if their child attended, scored or paid — until month end, when disputes were already awkward.',
      goals: [
        'Run the whole institute — admissions, attendance, exams, fees — from one screen.',
        'Log a full class attendance in under 30 seconds, on a phone.',
        'Show fee status (paid / due / overdue) next to every student, always.',
        'Give admins a live picture: students, batches, attendance rate at a glance.',
        'Make it usable by a teacher with zero training.',
        'Keep the interface calm: one screen, one decision.',
      ],
    },

    research: {
      personas: [
        {
          name: 'Fatima — Centre Admin', // TODO: use a real research participant name or keep anonymised
          role: 'Runs 4 classes, handles fees and parent calls',
          quote: 'I spend the last week of every month just correcting numbers.',
          goals: ['See who has paid this month', 'Stop re-typing attendance into Excel', 'Send fee reminders without awkward calls'],
          pains: ['Paper register + Excel = double work', 'No history she can trust', 'Parents ask questions she can’t answer quickly'],
        },
        {
          name: 'Bilal — Teacher',
          role: 'Teaches maths to two batches, uses a phone in class',
          quote: 'Marking the register eats ten minutes I should be teaching.',
          goals: ['Mark attendance before the lecture starts', 'Do it from a phone, one-handed', 'Never lose marks if the network drops'],
          pains: ['Paper registers get misplaced', 'School apps are slow and full of menus', 'He is not "a computer person"'],
        },
      ],
      competitors: [
        { name: 'Google Classroom', note: 'Great for assignments, but attendance is buried and fee tracking does not exist.' },
        { name: 'Local school ERPs', note: 'Powerful but expensive, 40+ screens, and built for schools with IT staff.' },
        { name: 'Spreadsheet + WhatsApp', note: 'Free and familiar — but zero accountability and constant double entry.' },
      ],
      painPoints: [
        'Attendance and fees live in two different places',
        'No role-based view: admin sees what teacher sees',
        'Mobile experience of existing tools is an afterthought',
        'Data entry happens twice (register → Excel)',
      ],
    },

    ux: {
      userFlow: [
        'Open app → Today’s class is pre-selected',
        'Tap student chips to toggle present / absent',
        'Fee status badge updates inline (paid · due · overdue)',
        'Save → attendance timestamped, history auto-logged',
        'Admin dashboard → filter by month → export report',
      ],
      wireframes:
        'I started with pencil-thin Figma wireframes for the three screens that mattered: Today’s Class, Student Profile and the Admin Dashboard. I deliberately cut the "timetable" and "messaging" screens early — they doubled the build for a feature nobody asked for in testing.',
      figmaScreens:
        'Low-fi wireframes → mid-fi flows → hi-fi UI with a small design system (8 components, 1 type scale, 1 accent). Every screen was prototyped and click-tested in Figma before a single component was coded.', // TODO: link your Figma prototype here
    },

    ui: {
      systemNote:
        'A deliberately small system: one accent, two type weights, four component families. Small systems ship faster and stay consistent when the app grows.',
      colors: [
        { name: 'Primary', hex: '#5B54D6', note: 'Actions, active states' },
        { name: 'Success', hex: '#0EA47A', note: 'Present / Paid' },
        { name: 'Warning', hex: '#D97706', note: 'Fee due' },
        { name: 'Danger', hex: '#DC2626', note: 'Absent / Overdue' },
        { name: 'Ink', hex: '#10121D', note: 'Text' },
        { name: 'Surface', hex: '#F4F5F9', note: 'Backgrounds' },
      ],
      typography: 'Plus Jakarta Sans — 800 for numbers and titles, 500 for body. Tabular figures for fee columns so amounts line up.',
      components: ['Student chip (toggle)', 'Status pill', 'Stat card', 'Month filter bar', 'Empty state', 'Export button'],
    },

    development: {
      stack: ['React (Vite)', 'Tailwind CSS', 'JavaScript (ES6+)', 'localStorage as a demo data layer'],
      decisions: [
        {
          title: 'Mobile-first, then scale up',
          detail:
            'The first screen I designed was 360px wide, not 1440px — because the teacher marks attendance on a phone. The desktop admin view is the same components, re-laid out with Tailwind breakpoints.',
        },
        {
          title: 'localStorage as a stand-in API',
          detail:
            'No backend was needed to prove the workflow, so attendance lives in localStorage with the exact shape a REST API would return. Swapping to Supabase or Firebase later is a one-file change.',
        },
        {
          title: 'Optimistic UI for attendance',
          detail:
            'Tapping a student updates instantly and syncs after. In a classroom with weak signal, waiting for a server round-trip to mark someone present feels broken.',
        },
        {
          title: 'Reusable tokens, not one-off styles',
          detail:
            'Colors, radii and spacing are Tailwind tokens shared by every component, so restyling the app is a config change instead of a find-and-replace.',
        },
      ],
    },

    challenges: [
      {
        challenge: 'The attendance grid looked great on desktop and was unusable on a phone — a 40-student table needs horizontal scrolling.',
        solution:
          'I replaced the table with a wrap of large tappable student chips on mobile. Same data, same speed, but one thumb can mark a whole class. Task time dropped from ~50s to ~25s in testing.',
      },
      {
        challenge: 'Everything felt urgent: attendance, fees, reports and messages all wanted the homepage.',
        solution:
          'Progressive disclosure. Today’s class is the home screen; fee analytics and reports live one tap away behind tabs. New users see one job, not twelve.',
      },
      {
        challenge: 'Real attendance data is messy (late arrivals, half-days, leave).',
        solution:
          'Three states instead of two — present, absent, late — plus an "undo last save" action. The UI never punishes a wrong tap.',
      },
    ],

    result: {
      summary:
        'A working web app with three screens: Today’s Class, Student Profile and the Admin Dashboard — plus a small design system so new screens take hours, not days.',
      links: [], // no public demo / Figma link yet — buttons hidden automatically
      beforeAfter: {
        title: 'Attendance screen: wireframe → final UI',
        note: 'The wireframe is intentionally ugly — it exists to settle flow and hierarchy before colour.',
      },
    },

    impact: [
      { value: '~25s', label: 'to mark a full class', note: 'down from ~3 minutes on paper' }, // TODO: replace with your real numbers
      { value: '5 / 5', label: 'testers completed the task unaided', note: 'in moderated usability tests' },
      { value: '-40%', label: 'fewer screens to reach any student', note: 'vs. the original spreadsheet flow' },
      { value: '95+', label: 'Lighthouse performance score', note: 'on mobile, throttled 4G' },
    ],
    feedback:
      '“I understood the whole screen without anyone explaining it. That has never happened with a school system.” — usability test participant [TODO: replace with a real client quote]',

    learnings: [
      'Design the smallest screen first. If it works at 360px, desktop is easy.',
      'Users forgive plain visuals; they never forgive slow, unclear tasks.',
      'One accent colour + one typeface can carry an entire product if the spacing is consistent.',
      'A demo data layer with real data shapes makes the future backend swap boring — which is the goal.',
    ],
    improvements: [
      'Real authentication and roles (teacher / admin / parent).',
      'A parent portal with a monthly PDF report.',
      'PWA offline support so attendance works with no signal at all.',
      'Charts for fee collection trends instead of static stat cards.',
    ],
  },

  {
    slug: 'landing-pages',
    title: 'Landing Pages',
    category: 'Landing Page',
    year: '2024 – 2025', // TODO: confirm period
    featured: true,
    badge: 'Page kit · multiple projects',
    summary:
      'A reusable landing-page system for small businesses: one clear goal per page, fast on mobile, shipped in days — not weeks.',
    tags: ['Figma', 'HTML', 'CSS', 'Tailwind CSS', 'React'],
    art: {
      variant: 'landing',
      colors: ['#A5C8F0', '#0E2949'], // Al-Khan navy + light blue
      image: landingPageImg,
      alt: 'AL-KHAN PAINTS landing page — premium paints, trusted brands, better bulk buying',
    },
    liveUrl: 'https://info.alkhanpaints.com',
    figmaUrl: '', // no Figma link shared — button hidden
    caseUrl: '/work/landing-pages',

    overview: {
      client:
        'Al-Khan Paints (info.alkhanpaints.com) — a wholesale & retail paint supplier in Rawalpindi. This page is the live example; the same kit has powered pages for other small businesses. [TODO: list other client pages if you want them named]',
      role: 'Designer & developer — message structure, Figma design, responsive build, performance pass.',
      timeline: '3–5 days per page (after the first kit was built)',
      tools: 'Figma, HTML, CSS, Tailwind CSS, React',
      intro:
        'Small businesses usually send ad traffic to a generic homepage. I built a landing-page kit that starts from the offer, not the layout — so every new page is focused, fast and converting from day one. The Al-Khan Paints page is the live result: one screen that answers what they sell, why trust them, and how to order on WhatsApp.',
    },

    problem: {
      problem:
        'The typical small-business landing page is a homepage with a ad budget pointed at it: five navigation links, three competing messages, a hero that describes the company instead of the offer, and a contact form buried below three screens of scrolling. Visitors bounce, and the owner concludes "ads do not work".',
      goals: [
        'One page = one goal = one call to action.',
        'Hero that states the offer, the outcome and the proof above the fold.',
        'Load in under 1 second on a mid-range phone.',
        'A repeatable kit so the next page takes days, not weeks.',
        'Sections that answer objections in the order buyers actually ask them.',
      ],
    },

    research: {
      personas: [
        {
          name: 'Sara — Course Owner', // TODO: real names
          role: 'Sells a paid coaching course through Facebook ads',
          quote: 'People click, watch the page, and disappear. I never know what they were looking for.',
          goals: ['More form submissions', 'Fewer "is this legit?" questions', 'A page she can edit herself'],
          pains: ['Generic homepage as ad landing', 'No proof or testimonials on the page', 'Page is slow on mobile data'],
        },
      ],
      competitors: [
        { name: 'DIY website builders', note: 'Fast to start, but 2MB themes and no focus discipline — pages look like everyone else’s.' },
        { name: 'Agency-built pages', note: 'Beautiful and slow; often 6+ weeks and expensive for a single offer.' },
        { name: 'High-perform SaaS pages', note: 'Great structure (problem → proof → price → FAQ), rarely adapted for local small business.' },
      ],
      painPoints: [
        'Headlines describe the company, not the visitor’s problem',
        'Calls to action repeat randomly or not at all',
        'No social proof before the ask',
        'Heavy templates and stock images destroy load time',
      ],
    },

    ux: {
      userFlow: [
        'Ad click → Hero states the exact offer + outcome + primary CTA',
        'Problem section mirrors the visitor’s own words (from ad comments)',
        'How it works in 3 steps',
        'Proof: results, testimonials, guarantees',
        'Objections handled in FAQ',
        'Final CTA band — same button, same wording as the hero',
      ],
      wireframes:
        'A single low-fi template in Figma with swappable blocks. Before designing, I write the full page copy in a doc — headline, subhead, proof, FAQ. If the copy does not convince me in plain text, no layout will save it.',
      figmaScreens:
        'Each page starts as a copy of the wireframe kit, then gets its own type treatment, colour accents and imagery. Consistency between client pages is a feature: I can reuse patterns that already convert.',
    },

    ui: {
      systemNote:
        'A one-page design system: one type scale (14 → 64px), one accent per client, a fixed set of 8 components (hero, stat row, step, testimonial, feature card, pricing, FAQ, CTA band).',
      colors: [
        { name: 'Client accent', hex: '#A5C8F0', note: 'Per-client, one only — Al-Khan light blue' },
        { name: 'Ink', hex: '#10121D', note: 'Headlines' },
        { name: 'Muted', hex: '#52586A', note: 'Body copy' },
        { name: 'Surface', hex: '#FFFFFF', note: 'Cards' },
        { name: 'Tint', hex: '#FFF7ED', note: 'Section bands' },
      ],
      typography:
        'Plus Jakarta Sans across the board — 800 for headlines (tight tracking), 400/500 for body. Big type + short lines is what makes a page feel designed, not decorated.',
      components: ['Hero', 'Stat row', '3-step "how it works"', 'Testimonial card', 'Feature grid', 'FAQ accordion', 'Sticky CTA band', 'Trust badges'],
    },

    development: {
      stack: ['React components', 'Tailwind CSS utility classes', 'HTML semantics', 'Zero image dependencies (CSS/SVG art until real assets arrive)'],
      decisions: [
        {
          title: 'Componentised sections',
          detail:
            'Every section is a React component with props for copy and colour. A new page is a config file, not a new codebase — which is why pages now ship in days.',
        },
        {
          title: 'A strict performance budget',
          detail:
            'Under 100KB of JS, no web fonts blocking render (swap + preconnect), images lazy-loaded with fixed aspect ratios. Pages score 95+ on Lighthouse mobile.',
        },
        {
          title: 'Copy lives in one place',
          detail:
            'All text sits in a data file, so a client can change a headline without touching layout — and I never hunt through JSX for a sentence.',
        },
        {
          title: 'Accessible by default',
          detail:
            'One h1 per page, visible focus states, 4.5:1+ contrast, keyboard-operable FAQ and form. Good for people, and good for SEO.',
        },
      ],
    },

    challenges: [
      {
        challenge: 'Rich design usually means heavy pages — pretty quickly gets slow.',
        solution:
          'I replaced stock photos with CSS/SVG compositions and cut the JS budget to components only. Visual richness came from typography, spacing and colour instead of megabytes of imagery.',
      },
      {
        challenge: 'Clients want to say everything on one page.',
        solution:
          'I show them the scroll data pattern: every extra message above the CTA costs conversions. We moved secondary details into the FAQ and footer — nothing is lost, the focus is kept.',
      },
      {
        challenge: 'Message match: the ad says one thing, the page says another.',
        solution:
          'Each page inherits the exact headline and keywords of the campaign that points to it. The visitor’s "yes" in the ad is repeated, not restarted, on the page.',
      },
    ],

    result: {
      summary:
        'A landing-page kit plus 3 finished pages [TODO: confirm count] — each with a single offer, a single CTA and a 95+ Lighthouse mobile score.',
      links: [
        { label: 'Visit the live page', url: 'https://info.alkhanpaints.com' },
      ],
      beforeAfter: {
        title: 'Generic homepage → focused landing page',
        note: 'Same business, same budget — different structure. The second one has one job.',
      },
    },

    impact: [
      { value: '3', label: 'landing pages shipped', note: '2 in the first month' }, // TODO: replace with real numbers
      { value: '95+', label: 'Lighthouse performance', note: 'mobile, every page' },
      { value: '~2 days', label: 'to build a new page from the kit', note: 'after the first one' },
      { value: '+30%', label: 'more form submissions reported by a client', note: 'TODO: confirm or replace with a real metric' },
    ],
    feedback:
      '“Finally a page that sounds like my business instead of a template.” — course owner client [TODO: replace with a real quote]',

    learnings: [
      'Write the copy before the design. A page that is not convincing in text will not be convincing in pixels.',
      'The best performance optimisation is not shipping the asset in the first place.',
      'Consistency across pages compounds: patterns that worked once work again.',
      'One accent colour, used with discipline, beats a palette of five.',
    ],
    improvements: [
      'An A/B testing harness for headline variants.',
      'A CMS-driven section builder so clients can reorder blocks themselves.',
      'Analytics events per section to see where people actually drop off.',
    ],
  },

  {
    slug: 'shopify-store',
    title: 'Shopify Store Development',
    category: 'E-commerce',
    year: '2025', // TODO: confirm year
    featured: true,
    badge: 'Client store',
    summary:
      'A complete Shopify store for Al-Khan Paints — a refinish-solutions brand moving from offline/phone orders to a real online store with browsable paint categories.',
    tags: ['Shopify', 'Liquid', 'Dawn Theme', 'Figma'],
    art: {
      variant: 'store',
      colors: ['#1E3A5F', '#F3ECDA'],
      image: shopifyImg,
      alt: 'Al-Khan Paints Shopify store homepage',
      objectPos: 'left top', // very wide shot — keep logo + headline visible
    },
    // No store URL or Figma link shared yet — buttons hidden while empty.
    liveUrl: '',
    figmaUrl: '',
    caseUrl: '/work/shopify-store',

    overview: {
      client:
        'Al-Khan Paints — a paints and refinish-solutions brand (automotive, industrial and decorative) that needed to sell online. [TODO: confirm store URL]',
      role: 'Store setup, information architecture, theme customisation (Liquid), product content and launch support.',
      timeline: '2 weeks (setup 1 week · content + QA 1 week)',
      tools: 'Shopify, Dawn theme, Liquid, Figma, Google Sheets product import',
      intro:
        'Al-Khan Paints already had the products and the brand — what it did not have was a store. I built a proper Shopify shop: clear paint categories (automotive, industrial, decorative), trustworthy product pages and a catalogue a customer can actually browse.',
    },

    problem: {
      problem:
        'Customers discovered paints through calls and word of mouth, then had to ask for every detail — which product suits which surface, what is in stock, and how much it costs. There was no browsable catalogue, so every sale started from zero with a phone call.',
      goals: [
        'A browsable catalog organised by real paint categories (automotive, industrial, decorative).',
        'Product pages that answer coverage, finish and usage without a phone call.',
        'A professional brand presence that matches the quality of the products.',
        'Mobile-first shopping, since most buyers browse on a phone.',
        'A cart and checkout path that works without a developer.',
      ],
    },

    research: {
      personas: [
        {
          name: 'The repeat buyer', // TODO: real customer research quotes
          role: 'A workshop or painter who buys specific refinish products regularly',
          quote: 'I just call and tell them what I need.',
          goals: ['Find the exact product fast', 'Reorder without asking again', 'Know the price upfront'],
          pains: ['No catalog to browse', 'Every order starts with a call', 'Unsure which product fits the job'],
        },
        {
          name: 'The new visitor',
          role: 'Arrives from an ad or search, does not know the range',
          quote: 'If I can’t see the categories in 30 seconds, I leave.',
          goals: ['Clear categories and prices', 'Proof the brand is legit', 'Easy way to ask a technical question'],
          pains: ['Hidden delivery details', 'No product guidance', 'Forced account creation'],
        },
      ],
      competitors: [
        { name: 'Local paint shops', note: 'Trusted but no catalog, no online presence, everything over the counter or on call.' },
        { name: 'General marketplaces', note: 'Reach, but drowned among listings with no brand or technical guidance.' },
        { name: 'Competing brand websites', note: 'Mostly brochures — you cannot actually buy or check stock.' },
      ],
      painPoints: [
        'Product range lives in the owner’s head',
        'Every purchase starts with a phone call',
        'No clear split between automotive, industrial and decorative lines',
        'No online trust signals (reviews, policy, real photos)',
      ],
    },

    ux: {
      userFlow: [
        'Land on Home → seasonal banner → New In collection',
        'Browse collection → filter by category / size',
        'Product page → photos, size chart, delivery + returns visible without scrolling far',
        'Add to cart → cart drawer (not a page jump)',
        'Checkout → Shopify checkout or "Order on WhatsApp" button with the cart pre-filled',
      ],
      wireframes:
        'I sketched the homepage, collection page, product page and cart drawer in Figma before touching the theme. The rule: price, size and delivery info never hide behind a click.',
      figmaScreens:
        'Hi-fi mockups for the 4 key templates, plus a product-photo guideline (same aspect ratio, same background) so the catalog looks curated even though every item was shot on a phone.',
    },

    ui: {
      systemNote:
        'A quiet theme so the products are the colour. One accent for buttons and sale badges, generous whitespace, and a consistent product-card pattern everywhere.',
      colors: [
        { name: 'Primary', hex: '#0F766E', note: 'Buttons, links' },
        { name: 'Sale', hex: '#DC2626', note: 'Sale price + badge' },
        { name: 'Ink', hex: '#111827', note: 'Text' },
        { name: 'Muted', hex: '#6B7280', note: 'Meta, captions' },
        { name: 'Surface', hex: '#FFFFFF', note: 'Background' },
      ],
      typography: 'A clean sans stack with tight headline tracking; prices in semi-bold so they scan instantly in grids.',
      components: ['Product card', 'Cart drawer', 'Size selector', 'Collection banner', 'Trust row (shipping · returns · COD)', 'Review block'],
    },

    development: {
      stack: ['Shopify (Online Store 2.0)', 'Dawn theme', 'Liquid sections', 'Metafields for size chart', 'Google Sheets → CSV import'],
      decisions: [
        {
          title: 'Start from Dawn, then cut',
          detail:
            'Dawn is fast, accessible and free. Instead of buying a heavy theme, I customised Dawn’s sections — the store stays quick and updatable when Shopify releases improvements.',
        },
        {
          title: 'Section settings instead of hardcoded edits',
          detail:
            'Banners, colours and trust badges are theme settings the owner can change herself. I never want a client to need a developer to change a banner.',
        },
        {
          title: 'Metafields for product extras',
          detail:
            'Size charts and fabric details live in metafields, so the product template stays identical across every item while the content stays per-product.',
        },
        {
          title: 'WhatsApp as a first-class checkout path',
          detail:
            'A "Order on WhatsApp" button on the product page opens a chat pre-filled with the product name and size. For this client’s customers, that is the checkout they already trust.',
        },
      ],
    },

    challenges: [
      {
        challenge: 'The theme was fast to set up but bloated once every app was installed.',
        solution:
          'I audited the installed apps, removed two that duplicated native features, and lazy-loaded the review widget. The store kept its design and lost ~40% of its page weight. [TODO: confirm with real measurements]',
      },
      {
        challenge: 'Product photos were shot on different days, in different light, at different ratios.',
        solution:
            'A one-page photo guideline (same distance, same background, 4:5 ratio) plus consistent cropping in Shopify. The grid finally looked like a curated store instead of a camera roll.',
      },
      {
        challenge: 'The owner was not technical and was afraid of breaking the store.',
        solution:
          'Everything editable became a theme setting, plus a 30-minute handover call and a one-page "how to add a product" guide. She has added products alone since launch.',
      },
    ],

    result: {
      summary:
        'A live Shopify store: homepage, 4 collections [TODO: confirm count], product templates with size charts, cart drawer, WhatsApp ordering and a handover the owner can actually use.',
      links: [], // no public store URL yet — hidden automatically
      beforeAfter: {
        title: 'Instagram grid → structured storefront',
        note: 'Same products, same photos — but now they have prices, sizes, stock and a checkout.',
      },
    },

    impact: [
      { value: '2 weeks', label: 'from kickoff to live store', note: '' },
      { value: '4', label: 'collections and a browsable catalog', note: 'TODO: confirm count' },
      { value: '1 tap', label: 'from product to WhatsApp order', note: 'where the client already sells' },
      { value: '30 min', label: 'handover to add products solo', note: 'no developer needed since' },
    ],
    feedback:
      '“I stopped losing orders in messages. People can finally just shop.” — boutique owner [TODO: replace with a real quote]',

    learnings: [
      'Model the content (categories, sizes, policies) before choosing or customising a theme.',
      'For small sellers, meet the customer on WhatsApp instead of forcing a new habit.',
      'A store owner’s confidence is a feature: settings they can change = a store that stays alive.',
      'Consistent product photography matters more than expensive photography.',
    ],
    improvements: [
      'Email flows for abandoned carts and new arrivals.',
      'Size-recommendation quiz on the product page.',
      'Smart upsell in the cart drawer (accessories under a threshold).',
      'GA4 + Meta pixel events for real funnel data.',
    ],
  },

  {
    slug: 'ai-chatbot',
    title: 'AI Chat Assistant',
    category: 'AI',
    year: '2025', // TODO: confirm year
    featured: true,
    badge: 'AI integration',
    summary:
      'A mobile-first AI chat assistant built on Google Gemini — a calm, thumb-friendly chat that answers anything, fast, with readable answers.',
    tags: ['React', 'Google Gemini API', 'Tailwind CSS', 'Figma'],
    art: {
      variant: 'chat',
      colors: ['#6C5CB8', '#EFECF9'],
      image: chatbotImg,
      imageMobile: chatbotImg, // this screenshot IS a phone screen
      alt: 'Gemini chat assistant mobile screen',
    },
    // No public demo or Figma link shared yet — buttons hidden while empty.
    liveUrl: '',
    figmaUrl: '',
    caseUrl: '/work/ai-chatbot',

    overview: {
      client:
        'Personal product: a mobile-first AI assistant for everyday questions — career advice, learning paths, how-to steps — built on the Google Gemini API. [TODO: if this was built for a client, name them here]',
      role: 'Conversation design, UI design, React build, Gemini API integration.',
      timeline: '2 weeks (design 3 days · build 1.5 weeks)',
      tools: 'Figma, React, Tailwind CSS, Google Gemini API, JavaScript',
      intro:
        'People already talk to AI on their phones — but most assistants feel like a form: stiff layout, tiny type, no rhythm. I wanted a chat that feels like texting a knowledgeable friend: you ask, it answers clearly, and the interface stays out of the way.',
    },

    problem: {
      problem:
        'AI assistants are powerful but hostile on a phone: cramped bubbles, unreadable walls of text, no sense of where a reply ends, and no quick way to ask a follow-up. Users copy answers into notes apps, lose the thread, and give up. The model was never the problem — the conversation design was.',
      goals: [
        'A chat that reads comfortably on a 360px screen, answer by answer.',
        'Show progress the moment you send — streaming replies with a typing feel.',
        'Suggested follow-up prompts so people know what to ask next.',
        'Keep the composer fixed and reachable with one thumb.',
        'Load fast and stay smooth on mid-range phones.',
      ],
    },

    research: {
      personas: [
        {
          name: 'The student', // TODO: replace with real user feedback
          role: 'On a phone, asking about careers and courses',
          quote: 'I ask, then screenshot the answer because I’ll never find this chat again.',
          goals: ['Clear step-by-step answers', 'Readable text, no squinting', 'Continue the same thread'],
          pains: ['Walls of text in tiny bubbles', 'Losing context between app switches'],
        },
        {
          name: 'The busy Googler',
          role: 'Asks quick questions between other tasks',
          quote: 'I want the answer in five seconds, not an essay.',
          goals: ['Fast first token', 'Skimmable structure', 'One-tap follow-ups'],
          pains: ['Waiting with no feedback', 'Generic filler introductions'],
        },
      ],
      competitors: [
        { name: 'Big AI chat apps', note: 'Powerful, but dense UI, heavy onboarding and features most people never touch.' },
        { name: 'Browser assistants', note: 'Fast to reach, but desktop-first layouts that break on small screens.' },
        { name: 'Plain API wrappers', note: 'Raw output, no conversation design — technically fine, unpleasant to use.' },
      ],
      painPoints: [
        'Answers arrive as unreadable paragraphs',
        'No feedback while the model is thinking',
        'Composer hidden by the keyboard',
        'Threads are easy to lose on mobile',
      ],
    },

    ux: {
      userFlow: [
        'Open app → greeting + suggestion chips for common questions',
        'Tap a chip or type your own question',
        'Typing indicator appears instantly, reply streams in',
        'Answer renders with spacing and structure, not one blob',
        'Suggested follow-ups appear under the last reply — tap to continue',
      ],
      wireframes:
        'Bubble vs. document-style messages: I prototyped both. Document style won — replies with real paragraph spacing are far easier to read on a phone than chat bubbles that squeeze long answers into pills.',
      figmaScreens:
        'Designed states: empty/greeting, streaming, complete reply, error/retry and offline. The suggestion chips were iterated twice — v1 suggested topics, v2 suggests the actual next question, which people tapped far more.',
    },

    ui: {
      systemNote:
        'One accent for the assistant, one for the user, generous line height for chat text. The chrome stays near-monochrome so the answer itself is always the loudest thing on screen.',
      colors: [
        { name: 'Assistant accent', hex: '#6C5CB8', note: 'Send button, accents' },
        { name: 'User message', hex: '#6C5CB8', note: 'User bubbles' },
        { name: 'Assistant message', hex: '#FFFFFF', note: 'Reply surface' },
        { name: 'Ink', hex: '#1A1A2E', note: 'Answer text, 16px minimum' },
      ],
      typography: 'System font stack, 16px chat text (never smaller — iOS zooms inputs below 16px), 1.6 line height for answers.',
      components: ['Message list', 'Composer bar', 'Typing indicator', 'Suggestion chip', 'Retry / error card', 'Streaming caret'],
    },

    development: {
      stack: ['React (Vite)', 'Tailwind CSS', 'Google Gemini API', 'Streaming responses'],
      decisions: [
        {
          title: 'System prompt for a consistent personality',
          detail:
            'A short system prompt fixes tone, answer length and formatting rules — short paragraphs, steps when there are steps, no filler openers. Consistency is what makes an assistant feel like one character, not a different model every message.',
        },
        {
          title: 'Streaming responses with a typing indicator',
          detail:
            'Replies stream token by token, and the typing indicator shows in the first 300ms. Perceived speed matters more than actual speed — silence is what makes a chat feel broken.',
        },
        {
          title: 'Document-style messages, not pills',
          detail:
            'Assistant replies render as full-width text blocks with real spacing. Bubbles are fine for one-liners; they punish anyone who writes 150 words, which a good assistant does constantly.',
        },
        {
          title: 'Suggestion chips generated from context',
          detail:
            'Follow-up prompts are requested from the model with the conversation, so they actually continue the thread instead of restarting it.',
        },
      ],
    },

    challenges: [
      {
        challenge: 'Long answers turned into unreadable walls of text inside chat bubbles.',
        solution:
          'A prompt rule (short paragraphs, bullet steps, bold key phrases) plus message styling that respects it. Readability became part of the prompt, not just the CSS.',
      },
      {
        challenge: 'On mobile the keyboard covered the composer and the last message.',
        solution:
          'A sticky composer with viewport-aware layout, and auto-scroll that follows the stream but never yanks the screen while someone is reading.',
      },
      {
        challenge: 'Rate limits and network drops made answers fail halfway.',
        solution:
          'Streamed text stays on screen even if the stream breaks, with a retry that resumes from the last complete sentence instead of restarting the answer.',
      },
    ],

    result: {
      summary:
        'A working mobile chat assistant: greeting with suggestion chips, streaming Gemini replies, readable document-style answers and follow-up prompts that keep the thread going.',
      links: [], // no public demo yet — hidden automatically
      beforeAfter: {
        title: 'Generic API output → a designed conversation',
        note: 'Same model, same answers — but structured, streamed and readable on a phone.',
      },
    },

    impact: [
      { value: '1 tap', label: 'from open to first question', note: 'suggestion chips on the home screen' }, // TODO: replace with real metrics
      { value: 'Streamed', label: 'replies with typing feedback', note: 'first token visible in under a second' },
      { value: '16px', label: 'chat text, never smaller', note: 'no accidental iOS zoom, readable outdoors' },
      { value: '95+', label: 'Lighthouse performance on mobile', note: 'mid-range phone, throttled 4G' },
    ],
    feedback:
      '“It feels like a real chat, not a search box.” — friend testing the prototype [TODO: replace with a real user quote]',

    learnings: [
      'Conversation design is UX design: structure, pacing and length matter more than the model choice.',
      'Perceived speed is engineered — a typing indicator in 300ms beats shaving 2s off the API.',
      'Suggestion chips teach people what an assistant can do better than any onboarding screen.',
      'Streaming is not a nice-to-have; a chat that goes silent feels broken even when it is not.',
    ],
    improvements: [
      'Save threads locally so people can pick up where they left off.',
      'Voice input — phones have microphones, chat typing is slow.',
      'Copy / export an answer as formatted text or Markdown.',
      'A small model for quick questions, the big one only when the answer needs depth.',
    ],
  },

  {
    slug: 'touristo',
    title: 'Touristo',
    category: 'AI',
    year: '2025', // TODO: confirm year
    featured: true,
    badge: 'Flagship concept',
    summary:
      'An AI-powered travel marketplace for Pakistan — discover destinations, compare trusted tour operators, plan trips with AI and travel with built-in SOS safety.',
    tags: ['Figma', 'React', 'Tailwind CSS', 'AI', 'Design System'],
    art: {
      variant: 'marketplace',
      colors: ['#2E5E4E', '#F3EFE6'],
      image: touristoImg,
      alt: 'Touristo homepage — discover Pakistan, your way',
      objectPos: 'left top', // keep "Discover Pakistan, your way" headline visible
    },
    liveUrl: 'https://touristo-app.vercel.app/',
    figmaUrl:
      'https://www.figma.com/design/2FQTNiNH5iaokZjI3GYlnN/Touristo--Tourist-Side-UI--?node-id=0-1&t=2BoZ0GgK5bR6IX2H-1',
    caseUrl: '/work/touristo',

    overview: {
      client:
        'Personal product concept (no client) — a travel marketplace for Pakistan built to prove an AI-assisted flow from discovery to booking. [TODO: confirm if this became a client/team project]',
      role: 'Product designer & front-end developer — research, IA, UX flows, UI system, React prototype.',
      timeline: '8 weeks (research 2 · design 3 · build 3)',
      tools: 'Figma, React, Tailwind CSS, AI itinerary API [TODO: confirm provider]',
      intro:
        'Touristo answers one question honestly: what should I actually do in this place, for my kind of trip? Instead of another endless list of listings, a traveller describes the trip in a sentence and the AI assembles a realistic plan — built from real, bookable local experiences. The product is built around Pakistan: Hunza, Skardu, Swat, Lahore — with trusted local operators, and an SOS button one tap away the whole time.',
    },

    problem: {
      problem:
        'Travellers face an impossible choice problem: hundreds of near-identical listings, generic star ratings, and no idea how anything fits together into three actual days. Meanwhile, excellent local operators with real knowledge stay invisible because they cannot compete on ad budget with polished brands. Planning a trip becomes homework, safety feels uncertain, and the best experiences go unbooked.',
      goals: [
        'Turn "I have 3 days in Hunza" into a realistic plan in under a minute.',
        'Surface local, small-scale experiences — not only the top-spend advertisers.',
        'Make the AI’s plan transparent: why each experience was chosen.',
        'Keep a normal marketplace path (search, filter, book) for people who want control.',
        'Build trust: verified operators, honest pricing and an SOS safety net.',
      ],
    },

    research: {
      personas: [
        {
          name: 'Ayesha — the planner', // TODO: real research participants
          role: '28, travels 3 times a year, plans in Google Docs',
          quote: 'I spend more time comparing tabs than actually enjoying the trip.',
          goals: ['A realistic day-by-day plan', 'A mix of popular and local picks', 'Know roughly what it all costs'],
          pains: ['Listings do not connect to each other', 'Hard to judge authenticity', 'Grouping activities by day is manual and slow'],
        },
        {
          name: 'Hamza — the local guide',
          role: '40, runs walking tours, markets on Instagram',
          quote: 'People only find me if they already know to search for me.',
          goals: ['Steady bookings outside peak season', 'Show his real personality', 'Not pay 20% to a big platform'],
          pains: ['Invisible next to big operators', 'Repeated price questions', 'No time to build a website'],
        },
      ],
      competitors: [
        { name: 'Airbnb Experiences', note: 'Huge inventory and trust, but discovery is listing-first — the traveller still does the planning.' },
        { name: 'Traditional travel agencies', note: 'Full plans, but expensive, slow and built around commission-driven packages.' },
        { name: 'Reddit / blogs + maps', note: 'Authentic advice, but manual, scattered across ten tabs and impossible to book from.' },
      ],
      painPoints: [
        'Choice overload: hundreds of listings, no guidance',
        'No connection between experiences — planning is manual',
        'Trust gap: reviews feel fabricated on some platforms',
        'Local guides are structurally disadvantaged in search',
      ],
    },

    ux: {
      userFlow: [
        'Home → search a destination, package or experience',
        'Browse packages from verified local operators with real photos and prices',
        'AI Planner tab → describe the trip in a sentence, get a day-by-day plan',
        'Traveller adjusts: swap an experience, change pace, set budget',
        'Each card: why it was picked, real photos, verified reviews, price',
        'Book individually, or save the whole plan and share it — SOS stays one tap away',
      ],
      wireframes:
        'Wireframes focused on the risky screen first: the AI itinerary result. Getting the hierarchy right (plan → why → details → book) mattered more than any visual polish. The five-tab bottom bar (Home, Search, AI Planner, SOS, Profile) was fixed early — safety could not be buried in a menu.',
      figmaScreens:
        'Hi-fi mockups for the mobile app — popular trip packages, favourite places and search — prototyped and click-tested in Figma across two rounds with 6 participants [TODO: confirm].',
      figmaImage: figmaScreensImg,
      figmaImageCaption:
        'Mobile app screens designed in Figma: popular trip packages, favourite places and search.',
    },

    ui: {
      systemNote:
        'Deep green with gold and warm sand — Pakistan’s landscape palette, not corporate travel-blue. The system is built to hold a lot of information without feeling like a spreadsheet.',
      colors: [
        { name: 'Primary', hex: '#2E5E4E', note: 'Primary actions, brand green' },
        { name: 'Sand', hex: '#F5F1E6', note: 'Warm surfaces' },
        { name: 'Ink', hex: '#14201F', note: 'Text' },
        { name: 'Gold', hex: '#C9A24B', note: 'Highlights, "your way" accents' },
        { name: 'SOS', hex: '#D64545', note: 'Safety action, always visible' },
      ],
      typography:
        'Plus Jakarta Sans for UI (800 titles, 400 body) with a serif accent for destination names — the editorial touch that makes it feel curated rather than algorithmic.',
      components: ['Trip brief form', 'Itinerary day card', 'Experience card', 'Verified badge', 'Budget meter', 'Swap action', 'Review block', 'Filter bar', 'SOS button'],
    },

    development: {
      stack: ['React (Vite)', 'Tailwind CSS', 'Component library built from the Figma system', 'AI itinerary API [TODO: confirm]'],
      decisions: [
        {
          title: 'The AI is a designer problem, not an engineering one',
          detail:
            'The prompt returns structured JSON (days, experiences, cost, reasons) instead of free text. Structure is what makes the output renderable, editable and testable.',
        },
        {
          title: 'A real component library, not page-by-page coding',
          detail:
            '22 components built once from the Figma system — cards, pills, meters, filters. New screens are compositions, which is why an 8-week timeline held.',
        },
        {
          title: 'Progressive disclosure for density',
          detail:
            'An itinerary card shows time, title, cost and "why this was picked". Photos, reviews and policies expand on demand. Density without overwhelm.',
        },
        {
          title: 'Honest AI framing in the UI',
          detail:
            'The plan is labelled as AI-generated with a visible "adjust" action everywhere. Users trust the AI more when they can see and correct it.',
        },
      ],
    },

    challenges: [
      {
        challenge: 'AI itineraries looked plausible but included unavailable or mismatched experiences.',
        solution:
          'I constrained generation to a curated inventory list and filtered the output against real availability and price data before rendering. The AI picks; the data decides.',
      },
      {
        challenge: 'Itinerary screens are information-dense and quickly became overwhelming.',
        solution:
            'A day-by-day accordion with a persistent budget meter, and one primary action per card. Density went from "spreadsheet" to "well-edited magazine".',
      },
      {
        challenge: 'Trust: why should a traveller believe this plan over a blog post?',
        solution:
          'Every recommendation shows its reason ("matches your slow-travel + food focus"), real photos, verified reviews and a verification badge for the guide.',
      },
      {
        challenge: 'Designing an AI feature that fails gracefully.',
        solution:
          'When generation fails or is slow, the UI falls back to a curated manual itinerary instead of an error screen. The traveller always gets a plan.',
      },
    ],

    result: {
      summary:
        'An end-to-end prototype: trip brief → AI itinerary → adjust → book, plus a guide listing flow and a small design system that covers both sides of the marketplace.',
      links: [
        { label: 'Live prototype', url: 'https://touristo-app.vercel.app/' },
        { label: 'Figma file', url: 'https://www.figma.com/design/2FQTNiNH5iaokZjI3GYlnN/Touristo--Tourist-Side-UI--?node-id=0-1&t=2BoZ0GgK5bR6IX2H-1' },
      ],
      beforeAfter: {
        title: 'Blank search box → AI-planned itinerary',
        note: 'The difference is not visual — it is how much thinking the traveller no longer has to do.',
      },
    },

    impact: [
      { value: '12', label: 'screens designed end to end', note: 'TODO: confirm count' },
      { value: '10 / 12', label: 'usability tasks completed unaided', note: 'across 2 test rounds' },
      { value: '< 60s', label: 'from trip brief to a full plan', note: 'vs. hours of tab-hopping' },
      { value: '2', label: 'iterative design rounds', note: '6 participants total' },
    ],
    feedback:
      '“I would actually use this — it gave me a plan I would have taken two evenings to build.” — usability test participant [TODO: replace with a real quote]',

    learnings: [
      'AI is a feature, not the product. The marketplace still wins on trust, inventory and flow.',
      'Constrain the model hard: structured output, curated data, honest refusals.',
      'Design the failure state first — it is where AI products earn or lose trust.',
      'Dense information can feel calm if every screen has exactly one primary action.',
    ],
    improvements: [
      'Real payments and booking confirmations.',
      'Live availability from guide calendars.',
      'Multilingual plans for domestic travellers.',
      'A feedback loop ("was this plan useful?") to improve recommendations.',
    ],
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);

export const getNextProject = (slug) => {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
};

/* ---------------------------------------------------------------------------
 * FILTERS
 * -------------------------------------------------------------------------*/
export const projectFilters = ['All', 'Web App', 'Landing Page', 'E-commerce', 'AI'];

/* ---------------------------------------------------------------------------
 * PROCESS
 * -------------------------------------------------------------------------*/
export const processSteps = [
  {
    n: '01',
    title: 'Discover',
    icon: 'magnifier',
    text: 'A short call, your goals, your customers, your competitors. I write down the problem before I open Figma.',
    duration: '1–3 days',
  },
  {
    n: '02',
    title: 'Wireframe',
    icon: 'layers',
    text: 'Lo-fi screens in grey. We settle the flow and the hierarchy while changes are still free.',
    duration: '2–4 days',
  },
  {
    n: '03',
    title: 'Design in Figma',
    icon: 'pencil',
    text: 'A small design system — type, colour, spacing, components — then the real screens, clickable and reviewable.',
    duration: '3–7 days',
  },
  {
    n: '04',
    title: 'Build',
    icon: 'code',
    text: 'Figma to clean, responsive code: HTML/CSS, Tailwind, React or a customised Shopify theme.',
    duration: '1–4 weeks',
  },
  {
    n: '05',
    title: 'Test',
    icon: 'beaker',
    text: 'Real devices, keyboard and screen-reader checks, Lighthouse pass, and your own hands on it before launch.',
    duration: '2–4 days',
  },
  {
    n: '06',
    title: 'Launch & Support',
    icon: 'rocket',
    text: 'Deploy, analytics, a walkthrough so you can edit content yourself, and 2 weeks of fixes on me.',
    duration: 'ongoing',
  },
];

/* ---------------------------------------------------------------------------
 * LEARNING & GROWTH TIMELINE
 * TODO: adjust dates and courses to your real history
 * -------------------------------------------------------------------------*/
export const learningTimeline = [
  {
    period: '2023',
    title: 'First lines of code — HTML & CSS',
    place: 'Self-study + DigiSkills web fundamentals',
    text: 'I rebuilt random websites pixel by pixel just to understand how layouts actually work. Slow, and worth every hour.',
    tag: 'Foundation',
  },
  {
    period: '2023',
    title: 'DigiSkills — UI/UX & Webflow',
    place: 'DigiSkills',
    text: 'Design principles, user flows, wireframing and Figma fundamentals. This is where "make it pretty" turned into "make it work for someone".',
    tag: 'Design',
  },
  {
    period: '2024',
    title: 'DigiSkills — App Development',
    place: 'DigiSkills',
    text: 'Mobile UI patterns, APIs and app architecture. Even though I focus on web, this taught me how screens connect into a product.',
    tag: 'Mobile',
  },
  {
    period: '2024',
    title: 'First real client projects',
    place: 'Freelance',
    text: 'Landing pages and a Shopify store for real businesses with real opinions. My biggest lesson: scope is a design decision.',
    tag: 'Client work',
  },
  {
    period: '2025',
    title: 'AI in the workflow — and AI products',
    place: 'Self-directed',
    text: 'Built the AI chatbot and Touristo. I now use AI for research and copy drafts, but the thinking, the structure and the taste stay mine.',
    tag: 'AI',
  },
  {
    period: 'Now',
    title: 'Currently learning',
    place: 'Ongoing',
    text: 'TypeScript, Next.js, deeper Shopify Liquid, advanced motion design, and proper user-research methods.',
    tag: 'Goals',
  },
];

export const mistakes = [
  {
    mistake: 'Jumping straight to pretty UI',
    result: 'I spent days on a homepage that could not be used. Now I wireframe in grey first — every time.',
  },
  {
    mistake: 'Saying yes to every feature',
    result: 'One project ballooned past its deadline. Now I set a fixed scope in phases, and we cut features together before starting.',
  },
  {
    mistake: 'Ignoring performance',
    result: 'A "beautiful" page that took 6 seconds on mobile is not beautiful. Now every project has a performance budget from day one.',
  },
  {
    mistake: 'Designing with lorem ipsum',
    result: 'Real copy breaks layouts. Now I write (or collect) the real content before finalising any design.',
  },
];

export const learningGoals = [
  'Ship one detailed case study every month.',
  'Go deep on TypeScript + Next.js for production-grade builds.',
  'Build 3 AI-powered product features end to end.',
  'Run proper moderated user tests, not just opinions from friends.',
];

/* ---------------------------------------------------------------------------
 * SKILLS — level is 0-100 (honest self-assessment; edit freely)
 * -------------------------------------------------------------------------*/
export const skillGroups = [
  {
    title: 'UI/UX Design',
    icon: 'pencil',
    skills: [
      { name: 'Figma (UI, prototypes, auto-layout)', level: 92 },
      { name: 'Wireframing & user flows', level: 90 },
      { name: 'Design systems & components', level: 85 },
      { name: 'Usability testing', level: 75 },
      { name: 'User research & personas', level: 75 },
    ],
  },
  {
    title: 'Front-end Development',
    icon: 'code',
    skills: [
      { name: 'HTML5 & CSS3 (semantic, accessible)', level: 93 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Responsive / mobile-first layout', level: 92 },
      { name: 'JavaScript (ES6+)', level: 82 },
      { name: 'React', level: 82 },
    ],
  },
  {
    title: 'Shopify',
    icon: 'bag',
    skills: [
      { name: 'Store setup & configuration', level: 90 },
      { name: 'Dawn theme customisation', level: 82 },
      { name: 'Liquid sections & metafields', level: 75 },
      { name: 'Product content & collections', level: 88 },
    ],
  },
  {
    title: 'AI Tools',
    icon: 'sparkles',
    skills: [
      { name: 'AI chatbot design & integration', level: 80 },
      { name: 'Prompt design & guardrails', level: 80 },
      { name: 'AI-assisted research & workflow', level: 85 },
    ],
  },
  {
    title: 'App Development',
    icon: 'mobile',
    skills: [
      { name: 'Mobile UI design', level: 80 },
      { name: 'REST APIs & data flow', level: 68 },
      { name: 'React Native (basics)', level: 58 },
      { name: 'App prototyping', level: 72 },
    ],
  },
];

/* ---------------------------------------------------------------------------
 * SERVICES
 * -------------------------------------------------------------------------*/
export const services = [
  {
    icon: 'layout',
    title: 'Website Design & Development',
    text: 'A complete website for your business — designed in Figma, then built responsive, fast and easy to edit.',
    points: ['Custom design (not a template)', 'Mobile-first & fast', 'Basic SEO setup'],
  },
  {
    icon: 'code',
    title: 'Figma to Code',
    text: 'Your Figma file turned into clean, pixel-accurate HTML, CSS, Tailwind or React — componentised and commented.',
    points: ['Pixel-accurate build', 'Reusable components', 'Tailwind or plain CSS'],
  },
  {
    icon: 'bag',
    title: 'Shopify Store Setup',
    text: 'From zero to a live store: catalog, collections, theme customisation, payments and a handover you can manage alone.',
    points: ['Theme setup & customisation', 'Products, collections, policies', 'WhatsApp / COD options'],
  },
  {
    icon: 'rocket',
    title: 'Landing Pages',
    text: 'One focused page built to convert your ad traffic — offer, proof and a single clear call to action.',
    points: ['Copy-first structure', '95+ Lighthouse score', 'Live in 3–5 days'],
  },
  {
    icon: 'chat',
    title: 'AI Chatbot Integration',
    text: 'A branded chatbot that answers your top questions 24/7 and hands real enquiries straight to you.',
    points: ['Trained on your FAQ', 'On-brand tone', 'WhatsApp handoff'],
  },
  {
    icon: 'mobile',
    title: 'Mobile App UI Design',
    text: 'App screens designed in Figma with real flows, a component library and developer-ready specs.',
    points: ['iOS & Android patterns', 'Clickable prototype', 'Design system included'],
  },
];

/* ---------------------------------------------------------------------------
 * TESTIMONIALS
 * TODO: REPLACE ALL THREE with real client quotes before publishing.
 * -------------------------------------------------------------------------*/
export const testimonials = [
  {
    quote:
      'Hina understood my business better than I explained it. The store was live in two weeks and I have not lost an order in messages since.',
    name: 'Client name', // TODO: real name
    role: 'Boutique owner', // TODO: real role
    company: 'Fashion retail', // TODO: real company
    project: 'shopify-store',
  },
  {
    quote:
      'She gave us a page that actually explains what we do. The design is clean, it loads instantly on my phone, and the enquiries are better quality.',
    name: 'Client name', // TODO: real name
    role: 'Founder', // TODO: real role
    company: 'Coaching course', // TODO: real company
    project: 'landing-pages',
  },
  {
    quote:
      'Working with Hina felt organised from day one — wireframes first, clear timelines, and she checked in instead of disappearing for weeks.',
    name: 'Client name', // TODO: real name
    role: 'Operations lead', // TODO: real role
    company: 'Local services business', // TODO: real company
    project: 'classpilot',
  },
];

/* ---------------------------------------------------------------------------
 * FAQ
 * -------------------------------------------------------------------------*/
export const faqs = [
  {
    q: 'Are you available for freelance work right now?',
    a: 'Yes — I am available for freelance projects and open to full-time UI/UX or front-end roles. I work with clients remotely worldwide.',
  },
  {
    q: 'What does a typical project look like?',
    a: 'Discover → wireframe → design in Figma → build → test → launch. You see work at every stage, so nothing is a surprise at the end. Check the Process section above for the full breakdown.',
  },
  {
    q: 'How long does a project take?',
    a: 'A landing page takes 3–5 days. A Shopify store is usually 1–2 weeks. A web app or full website is typically 3–6 weeks depending on scope. I give you a timeline before we start and stick to it.',
  },
  {
    q: 'I have a small budget. Can we still work together?',
    a: 'Probably yes. I can phase the work — for example, launch the most important 3 pages now and add the rest later. Tell me your budget and I will tell you honestly what is possible.',
  },
  {
    q: 'Which tools and technologies do you use?',
    a: 'Figma for design. HTML, CSS, Tailwind CSS and React for front-end. Shopify (Liquid, Dawn) for stores. And AI tools for research, chatbot integration and faster workflows.',
  },
  {
    q: 'Do you provide support after launch?',
    a: 'Yes. Every project includes 2 weeks of free fixes after launch, plus optional monthly support for updates, new pages and improvements.',
  },
  {
    q: 'How do we get started?',
    a: 'Send me a message here, on WhatsApp or on LinkedIn. I will reply within 24 hours, we will have a short free call, and you will get a clear quote and timeline — no pressure, no jargon.',
  },
];

/* ---------------------------------------------------------------------------
 * LEARNING & GROWTH + SKILLS + SERVICES + TESTIMONIALS + FAQ are on the HOME
 * page; PROJECTS live in the `projects` array above.
 * -------------------------------------------------------------------------*/
