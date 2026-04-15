import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Política de Cookies | Aurakova',
  description: 'Política sobre el uso de cookies en el sitio web de Aurakova.',
}

export default function Cookies() {
  return (
    <>
      <Navbar />
      <main className="section-surface section-py" style={{ minHeight: '80vh', paddingTop: '160px' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 style={{ marginBottom: '32px' }}>Política de Cookies</h1>
          <div style={{ color: '#94A3B8', fontSize: '1rem', lineHeight: 1.8 }}>
            <p style={{ marginBottom: '16px' }}>En Aurakova utilizamos cookies para garantizar el correcto funcionamiento del sitio web y mejorar tu experiencia.</p>
            <p style={{ marginBottom: '16px' }}><strong>1. ¿Qué son las cookies?</strong> Son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas nuestro sitio web.</p>
            <p style={{ marginBottom: '16px' }}><strong>2. Qué cookies usamos:</strong> Utilizamos cookies técnicas (estrictamente necesarias para la navegación, como recordar el estado de tu sesión) y cookies analíticas de terceros (como Google Analytics) para entender de dónde viene nuestro tráfico y mejorar el contenido.</p>
            <p style={{ marginBottom: '16px' }}><strong>3. Gestión de cookies:</strong> Puedes configurar tu navegador en cualquier momento para bloquear o eliminar las cookies. Ten en cuenta que si deshabilitas las cookies técnicas, algunas funcionalidades de la web podrían no operar correctamente.</p>
            <p>Al continuar navegando por el sitio asumes la aceptación del uso de las mismas tal como se detalla en esta política.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
