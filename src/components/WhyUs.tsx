const comparisons = [
  {
    competitor: 'Consultoras grandes',
    competitorDo: 'Entregan un roadmap en PowerPoint',
    aurakova: 'Entregamos un flujo automatizado funcionando al final del piloto',
    proof: 'Resultado medible en 8 semanas, no en 8 meses',
  },
  {
    competitor: 'Freelances de automatización',
    competitorDo: 'Construyen sin contexto de negocio',
    aurakova: 'Trabajamos codo a codo con tu equipo durante toda la implementación',
    proof: 'Compartes KPIs con nosotros, no solo el acceso al servidor',
  },
  {
    competitor: 'Plataformas propietarias',
    competitorDo: 'Te atan a su ecosistema',
    aurakova: 'Usamos Make, n8n, Zapier y OpenAI — herramientas abiertas del mercado',
    proof: 'Si mañana cambias de proveedor, tus flujos siguen funcionando sin tocarse',
  },
]

const tools = [
  { name: 'Make', desc: 'Automatización de flujos' },
  { name: 'n8n', desc: 'Open-source, control total' },
  { name: 'Zapier', desc: 'Integración rápida' },
  { name: 'OpenAI', desc: 'LLMs para procesamiento' },
  { name: 'HubSpot', desc: 'CRM integración nativa' },
  { name: 'Notion', desc: 'Gestión de conocimiento' },
]

export default function WhyUs() {
  return (
    <section id="por-que-nosotros" className="section-primary section-py">
      <div className="container">
        {/* Why Us */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ marginBottom: '12px' }}>
            Por qué el 80% de los intentos de IA en empresas B2B no funcionan — y cómo lo evitamos
          </h2>
          <p style={{ color: '#94A3B8', maxWidth: '560px', fontSize: '1.0625rem', marginBottom: '48px' }}>
            No porque la IA no funcione. Porque el proveedor entregó sin integrarse, o construyó sobre un stack que nadie más entiende.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {comparisons.map((c, i) => (
              <div
                key={i}
                className="card comparison-row"
                style={{
                  padding: '24px 28px',
                  display: 'grid',
                  gridTemplateColumns: '1fr auto 1fr',
                  gap: '24px',
                  alignItems: 'center',
                }}
              >
                {/* Competitor */}
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#EF4444', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '8px' }}>
                    {c.competitor}
                  </div>
                  <p style={{ fontSize: '0.9375rem', color: '#64748B', lineHeight: 1.5 }}>
                    {c.competitorDo}
                  </p>
                </div>

                {/* Arrow */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '8px',
                    borderRadius: '50%',
                    background: 'rgba(34,211,238,0.08)',
                    border: '1px solid rgba(34,211,238,0.2)',
                    flexShrink: 0,
                  }}
                >
                  <span style={{ color: '#22D3EE', fontSize: '1rem' }}>→</span>
                </div>

                {/* Aurakova */}
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#22D3EE', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '8px' }}>
                    Aurakova
                  </div>
                  <p style={{ fontSize: '0.9375rem', color: '#F0F4F8', fontWeight: 500, lineHeight: 1.5, marginBottom: '6px' }}>
                    {c.aurakova}
                  </p>
                  <p style={{ fontSize: '0.8125rem', color: '#64748B', lineHeight: 1.5 }}>
                    {c.proof}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* No Lock-In */}
        <div className="gradient-separator" style={{ marginBottom: '80px' }} />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '8fr 4fr',
            gap: '48px',
            alignItems: 'center',
          }}
          className="lockin-grid"
        >
          <div>
            <h2 style={{ marginBottom: '16px' }}>
              Tus procesos no dependen de nosotros para funcionar
            </h2>
            <p style={{ color: '#94A3B8', fontSize: '1.0625rem', lineHeight: 1.65, marginBottom: '32px', maxWidth: '560px' }}>
              Trabajamos con herramientas abiertas y ampliamente adoptadas en el mercado. Cualquier desarrollador puede mantenerlas si decides cambiar de proveedor.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '12px',
              }}
              className="tools-grid"
            >
              {tools.map((t) => (
                <div
                  key={t.name}
                  className="card"
                  style={{
                    padding: '14px 16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                  }}
                >
                  <span style={{ fontWeight: 600, color: '#F0F4F8', fontSize: '0.9375rem' }}>
                    {t.name}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: '#64748B' }}>{t.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right mini-table */}
          <div className="card" style={{ padding: '28px' }}>
            <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#64748B', marginBottom: '20px', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              Aurakova vs. plataformas propietarias
            </div>
            {[
              { label: 'Puedes cambiar de proveedor', yes: true },
              { label: 'Código abierto / auditable', yes: true },
              { label: 'Documentación pública', yes: true },
              { label: 'Contrato de mantenimiento obligatorio', yes: false },
              { label: 'Stack que solo nosotros entendemos', yes: false },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                  padding: '10px 0',
                  borderBottom: i < 4 ? '1px solid #0D1620' : 'none',
                }}
              >
                <span style={{ fontSize: '0.8125rem', color: '#94A3B8', lineHeight: 1.4 }}>
                  {item.label}
                </span>
                <span
                  style={{
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    color: item.yes ? '#10B981' : '#EF4444',
                    flexShrink: 0,
                  }}
                >
                  {item.yes ? '✓' : '✗'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .comparison-row,
        [class2="comparison-row"] {
          grid-template-columns: 1fr auto 1fr;
        }
        @media (max-width: 768px) {
          .comparison-row,
          [class2="comparison-row"] {
            grid-template-columns: 1fr !important;
          }
          .lockin-grid { grid-template-columns: 1fr !important; }
          .tools-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
