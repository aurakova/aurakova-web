'use client'

export default function Navbar() {
  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        borderBottom: '1px solid rgba(26, 37, 53, 0.6)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        backgroundColor: 'rgba(4, 6, 8, 0.85)',
      }}
    >
      <nav
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '68px',
        }}
      >
        {/* Logo */}
        <a
          href="/"
          style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
        >
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #22D3EE 0%, #2563EB 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ color: '#040608', fontWeight: 700, fontSize: '14px' }}>A</span>
          </div>
          <span
            style={{
              fontSize: '1.125rem',
              fontWeight: 700,
              color: '#F0F4F8',
              letterSpacing: '-0.02em',
            }}
          >
            Aurakova
          </span>
        </a>

        {/* Desktop Nav */}
        <div
          className="hidden-mobile"
          style={{ display: 'flex', alignItems: 'center', gap: '32px' }}
        >
          {[
            { label: 'Qué hacemos', href: '#servicios' },
            { label: 'El método', href: '#proceso' },
            { label: 'Equipo', href: '#equipo' },
            { label: 'FAQ', href: '#faq' },
            { label: 'Desarrollo web', href: '/desarrollo-web' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                fontSize: '0.875rem',
                fontWeight: 500,
                color: '#94A3B8',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#F0F4F8')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a href="#contacto" className="btn-primary" style={{ fontSize: '0.875rem', padding: '10px 20px' }}>
          Diagnóstico gratuito
        </a>
      </nav>

      <style>{`
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
        }
      `}</style>
    </header>
  )
}
