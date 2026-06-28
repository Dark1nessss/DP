'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const leftLinks = [
  { href: '/collections', label: 'Coleções' },
  { href: '/shop', label: 'Shop' },
  { href: '/stories', label: 'Histórias' },
]

const rightLinks = [
  { href: '/about', label: 'Sobre' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contacto' },
]

const allLinks = [...leftLinks, ...rightLinks]

function OrnateLink({
  href,
  label,
  active,
  align = 'center',
}: {
  href: string
  label: string
  active: boolean
  align?: 'left' | 'right' | 'center'
}) {
  return (
    <Link
      href={href}
      className={`group relative font-body text-xs tracking-imperial uppercase transition-colors duration-300 py-2 ${
        active ? 'text-gold' : 'text-stone hover:text-cream'
      }`}
    >
      <span className="relative z-10">{label}</span>
      {/* Expanding double-line ornament */}
      <span
        className={`pointer-events-none absolute -bottom-0.5 h-px bg-cream transition-all duration-300 ${
          align === 'right' ? 'right-1/2' : 'left-1/2'
        } w-0 group-hover:w-full group-hover:left-0 group-hover:right-0 ${active ? 'w-full left-0 right-0 bg-gold' : ''}`}
      />
      <span
        className={`pointer-events-none absolute -bottom-[3px] h-px bg-gold/50 transition-all duration-500 delay-75 left-1/2 right-1/2 w-0 group-hover:w-full group-hover:left-0 group-hover:right-0`}
      />
      {/* Diamond tick on hover */}
      <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-3 text-[7px] text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        ✦
      </span>
    </Link>
  )
}

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ink/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-24 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
        {/* Left links */}
        <nav className="hidden md:flex items-center justify-end gap-8">
          {leftLinks.map(({ href, label }) => (
            <OrnateLink
              key={href}
              href={href}
              label={label}
              align="left"
              active={pathname.startsWith(href)}
            />
          ))}
        </nav>

        {/* Centered logo */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex items-center justify-center px-4 md:px-8 group"
          aria-label="Atlas Ousia — Início"
        >
          <Image
            src="/images/logo-atlas-ousia.png"
            alt="Atlas Ousia"
            width={150}
            height={104}
            priority
            className="h-16 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {/* Right links */}
        <nav className="hidden md:flex items-center justify-start gap-8">
          {rightLinks.map(({ href, label }) => (
            <OrnateLink
              key={href}
              href={href}
              label={label}
              align="right"
              active={pathname.startsWith(href)}
            />
          ))}
        </nav>

        {/* Mobile toggle (overlaps right cell) */}
        <button
          className="md:hidden justify-self-end col-start-3 text-cream hover:text-gold transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Textured cartographic bottom border */}
      <div className="relative h-2 w-full">
        <div className="absolute inset-x-0 top-0 h-px bg-cream/30" />
        <div
          className="absolute inset-x-0 top-px h-1.5 opacity-60"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, #1F3E37 0px, #1F3E37 6px, transparent 6px, transparent 12px), repeating-linear-gradient(90deg, transparent 0px, transparent 3px, #5EBF9E 3px, #5EBF9E 4px, transparent 4px, transparent 12px)',
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-px bg-cream/15" />
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden border-t border-rim bg-ink/97 backdrop-blur-md">
          {allLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`block px-6 py-4 font-body text-xs tracking-imperial uppercase transition-colors border-b border-rim/60 ${
                pathname.startsWith(href)
                  ? 'text-gold bg-card'
                  : 'text-stone hover:text-cream hover:bg-card'
              }`}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
