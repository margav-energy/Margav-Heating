const PROCESS_STEPS = [
  {
    title: 'Discovery & Energy Audit',
    description:
      "We run a detailed site survey, review energy bills, and model your property's heating demand to identify the optimal system mix.",
  },
  {
    title: 'System Design & Proposal',
    description:
      'Our engineers prepare an MCS-compliant design package with heat-loss calculations, schematics, and ROI projections.',
  },
  {
    title: 'Premium Installation',
    description:
      'Accredited MarGav installers deliver a tidy, code-compliant install, coordinate scaffolding, and manage all permits and paperwork.',
  },
  {
    title: 'Commissioning & Training',
    description:
      'We configure controls, integrate smart thermostats, and train your household or facilities team on how to get the most from the system.',
  },
  {
    title: 'Monitoring & Aftercare',
    description:
      'Performance monitoring, seasonal optimisation visits, and priority support keep your heating system efficient year-round.',
  },
]

import { Link } from 'react-router-dom'

export function Process() {
  return (
    <div className="space-y-16 bg-white text-brand-dark">
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="section-eyebrow">Our Process</span>
            <h1 className="text-3xl font-bold md:text-4xl">A proven framework for modern heating projects</h1>
            <p className="mt-4 text-base text-brand-dark/75">
              From the first consultation to long-term optimisation, our team handles every step with craftsmanship,
              transparency, and measurable results.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {PROCESS_STEPS.map((step, index) => (
              <article
                key={step.title}
                className="rounded-3xl border border-brand-secondary/10 bg-white p-8 shadow-soft shadow-black/5"
              >
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-primary">
                  Step {index + 1}
                </span>
                <h2 className="mt-3 text-2xl font-semibold text-brand-dark">{step.title}</h2>
                <p className="mt-4 text-sm text-brand-dark/70">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-secondary text-brand-white">
        <div className="container flex flex-col gap-8 py-16 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl space-y-4">
            <h2 className="text-3xl font-bold md:text-4xl">Ready to decarbonise your heating?</h2>
            <p className="text-sm text-white/80">
              Book a discovery call with the MarGav Heating team and receive a tailored concept design, funding options,
              and energy savings forecast.
            </p>
          </div>
          <Link
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-secondary shadow-soft transition hover:-translate-y-1 hover:shadow-lg"
            to="/schedule"
          >
            Book a discovery call
          </Link>
        </div>
      </section>
    </div>
  )
}

