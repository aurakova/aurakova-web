'use client'

const team = [
  {
    name: 'Javier',
    role: 'Chief Designer',
    credential: '20+ años en diseño de interfaces y UX para proyectos B2B en España y LATAM.',
    expertise: 'Especializado en sistemas de diseño que convierten, no solo que impresionan.',
    initials: 'JV',
    color: '#22D3EE',
    linkedin: '#',
  },
  {
    name: 'Leandro',
    role: 'Content & Growth',
    credential: 'Especialista en contenido, campañas de adquisición y narrativa de marca con impacto medible en pipeline.',
    expertise: 'Ha liderado estrategias de growth para empresas B2B en España, México y Argentina.',
    initials: 'LE',
    color: '#0EA5E9',
    linkedin: '#',
  },
  {
    name: 'Juan Pablo Vezzato',
    role: 'Lead Strategic Consultant',
    credential: '15+ años en marketing estratégico y transformación digital B2B.',
    expertise: 'Ha acompañado a empresas medianas en España y LATAM a digitalizar operaciones y escalar sin perder eficiencia.',
    initials: 'JP',
    color: '#2563EB',
    linkedin: '#',
  },
]

export default function Team() {
  return (
    <section id="equipo" className="section-surface section-py">
      <div className="container">
        <div style={{ marginBottom: '56px' }}>
          <h2>Quiénes somos</h2>
          <p style={{ color: '#94A3B8', marginTop: '12px', maxWidth: '520px', fontSize: '1.0625rem' }}>
            Tres especialistas con más de 35 años de experiencia combinada en marketing estratégico, UX y transformación digital B2B.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
          }}
          className="team-grid"
        >
          {team.map((member) => (
            <div
              key={member.name}
              className="card"
              style={{ padding: '32px', position: 'relative', overflow: 'hidden' }}
            >
              {/* Top accent */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: `linear-gradient(90deg, ${member.color} 0%, transparent 100%)`,
                }}
              />

              {/* Avatar */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '24px' }}>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '12px',
                    background: `${member.color}18`,
                    border: `1px solid ${member.color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span
                    style={{
                      fontWeight: 700,
                      fontSize: '1.125rem',
                      color: member.color,
                      fontFamily: 'var(--font-inter), sans-serif',
                    }}
                  >
                    {member.initials}
                  </span>
                </div>

                <a
                  href={member.linkedin}
                  aria-label={`LinkedIn de ${member.name}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(34,211,238,0.06)',
                    border: '1px solid rgba(34,211,238,0.15)',
                    color: '#94A3B8',
                    fontSize: '0.875rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s, background 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#22D3EE'
                    e.currentTarget.style.background = 'rgba(34,211,238,0.12)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#94A3B8'
                    e.currentTarget.style.background = 'rgba(34,211,238,0.06)'
                  }}
                >
                  in
                </a>
              </div>

              {/* Name + Role */}
              <h3 style={{ color: '#F0F4F8', marginBottom: '4px', fontSize: '1.125rem' }}>
                {member.name}
              </h3>
              <span
                className="mono-tag"
                style={{ display: 'block', color: member.color, marginBottom: '16px' }}
              >
                {member.role}
              </span>

              {/* Credential */}
              <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '8px' }}>
                {member.credential}
              </p>
              <p style={{ color: '#64748B', fontSize: '0.875rem', lineHeight: 1.6 }}>
                {member.expertise}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .team-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
