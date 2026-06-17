# Atlas Ousia — Agent Context

## What This Is
A Next.js 15 website for **Atlas Ousia**, a premium fragrance diffuser brand.
Created as a PAP (Prova de Aptidão Profissional) by **Carolina Ferreira** at Agrupamento de Escolas Dona Maria II.

## Brand Concept
Multicultural, seasonal room diffusers — each season mapped to a country, scent profile, and colour.
Slogan: *"Essências do Mundo — Difusores de Ambiente Sazonais e Multiculturais"*

## Four Collections
| Season    | Country  | Colour    | Scent Direction             |
|-----------|----------|-----------|-----------------------------|
| Inverno   | Portugal | `#0b2e22` | Lenha, Pinheiro, Musgo      |
| Verão     | Brasil   | `#4db394` | Cítrico, Coco, Brisa Marina |
| Outono    | Marrocos | `#f9aeb7` | Âmbar, Especiarias, Oud     |
| Primavera | Japão    | `#ebeca0` | Sakura, Chá Verde, Bambu    |

## Tech Stack
- Next.js 15 (App Router, TypeScript)
- Tailwind CSS v3 (custom brand tokens in `tailwind.config.ts`)
- Google Fonts via `next/font`: Cormorant Garamond + Lato
- Lucide React for icons

## Key Files
| File | Purpose |
|------|---------|
| `lib/data.ts` | Single source of truth for collection data |
| `tailwind.config.ts` | Brand colour + font tokens |
| `app/layout.tsx` | Root layout (fonts, nav, footer) |
| `app/page.tsx` | Homepage |
| `app/collections/[slug]/page.tsx` | Dynamic collection detail |
| `components/Navigation.tsx` | Client — sticky nav |
| `components/ContactForm.tsx` | Client — contact form |

## What Needs Backend (Not Implemented)
- Contact form email delivery (currently simulates success)
- Newsletter / mailing list
- E-commerce / checkout

## Dev Commands
```bash
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

## Coding Rules
- `params` in Next.js 15 pages is a `Promise` — always `await params`
- Keep components as server components unless hooks/browser APIs are needed
- Language: Portuguese (Portugal) throughout all UI copy
- Brand decorative glyph: `✦` (U+2736) with `select-none`
