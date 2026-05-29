import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { from_name, from_email, phone, message } = req.body

  try {
    await resend.emails.send({
      from: 'Alexis Works <onboarding@resend.dev>',
      to: 'abubakr@briqbi.com',
      subject: `New message from ${from_name}`,
      html: `
        <p><strong>Name:</strong> ${from_name}</p>
        <p><strong>Email:</strong> ${from_email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <hr />
        <p>${message}</p>
      `,
    })
    res.status(200).json({ ok: true })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
