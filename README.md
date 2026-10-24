# Hina Rasheed — Portfolio

A conversion-focused portfolio for **Hina Rasheed**, UI/UX Designer & Web Developer.
React + Vite + Tailwind CSS + Framer Motion. Light/dark mode, mobile-first, accessible and SEO-ready.

---

## Quick start

```bash
npm install
npm run dev      # local dev server at http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

---

## Where to edit content

Almost everything you will ever change lives in **two files**:

| File | What it controls |
|---|---|
| `src/data/site.js` | Your name, hero headline, hero **stats**, about text, contact details (email, LinkedIn, WhatsApp), nav + footer links, form endpoint |
| `src/data/content.js` | **All projects & full case studies**, filters, process steps, learning timeline, mistakes, skills, services, testimonials, FAQ |

### Find every placeholder

Search both data files for `TODO`. Each one is a value you should replace with real
information — live demo links, Figma links, metrics, testimonials, your WhatsApp
number and LinkedIn URL.

### Adding or editing a project

Open `projects` in `src/data/content.js`. Each project follows the exact case-study
structure used on the site:

```
overview → problem → research → ux → ui → development
→ challenges → result → impact → learnings → improvements
```

Key fields:

- `slug` → the URL: `/work/<slug>`
- `category` → one of `'Web App' | 'Landing Page' | 'E-commerce' | 'AI'` (drives the filters)
- `art.variant` → built-in CSS mockup: `'dashboard' | 'landing' | 'store' | 'chat' | 'marketplace'`
- `art.colors` → the two gradient colours used for that project's artwork
- `art.image` → set to a real screenshot path (e.g. `'/images/classpilot.png'` in `public/`)
  to replace the generated artwork
- `liveUrl` / `figmaUrl` → shown as buttons on cards and case studies
- `result.beforeAfter` → include it to show the drag-to-compare slider (remove it to hide)

To add a project: copy an existing object, change the content, done. It appears in the
grid, filters, footer, sitemap (update `public/sitemap.xml`) and the "Next project" chain
automatically.

### Adding real screenshots

Drop images into `public/images/` and set `art.image: '/images/your-file.png'`.
Device mockups on case studies (browser + phone frames) can also be edited in
`src/pages/CaseStudy.jsx` — search for `DeviceFrame`.

### Contact form

By default the form opens the visitor's email client (no backend needed).
To collect submissions properly, create a free form endpoint (Formspree, Web3Forms,
Netlify Forms…) and set it in `src/data/site.js`:

```js
formEndpoint: 'https://formspree.io/f/xxxxxxx',
```

---

## Design system — "Ink & Emerald" (editorial)

- **Accent colour:** deep emerald `#0F7A5A` — defined once in `tailwind.config.js` (`accent`).
  Change it there and every button, link, badge and highlight updates.
- **Surfaces:** warm paper (light) / green-black ink (dark) via CSS variables in `src/index.css`
  (`:root` / `.dark`), exposed as `bg`, `surface`, `surface-2`, `border`, `ink`, `muted`.
- **Type:** *Fraunces* (serif) for headings and italic accents + *Plus Jakarta Sans* for UI text,
  both loaded in `index.html` with preconnect + `display=swap`.
- **Style rules:** hairline borders instead of heavy shadows, squared corners (`rounded-lg`),
  numbered section headers (`01 — FEATURED WORK`), `.label` utility for micro-labels,
  `.paper-grain` for a subtle texture.
- **Spacing rhythm:** sections use `.section` (py-20 / md:py-28), content uses `.container-x`
  (max-w-7xl + consistent gutters).
- **Components:** `src/components/ui/` — Button, Tag, SectionHeading, Reveal, CountUp, Icon.

### Project screenshots

Drop real screenshots into `public/images/` using the exact filenames listed in
`public/images/README.md` (e.g. `classpilot.png`, `touristo-mobile.png`).
They are picked up automatically — no code changes. Until then, detailed CSS
mockups with realistic content are rendered instead.

---

## Deploy

### Vercel

1. Push this folder to a GitHub repository.
2. Import it at [vercel.com/new](https://vercel.com/new) — Vercel detects Vite automatically.
3. Build command `npm run build`, output directory `dist`.
4. Add your domain, then update `site.domain` in `src/data/site.js`, plus `public/sitemap.xml`
   and `public/robots.txt`.

### Netlify

1. Push to GitHub, then "Import from Git" at [app.netlify.com](https://app.netlify.com).
2. Build command `npm run build`, publish directory `dist`.
3. **Important:** SPA routing needs a redirect rule — create `public/_redirects` with one line:

```
/*  /index.html  200
```

(Already handled for you in the repo.)

---

## Performance & accessibility notes

- Route-level code splitting (`React.lazy`) keeps the first paint small.
- All project artwork is CSS/SVG — no heavy image downloads.
- Light/dark mode with no flash of wrong theme (inline script in `index.html`).
- `prefers-reduced-motion` disables animations for users who ask for it.
- Skip link, visible focus rings, semantic landmarks, ARIA on sliders/accordions,
  4.5:1+ contrast in both themes.
- SEO: per-route titles/descriptions/canonical via `src/components/ui/Seo.jsx`,
  Open Graph tags, JSON-LD Person schema, `robots.txt` and `sitemap.xml`.
