import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

/* ── Data ──────────────────────────────────────────────────────── */
const SERVICES = [
  {
    title: 'Home & Apartment Renovations',
    href: '/services/renovations',
    body: 'From modern kitchen upgrades to complete basement transformations, Alexis Property Management & Delivery Services specializes in creating functional, inspired spaces tailored to your lifestyle. Our renovation team combines craftsmanship with attention to detail, ensuring every project enhances both the comfort and value of your home.',
    img: '/apartment-ren-img.avif',
    points: [
      'Personalized concept planning & space optimization',
      'Kitchen, bathroom, basement & entertainment area renovations',
      'Compliance with Insurance & HOA/Condo Requirements',
      'Property maintenance, handyman repairs & ongoing support',
      'End to End project management - Seamless coordination with movers, contractors & vendors',
    ],
  },
  {
    title: 'Demolition',
    href: '/services/demolition',
    body: 'From full-gut renovations to selective interior removals, Alexis delivers precise and professionally managed demolition services that meet building, insurance, and HOA requirements. Our team is experienced in navigating the logistical and compliance challenges of working in co-ops, condos, and multifamily buildings across NYC.',
    img: '/Demolition-img.avif',
    points: [
      'Interior and structural demolition for apartments, homes, and commercial spaces',
      'HOA and condo board compliance, permits, and documentation support',
      'Dust and debris containment systems to protect shared areas',
      'Full coordination of hauling and environmentally responsible disposal',
      'Experienced with NYC DOB regulations, permits, and site safety protocols',
    ],
  },
  {
    title: 'Flooring & Tile',
    href: '/services/flooring-tile',
    body: "At Alexis, we deliver expert installation of hardwood, engineered flooring, luxury vinyl, and custom tile across kitchens, bathrooms, and living areas. Whether it's a modern herringbone layout or a timeless subway tile backsplash, our attention to precision and finish transforms interiors into showcase spaces.",
    img: '/flooring-img.webp',
    points: [
      'Installation of hardwood, vinyl, laminate, and engineered wood',
      'Custom tile layouts for floors, walls, and backsplashes',
      'Expert underlayment prep and waterproofing where required',
      'Seamless transition work and edge detailing',
      'Sourcing support for premium and specialty materials',
    ],
  },
  {
    title: 'Moving & Carting',
    href: '/services/moving-carting',
    body: 'At Alexis, we provide professional moving and carting services tailored to residential, commercial, and specialty needs. Our experienced team handles everything from careful packing and secure transport to responsible disposal and heavy item carting. Whether you\'re relocating across town, clearing out a space, or moving valuable items, Alexis ensures efficiency, safety, and peace of mind.',
    img: '/moving-img.avif',
    points: [
      'Residential Moves – Safe and organized home moving services',
      'Commercial Relocations – Office, retail, and business transitions with minimal downtime',
      'Trusted & Insured – Every move is protected by insurance and delivered by vetted professionals',
      'End-to-End Service – From planning to final placement, we manage the entire move',
      'Minimal Disruption – Efficient scheduling designed to reduce downtime for homes or businesses',
    ],
  },
]

