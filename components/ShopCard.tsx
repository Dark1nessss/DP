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
    toast.error('Este produto é conceptual e não está disponível para compra.', {
      description:
        'Atlas Ousia é um projeto de design que celebra a ideia de difusores sazonais.',
      duration: 4000,
      style: {
        borderColor: color,
      },
    })
  }

  return (
    <div
      className="group corner-ornaments relative bg-ink p-8 transition-all duration-500 hover:shadow-jewel overflow-hidden"
      style={{ border: `1px solid ${color}` }}
    >
      {/* textured seasonal wash */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background: `linear-gradient(160deg, ${color}12 0%, transparent 55%)`,
        }}
      />
      <span className="glint-overlay opacity-0 group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="h-1 mb-6 transition-all duration-300 group-hover:w-16" style={{ backgroundColor: color, width: '40px' }} />

        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="font-body text-xs tracking-imperial uppercase text-stone/70 mb-2">
              {season}
            </p>
            <h3 className="font-display text-4xl font-light text-cream">{country}</h3>
          </div>
          <span className="font-subtitle text-4xl font-light opacity-20 select-none animate-sparkle" style={{ color }}>
            ✦
          </span>
        </div>

        <p className="font-subtitle text-xl italic text-stone mb-6">{subtitle}</p>

        <p className="font-body text-sm text-stone/80 leading-relaxed mb-6">
          {description.substring(0, 200)}...
        </p>

        {/* Expressive olfactive notes */}
        <p className="font-body text-[10px] tracking-imperial uppercase text-stone/60 mb-3">
          Notas Olfativas
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          {notes.map((note) => (
            <span
              key={note}
              className="font-body text-[11px] tracking-wide uppercase px-3 py-1.5 transition-all duration-300 group-hover:bg-current/5"
              style={{
                borderColor: `${color}66`,
                color: color,
                border: `1px solid ${color}66`,
              }}
            >
              {note}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-3">
        <button
          onClick={handleBuyClick}
          className="font-body text-xs tracking-imperial uppercase px-6 py-3 transition-all duration-300 w-full"
          style={{
            border: `1px solid ${color}`,
            color: color,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = color
            e.currentTarget.style.color = '#ffffff'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent'
            e.currentTarget.style.color = color
          }}
        >
          Adquirir Agora
        </button>
        <button
          onClick={() => (window.location.href = `/collections/${slug}`)}
          className="font-body text-xs tracking-imperial uppercase px-6 py-3 border border-stone/40 text-stone hover:border-cream hover:text-cream transition-all duration-300"
        >
          Ver Detalhes →
        </button>
      </div>
    </div>
  )
}
