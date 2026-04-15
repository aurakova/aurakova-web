export default function Logos() {
  const logos = [
    {
      name: '[Cliente A]',
      metric: '38%',
      context: 'reducción en tiempo de respuesta a prospectos',
      sector: 'Servicios financieros',
      timeframe: '6 semanas',
    },
    {
      name: '[Cliente B]',
      metric: '120h',
      context: 'mensuales eliminadas en procesos de reportes',
      sector: 'Distribución',
      timeframe: '3 meses',
    },
    {
      name: '[Cliente C]',
      metric: '+47%',
      context: 'leads cualificados generados con campañas IA',
      sector: 'B2B industrial',
      timeframe: '60 días',
    },
    {
      name: '[Cliente D]',
      metric: '3 sem',
      context: 'Sitio corporativo rediseñado y lanzado',
      sector: 'Consultoría RRHH',
      timeframe: 'España',
    },
  ]

  return (
    <section className="section-surface" style={{ padding: '48px 0', borderTop: '1px solid #1A2535', borderBottom: '1px solid #1A2535' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <p style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#64748B', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
            Resultados de procesos optimizados por el equipo
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
          }}
          className="logos-grid"
        >
          {logos.map((logo, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '0 12px',
                borderRight: i < 3 ? '1px solid #1A2535' : 'none',
              }}
              className="logo-item"
            >
              {/* Placeholder for actual logo image later */}
              <div
                style={{
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                  filter: 'grayscale(1) opacity(0.7)',
                }}
              >
                <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#F0F4F8' }}>{logo.name}</div>
              </div>
              
              <div style={{ fontSize: '0.8125rem', lineHeight: 1.5, color: '#94A3B8' }}>
                <span style={{ fontWeight: 600, color: '#F0F4F8' }}>{logo.metric}</span> {logo.context}
                <div style={{ marginTop: '4px', fontSize: '0.75rem', color: '#64748B' }}>
                  {logo.sector} · {logo.timeframe}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .logos-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 32px !important; }
          .logo-item:nth-child(2) { border-right: none !important; }
          .logo-item:nth-child(3) { border-right: 1px solid #1A2535 !important; }
        }
        @media (max-width: 600px) {
          .logos-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .logo-item { border-right: none !important; padding-bottom: 24px !important; border-bottom: 1px solid #1A2535 !important; }
          .logo-item:last-child { border-bottom: none !important; padding-bottom: 0 !important; }
        }
      `}</style>
    </section>
  )
}
