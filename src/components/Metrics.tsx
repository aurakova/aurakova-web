const metrics = [
  {
    value: '+47%',
    label: 'leads cualificados generados en 60 días',
    context: 'Estrategia de campañas optimizadas · Empresa B2B industrial',
    color: '#22D3EE',
  },
  {
    value: '38%',
    label: 'reducción en tiempo de respuesta a prospectos',
    context: 'Automatización de seguimiento comercial · Servicios financieros · 6 semanas',
    color: '#0EA5E9',
  },
  {
    value: '3 sem.',
    label: 'de briefing a sitio lanzado con tráfico desde día 1',
    context: 'Diseño y desarrollo web · Consultoría de RRHH · España',
    color: '#2563EB',
  },
]

const dontDo = [
  {
    negative: 'No vendemos formaciones ni cursos',
    rationale: 'Nuestra función es ejecutar, no enseñar. Si quieres formación interna, hay mejores proveedores para eso.',
    icon: '📚',
  },
  {
    negative: 'No implementamos IA si no tiene sentido para tu negocio',
    rationale: 'Si en el diagnóstico vemos que no necesitas IA, te lo decimos. Preferimos perder una venta que entregarte algo que no funciona.',
    icon: '🎯',
  },
  {
    negative: 'No hacemos apps móviles nativas',
    rationale: 'Estamos especializados en operaciones, procesos y crecimiento B2B. Las apps nativas requieren un equipo distinto.',
    icon: '📱',
  },
  {
    negative: 'No pedimos un proyecto grande de entrada',
    rationale: 'Empezamos con un piloto. Escalamos solo cuando los datos lo justifican. Sin contratos de mantenimiento obligatorios.',
    icon: '📝',
  },
]

export default function Metrics() {
  return (
    <>
      {/* ── Metrics ── */}
      <section id="resultados" className="section-surface section-py">
        <div className="container">
          <div style={{ marginBottom: '48px' }}>
            <h2>Resultados de proyectos del equipo</h2>
            <p style={{ color: '#64748B', marginTop: '8px', fontSize: '0.875rem', fontStyle: 'italic' }}>
              Métricas de proyectos anteriores en marketing, growth y desarrollo web. A medida que completemos pilotos de IA, las actualizaremos con métricas específicas.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px',
            }}
            className="metrics-grid"
          >
            {metrics.map((m, i) => (
              <div
                key={i}
                className="card"
                style={{ padding: '32px', position: 'relative', overflow: 'hidden' }}
              >
                {/* Glow */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '3px',
                    background: `linear-gradient(90deg, ${m.color} 0%, transparent 100%)`,
                  }}
                />

                <div
                  className="gradient-text"
                  style={{
                    fontSize: '3rem',
                    fontWeight: 700,
                    lineHeight: 1,
                    marginBottom: '12px',
                    background: `linear-gradient(135deg, ${m.color} 0%, ${i === 0 ? '#2563EB' : i === 1 ? '#22D3EE' : '#22D3EE'} 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {m.value}
                </div>

                <p style={{ color: '#F0F4F8', fontWeight: 500, fontSize: '1rem', lineHeight: 1.4, marginBottom: '12px' }}>
                  {m.label}
                </p>

                <p style={{ color: '#64748B', fontSize: '0.8125rem', lineHeight: 1.5 }}>
                  {m.context}
                </p>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .metrics-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── What We Don't Do ── */}
      <section id="que-no-hacemos" className="section-primary section-py">
        <div className="container">
          <div style={{ marginBottom: '48px' }}>
            <h2>Lo que no hacemos — y por qué eso te beneficia</h2>
            <p style={{ color: '#94A3B8', marginTop: '12px', maxWidth: '520px', fontSize: '1.0625rem' }}>
              Definir límites claros es una señal de especialización, no de limitación.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '20px',
            }}
            className="dontdo-grid"
          >
            {dontDo.map((item, i) => (
              <div
                key={i}
                className="card"
                style={{
                  padding: '28px 32px',
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(239,68,68,0.08)',
                    border: '1px solid rgba(239,68,68,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.125rem',
                    flexShrink: 0,
                  }}
                >
                  <span style={{ filter: 'grayscale(0.3)' }}>{item.icon}</span>
                </div>
                <div>
                  <p style={{ color: '#F0F4F8', fontWeight: 600, fontSize: '1rem', marginBottom: '8px', lineHeight: 1.4 }}>
                    {item.negative}
                  </p>
                  <p style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.6 }}>
                    {item.rationale}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 640px) {
            .dontdo-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </>
  )
}
