import { Search, GitMerge, Cpu, Rocket } from "lucide-react";

export default function Process() {
  const steps = [
    {
      icon: Search,
      number: '1.',
      title: 'Auditoría y Descubrimiento',
      weeks: 'Semana 1–2',
      description: 'Mapeamos tu operación e identificamos las oportunidades de mayor impacto potencial y diseñamos un mapa de oportunidades priorizado por ROI.',
    },
    {
      icon: Cpu,
      number: '2.',
      title: 'Implementación del Piloto',
      weeks: 'Semana 3–6',
      description: 'Construimos e integramos el flujo automatizado en el proceso elegido con tus herramientas actuales. Solucionando problemas reales en producción.',
    },
    {
      icon: GitMerge,
      number: '3.',
      title: 'Medición y Decisión',
      weeks: 'Semana 7–8',
      description: 'Medimos el impacto real. Generamos un informe de resultados. Si los números tienen sentido y comprueban el caso de negocio, procedemos; si no, te lo decimos.',
    },
    {
      icon: Rocket,
      number: '4.',
      title: 'Escalamiento e Integración',
      weeks: 'A partir de Sem. 9',
      description: 'Con datos y ROI comprobado, establecemos un plan de escala o cierre constructivo, sin compromiso forzado. Despliegue total del sistema en la operativa.',
    },
  ];

  return (
    <section id="proceso" className="py-32 bg-slate-950 relative overflow-hidden text-slate-300">
      <div className="container mx-auto px-4 max-w-7xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Header (Left Column on Desktop) */}
          <div className="lg:sticky lg:top-32 h-fit">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight leading-tight">
              El método Aurakova:<br /> pilotamos antes de <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">escalar</span>
            </h2>
            <p className="text-slate-400 text-xl leading-relaxed mb-8">
              Antes de comprometerte con un proyecto grande, trabajamos juntos en un piloto de 4 a 8 semanas que demuestra ROI real en un proceso concreto de tu operación.
            </p>
            
            {/* CTA Option inside the left column to balance visual weight on desktop */}
            <div className="mt-16 hidden lg:block p-10 rounded-3xl bg-slate-900/40 border border-cyan-500/20 backdrop-blur-md relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent pointer-events-none"></div>
               <h4 className="text-white font-bold text-2xl mb-4 relative z-10">¿Listo para empezar?</h4>
               <p className="text-slate-400 text-lg mb-8 relative z-10 leading-relaxed">El diagnóstico es gratuito y dura entre 60 y 90 minutos. Recibes una hoja de ruta con priorización por ROI.</p>
               <a href="#contacto" className="inline-block w-full text-center bg-transparent border-2 border-cyan-500 text-cyan-400 font-bold py-4 px-8 rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300 relative z-10">
                 Agendar sesión de diagnóstico
               </a>
            </div>
          </div>

          {/* Steps Timeline Visual (Right Column on Desktop) */}
          <div className="relative border-l-2 border-cyan-500/30 ml-3 md:ml-6 space-y-12 py-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative group">
                  {/* Nodo brillante en la línea (Alineado con el nuevo padding p-10) */}
                  <div className="absolute -left-[9px] top-10 w-4 h-4 bg-slate-950 border-2 border-cyan-500 rounded-full group-hover:bg-cyan-400 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.8)] transition-all duration-300"></div>

                  {/* Tarjeta del Paso */}
                  <div className="ml-10 p-10 bg-slate-900/50 border border-slate-800 backdrop-blur-sm rounded-3xl hover:border-cyan-500/30 transition-colors shadow-xl shadow-black/20">
                    <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-6 mb-6">
                      <div className="flex items-center gap-5">
                        <div className="p-4 bg-cyan-950/40 rounded-2xl text-cyan-400 border border-cyan-500/20">
                          <Icon className="w-7 h-7" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white leading-tight">
                            <span className="text-cyan-400 mr-3">{step.number}</span>
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      {/* Badge Semanas */}
                      <div className="inline-block px-5 py-2 bg-slate-950 rounded-full border border-slate-800 w-max shrink-0">
                        <span className="text-sm font-mono text-cyan-400 uppercase tracking-widest">{step.weeks}</span>
                      </div>
                    </div>
                    
                    <p className="text-slate-400 leading-relaxed text-lg mb-6 xl:pl-20">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Bottom CTA (Mobile/Tablet only, since Desktop has it on the left) */}
        <div className="mt-24 flex justify-center lg:hidden">
          <div className="text-center p-10 rounded-3xl bg-slate-900/40 border border-cyan-500/20 max-w-2xl relative overflow-hidden backdrop-blur-md">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 pointer-events-none"></div>
            <p className="text-slate-300 mb-8 text-lg leading-relaxed relative z-10">
              El diagnóstico es gratuito y dura entre 60 y 90 minutos. Al terminar, recibes una hoja de ruta con priorización por ROI — sin compromiso de continuar.
            </p>
            <a href="#contacto" className="inline-block w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 px-10 rounded-xl hover:brightness-110 shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-0.5 relative z-10">
              Solicitar diagnóstico gratuito
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
