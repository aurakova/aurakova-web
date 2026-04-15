export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{ background: '#040608', borderTop: '1px solid #0D1620', paddingTop: '80px', paddingBottom: '40px' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repaet(12, 1fr)',
            gap: '48px',
            marginBottom: '64px',
          }}
          className="footer-grid"
        >
          {/* Brand Column */}
          <div style={{ gridColumn: 'span 4' }} className="footer-brand">
            <div
              style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}
            >
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '6px',
                  background: 'linear-gradient(135deg, #22D3EE 0%, #2563EB 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span style={{ color: '#040608', fontWeight: 700, fontSize: '13px' }}>A</span>
              </div>
              <span
                style={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: '#F0F4F8',
                  letterSpacing: '-0.02em',
                }}
              >
                Aurakova
              </span>
            </div>
            
            <p style={{ color: '#64748B', fontSize: '0.875rem', lineHeight: 1.6, maxWidth: '280px' }}>
              Implementamos IA en operaciones B2B con un piloto de 4–8 semanas y ROI medible antes de comprometer más.
            </p>
          </div>

          {/* Links Columns */}
          <div style={{ gridColumn: 'span 8', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }} className="footer-links">
            {/* Col 1 */}
            <div>
              <h4 style={{ color: '#F0F4F8', fontSize: '0.875rem', fontWeight: 600, marginBottom: '20px' }}>Servicios</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li><a href="/consultoria-ia" className="footer-link">Consultoría IA Estratégica</a></li>
                <li><a href="/automatizacion-procesos-ia" className="footer-link">Automatización de Procesos</a></li>
                <li><a href="/marketing-growth-ia" className="footer-link">Marketing y Growth con IA</a></li>
              </ul>
            </div>

            {/* Col 2 */}
            <div>
              <h4 style={{ color: '#F0F4F8', fontSize: '0.875rem', fontWeight: 600, marginBottom: '20px' }}>Empresa</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li><a href="#proceso" className="footer-link">Cómo trabajamos</a></li>
                <li><a href="#equipo" className="footer-link">Equipo</a></li>
                <li><a href="/desarrollo-web" className="footer-link">Desarrollo web</a></li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 style={{ color: '#F0F4F8', fontSize: '0.875rem', fontWeight: 600, marginBottom: '20px' }}>Legal</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li><a href="/privacidad" className="footer-link">Política de privacidad</a></li>
                <li><a href="/aviso-legal" className="footer-link">Aviso legal</a></li>
                <li><a href="/cookies" className="footer-link">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            paddingTop: '24px',
            borderTop: '1px solid #0D1620',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            flexWrap: 'wrap',
          }}
        >
          <p style={{ color: '#64748B', fontSize: '0.8125rem' }}>
            © {currentYear} Aurakova. Todos los derechos reservados.
          </p>
          <span className="mono-tag" style={{ fontSize: '0.75rem', opacity: 0.6 }}>
            Consultoría de IA B2B · España y LATAM
          </span>
        </div>
      </div>

      <style>{`
        .footer-link {
          color: #94A3B8;
          font-size: 0.875rem;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-link:hover {
          color: #22D3EE;
        }
        .footer-grid { grid-template-columns: repeat(12, 1fr) !important; }

        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .footer-brand, .footer-links { grid-column: span 1 !important; }
        }
        @media (max-width: 600px) {
          .footer-links { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </footer>
  )
}
