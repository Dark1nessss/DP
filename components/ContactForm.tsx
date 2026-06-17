'use client'

import { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

function Field({
  name,
  label,
  type,
  placeholder,
  required,
}: {
  name: string
  label: string
  type: string
  placeholder: string
  required?: boolean
}) {
  return (
    <div className="space-y-3">
      <label className="block font-body text-xs tracking-[0.2em] uppercase text-stone mb-2">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-3xl bg-card border border-rim/40 px-4 py-3 font-body text-sm text-cream placeholder:text-stone/40 outline-none transition-all duration-200 focus:border-gold focus:ring-1 focus:ring-gold/25"
      />
    </div>
  )
}

function SelectField({
  name,
  label,
  options,
  value,
  onValueChange,
}: {
  name: string
  label: string
  options: { value: string; label: string }[]
  value?: string
  onValueChange?: (value: string) => void
}) {
  return (
    <div className="space-y-3">
      <label className="block font-body text-xs tracking-[0.2em] uppercase text-stone mb-2">
        {label}
      </label>
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className="w-full rounded-3xl bg-card border border-rim/40 px-4 py-3 pr-10 font-body text-sm text-cream outline-none transition-all duration-200 cursor-pointer hover:border-rim/60 focus:border-gold focus:ring-1 focus:ring-gold/25 data-[placeholder]:text-stone/40">
          <SelectValue placeholder="Selecione uma opção" />
        </SelectTrigger>
        <SelectContent className="bg-card border border-rim/40 rounded-lg">
          <SelectGroup>
            {options.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                className="cursor-pointer hover:bg-rim/40 focus:bg-rim/40 text-cream"
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [subject, setSubject] = useState<string>('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get('name')?.toString().trim() ?? ''
    const email = formData.get('email')?.toString().trim() ?? ''
    const message = formData.get('message')?.toString().trim() ?? ''

    if (!name || !email || !subject || !message) {
      setErrorMessage('Por favor preencha todos os campos antes de enviar.')
      return
    }

    setStatus('sending')
    setErrorMessage(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject, message }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data?.error ?? 'Erro desconhecido')
      }

      setStatus('done')
    } catch (error) {
      setErrorMessage((error as Error).message || 'Falha ao enviar a mensagem.')
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div className="rounded-[2rem] border border-gold/20 bg-card/80 p-14 text-center shadow-[0_35px_100px_rgba(0,0,0,0.35)]">
        <span className="text-gold font-display text-2xl block mb-5 select-none">✦</span>
        <p className="font-display text-3xl font-light text-cream mb-3">Mensagem enviada</p>
        <p className="font-body text-sm text-stone leading-relaxed max-w-xl mx-auto">
          Obrigado pelo contacto! A sua mensagem chegou com sucesso e será tratada com prioridade. Vou responder em breve.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Field name="name" label="Nome" type="text" placeholder="O seu nome" required />
        <Field name="email" label="Email" type="email" placeholder="email@exemplo.com" required />
      </div>

      <SelectField
        name="subject"
        label="Assunto"
        value={subject}
        onValueChange={setSubject}
        options={[
          { value: 'collections', label: 'Coleções' },
          { value: 'orders', label: 'Encomendas' },
          { value: 'partnerships', label: 'Parcerias' },
          { value: 'other', label: 'Outro' },
        ]}
      />

      <div className="space-y-2">
        <label className="block font-body text-xs tracking-[0.2em] uppercase text-stone mb-2">
          Mensagem
        </label>
        <textarea
          name="message"
          required
          rows={6}
          placeholder="A sua mensagem..."
          className="w-full min-h-[180px] rounded-3xl bg-card border border-rim/40 px-4 py-4 font-body text-sm text-cream placeholder:text-stone/40 outline-none transition-all duration-200 focus:border-gold focus:ring-1 focus:ring-gold/25 resize-none"
        />
      </div>
      <p className="font-body text-[11px] uppercase tracking-[0.35em] text-stone/50">
        Formato ideal: partilhe detalhes, dúvidas ou proposta de parceria.
      </p>

      {errorMessage ? (
        <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-4 text-sm text-red-100">
          {errorMessage}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-flex items-center justify-center gap-2 font-body text-xs tracking-[0.2em] uppercase rounded-full px-12 py-4 border border-gold/60 text-gold hover:bg-gold hover:text-ink transition-all duration-300 shadow-[0_10px_30px_rgba(201,168,108,0.15)] disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? 'A enviar...' : 'Enviar Mensagem'}
      </button>
    </form>
  )
}
