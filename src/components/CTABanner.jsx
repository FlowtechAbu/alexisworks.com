import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const BG = '/apartment-ren-img.avif'

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: d },
  }),
}

export default function CTABanner() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: 480,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Background image */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url(${BG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
        backgroundAttachment: 'fixed',
        willChange: 'transform',
      }} />
      {/* Dark overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(0,0,0,0.82) 40%, rgba(0,0,0,0.55) 100%)',
      }} />

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: 80, paddingBottom: 80 }}>
        <div style={{ maxWidth: 640 }}>
          <motion.h2
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0}
            variants={fadeUp}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              color: '#fff',
              lineHeight: 1.2,
              marginBottom: 20,
            }}
          >
            Transforming spaces,<br />
            <span style={{ fontStyle: 'italic', fontWeight: 400 }}>Building Experiences.</span>
          </motion.h2>
          <motion.p
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0.15}
            variants={fadeUp}
            style={{
              fontSize: '0.9375rem',
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.7,
              marginBottom: 36,
              maxWidth: 480,
            }}
          >
            Ready to create something extraordinary? Whether you're designing a dream home, building cutting-edge workspace, or converting an urban space, we're here to turn your ideas into reality.
          </motion.p>
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0.3}
            variants={fadeUp}
            style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}
          >
            <a href="#contact" className="btn btn-primary">Get a Free Quote</a>
            <a href="#projects" className="btn btn-outline">View Our Work</a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
