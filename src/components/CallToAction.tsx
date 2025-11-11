import { Link } from 'react-router-dom'

export function CallToAction() {
  return (
    <section className="section bg-brand-secondary">
      <div className="container flex flex-col items-start gap-6 text-brand-white md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold md:text-4xl">Ready to book an engineer?</h2>
          <p className="text-base text-white/80">
            Request a free quote online or call our team and we&rsquo;ll arrange a visit that fits your schedule.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Link className="btn-secondary bg-white" to="/schedule">
            Request a Free Quote
          </Link>
          <a
            href="tel:01889256069"
            className="inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-brand-white transition hover:-translate-y-0.5 hover:bg-white/10"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  )
}

