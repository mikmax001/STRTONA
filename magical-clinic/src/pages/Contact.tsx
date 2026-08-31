import { FiFacebook, FiInstagram, FiMapPin, FiPhone } from 'react-icons/fi'
import { SiTiktok } from 'react-icons/si'
import SectionHeading from '../components/SectionHeading'
import { clinicInfo } from '../data/services'

export default function Contact() {
  return (
    <div className="bg-ink py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Kontakt"
          title="Umów wizytę"
          subtitle="Zadzwoń do nas, aby ustalić dogodny termin konsultacji."
        />

        <div className="mt-14 space-y-6">
          <div className="rounded-lg border border-gold/20 bg-onyx p-8">
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <FiMapPin className="mt-1 shrink-0 text-xl text-gold" />
                <div>
                  <p className="text-sm uppercase tracking-wide text-gold-light">Adres</p>
                  <p className="mt-1 text-cream/70">
                    {clinicInfo.addressLabel}
                    <br />
                    {clinicInfo.address}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <FiPhone className="mt-1 shrink-0 text-xl text-gold" />
                <div>
                  <p className="text-sm uppercase tracking-wide text-gold-light">Telefon</p>
                  <a href={`tel:${clinicInfo.phoneHref}`} className="mt-1 block text-cream/70 hover:text-gold-light">
                    {clinicInfo.phone}
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-8 flex gap-4 border-t border-gold/10 pt-6">
              <a
                href={clinicInfo.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold-light hover:bg-gold hover:text-ink"
              >
                <FiFacebook />
              </a>
              <a
                href={clinicInfo.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold-light hover:bg-gold hover:text-ink"
              >
                <FiInstagram />
              </a>
              <a
                href={clinicInfo.social.tiktok}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold-light hover:bg-gold hover:text-ink"
              >
                <SiTiktok />
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-gold/20">
            <iframe
              title="Mapa dojazdu — Magical Clinic"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(clinicInfo.address)}&output=embed`}
              width="100%"
              height="360"
              loading="lazy"
              style={{ border: 0, filter: 'grayscale(0.3) contrast(1.1)' }}
            />
          </div>

          <div className="rounded-lg border border-gold/30 bg-onyx p-8 text-center">
            <a
              href={`tel:${clinicInfo.phoneHref}`}
              className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3 font-sans text-sm uppercase tracking-wide text-ink transition-transform hover:scale-105"
            >
              <FiPhone /> Zadzwoń: {clinicInfo.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
