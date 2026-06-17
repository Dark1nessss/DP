# Atlas Ousia — Copilot Instructions

## Project
Premium fragrance diffuser brand website. PAP (Prova de Aptidão Profissional) by Carolina Ferreira.
**Stack**: Next.js 15 · TypeScript · Tailwind CSS v3 · Lucide React · Google Fonts (next/font)

## Design System

### Color tokens (Tailwind)
| Token    | Hex       | Use                    |
|----------|-----------|------------------------|
| `ink`    | `#060e09` | Page background        |
| `card`   | `#0c1a12` | Card / surface         |
| `rim`    | `#1a3324` | Borders                |
| `cream`  | `#e8e0d4` | Primary text           |
| `stone`  | `#7a9080` | Muted / secondary text |
| `gold`   | `#c9a86c` | Accent, CTAs           |
| `winter` | `#2f7f5b` | Portugal               |
| `summer` | `#4db394` | Brazil                 |
| `autumn` | `#f9aeb7` | Morocco                |
| `spring` | `#ebeca0` | Japan                  |

### Typography
- `font-display` → Cormorant Garamond (CSS var `--font-cormorant`) — headings, quotes, brand name
- `font-body` → Lato (CSS var `--font-lato`) — labels, nav, body copy

### Patterns
- Eyebrow: `font-body text-xs tracking-[0.3em] uppercase text-stone`
- Hero heading: `font-display font-light text-cream tracking-[0.08em]`
- Section body: `font-body text-sm text-stone leading-relaxed`
- Container: `max-w-6xl mx-auto px-6`
- Section padding: `py-24 px-6` or `py-28 px-6`
- Separator: `h-px bg-rim/30` or `border-t border-rim/30`
- Gold CTA button: `font-body text-xs tracking-[0.25em] uppercase px-10 py-4 border border-gold/40 text-gold hover:bg-gold hover:text-ink transition-all duration-300`

## Project Structure
```
app/
  layout.tsx                  — Root layout: fonts, <Navigation />, <Footer />
  page.tsx                    — Home: Hero, Collections grid, Manifesto, Concept
  globals.css                 — Tailwind base + custom utilities
  about/page.tsx              — Brand story, naming, inclusive design, PAP info
  collections/
    page.tsx                  — Collections listing (all 4)
    [slug]/page.tsx           — Season detail (generateStaticParams)
  contact/page.tsx            — Contact page (imports <ContactForm />)
  not-found.tsx               — Custom 404

components/
  Navigation.tsx              — 'use client' — fixed top bar, mobile menu
  Footer.tsx                  — Server — 3-col grid + copyright
  ContactForm.tsx             — 'use client' — form with simulated submit state

lib/
  data.ts                     — Collection type + array + getCollection()
```

## Collections (lib/data.ts)
| slug     | season    | country  | color     |
|----------|-----------|----------|-----------|
| winter   | Inverno   | Portugal | `#2f7f5b` |
| summer   | Verão     | Brasil   | `#4db394` |
| autumn   | Outono    | Marrocos | `#f9aeb7` |
| spring   | Primavera | Japão    | `#ebeca0` |

## Key Conventions
- **Next.js 15**: `params` is a `Promise` — always `await params` in page components
- Server components by default; `'use client'` only for hooks/interactivity
- Fluid type: `style={{ fontSize: 'clamp(...)' }}` for hero headings
- Winter accent color override: `col.slug === 'winter' ? '#4db394' : col.color`
- All text is Portuguese (Portugal)
- `✦` glyph used as brand decorative mark (select-none)

## Commands
```bash
npm run dev      # start dev server (turbopack)
npm run build    # production build
npm run lint     # eslint
```
