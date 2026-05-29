import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const PROJECTS = [
  {
    title: 'Basement Renovation – Office, Entertainment, Laundry & Bath',
    description:
      'This basement renovation transformed an underutilized space into a multifunctional retreat. The client wanted a private home office paired with a full entertainment setup, laundry room, and bathroom — all completed to an exceptional standard.',
    img: '/basement-renovation-ftre.webp',
    tag: 'Renovation',
  },
  {
    title: 'NYC Gut Renovation',
    description:
      'This New York City apartment underwent a complete gut renovation that redefined its layout and aesthetic. From structural work to finish details, every element was reimagined and executed with precision.',
    img: '/contact-us-cta-img-b.avif',
    tag: 'Renovation',
  },
  {
    title: "Hell's Kitchen Apartment Renovation – Full Gut Remodel & Modern Redesign",
    description:
      "Following the success of their first NYC apartment renovation, the owner tasked Alexis with a complete gut remodel of this Hell's Kitchen unit — delivering a modern aesthetic with functional, high-quality finishes throughout.",
    img: '/contact-us-cta-img-c.avif',
    tag: 'Renovation',
  },
]

const cardVariants = {
  hidden:  { opacity: 0, y: 48 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: i * 0.15 },
  }),
}

export default function Projects() {
  const ref      = useRef(null)
  const inView   = useInView(ref, { once: true, margin: '-80px' })
  const navigate = useNavigate()

  return (
    <section id="projects" style={{ background: '#0a0a0a' }}>
      <div className="container section-pad" ref={ref}>
        {/* Header row */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: 24,
          marginBottom: 56,
          flexWrap: 'wrap',
        }}>
          <div>
            <motion.p
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={0}
              variants={cardVariants}
              className="eyebrow"
              style={{ marginBottom: 14 }}
            >
              Our Projects
            </motion.p>
            <motion.h2
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={0.1}
              variants={cardVariants}
              className="section-title section-title--light"
              style={{ maxWidth: 560 }}
            >
              From Plans to Perfection —{' '}
              <em style={{ fontStyle: 'italic', fontWeight: 400 }}>Our Work Speaks for Itself.</em>
            </motion.h2>
          </div>
          <motion.button
            className="btn"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0.15}
            variants={cardVariants}
            onClick={() => { navigate('/projects'); window.scrollTo({ top: 0 }) }}
            style={{
              color: '#fff',
              background: 'none',
              border: 'none',
              paddingBottom: 4,
              borderBottom: '1px solid rgba(255,255,255,0.3)',
              transition: 'border-color 0.2s',
              cursor: 'pointer',
            }}
            onMouseEnter={e => e.currentTarget.style.borderBottom = '1px solid #fff'}
            onMouseLeave={e => e.currentTarget.style.borderBottom = '1px solid rgba(255,255,255,0.3)'}
          >
            All Projects
          </motion.button>
        </div>

        {/* Cards grid — first col 2× wider */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr',
          gap: 24,
          alignItems: 'stretch',
        }}
        data-grid>
          {PROJECTS.map((p, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={cardVariants}
              style={{ cursor: 'pointer', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              {/* Image */}
              <div style={{ overflow: 'hidden', height: 380, flexShrink: 0, position: 'relative' }}>
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

              {/* Text — no tag */}
              <div style={{ paddingTop: 20 }}>
                <h3 style={{
                  fontSize: i === 0 ? '1.2rem' : '1rem',
                  fontWeight: 600,
                  color: '#fff',
                  lineHeight: 1.35,
                  marginBottom: 12,
                }}>
                  {p.title}
                </h3>
                <p style={{
                  fontSize: 16,
                  color: '#fff',
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

      <style>{`
        @media (max-width: 900px) {
          #projects [data-grid] { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          #projects [data-grid] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
