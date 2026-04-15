const services = [
  {
    id: 'consultoria',
    number: '01',
    title: 'Consultoría IA Estratégica',
    description: 'Diagnosticamos tu operación e identificamos dónde la IA genera impacto medible — antes de invertir un euro en implementación.',
    bullets: [
      { pain: 'Procesos manuales sin mapear', solution: 'identificados y priorizados por ROI' },
      { pain: 'Decisiones basadas en intuición', solution: 'respaldadas por dashboards en tiempo real' },
      { pain: 'IA "de moda" sin dirección', solution: 'plan de implementación con hitos medibles' },
    ],
    href: '/consultoria-ia',
    accent: '#22D3EE',
    large: true,
  },
  {
    id: 'automatizacion',
    number: '02',
    title: 'Automatización de Procesos',
    description: 'Eliminamos trabajo manual repetitivo en facturación, soporte y reportes con flujos inteligentes que usan tus herramientas actuales.',
    bullets: [
      { pain: 'Facturación manual de 4 horas', solution: 'automatizada en 48 h de configuración' },
      { pain: '200 tickets semanales', solution: '70% resueltos sin intervención humana' },
      { pain: 'Reportes de 2 días', solution: 'generados en 15 minutos automáticamente' },
    ],
    href: '/automatizacion-procesos-ia',
    accent: '#0EA5E9',
    large: false,
  },
  {
    id: 'marketing',
    number: '03',
    title: 'Marketing y Growth con IA',
    description: 'Más leads cualificados y menor coste por adquisición con campañas que aprenden y se optimizan solas.',
    bullets: [
      { pain: 'CPL alto con campañas genéricas', solution: 'segmentación predictiva que reduce CPL hasta 40%' },
      { pain: 'Contenido producido a mano', solution: 'flujos de creación y distribución automatizados' },
      { pain: 'Pipeline irregular', solution: 'captación constante con scoring automático de leads' },
    ],
    href: '/marketing-growth-ia',
    accent: '#2563EB',
    large: false,
  },
]

export default function Services() {
  return (
    <section id="servicios" className="section-surface section-py">
      <div className="container">
        <div style={{ marginBottom: '56px' }}>
          <h2>
            Tres formas concretas de reducir costes operativos con IA
          </h2>
          <p style={{ color: '#94A3B8', marginTop: '12px', maxWidth: '560px', fontSize: '1.0625rem' }}>
            Sin plataformas propietarias. Sin lock-in. Con herramientas que ya existen en el mercado.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '20px',
          }}
          className="services-grid"
        >
          {/* Primary card — 6 cols */}
          <div
            className="card services-primary"
            style={{
              gridColumn: 'span 6',
              padding: '36px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '200px',
                height: '200px',
                background: `radial-gradient(circle at top right, ${services[0].accent}18 0%, transparent 70%)`,
                pointerEvents: 'none',
              }}
            />
            <ServiceCard service={services[0]} large />
          </div>

          {/* Secondary cards — 3 cols each */}
          {services.slice(1).map((s) => (
            <div
              key={s.id}
              className="card services-secondary"
              style={{ gridColumn: 'span 3', padding: '28px', position: 'relative', overflow: 'hidden' }}
            >
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '120px',
                  height: '120px',
                  background: `radial-gradient(circle at top right, ${s.accent}14 0%, transparent 70%)`,
                  pointerEvents: 'none',
                }}
              />
              <ServiceCard service={s} large={false} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .services-primary { grid-column: span 12 !important; }
          .services-secondary { grid-column: span 6 !important; }
        }
        @media (max-width: 640px) {
          .services-grid { grid-template-columns: 1fr !important; }
          .services-primary, .services-secondary { grid-column: span 1 !important; }
        }
      `}</style>
    </section>
  )
}

function ServiceCard({
  service,
  large,
}: {
  service: (typeof services)[number]
  large: boolean
}) {
  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '20px' }}>
        <span className="mono-tag">{service.number}</span>
        <div
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '8px',
            background: `${service.accent}18`,
            border: `1px solid ${service.accent}30`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: service.accent,
              opacity: 0.8,
            }}
          />
        </div>
      </div>

      <h3 style={{ color: '#F0F4F8', marginBottom: '12px' }}>{service.title}</h3>

      <p
        style={{
          color: '#94A3B8',
          fontSize: large ? '1rem' : '0.9375rem',
          lineHeight: 1.6,
          marginBottom: '24px',
        }}
      >
        {service.description}
      </p>

      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
        {service.bullets.map((b, i) => (
          <li key={i} style={{ fontSize: '0.875rem', color: '#94A3B8', lineHeight: 1.5 }}>
            <span style={{ color: '#64748B', textDecoration: 'line-through', marginRight: '6px' }}>
              {b.pain}
            </span>
            <span style={{ color: service.accent, margin: '0 6px' }}>→</span>
            <span style={{ color: '#F0F4F8', fontWeight: 500 }}>{b.solution}</span>
          </li>
        ))}
      </ul>

      <a
        href={service.href}
        className="btn-secondary"
        style={{ color: service.accent }}
      >
        Ver cómo funciona →
      </a>
    </div>
  )
}
