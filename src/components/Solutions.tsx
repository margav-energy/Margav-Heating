export interface ServiceItem {
  title: string
  summary: string
  points: string[]
}

interface SolutionsProps {
  services: ServiceItem[]
}

export function Solutions({ services }: SolutionsProps) {
  return (
    <section id="services" className="section bg-brand-light">
      <div className="container">
        <div className="section-heading">
          <span className="section-eyebrow">Heating &amp; boiler services</span>
          <h2 className="text-3xl font-bold text-brand-dark md:text-4xl">Solutions tailored to your property</h2>
          <p className="mt-4 text-base text-brand-dark/75">
            From a first-time install to ongoing care, our engineers keep your heating system running safely and
            efficiently.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex h-full flex-col gap-4 rounded-2xl border border-brand-secondary/10 bg-white p-6 shadow-soft shadow-black/5 transition hover:-translate-y-1 hover:border-brand-secondary/30 hover:shadow-lg"
            >
              <div>
                <h3 className="text-xl font-semibold text-brand-dark">{service.title}</h3>
                <p className="mt-2 text-sm text-brand-dark/70">{service.summary}</p>
              </div>
              <ul className="space-y-2 text-sm text-brand-dark/80">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-brand-primary" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

