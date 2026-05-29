import 'dotenv/config'
import http from 'http'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

http.createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    res.writeHead(204); res.end(); return
  }

  if (req.url === '/api/send' && req.method === 'POST') {
    let body = ''
    req.on('data', chunk => { body += chunk })
    req.on('end', async () => {
      const { from_name, from_email, phone, message } = JSON.parse(body)
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
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ ok: true }))
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ error: err.message }))
      }
    })
    return
  }

  res.writeHead(404); res.end()
}).listen(3001, () => console.log('API server running on http://localhost:3001'))
