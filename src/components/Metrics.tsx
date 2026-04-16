const metrics = [
  {
    value: '+47%',
    label: 'Leads Cualificados',
    context: 'Generados en 60 días. Estrategia de campañas optimizadas para empresa B2B.',
    color: '#22D3EE',
  },
  {
    value: '38%',
    label: 'Reducción de Tiempo',
    context: 'En respuesta a prospectos. Automatización de seguimiento en 6 semanas.',
    color: '#0EA5E9',
  },
  {
    value: '3 sem.',
    label: 'Velocidad de Lanzamiento',
    context: 'De briefing a sitio con tráfico activo. Diseño y desarrollo web B2B.',
    color: '#2563EB',
  },
]

const dontDo = [
  {
    negative: 'No vendemos formaciones ni cursos',
    rationale: 'Nuestra función es ejecutar, no enseñar. Si quieres formación interna, hay mejores proveedores para eso.',
    symbol: '✕',
  },
  {
    negative: 'No implementamos IA si no tiene sentido para tu negocio',
    rationale: 'Si en el diagnóstico vemos que no necesitas IA, te lo decimos. Preferimos perder una venta que entregarte algo que no funciona.',
    symbol: '✕',
  },
  {
    negative: 'No hacemos apps móviles nativas',
    rationale: 'Estamos especializados en operaciones, procesos y crecimiento B2B. Las apps nativas requieren un equipo distinto.',
    symbol: '✕',
  },
  {
    negative: 'No pedimos un proyecto grande de entrada',
    rationale: 'Empezamos con un piloto. Escalamos solo cuando los datos lo justifican. Sin contratos de mantenimiento obligatorios.',
    symbol: '✕',
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
                className="p-6 bg-slate-900/30 border-t border-cyan-500/30 rounded-lg backdrop-blur-sm text-center md:text-left group hover:bg-slate-900/50 transition-colors"
              >
                <div className="text-slate-500 uppercase tracking-widest text-xs font-semibold mb-2">
                  {m.label}
                </div>
                <div className="font-mono text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-1">
                  {m.value}
                </div>
                <div className="text-slate-400 text-sm">
                  {m.context}
                </div>
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
                    flexShrink: 0,
                    color: '#EF4444',
                    fontSize: '1rem',
                    fontWeight: 700,
                  }}
                >
                  {item.symbol}
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
