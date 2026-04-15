import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function UnderConstruction({ title }: { title: string }) {
  return (
    <>
      <Navbar />
      <main className="section-primary" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="container" style={{ textAlign: 'center', marginTop: '68px' }}>
          <div className="badge" style={{ marginBottom: '24px' }}>
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#F59E0B',
                display: 'inline-block',
              }}
            />
            Próximamente
          </div>
          <h1 style={{ marginBottom: '24px' }}>
            <span className="gradient-text">{title}</span>
          </h1>
          <p style={{ color: '#94A3B8', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto', marginBottom: '40px' }}>
            Estamos trabajando en esta sección. Vuelve pronto para descubrir más detalles metodológicos y casos de uso específicos.
          </p>
          <a href="/" className="btn-secondary" style={{ display: 'inline-flex' }}>
            ← Volver al inicio
          </a>
        </div>
      </main>
      <Footer />
    </>
  )
}
