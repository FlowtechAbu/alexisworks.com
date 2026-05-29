import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const IMGS = {
  hero:      '/contact-us-cta-img-c.avif',
  bathroom:  '/hell-bathroom-img.avif',
  living:    '/living-hell-img.avif',
  kitchen1:  '/kitchen-hell-img.avif',
  floorplan: '/hell-floorplan-img.avif',
  kitchenFull:'/hell-kitchenfull-img.avif',
}

const OTHER_PROJECTS = [
  {
    title: 'Basement Renovation – Office, Entertainment, Laundry & Bath',
    description: 'This basement renovation transformed an underutilized space into a multifunctional retreat. The client wanted a private home office paired with a welcoming entertainment area...',
    img: '/basement-renovation-ftre.webp',
    year: '2024',
    href: '/projects/basement-renovation',
  },
  {
    title: 'NYC Gut Renovation',
    description: 'This New York City apartment underwent a complete gut renovation that redefined how the space was used and experienced. By reimagining the layout...',
    img: '/contact-us-cta-img-b.avif',
    year: '2024',
    href: '/projects/nyc-gut-renovation',
  },
]

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: d },
  }),
}

export default function HellsKitchenRenovationPage() {
  const heroRef    = useRef(null)
  const bodyRef    = useRef(null)
  const otherRef   = useRef(null)
  const heroInView  = useInView(heroRef,  { once: true })
  const bodyInView  = useInView(bodyRef,  { once: true, margin: '-60px' })
  const otherInView = useInView(otherRef, { once: true, margin: '-60px' })
  const navigate    = useNavigate()

  return (
    <div style={{ background: '#fff' }}>

      {/* ── Hero ── */}
      <section
        ref={heroRef}
        style={{
          position: 'relative',
          height: 'clamp(420px, 60vw, 680px)',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'flex-end',
        }}
      >
        <img src={IMGS.hero} alt="Hell's Kitchen Renovation"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, paddingBottom: 56, textAlign: 'center' }}>
          <motion.h1
            initial="hidden" animate={heroInView ? 'visible' : 'hidden'} custom={0}
            variants={fadeUp}
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 600, color: '#fff', lineHeight: 1.2, marginBottom: 20 }}
          >
            Hell's Kitchen Apartment Renovation – Full Gut Remodel & Modern Redesign
          </motion.h1>
          <motion.p
            initial="hidden" animate={heroInView ? 'visible' : 'hidden'} custom={0.15}
            variants={fadeUp}
            style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, maxWidth: 640, margin: '0 auto' }}
          >
            Following the success of their first NYC apartment renovation, the owner tasked Alexis with a complete gut remodel of this Hell's Kitchen unit — delivering a modern aesthetic with functional, high-quality finishes throughout, and upgrading every detail to create a comfortable and stylish apartment tailored for long-term value.
          </motion.p>
        </div>
      </section>

      {/* ── Meta bar ── */}
      <div style={{ borderBottom: '1px solid var(--color-border)' }}>
        <div className="container" style={{ paddingTop: 28, paddingBottom: 28, display: 'flex', gap: 48 }}>
          <div>
            <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: 4 }}>Location</p>
            <p style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--color-text-primary)' }}>New York, NY</p>
          </div>
          <div>
            <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: 4 }}>Year</p>
            <p style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--color-text-primary)' }}>2025</p>
          </div>
        </div>
      </div>

      {/* ── First content block ── */}
      <section ref={bodyRef}>
        <div className="container" style={{ paddingTop: 64, paddingBottom: 56 }}>
          <div data-proj-intro style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 56, alignItems: 'start' }}>
            <motion.div initial="hidden" animate={bodyInView ? 'visible' : 'hidden'} custom={0} variants={fadeUp}>
              <img src={IMGS.bathroom} alt="Updated bathroom"
                style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }} />
            </motion.div>
            <motion.div initial="hidden" animate={bodyInView ? 'visible' : 'hidden'} custom={0.1} variants={fadeUp}
              style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
                This Hell's Kitchen apartment was taken down to the studs for a <strong>complete gut renovation</strong>. We reimagined the floor plan to improve flow between the living room and the kitchen while optimizing bedroom spaces. Modern finishes, new flooring, and updated lighting were introduced throughout, giving the apartment a clean, contemporary feel.
              </p>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
                The kitchen was rebuilt with new cabinetry, countertops, and stainless steel appliances, creating a functional and inviting centerpiece for the home. Bathrooms were also updated with sleek tilework and fixtures, bringing efficiency and style throughout the unit.
              </p>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
                Every decision was made with both the current occupant and future resale value in mind — resulting in a move-in-ready apartment that feels modern, spacious, and cohesive from room to room.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Full-width living image ── */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ overflow: 'hidden' }}>
        <img src={IMGS.living} alt="Living room and kitchen"
          style={{ width: '100%', height: 'clamp(320px, 50vw, 600px)', objectFit: 'cover', display: 'block' }} />
      </motion.div>

      {/* ── Two-column text ── */}
      <div className="container" style={{ paddingTop: 48, paddingBottom: 48 }}>
        <div data-proj-2col style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 10 }}>Living Room Transformation</p>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
              The living area was designed to feel open and welcoming, with refinished hardwood floors, crisp white walls, and new recessed lighting. The updated layout maximizes both space and natural light, creating a warm environment ideal for relaxing or entertaining. The new setup reflects smart use of space, with better bedroom distribution, an improved living/kitchen flow, and updated bathrooms. The unit was staged for comfort and practicality, providing a full transformation from old to new.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
            <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 10 }}>Kitchen Remodel</p>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
              The kitchen was rebuilt from scratch with a modern palette of gray cabinetry, subway tile backsplash, and sleek countertops. Stainless steel appliances and pendant lighting add both efficiency and style, making the kitchen a focal point of the home. By reconfiguring the layout, we connected the kitchen seamlessly to the living space. This open-concept design enhances flow, improves functionality, and makes the apartment feel significantly larger.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── Two-column images: kitchen + floor plan ── */}
      <div className="container" style={{ paddingBottom: 24 }}>
        <div data-proj-2col style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {[IMGS.kitchen1, IMGS.floorplan].map((src, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1 }} style={{ overflow: 'hidden' }}>
              <img src={src} alt={i === 0 ? 'Kitchen detail' : 'Floor plan'}
                style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Caption ── */}
      <div className="container" style={{ paddingBottom: 40 }}>
        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.75 }}>
          The renovation not only modernized the apartment but also increased its practicality, turning an outdated unit into a move-in-ready property tailored for modern city living.
        </p>
      </div>

      {/* ── Full-width kitchen ── */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ overflow: 'hidden' }}>
        <img src={IMGS.kitchenFull} alt="Kitchen full view"
          style={{ width: '100%', height: 'clamp(320px, 50vw, 580px)', objectFit: 'cover', display: 'block' }} />
      </motion.div>

      {/* ── Other Projects ── */}
      <section ref={otherRef} style={{ paddingBottom: 'var(--spacing-section)' }}>
        <div className="container" style={{ paddingTop: 72 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 36 }}>
            <motion.h2 initial="hidden" animate={otherInView ? 'visible' : 'hidden'} custom={0} variants={fadeUp}
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: 'var(--color-text-primary)' }}>
              Other Projects
            </motion.h2>
            <motion.button initial="hidden" animate={otherInView ? 'visible' : 'hidden'} custom={0.1} variants={fadeUp}
              className="btn btn-dark" style={{ fontSize: '0.72rem' }}
              onClick={() => { navigate('/projects'); window.scrollTo({ top: 0 }) }}>
              ALL PROJECTS
            </motion.button>
          </div>
          <div data-proj-other style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            {OTHER_PROJECTS.map((p, i) => (
              <motion.div key={i}
                initial="hidden" animate={otherInView ? 'visible' : 'hidden'} custom={0.15 + i * 0.1} variants={fadeUp}
                style={{ cursor: 'pointer' }}
                onClick={() => { navigate(p.href); window.scrollTo({ top: 0 }) }}>
                <div style={{ overflow: 'hidden', marginBottom: 16 }}>
                  <img src={p.img} alt={p.title}
                    style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
                </div>
                <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: 8 }}>{p.year}</p>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-text-primary)', lineHeight: 1.35, marginBottom: 10 }}>{p.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          [data-proj-intro] { grid-template-columns: 1fr !important; }
          [data-proj-2col]  { grid-template-columns: 1fr !important; }
          [data-proj-other] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
