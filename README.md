# Medintegro Web (Next.js Rebuild)

Corporate website rebuild from WordPress to **Next.js 14 (App Router)** with **TypeScript**, **Tailwind**, and **shadcn/ui**.  
Content is stored locally as code (no CMS/DB) for fast delivery and easy maintenance.

## Tech stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Deployment: Vercel
- Repo: GitHub (managed via GitHub Desktop)

## Goals (MVP)
- Pages: Home, About, Equipment, Contact
- Localized routing: `/en/*`, `/ua/*`
- Content-as-code (no CMS, no database)
- Clean structure, easy future CMS swap (later)

## Folder structure (key parts)

```
src/
  app/
    page.tsx                      # redirects / -> /en
    [locale]/(site)/
      layout.tsx                  # Header/Footer wrapper per locale
      page.tsx                    # Home
      about/page.tsx              # About
      equipment/page.tsx          # Equipment
      contact/page.tsx            # Contact

  components/
    site/                         # Header/Footer/sections (no business text)
    ui/                           # shadcn/ui components

  content/
    en/pages/*.ts                 # EN page content (source of truth)
    ua/pages/*.ts                 # UA page content (source of truth)

  lib/
    content/
      types.ts                    # typed content schemas
      getPage.ts                  # getPage(locale, slug) content loader
    i18n/
      locales.ts                  # locales config (en/ua)

  middleware.ts                   # locale gate: /about -> /en/about
```

## Where content lives (IMPORTANT)
All business copy is stored in:

- `src/content/en/pages/*`
- `src/content/ua/pages/*`

Rules:
- Do **not** hardcode long text in React components.
- Pages must load content via `getPage(locale, slug)` from `src/lib/content/getPage.ts`.

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm start
```
