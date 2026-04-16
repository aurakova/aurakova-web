import { ChevronDown } from "lucide-react";

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
  return (
    <section id="faq" className="py-24 bg-slate-950 relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Preguntas frecuentes sobre consultoría de IA para empresas B2B</h2>
          <p className="text-slate-400 text-lg mx-auto" style={{ maxWidth: '520px' }}>
            Si tienes una pregunta que no ves aquí, el diagnóstico gratuito es el mejor lugar para resolverla.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-slate-900/40 border border-slate-800 rounded-xl overflow-hidden transition-all duration-300 open:bg-slate-900/60 open:border-cyan-500/30">
              {/* Header / Pregunta */}
              <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-slate-800/50 transition-colors list-none [&::-webkit-details-marker]:hidden">
                <span className="text-white font-semibold pr-4">
                  {faq.q}
                </span>
                <ChevronDown className="w-5 h-5 text-cyan-400 transition-transform duration-300 group-open:rotate-180 flex-shrink-0" />
              </summary>

              {/* Contenido / Respuesta */}
              <div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-slate-800/50 pt-4 mt-2 mx-6">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
