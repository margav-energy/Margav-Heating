import { Link } from 'react-router-dom'

const RESOURCE_ITEMS = [
  {
    title: 'Heat Pump Funding Guide 2025',
    description:
      'Navigate Boiler Upgrade Scheme incentives, regional grants, and financing options with our updated funding toolkit.',
    category: 'Guides',
  },
  {
    title: 'Heating Controls Comparison',
    description:
      'Smart thermostats vs. zoning panels: discover which control strategy delivers the biggest savings for UK homes.',
    category: 'Insights',
  },
  {
    title: 'Commercial HVAC Compliance Checklist',
    description:
      'Ensure your project meets Part L, BUS accreditation, and TM65 embodied carbon reporting with this compliance list.',
    category: 'Downloads',
  },
]

const CTA_LINKS = [
  { label: 'Latest Blog Articles', to: '/resources/articles' },
  { label: 'Download Spec Sheets', to: '/resources/specs' },
  { label: 'Book CPD Session', to: '/schedule' },
]

export function Resources() {
  return (
    <div className="bg-white text-brand-dark">
      <section className="section">
        <div className="container space-y-12">
          <div className="section-heading">
            <span className="section-eyebrow">Resource Hub</span>
            <h1 className="text-3xl font-bold md:text-4xl">Stay ahead with Margav Heating insights</h1>
            <p className="mt-4 text-base text-brand-dark/75">
              Download guides, watch technical briefings, and unlock planning tools tailored to energy-efficient heating
              retrofit and new-build projects.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {RESOURCE_ITEMS.map((resource) => (
              <article
                key={resource.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-brand-secondary/10 bg-white p-8 shadow-soft shadow-black/5"
              >
                <span className="inline-flex w-fit items-center rounded-full bg-brand-secondary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand-secondary">
                  {resource.category}
                </span>
                <h2 className="text-2xl font-semibold text-brand-dark">{resource.title}</h2>
                <p className="text-sm text-brand-dark/70">{resource.description}</p>
                <Link
                  to="/contact"
                  className="mt-auto inline-flex items-center text-sm font-semibold text-brand-secondary transition hover:text-brand-primary"
                >
                  Request access
                  <span aria-hidden="true" className="ml-2">
                    →
                  </span>
                </Link>
              </article>
            ))}
          </div>

          <div className="rounded-3xl border border-brand-secondary/15 bg-brand-light p-8 shadow-soft shadow-black/5 md:flex md:items-center md:justify-between">
            <div className="max-w-xl space-y-3">
              <h2 className="text-2xl font-semibold text-brand-dark">Looking for something specific?</h2>
              <p className="text-sm text-brand-dark/70">
                Our team curates weekly insights for homeowners, specifiers, and estates teams. Let us know what guidance
                would help accelerate your decarbonisation journey.
              </p>
            </div>
            <div className="mt-6 grid gap-3 md:mt-0">
              {CTA_LINKS.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="inline-flex items-center justify-between rounded-xl border border-brand-secondary/20 bg-white px-5 py-3 text-sm font-semibold text-brand-secondary transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  {link.label}
                  <span aria-hidden="true" className="ml-3 text-brand-primary">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

