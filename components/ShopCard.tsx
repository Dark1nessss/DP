'use client'

import { toast } from 'sonner'

interface ShopCardProps {
  season: string
  color: string
  country: string
  subtitle: string
  description: string
  notes: string[]
  slug: string
}

export function ShopCard({
  season,
  color,
  country,
  subtitle,
  description,
  notes,
  slug,
}: ShopCardProps) {
  const handleBuyClick = () => {
    toast.error('You wanna buy something that doesn't exist yet? Be my guest. 🎨', {
      description: 'Atlas Ousia is a conceptual design project, not available for purchase.',
      duration: 4000,
      style: {
        borderColor: color,
      },
    })
  }

  return (
    <div className="bg-card p-8 hover:bg-rim/20 transition-colors duration-300">
      <div className="h-1 mb-6" style={{ backgroundColor: color, width: '40px' }} />

      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="font-body text-xs tracking-[0.2em] uppercase text-stone/60 mb-2">
            {season}
          </p>
          <h3 className="font-display text-3xl font-light text-cream">{country}</h3>
        </div>
        <span className="text-3xl font-light opacity-10 select-none" style={{ color }}>
          ✦
        </span>
      </div>

      <p className="font-display text-base italic text-stone mb-6">{subtitle}</p>

      <p className="font-body text-sm text-stone/70 leading-relaxed mb-6">
        {description.substring(0, 200)}...
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {notes.map((note) => (
          <span
            key={note}
            className="font-body text-xs px-3 py-1 border"
            style={{
              borderColor: `${color}40`,
              color: color,
            }}
          >
            {note}
          </span>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <button
          onClick={handleBuyClick}
          className="font-body text-xs tracking-[0.25em] uppercase px-6 py-3 border transition-all duration-300 w-full"
          style={{
            borderColor: `${color}60`,
            color: color,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = color + '20'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent'
          }}
        >
          Adquirir Agora
        </button>
        <button
          onClick={() => (window.location.href = `/collections/${slug}`)}
          className="font-body text-xs tracking-[0.25em] uppercase px-6 py-3 border border-stone/30 text-stone hover:border-stone/60 transition-all duration-300"
        >
          Ver Detalhes →
        </button>
      </div>
    </div>
  )
}
