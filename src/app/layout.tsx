import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Aurakova — Consultoría de IA para empresas B2B en España y LATAM',
  description:
    'Implementamos IA en operaciones B2B con un piloto de 4–8 semanas y ROI medible antes de comprometer más. Diagnóstico gratuito para empresas en España y LATAM.',
  openGraph: {
    title: 'Aurakova — Consultoría de IA para empresas B2B en España y LATAM',
    description:
      'Implementamos IA en operaciones B2B con un piloto de 4–8 semanas y ROI medible antes de comprometer más. Diagnóstico gratuito para empresas en España y LATAM.',
    type: 'website',
    locale: 'es_ES',
    siteName: 'Aurakova',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aurakova — Consultoría de IA para empresas B2B en España y LATAM',
    description:
      'Implementamos IA en operaciones B2B con un piloto de 4–8 semanas y ROI medible antes de comprometer más.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://aurakova.com',
  },
}

const schemaOrg = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://aurakova.com/#organization',
      name: 'Aurakova',
      url: 'https://aurakova.com',
      description:
        'Consultoría de IA para empresas B2B en España y LATAM. Pilotamos antes de escalar.',
      areaServed: [
        { '@type': 'Country', name: 'España' },
        { '@type': 'Country', name: 'México' },
        { '@type': 'Country', name: 'Argentina' },
        { '@type': 'Country', name: 'Colombia' },
        { '@type': 'Country', name: 'Chile' },
      ],
      employee: [
        {
          '@type': 'Person',
          name: 'Javier',
          jobTitle: 'Chief Designer',
          description: '20+ años en diseño de interfaces y UX para proyectos B2B',
        },
        {
          '@type': 'Person',
          name: 'Leandro',
          jobTitle: 'Content & Growth Specialist',
          description: 'Especialista en contenido, campañas de adquisición y narrativa de marca',
        },
        {
          '@type': 'Person',
          name: 'Juan Pablo Vezzato',
          jobTitle: 'Lead Strategic Consultant',
          description: '15+ años en marketing estratégico y transformación digital B2B',
        },
      ],
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://aurakova.com/#service',
      name: 'Aurakova',
      url: 'https://aurakova.com',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicios de IA para empresas B2B',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Consultoría IA Estratégica',
              url: 'https://aurakova.com/consultoria-ia',
              description:
                'Diagnosticamos procesos, identificamos oportunidades de IA y diseñamos un plan de implementación con priorización por impacto.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Automatización de Procesos con IA',
              url: 'https://aurakova.com/automatizacion-procesos-ia',
              description:
                'Eliminamos trabajo manual repetitivo con flujos inteligentes en facturación, soporte, reportes y onboarding.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Marketing y Growth con IA',
              url: 'https://aurakova.com/marketing-growth-ia',
              description:
                'Generamos más leads cualificados y reducimos el coste por adquisición con campañas potenciadas por IA.',
            },
          },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://aurakova.com/#website',
      url: 'https://aurakova.com',
      name: 'Aurakova',
      publisher: { '@id': 'https://aurakova.com/#organization' },
      inLanguage: 'es',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
