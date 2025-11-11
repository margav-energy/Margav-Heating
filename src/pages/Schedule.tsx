import { Link } from 'react-router-dom'

const BENEFITS = [
  'Personalised project roadmap with timeline and investment forecast',
  'Funding and grant eligibility check carried out during the session',
  'Advice on integrating solar PV, battery storage, or EV charging',
  'Access to MarGav Heating monitoring platform demo',
]

export function Schedule() {
  return (
    <div className="bg-white text-brand-dark">
      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-6">
            <span className="section-eyebrow">Book a Consultation</span>
            <h1 className="text-3xl font-bold md:text-4xl">Schedule your heating strategy session</h1>
            <p className="text-base text-brand-dark/75">
              A 45-minute video consultation with our energy specialists. We&rsquo;ll review your property data, goals,
              and budget to recommend the right heating solution.
            </p>
            <ul className="space-y-3 rounded-3xl bg-brand-light p-6 text-sm text-brand-dark/80">
              {BENEFITS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 text-brand-primary">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-brand-dark/70">
              Complete the form and our scheduling team will confirm your slot within one business day.
            </p>
          </div>

          <form className="space-y-4 rounded-3xl border border-brand-secondary/10 bg-white p-8 shadow-soft shadow-black/5">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-sm font-medium text-brand-dark">
                First Name
                <input
                  className="mt-2 w-full rounded-xl border border-brand-secondary/10 bg-brand-light px-4 py-3 text-sm text-brand-dark focus:border-brand-secondary focus:outline-none"
                  name="firstName"
                  placeholder="Jane"
                  required
                />
              </label>
              <label className="text-sm font-medium text-brand-dark">
                Last Name
                <input
                  className="mt-2 w-full rounded-xl border border-brand-secondary/10 bg-brand-light px-4 py-3 text-sm text-brand-dark focus:border-brand-secondary focus:outline-none"
                  name="lastName"
                  placeholder="Smith"
                  required
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
              Property/Project Address
              <input
                className="mt-2 w-full rounded-xl border border-brand-secondary/10 bg-brand-light px-4 py-3 text-sm text-brand-dark focus:border-brand-secondary focus:outline-none"
                name="address"
                placeholder="Site address"
                required
              />
            </label>
            <label className="text-sm font-medium text-brand-dark">
              Describe your heating goals
              <textarea
                className="mt-2 w-full rounded-xl border border-brand-secondary/10 bg-brand-light px-4 py-3 text-sm text-brand-dark focus:border-brand-secondary focus:outline-none"
                name="message"
                placeholder="Tell us about your property and objectives..."
                rows={4}
                required
              />
            </label>
            <button type="submit" className="btn-primary w-full justify-center text-sm">
              Submit request
            </button>
          </form>
        </div>
      </section>

      <section className="bg-brand-secondary text-white">
        <div className="container flex flex-col gap-6 py-14 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold md:text-3xl">Prefer to talk right away?</h2>
            <p className="text-sm text-white/80">
              Call our team on <a href="tel:01889256069" className="underline text-[#b44876]">01889 256069</a> or email{' '}
              <a className="underline text-[#b44876]" href="mailto:sales@margav.energy">
                sales@margav.energy
              </a>
              . We&rsquo;re available Monday to Friday, 9:00 – 17:00.
            </p>
          </div>
          <Link
            to="/case-studies"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-secondary transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            View recent projects →
          </Link>
        </div>
      </section>
    </div>
  )
}

