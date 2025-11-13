import { Link } from 'react-router-dom'

import logoMark from '../assets/margav_heating_logo.png'

export interface SocialLink {
  label: string
  href: string
  icon: string
}

export interface FooterLink {
  label: string
  to: string
}

interface FooterProps {
  quickLinks: FooterLink[]
  services: FooterLink[]
  socials: SocialLink[]
}

export function Footer({ quickLinks, services, socials }: FooterProps) {
  return (
    <footer className="bg-brand-dark text-brand-white">
      <div className="container grid gap-12 py-16 text-sm text-white/80 lg:grid-cols-[1.6fr_repeat(3,1fr)]">
        <div className="space-y-5">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoMark} alt="MarGav Heating" className="h-8 w-auto object-contain" />
            <span className="sr-only">MarGav Heating home</span>
          </Link>
          <p className="max-w-sm text-sm leading-relaxed text-white/70">
            <span className="text-brand-gradient">MarGav</span> <span className="text-brand-blue">Heating</span> delivers professional boiler and heating services with honest advice, tidy workmanship and
            ongoing support.
          </p>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-3">
              <span className="text-brand-primary">📍</span>
              <span>Office address placeholder</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-brand-primary">📞</span>
              <a className="hover:text-white" href="tel:01889256069">
                01889 256 069
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-brand-primary">✉️</span>
              <a className="hover:text-white" href="mailto:sales@margav.energy">
                sales@margav.energy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-base font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link className="transition hover:text-white" to={link.to}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-base font-semibold text-white">Services</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            {services.map((service) => (
              <li key={service.label}>
                <Link className="transition hover:text-white" to={service.to}>
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-base font-semibold text-white">Stay Updated</h3>
          <p className="text-sm text-white/70">
            Sign up for seasonal heating tips, offers and compliance updates. We respect your inbox.
          </p>
          <form className="space-y-3">
            <label className="sr-only" htmlFor="footer-email">
              Email address
            </label>
            <div className="rounded-xl border border-white/10 bg-white/5 px-4">
              <input
                id="footer-email"
                type="email"
                required
                placeholder="Enter your email"
                className="h-12 w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
            </div>
            <button type="submit" className="btn-primary w-full justify-center rounded-xl text-sm font-semibold">
              Subscribe
            </button>
          </form>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white">Follow Us</h4>
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-base text-white transition hover:bg-white hover:text-brand-secondary"
                  aria-label={social.label}
                >
                  <span aria-hidden="true" className="text-xs font-semibold uppercase tracking-widest">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
            <p className="text-xs text-white/60">
              Finance subject to status. Written quotations provided before any finance agreement is entered.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 bg-brand-dark/80">
        <div className="container flex flex-col gap-4 py-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} <span className="text-brand-gradient">MarGav</span> <span className="text-brand-blue">Heating</span>. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <span aria-hidden="true" className="text-white/30">
              |
            </span>
            <Link to="/terms" className="hover:text-white">
              Terms
            </Link>
            <span aria-hidden="true" className="text-white/30">
              |
            </span>
            <Link to="/cookies" className="hover:text-white">
              Cookie Notice
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

