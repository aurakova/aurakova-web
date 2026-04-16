import { Zap, BarChart3, ShieldCheck } from "lucide-react";

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Fondo sutil decorativo opcional */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-7xl">
        {/* Encabezado */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Tres formas concretas de reducir costes operativos con IA
          </h2>
          <p className="text-slate-400 text-lg">
            Dejamos de lado la teoría y nos enfocamos en implementaciones que impactan directamente en tu cuenta de resultados desde la primera semana.
          </p>
        </div>

        {/* Grid de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tarjeta 1 */}
          <div className="group p-8 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/10" style={{ backdropFilter: 'blur(8px)' }}>
            <div className="w-12 h-12 bg-cyan-950/50 rounded-xl flex items-center justify-center mb-6 border border-cyan-500/20 group-hover:bg-cyan-500/10 transition-colors">
              <Zap className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Automatización Inteligente</h3>
            <p className="text-slate-400 leading-relaxed">
              Eliminamos tareas manuales repetitivas integrando IA que trabaja 24/7 sin errores, liberando a tu equipo para tareas estratégicas.
            </p>
          </div>

          {/* Tarjeta 2 */}
          <div className="group p-8 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/10" style={{ backdropFilter: 'blur(8px)' }}>
            <div className="w-12 h-12 bg-cyan-950/50 rounded-xl flex items-center justify-center mb-6 border border-cyan-500/20 group-hover:bg-cyan-500/10 transition-colors">
              <BarChart3 className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Optimización de Recursos</h3>
            <p className="text-slate-400 leading-relaxed">
              Algoritmos predictivos que analizan tus operativas actuales para detectar cuellos de botella y redistribuir el esfuerzo donde genera mayor valor económico.
            </p>
          </div>

          {/* Tarjeta 3 */}
          <div className="group p-8 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/10" style={{ backdropFilter: 'blur(8px)' }}>
            <div className="w-12 h-12 bg-cyan-950/50 rounded-xl flex items-center justify-center mb-6 border border-cyan-500/20 group-hover:bg-cyan-500/10 transition-colors">
              <ShieldCheck className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Reducción de Errores</h3>
            <p className="text-slate-400 leading-relaxed">
              La fatiga humana causa costosos errores. Nuestros sistemas aseguran una precisión del 99.9% en procesos críticos, reduciendo devoluciones y rectificaciones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
