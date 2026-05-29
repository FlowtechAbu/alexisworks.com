import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const IMG_TRUCK      = 'about-img-a.avif'
const IMG_BROWNSTONE = 'about-img-b.jpg'
const IMG_BATHROOM   = 'about-img-c.avif'

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: d },
  }),
}

export default function About() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" style={{ background: 'var(--color-gray)' }} ref={ref}>
      <div className="container section-pad">

        {/* ── Eyebrow + heading — full width, outside columns ── */}
        <motion.p
          initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0}
          variants={fadeUp}
          className="eyebrow eyebrow--light"
          style={{ marginBottom: 14 }}
        >
          About Us
        </motion.p>
        <motion.h2
          initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.1}
          variants={fadeUp}
          className="section-title"
          style={{ marginBottom: 40, maxWidth: 620 }}
        >
          Your Complete Partner for Every Home and Property Need.
        </motion.h2>

        {/* ── Two-column body ── */}
        <div
          data-cols
          style={{
            display: 'flex',
            gap: 'clamp(24px, 4vw, 56px)',
            alignItems: 'flex-start',
          }}
        >

          {/* ── LEFT 50% ── */}
          <div style={{ flex: '0 0 50%', maxWidth: '50%' }}>
            <motion.div
              initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.2}
              variants={fadeUp}
              style={{ overflow: 'hidden', marginBottom: 28 }}
            >
              <img
                src={IMG_TRUCK}
                alt="Alexis company vehicles"
                style={{
                  width: '100%',
                  aspectRatio: '4 / 3',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.6s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
              />
            </motion.div>

            <motion.p
              initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.3}
              variants={fadeUp}
              className="section-body"
              style={{ marginBottom: 28 }}
            >
              At Alexis, we provide a full spectrum of services designed to make caring for your home
              or property simple and stress-free. From{' '}
              <strong>moving and carting services</strong> that take the hassle out of relocating to{' '}
              <strong>apartment and home renovations</strong> that bring your vision to life, our
              team delivers results with precision and care.
            </motion.p>

            <motion.div
              initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.4}
              variants={fadeUp}
            >
              <a href="#projects" className="btn btn-primary">
                OUR WORKS
              </a>
            </motion.div>
          </div>

          {/* ── RIGHT 50% — two columns: text+image / image+text ── */}
          <motion.div
            initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.15}
            variants={fadeUp}
            style={{
              flex: 1,
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gridTemplateRows: '1fr',
              gap: 12,
              height: 580,
            }}
          >
            {/* Col 1 — text on TOP, image below */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <p className="section-body" style={{ fontSize: 14 }}>
                We're also trusted by several{' '}
                <strong>property management companies</strong> who rely on us for ongoing{' '}
                <strong>handyman services and repairs</strong>. Whether it's day-to-day maintenance,
                emergency fixes, or larger projects, we bring the same level of professionalism and
                attention to detail to every job.
              </p>
              <div style={{ flex: 1, overflow: 'hidden', minHeight: 0 }}>
                <img
                  src={IMG_BROWNSTONE}
                  alt="NYC brownstone building"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.6s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
                />
              </div>
            </div>

            {/* Col 2 — image on TOP, text below */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ flex: 1, overflow: 'hidden', minHeight: 0 }}>
                <img
                  src={IMG_BATHROOM}
                  alt="Interior renovation"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.6s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
                />
              </div>
              <p className="section-body" style={{ fontSize: 14 }}>
                Our mission is to be your single, dependable partner for everything your property
                requires — helping you save time, reduce stress, and ensure that every space is safe,
                functional, and beautifully maintained.
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #about [data-cols] { flex-direction: column !important; }
          #about [data-cols] > div { flex: unset !important; max-width: 100% !important; width: 100% !important; }
        }
        @media (max-width: 600px) {
          #about [data-cols] > div:last-child { grid-template-columns: 1fr !important; height: auto !important; }
        }
      `}</style>
    </section>
  )
}
