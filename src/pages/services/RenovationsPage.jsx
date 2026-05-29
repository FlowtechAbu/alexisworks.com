import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const HERO_IMG = '/apartment-ren-img.avif'

const FEATURES = [
  {
    title: 'Full & Gut Renovations',
    body: 'From single-room upgrades to complete gut renovations, we handle projects of every scale. Our team transforms outdated spaces into modern, functional, and beautifully finished homes that align with your vision.',
  },
  {
    title: 'Kitchen, Bathroom & Living Space Remodeling',
    body: 'We specialize in the high-impact spaces that matter most — kitchens, bathrooms, basements, and living areas. Every renovation is designed with functionality, comfort, and long-term value in mind.',
  },
  {
    title: 'Compliance with Insurance & HOA/Condo Requirements',
    body: 'Renovations in co-ops and condos often require meeting strict insurance standards and building rules. Our team is fully insured and experienced in providing the documentation needed to satisfy boards, HOAs, and management companies.',
  },
  {
    title: 'Experience with Condo Boards & Property Management',
    body: "Navigating approvals in New York City can be challenging. We've worked extensively with condo boards, co-op associations, and property managers, ensuring all renovation plans meet requirements while minimizing disruption to residents.",
  },
  {
    title: 'End-to-End Project Management',
    body: 'We manage the entire renovation process — from planning and permits to coordinating contractors and trades — so you can focus on the results. Our attention to detail ensures projects are completed efficiently, on time, and to the highest standards.',
  },
]

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: d },
  }),
}

export default function RenovationsPage() {
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
              maxWidth: 700,
            }}
          >
            Home & Apartment Renovations
          </motion.h1>
          {/* Hero image — inside container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            style={{ overflow: 'hidden' }}
          >
            <img
              src={HERO_IMG}
              alt="Home & Apartment Renovations"
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

          {/* Why Chose Alexis */}
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
            Your home is your kingdom and we want to make sure you always feel like the King or Queen of the castle. Whether you have completed plans, a picture or just an idea, Alexis can make your dream renovation a reality. Whether a complete gut reno or just an update, we provide a variety of high-quality options, and can also install fixtures that you purchased independently.
          </motion.p>

          {/* Built on Experience */}
          <motion.h2
            initial="hidden" animate={contentInView ? 'visible' : 'hidden'} custom={0.2}
            variants={fadeUp}
            style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
              fontWeight: 500,
              color: '#fff',
              lineHeight: 1.2,
              marginBottom: 40,
            }}
          >
            Built on Experience, Driven by Results
          </motion.h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
            {FEATURES.map((f, i) => (
              <motion.div
                key={i}
                initial="hidden" animate={contentInView ? 'visible' : 'hidden'} custom={0.25 + i * 0.08}
                variants={fadeUp}
              >
                <p style={{
                  fontSize: '0.9375rem',
                  fontWeight: 700,
                  color: '#fff',
                  marginBottom: 8,
                }}>
                  {i + 1}. {f.title}
                </p>
                <p style={{
                  fontSize: '0.9rem',
                  color: 'rgba(255,255,255,0.6)',
                  lineHeight: 1.75,
                }}>
                  {f.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
