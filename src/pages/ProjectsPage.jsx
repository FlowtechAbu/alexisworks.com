import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { sendEmail } from '../utils/sendEmail'

const PROJECTS = [
  {
    title: 'Basement Renovation – Office, Entertainment, Laundry & Bath',
    description:
      'This basement renovation transformed an underutilized space into a multifunctional retreat. The client wanted a private home office paired with a full entertainment setup, laundry room, and bathroom — all completed to an exceptional standard.',
    img: '/basement-renovation-ftre.webp',
    href: '/projects/basement-renovation',
  },
  {
    title: 'NYC Gut Renovation',
    description:
      'This New York City apartment underwent a complete gut renovation that redefined its layout and aesthetic. From structural work to finish details, every element was reimagined and executed with precision.',
    img: '/contact-us-cta-img-b.avif',
    href: '/projects/nyc-gut-renovation',
  },
  {
    title: "Hell's Kitchen Apartment Renovation – Full Gut Remodel & Modern Redesign",
    description:
      "Following the success of their first NYC apartment renovation, the owner tasked Alexis with a complete gut remodel of this Hell's Kitchen unit — delivering a modern aesthetic with functional, high-quality finishes throughout.",
    img: '/contact-us-cta-img-c.avif',
    href: '/projects/gut-remodel-modern-renovation',
  },
]

const cardVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 },
  }),
}

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: d },
  }),
}

