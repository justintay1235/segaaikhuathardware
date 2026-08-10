# Sega Pumps

Marketing website for **Sega**, a water pump manufacturer — built as a
multi-page, elegant/luxurious brand site with a maroon & ivory palette,
Didot-style display type (Bodoni Moda), smooth scroll-reveal animations,
and a database-backed back office for managing products and contact
inquiries.

## Stack

- [Next.js](https://nextjs.org) (App Router, Turbopack) + TypeScript
- Tailwind CSS v4 (custom maroon/ivory/gold theme in `src/app/globals.css`)
- [Framer Motion](https://motion.dev) for scroll reveals and micro-interactions
- [Lucide](https://lucide.dev) icons
- [Prisma](https://prisma.io) + SQLite for the database (zero external
  accounts needed — the DB is a local file)
- Cookie-based admin session auth (`jose` for JWT, `bcryptjs` for password
  hashing)

## Pages

- `/` — Home: hero, stats, about teaser, featured products, features, testimonials, CTA
- `/about` — Company story, mission/vision, timeline, values, stats
- `/products` — Full product catalog (pulled live from the database)
- `/services` — Service offerings + process timeline
- `/contact` — Contact info, business hours, and a contact form that saves to the database
- `/admin` — Back office (login required): dashboard, product CRUD, and inquiry inbox

All brand copy, imagery, and contact details are placeholders — swap them
for the real thing before launch (see "Content to replace" below).

## Getting started

```bash
npm install
cp .env.example .env   # Windows: copy .env.example .env — only if .env doesn't already exist
npx prisma generate    # generates the Prisma client into src/generated/prisma
npx prisma migrate dev # creates prisma/dev.db and applies the schema
npx prisma db seed     # seeds starter products + the admin account
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the port Next.js
picks) to view the site. `npm run build` produces a production build;
`npm run lint` runs ESLint.

## Back office (`/admin`)

Sign in at `/admin/login` with the credentials from your `.env`
(`ADMIN_EMAIL` / `ADMIN_PASSWORD`, used only at seed time — defaults are
`admin@example.com` / `ChangeMe123!` in `.env.example`). From there you can:

- View inquiry/product counts on the dashboard
- Create, edit, and delete products (shown on `/products`; check "featured"
  to also show one on the homepage, up to 3)
- Upload a photo per product (JPEG/PNG/WebP/GIF, up to 5MB) — falls back to
  the icon if no photo is set
- Read and manage contact form submissions from `/contact`

**Change the seeded admin password after your first login**, and generate
your own `SESSION_SECRET` for any real deployment:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### Database notes

- SQLite is a local file (`prisma/dev.db`, gitignored) — great for local
  dev and single-instance hosting, but not for serverless platforms with
  ephemeral/read-only filesystems (e.g. Vercel). For that kind of
  deployment, switch `datasource.provider` in `prisma/schema.prisma` to
  `postgresql` and point `DATABASE_URL` at a hosted Postgres instance
  (Neon, Supabase, etc.) — Prisma's `db-setup` skill/docs cover the swap.
- To inspect or edit data directly, run `npx prisma studio`.
- Uploaded product photos are saved to `public/uploads/products/` (gitignored,
  not committed) — like the SQLite file, this is local disk storage, so it
  won't persist on serverless/ephemeral-filesystem hosting. For that kind of
  deployment, swap the upload handler in `src/lib/uploads.ts` for an object
  storage service (S3, Cloudflare R2, Vercel Blob, etc.).

## Content to replace before launch

- Real logo (currently a text wordmark in `src/components/Logo.tsx`)
- Real product photos — upload them per product from `/admin/products`
- Actual address, phone, email, and business hours (`src/components/Footer.tsx`, `src/app/(site)/contact/page.tsx`)
- Company history/timeline copy in `src/app/(site)/about/page.tsx`
- The seeded admin credentials — change the password immediately after login
