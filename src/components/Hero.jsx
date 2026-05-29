import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const TESTIMONIALS = [
  {
    quote: '"We used Alexis for a bathroom renovation in our condo, and they did a great job navigating the condo board approvals and insurance requirements."',
    name: 'Anna V',
    initials: 'AV',
    rating: '4.4',
  },
  {
    quote: '"The Alexis team did a wonderful job renovating our kitchen. The craftsmanship and attention to detail were excellent, and the project was …"',
    name: 'Lucas G',
    initials: 'LG',
    rating: '4.3',
  },
  {
    quote: '"We hired Alexis for a basement remodel, and the transformation is incredible. The space feels brand new and adds so much functionality to our …"',
    name: 'Mia F',
    initials: 'MF',
    rating: '4.2',
  },
  {
    quote: '"Alexis has become our go-to for both renovations and ongoing maintenance in our property. They\'re responsive, professional, and consistently deliver …"',
    name: 'James P',
    initials: 'JP',
    rating: '4.8',
  },
  {
    quote: '"Alexis helped us with both moving and renovations, which made the process so much easier. Their team was courteous, efficient, and knowledgeable."',
    name: 'David S',
    initials: 'DS',
    rating: '4.3',
  },
]

function TestimonialSlider() {
  const [index, setIndex] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const id = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setIndex(i => (i + 1) % TESTIMONIALS.length)
        setFading(false)
      }, 400)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  const t = TESTIMONIALS[index]

  return (
    <div
      style={{
        width: '100%',
        borderRadius: 10,
        border: '1px solid rgba(255,255,255,0.1)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        backgroundColor: 'rgba(255,255,255,0.05)',
        padding: 20,
        transition: 'opacity 0.4s ease',
        opacity: fading ? 0 : 1,
      }}
    >
      <p
        style={{
          fontSize: 13,
          color: '#fff',
          lineHeight: 1.6,
          fontWeight: 400,
          marginBottom: 14,
          minHeight: 80,
        }}
      >
        {t.quote}
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #CC1F1F, #8B0000)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              fontSize: 12,
              fontWeight: 700,
              color: '#fff',
              letterSpacing: '0.04em',
            }}
          >
            {t.initials}
          </div>
          <span style={{ fontSize: 13, color: '#fff', fontWeight: 500 }}>{t.name}</span>
        </div>
        <span style={{ fontSize: 13, color: '#F5A623', fontWeight: 600 }}>★ {t.rating}</span>
      </div>
    </div>
  )
}

function Counter({ end }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let start = 0
    const step = () => {
      start += Math.ceil(end / 60)
      if (start >= end) { el.textContent = end; return }
      el.textContent = start
      requestAnimationFrame(step)
    }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { step(); io.disconnect() }
    })
    io.observe(el)
    return () => io.disconnect()
  }, [end])
  return <span ref={ref}>0</span>
}

