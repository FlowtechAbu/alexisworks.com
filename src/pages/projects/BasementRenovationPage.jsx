import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const IMGS = {
  hero:         '/basement-renovation-ftre.webp',
  exterior:     '/basemen-proj-img-a.avif',
  entertainment:'/basement-entertainment-img.avif',
  bathroom:     '/br-bathroom-img.avif',
  laundry:      '/br-laundry-img.avif',
  overview:     '/basement-renovation-ftre.webp',
}

const OTHER_PROJECTS = [
  {
    title: 'NYC Gut Renovation',
    description: 'This New York City apartment underwent a complete gut renovation that redefined how the space was used and experienced. By reimagining the...',
    img: '/contact-us-cta-img-b.avif',
    location: 'Manhattan', year: '2024',
    href: '/projects/nyc-gut-renovation',
  },
  {
    title: "Hell's Kitchen Apartment Renovation – Full Gut Remodel & Modern Redesign",
    description: "Following the success of their first NYC apartment renovation, the owner tasked Alexis with updating another property in Hell's Kitchen. This...",
    img: '/contact-us-cta-img-c.avif',
    location: 'Manhattan', year: '2024',
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

export default function BasementRenovationPage() {
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
          alt="Basement Renovation"
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
            Basement Renovation – Office, Entertainment, Laundry & Bath
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
            This basement renovation transformed an underutilized space into a multifunctional retreat. The client wanted a private home office paired with a welcoming entertainment area, complete with a custom entertainment center and built-in storage. To add convenience and long-term value, we also incorporated a brand-new bathroom.
          </motion.p>
        </div>
      </section>

      {/* ── Meta bar ── */}
      <div style={{ borderBottom: '1px solid var(--color-border)' }}>
        <div className="container" style={{ paddingTop: 28, paddingBottom: 28, display: 'flex', gap: 48 }}>
          <div>
            <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: 4 }}>Location</p>
            <p style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--color-text-primary)' }}>Brooklyn, NY</p>
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
                alt="Property exterior"
                style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }}
              />
            </motion.div>
            <motion.div initial="hidden" animate={bodyInView ? 'visible' : 'hidden'} custom={0.1} variants={fadeUp}
              style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
                The project began with the client's vision of creating a lower-level retreat that could balance productivity with relaxation. Alexis designed and constructed a <strong>dedicated home office with built-in shelving and storage</strong>, ensuring both quality and style for a productive workspace. Alongside this, we built an <strong>entertainment center with custom shelving</strong> and a modern TV area for comfortable viewing. The project also included a <strong>modern bathroom featuring sleek finishes and a walk-in shower</strong>, providing comfort and practicality.
              </p>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
                To maximize everyday usability, the renovation also included a <strong>refreshed laundry area</strong>. By upgrading appliances, adding storage, and improving layout, the laundry renovation made the space far more efficient and seamlessly integrated into the basement design.
              </p>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
                This comprehensive basement build-out reflects our ability to deliver spaces that serve multiple purposes—work, play, comfort, and everyday living—without compromising on style or quality.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Full-width image ── */}
      <motion.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.8 }}
        style={{ overflow: 'hidden' }}
      >
        <img
          src={IMGS.entertainment}
          alt="Entertainment center"
          style={{ width: '100%', height: 'clamp(320px, 50vw, 600px)', objectFit: 'cover', display: 'block' }}
        />
      </motion.div>

      {/* ── Two-column text ── */}
      <div className="container" style={{ paddingTop: 56, paddingBottom: 56 }}>
        <div data-proj-2col style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.8 }}
          >
            We designed a custom entertainment center with built-in shelving and a recessed electric fireplace, creating a stylish focal point for the space. With integrated lighting and display areas, the entertainment wall provides both function and ambiance. Paired with a comfortable seating arrangement, the area is perfect for movie nights, family gatherings, or casual entertaining.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.8 }}
          >
            A major transformation came through the <strong>replacement of outdated carpet with oversized 4'x2' tiles</strong>. The new flooring not only modernized the look of the basement but also enhanced durability, making the space easier to maintain. The large-format tiles provide a clean, cohesive finish that elevates the overall aesthetic while adding a sense of openness and continuity across the basement.
          </motion.p>
        </div>
      </div>

      {/* ── Two-column images ── */}
      <div className="container" style={{ paddingBottom: 24 }}>
        <div data-proj-2col style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {[IMGS.bathroom, IMGS.laundry].map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1 }}
              style={{ overflow: 'hidden' }}
            >
              <img
                src={src}
                alt={i === 0 ? 'Bathroom' : 'Laundry room'}
                style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }}
              />
            </motion.div>
          ))}
        </div>
        <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', lineHeight: 1.7, marginTop: 20 }}>
          This comprehensive basement build-out reflects our ability to deliver spaces that serve multiple purposes—work, play, comfort, and everyday living—without compromising on style or quality.
        </p>
      </div>

      {/* ── Full-width overview image ── */}
      <motion.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.8 }}
        style={{ overflow: 'hidden' }}
      >
        <img
          src={IMGS.overview}
          alt="Basement overview"
          style={{ width: '100%', height: 'clamp(320px, 50vw, 600px)', objectFit: 'cover', display: 'block' }}
        />
      </motion.div>

      {/* ── Other Projects ── */}
      <section ref={otherRef} style={{ paddingBottom: 'var(--spacing-section)' }}>
        <div className="container" style={{ paddingTop: 72 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 36 }}>
            <motion.h2
              initial="hidden" animate={otherInView ? 'visible' : 'hidden'} custom={0}
              variants={fadeUp}
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: 'var(--color-text-primary)' }}
            >
              Other Projects
            </motion.h2>
            <motion.button
              initial="hidden" animate={otherInView ? 'visible' : 'hidden'} custom={0.1}
              variants={fadeUp}
              className="btn btn-dark"
              style={{ fontSize: '0.72rem' }}
              onClick={() => { navigate('/projects'); window.scrollTo({ top: 0 }) }}
            >
              ALL PROJECTS
            </motion.button>
          </div>

          <div data-proj-other style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            {OTHER_PROJECTS.map((p, i) => (
              <motion.div
                key={i}
                initial="hidden" animate={otherInView ? 'visible' : 'hidden'} custom={0.15 + i * 0.1}
                variants={fadeUp}
                style={{ cursor: 'pointer' }}
                onClick={() => { navigate(p.href); window.scrollTo({ top: 0 }) }}
              >
                <div style={{ overflow: 'hidden', marginBottom: 16 }}>
                  <img
                    src={p.img}
                    alt={p.title}
                    style={{
                      width: '100%', aspectRatio: '16/10', objectFit: 'cover', display: 'block',
                      transition: 'transform 0.5s ease',
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
                <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: 8 }}>
                  {p.year}
                </p>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-text-primary)', lineHeight: 1.35, marginBottom: 10 }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>
                  {p.description}
                </p>
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
