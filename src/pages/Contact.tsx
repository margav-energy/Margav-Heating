import { Link } from 'react-router-dom'

const CONTACT_POINTS = [
  {
    title: 'Head Office',
    details: ['7-8 Kimberley Business Park, Kimberley Way,', 'Rugeley WS15 1RE, United Kingdom'],
    icon: '📍',
  },
  {
    title: 'Phone',
    details: ['01889 256069'],
    icon: '📞',
    link: 'tel:01889256069',
  },
  {
    title: 'Email',
    details: ['sales@margav.energy'],
    icon: '✉️',
    link: 'mailto:sales@margav.energy',
  },
]

const SUPPORT_TIERS = [
  {
    title: 'Residential Support',
    description: 'Ideal for homeowners upgrading to heat pumps, hybrid systems, or smart heating controls.',
    perks: ['Warranty registration & document pack', 'Remote monitoring setup', 'Rapid response ticketing'],
  },
  {
    title: 'Commercial Support',
    description: 'For estates teams and property managers requiring proactive heating system management.',
    perks: ['Asset register and performance dashboard', 'Quarterly optimisation visits', 'Dedicated account manager'],
  },
  {
    title: 'Partner & Installer Network',
    description: 'Collaborate with MarGav Heating as a delivery partner or subcontractor.',
    perks: ['Design office hotline', 'CPD & training sessions', 'Priority access to specification tools'],
  },
]

export function Contact() {
  return (
    <div className="bg-white text-brand-dark">
      <section className="section">
        <div className="container space-y-12">
          <div className="section-heading">
            <span className="section-eyebrow">Contact Us</span>
            <h1 className="text-3xl font-bold md:text-4xl">Speak with the <span className="text-brand-gradient">MarGav</span> <span className="text-brand-blue">Heating</span> team</h1>
            <p className="mt-4 text-base text-brand-dark/75">
              Whether you&rsquo;re exploring a retrofit, planning a new build, or need technical support, our specialists
              are ready to help.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {CONTACT_POINTS.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-brand-secondary/10 bg-brand-light p-6 shadow-soft shadow-black/5"
              >
                <span className="text-2xl">{item.icon}</span>
                <h2 className="mt-3 text-xl font-semibold text-brand-dark">{item.title}</h2>
                <div className="mt-3 space-y-1 text-sm text-brand-dark/80">
                  {item.details.map((line) =>
                    item.link ? (
                      <a key={line} href={item.link} className="block transition hover:text-brand-secondary">
                        {line}
                      </a>
                    ) : (
                      <p key={line}>{line}</p>
                    ),
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <form className="space-y-4 rounded-3xl border border-brand-secondary/10 bg-white p-8 shadow-soft shadow-black/5">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="text-sm font-medium text-brand-dark">
                  Name
                  <input
                    className="mt-2 w-full rounded-xl border border-brand-secondary/10 bg-brand-light px-4 py-3 text-sm text-brand-dark focus:border-brand-secondary focus:outline-none"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </label>
                <label className="text-sm font-medium text-brand-dark">
                  Company (optional)
                  <input
                    className="mt-2 w-full rounded-xl border border-brand-secondary/10 bg-brand-light px-4 py-3 text-sm text-brand-dark focus:border-brand-secondary focus:outline-none"
                    name="company"
                    placeholder="Organisation"
                  />
                </label>
                <label className="text-sm font-medium text-brand-dark">
                  Email
                  <input
                    type="email"
                    className="mt-2 w-full rounded-xl border border-brand-secondary/10 bg-brand-light px-4 py-3 text-sm text-brand-dark focus:border-brand-secondary focus:outline-none"
                    name="email"
                    placeholder="you@email.com"
                    required
                  />
                </label>
                <label className="text-sm font-medium text-brand-dark">
                  Phone
                  <input
                    className="mt-2 w-full rounded-xl border border-brand-secondary/10 bg-brand-light px-4 py-3 text-sm text-brand-dark focus:border-brand-secondary focus:outline-none"
                    name="phone"
                    placeholder="+44 0000 000000"
                  />
                </label>
              </div>
              <label className="text-sm font-medium text-brand-dark">
                How can we help?
                <textarea
                  className="mt-2 w-full rounded-xl border border-brand-secondary/10 bg-brand-light px-4 py-3 text-sm text-brand-dark focus:border-brand-secondary focus:outline-none"
                  name="message"
                  placeholder="Share project details or questions..."
                  rows={4}
                  required
                />
              </label>
              <button type="submit" className="btn-primary w-full justify-center text-sm">
                Send enquiry
              </button>
            </form>

            <aside className="space-y-6 rounded-3xl border border-brand-secondary/10 bg-brand-light p-8 shadow-soft shadow-black/5">
              <h2 className="text-xl font-semibold text-brand-dark">Support programmes</h2>
              <p className="text-sm text-brand-dark/70">
                Choose the support level that fits your project stage. Not sure? Book a consultation and we&rsquo;ll guide
                you through the options.
              </p>
              <div className="space-y-4">
                {SUPPORT_TIERS.map((tier) => (
                  <div key={tier.title} className="rounded-2xl border border-brand-secondary/10 bg-white p-4">
                    <h3 className="text-base font-semibold text-brand-dark">{tier.title}</h3>
                    <p className="mt-2 text-xs text-brand-dark/70">
                      {tier.description.includes('MarGav Heating') ? (
                        <>
                          {tier.description.split('MarGav Heating')[0]}
                          <span className="text-brand-gradient">MarGav</span> <span className="text-brand-blue">Heating</span>
                          {tier.description.split('MarGav Heating')[1]}
                        </>
                      ) : (
                        tier.description
                      )}
                    </p>
                    <ul className="mt-3 space-y-1 text-xs text-brand-dark/80">
                      {tier.perks.map((perk) => (
                        <li key={perk} className="flex items-start gap-2">
                          <span className="text-brand-primary">•</span>
                          <span>{perk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <Link
                to="/schedule"
                className="inline-flex w-full items-center justify-center rounded-full bg-brand-secondary px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                Book a consultation →
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}