/* ── Service row ───────────────────────────────────────────────── */
function ServiceRow({ service, isOpen, onToggle, navigate }) {
  return (
    <div style={{ borderBottom: '1px solid var(--color-border)' }}>
      <div
        data-service-row
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1.4fr 1.6fr',
          gap: 40,
          alignItems: 'start',
          padding: '32px 0',
        }}
      >
        {/* Col 1 — title + body + CTA */}
        <div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 12,
            marginBottom: isOpen ? 16 : 0,
          }}>
            <h3 style={{
              fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)',
              fontWeight: 600,
              color: 'var(--color-text-primary)',
              lineHeight: 1.3,
            }}>
              {service.title}
            </h3>
            {/* Mobile-only toggle — hidden on desktop */}
            <button
              onClick={onToggle}
              className="service-toggle-mobile"
              style={{
                display: 'none',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1.25rem',
                color: 'var(--color-text-primary)',
                lineHeight: 1,
                padding: 4,
                flexShrink: 0,
              }}
            >
              {isOpen ? '−' : '+'}
            </button>
          </div>

          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                style={{ overflow: 'hidden' }}
              >
                <p style={{
                  fontSize: '0.875rem',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.75,
                  marginBottom: 24,
                }}>
                  {service.body}
                </p>
                <button
                  className="btn"
                  onClick={() => service.href && (navigate(service.href), window.scrollTo({ top: 0 }))}
                  style={{
                    color: '#fff',
                    background: '#111',
                    padding: '13px 22px',
                    transition: 'background 0.2s',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#C41414' }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#111' }}
                >
                  Learn More
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Col 2 — image */}
        <div style={{ overflow: 'hidden' }}>
          <img
            src={service.img}
            alt={service.title}
            style={{
              width: '100%',
              aspectRatio: isOpen ? '3 / 4' : '16 / 9',
              objectFit: 'cover',
              display: 'block',
              transition: 'aspect-ratio 0.35s ease',
            }}
          />
        </div>

        {/* Col 3 — desktop toggle + key points */}
        <div>
          {/* Desktop-only toggle — hidden on mobile */}
          <div className="service-toggle-desktop" style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: isOpen ? 16 : 0 }}>
            <button
              onClick={onToggle}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1.25rem',
                color: 'var(--color-text-primary)',
                lineHeight: 1,
                padding: 4,
              }}
            >
              {isOpen ? '−' : '+'}
            </button>
          </div>
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                style={{ overflow: 'hidden' }}
              >
                <p style={{
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--color-text-muted)',
                  marginBottom: 14,
                }}>
                  Key Point
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {service.points.map((pt, i) => (
                    <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
                        <circle cx="10" cy="10" r="10" fill="#1a1a1a"/>
                        <path d="M6 10l3 3 5-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                        {pt}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

/* ── Main component ────────────────────────────────────────────── */
export default function Services({
  title          = 'All the Services You Need, Under One Roof.',
  description    = 'At Alexis, we deliver complete renovation solutions that combine creativity, functionality, and lasting quality. From modern home upgrades to commercial improvements, our team brings expertise and precision to every project.',
  showButton     = false,
  showAccordion  = true,
}) {
  const [openIndex, setOpenIndex] = useState(0)
  const [openLeftIndex, setOpenLeftIndex] = useState(null)
  const ref      = useRef(null)
  const inView   = useInView(ref, { once: true, margin: '-80px' })
  const navigate = useNavigate()
  const gsapRef = useRef(null)

  const fadeUp = {
    hidden:  { opacity: 0, y: 36 },
    visible: (d = 0) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: d },
    }),
  }

  return (
    <section id="services" style={{ background: 'rgb(240 239 237)' }}>
      {/* ── Header ── */}
      <div className="container" style={{ paddingTop: 'var(--spacing-section)' }} ref={ref}>
        <div className="services-header" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(32px, 6vw, 96px)',
          alignItems: 'start',
          marginBottom: 72,
        }}>
          <div>
            <motion.p
              initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0}
              variants={fadeUp}
              className="eyebrow eyebrow--light"
              style={{ marginBottom: 14 }}
            >
              Our Service
            </motion.p>
            <motion.h2
              initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.1}
              variants={fadeUp}
              className="section-title"
            >
              {title}
            </motion.h2>
          </div>
          <div>
            <motion.p
              initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.25}
              variants={fadeUp}
              className="section-body"
              style={{ paddingTop: 8 }}
            >
              {description}
            </motion.p>
            {showButton && (
              <motion.button
                initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.35}
                variants={fadeUp}
                className="btn btn-dark"
                style={{ marginTop: 28 }}
                onClick={() => { navigate('/services'); window.scrollTo({ top: 0 }) }}
              >
                SEE ALL SERVICES
              </motion.button>
            )}
          </div>
        </div>
      </div>

      {/* ── Accordion + video ── */}
      {showAccordion && <div id="services-accordion" ref={gsapRef} style={{ background: 'rgb(240 239 237)' }}>
        <div className="container" style={{ padding: 0 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            minHeight: 520,
          }}>
            {/* Left — video */}
            <div
              id="accordion-img"
              style={{
                position: 'sticky',
                top: 0,
                alignSelf: 'flex-start',
              }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                style={{
                  width: '100%',
                  height: 560,
                  objectFit: 'cover',
                  display: 'block',
                }}
              >
                <source src="/services-video.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Right — old accordion (kept for layout) */}
            <div style={{ padding: 'clamp(32px, 5vw, 64px)' }}>
              {[
                { title: 'Craftsmanship You Can Trust', body: 'Delivering quality-driven renovations with precision and care.' },
                { title: 'Client-Centric Approach', body: 'Every project is guided by your goals, budget, and vision.' },
                { title: 'Reliable Solutions', body: 'Focused on durability, efficiency, and long-term value in every project.' },
                { title: 'Adaptability', body: 'From homes to businesses, our team adapts to projects of every scale and style.' },
              ].map((item, i) => {
                const isItemOpen = openLeftIndex === i
                return (
                  <div key={i} style={{ borderBottom: '1px solid var(--color-border)' }}>
                    <button
                      onClick={() => setOpenLeftIndex(isItemOpen ? null : i)}
                      style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '20px 0',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        textAlign: 'left',
                        gap: 16,
                      }}
                    >
                      <span style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.9375rem',
                        fontWeight: 600,
                        color: 'var(--color-text-primary)',
                        lineHeight: 1.3,
                      }}>
                        {item.title}
                      </span>
                      <span style={{ flexShrink: 0, fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>
                        {isItemOpen ? '−' : '+'}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isItemOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                          style={{ overflow: 'hidden' }}
                        >
                          <p style={{
                            fontSize: '0.875rem',
                            color: 'var(--color-text-secondary)',
                            lineHeight: 1.75,
                            paddingBottom: 20,
                          }}>
                            {item.body}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>}

      {/* ── Service accordion rows ── */}
      <div className="container" style={{ paddingTop: 60, paddingBottom: 'var(--spacing-section)' }}>
        {SERVICES.map((service, i) => (
          <ServiceRow
            key={i}
            service={service}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            navigate={navigate}
          />
        ))}
        <div style={{ textAlign: 'center', paddingTop: 48 }}>
          <button
            className="btn btn-dark"
            onClick={() => { navigate('/services'); window.scrollTo({ top: 0 }) }}
          >SEE ALL SERVICES</button>
        </div>
      </div>

      <style>{`
        /* Desktop: show col-3 toggle, hide col-1 mobile toggle */
        .service-toggle-mobile { display: none !important; }
        .service-toggle-desktop { display: flex !important; }

        @media (max-width: 1024px) {
          #services .services-header { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 900px) {
          #services-accordion .container > div { grid-template-columns: 1fr !important; }
          #accordion-img { min-height: 280px !important; position: static !important; }
          #services [data-service-row] { grid-template-columns: 1fr !important; gap: 20px !important; }
          #services [data-service-row] > div:nth-child(2) img { aspect-ratio: 16/9 !important; }
          /* On tablet/mobile: show col-1 toggle, hide col-3 toggle */
          .service-toggle-mobile { display: flex !important; }
          .service-toggle-desktop { display: none !important; }
        }
        @media (max-width: 600px) {
          #services [data-service-row] { padding: 24px 0 !important; }
          #accordion-img video { height: 260px !important; }
        }
      `}</style>
    </section>
  )
}
