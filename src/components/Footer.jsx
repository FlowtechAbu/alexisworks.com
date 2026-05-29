import { useNavigate } from 'react-router-dom'

const FOOTER_LINKS = {
  Pages: ['About', 'Services', 'Projects', 'Testimonials', 'Contact'],
  Projects: ['Basement Renovation', 'NYC Gut Renovation', "Hell's Apartment Renovation"],
  Services: [
    'Home & Apartment Renovations',
    'Demolition',
    'Flooring & Tile',
    'Moving & Carting',
  ],
  More: [
    'Finished Basements',
    'Kitchen Renovation',
    'Bathroom Remodel',
    'Commercial Renovations',
  ],
}

const linkStyle = {
  display: 'block',
  fontSize: '0.8125rem',
  color: 'rgba(255,255,255,0.5)',
  textDecoration: 'none',
  marginBottom: 10,
  lineHeight: 1.5,
  transition: 'color 0.2s',
  cursor: 'pointer',
  background: 'none',
  border: 'none',
  textAlign: 'left',
  padding: 0,
  fontFamily: 'var(--font-body)',
}

const colHeadStyle = {
  fontSize: '0.75rem',
  fontWeight: 700,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: '#fff',
  marginBottom: 18,
}

const PAGE_ROUTES = {
  'Testimonials':          '/testimonials',
  'Projects':              '/projects',
  'Services':              '/services',
  'Contact':               '/contact',
  'Basement Renovation':        '/projects/basement-renovation',
  'NYC Gut Renovation':         '/projects/nyc-gut-renovation',
  "Hell's Apartment Renovation": '/projects/gut-remodel-modern-renovation',
}

export default function Footer() {
  const year     = new Date().getFullYear()
  const navigate = useNavigate()

  return (
    <footer style={{ background: '#000', borderTop: '1px solid #1a1a1a' }}>
      <div className="container" style={{ paddingTop: 64, paddingBottom: 40 }}>
        {/* Top grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
          gap: 40,
          marginBottom: 56,
        }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: 16 }}>
              <img
                src="/alexis-logo.webp"
                alt="Alexis"
                style={{ height: 44, width: 'auto', display: 'block', objectFit: 'contain' }}
              />
            </div>
            <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, marginBottom: 16 }}>
              All-in-One Home & Property Solutions
            </p>
            <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.65 }}>
              441 Marcus Garvey Boulevard<br />
              Brooklyn, NY 11216
            </p>
            <a
              href="mailto:alex@alexisworks.com"
              style={{
                display: 'block',
                marginTop: 10,
                fontSize: '0.8rem',
                color: 'rgba(255,255,255,0.4)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
            >
              alex@alexisworks.com
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([col, links]) => (
            <div key={col}>
              <p style={colHeadStyle}>{col}</p>
              {links.map((link) => (
                <button
                  key={link}
                  style={linkStyle}
                  onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                  onClick={() => {
                    if (PAGE_ROUTES[link]) {
                      navigate(PAGE_ROUTES[link])
                      window.scrollTo({ top: 0 })
                    } else {
                      const id = link.toLowerCase().replace(/[^a-z]/g, '')
                      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                >
                  {link}
                </button>
              ))}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid #1a1a1a', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>
            © {year} Alexis. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Privacy Policy', 'Terms of Service'].map(t => (
              <button key={t} style={{ ...linkStyle, marginBottom: 0, fontSize: '0.75rem' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
              >{t}</button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          footer .container > div:first-child {
            grid-template-columns: 1fr 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          footer .container > div:first-child {
            grid-template-columns: 1fr 1fr !important;
          }
          footer .container > div:last-child {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </footer>
  )
}
