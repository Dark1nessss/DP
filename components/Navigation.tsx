'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/collections', label: 'Coleções' },
  { href: '/shop', label: 'Shop' },
  { href: '/about', label: 'Sobre' },
  { href: '/contact', label: 'Contacto' },
]

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-rim/40 bg-ink/85 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 group"
          onClick={() => setOpen(false)}
        >
          <span className="text-gold font-display leading-none select-none">✦</span>
          <span className="font-display text-lg tracking-[0.12em] text-cream group-hover:text-gold transition-colors duration-200">
            Atlas Ousia
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-body text-xs tracking-[0.25em] uppercase transition-colors duration-200 ${
                pathname.startsWith(href) ? 'text-gold' : 'text-stone hover:text-cream'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-stone hover:text-cream transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-rim/40 bg-ink/95 backdrop-blur-md">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="block px-6 py-4 font-body text-xs tracking-[0.25em] uppercase text-stone hover:text-cream hover:bg-card transition-colors"
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
