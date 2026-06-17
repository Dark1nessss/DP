'use client'

import { toast } from 'sonner'

export function BottleShowcase({
  color,
  season,
}: {
  color: string
  season: string
}) {
  const handleBuyClick = () => {
    toast.error('You wanna buy something that doesn\'t exist yet? Be my guest. 🎨', {
      description: 'Atlas Ousia is a conceptual design project, not available for purchase.',
      duration: 4000,
      style: {
        borderColor: color,
      },
    })
  }

  return (
    <div className="relative h-80 flex flex-col items-center justify-center">
      {/* Floating shimmer accent */}
      <div
        className={`absolute inset-0 opacity-0 hover:opacity-10 transition-opacity duration-500`}
        style={{
          background: `radial-gradient(circle at 30% 40%, ${color}40 0%, transparent 70%)`,
        }}
      />

      {/* Bottle representation */}
      <div className="relative flex flex-col items-center justify-center w-32 h-56 group">
        {/* Outer glow */}
        <div
          className="absolute inset-0 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
          style={{ backgroundColor: color }}
        />

        {/* Main bottle shape */}
        <div
          className="relative w-20 h-40 rounded-b-3xl rounded-t-lg shadow-2xl transform group-hover:scale-105 transition-transform duration-500 animate-float"
          style={{
            background: `linear-gradient(135deg, ${color}80 0%, ${color}40 50%, ${color}20 100%)`,
            border: `2px solid ${color}60`,
          }}
        >
          {/* Bottle highlight */}
          <div
            className="absolute top-0 left-2 w-1 h-20 rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-500"
            style={{ backgroundColor: color }}
          />

          {/* Bottle stopper */}
          <div
            className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-4 rounded-t-full"
            style={{ backgroundColor: color, opacity: 0.6 }}
          />
        </div>

        {/* Floating particles animation */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full animate-float"
              style={{
                backgroundColor: color,
                left: `${20 + i * 15}%`,
                top: `${30 + i * 20}%`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Season label */}
      <p className="font-body text-xs tracking-[0.3em] uppercase text-stone mt-8">{season}</p>

      {/* Buy button - positioned below */}
      <div className="mt-8">
        <button
          onClick={handleBuyClick}
          className="font-body text-xs tracking-[0.25em] uppercase px-10 py-4 border transition-all duration-300 animate-glow-pulse"
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
      </div>
    </div>
  )
}
