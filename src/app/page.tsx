'use client';

import { motion } from 'framer-motion'
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

const fadeUpProps = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500/30">
        {/* §1 Hero */}
        <motion.div
          {...fadeUpProps}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Hero />
        </motion.div>
        
        {/* Separador crítico 1px gradiente entre Hero y Logos */}
        <div className="gradient-separator" aria-hidden="true" />
        
        {/* §2 Logos */}
        <motion.div
          {...fadeUpProps}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <Logos />
        </motion.div>
        
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--color-accent-cyan)]/30 to-transparent" />
        
        {/* §3 Servicios */}
        <motion.div
          {...fadeUpProps}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <Services />
        </motion.div>
        
        {/* §4 Roles */}
        <motion.div
          {...fadeUpProps}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <UseCases />
        </motion.div>
        
        {/* §5 Piloto */}
        <motion.div
          {...fadeUpProps}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <Process />
        </motion.div>
        
        {/* Separador crítico 1px gradiente entre Piloto y WhyUs/Lock-In */}
        <div className="gradient-separator" aria-hidden="true" />
        
        {/* §6 Lock-in (+ Por qué nosotros) */}
        <motion.div
          {...fadeUpProps}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <WhyUs />
        </motion.div>
        
        {/* §7 Métricas + §8 No Hacemos */}
        <motion.div
          {...fadeUpProps}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <Metrics />
        </motion.div>
        
        {/* §9 Equipo */}
        <motion.div
          {...fadeUpProps}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <Team />
        </motion.div>
        
        {/* §10 FAQ */}
        <motion.div
          {...fadeUpProps}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <FAQ />
        </motion.div>
        
        {/* §11 CTA Final */}
        <motion.div
          {...fadeUpProps}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <Contact />
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}
