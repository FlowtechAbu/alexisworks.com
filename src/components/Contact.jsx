import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { sendEmail } from '../utils/sendEmail'

const CONTACT_IMG = '/home-contact-img.avif'

const inputStyle = {
  width: '100%',
  fontFamily: 'var(--font-body)',
  fontSize: '0.9rem',
  color: 'var(--color-text-primary)',
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid var(--color-border)',
  padding: '12px 0',
  outline: 'none',
  transition: 'border-color 0.2s',
}

const labelStyle = {
  fontSize: '0.75rem',
  fontWeight: 600,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: 'var(--color-text-muted)',
  display: 'block',
  marginBottom: 6,
}

export default function Contact() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [sent, setSent]       = useState(false)
  const [error, setError]     = useState(false)
  const [loading, setLoading] = useState(false)

  const fadeUp = {
    hidden:  { opacity: 0, y: 28 },
    visible: (d = 0) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: d },
    }),
  }

  return (
    <section id="contact" ref={ref} style={{ background: 'var(--color-gray)' }}>
      <div className="container section-pad">
        <div data-contact-grid style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(40px, 6vw, 96px)',
          alignItems: 'start',
        }}>
          {/* Left — form */}
          <div>
            <motion.p
              initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0}
              variants={fadeUp}
              className="eyebrow eyebrow--light"
              style={{ marginBottom: 14 }}
            >
              Get in Touch
            </motion.p>
            <motion.h2
              initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.1}
              variants={fadeUp}
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 700,
                color: 'var(--color-text-primary)',
                lineHeight: 1.2,
                marginBottom: 20,
              }}
            >
              Contact us
            </motion.h2>
            <motion.p
              initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.2}
              variants={fadeUp}
              className="section-body"
              style={{ marginBottom: 40 }}
            >
              We'd love to hear from you! Whether you have a new project in mind, need expert consultation, or just want to learn more about our work, our team is ready to assist. Reach out to us, and let's create something remarkable.
            </motion.p>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ padding: '24px 28px', background: '#fff', borderLeft: '4px solid var(--color-red)' }}
              >
                <p style={{ fontWeight: 700, marginBottom: 4 }}>Message sent!</p>
                <p className="section-body" style={{ fontSize: '0.875rem' }}>
                  We'll get back to you within 1 business day.
                </p>
              </motion.div>
            ) : (
              <motion.form
                initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.3}
                variants={fadeUp}
                onSubmit={async e => {
                  e.preventDefault(); setLoading(true); setError(false)
                  const fd = new FormData(e.target)
                  try {
                    await sendEmail({ from_name: `${fd.get('first_name')} ${fd.get('last_name')}`, from_email: fd.get('email'), phone: fd.get('phone'), message: fd.get('message') })
                    setSent(true)
                  } catch { setError(true) } finally { setLoading(false) }
                }}
              >
                <div data-form-row style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 24 }}>
                  <div>
                    <label style={labelStyle}>First Name</label>
                    <input name="first_name" required style={inputStyle} placeholder="Jane"
                      onFocus={e => e.target.style.borderBottomColor = 'var(--color-text-primary)'}
                      onBlur={e => e.target.style.borderBottomColor = 'var(--color-border)'}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Last Name</label>
                    <input name="last_name" required style={inputStyle} placeholder="Smith"
                      onFocus={e => e.target.style.borderBottomColor = 'var(--color-text-primary)'}
                      onBlur={e => e.target.style.borderBottomColor = 'var(--color-border)'}
                    />
                  </div>
                </div>
                <div data-form-row style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 24 }}>
                  <div>
                    <label style={labelStyle}>Email</label>
                    <input name="email" required type="email" style={inputStyle} placeholder="jane@alexisworks.com"
                      onFocus={e => e.target.style.borderBottomColor = 'var(--color-text-primary)'}
                      onBlur={e => e.target.style.borderBottomColor = 'var(--color-border)'}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone</label>
                    <input name="phone" type="tel" style={inputStyle} placeholder="+1(212) 555-7890"
                      onFocus={e => e.target.style.borderBottomColor = 'var(--color-text-primary)'}
                      onBlur={e => e.target.style.borderBottomColor = 'var(--color-border)'}
                    />
                  </div>
                </div>
                <div style={{ marginBottom: 36 }}>
                  <label style={labelStyle}>Message</label>
                  <textarea
                    name="message" required rows={5}
                    placeholder="Type something..."
                    style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                    onFocus={e => e.target.style.borderBottomColor = 'var(--color-text-primary)'}
                    onBlur={e => e.target.style.borderBottomColor = 'var(--color-border)'}
                  />
                </div>
                {error && <p style={{ color: 'var(--color-red)', fontSize: '0.875rem', marginBottom: 16 }}>Something went wrong. Please try again.</p>}
                <button type="submit" className="btn btn-dark" disabled={loading}>{loading ? 'Sending…' : 'Submit'}</button>
              </motion.form>
            )}
          </div>

          {/* Right — image */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            style={{ overflow: 'hidden', height: '100%', minHeight: 500 }}
          >
            <img
              src={CONTACT_IMG}
              alt="Kitchen renovation"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #contact [data-contact-grid] { grid-template-columns: 1fr !important; }
          #contact [data-form-row] { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          #contact [data-contact-grid] { gap: 32px !important; }
        }
      `}</style>
    </section>
  )
}
