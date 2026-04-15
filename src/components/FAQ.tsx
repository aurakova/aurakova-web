'use client'

import { useState } from 'react'

const faqs = [
  {
    q: '¿Cuánto tiempo lleva implementar IA en una empresa B2B?',
    a: 'El primer resultado visible aparece entre 4 y 8 semanas, que es lo que dura nuestro piloto inicial. Empezamos por el proceso de mayor impacto: facturación, soporte, captación de leads o reportes. No esperamos a tener un proyecto grande definido para que veas resultados. La implementación completa, si decides escalar, varía según la complejidad de tus procesos y el stack de herramientas que ya usas.',
  },
  {
    q: '¿Necesito tener experiencia previa con IA para trabajar con nosotros?',
    a: 'No. Trabajamos con empresas que ya usan herramientas digitales habituales — CRM, ERP, Google Workspace o Microsoft 365 — pero que nunca han implementado IA de forma estratégica. El diagnóstico inicial está diseñado para identificar exactamente dónde aplicar IA sin necesidad de conocimiento técnico previo por parte de tu equipo. Nosotros aportamos la expertise; tú aportas el contexto de tu operación.',
  },
  {
    q: '¿Con qué herramientas trabajan y por qué eligieron esas en lugar de plataformas propias?',
    a: 'Usamos Make, n8n, Zapier y OpenAI porque son herramientas ampliamente adoptadas, con documentación pública y comunidades activas. Cualquier desarrollador del mercado puede mantenerlas si decides cambiar de proveedor. No construimos sobre plataformas propietarias porque eso generaría una dependencia innecesaria. Lo que construimos funciona de forma autónoma, con o sin nosotros.',
  },
  {
    q: '¿Qué incluye el diagnóstico gratuito y en qué se diferencia de una reunión de ventas?',
    a: 'El diagnóstico incluye una sesión de trabajo de 60 a 90 minutos donde mapeamos tus procesos actuales, identificamos los tres puntos de mayor fricción operativa y estimamos el impacto potencial de automatizarlos. Al terminar, te entregamos una hoja de ruta básica con priorización por ROI. No es una presentación de nuestros servicios — es una entrega de valor. Si después de eso quieres continuar, hablamos de cómo hacerlo.',
  },
  {
    q: '¿Qué pasa si el piloto no demuestra el ROI que esperábamos?',
    a: 'Si los resultados del piloto no justifican escalar, te lo decimos con datos. No tenemos incentivo en empujar proyectos que no funcionan: nuestro modelo de crecimiento depende de que tus resultados sean reales y verificables. En ese caso te entregamos el informe completo con las conclusiones y, si corresponde, una recomendación alternativa — que puede incluir "no implementes IA en este proceso por ahora."',
  },
  {
    q: '¿Trabajan con empresas de cualquier sector o tienen especialización?',
    a: 'Nos enfocamos en empresas B2B de servicios profesionales, distribución y empresas industriales en España y LATAM. No trabajamos con B2C ni con startups en etapa seed sin procesos definidos. Dentro de ese perímetro, no importa si vendes software, maquinaria, consultoría o servicios logísticos: los patrones de automatización y growth que aplicamos son transferibles entre sectores.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="section-primary section-py">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container">
        <div style={{ marginBottom: '56px' }}>
          <h2>Preguntas frecuentes sobre consultoría de IA para empresas B2B</h2>
          <p style={{ color: '#94A3B8', marginTop: '12px', maxWidth: '520px', fontSize: '1.0625rem' }}>
            Si tienes una pregunta que no ves aquí, el diagnóstico gratuito es el mejor lugar para resolverla.
          </p>
        </div>

        <div style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                className="card"
                style={{
                  borderColor: isOpen ? '#22D3EE40' : '#1A2535',
                  transition: 'border-color 0.2s ease',
                  overflow: 'hidden',
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    padding: '20px 24px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: isOpen ? '#F0F4F8' : '#94A3B8',
                      lineHeight: 1.4,
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {faq.q}
                  </h3>
                  <span
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: isOpen ? 'rgba(34,211,238,0.12)' : 'rgba(255,255,255,0.04)',
                      border: `1px solid ${isOpen ? '#22D3EE40' : '#1A2535'}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      color: isOpen ? '#22D3EE' : '#64748B',
                      fontSize: '1rem',
                      transition: 'all 0.2s ease',
                      transform: isOpen ? 'rotate(45deg)' : 'none',
                    }}
                  >
                    +
                  </span>
                </button>

                <div
                  style={{
                    maxHeight: isOpen ? '400px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease',
                  }}
                >
                  <div
                    style={{
                      padding: '0 24px 24px',
                      borderTop: '1px solid #0D1620',
                      paddingTop: '16px',
                    }}
                  >
                    <p style={{ color: '#94A3B8', fontSize: '0.9375rem', lineHeight: 1.7 }}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
