import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Aviso Legal | Aurakova',
  description: 'Términos de servicio, condiciones y responsabilidad legal sobre los contenidos de Aurakova.',
}

export default function AvisoLegal() {
  return (
    <>
      <Navbar />
      <main className="section-surface section-py" style={{ minHeight: '80vh', paddingTop: '160px' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 style={{ marginBottom: '32px' }}>Aviso Legal</h1>
          <div style={{ color: '#94A3B8', fontSize: '1rem', lineHeight: 1.8 }}>
            <p style={{ marginBottom: '16px' }}>El presente texto expone los términos y condiciones relativos al uso del sitio web de Aurakova.</p>
            <p style={{ marginBottom: '16px' }}><strong>1. Propiedad Intelectual:</strong> Todos los contenidos presentes en esta web (textos, gráficos, logotipos, imágenes) son propiedad exclusiva de Aurakova o de sus licenciantes, estando protegidos por la legislación de propiedad intelectual aplicable.</p>
            <p style={{ marginBottom: '16px' }}><strong>2. Condiciones de uso:</strong> Como usuario, te comprometes a hacer un empleo adecuado de los contenidos de acuerdo con la buena fe y la legalidad vigente.</p>
            <p style={{ marginBottom: '16px' }}><strong>3. Exención de responsabilidad:</strong> Aurakova no se hace responsable de las posibles imprecisiones de la información alojada en el sitio, ni de los daños ocasionados por la interrupción de la página o por virus informáticos u otras incidencias técnicas similares.</p>
            <p><strong>4. Modificaciones:</strong> Aurakova se reserva el derecho de modificar o actualizar estos términos en cualquier momento.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
