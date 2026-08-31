import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiX, FiPhone } from 'react-icons/fi'
import { navLinks, clinicInfo } from '../data/services'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-ink/95 backdrop-blur border-b border-gold/20' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <NavLink to="/" className="flex flex-col leading-none" onClick={() => setOpen(false)}>
          <span className="font-display text-2xl tracking-[0.15em] gold-gradient-text">MAGICAL</span>
          <span className="font-sans text-[11px] tracking-[0.5em] text-gold-light/80">CLINIC</span>
        </NavLink>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `font-sans text-sm tracking-wide uppercase transition-colors ${
                  isActive ? 'text-gold' : 'text-cream/80 hover:text-gold-light'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <a
          href={`tel:${clinicInfo.phoneHref}`}
          className="hidden lg:flex items-center gap-2 rounded-full border border-gold/60 px-5 py-2 text-sm text-gold-light transition-colors hover:bg-gold hover:text-ink"
        >
          <FiPhone /> {clinicInfo.phone}
        </a>

        <button
          type="button"
          className="text-gold-light lg:hidden"
          aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden border-t border-gold/20 bg-ink"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `py-3 border-b border-gold/10 text-sm uppercase tracking-wide ${
                      isActive ? 'text-gold' : 'text-cream/80'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <a href={`tel:${clinicInfo.phoneHref}`} className="mt-4 text-center rounded-full border border-gold/60 py-2 text-gold-light">
                {clinicInfo.phone}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
