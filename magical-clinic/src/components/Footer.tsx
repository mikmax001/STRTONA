import { FiFacebook, FiInstagram, FiMapPin, FiPhone } from 'react-icons/fi'
import { SiTiktok } from 'react-icons/si'
import { Link } from 'react-router-dom'
import { clinicInfo, navLinks } from '../data/services'

export default function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-onyx">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-4 lg:px-10">
        <div>
          <span className="font-display text-2xl gold-gradient-text">MAGICAL CLINIC</span>
          <p className="mt-4 font-serif italic text-cream/70">{clinicInfo.slogan}</p>
          <div className="mt-6 flex gap-4">
            <a
              href={clinicInfo.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold-light transition-colors hover:bg-gold hover:text-ink"
            >
              <FiFacebook />
            </a>
            <a
              href={clinicInfo.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold-light transition-colors hover:bg-gold hover:text-ink"
            >
              <FiInstagram />
            </a>
            <a
              href={clinicInfo.social.tiktok}
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold-light transition-colors hover:bg-gold hover:text-ink"
            >
              <SiTiktok />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg text-gold-light">Nawigacja</h3>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm text-cream/70 transition-colors hover:text-gold-light">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-gold-light">Kontakt</h3>
          <ul className="mt-4 space-y-3 text-sm text-cream/70">
            <li className="flex items-start gap-2">
              <FiMapPin className="mt-1 shrink-0 text-gold" />
              <span>
                <span className="block text-gold-light">{clinicInfo.addressLabel}</span>
                {clinicInfo.address}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <FiPhone className="shrink-0 text-gold" />
              <a href={`tel:${clinicInfo.phoneHref}`} className="hover:text-gold-light">
                {clinicInfo.phone}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-gold-light">Wizyty</h3>
          <p className="mt-4 text-sm text-cream/70">
            Przyjmujemy wyłącznie po wcześniejszym umówieniu terminu. Zadzwoń lub napisz, aby ustalić
            dogodny termin konsultacji.
          </p>
          <a
            href={`tel:${clinicInfo.phoneHref}`}
            className="mt-4 inline-block rounded-full border border-gold/60 px-5 py-2 text-sm text-gold-light transition-colors hover:bg-gold hover:text-ink"
          >
            Umów wizytę
          </a>
        </div>
      </div>

      <div className="gold-divider" />
      <div className="mx-auto max-w-7xl px-6 py-6 text-center text-xs tracking-wide text-cream/40 lg:px-10">
        © {new Date().getFullYear()} Magical Clinic. Wszelkie prawa zastrzeżone.
      </div>
    </footer>
  )
}
