'use client'

import { useState } from 'react'

function Field({
  label,
  type,
  placeholder,
  required,
}: {
  label: string
  type: string
  placeholder: string
  required?: boolean
}) {
  return (
    <div>
      <label className="block font-body text-xs tracking-[0.2em] uppercase text-stone mb-3">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full bg-transparent border-b border-rim focus:border-gold outline-none py-3 font-body text-sm text-cream placeholder:text-stone/30 transition-colors duration-200"
      />
    </div>
  )
}

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done'>('idle')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => setStatus('done'), 900)
  }

  if (status === 'done') {
    return (
      <div className="py-16 text-center">
        <span className="text-gold font-display text-2xl block mb-5 select-none">✦</span>
        <p className="font-display text-3xl font-light text-cream mb-3">Mensagem enviada</p>
        <p className="font-body text-sm text-stone">Entraremos em contacto brevemente.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Field label="Nome" type="text" placeholder="O seu nome" required />
        <Field label="Email" type="email" placeholder="email@exemplo.com" required />
      </div>

      <div>
        <label className="block font-body text-xs tracking-[0.2em] uppercase text-stone mb-3">
          Assunto
        </label>
        <select className="w-full bg-card border-b border-rim focus:border-gold outline-none py-3 px-0 font-body text-sm text-cream transition-colors duration-200 cursor-pointer">
          <option value="collections">Coleções</option>
          <option value="orders">Encomendas</option>
          <option value="partnerships">Parcerias</option>
          <option value="other">Outro</option>
        </select>
      </div>

      <div>
        <label className="block font-body text-xs tracking-[0.2em] uppercase text-stone mb-3">
          Mensagem
        </label>
        <textarea
          required
          rows={5}
          placeholder="A sua mensagem..."
          className="w-full bg-transparent border-b border-rim focus:border-gold outline-none py-3 font-body text-sm text-cream placeholder:text-stone/30 transition-colors duration-200 resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="font-body text-xs tracking-[0.2em] uppercase px-10 py-4 border border-gold/50 text-gold hover:bg-gold hover:text-ink transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? 'A enviar...' : 'Enviar Mensagem'}
      </button>
    </form>
  )
}
