import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiCheck, FiStar } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import { serviceCategories, whyUs, testimonials, clinicInfo } from '../data/services'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Home() {
  const featured = serviceCategories.flatMap((c) => c.services).slice(0, 6)

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(ellipse at top, rgba(201,162,75,0.16), transparent 60%), linear-gradient(180deg, #0a0906 0%, #121110 100%)',
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-40"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, rgba(201,162,75,0.04) 0px, rgba(201,162,75,0.04) 1px, transparent 1px, transparent 40px)',
          }}
        />
        <div className="mx-auto flex max-w-5xl flex-col items-center px-6 py-28 text-center sm:py-36">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="ornament font-sans text-xs uppercase tracking-[0.4em] text-gold"
          >
            Medycyna estetyczna Łódź
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 font-display text-5xl leading-tight gold-gradient-text sm:text-6xl lg:text-7xl"
          >
            {clinicInfo.slogan}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-2xl font-serif text-lg italic text-cream/80 sm:text-xl"
          >
            {clinicInfo.motto}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              to="/kontakt"
              className="flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-3 font-sans text-sm uppercase tracking-wide text-ink transition-transform hover:scale-105"
            >
              Umów konsultację <FiArrowRight />
            </Link>
            <Link
              to="/oferta"
              className="flex items-center justify-center gap-2 rounded-full border border-gold/50 px-8 py-3 font-sans text-sm uppercase tracking-wide text-gold-light transition-colors hover:bg-gold/10"
            >
              Zobacz ofertę
            </Link>
          </motion.div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-ink py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading eyebrow="Dlaczego my" title="Piękno oparte na zaufaniu" />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                animate="show"
                variants={fadeUp}
                transition={{ delay: i * 0.1 }}
                className="rounded-lg border border-gold/15 bg-onyx p-6 text-left transition-colors hover:border-gold/50"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-gold/50 text-gold">
                  <FiCheck />
                </div>
                <h3 className="font-display text-lg text-gold-light">{item.title}</h3>
                <p className="mt-2 text-sm text-cream/60">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section className="bg-onyx py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Nasza oferta"
            title="Wybrane zabiegi"
            subtitle="Pełna lista zabiegów medycyny estetycznej, chirurgii i laseroterapii dostępna jest w zakładce Oferta."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((service, i) => (
              <motion.div
                key={service.name}
                initial="hidden"
                animate="show"
                variants={fadeUp}
                transition={{ delay: (i % 3) * 0.1 }}
                className="group rounded-lg border border-gold/15 bg-ink p-6 transition-colors hover:border-gold/50"
              >
                <h3 className="font-display text-xl text-gold-light">{service.name}</h3>
                <p className="mt-3 text-sm text-cream/60">{service.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/oferta"
              className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-8 py-3 font-sans text-sm uppercase tracking-wide text-gold-light transition-colors hover:bg-gold hover:text-ink"
            >
              Pełna oferta <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-ink py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <SectionHeading eyebrow="Opinie" title="Zaufali nam" />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.author}
                initial="hidden"
                animate="show"
                variants={fadeUp}
                transition={{ delay: i * 0.1 }}
                className="rounded-lg border border-gold/15 bg-onyx p-8 text-left"
              >
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <FiStar key={idx} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-4 font-serif italic text-cream/80">&bdquo;{t.text}&rdquo;</p>
                <p className="mt-6 font-sans text-sm uppercase tracking-wide text-gold-light">— {t.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gold/20 bg-onyx py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-3xl text-cream sm:text-4xl">
            Zacznij swoją <span className="gold-gradient-text">metamorfozę</span> już dziś
          </h2>
          <p className="mt-4 text-cream/70">
            Skontaktuj się z nami i umów bezpłatną konsultację dopasowaną do Twoich potrzeb.
          </p>
          <Link
            to="/kontakt"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3 font-sans text-sm uppercase tracking-wide text-ink transition-transform hover:scale-105"
          >
            Skontaktuj się <FiArrowRight />
          </Link>
        </div>
      </section>
    </div>
  )
}
