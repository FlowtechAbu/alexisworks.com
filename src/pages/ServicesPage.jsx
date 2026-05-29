import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

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
      'End to End project management – Seamless coordination with movers, contractors & vendors',
    ],
  },
  {
    title: 'Demolition',
    href: '/services/demolition',
    body: 'From full-gut renovations to selective interior removals, Alexis delivers precise and professionally managed demolition services that meet building, insurance, and HOA requirements. Our team is experienced in navigating the logistical and compliance challenges of working in co-ops, condos, and multifamily buildings across NYC.',
    img: '/Demolition-img.avif',
    points: [
      'Interior and structural demolition for apartments, homes, and commercial spaces',
      'Permits and code compliance, permits, and documentation support',
      'Dust and debris containment systems to protect shared areas',
      'Full coordination of hauling and environmentally responsible disposal',
      'Experience with NYC DOB regulations, permits, and site safety protocols',
    ],
  },
  {
    title: 'Flooring & Tile',
    href: '/services/flooring-tile',
    body: "At Alexis, we deliver expert installation of hardwood, engineered flooring, luxury vinyl, and custom tile across kitchens, bathrooms, and living areas. Whether it's a modern herringbone layout or a timeless subway tile backsplash, our attention to precision and finish transforms interiors into showcase spaces.",
    img: '/flooring-img.webp',
    points: [
      'Installation of hardwood, vinyl, laminate, and engineered wood',
      'Installation of tile for floors, walls, and backsplashes',
      'Subfloor preparation and waterproofing where required',
      'Seamless transition work and edge detailing',
      'Sourcing support for premium and specialty materials',
    ],
  },
  {
    title: 'Moving & Carting',
    href: '/services/moving-carting',
    body: "At Alexis, we provide professional moving and carting services tailored to residential, commercial, and specialty needs. Our experienced team handles everything from careful packing and secure transport to responsible disposal and heavy item carting. Whether you're relocating across town, clearing out a space, or moving valuable items, Alexis ensures efficiency, safety, and peace of mind.",
    img: '/moving-img.avif',
    points: [
      'Residential Moves – Safe and organized home moving services',
      'Commercial Relocations – Office, retail, and business transitions with minimal downtime',
      'Storage Solutions – Every move is protected by insurance and delivered by experienced hands',
      'End-to-End Service – From planning to execution, we manage the entire process',
      'Minimal Disruption – Efficient scheduling designed to reduce downtime for homes or businesses',
    ],
  },
  {
    title: 'Decks, Patios & Landscaping',
    href: '/services/decks-patios-landscaping',
    body: 'Alexis specializes in creating outdoor living spaces that are beautiful, functional, and built to last. From custom deck designs and elegant patios to full-scale landscaping projects, we design and build outdoor environments that reflect your vision, increase property value, and provide a perfect setting for relaxation and entertainment. We use only quality materials and thoughtful planning to bring your outdoor ideas into stunning, beautifully functioning spaces.',
    img: '/Decks-img.webp',
    points: [
      'Custom Designs – Tailored solutions that match your home\'s style and needs',
      'Durable Materials – Use of weather-resistant and low-maintenance products',
      'Full-Service Landscaping – From planting to landscape integration, all handled in-house',
      'Outdoor Enhancements – Create complete living spaces with lighting, seating, and features',
      'Long-Term Value – Projects built to last while increasing property curb appeal and worth',
    ],
  },
  {
    title: 'Finished Basements',
    href: '/services/finished-basements',
    body: 'At Alexis, we turn underutilized basements into fully finished, livable spaces designed to your needs. Whether you envision a family room, home office, gym, or rental unit, our team brings creativity, craftsmanship, and efficiency to every project. With careful planning and attention to detail, Alexis ensures your basement becomes one of the most valuable and enjoyable areas in your home.',
    img: '/Finished-Base-img.webp',
    points: [
      'Tailored Spaces – Designs crafted to fit your family\'s lifestyle and goals',
      'Value Build – Complete construction handled from permits to finish',
      'Quality & Safety – Waterproofing and efficient builds that reduce problems after completion',
      'Value-Boosting Investment – Finished basements add significant resale value to homes',
      'Versatile Options – From gyms and theaters to rental units, we bring versatile ideas to life',
    ],
  },
  {
    title: 'Kitchen Remodel',
    href: '/services/kitchen-remodel',
    body: 'The kitchen is the heart of the home, and Alexis specializes in transforming it into a space that blends modern function and efficiency. Whether it\'s a modest upgrade, a timeless redesign, or a full-scale remodel, we deliver layouts and finishes that reflect your lifestyle and meet the needs of your household. From cabinetry to lighting and appliances, Alexis ensures craftsmanship that helps your kitchen stand and perform well.',
    img: '/kitchen-remodel-img.avif',
    points: [
      'Personalized Design – Kitchens crafted to match your personal style and needs',
      'Cabinetry & Storage Solutions – Custom cabinet planning and organization built in',
      'High-Quality Finishes – Durable, stylish countertops and professional tiling',
      'Appliance Integration – Professional service that manages efficient planning of appliances and smart home upgrades',
      'Long-Term Value – Projects built to consistently deliver strong returns on investment',
    ],
  },
  {
    title: 'Bathroom Remodel',
    href: '/services/bathroom-remodel',
    body: 'At Alexis, we build bathrooms that are both stylish and built to perform as a long-term investment. Our team uses quality materials, durable materials, and elegant finishes that maximize function and value. From spa-like master bathrooms with luxury features to classic and efficient designs, Alexis tailors every detail to your preferences, ensuring the results are one of a kind and functional.',
    img: '/bathroom-remodel-img.avif',
    points: [
      'Comfort & Design – Designs that create spa-like experiences in your home',
      'Efficiency of Space – Select layouts that maximize function in bathrooms of all sizes',
      'Sanitary & Storage – Custom vanities built for seamless storage and efficient organization',
      'Tile Quality & Workmanship – High-quality installations with luxury finishes and durable materials',
      'Plumbing & Fixtures – Professional coordination for toilets, faucets, and shower systems',
    ],
  },
  {
    title: 'Commercial Renovations',
    href: '/services/commercial-renovations',
    body: "The commercial space is the face of the business, and Alexis provides construction services designed to create spaces that are functional and reflective of your brand. Whether it's upgrading an office for productivity, renovating a restaurant for customer appeal, or refreshing a retail space for better visibility, Alexis brings the same efficiency to every project. Our team ensures minimal disruption, strict budget management, and the industry craftsmanship that helps your business stand out and perform.",
    img: '/commerical-ren-img.avif',
    points: [
      'Custom Spaces – Kitchens, dining areas, and bar renovations that blend style with function',
      'Office Renovations – Modern layouts, ergonomics, and collaborative areas that improve productivity',
      'Retail Space Renovations – Custom layouts and finishes that enhance customer experience and drive sales',
      'Custom Build-Outs – Tailored construction to meet business-specific operational needs',
      'Demolition and safe operation with minimal business disruption',
    ],
  },
]

