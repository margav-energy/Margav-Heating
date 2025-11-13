import { Link } from 'react-router-dom'

const CASE_STUDIES = [
  {
    title: 'Victorian Terrace Retrofit – Birmingham',
    summary:
      'Replaced ageing gas boiler with a high-efficiency heat pump, upgraded radiators, and added smart zoning controls.',
    impact: ['41% reduction in annual heating costs', '5.1 kW average COP across winter months', '80% client satisfaction survey score increase'],
  },
  {
    title: 'Luxury Apartment Block – Manchester',
    summary:
      'Designed a hybrid heat pump and buffer tank solution for 24 apartments, integrating with existing BMS and solar PV.',
    impact: ['£28k in annual operational savings', '120 tonnes of CO₂ avoided per year', 'Realtime monitoring dashboard for building manager'],
  },
  {
    title: 'Hospitality Complex – Lake District',
    summary:
      'Delivered phase-by-phase heating upgrade for lodges and spa facilities without disrupting guest bookings.',
    impact: ['36% uplift in TripAdvisor comfort reviews', 'Funded via combined BUS grant and green financing', 'Predictive maintenance package prevents downtime'],
  },
]

export function CaseStudies() {
  return (
    <div className="bg-white text-brand-dark">
      <section className="section">
        <div className="container space-y-10">
          <div className="section-heading">
            <span className="section-eyebrow">Case Studies</span>
            <h1 className="text-3xl font-bold md:text-4xl">Proof that strategic heating upgrades pay off</h1>
            <p className="mt-4 text-base text-brand-dark/75">
              Explore a cross-section of recent <span className="text-brand-gradient">MarGav</span> <span className="text-brand-blue">Heating</span> projects across residential, hospitality, and multi-unit
              developments.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {CASE_STUDIES.map((project) => (
              <article
                key={project.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-brand-secondary/10 bg-white p-8 shadow-soft shadow-black/5"
              >
                <h2 className="text-2xl font-semibold text-brand-dark">{project.title}</h2>
                <p className="text-sm text-brand-dark/70">{project.summary}</p>
                <ul className="space-y-2 rounded-2xl bg-brand-light p-4 text-sm text-brand-dark/80">
                  {project.impact.map((line) => (
                    <li key={line} className="flex items-start gap-2">
                      <span className="text-brand-primary" aria-hidden>
                        ✔
                      </span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="rounded-3xl bg-brand-gradient p-[1px]">
            <div className="flex flex-col gap-4 rounded-3xl bg-brand-dark/95 p-10 text-brand-white md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl space-y-2">
                <h2 className="text-2xl font-semibold md:text-3xl text-brand-white">Considering a similar project?</h2>
                <p className="text-sm text-white/80">
                  Request a tailored feasibility study with projected carbon savings, payback periods, and funding
                  recommendations.
                </p>
              </div>
              <Link
                to="/schedule"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-secondary transition hover:-translate-y-1 hover:shadow-lg"
              >
                Request feasibility study →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

