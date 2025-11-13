import { Link } from 'react-router-dom'

const ICONS = {
  tick: (
    <svg
      className="h-6 w-6 text-brand-primary"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  ),
  wrench: (
    <svg
      className="h-6 w-6 text-brand-primary"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14.7 6.3a4 4 0 01-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 015.4-5.4z" />
    </svg>
  ),
  bulb: (
    <svg
      className="h-6 w-6 text-brand-primary"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M12 2a7 7 0 00-4 12.9V17a1 1 0 001 1h6a1 1 0 001-1v-2.1A7 7 0 0012 2z" />
    </svg>
  ),
  phone: (
    <svg
      className="h-6 w-6 text-brand-primary"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012 3.18 2 2 0 014 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 9.91a16 16 0 006 6l2.27-2.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  ),
  pound: (
    <svg
      className="h-6 w-6 text-brand-primary"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 15a4 4 0 01-4 4H8a4 4 0 110-8h3" />
      <path d="M12 3v12" />
    </svg>
  ),
  star: (
    <svg
      className="h-6 w-6 text-brand-primary"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="12 2 15 8.5 22 9.3 17 14.2 18.5 21 12 17.7 5.5 21 7 14.2 2 9.3 9 8.5 12 2" />
    </svg>
  ),
  linkedin: (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.48-2.24-1.68-2.24-.92 0-1.47.62-1.71 1.21-.09.22-.11.52-.11.82v5.78H9.84s.05-9.38 0-10.35h3.56v1.47c.47-.73 1.31-1.77 3.19-1.77 2.33 0 4.09 1.52 4.09 4.78v5.87zM5.34 8.63a2.06 2.06 0 110-4.11 2.06 2.06 0 010 4.11zM7.11 20.45H3.56V10.1h3.55zM22.22 0H1.78A1.77 1.77 0 000 1.75v20.5A1.77 1.77 0 001.78 24h20.44A1.78 1.78 0 0024 22.25V1.75A1.77 1.77 0 0022.22 0z" />
    </svg>
  ),
}

const TEAM_MEMBERS = [
  {
    initials: 'SM',
    name: 'Shaun Martin',
    role: 'General Manager',
    linkedin: 'https://www.linkedin.com/in/shaun-martin-b2596426/',
  },
  {
    initials: 'KB',
    name: 'Kelly Bugler',
    role: 'Operations Manager',
    linkedin: 'https://www.linkedin.com/in/kelly-bugler/',
  },
  {
    initials: 'TM',
    name: 'Tom Marshall',
    role: 'Director',
    linkedin: 'https://www.linkedin.com/in/tombat/',
  },
  {
    initials: 'MG',
    name: 'Matt Gavin',
    role: 'Director',
    linkedin: 'https://www.linkedin.com/in/matt-margav-660a54112/',
  },
]

const WHY_ITEMS = [
  {
    icon: ICONS.tick,
    title: 'Expert installation',
    description:
      'Experienced Gas Safe engineers design and install heating systems sized perfectly for your property.',
  },
  {
    icon: ICONS.wrench,
    title: 'Premium components',
    description:
      'We specify proven boilers, controls and radiators from trusted manufacturers to ensure reliability.',
  },
  {
    icon: ICONS.bulb,
    title: 'Practical advice',
    description:
      'Clear guidance on efficiency upgrades, smart controls and maintenance to keep running costs down.',
  },
  {
    icon: ICONS.phone,
    title: 'Responsive support',
    description:
      'Dedicated customer care team for booking, updates and aftercare so you always know what to expect.',
  },
  {
    icon: ICONS.pound,
    title: 'Transparent pricing',
    description:
      'Written quotes with labour and parts itemised, plus finance options available subject to status.',
  },
  {
    icon: ICONS.star,
    title: 'Proven track record',
    description:
      'Recommended by homeowners, landlords and businesses thanks to tidy work and dependable results.',
  },
]

