import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const HERO_IMG = '/moving-img.avif'

const WHY_PARA = "Our Moving & Carting service is built around precision, professionalism, and trust. Alexis takes pride in providing a fully managed moving experience—from pre-move planning and packing to secure transport and efficient setup at your destination. For carting, our team offers timely pickup and responsible disposal, prioritizing recycling and sustainable practices wherever possible. With Alexis, you don't just get movers—you get a dedicated partner who ensures every step is handled with care and accountability."

const POINTS = [
  'Professional moving crew with proper training and equipment',
  'Packing supplies (boxes, tape, protective wrap, and labels)',
  'Disassembly and reassembly of furniture',
  'Secure transportation with insured vehicles',
  'Carting and eco-friendly disposal or recycling of unwanted items',
  'Optional storage solutions for short or long-term needs',
]

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: d },
  }),
}

export default function MovingCartingPage() {
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
            Moving & Carting
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            style={{ overflow: 'hidden' }}
          >
            <img
              src={HERO_IMG}
              alt="Moving & Carting"
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
