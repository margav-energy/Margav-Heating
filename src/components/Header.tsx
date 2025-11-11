import { useEffect } from 'react'
import { Link, NavLink as RouterNavLink, useLocation } from 'react-router-dom'

import logoMark from '../assets/margav_heating_logo.png'

export interface HeaderLink {
  label: string
  to: string
}

interface HeaderProps {
  links: HeaderLink[]
}

export function Header({ links }: HeaderProps) {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/90 shadow-sm backdrop-blur">
      <div className="container flex h-20 items-center justify-between gap-6">
        <Link to="/" className="inline-flex items-center gap-3">
          <img src={logoMark} alt="MarGav Heating logo" className="h-8 w-auto object-contain" />
          <span className="sr-only">Back to home</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-brand-dark/80 md:flex">
          {links.map((item) => (
            <RouterNavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                [
                  'transition hover:text-brand-primary',
                  isActive ? 'text-brand-primary font-semibold' : undefined,
                ]
                  .filter(Boolean)
                  .join(' ')
              }
            >
              {item.label}
            </RouterNavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="tel:01889256069"
            className="hidden flex-col text-right text-xs font-medium text-brand-dark/70 sm:flex"
          >
            <span className="uppercase tracking-[0.2em] text-brand-secondary">Call us</span>
            <span className="text-base font-semibold text-brand-dark">01889 256 069</span>
          </a>
          <Link className="btn-primary text-sm" to="/schedule">
            Request a Free Quote
          </Link>
        </div>
      </div>
    </header>
  )
}

