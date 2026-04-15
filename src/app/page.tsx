import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Logos from '@/components/Logos'
import Services from '@/components/Services'
import UseCases from '@/components/UseCases'
import Process from '@/components/Process'
import WhyUs from '@/components/WhyUs'
import Metrics from '@/components/Metrics'
import Team from '@/components/Team'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main>
        {/* §1 Hero */}
        <Hero />
        
        {/* Separador crítico 1px gradiente entre Hero y Logos */}
        <div className="gradient-separator" aria-hidden="true" />
        
        {/* §2 Logos */}
        <Logos />
        
        {/* §3 Servicios */}
        <Services />
        
        {/* §4 Roles */}
        <UseCases />
        
        {/* §5 Piloto */}
        <Process />
        
        {/* Separador crítico 1px gradiente entre Piloto y WhyUs/Lock-In */}
        <div className="gradient-separator" aria-hidden="true" />
        
        {/* §6 Lock-in (+ Por qué nosotros) */}
        <WhyUs />
        
        {/* §7 Métricas + §8 No Hacemos */}
        <Metrics />
        
        {/* §9 Equipo */}
        <Team />
        
        {/* §10 FAQ */}
        <FAQ />
        
        {/* §11 CTA Final */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}
