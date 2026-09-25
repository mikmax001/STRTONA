import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import { serviceCategories } from '../data/services'

export default function Offer() {
  const [openCategory, setOpenCategory] = useState(serviceCategories[0].id)
  const [openService, setOpenService] = useState<string | null>(null)

  return (
    <div className="bg-ink py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Oferta"
          title="Katalog zabiegów"
          subtitle="Pełna lista zabiegów medycyny estetycznej, chirurgii estetycznej, modelowania sylwetki i laseroterapii. Szczegółowa wycena ustalana jest indywidualnie podczas konsultacji."
        />

        <div className="mt-14 space-y-4">
          {serviceCategories.map((category) => {
            const isOpen = openCategory === category.id
            return (
              <div key={category.id} className="overflow-hidden rounded-lg border border-gold/20 bg-onyx">
                <button
                  type="button"
                  onClick={() => setOpenCategory(isOpen ? '' : category.id)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <div>
                    <h3 className="font-display text-xl text-gold-light sm:text-2xl">{category.title}</h3>
                    <p className="mt-1 text-sm text-cream/60">{category.intro}</p>
                  </div>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className="shrink-0 text-2xl text-gold"
                  >
                    <FiChevronDown />
                  </motion.span>
                </button>

                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? 'auto' : 0 }}
                  className="overflow-hidden"
                >
                  {category.services.length === 0 ? (
                    <div className="border-t border-gold/10 p-6 text-center">
                      <p className="text-sm text-cream/60">
                        Szczegółowa lista zabiegów w tej kategorii ustalana jest indywidualnie —
                        zapytaj podczas konsultacji.
                      </p>
                      <Link
                        to="/kontakt"
                        className="mt-4 inline-block rounded-full border border-gold/40 px-5 py-2 text-xs uppercase tracking-wide text-gold-light transition-colors hover:bg-gold/10"
                      >
                        Zapytaj o ofertę
                      </Link>
                    </div>
                  ) : (
                  <div className="grid gap-3 border-t border-gold/10 p-6 sm:grid-cols-2">
                    {category.services.map((service) => {
                      const key = `${category.id}-${service.name}`
                      const expanded = openService === key
                      return (
                        <button
                          type="button"
                          key={key}
                          onClick={() => setOpenService(expanded ? null : key)}
                          className="rounded-md border border-gold/10 bg-ink p-4 text-left transition-colors hover:border-gold/40"
                        >
                          <span className="font-sans text-sm font-medium text-cream">{service.name}</span>
                          <p className="mt-2 text-xs leading-relaxed text-cream/60">{service.description}</p>
                          {expanded && service.details && (
                            <ul className="mt-3 space-y-1 border-t border-gold/10 pt-3">
                              {service.details.map((d) => (
                                <li key={d} className="flex gap-2 text-xs text-gold-light/90">
                                  <span className="text-gold">•</span> {d}
                                </li>
                              ))}
                            </ul>
                          )}
                          {service.details && (
                            <span className="mt-2 inline-block text-[11px] uppercase tracking-wide text-gold/70">
                              {expanded ? 'Zwiń szczegóły' : 'Zobacz szczegóły'}
                            </span>
                          )}
                        </button>
                      )
                    })}
                  </div>
                  )}
                </motion.div>
              </div>
            )
          })}
        </div>

        <div className="mt-14 rounded-lg border border-gold/20 bg-onyx p-8 text-center">
          <h3 className="font-display text-2xl text-gold-light">Nie wiesz, który zabieg wybrać?</h3>
          <p className="mt-3 text-cream/70">
            Umów się na konsultację — nasz zespół pomoże dobrać najlepsze rozwiązanie dla Twoich potrzeb.
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
