import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const HERO_IMG = '/Demolition-img.avif'

const WHY_PARAS = [
  'Demolition is the first critical step of any renovation or remodel—and when handled incorrectly, it can create significant risks for both the project and surrounding residents. At Alexis, we approach every demolition job with a combination of precision, planning, and compliance expertise.',
  "Whether you're remodeling a single apartment or gutting an entire multi-unit structure, our team ensures a controlled and safe demolition process that protects neighboring units, building infrastructure, and your timeline.",
  "We understand the complexities of working in New York's multifamily buildings—from elevator scheduling and quiet hours to fire-rated partitioning and DOB notifications. Our crews are trained to minimize disruption while staying aligned with building management and HOA/condo requirements.",
]

const FEATURES = [
  {
    title: 'Pre-Demolition Planning & Coordination',
    points: [
      'Site walkthrough and scope evaluation',
      'Coordination with building management and boards (where applicable)',
      'Submission of insurance, DOB permits, and required documentation',
      'Scheduling logistics for elevator use, debris removal, and protected entryways',
    ],
  },
  {
    title: 'Demolition Execution',
    points: [
      'Full or selective interior demolition (walls, floors, fixtures, etc.)',
      'Structural removals as per approved drawings and engineer sign-off',
      'Dust containment, negative air machines, and floor/wall protection systems',
      'Adherence to quiet hours and building rules to reduce tenant disruption',
    ],
  },
  {
    title: 'Cleanup & Disposal',
    points: [
      'Daily site cleanup and end-of-job debris removal',
      'Responsible disposal of waste material through certified haulers',
      'Recycling of eligible materials (metal, concrete, drywall) when possible',
      'Final broom-sweep and handoff to construction or renovation team',
    ],
  },
  {
    title: 'Compliance and Safety Management',
    points: [
      'Site supervisors',
      'Site signage, controlled access barriers, and safety gear compliance',
      'DOB and insurance compliance documentation on file and onsite',
    ],
  },
  {
    title: 'Optional Add-On Services',
    points: [
      'Selective salvage of reusable materials (for resale or reuse)',
      'Pre-demolition documentation and photography for insurance records',
      'Coordination with architects and engineers for pre-renovation conditions',
    ],
  },
]

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: d },
  }),
}

export default function DemolitionPage() {
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
            Demolition
          </motion.h1>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            style={{ overflow: 'hidden' }}
          >
            <img
              src={HERO_IMG}
              alt="Demolition"
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

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 64 }}>
            {WHY_PARAS.map((p, i) => (
              <motion.p
                key={i}
                initial="hidden" animate={contentInView ? 'visible' : 'hidden'} custom={0.08 * (i + 1)}
                variants={fadeUp}
                style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75 }}
              >
                {p}
              </motion.p>
            ))}
          </div>

          {/* Built on Experience */}
          <motion.h2
            initial="hidden" animate={contentInView ? 'visible' : 'hidden'} custom={0.3}
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
                initial="hidden" animate={contentInView ? 'visible' : 'hidden'} custom={0.35 + i * 0.08}
                variants={fadeUp}
              >
                <p style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#fff', marginBottom: 12 }}>
                  {i + 1}. {f.title}
                </p>
                <ul style={{ listStyle: 'disc', paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {f.points.map((pt, j) => (
                    <li key={j} style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
