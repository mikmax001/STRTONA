import { motion } from 'framer-motion'
import { FiShield, FiHeart, FiTrendingUp } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import { clinicInfo } from '../data/services'

const values = [
  {
    icon: FiTrendingUp,
    title: 'Profesjonalizm',
    text: 'Zabiegi wykonywane przez doświadczony zespół specjalistów, zgodnie z najwyższymi standardami medycznymi.',
  },
  {
    icon: FiShield,
    title: 'Bezpieczeństwo i skuteczność',
    text: 'Priorytetem jest dla nas bezpieczeństwo pacjenta oraz mierzalna, trwała skuteczność każdego zabiegu.',
  },
  {
    icon: FiHeart,
    title: 'Podejście pacjent-centryczne',
    text: 'Każdą wizytę poprzedza indywidualna konsultacja, a plan zabiegowy dopasowujemy do potrzeb pacjenta.',
  },
]

export default function About() {
  return (
    <div className="bg-ink">
      <section className="border-b border-gold/15 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <SectionHeading eyebrow="O klinice" title="Magical Clinic" />
          <p className="mt-8 font-serif text-xl italic leading-relaxed text-cream/80">
            „{clinicInfo.motto}”
          </p>
          <p className="mt-8 text-cream/70">
            Magical Clinic specjalizuje się w nowoczesnych i innowacyjnych zabiegach medycyny estetycznej,
            poprawiających wygląd i samopoczucie pacjentów. Wykorzystujemy najnowsze technologie oraz
            produkty najwyższej jakości, aby zapewnić naszym pacjentom bezpieczne i skuteczne rezultaty.
            Naszą misją jest zapewnienie najwyższej jakości usług medycyny estetycznej poprzez nowoczesne
            zabiegi wykonywane przez doświadczony zespół specjalistów, dostosowane do indywidualnych
            potrzeb każdej osoby.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <SectionHeading eyebrow="Nasze wartości" title="Trzy filary naszej działalności" />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-lg border border-gold/15 bg-onyx p-8 text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold text-2xl text-gold">
                  <v.icon />
                </div>
                <h3 className="mt-6 font-display text-xl text-gold-light">{v.title}</h3>
                <p className="mt-3 text-sm text-cream/60">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gold/15 bg-onyx py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-3xl text-cream">Poznaj nas bliżej podczas konsultacji</h2>
          <p className="mt-4 text-cream/70">
            Zapraszamy do kliniki {clinicInfo.addressLabel} przy ul. Armii Krajowej 43a w Łodzi, gdzie w
            przyjaznej atmosferze
            omówimy Twoje oczekiwania i zaproponujemy indywidualny plan zabiegowy.
          </p>
        </div>
      </section>
    </div>
  )
}
