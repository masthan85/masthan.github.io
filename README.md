# Professional website — Masthan Mohammed

Next.js (App Router) personal site for data architecture, strategy, and AI consulting. Optimised for **Vercel** deployment.

## Project layout

- **`app/layout.tsx`** — minimal root layout (`<html>`, `<body>`) so the build always registers a valid root.
- **`app/(site)/layout.tsx`** — fonts, header, footer, and JSON-LD shell; all marketing routes live under **`app/(site)/`**.
- **`components/`**, **`lib/`** — shared code at repo root (`@/*` path alias).

On Vercel, leave **Root Directory** empty (repository root).

## Features

- **Pages:** Home, About, Services, Experience, Case studies, Book, Contact, Privacy, Terms
- **Booking:** Primary CTA opens **Google Calendar** appointment schedule (`NEXT_PUBLIC_GOOGLE_CALENDAR_BOOKING_URL`)
- **Fallback enquiry:** Booking form on `/book` → `POST /api/booking-enquiry` → Formspree (server-side)
- **Contact:** `POST /api/contact` → Formspree — **no Formspree ID in client code**
- **Security:** Honeypot fields, basic per-IP rate limiting on APIs, security headers + CSP (production), `rel="noopener noreferrer"` on external links
- **SEO:** Per-page metadata, Open Graph, Twitter cards, `robots.txt`, `sitemap.xml`, JSON-LD (`Person`, `ProfessionalService`)

## Prerequisites

- Node.js 20+
- npm (or pnpm/yarn)

## Local setup

```bash
npm install
cp .env.example .env.local
```

Edit `.env.local` with your values (see below).

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables (Vercel)

Add these in **Vercel → Project → Settings → Environment Variables** (Production + Preview as needed):

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Yes | Your live site URL, e.g. `https://your-domain.com` (no trailing slash) |
| `NEXT_PUBLIC_GOOGLE_CALENDAR_BOOKING_URL` | Yes | Public Google Calendar appointment schedule URL |
| `FORMSPREE_FORM_ID` | Yes | Formspree form ID (from `https://formspree.io/f/{id}`) |
| `FORMSPREE_BOOKING_FORM_ID` | No | Optional second form for booking enquiries only |

### Google Calendar appointment schedule

1. Open [Google Calendar](https://calendar.google.com).
2. Click **Create** → **Appointment schedule** (or **Appointment schedules** in the UI).
3. Set duration, availability, and booking window.
4. Save, then click **Open booking page** (or share link).
5. Copy the full public URL (it will look like `https://calendar.google.com/calendar/appointments/schedules/...`).
6. In Vercel, set `NEXT_PUBLIC_GOOGLE_CALENDAR_BOOKING_URL` to that URL (and the same in `.env.local` for local testing).

### Formspree

1. Create a free account at [Formspree](https://formspree.io).
2. Create a form and copy the ID from the integration URL (`/f/xxxxxxx`).
3. Set `FORMSPREE_FORM_ID` in Vercel (server-side only).

Optional: create a second form for booking-only emails and set `FORMSPREE_BOOKING_FORM_ID`.

## Scripts

```bash
npm run dev    # development server
npm run build  # production build
npm run start  # run production build locally
npm run lint   # ESLint
```

## Deploy on Vercel

1. Push this repository to GitHub (include **`app/layout.tsx`** — without a root layout you will see errors such as `about/page.tsx doesn't have a root layout`).
2. In Vercel: **Add New Project** → Import the repository.
3. **Root Directory:** leave **empty** (repo root), not `app` or `src`.
4. Framework preset: **Next.js** (auto-detected).
5. Add the environment variables above. For `NEXT_PUBLIC_SITE_URL`, use a full URL with protocol, e.g. `https://www.yoursite.com` (bare domains are normalised, but invalid values can break the build).
6. Deploy.

No custom build command is required. Output is handled by Next.js.

## Placeholder domain

Content and metadata default to `https://your-domain.com` until you set `NEXT_PUBLIC_SITE_URL` in production.

## Licence

Private / personal use — all rights reserved unless you choose otherwise.
