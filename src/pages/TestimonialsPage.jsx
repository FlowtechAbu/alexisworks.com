import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Services from '../components/Services'

const TESTIMONIALS = [
  {
    quote: "We used Alexis for a bathroom renovation in our condo. They did a great job navigating the condo board approvals and insurance requirements. The bathroom looks fantastic now!",
    author: 'Anna V.',
    rating: 4.4,
    avatar: 'https://i.pravatar.cc/40?img=47',
  },
  {
    quote: "The Alexis team did a wonderful job renovating our kitchen. The craftsmanship and attention to detail were excellent, and the project was completed close to schedule. A little more frequent communication during the process would have made it perfect, but overall, we're thrilled with the results.",
    author: 'Lucas G.',
    rating: 4.3,
    avatar: 'https://i.pravatar.cc/40?img=11',
  },
  {
    quote: "We hired Alexis for a basement remodel, and the transformation is incredible. The space feels brand new and adds so much functionality to our home. There were a couple of small delays with materials, but the team handled it professionally and kept things moving.",
    author: 'Mia F.',
    rating: 4.2,
    avatar: 'https://i.pravatar.cc/40?img=44',
  },
  {
    quote: "Alexis has become our go-to for both renovations and ongoing maintenance in our property. They're responsive, professional, and consistently deliver high-quality results. Just shy of five stars only because perfection is rare — but we would absolutely recommend them without hesitation.",
    author: 'James P.',
    rating: 4.8,
    avatar: 'https://i.pravatar.cc/40?img=53',
  },
  {
    quote: "Alexis helped us with both moving and renovations, which made the process so much easier. Their team was courteous, efficient, and knowledgeable.",
    author: 'David S.',
    rating: 4.3,
    avatar: 'https://i.pravatar.cc/40?img=15',
  },
  {
    quote: "Alexis handled repairs and updates in our apartment building, and the workmanship was solid across every project. They clearly have experience working with property management companies. A little more flexibility with scheduling would have been nice, but overall, they're a reliable partner we'd use again.",
    author: 'Olivia C.',
    rating: 4.4,
    avatar: 'https://i.pravatar.cc/40?img=56',
  },
  {
    quote: "Alexis did a great job with our living room renovation. The crew was professional and attentive, and the finished space is exactly what we envisioned. There were a few minor delays, but nothing that took away from the overall experience.",
    author: 'Peter R.',
    rating: 4.6,
    avatar: 'https://i.pravatar.cc/40?img=67',
  },
  {
    quote: "We used Alexis for a full apartment remodel, and the results exceeded our expectations. They communicated well with our condo board and handled all the insurance paperwork seamlessly. The only reason this isn't a perfect five stars is because of some small touch-ups needed at the end, which were quickly resolved.",
    author: 'Emily T.',
    rating: 4.1,
    avatar: 'https://i.pravatar.cc/40?img=39',
  },
  {
    quote: "Alexis transformed our outdated basement into a warm, usable family space. The quality of workmanship was top-notch, and the project management was very organized.",
    author: 'John D.',
    rating: 4.7,
    avatar: 'https://i.pravatar.cc/40?img=70',
  },
  {
    quote: "The Alexis team handled both our kitchen renovation and move-in coordination, which saved us so much stress. Their attention to detail and efficiency stood out — excellent overall experience.",
    author: 'Lily K.',
    rating: 4.4,
    avatar: 'https://i.pravatar.cc/40?img=49',
  },
  {
    quote: "The entire process of working with Alexis was an absolute pleasure, as they flawlessly executed a modern redesign of our corporate offices.",
    author: 'Chris W.',
    rating: 4.2,
    avatar: 'https://i.pravatar.cc/40?img=60',
  },
  {
    quote: "Our condo bathroom renovation went better than we hoped. Alexis not only delivered a beautiful design but also managed all approvals and building requirements without hassle. The team was professional, respectful of our space, and delivered on quality.",
    author: 'Shopia M.',
    rating: 4.5,
    avatar: 'https://i.pravatar.cc/40?img=32',
  },
]

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: d },
  }),
}

const cardVariants = {
  hidden:  { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 },
  }),
}

export default function TestimonialsPage() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <>
    <section style={{ background: '#fff', paddingTop: 110 }} ref={ref}>
      <div className="container section-pad">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <motion.p
            initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0}
            variants={fadeUp}
            className="eyebrow eyebrow--light"
            style={{ marginBottom: 14 }}
          >
            Testimonials
          </motion.p>
          <motion.h1
            initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.1}
            variants={fadeUp}
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              color: 'var(--color-text-primary)',
              lineHeight: 1.1,
            }}
          >
            What Our Clients Say
          </motion.h1>
        </div>

        {/* Cards grid */}
        <div
          data-t-grid
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20,
            alignItems: 'start',
          }}
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={cardVariants}
              style={{
                background: '#fff',
                borderRadius: 12,
                boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
                padding: '24px 22px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Quote */}
              <p style={{
                fontSize: '0.9rem',
                color: 'var(--color-text-primary)',
                lineHeight: 1.75,
                flex: 1,
                marginBottom: 20,
              }}>
                "{t.quote}"
              </p>

              {/* Bottom row */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                {/* Avatar + name */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <img
                    src={t.avatar}
                    alt={t.author}
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      objectFit: 'cover',
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--color-text-primary)' }}>
                    {t.author}
                  </span>
                </div>

                {/* Star + rating */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, flexShrink: 0 }}>
                  <svg width="14" height="14" viewBox="0 0 14 14">
                    <path d="M7 0l1.764 5.43H14l-4.618 3.354 1.764 5.43L7 10.862l-4.146 3.352 1.764-5.43L0 5.43h5.236z" fill="#C41414" />
                  </svg>
                  <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>
                    {t.rating.toFixed(1)}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          [data-t-grid] { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          [data-t-grid] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>

    <Services
      title="Comprehensive Renovation & Construction Services"
      description="At Alexis, we provide a full range of renovation and construction services designed to transform spaces with quality craftsmanship and reliable results. From residential upgrades to commercial build-outs, our team delivers projects that enhance comfort, functionality, and long-term value."
      showButton
      showAccordion={false}
    />
    </>
  )
}
