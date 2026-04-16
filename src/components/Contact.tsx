'use client'

import { useState } from 'react'
import { submitContactForm } from '@/app/actions/contact'

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      const formData = new FormData(e.currentTarget)
      const res = await submitContactForm(formData)
      if (res.success) {
        setSuccess(true)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contacto" className="section-surface section-py">
      <div className="container">
        <div
          className="card"
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Gradient Top Border */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, #22D3EE 0%, #2563EB 100%)',
            }}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
            }}
            className="contact-grid"
          >
            {/* Left Column - Copy */}
            <div
              style={{
                gridColumn: 'span 5',
                padding: '48px 40px',
                background: 'rgba(34,211,238,0.02)',
                borderRight: '1px solid #1A2535',
              }}
              className="contact-copy"
            >
              <h2 style={{ marginBottom: '16px', fontSize: '2rem' }}>
                Empieza con un diagnóstico — no con un compromiso
              </h2>
              <p style={{ color: '#94A3B8', fontSize: '1.0625rem', lineHeight: 1.6, marginBottom: '32px' }}>
                Sin coste. Sin obligación de continuar. Con un entregable real al finalizar.
              </p>
              
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  'Sesión de trabajo de 60–90 min',
                  'Mapeo de tu proceso más crítico',
                  'Hoja de ruta con priorización por ROI',
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        background: 'rgba(34,211,238,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#22D3EE',
                        fontSize: '0.75rem',
                        flexShrink: 0,
                        marginTop: '4px',
                      }}
                    >
                      ✓
                    </div>
                    <span style={{ color: '#F0F4F8', fontSize: '0.9375rem', lineHeight: 1.5 }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Form */}
            <div
              style={{
                gridColumn: 'span 7',
                padding: '48px 40px',
              }}
              className="contact-form"
            >
              {success ? (
                <div
                  style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      background: 'rgba(16,185,129,0.1)',
                      color: '#10B981',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '32px',
                      marginBottom: '24px',
                    }}
                  >
                    ✓
                  </div>
                  <h3 style={{ color: '#F0F4F8', marginBottom: '12px' }}>
                    Solicitud recibida correctamente
                  </h3>
                  <p style={{ color: '#94A3B8', maxWidth: '300px', margin: '0 auto' }}>
                    Te contactaremos en las próximas 24 horas para agendar tu diagnóstico gratuito.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Tu nombre</label>
                    <input type="text" id="name" name="name" required className="w-full bg-slate-900/60 border border-slate-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 backdrop-blur-md transition-all placeholder:text-slate-400" placeholder="Ej. Javier Gómez" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="company" className="form-label">Nombre de tu empresa</label>
                    <input type="text" id="company" name="company" required className="w-full bg-slate-900/60 border border-slate-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 backdrop-blur-md transition-all placeholder:text-slate-400" placeholder="Ej. Acme Corp" />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="form-row">
                    <div className="form-group">
                      <label htmlFor="size" className="form-label">Tamaño de empresa</label>
                      <select id="size" name="size" required className="w-full bg-slate-900/60 border border-slate-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 backdrop-blur-md transition-all placeholder:text-slate-400" defaultValue="">
                        <option value="" disabled className="text-slate-400">Selecciona una opción</option>
                        <option value="1-10" className="bg-slate-900 text-white">1–10 empleados</option>
                        <option value="11-50" className="bg-slate-900 text-white">11–50 empleados</option>
                        <option value="51-200" className="bg-slate-900 text-white">51–200 empleados</option>
                        <option value="201-500" className="bg-slate-900 text-white">201–500 empleados</option>
                        <option value="500+" className="bg-slate-900 text-white">Más de 500 empleados</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="country" className="form-label">País</label>
                      <select id="country" name="country" required className="w-full bg-slate-900/60 border border-slate-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 backdrop-blur-md transition-all placeholder:text-slate-400" defaultValue="">
                        <option value="" disabled className="text-slate-400">Selecciona tu país</option>
                        <option value="es" className="bg-slate-900 text-white">España</option>
                        <option value="mx" className="bg-slate-900 text-white">México</option>
                        <option value="ar" className="bg-slate-900 text-white">Argentina</option>
                        <option value="co" className="bg-slate-900 text-white">Colombia</option>
                        <option value="cl" className="bg-slate-900 text-white">Chile</option>
                        <option value="pe" className="bg-slate-900 text-white">Perú</option>
                        <option value="otro" className="bg-slate-900 text-white">Otro</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="challenge" className="form-label">Principal desafío</label>
                    <select id="challenge" name="challenge" required className="w-full bg-slate-900/60 border border-slate-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 backdrop-blur-md transition-all placeholder:text-slate-400" defaultValue="">
                      <option value="" disabled className="text-slate-400">¿Qué buscas resolver?</option>
                      <option value="auto" className="bg-slate-900 text-white">Quiero automatizar procesos manuales en mi operación</option>
                      <option value="leads" className="bg-slate-900 text-white">Necesito generar más leads cualificados con menor coste</option>
                      <option value="strategy" className="bg-slate-900 text-white">Quiero una estrategia de IA pero no sé por dónde empezar</option>
                      <option value="failed" className="bg-slate-900 text-white">Intenté implementar IA y no funcionó como esperaba</option>
                      <option value="other" className="bg-slate-900 text-white">Otro</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 px-6 rounded-xl hover:brightness-110 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-0.5 mt-3"
                    disabled={loading}
                  >
                    {loading ? 'Enviando...' : 'Solicitar diagnóstico gratuito'}
                  </button>
                  <p style={{ textAlign: 'center', fontSize: '0.75rem', color: '#64748B', marginTop: '-8px' }}>
                    Al enviar el formulario, aceptas nuestra política de privacidad.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .form-label {
          font-size: 0.875rem;
          font-weight: 500;
          color: #94A3B8;
        }
        .form-input, .form-select {
          background: #080D12;
          border: 1px solid #1A2535;
          border-radius: 8px;
          padding: 12px 16px;
          color: #F0F4F8;
          font-family: inherit;
          font-size: 0.9375rem;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .form-input:focus, .form-select:focus {
          outline: none;
          border-color: #22D3EE;
          box-shadow: 0 0 0 3px rgba(34,211,238,0.1);
        }
        .form-input::placeholder {
          color: #64748B;
        }
        
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .contact-copy { grid-column: span 1 !important; border-right: none !important; border-bottom: 1px solid #1A2535; padding: 40px 24px !important; }
          .contact-form { grid-column: span 1 !important; padding: 40px 24px !important; }
        }
        @media (max-width: 600px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
