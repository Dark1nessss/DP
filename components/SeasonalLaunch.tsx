'use client'

interface SeasonalLaunchProps {
  month: string
  season: string
  desc: string
  color: string
  slug: string
}

export function SeasonalLaunch({ month, season, desc, color, slug }: SeasonalLaunchProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between p-8 border-b border-rim/30 hover:bg-card transition-colors duration-300 group gap-6">
      <div className="flex-1">
        <p className="font-body text-xs tracking-[0.2em] uppercase text-stone/50 mb-2">
          {month}
        </p>
        <p className="font-display text-2xl font-light text-cream group-hover:text-gold transition-colors duration-200">
          {season}
        </p>
        <p className="font-body text-sm text-stone mt-2">{desc}</p>
      </div>
      <div className="flex items-center gap-4 shrink-0">
        <button
          onClick={() => (window.location.href = `/collections/${slug}`)}
          className="font-body text-xs tracking-[0.25em] uppercase px-6 py-2 border transition-all duration-300"
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
          Explorar
        </button>
        <span className="text-stone group-hover:text-gold transition-colors duration-200 text-lg">
          →
        </span>
      </div>
    </div>
  )
}
