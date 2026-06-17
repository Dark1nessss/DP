# Atlas Ousia — Premium Fragrance Diffuser Website

A Next.js 15 website for **Atlas Ousia**, a premium multicultural, seasonal room diffuser brand. Created as a **Prova de Aptidão Profissional (PAP)** by **Carolina Ferreira** at Agrupamento de Escolas Dona Maria II.

## 🌍 Project Overview

Atlas Ousia presents a curated collection of seasonal diffusers, each representing a different country and cultural essence:

| Season    | Country  | Colour    | Scent Profile              |
|-----------|----------|-----------|----------------------------|
| Inverno   | Portugal | #2f7f5b   | Lenha, Pinheiro, Musgo     |
| Verão     | Brasil   | #4db394   | Cítrico, Coco, Brisa       |
| Outono    | Marrocos | #f9aeb7   | Âmbar, Especiarias, Oud    |
| Primavera | Japão    | #ebeca0   | Sakura, Chá Verde, Bambu   |

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router, TypeScript)
- **Styling**: Tailwind CSS v3
- **Fonts**: Google Fonts (Cormorant Garamond + Lato)
- **Icons**: Lucide React
- **Language**: Portuguese (Portugal)

## 📁 Project Structure

```
app/
├── layout.tsx                     # Root layout (fonts, navigation, footer)
├── page.tsx                       # Homepage
├── globals.css                    # Tailwind + animations
├── collections/
│   ├── page.tsx                  # Collections listing
│   └── [slug]/page.tsx           # Dynamic collection detail
├── shop/page.tsx                 # Shop with bottle showcase
├── about/page.tsx                # Brand story & design inclusive info
├── contact/page.tsx              # Contact form
└── not-found.tsx                 # Custom 404

components/
├── Navigation.tsx                # 'use client' — fixed navigation bar
├── Footer.tsx                    # Server component — footer with links
├── ContactForm.tsx               # 'use client' — contact form with validation
├── BuyModal.tsx                  # 'use client' — humorous "buy" popup
└── BottleShowcase.tsx            # Visual bottle representation with animations

lib/
└── data.ts                       # Collection data & helpers
```

## ✨ Key Features

### 1. **Responsive Design**
- Mobile-first approach with Tailwind CSS
- Optimized for all screen sizes
- Fluid typography using CSS clamp()

### 2. **Animations & Interactions**
- Smooth fade-in and slide-up animations
- Float animations on bottle showcases
- Hover effects on interactive elements
- Glow pulse effects on CTAs

### 3. **Visual Diversity per Season**
Each collection has:
- Unique accent color derived from the season
- Custom bottle visualization with floating particles
- Season-specific visual backgrounds
- Dynamic content highlighting cultural references

### 4. **Shop Experience**
- Interactive bottle showcase on homepage and shop page
- **Humorous "Buy Now" Modal**: When users click "Adquirir Agora", they're presented with a meme popup explaining that Atlas Ousia is a conceptual project, not a real product available for purchase.

### 5. **Inclusive Design**
- Accessibility-focused typography (Candara for body, supporting dyslexia)
- High contrast color ratios
- Semantic HTML structure
- ARIA labels on interactive elements

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## 🎨 Design System

### Color Tokens
| Token    | Value     | Usage              |
|----------|-----------|-------------------|
| ink      | #060e09   | Page background   |
| card     | #0c1a12   | Card surfaces     |
| rim      | #1a3324   | Borders           |
| cream    | #e8e0d4   | Primary text      |
| stone    | #7a9080   | Secondary text    |
| gold     | #c9a86c   | Accents & CTAs    |
| winter   | #2f7f5b   | Portugal          |
| summer   | #4db394   | Brazil            |
| autumn   | #f9aeb7   | Morocco           |
| spring   | #ebeca0   | Japan             |

### Typography
- **Display**: Cormorant Garamond (headings, quotes)
- **Body**: Lato (labels, body copy, navigation)

### Common Patterns
```tsx
// Eyebrow
<p className="font-body text-xs tracking-[0.3em] uppercase text-stone">Label</p>

// CTA Button
<button className="font-body text-xs tracking-[0.25em] uppercase px-10 py-4 border border-gold/40 text-gold hover:bg-gold hover:text-ink transition-all duration-300">
  Action
</button>

// Section container
<div className="max-w-6xl mx-auto px-6 py-28">
```

## 🎭 Special Features

### Meme Buy Modal
Click "Adquirir Agora" on any collection or the shop page to see a humorous popup explaining that Atlas Ousia exists only as a design concept. This adds a playful element to the otherwise premium aesthetic.

### Bottle Showcase Component
Interactive 3D-like bottle representations that:
- Respond to hover interactions
- Display floating particle animations
- Use season-specific colors
- Scale smoothly on interaction

### Dynamic Collection Pages
Each season detail page includes:
- Dynamic accent color (winter uses alternate accent)
- Large decorative letter watermark
- Full collection description
- Olfactive notes with custom styling
- Packaging concept explanation
- Previous/Next collection navigation

## 📱 Pages

- **Home** `/` — Hero, collections grid, manifesto, modular concept
- **Collections** `/collections` — Listing of all 4 seasons
- **Collection Detail** `/collections/[slug]` — Full season information with bottle showcase
- **Shop** `/shop` — All bottles, collection details, seasonal launch strategy
- **About** `/about` — Brand story, naming philosophy, inclusive design info, PAP context
- **Contact** `/contact` — Contact form with validation
- **404** — Custom not found page

## 🔧 Development Notes

### Next.js 15 Specifics
- `params` in page components is a `Promise` — always `await params`
- Using generateStaticParams for collection pages
- Static generation for optimal performance

### Animation Utilities
```css
.animate-fade-in        /* Fade in over 0.6s */
.animate-slide-up       /* Slide up with fade over 0.6s */
.animate-slide-down     /* Slide down with fade over 0.4s */
.animate-float          /* Floating motion */
.animate-glow-pulse     /* Gold glow pulse */
```

### Component Patterns
- Server components by default
- `'use client'` only for hooks/interactivity (Navigation, ContactForm, BuyModal)
- TypeScript strict mode enabled
- Reusable utility components

## 📝 Content & Copy

All UI copy is in **Portuguese (Portugal)**. The brand uses the decorative glyph `✦` (U+2736) throughout the design with `select-none` class to prevent accidental selection.

## 🎓 PAP Information

This project was created as part of the PAP (Prova de Aptidão Profissional) for the course:
- **Curso**: Técnico de Design e Comunicação Gráfica
- **Designer**: Carolina Ferreira, nº 3, 3º4TDCG
- **Orientadora**: Marta Silva
- **Escola**: Agrupamento de Escolas Dona Maria II

The project demonstrates:
- Advanced responsive design
- Visual hierarchy and typography mastery
- Inclusive design principles
- Modular packaging engineering concepts
- Seasonal marketing strategy implementation

## 📄 License

This is a student project created for educational purposes.

---

**Atlas Ousia** — *Essências do Mundo — Difusores de Ambiente Sazonais e Multiculturais* ✦
