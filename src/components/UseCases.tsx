const roles = [
  {
    id: 'ops',
    tag: 'Para el Director de Operaciones',
    problem: 'Tienes los procesos mapeados, pero el equipo sigue haciendo a mano lo que debería ser automático.',
    bullets: [
      'Automatiza aprobaciones y reportes sin cambiar tu ERP ni tu CRM',
      'Detecta cuellos de botella con datos reales, no con hipótesis',
      'Mide el impacto de cada automatización en semanas, no en trimestres',
    ],
    href: '/automatizacion-procesos-ia',
    accent: '#22D3EE',
    icon: '⚙️',
  },
  {
    id: 'ceo',
    tag: 'Para el CEO o Director General',
    problem: 'Sabes que la IA es una ventaja competitiva. El problema es que no tienes claridad de por dónde empezar ni cuánto cuesta equivocarse.',
    bullets: [
      'Obtén un diagnóstico de oportunidades IA con impacto estimado antes de comprometer presupuesto',
      'Entiende exactamente qué herramientas usaremos y con cuáles se integran',
      'Toma la decisión de escalar con datos reales del piloto, no con promesas',
    ],
    href: '/consultoria-ia',
    accent: '#0EA5E9',
    icon: '🎯',
  },
  {
    id: 'marketing',
    tag: 'Para el Responsable de Marketing o Digital',
    problem: 'Tienes campañas activas, pero el coste por lead sube y el equipo gasta horas en tareas que debería hacer una máquina.',
    bullets: [
      'Reduce CPL con modelos predictivos que optimizan presupuesto en tiempo real',
      'Automatiza producción y distribución de contenido sin perder la voz de marca',
      'Califica leads automáticamente antes de que lleguen al equipo comercial',
    ],
    href: '/marketing-growth-ia',
    accent: '#2563EB',
    icon: '📈',
  },
]

export default function UseCases() {
  return (
    <section id="casos-de-uso" className="section-primary section-py">
      <div className="container">
        <div style={{ marginBottom: '56px' }}>
          <h2>IA aplicada según tu rol</h2>
          <p style={{ color: '#94A3B8', marginTop: '12px', maxWidth: '520px', fontSize: '1.0625rem' }}>
            El mismo desafío se ve diferente desde cada posición. Aquí está lo que resolvemos para cada uno.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
          }}
          className="roles-grid"
        >
          {roles.map((role) => (
            <div
              key={role.id}
              className="card"
              style={{ padding: '32px', display: 'flex', flexDirection: 'column' }}
            >
              {/* Icon + Tag */}
              <div style={{ marginBottom: '20px' }}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '6px 14px',
                    borderRadius: '100px',
                    background: `${role.accent}12`,
                    border: `1px solid ${role.accent}28`,
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    color: role.accent,
                    marginBottom: '20px',
                  }}
                >
                  {role.tag}
                </div>
              </div>

              {/* Problem */}
              <p
                style={{
                  fontSize: '0.9375rem',
                  color: '#64748B',
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                  marginBottom: '24px',
                  paddingBottom: '24px',
                  borderBottom: '1px solid #1A2535',
                }}
              >
                "{role.problem}"
              </p>

              {/* Capabilities */}
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', flexGrow: 1 }}>
                {role.bullets.map((b, i) => (
                  <li
                    key={i}
                    style={{
                      display: 'flex',
                      gap: '10px',
                      fontSize: '0.9rem',
                      color: '#94A3B8',
                      lineHeight: 1.55,
                    }}
                  >
                    <span
                      style={{
                        color: role.accent,
                        fontWeight: 700,
                        flexShrink: 0,
                        marginTop: '2px',
                      }}
                    >
                      ✓
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid #1A2535' }}>
                <a
                  href={role.href}
                  className="btn-secondary"
                  style={{ color: role.accent, fontSize: '0.875rem' }}
                >
                  Ver solución →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .roles-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
