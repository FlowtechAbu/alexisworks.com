import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const TESTIMONIALS = [
  {
    quote: "Alexis completely transformed our basement into a beautiful, functional space. Their team was professional, on-time, and the craftsmanship is outstanding. We couldn't be happier!",
    author: 'Michael R.',
    role: 'Homeowner, Brooklyn NY',
  },
  {
    quote: "From the initial consultation to the final walkthrough, the Alexis team was exceptional. They handled our full gut renovation with precision and care. Highly recommend!",
    author: 'Sarah T.',
    role: 'Apartment Owner, Manhattan',
  },
  {
    quote: "We hired Alexis for flooring installation throughout our entire apartment. The attention to detail and quality of work exceeded our expectations. True professionals.",
    author: 'James & Lisa K.',
    role: 'Homeowners, Queens NY',
  },
]

const StarRating = () => (
  <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
    {[1,2,3,4,5].map(i => (
      <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#C41414">
        <path d="M7 0l1.764 5.43H14l-4.618 3.354 1.764 5.43L7 10.862l-4.146 3.352 1.764-5.43L0 5.43h5.236z"/>
      </svg>
    ))}
  </div>
)

export default function Testimonials() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="testimonials" ref={ref} style={{ background: 'var(--color-gray)' }}>
      <div className="container section-pad">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="eyebrow eyebrow--light"
            style={{ marginBottom: 14 }}
          >
            Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="section-title"
            style={{ maxWidth: 540, margin: '0 auto' }}
          >
            What Our Clients Say
          </motion.h2>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
        }}>
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 }}
              style={{
                background: '#fff',
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <StarRating />
              <p style={{
                fontSize: '0.9375rem',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.75,
                flex: 1,
                marginBottom: 24,
                fontStyle: 'italic',
              }}>
                "{t.quote}"
              </p>
              <div>
                <p style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--color-text-primary)' }}>{t.author}</p>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: 2 }}>{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #testimonials .container > div:last-child {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          #testimonials .container > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
