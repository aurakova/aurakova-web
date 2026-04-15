import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Política de Privacidad | Aurakova',
  description: 'Política de privacidad y protección de datos para los usuarios y clientes de Aurakova.',
}

export default function Privacidad() {
  return (
    <>
      <Navbar />
      <main className="section-surface section-py" style={{ minHeight: '80vh', paddingTop: '160px' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 style={{ marginBottom: '32px' }}>Política de Privacidad</h1>
          <div style={{ color: '#94A3B8', fontSize: '1rem', lineHeight: 1.8 }}>
            <p style={{ marginBottom: '16px' }}>En Aurakova valoramos y respetamos tu privacidad. Esta política describe cómo recogemos, usamos y protegemos tus datos personales.</p>
            <p style={{ marginBottom: '16px' }}><strong>1. Información que recogemos:</strong> Recopilamos información cuando interactúas con nuestro formulario de diagnóstico, limitándonos a los datos estrictamente necesarios para prestar el servicio (nombre, empresa, reto principal).</p>
            <p style={{ marginBottom: '16px' }}><strong>2. Uso de la información:</strong> Utilizaremos tus datos exclusivamente para conectarnos contigo respecto al diagnóstico de automatización y servicios potenciales de la consultoría. No venderemos tus datos a terceros en ningún caso.</p>
            <p style={{ marginBottom: '16px' }}><strong>3. Retención de información:</strong> Mantendremos tu información en nuestros servidores seguros solo durante el tiempo necesario para la finalidad descrita o hasta que nos solicites su eliminación.</p>
            <p>Si deseas corregir, acceder o borrar tus datos, por favor, ponte en contacto con nuestro equipo.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
