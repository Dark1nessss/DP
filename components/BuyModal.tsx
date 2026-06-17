'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

export default function BuyModal() {
  const [open, setOpen] = useState(false)

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="font-body text-xs tracking-[0.25em] uppercase px-10 py-4 border border-gold/40 text-gold hover:bg-gold hover:text-ink transition-all duration-300 animate-glow-pulse"
      >
        Adquirir Agora
      </button>
    )
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-black/50">
      <div className="relative max-w-md w-full bg-card border border-rim animate-slide-up">
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-stone hover:text-cream transition-colors"
        >
          <X size={20} />
        </button>

        <div className="p-8 text-center">
          <span className="text-gold font-display text-4xl block mb-6 select-none">✦</span>

          <h2 className="font-display text-3xl font-light text-cream mb-4">
            Como Comprar?
          </h2>

          <div className="mb-8 p-6 bg-ink border border-rim/50 rounded">
            <p className="font-body text-lg text-stone mb-4">
              Existe apenas um pequeno problema...
            </p>
            <p className="font-display text-5xl font-light text-gold select-none">
              isso não existe
            </p>
          </div>

          <p className="font-body text-xs text-stone/60 mb-6 leading-relaxed">
            Atlas Ousia é um conceito de design e uma Prova de Aptidão Profissional. Este projeto
            foi criado como exercício conceptual e artístico, não como produto comercial real.
          </p>

          <div className="space-y-3 mb-8">
            <p className="font-body text-xs tracking-[0.2em] uppercase text-stone/50">
              Mas se fosse real...
            </p>
            <p className="font-body text-sm text-stone leading-relaxed italic">
              Certamente seria belo. ✦
            </p>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="font-body text-xs tracking-[0.25em] uppercase px-8 py-3 border border-gold/40 text-gold hover:bg-gold hover:text-ink transition-all duration-300 w-full"
          >
            Voltar à Realidade
          </button>
        </div>
      </div>
    </div>
  )
}
