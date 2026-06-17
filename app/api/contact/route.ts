import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

const host = process.env.MAILTRAP_HOST
const port = Number(process.env.MAILTRAP_PORT)
const user = process.env.MAILTRAP_USER
const pass = process.env.MAILTRAP_PASS
const from = process.env.MAILTRAP_FROM
const to = process.env.MAILTRAP_TO

if (!host || !port || !user || !pass || !from || !to) {
  console.warn('Mailtrap environment variables are not fully configured.')
}

const transporter = nodemailer.createTransport({
  host,
  port,
  auth: {
    user,
    pass,
  },
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
    }

    await transporter.sendMail({
      from: `${name} <${from}>`,
      to,
      subject: `Novo contacto Atlas Ousia — ${subject}`,
      replyTo: email,
      html: `
        <div style="font-family: system-ui, sans-serif; color: #e8e0d4; background: #060e09; padding: 32px;">
          <div style="max-width: 700px; margin: 0 auto; background: #0c1a12; border: 1px solid #1a3324; border-radius: 32px; overflow: hidden; box-shadow: 0 30px 90px rgba(0,0,0,0.45);">
            <div style="background: linear-gradient(135deg, #c9a86c, #4db394); padding: 24px;">
              <h1 style="margin: 0; font-size: 24px; color: #060e09; letter-spacing: 0.1em; text-transform: uppercase;">Novo contacto Atlas Ousia</h1>
            </div>
            <div style="padding: 32px; background: #2f7f5b; color: #e8e0d4;">
              <p style="margin:0 0 16px; font-size: 16px;"><strong>Nome:</strong> ${name}</p>
              <p style="margin:0 0 16px; font-size: 16px;"><strong>Email:</strong> ${email}</p>
              <p style="margin:0 0 24px; font-size: 16px;"><strong>Assunto:</strong> ${subject}</p>
              <div style="padding: 24px; background: rgba(201,168,108,0.08); border-radius: 20px;">
                <p style="margin:0; font-size: 15px; line-height: 1.7; color: #f4ecd9;">${message.replace(/\n/g, '<br/>')}</p>
              </div>
            </div>
          </div>
        </div>
      `,
    })

    await transporter.sendMail({
      from,
      to: email,
      subject: 'Obrigado pelo seu contacto — Atlas Ousia',
      html: `
        <div style="font-family: system-ui, sans-serif; background: #f9f1dd; color: #060e09; padding: 24px;">
          <div style="max-width: 700px; margin: 0 auto; border-radius: 32px; overflow: hidden; box-shadow: 0 30px 90px rgba(0,0,0,0.12); background: #ffffff; border: 1px solid rgba(11,46,34,0.08);">
            <div style="background: linear-gradient(135deg, #c9a86c, #4db394); padding: 30px; text-align: center;">
              <h1 style="margin: 0; font-size: 28px; color: #060e09; letter-spacing: 0.1em; text-transform: uppercase;">Atlas Ousia</h1>
              <p style="margin: 8px 0 0; color: #2f7f5b; font-size: 14px; text-transform: uppercase; letter-spacing: 0.2em;">Obrigado pelo seu contacto</p>
            </div>
            <div style="padding: 32px;">
              <p style="margin: 0 0 18px; font-size: 16px; line-height: 1.8;">Olá ${name},</p>
              <p style="margin: 0 0 18px; font-size: 16px; line-height: 1.8;">Recebi a sua mensagem com atenção. Obrigado por partilhar o seu interesse em Atlas Ousia — a marca conceptual de difusores sazonais e olfativos.</p>
              <p style="margin: 0 0 18px; font-size: 16px; line-height: 1.8;">Vou ler o seu pedido com carinho e responder o mais breve possível. Enquanto isso, pode explorar as coleções e as histórias que inspiram cada estação.</p>
              <div style="margin: 24px 0; text-align: center;">
                <a href="https://atlasousia.pt" style="display: inline-block; padding: 14px 28px; border-radius: 999px; background: #2f7f5b; color: #f9f1dd; text-decoration: none; font-weight: 600; letter-spacing: 0.12em;">Continue a explorar</a>
              </div>
              <p style="margin: 0; font-size: 16px; line-height: 1.8;">Com gratidão,<br/>Carolina Ferreira</p>
            </div>
            <div style="background: #f4ecd9; color: #7a9080; font-size: 13px; padding: 20px; text-align: center;">
              Este é um projeto conceptual de design e branding para uma marca de difusores sazonais.
            </div>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Falha ao enviar o email.' }, { status: 500 })
  }
}
