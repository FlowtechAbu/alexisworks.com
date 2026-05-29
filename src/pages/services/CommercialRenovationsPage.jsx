import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const HERO_IMG = '/commerical-ren-img.avif'

const WHY_PARA = "Our Commercial Renovations service focuses on creating professional spaces that match your business goals. Alexis partners with business owners, property managers, and designers to deliver customized renovations that are on time and on budget. From modernizing office interiors and building open-concept layouts to designing welcoming restaurants and customer-focused retail spaces, we manage the process with precision and care. With Alexis, your renovation not only improves the look and feel of your space but also enhances efficiency, customer satisfaction, and long-term value."

const POINTS = [
  'Demolition and site preparation with minimal business disruption',
  'Consultation and project planning with design recommendations',
  'Construction, installation, and finishing work',
  'Electrical, plumbing, and HVAC integration for commercial compliance',
  'Custom cabinetry, flooring, and fixtures suited to your business type',
  'Final inspections and cleanup for a move-in ready finish',
]

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: d },
  }),
}

export default function CommercialRenovationsPage() {
  const heroRef    = useRef(null)
  const contentRef = useRef(null)
  const heroInView    = useInView(heroRef,    { once: true, margin: '-60px' })
  const contentInView = useInView(contentRef, { once: true, margin: '-60px' })

  return (
    <div style={{ background: '#000', color: '#fff', paddingTop: 110 }}>

      {/* ── Hero ── */}
      <section ref={heroRef}>
        <div className="container" style={{ paddingTop: 56, paddingBottom: 0 }}>
          <motion.h1
            initial="hidden" animate={heroInView ? 'visible' : 'hidden'} custom={0}
            variants={fadeUp}
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              fontWeight: 500,
              color: '#fff',
              lineHeight: 1.1,
              marginBottom: 36,
            }}
          >
            Commerical Renovations
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            style={{ overflow: 'hidden' }}
          >
            <img
              src={HERO_IMG}
              alt="Commercial Renovations"
              style={{
                width: '100%',
                height: 'clamp(360px, 55vw, 620px)',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* ── Content ── */}
      <section ref={contentRef}>
        <div className="container" style={{ paddingTop: 72, paddingBottom: 'var(--spacing-section)', maxWidth: 820 }}>

          <motion.h2
            initial="hidden" animate={contentInView ? 'visible' : 'hidden'} custom={0}
            variants={fadeUp}
            style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
              fontWeight: 500,
              color: '#fff',
              lineHeight: 1.2,
              marginBottom: 20,
            }}
          >
            Why Chose Alexis?
          </motion.h2>

          <motion.p
            initial="hidden" animate={contentInView ? 'visible' : 'hidden'} custom={0.1}
            variants={fadeUp}
            style={{
              fontSize: '0.9375rem',
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.75,
              marginBottom: 64,
            }}
          >
            {WHY_PARA}
          </motion.p>

          <motion.h2
            initial="hidden" animate={contentInView ? 'visible' : 'hidden'} custom={0.2}
            variants={fadeUp}
            style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
              fontWeight: 500,
              color: '#fff',
              lineHeight: 1.2,
              marginBottom: 28,
            }}
          >
            Built on Experience, Driven by Results
          </motion.h2>

          <motion.ul
            initial="hidden" animate={contentInView ? 'visible' : 'hidden'} custom={0.3}
            variants={fadeUp}
            style={{ listStyle: 'disc', paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 10 }}
          >
            {POINTS.map((pt, i) => (
              <li key={i} style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
                {pt}
              </li>
            ))}
          </motion.ul>
        </div>
      </section>
    </div>
  )
}
