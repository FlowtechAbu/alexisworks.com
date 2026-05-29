import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate, useLocation } from 'react-router-dom'

const NAV_LINKS = ['Home', 'About', 'Services', 'Projects', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [active, setActive]       = useState('Home')
  const [isMobile, setIsMobile]   = useState(false)
  const navigate  = useNavigate()
  const location  = useLocation()

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (label) => {
    setActive(label)
    setMenuOpen(false)
    if (label === 'Contact') {
      navigate('/contact')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (label === 'Projects') {
      navigate('/projects')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (label === 'Services') {
      navigate('/services')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (label === 'Testimonials') {
      navigate('/testimonials')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(() => {
          document.getElementById(label.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      } else {
        document.getElementById(label.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        backgroundColor: '#000000',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        transition: 'border-color 0.3s',
      }}
    >
      {/* ─── Inner bar ─────────────────────────────────────────── */}
      <div style={{
        maxWidth: 1440,
        margin: '0 auto',
        padding: '0 40px',
        height: 110,
        display: 'flex',
        alignItems: 'center',
      }}>

        {/* Logo */}
        <button
          onClick={() => handleNav('Home')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center' }}
          aria-label="Alexis home"
        >
          <img
            src="/alexis-logo.webp"
            alt="Alexis"
            style={{ width: 124, height: 'auto', display: 'block' }}
          />
        </button>

        {/* ─── Desktop nav ─────────────────────────────────── */}
        {!isMobile && <nav style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 40 }}>
          {NAV_LINKS.map(link => (
            <button
              key={link}
              onClick={() => handleNav(link)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                fontSize: '0.8rem',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: active === link ? '#C41414' : 'rgba(255,255,255,0.8)',
                transition: 'color 0.2s',
                padding: 0,
                lineHeight: 1,
              }}
              onMouseEnter={e => { if (active !== link) e.currentTarget.style.color = '#fff' }}
              onMouseLeave={e => { if (active !== link) e.currentTarget.style.color = 'rgba(255,255,255,0.8)' }}
            >
              {link.toUpperCase()}
            </button>
          ))}

          {/* Schedule a Call */}
          <button
            className="btn"
            onClick={() => { navigate('/contact'); window.scrollTo({ top: 0 }) }}
            style={{
              background: '#ffffff',
              color: '#111111',
              padding: '12px 24px',
              lineHeight: 1,
              transition: 'background 0.2s, color 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#C41414'
              e.currentTarget.style.color = '#ffffff'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#ffffff'
              e.currentTarget.style.color = '#111111'
            }}
          >
            Schedule a Call
          </button>
        </nav>}

        {/* ─── Mobile hamburger ──────────────────────────── */}
        {isMobile && <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 5, padding: 8 }}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map(i => (
            <motion.span
              key={i}
              style={{ display: 'block', width: 22, height: 2, background: '#fff', transformOrigin: 'center' }}
              animate={menuOpen ? i === 0 ? { rotate: 45, y: 7 } : i === 2 ? { rotate: -45, y: -7 } : { opacity: 0 } : { rotate: 0, y: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
          ))}
        </button>}
      </div>

      {/* ─── Mobile menu ───────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden', background: '#000', borderTop: '1px solid #1a1a1a' }}
          >
            <div style={{ padding: '12px 24px 24px', display: 'flex', flexDirection: 'column' }}>
              {NAV_LINKS.map(link => (
                <button
                  key={link}
                  onClick={() => handleNav(link)}
                  style={{
                    background: 'none', border: 'none', borderBottom: '1px solid #1a1a1a',
                    cursor: 'pointer', fontFamily: 'var(--font-body)',
                    fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.1em',
                    textTransform: 'uppercase', color: active === link ? '#C41414' : 'rgba(255,255,255,0.8)',
                    padding: '14px 0', textAlign: 'left',
                  }}
                >{link}</button>
              ))}
              <button
                onClick={() => handleNav('Contact')}
                style={{
                  marginTop: 16, background: '#C41414', border: 'none', cursor: 'pointer',
                  fontFamily: 'var(--font-body)', fontSize: '0.8rem', fontWeight: 700,
                  letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff',
                  padding: '14px', width: '100%',
                }}
              >Schedule a Call</button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
