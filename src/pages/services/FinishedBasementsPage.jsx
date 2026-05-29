import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const HERO_IMG = '/Finished-Base-img.webp'

const WHY_PARA = "Our Finished Basements service focuses on transforming lower-level spaces into beautiful, functional extensions of your home. Alexis handles every step—from initial design concepts and permits to final finishes and custom features. We specialize in blending practicality with aesthetics, ensuring basements are comfortable, energy-efficient, and aligned with your vision. Whether you want to expand your living space, increase property value, or create a custom entertainment hub, Alexis delivers solutions that bring your basement to life."

const POINTS = [
  'Structural build-out with framing, drywall, and ceilings',
  'Personalized design consultation and space planning',
  'Flooring installation (carpet, tile, vinyl, or hardwood)',
  'Lighting, electrical, and plumbing setup as needed',
  'Waterproofing, insulation, and ventilation systems',
  'Custom finishes, built-ins, and décor options',
]

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: d },
  }),
}

export default function FinishedBasementsPage() {
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
            Finished Basements
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            style={{ overflow: 'hidden' }}
          >
            <img
              src={HERO_IMG}
              alt="Finished Basements"
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
