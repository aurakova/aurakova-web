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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: text */}
          <div className="lg:col-span-7" style={{ maxWidth: '720px' }}>
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

          {/* Right: Imagen visual */}
          <div className="lg:col-span-5 relative w-full">
            <div className="absolute -inset-4 bg-[var(--color-accent-cyan)]/10 blur-3xl rounded-3xl" />
            
            {/* Imagen Vertical - Solo visible en Móvil (< 768px) */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/agencia-ia-automatizacion-b2b.avif"
              alt="Auditoría y automatización de procesos IA para empresas B2B"
              className="block md:hidden w-full h-[500px] object-cover rounded-2xl border border-[var(--color-border)] relative z-10"
              loading="eager"
              width={1080}
              height={1920}
            />

            {/* Imagen Horizontal - Solo visible en Desktop (> 768px) */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/agencia-automatizacion-ai-ia.avif"
              alt="Operación B2B optimizada con IA"
              className="hidden md:block w-full h-[600px] object-cover rounded-2xl border border-[var(--color-border)] relative z-10"
              loading="eager"
              width={1920}
              height={1080}
            />
          </div>
        </div>
      </div>


    </section>
  )
}
