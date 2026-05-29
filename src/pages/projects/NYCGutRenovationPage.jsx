import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const IMGS = {
  hero:        '/contact-us-cta-img-b.avif',
  exterior:    '/gut-exterior-img.avif',
  living:      '/gut-living-img.avif',
  kitchen1:    '/gutkitchen-img-a.avif',
  kitchen2:    '/gutkitchen-img-b.avif',
  kitchenFull: '/gutkitchen-img-c.avif',
  bath1:       '/gutbath-img-a.avif',
  bath2:       '/gutbath-img-b.avif',
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
    title: "Hell's Kitchen Apartment Renovation – Full Gut Remodel & Modern Redesign",
    description: "Following the success of their first NYC apartment renovation, the owner tasked Alexis with a complete gut remodel of this Hell's Kitchen unit — delivering a modern aesthetic...",
    img: '/contact-us-cta-img-c.avif',
    year: '2024',
    href: '/projects/gut-remodel-modern-renovation',
  },
]

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: d },
  }),
}

export default function NYCGutRenovationPage() {
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
        <img
          src={IMGS.hero}
          alt="NYC Gut Renovation"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, paddingBottom: 56, textAlign: 'center' }}>
          <motion.h1
            initial="hidden" animate={heroInView ? 'visible' : 'hidden'} custom={0}
            variants={fadeUp}
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              fontWeight: 600,
              color: '#fff',
              lineHeight: 1.2,
              marginBottom: 20,
            }}
          >
            NYC Gut Renovation
          </motion.h1>
          <motion.p
            initial="hidden" animate={heroInView ? 'visible' : 'hidden'} custom={0.15}
            variants={fadeUp}
            style={{
              fontSize: '0.9375rem',
              color: 'rgba(255,255,255,0.75)',
              lineHeight: 1.75,
              maxWidth: 640,
              margin: '0 auto',
            }}
          >
            This New York City apartment underwent a complete gut renovation that redefined its layout and aesthetic. From structural work to finish details, every element was reimagined and executed with precision, maximizing both the living experience and long-term value of the property.
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
            <p style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--color-text-primary)' }}>2024</p>
          </div>
        </div>
      </div>

      {/* ── First content block ── */}
      <section ref={bodyRef}>
        <div className="container" style={{ paddingTop: 64, paddingBottom: 56 }}>
          <div data-proj-intro style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 56, alignItems: 'start' }}>
            <motion.div initial="hidden" animate={bodyInView ? 'visible' : 'hidden'} custom={0} variants={fadeUp}>
              <img
                src={IMGS.exterior}
                alt="NYC building exterior"
                style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }}
              />
            </motion.div>
            <motion.div initial="hidden" animate={bodyInView ? 'visible' : 'hidden'} custom={0.1} variants={fadeUp}
              style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
                The project involved a <strong>full gut renovation</strong>, stripping the apartment down to its framework and rebuilding with a completely new layout. Alexis introduced an entirely rethought floor plan that maximized usable space and improved flow throughout every room. A <strong>second bathroom was added</strong>, transforming the property into a more livable and valuable space for modern city life.
              </p>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
                The kitchen was fully redesigned with new cabinetry, countertops, and appliances, while the open-concept living area was reimagined for better natural light and flow. Every finish was selected with both aesthetics and durability in mind.
              </p>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
                This renovation reflects our ability to take a dated, inefficient space and transform it into a modern, highly functional home — executed on time and to the highest standards of craftsmanship.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Full-width living/kitchen image ── */}
      <motion.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.8 }}
        style={{ overflow: 'hidden' }}
      >
        <img src={IMGS.living} alt="Open-concept living and kitchen"
          style={{ width: '100%', height: 'clamp(320px, 50vw, 600px)', objectFit: 'cover', display: 'block' }} />
      </motion.div>

      {/* ── Two-column text ── */}
      <div className="container" style={{ paddingTop: 48, paddingBottom: 48 }}>
        <div data-proj-2col style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 10 }}>Living Room & Kitchen</p>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
              The redesigned open-concept layout connects the kitchen and living area, creating bright, airy spaces that feel far larger than the footprint. Large windows maximize warmth and texture, while the new layout ensures natural light flows through the entire space.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
            <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 10 }}>Kitchen Transformation</p>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
              The kitchen was the most dramatic change. Once closed off and outdated, it was rebuilt with modern cabinetry, clean quartz countertops, and a seamless backsplash. Stainless-steel appliances and recessed lighting complete the transformation, making the space both stylish and functional.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── Two-column images ── */}
      <div className="container" style={{ paddingBottom: 16 }}>
        <div data-proj-2col style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {[IMGS.kitchen1, IMGS.kitchen2].map((src, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1 }} style={{ overflow: 'hidden' }}>
              <img src={src} alt={`Kitchen view ${i + 1}`}
                style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Full-width kitchen ── */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ overflow: 'hidden' }}>
        <img src={IMGS.kitchenFull} alt="Kitchen full view"
          style={{ width: '100%', height: 'clamp(300px, 45vw, 560px)', objectFit: 'cover', display: 'block' }} />
      </motion.div>

      {/* ── Bathroom images ── */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ overflow: 'hidden', marginTop: 16 }}>
        <img src={IMGS.bath1} alt="Bathroom"
          style={{ width: '100%', height: 'clamp(300px, 45vw, 560px)', objectFit: 'cover', display: 'block' }} />
      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ overflow: 'hidden', marginTop: 16 }}>
        <img src={IMGS.bath2} alt="Bathroom detail"
          style={{ width: '100%', height: 'clamp(300px, 45vw, 560px)', objectFit: 'cover', display: 'block' }} />
      </motion.div>

      {/* ── Bathroom caption ── */}
      <div className="container" style={{ paddingTop: 24, paddingBottom: 56 }}>
        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.75 }}>
          <strong style={{ color: 'var(--color-text-primary)' }}>Bathroom Addition</strong><br />
          The new bathroom features clean lines and modern finishes, with subway tile walls, black-framed glass shower doors, and a compact vanity that maximizes space. This addition brought not only convenience but also significant value to the apartment, elevating it for both current living and future resale.
        </p>
      </div>

      {/* ── Other Projects ── */}
      <section ref={otherRef} style={{ paddingBottom: 'var(--spacing-section)' }}>
        <div className="container" style={{ paddingTop: 24 }}>
          <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: 48, display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 36 }}>
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
