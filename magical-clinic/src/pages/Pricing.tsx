import { FiPhone } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import { clinicInfo, serviceCategories } from '../data/services'

export default function Pricing() {
  return (
    <div className="bg-ink py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Cennik"
          title="Cennik zabiegów"
          subtitle="Poniższe ceny mają charakter orientacyjny i poglądowy. Ostateczna wycena ustalana jest indywidualnie podczas bezpłatnej konsultacji."
        />

        <div className="mx-auto mt-8 max-w-2xl rounded-md border border-gold/30 bg-onyx/60 px-5 py-3 text-center text-xs text-gold-light/80">
          Ceny przykładowe — mogą różnić się od aktualnego cennika kliniki. Skontaktuj się z nami, aby
          potwierdzić dokładną kwotę.
        </div>

        <div className="mt-14 space-y-12">
          {serviceCategories.map((category) => (
            <div key={category.id}>
              <h3 className="font-display text-2xl text-gold-light">{category.title}</h3>
              <div className="gold-divider mt-3 mb-6" />
              <div className="space-y-3">
                {category.services.map((service) => (
                  <div
                    key={service.name}
                    className="flex items-center justify-between gap-4 rounded-lg border border-gold/15 bg-onyx px-5 py-4"
                  >
                    <span className="text-sm text-cream sm:text-base">{service.name}</span>
                    <span className="whitespace-nowrap font-display text-sm text-gold sm:text-base">
                      {service.priceExample ?? 'Cena po konsultacji'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-lg border border-gold/30 bg-onyx p-8 text-center">
          <h3 className="font-display text-2xl text-gold-light">Chcesz poznać dokładną cenę?</h3>
          <p className="mx-auto mt-3 max-w-xl text-cream/70">
            Skontaktuj się z nami telefonicznie — przygotujemy dla Ciebie szczegółową wycenę wybranego
            zabiegu.
          </p>
          <div className="mt-6 flex items-center justify-center">
            <a
              href={`tel:${clinicInfo.phoneHref}`}
              className="flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-sans text-sm uppercase tracking-wide text-ink transition-transform hover:scale-105"
            >
              <FiPhone /> {clinicInfo.phone}
            </a>
          </div>
          <Link to="/oferta" className="mt-6 inline-block text-sm text-gold underline underline-offset-4">
            Zobacz pełny opis zabiegów
          </Link>
        </div>
      </div>
    </div>
  )
}