const inputStyle = {
  width: '100%',
  fontFamily: 'var(--font-body)',
  fontSize: '0.9rem',
  color: 'var(--color-text-primary)',
  background: '#fff',
  border: '1px solid #e0e0e0',
  padding: '12px 14px',
  outline: 'none',
  transition: 'border-color 0.2s',
  borderRadius: 0,
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

export default function ProjectsPage() {
  const ref1    = useRef(null)
  const ref2    = useRef(null)
  const inView1  = useInView(ref1, { once: true, margin: '-80px' })
  const inView2  = useInView(ref2, { once: true, margin: '-80px' })
  const [sent, setSent]       = useState(false)
  const [error, setError]     = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  return (
    <>
      {/* ── Projects grid section ── */}
      <section style={{ background: '#fff', paddingTop: 110 }} ref={ref1}>
        <div className="container section-pad">

          {/* Header */}
          <div style={{ marginBottom: 56 }}>
            <motion.p
              initial="hidden" animate={inView1 ? 'visible' : 'hidden'} custom={0}
              variants={cardVariants}
              className="eyebrow eyebrow--light"
              style={{ marginBottom: 14 }}
            >
              The Works
            </motion.p>
            <motion.h1
              initial="hidden" animate={inView1 ? 'visible' : 'hidden'} custom={0.1}
              variants={cardVariants}
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                fontWeight: 700,
                color: 'var(--color-text-primary)',
                lineHeight: 1.1,
              }}
            >
              Recent Projects
            </motion.h1>
          </div>

          {/* Cards grid */}
          <div
            data-pp-grid
            style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr 1fr',
              gap: 24,
              alignItems: 'stretch',
            }}
          >
            {PROJECTS.map((p, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                animate={inView1 ? 'visible' : 'hidden'}
                variants={cardVariants}
                style={{ cursor: p.href ? 'pointer' : 'default', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                onClick={() => p.href && (navigate(p.href), window.scrollTo({ top: 0 }))}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
              >
                <div style={{ overflow: 'hidden', height: 380, flexShrink: 0 }}>
                  <img
                    src={p.img}
                    alt={p.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.6s ease',
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
                <div style={{ paddingTop: 20 }}>
                  <h3 style={{
                    fontSize: i === 0 ? '1.2rem' : '1rem',
                    fontWeight: 600,
                    color: 'var(--color-text-primary)',
                    lineHeight: 1.35,
                    marginBottom: 10,
                  }}>
                    {p.title}
                  </h3>
                  <p style={{
                    fontSize: '0.9rem',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.65,
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}>
                    {p.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div style={{ borderBottom: '1px solid var(--color-border)' }} />
      </section>

      {/* ── Let's Work Together ── */}
      <section style={{ background: '#fff' }} ref={ref2}>
        <div className="container section-pad">
          <div data-pp-form-grid style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(40px, 6vw, 80px)',
            alignItems: 'stretch',
          }}>

            {/* Left — image */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={inView2 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              style={{ overflow: 'hidden', minHeight: 480 }}
            >
              <img
                src="/lets-work-img.avif"
                alt="Renovation project"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </motion.div>

            {/* Right — form */}
            <motion.div
              initial="hidden" animate={inView2 ? 'visible' : 'hidden'} custom={0.1}
              variants={fadeUp}
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
            >
              <h2 style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
                fontWeight: 700,
                color: 'var(--color-text-primary)',
                lineHeight: 1.15,
                marginBottom: 12,
              }}>
                Let's Work Together
              </h2>
              <p style={{
                fontSize: '0.9375rem',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.65,
                marginBottom: 32,
              }}>
                We're here to help you bring your construction project to life! Whether you have questions, want to discuss your ideas.
              </p>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ padding: '24px 28px', background: 'var(--color-gray)', borderLeft: '4px solid var(--color-red)' }}
                >
                  <p style={{ fontWeight: 700, marginBottom: 4 }}>Message sent!</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
                    We'll get back to you within 1 business day.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={async e => {
                  e.preventDefault(); setLoading(true); setError(false)
                  const fd = new FormData(e.target)
                  try {
                    await sendEmail({ from_name: `${fd.get('first_name')} ${fd.get('last_name')}`, from_email: fd.get('email'), phone: fd.get('phone'), message: fd.get('message') })
                    setSent(true)
                  } catch { setError(true) } finally { setLoading(false) }
                }}>
                  <div data-pp-row style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                    <div>
                      <label style={labelStyle}>First Name</label>
                      <input name="first_name" required style={inputStyle} placeholder="Jane"
                        onFocus={e => e.target.style.borderColor = 'var(--color-text-primary)'}
                        onBlur={e => e.target.style.borderColor = '#e0e0e0'}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Last Name</label>
                      <input name="last_name" required style={inputStyle} placeholder="Smith"
                        onFocus={e => e.target.style.borderColor = 'var(--color-text-primary)'}
                        onBlur={e => e.target.style.borderColor = '#e0e0e0'}
                      />
                    </div>
                  </div>
                  <div style={{ marginBottom: 16 }}>
                    <label style={labelStyle}>Email</label>
                    <input name="email" required type="email" style={inputStyle} placeholder="jane@alexisworks.com"
                      onFocus={e => e.target.style.borderColor = 'var(--color-text-primary)'}
                      onBlur={e => e.target.style.borderColor = '#e0e0e0'}
                    />
                  </div>
                  <div style={{ marginBottom: 16 }}>
                    <label style={labelStyle}>Phone</label>
                    <input name="phone" type="tel" style={inputStyle} placeholder="+1(212) 555-7890"
                      onFocus={e => e.target.style.borderColor = 'var(--color-text-primary)'}
                      onBlur={e => e.target.style.borderColor = '#e0e0e0'}
                    />
                  </div>
                  <div style={{ marginBottom: 28 }}>
                    <label style={labelStyle}>Message</label>
                    <textarea
                      name="message" required rows={5}
                      placeholder="Type something..."
                      style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                      onFocus={e => e.target.style.borderColor = 'var(--color-text-primary)'}
                      onBlur={e => e.target.style.borderColor = '#e0e0e0'}
                    />
                  </div>
                  {error && <p style={{ color: 'var(--color-red)', fontSize: '0.875rem', marginBottom: 16 }}>Something went wrong. Please try again.</p>}
                  <button type="submit" className="btn btn-dark" disabled={loading} style={{ width: '100%', justifyContent: 'center' }}>
                    {loading ? 'Sending…' : 'Submit'}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            [data-pp-grid] { grid-template-columns: 1fr 1fr !important; }
            [data-pp-form-grid] { grid-template-columns: 1fr !important; }
            [data-pp-row] { grid-template-columns: 1fr 1fr !important; }
          }
          @media (max-width: 600px) {
            [data-pp-grid] { grid-template-columns: 1fr !important; }
            [data-pp-row] { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </>
  )
}
