const steps = [
  {
    number: '01',
    weeks: 'Semana 1–2',
    title: 'Diagnóstico de procesos',
    description:
      'Mapeamos tu operación e identificamos las 3 oportunidades de mayor impacto potencial.',
    deliverable: 'Mapa de oportunidades IA con priorización por ROI',
    color: '#22D3EE',
  },
  {
    number: '02',
    weeks: 'Semana 3–6',
    title: 'Implementación del piloto',
    description:
      'Construimos e integramos el flujo en el proceso elegido con tus herramientas actuales.',
    deliverable: 'Flujo automatizado funcionando en producción',
    color: '#0EA5E9',
  },
  {
    number: '03',
    weeks: 'Semana 7–8',
    title: 'Medición y decisión de escala',
    description:
      'Medimos el impacto real. Si los números tienen sentido, escalamos. Si no los tienen, te lo decimos.',
    deliverable: 'Informe de resultados con recomendación de siguiente paso',
    color: '#2563EB',
  },
  {
    number: '04',
    weeks: 'A partir de sem. 9',
    title: 'Escalar o no escalar',
    description:
      'Con datos reales en la mano, decidís juntos. No hay presión ni compromiso previo.',
    deliverable: 'Plan de escala o cierre honesto del proyecto',
    color: '#6366F1',
  },
]

export default function Process() {
  return (
    <section id="proceso" className="section-surface section-py">
      <div className="container">
        {/* Header */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '48px',
            alignItems: 'end',
            marginBottom: '64px',
          }}
          className="process-header"
        >
          <div>
            <h2>El método Aurakova: pilotamos antes de escalar</h2>
          </div>
          <div>
            <p style={{ color: '#94A3B8', fontSize: '1.0625rem', lineHeight: 1.65 }}>
              Antes de comprometerte con un proyecto grande, trabajamos juntos en un piloto de{' '}
              <strong style={{ color: '#F0F4F8' }}>4 a 8 semanas</strong> que demuestra ROI real en
              un proceso concreto de tu operación.
            </p>
            <p style={{ color: '#64748B', fontSize: '0.9375rem', marginTop: '12px', lineHeight: 1.6 }}>
              No necesitas creer en nosotros antes de ver resultados. El piloto lo demuestra.
            </p>
          </div>
        </div>

        {/* Steps timeline */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
            position: 'relative',
          }}
          className="steps-grid"
        >
          {/* Connector line */}
          <div
            aria-hidden="true"
            className="connector-line"
            style={{
              position: 'absolute',
              top: '28px',
              left: '10%',
              right: '10%',
              height: '1px',
              background:
                'linear-gradient(90deg, #22D3EE 0%, #0EA5E9 33%, #2563EB 66%, #6366F1 100%)',
              opacity: 0.3,
              zIndex: 0,
            }}
          />

          {steps.map((step, i) => (
            <div
              key={i}
              className="card"
              style={{ padding: '24px', position: 'relative', zIndex: 1 }}
            >
              {/* Step number dot */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: `${step.color}20`,
                    border: `2px solid ${step.color}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-jetbrains), monospace',
                      fontSize: '0.75rem',
                      fontWeight: 400,
                      color: step.color,
                    }}
                  >
                    {step.number}
                  </span>
                </div>
                <span
                  className="mono-tag"
                  style={{ color: step.color, opacity: 0.8 }}
                >
                  {step.weeks}
                </span>
              </div>

              <h3 style={{ color: '#F0F4F8', marginBottom: '12px', fontSize: '1.0625rem' }}>
                {step.title}
              </h3>

              <p style={{ color: '#94A3B8', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '20px' }}>
                {step.description}
              </p>

              {/* Deliverable */}
              <div
                style={{
                  padding: '10px 14px',
                  borderRadius: '8px',
                  background: `${step.color}0A`,
                  border: `1px solid ${step.color}20`,
                }}
              >
                <span style={{ fontSize: '0.75rem', color: step.color, fontWeight: 600, display: 'block', marginBottom: '2px' }}>
                  → Entregable
                </span>
                <span style={{ fontSize: '0.8125rem', color: '#94A3B8' }}>{step.deliverable}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            marginTop: '56px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              textAlign: 'center',
              padding: '40px 48px',
              borderRadius: '16px',
              background: 'rgba(34,211,238,0.04)',
              border: '1px solid rgba(34,211,238,0.12)',
              maxWidth: '560px',
            }}
          >
            <p style={{ color: '#94A3B8', marginBottom: '24px', lineHeight: 1.65 }}>
              El diagnóstico es gratuito y dura entre 60 y 90 minutos. Al terminar, recibes una hoja de ruta con priorización por ROI — sin compromiso de continuar.
            </p>
            <a href="#contacto" className="btn-primary">
              Solicitar diagnóstico gratuito
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .process-header { grid-template-columns: 1fr !important; }
          .steps-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .connector-line { display: none; }
        }
        @media (max-width: 600px) {
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
