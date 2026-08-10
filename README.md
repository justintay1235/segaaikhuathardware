# Sega Pumps

Marketing website for **Sega**, a water pump manufacturer — built as a
multi-page, elegant/luxurious brand site with a maroon & ivory palette,
Didot-style display type (Bodoni Moda), and smooth scroll-reveal animations.

## Stack

- [Next.js](https://nextjs.org) (App Router, Turbopack) + TypeScript
- Tailwind CSS v4 (custom maroon/ivory/gold theme in `src/app/globals.css`)
- [Framer Motion](https://motion.dev) for scroll reveals and micro-interactions
- [Lucide](https://lucide.dev) icons

## Pages

- `/` — Home: hero, stats, about teaser, featured products, features, testimonials, CTA
- `/about` — Company story, mission/vision, timeline, values, stats
- `/products` — Full product range (6 series) + custom engineering CTA
- `/services` — Service offerings + process timeline
- `/contact` — Contact info, business hours, and a client-side contact form

All brand copy, imagery, and contact details are placeholders — swap them
for the real thing before launch (see "Content to replace" below).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the port Next.js
picks) to view the site. `npm run build` produces a static-optimized
production build; `npm run lint` runs ESLint.

## Content to replace before launch

- Real logo (currently a text wordmark in `src/components/Logo.tsx`)
- Real product photography (currently an abstract SVG emblem placeholder)
- Actual address, phone, email, and business hours (`src/components/Footer.tsx`, `src/app/contact/page.tsx`)
- Company history/timeline copy in `src/app/about/page.tsx`
- The contact form (`src/components/ContactForm.tsx`) is UI-only — wire it
  up to an email/CRM endpoint before relying on it to receive real leads.
