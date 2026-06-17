'use client'

import { toast } from 'sonner'

export function BottleShowcase({
  color,
  season,
}: {
  color: string
  season: string
}) {
  // Map season to animation classes
  const getSeasonAnimation = (season: string) => {
    const seasonLower = season.toLowerCase()
    if (seasonLower.includes('inverno')) return 'animate-float-winter'
    if (seasonLower.includes('verão')) return 'animate-float-summer'
    if (seasonLower.includes('outono')) return 'animate-float-autumn'
    if (seasonLower.includes('primavera')) return 'animate-float-spring'
    return 'animate-float'
  }

  const getGlowAnimation = (season: string) => {
    const seasonLower = season.toLowerCase()
    if (seasonLower.includes('inverno')) return 'animate-glow-winter'
    if (seasonLower.includes('verão')) return 'animate-glow-summer'
    if (seasonLower.includes('outono')) return 'animate-glow-autumn'
    if (seasonLower.includes('primavera')) return 'animate-glow-spring'
    return 'animate-glow-pulse'
  }

  const isWinter = season.toLowerCase().includes('inverno')
  const winterBottle = '#2f7f5b'
  const winterHighlight = '#d3f1de'
  const seasonAnimation = getSeasonAnimation(season)
  const glowAnimation = getGlowAnimation(season)
  const bottleColor = isWinter ? winterBottle : color
  const highlightColor = isWinter ? winterHighlight : color
  const glowColor = isWinter ? winterBottle : color

  const handleBuyClick = () => {
    toast.error('Este produto é conceptual e não está disponível para compra.', {
      description: 'Atlas Ousia é um projeto de design que celebra a ideia de difusores sazonais.',
      duration: 4000,
      style: {
        borderColor: bottleColor,
      },
    })
  }

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center py-12">
      {/* Background accent glow */}
      <div className="absolute inset-0 opacity-0 hover:opacity-30 transition-opacity duration-500 pointer-events-none">
        <div
          className="absolute inset-1/4 rounded-full blur-3xl"
          style={{
            background: `radial-gradient(circle, ${bottleColor}20 0%, transparent 70%)`,
          }}
        />
      </div>

      {/* Bottle container */}
      <div className="relative flex flex-col items-center justify-center w-40 h-64 group">
        {/* Outer container glow */}
        <div
          className={`absolute inset-0 rounded-3xl blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10 ${glowAnimation}`}
          style={{ backgroundColor: glowColor }}
        />

        {/* Main bottle shape - enhanced with season animation */}
        <div
          className={`relative w-24 h-48 rounded-b-3xl rounded-t-lg shadow-2xl transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 ${seasonAnimation} overflow-hidden`}
          style={{
            background: `linear-gradient(135deg, ${bottleColor}d0 0%, ${bottleColor}a0 40%, ${bottleColor}70 100%)`,
            border: `3px solid ${bottleColor}80`,
            boxShadow: `0 0 48px ${bottleColor}40, inset -12px -12px 34px ${bottleColor}30`,
          }}
        >
          {/* Main bottle highlight - more pronounced */}
          <div
            className="absolute top-1 left-3 w-2 h-32 rounded-full opacity-40 group-hover:opacity-70 transition-opacity duration-500"
            style={{
              background: `linear-gradient(90deg, ${highlightColor} 0%, transparent 100%)`,
            }}
          />

          {/* Secondary highlight */}
          <div
            className="absolute top-4 right-2 w-1 h-24 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"
            style={{
              backgroundColor: `${bottleColor}80`,
            }}
          />

          {/* Bottle stopper - enhanced */}
          <div
            className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-10 h-5 rounded-t-full shadow-lg"
            style={{
              backgroundColor: bottleColor,
              opacity: 0.85,
              border: `2px solid ${bottleColor}`,
              boxShadow: `0 -2px 10px ${bottleColor}40 inset`,
            }}
          />

          {/* Inner rim decoration */}
          <div
            className="absolute top-6 left-1/2 transform -translate-x-1/2 w-20 h-1 opacity-30 rounded-full"
            style={{
              backgroundColor: bottleColor,
            }}
          />
        </div>

        {/* Floating particles animation - enhanced */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-500">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1.5 h-1.5 rounded-full ${seasonAnimation}`}
              style={{
                backgroundColor: bottleColor,
                left: `${15 + i * 12}%`,
                top: `${20 + i * 15}%`,
                animationDelay: `${i * 0.25}s`,
                boxShadow: `0 0 10px ${bottleColor}60`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Season label with accent */}
      <div className="mt-10 text-center">
        <div
          className="h-0.5 w-8 bg-gradient-to-r mx-auto mb-4 opacity-60"
          style={{
            background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
          }}
        />
        <p className="font-body text-xs tracking-[0.3em] uppercase text-stone group-hover:text-gold transition-colors">
          {season}
        </p>
      </div>

      {/* Buy button - enhanced */}
      <div className="mt-10">
        <button
          onClick={handleBuyClick}
          className="font-body text-xs tracking-[0.25em] uppercase px-8 py-3 border rounded transition-all duration-300 group/btn relative overflow-hidden"
          style={{
            borderColor: `${color}70`,
            color: color,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = color + '25'
            e.currentTarget.style.boxShadow = `0 0 20px ${color}40`
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          <span className="relative z-10">Adquirir Agora</span>
          <div
            className="absolute inset-0 opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300"
            style={{
              background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
            }}
          />
        </button>
      </div>
    </div>
  )
}