export default function Hero() {
  const navigate = useNavigate()
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* ── Background video ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      >
        <source src="/hero-bg-video.mp4" type="video/mp4" />
      </video>

      {/* ── Dark overlay ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          background: 'rgba(0,0,0,0.55)',
        }}
      />

      {/* ── Logo bar ── */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          padding: '32px 40px',
        }}
      >
        <img
          src="/alexis-logo.webp"
          alt="Alexis Logo"
          style={{ height: 70, width: 'auto', display: 'block' }}
        />
      </div>

      {/* ── Spacer ── */}
      <div style={{ flex: 1, zIndex: 10 }} />

      {/* ── Main content row — both columns start at the same horizontal level ── */}
      <div
        data-hero-content
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          padding: '0 40px 60px',
          gap: 40,
        }}
      >
        {/* LEFT — heading, subtext, buttons */}
        <div style={{ maxWidth: 520 }}>
          <img
            src="/alexis-logo.webp"
            alt="Alexis Logo"
            style={{ height: 180, width: 'auto', display: 'block', marginBottom: 20 }}
          />
          <h1
            style={{
              fontSize: 'clamp(36px, 4.5vw, 55px)',
              fontWeight: 500,
              color: '#fff',
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
              marginBottom: 20,
              fontFamily: 'var(--font-display)',
            }}
          >
            All-in-One Home &<br />Property Solutions
          </h1>

          <p
            style={{
              fontSize: 16,
              color: 'rgba(255,255,255,0.8)',
              lineHeight: 1.6,
              fontWeight: 400,
              marginBottom: 32,
            }}
          >
            From major renovations to quick repairs — and everything in between — we deliver complete home and property solutions. Our skilled team brings precision, care, and reliability to every project, big or small.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a
              href="#contact"
              className="btn"
              style={{
                padding: '14px 28px',
                background: 'transparent',
                border: '1.5px solid #fff',
                color: '#fff',
                fontSize: 13,
                letterSpacing: '1.5px',
                textDecoration: 'none',
                transition: 'background 0.2s',
                fontFamily: 'var(--font-body)',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#C41414'; e.currentTarget.style.borderColor = '#C41414' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = '#fff' }}
            >
              BOOK A CALL
            </a>
            <a
              href="#services"
              className="btn"
              style={{
                gap: 6,
                padding: '14px 28px',
                background: '#CC1F1F',
                color: '#fff',
                fontSize: 13,
                letterSpacing: '1.5px',
                textDecoration: 'none',
                transition: 'background 0.2s',
                fontFamily: 'var(--font-body)',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#000' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#CC1F1F' }}
            >
              OUR SERVICES
            </a>
          </div>
        </div>

        {/* RIGHT — testimonial card + stats, starts at same level as heading */}
        <div
          data-hero-right
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            flexShrink: 0,
            width: 350,
          }}
        >
          <TestimonialSlider />

          {/* More testimonials link */}
          <button
            onClick={() => { navigate('/testimonials'); window.scrollTo({ top: 0 }) }}
            style={{
              fontSize: 11,
              color: 'rgba(255,255,255,0.75)',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              textDecoration: 'none',
              fontWeight: 600,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              fontFamily: 'var(--font-body)',
            }}
          >
            MORE TESTIMONIALS ↗
          </button>

          {/* Stats */}
          <div
            style={{
              display: 'flex',
              gap: 40,
              alignItems: 'flex-end',
              marginTop: 8,
            }}
          >
            {[
              { value: 300, label: 'PROJECT COMPLETED' },
              { value: 15,  label: 'YEARS OF EXPERIENCE' },
            ].map((stat, i) => (
              <div key={i}>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 500,
                    color: '#fff',
                    lineHeight: 1,
                    marginBottom: 6,
                  }}
                >
                  <span style={{ fontSize: 'clamp(44px, 4.5vw, 64px)' }}>
                    <Counter end={stat.value} />
                  </span>
                  <sup style={{ fontSize: 'clamp(22px, 2.2vw, 32px)', verticalAlign: 'super', lineHeight: 0 }}>+</sup>
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: 'rgba(255,255,255,0.7)',
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    fontWeight: 500,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #home {
            height: auto !important;
            min-height: 100vh !important;
          }
          #home [data-hero-content] {
            flex-direction: column !important;
            padding: 0 24px 48px !important;
          }
          #home [data-hero-content] > div:first-child {
            max-width: 100% !important;
          }
          #home [data-hero-content] > div:first-child img {
            height: 100px !important;
          }
          #home [data-hero-right] {
            width: 100% !important;
          }
        }
        @media (max-width: 600px) {
          #home [data-hero-content] {
            padding-top: 20px !important;
            padding-left: 16px !important;
            padding-right: 16px !important;
            padding-bottom: 40px !important;
          }
          #home [data-hero-content] > div:first-child img {
            height: 80px !important;
          }
        }
      `}</style>
    </section>
  )
}
