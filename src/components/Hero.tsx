import type { Highlight } from './Types'
import { Link } from 'react-router-dom'
import heroImage from '../assets/hero.png'

interface HeroProps {
  highlights: Highlight[]
}

export function Hero({ highlights }: HeroProps) {
  return (
    <section className="section relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="MarGav Heating van parked outside a UK home" className="h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-brand-dark/70" aria-hidden="true" />
      </div>

      <div className="relative container grid items-center gap-12 text-white lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <span className="section-eyebrow bg-white/10 text-white">Heating experts you can count on</span>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl text-white">
            Professional Heating &amp; Boiler Engineers You Can Rely On
          </h1>
          <p className="max-w-2xl text-lg text-white/80">
            Gas Safe Registered | Skilled Local Engineers | Fast, Reliable Service
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link className="btn-primary" to="/schedule">
              Get a Free Quote
            </Link>
            <a
              className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-brand-primary"
              href="tel:01889256069"
            >
              Call Now
              <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="grid gap-4 pt-8 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white/90 p-6 shadow-soft shadow-black/20 ring-1 ring-white/40"
              >
                <h3 className="text-lg font-semibold text-brand-dark">{item.title}</h3>
                <p className="mt-3 text-sm text-brand-dark/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden h-full lg:flex" aria-hidden="true" />
      </div>
    </section>
  )
}