export function About() {
  return (
    <div className="bg-white text-brand-dark">
      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-5">
            <span className="section-eyebrow">About <span className="text-brand-gradient">MarGav</span> <span className="text-brand-blue">Heating</span></span>
            <h1 className="text-3xl font-bold md:text-4xl">Trusted heating engineers with a local focus</h1>
            <p className="text-base text-brand-dark/80">
              <span className="text-brand-gradient">MarGav</span> <span className="text-brand-blue">Heating</span> is a professional heating and boiler company built on reliability, workmanship and customer care. Every job is delivered by qualified engineers who take pride in tidy work and clear communication.
            </p>
            <p className="text-base text-brand-dark/75">
              We help homeowners, landlords and businesses keep their heating systems safe, efficient and compliant. From first visit to follow-up, you get honest advice, detailed documentation and support that continues long after the job is finished.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link className="btn-primary" to="/schedule">
                Request a Free Quote
              </Link>
              <a href="tel:01889256069" className="btn-secondary">
                Call 01889 256 069
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-brand-secondary/10 bg-brand-light p-8 shadow-soft shadow-black/5">
            <h2 className="text-lg font-semibold text-brand-dark">What matters to us</h2>
            <ul className="mt-4 space-y-3 text-sm text-brand-dark/80">
              {[
                'Clear, written quotes with no hidden extras',
                'Friendly engineers who respect your home or workplace',
                'Safety and compliance checks on every visit',
                'Follow-up support so you are never left guessing',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span aria-hidden className="mt-0.5 text-brand-primary">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-brand-dark text-brand-white">
        <div className="container space-y-8">
          <div className="space-y-4">
            <span className="section-eyebrow bg-white/10 text-white">Our Team</span>
            <h2 className="text-3xl font-bold md:text-4xl text-white">
              The team keeping <span className="text-brand-gradient">MarGav</span> <span className="text-brand-blue">Heating</span> running smoothly
            </h2>
            <p className="text-base text-white/80">
              Our founding team has decades of experience across heating installation, customer support and technical project delivery.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {TEAM_MEMBERS.map((person) => (
              <article key={person.name} className="space-y-4 text-center">
                <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-brand-gradient text-3xl font-semibold text-white">
                  {person.initials}
                </div>
                <div className="space-y-1">
                  <p className="text-lg font-semibold text-white">{person.name}</p>
                  <p className="text-sm text-white/70">{person.role}</p>
                </div>
                <a
                  href={person.linkedin}
                  className="mx-auto inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-brand-secondary"
                  aria-label={`LinkedIn profile for ${person.name}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {ICONS.linkedin}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-brand-light">
        <div className="container space-y-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="section-eyebrow">Why choose us</span>
              <h2 className="text-3xl font-bold text-brand-dark md:text-4xl">
                Why choose <span className="text-brand-gradient">MarGav</span>{' '}
                <span className="text-brand-blue">Heating</span>?
              </h2>
            </div>
            <p className="max-w-xl text-sm text-brand-dark/70">
              We focus on safe installations, helpful advice and long-term reliability. Here are a few reasons customers
              across the UK trust our engineers with their heating and hot water.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {WHY_ITEMS.map((item) => (
              <article
                key={item.title}
                className="flex h-full flex-col gap-3 rounded-3xl border border-white/60 bg-white/90 p-6 shadow-soft shadow-black/5"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10">
                  {item.icon}
                </span>
                <h3 className="text-lg font-semibold text-brand-dark">{item.title}</h3>
                <p className="text-sm text-brand-dark/75">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <span className="section-eyebrow">Our promise</span>
            <h2 className="text-3xl font-bold text-brand-dark md:text-4xl">Heating work delivered the right way</h2>
            <p className="text-base text-brand-dark/75">
              We take pride in the details: protecting your home during works, keeping you updated each day, and leaving your heating system running safely. Most new customers come through recommendations, and we work hard to earn that trust.
            </p>
          </div>
          <div className="rounded-3xl border border-brand-secondary/10 bg-brand-light p-8 shadow-soft shadow-black/5">
            <h3 className="text-lg font-semibold text-brand-dark">Let&rsquo;s talk about your heating</h3>
            <p className="mt-3 text-sm text-brand-dark/80">
              Tell us about your property and we&rsquo;ll recommend the right service or upgrade. Quotes are free and there&rsquo;s no pressure to proceed.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Link className="btn-primary" to="/schedule">
                Book an engineer visit
              </Link>
              <a href="tel:01889256069" className="btn-secondary">
                Call 01889 256 069
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
