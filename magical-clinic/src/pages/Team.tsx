import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import { teamMembers } from '../data/services'

function initials(name: string) {
  return name
    .replace(/^Dr\.?\s+/i, '')
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export default function Team() {
  return (
    <div className="bg-ink py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Nasz zespół"
          title="Ludzie, którym możesz zaufać"
          subtitle="Zabiegi w Magical Clinic prowadzi doświadczony zespół specjalistów, dbający o bezpieczeństwo i komfort każdego pacjenta."
        />

        <div className="mt-14 space-y-10">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="flex flex-col gap-6 rounded-lg border border-gold/15 bg-onyx p-8 sm:flex-row"
            >
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-gold/50 font-display text-2xl text-gold sm:mx-0">
                {initials(member.name)}
              </div>
              <div>
                <h3 className="font-display text-2xl text-gold-light">{member.name}</h3>
                <p className="mt-1 text-sm uppercase tracking-wide text-gold/80">{member.title}</p>
                <div className="mt-4 space-y-3 text-left">
                  {member.bio.map((paragraph, i) => (
                    <p key={i} className="text-sm text-cream/70 sm:text-base">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-lg border border-gold/30 bg-onyx p-10 text-center">
          <h3 className="font-display text-2xl text-gold-light">Poznaj swojego specjalistę osobiście</h3>
          <p className="mx-auto mt-3 max-w-xl text-cream/70">
            Umów bezpłatną konsultację, podczas której poznasz zespół Magical Clinic i wspólnie ustalicie
            najlepszy plan zabiegowy.
          </p>
          <Link
            to="/kontakt"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3 font-sans text-sm uppercase tracking-wide text-ink transition-transform hover:scale-105"
          >
            Umów konsultację
          </Link>
        </div>
      </div>
    </div>
  )
}
