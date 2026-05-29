import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const HERO_IMG = '/flooring-img.webp'

const WHY_PARAS = [
  "Flooring and tilework serve as the literal and visual foundation of a well-renovated space. Poor installation can quickly diminish the impact of even the most beautiful materials. That's why at Alexis, our flooring and tile services combine aesthetic attention with structural integrity—ensuring each square foot is installed with care, precision, and long-term performance in mind.",
  "We help clients select and source materials that suit their space and lifestyle, while ensuring installation meets or exceeds all code requirements and board approvals where applicable. From underlayment and waterproofing to grout matching and edge transitions, we manage every detail to deliver a finish that feels high-end and cohesive.",
  "Whether updating a pre-war apartment or modernizing a new condo unit, our flooring and tile team is skilled in working within the constraints of New York buildings, including subfloor leveling, noise underlayment requirements, and material delivery limitations.",
]

const FEATURES = [
  {
    title: 'Design Consultation & Material Guidance',
    points: [
      'Recommendations on material types based on traffic, use, and budget',
      'Design support for pattern layouts (e.g., herringbone, chevron, stacked)',
      'Grout color and trim coordination to match design aesthetic',
      'Vendor coordination for sample delivery or in-person showroom visits',
    ],
  },
  {
    title: 'Site Prep & Demolition',
    points: [
      'Removal of existing flooring and tile (as needed)',
      'Subfloor inspection and leveling where required',
      'Installation of underlayment, noise-reducing mats, or waterproofing membranes',
      'Moisture barrier application for high-humidity or wet zones',
    ],
  },
  {
    title: 'Installation',
    points: [
      'Precise flooring installation (click-lock, glue-down, or nail-down)',
      'Tile layout, cutting, and placement using laser leveling tools',
      'Grouting, sealing, and edge finishing',
      'Transition strip installation between different flooring types',
    ],
  },
  {
    title: 'Cleanup & Protection',
    points: [
      'Full job site cleanup and protective covering if other trades will follow',
      'Care instructions provided for newly installed materials',
      'Post-installation walk-through to ensure satisfaction',
    ],
  },
  {
    title: 'HOA & Building Coordination',
    points: [
      'Review of flooring noise requirements (STC/IIC ratings)',
      'Insurance submission and delivery coordination for materials',
      'Documentation and product data sheets for condo board approval',
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

export default function FlooringTilePage() {
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
            Flooring & Tile
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            style={{ overflow: 'hidden' }}
          >
            <img
              src={HERO_IMG}
              alt="Flooring & Tile"
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
