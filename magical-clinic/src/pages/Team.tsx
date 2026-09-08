import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import { teamMembers } from '../data/services'

export default function Team() {
  return (
    <div className="bg-ink py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Nasz zespół"
          title="Ludzie, którym możesz zaufać"
          subtitle="Zabiegi w Magical Clinic prowadzi doświadczony zespół specjalistów, dbający o bezpieczeństwo i komfort każdego pacjenta."
        />

        <div className="mt-14 space-y-10">
          {teamMembers.map((member, i) => (
            <div
              key={member.name}
              className={`flex flex-col gap-8 rounded-lg border border-gold/15 bg-onyx p-8 sm:items-start ${
                i % 2 === 1 ? 'sm:flex-row-reverse' : 'sm:flex-row'
              }`}
            >
              <div className="mx-auto w-48 shrink-0 sm:mx-0">
                <div className="overflow-hidden rounded-lg border-2 border-gold/60 shadow-[0_0_30px_rgba(201,162,75,0.15)]">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="aspect-[3/4] w-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-display text-2xl text-gold-light">{member.name}</h3>
                <p className="mt-1 text-sm uppercase tracking-wide text-gold/80">{member.title}</p>
                <div className="mt-4 space-y-3 text-left">
                  {member.bio.map((paragraph, idx) => (
                    <p key={idx} className="text-sm text-cream/70 sm:text-base">
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
