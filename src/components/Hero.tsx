export default function Hero() {
  return (
    <section
      className="section-primary section-py"
      id="inicio"
      style={{
        paddingTop: '160px',
        paddingBottom: '80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '600px',
          background:
            'radial-gradient(ellipse at center, rgba(34,211,238,0.06) 0%, rgba(37,99,235,0.04) 40%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '48px',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left: text */}
          <div style={{ maxWidth: '720px' }}>
            {/* Badge */}
            <div style={{ marginBottom: '24px' }}>
              <span className="badge">
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#22D3EE',
                    display: 'inline-block',
                  }}
                />
                Consultoría de IA B2B · España y LATAM
              </span>
            </div>

            {/* H1 */}
            <h1 style={{ marginBottom: '24px' }}>
              <span style={{ color: '#F0F4F8' }}>IA que trabaja</span>
              <br />
              <span className="gradient-text">dentro de tu operación</span>
              <br />
              <span style={{ color: '#F0F4F8' }}>— no encima de ella</span>
            </h1>

            {/* Qualification signal — verbatim from blueprint */}
            <p
              style={{
                fontSize: '1.125rem',
                color: '#94A3B8',
                lineHeight: 1.65,
                marginBottom: '36px',
                maxWidth: '600px',
              }}
            >
              Para empresas B2B en España y LATAM que ya usan herramientas digitales y quieren que
              la IA trabaje dentro de su operación — no encima de ella.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <a href="#contacto" className="btn-primary">
                Solicitar diagnóstico gratuito
              </a>
              <a href="#proceso" className="btn-secondary">
                Ver cómo funciona →
              </a>
            </div>

            {/* Credibility signal */}
            <div
              style={{
                marginTop: '48px',
                paddingTop: '32px',
                borderTop: '1px solid #1A2535',
                display: 'flex',
                alignItems: 'center',
                gap: '32px',
                flexWrap: 'wrap',
              }}
            >
              {[
                { value: '+35 años', label: 'Experiencia combinada en B2B' },
                { value: '4–8 sem.', label: 'Piloto con ROI medible' },
                { value: '0 lock-in', label: 'Herramientas abiertas siempre' },
              ].map((stat) => (
                <div key={stat.value}>
                  <div
                    className="gradient-text"
                    style={{ fontSize: '1.5rem', fontWeight: 700, lineHeight: 1 }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{ fontSize: '0.8125rem', color: '#64748B', marginTop: '4px' }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Process visual — hidden on mobile */}
          <div className="hero-visual" aria-hidden="true">
            <div className="card" style={{ padding: '32px', position: 'relative' }}>
              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: '#22D3EE',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '24px',
                }}
              >
                El método Aurakova
              </div>
              {[
                { week: 'Sem. 1–2', step: 'Diagnóstico', desc: 'Mapeamos procesos y detectamos las 3 oportunidades de mayor impacto', color: '#22D3EE' },
                { week: 'Sem. 3–6', step: 'Piloto', desc: 'Construimos el flujo automatizado con tus herramientas actuales', color: '#0EA5E9' },
                { week: 'Sem. 7–8', step: 'Medición', desc: 'Datos reales. Si funcionó, escalamos. Si no, te lo decimos.', color: '#2563EB' },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    gap: '16px',
                    marginBottom: i < 2 ? '20px' : 0,
                    paddingBottom: i < 2 ? '20px' : 0,
                    borderBottom: i < 2 ? '1px solid #1A2535' : 'none',
                  }}
                >
                  <div
                    style={{
                      width: '8px',
                      borderRadius: '4px',
                      flexShrink: 0,
                      background: item.color,
                      opacity: 0.8,
                    }}
                  />
                  <div>
                    <span
                      className="mono-tag"
                      style={{ display: 'block', marginBottom: '4px' }}
                    >
                      {item.week}
                    </span>
                    <span
                      style={{
                        display: 'block',
                        fontWeight: 600,
                        color: '#F0F4F8',
                        marginBottom: '4px',
                        fontSize: '0.9375rem',
                      }}
                    >
                      {item.step}
                    </span>
                    <span style={{ fontSize: '0.8125rem', color: '#64748B', lineHeight: 1.5 }}>
                      {item.desc}
                    </span>
                  </div>
                </div>
              ))}

              <div
                style={{
                  marginTop: '24px',
                  paddingTop: '20px',
                  borderTop: '1px solid #1A2535',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#10B981',
                    display: 'inline-block',
                    flexShrink: 0,
                  }}
                />
                <span style={{ fontSize: '0.8125rem', color: '#94A3B8' }}>
                  ROI medible antes de comprometer más
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .hero-grid {
            grid-template-columns: 7fr 5fr !important;
          }
        }
        @media (max-width: 1023px) {
          .hero-visual { display: none; }
        }
      `}</style>
    </section>
  )
}
