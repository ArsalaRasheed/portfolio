# Project screenshots

Aapki asli screenshots ab **`src/assets/`** mein hain aur `src/data/content.js` ke
through wire hui hain — koi code change nahi karna parta.

## Current setup (asli images)

| File | Project | Kahan dikhti hai |
|---|---|---|
| `src/assets/classpilot.png` | ClassPilot | card, case study header, browser frame |
| `src/assets/touristo.png` | Touristo | card, case study header, browser frame |
| `src/assets/shopify.png` | Shopify store (Al-Khan Paints) | card, case study header |
| `src/assets/chatbot.jpeg` | AI Chat Assistant (Gemini) | card **aur** phone frame (mobile shot hai) |
| `src/assets/figma.png` | Touristo — Figma screens | Touristo case study, "UX Process" section |

**Screenshot badalna ho:** usi naam se nayi file `src/assets/` mein replace kar do — baaki sab khud ho jayega.
**Screenshot hatana ho:** `content.js` mein us project ke `art.image` ko `''` kar do — CSS mockup wapas aa jayega.

## Optional: public/images/ fallback

Agar kisi project ka `art.image` khali ho, to site automatic check karti hai:
`public/images/<slug>.png` (aur phone frame ke liye `art.imageMobile`).

| File ka naam | Kahan dikhega |
|---|---|
| `classpilot.png` / `classpilot-mobile.png` | ClassPilot |
| `touristo.png` / `touristo-mobile.png` | Touristo |
| `shopify-store.png` / `shopify-store-mobile.png` | Shopify store |
| `ai-chatbot.png` / `ai-chatbot-mobile.png` | AI chatbot |
| `landing-pages.png` / `landing-pages-mobile.png` | Landing pages |

## Settings (agli screenshots ke liye)

- **Desktop shots:** 1600×1000 px ya uske qareeb (16:10), PNG
- **Mobile shots:** 390×844 px (iPhone size), PNG
- File size: har file 300KB se chhoti rakhein (TinyPNG.com se compress kar lein)
- "Activate Windows" watermark na ho — ya cropBottom flag (`art.cropBottom: true`) se thoda hide ho jata hai

## Notes

- Chatbot ki screenshot mobile size ki hai — isliye usne `imageMobile` set hai aur phone frame mein asli screenshot dikhta hai.
- Baaki projects phone frames mein polished CSS mobile mockups use karte hain (kyunki unki mobile shots maujood nahi).
- Touristo case study mein `ux.figmaImage` Figma screens alag se render hoti hai.
