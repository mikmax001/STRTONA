import { FiAward, FiUsers, FiHeart } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'

const pillars = [
  {
    icon: FiAward,
    title: 'Doświadczenie i kwalifikacje',
    text: 'Zabiegi wykonuje wykwalifikowany personel medyczny, stale podnoszący kompetencje w zakresie najnowszych technik medycyny estetycznej.',
  },
  {
    icon: FiUsers,
    title: 'Praca zespołowa',
    text: 'Każdy przypadek konsultowany jest w gronie specjalistów, aby zaproponować pacjentowi najbezpieczniejsze i najskuteczniejsze rozwiązanie.',
  },
  {
    icon: FiHeart,
    title: 'Indywidualna opieka',
    text: 'Od pierwszej konsultacji po opiekę pozabiegową — pacjent pozostaje pod stałą opieką tego samego specjalisty.',
  },
]

export default function Team() {
  return (
    <div className="bg-ink py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Nasz zespół"
          title="Ludzie, którym możesz zaufać"
          subtitle="Zabiegi w Magical Clinic prowadzi doświadczony zespół specjalistów medycyny estetycznej, dbający o bezpieczeństwo i komfort każdego pacjenta."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-lg border border-gold/15 bg-onyx p-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold text-2xl text-gold">
                <p.icon />
              </div>
              <h3 className="mt-6 font-display text-xl text-gold-light">{p.title}</h3>
              <p className="mt-3 text-sm text-cream/60">{p.text}</p>
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
