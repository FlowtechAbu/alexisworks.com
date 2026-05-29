import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

const FAQS = [
  {
    q: 'How do I get started with a project?',
    a: "Simply reach out to Alexis for a free consultation. We’ll discuss your goals, review your space, and provide recommendations along with an estimate. From there, we’ll outline the project timeline and next steps.",
  },
  {
    q: 'Do you provide design services or just construction?',
    a: 'Alexis is a renovation and construction company — we do not provide formal design or architectural services. However, we are well connected with industry professionals and can recommend trusted designers or architects if needed. Our team can provide aesthetic design suggestions and practical input, but formal plans must come from licensed design professionals.',
  },
  {
    q: 'How long will my renovation or moving project take?',
    a: 'Timelines vary depending on the size and complexity of the project. A simple bathroom update may take a few weeks, while a full basement or commercial renovation may take several months. We always provide a detailed schedule before work begins.',
  },
  {
    q: 'What types of materials do you use?',
    a: 'Alexis works with trusted suppliers to source high-quality, durable, and eco-friendly materials whenever possible. We’ll present you with options to fit your budget, style, and long-term goals.',
  },
  {
    q: 'Are your services insured and licensed?',
    a: 'Yes. Alexis is fully licensed and insured, ensuring your project is completed to the highest standards of safety, compliance, and professionalism.',
  },
  {
    q: 'Do you handle permits and inspections?',
    a: 'Absolutely. Our team takes care of all necessary permits, building codes, and inspections so you can focus on the exciting parts of your project without the paperwork stress.',
  },
  {
    q: 'Can you work around my business hours for commercial renovations?',
    a: 'Yes. We understand the importance of keeping your business running. Alexis offers flexible scheduling and phased construction to minimize downtime and disruption.',
  },
  {
    q: 'Do you offer warranties on your work?',
    a: 'Yes. We stand behind our craftsmanship with warranties on labor and materials, depending on the type of service. All details will be outlined in your project agreement.',
  },
  {
    q: 'How do you handle unexpected issues or changes during a project?',
    a: 'Transparency is key. If anything unexpected arises, we’ll notify you immediately, present solutions, and adjust the project plan only with your approval.',
  },
  {
    q: 'What payment options are available?',
    a: 'We offer flexible payment schedules tied to project milestones. For larger projects, financing options may also be available.',
  },
]

function FAQItem({ faq, isOpen, onToggle, isLast }) {
  return (
    <div
      style={{
        background: '#1a1a1a',
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: isLast ? 0 : 7,
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          gap: 12,
        }}
      >
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize: '18px',
          fontWeight: 400,
          color: '#ffffff',
          lineHeight: 1.4,
        }}>
          {faq.q}
        </span>
        <span style={{
          flexShrink: 0,
          width: 22,
          height: 22,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.25rem',
          color: '#ffffff',
          fontWeight: 300,
          lineHeight: 1,
        }}>
          {isOpen ? '−' : '+'}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{
              padding: '0 16px 16px',
              fontSize: '16px',
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.7,
            }}>
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const fadeUp = {
    hidden:  { opacity: 0, y: 24 },
    visible: (d = 0) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: d },
    }),
  }

  return (
    <section id="faqs" ref={ref} style={{ background: '#ffffff' }}>
      <div className="container section-pad">
        <div
          data-faq-grid
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: 'clamp(40px, 6vw, 96px)',
            alignItems: 'start',
            background: '#000000',
            padding: 50,
          }}
        >
          {/* Left — label + logo */}
          <div>
            <motion.p
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={0}
              variants={fadeUp}
              style={{
                fontSize: '23px',
                fontWeight: 600,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.4)',
                marginBottom: 28,
                textAlign: 'center',
              }}
            >
              FAQs
            </motion.p>
            <motion.div
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={0.15}
              variants={fadeUp}
            >
              <img
                src="/faq-img.avif"
                alt="FAQ visual"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </motion.div>
          </div>

          {/* Right — white outer container */}
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0.1}
            variants={fadeUp}
            style={{
              borderRadius: 14,
              padding: 12,
            }}
          >
            {FAQS.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                isLast={i === FAQS.length - 1}
              />
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #faqs [data-faq-grid] { grid-template-columns: 1fr !important; }
          #faqs [data-faq-grid] > div:first-child { position: static !important; }
        }
        @media (max-width: 600px) {
          #faqs [data-faq-grid] { padding: 24px !important; }
        }
      `}</style>
    </section>
  )
}
