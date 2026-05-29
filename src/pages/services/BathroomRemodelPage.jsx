import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const HERO_IMG = '/bathroom-remodel-img.avif'

const WHY_PARA = "Our Bathroom Remodel service is designed to transform outdated or inefficient bathrooms into spaces that enhance daily living. Alexis manages the entire process—from demolition and plumbing to tile installation and finishing touches. We specialize in incorporating modern features such as walk-in showers, soaking tubs, and energy-efficient fixtures while ensuring every element aligns with your style. With careful planning and expert craftsmanship, Alexis delivers bathrooms that balance luxury, convenience, and long-term durability."

const POINTS = [
  'Demolition and responsible disposal of old fixtures and finishes',
  'Design consultation with layout and material selections',
  'Installation of vanities, cabinets, and countertops',
  'Shower and tub installation with tile or glass enclosures',
  'Plumbing and fixture upgrades',
  'Lighting and ventilation solutions',
  'Finishing details including paint, mirrors, and hardware',
]

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: d },
  }),
}

export default function BathroomRemodelPage() {
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
            Bathroom Remodel
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            style={{ overflow: 'hidden' }}
          >
            <img
              src={HERO_IMG}
              alt="Bathroom Remodel"
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