const CTA_IMGS = [
  '/contact-us-cta-img-a.avif',
  '/contact-us-cta-img-b.avif',
  '/contact-us-cta-img-c.avif',
]

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: d },
  }),
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
      <circle cx="8" cy="8" r="8" fill="#000000" />
      <path d="M4.5 8l2.5 2.5 4.5-5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ServiceRow({ service, index }) {
  const ref      = useRef(null)
  const inView   = useInView(ref, { once: true, margin: '-60px' })
  const num      = String(index + 1).padStart(2, '0')
  const navigate = useNavigate()

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      custom={0}
      variants={fadeUp}
      style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: 56, paddingTop: 48 }}
    >
      <p style={{
        fontSize: '0.75rem',
        fontWeight: 700,
        letterSpacing: '0.12em',
        color: 'var(--color-text-muted)',
        marginBottom: 24,
      }}>
        {num}
      </p>

      <div data-sp-row style={{
        display: 'grid',
        gridTemplateColumns: '1.8fr 1.4fr 1.6fr',
        gap: 40,
        alignItems: 'start',
      }}>
        {/* Col 1 — title + body + button */}
        <div>
          <h2 style={{
            fontSize: 'clamp(1.15rem, 1.8vw, 1.45rem)',
            fontWeight: 700,
            color: 'var(--color-text-primary)',
            lineHeight: 1.3,
            marginBottom: 16,
          }}>
            {service.title}
          </h2>
          <p style={{
            fontSize: '0.875rem',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.75,
            marginBottom: 28,
          }}>
            {service.body}
          </p>
          <button
            className="btn btn-dark"
            style={{ fontSize: '0.75rem' }}
            onClick={() => service.href && (navigate(service.href), window.scrollTo({ top: 0 }))}
          >
            LEARN MORE
          </button>
        </div>

        {/* Col 2 — image */}
        <div style={{ overflow: 'hidden' }}>
          <img
            src={service.img}
            alt={service.title}
            style={{ width: '100%', aspectRatio: '3 / 4', objectFit: 'cover', display: 'block' }}
          />
        </div>

        {/* Col 3 — key points */}
        <div>
          <p style={{
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--color-text-muted)',
            marginBottom: 16,
          }}>
            Key Point
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
            {service.points.map((pt, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <CheckIcon />
                <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  {pt}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default function ServicesPage() {
  const headerRef    = useRef(null)
  const ctaRef       = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })
  const ctaInView    = useInView(ctaRef,    { once: true, margin: '-80px' })
  const navigate     = useNavigate()

  return (
    <>
      {/* ── Header ── */}
      <section style={{ background: 'var(--color-gray)', paddingTop: 110 }} ref={headerRef}>
        <div className="container section-pad" style={{ paddingBottom: 0 }}>
          <motion.p
            initial="hidden" animate={headerInView ? 'visible' : 'hidden'} custom={0}
            variants={fadeUp}
            className="eyebrow eyebrow--light"
            style={{ marginBottom: 14 }}
          >
            What We Do
          </motion.p>
          <motion.h1
            initial="hidden" animate={headerInView ? 'visible' : 'hidden'} custom={0.1}
            variants={fadeUp}
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 3.75rem)',
              fontWeight: 700,
              color: 'var(--color-text-primary)',
              lineHeight: 1.1,
            }}
          >
            Our Services
          </motion.h1>
        </div>
      </section>

      {/* ── Service rows ── */}
      <section style={{ background: 'var(--color-gray)' }}>
        <div className="container" style={{ paddingBottom: 0 }}>
          {SERVICES.map((s, i) => (
            <ServiceRow key={i} service={s} index={i} />
          ))}
        </div>
      </section>

      {/* ── CTA section ── */}
      <section ref={ctaRef} style={{ background: '#0a0a0a' }}>
        <div className="container section-pad">
          <div data-sp-cta style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(40px, 6vw, 80px)',
            alignItems: 'center',
          }}>
            {/* Left — images */}
            <motion.div
              initial="hidden" animate={ctaInView ? 'visible' : 'hidden'} custom={0}
              variants={fadeUp}
              data-sp-cta-imgs
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}
            >
              {CTA_IMGS.map((src, i) => (
                <div
                  key={i}
                  style={{
                    overflow: 'hidden',
                    gridColumn: 'auto',
                  }}
                >
                  <img
                    src={src}
                    alt={`Project ${i + 1}`}
                    style={{
                      width: '100%',
                      height: 200,
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.5s ease',
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
              ))}
            </motion.div>

            {/* Right — text + CTA */}
            <motion.div
              initial="hidden" animate={ctaInView ? 'visible' : 'hidden'} custom={0.15}
              variants={fadeUp}
            >
              <h2 style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
                fontWeight: 700,
                color: '#fff',
                lineHeight: 1.2,
                marginBottom: 16,
              }}>
                Start Your Dream Project Today
              </h2>
              <p style={{
                fontSize: '0.9375rem',
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.7,
                marginBottom: 36,
              }}>
                Whether you're envisioning a custom home, a commercial space, or a major renovation, our team is ready to bring your vision to life with quality craftsmanship and reliable results. From residential upgrades to commercial build-outs, we're here to help.
              </p>
              <button
                className="btn"
                style={{
                  background: '#fff',
                  color: '#111',
                  fontSize: '0.76rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  padding: '14px 32px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background 0.2s, color 0.2s',
                }}
                onClick={() => { navigate('/contact'); window.scrollTo({ top: 0 }) }}
                onMouseEnter={e => { e.currentTarget.style.background = '#C41414'; e.currentTarget.style.color = '#fff' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#111' }}
              >
                CONTACT US
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          [data-sp-row] { grid-template-columns: 1fr !important; gap: 24px !important; }
          [data-sp-cta] { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          [data-sp-cta-imgs] { grid-template-columns: 1fr !important; }
          [data-sp-cta-imgs] > div { grid-column: auto !important; }
        }
      `}</style>
    </>
  )
}
