export function PricingSection() {
  return (
    <section className="section bg-brand-light">
      <div className="container grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-brand-secondary/10 bg-white p-8 shadow-soft shadow-black/5">
          <h2 className="text-3xl font-bold text-brand-dark md:text-4xl">Straightforward pricing</h2>
          <p className="mt-4 text-base text-brand-dark/75">
            Every quote is written in plain English with no hidden extras. You&rsquo;ll always know what we&rsquo;re
            doing, how long it will take and what it will cost.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-brand-dark/80">
            <li className="flex items-start gap-3">
              <span aria-hidden className="mt-0.5 text-brand-primary">•</span>
              <span>Fixed-price boiler servicing from £80</span>
            </li>
            <li className="flex items-start gap-3">
              <span aria-hidden className="mt-0.5 text-brand-primary">•</span>
              <span>Free quotes for new boiler installations</span>
            </li>
            <li className="flex items-start gap-3">
              <span aria-hidden className="mt-0.5 text-brand-primary">•</span>
              <span>Transparent labour and parts rates for repairs</span>
            </li>
            <li className="flex items-start gap-3">
              <span aria-hidden className="mt-0.5 text-brand-primary">•</span>
              <span>Finance options and payment plans available on request</span>
            </li>
          </ul>
          <p className="mt-6 text-sm text-brand-dark/70">
            Finance subject to status. Terms and conditions apply. Please contact us for personalised finance
            information.
          </p>
        </div>

        <div className="rounded-3xl border border-brand-secondary/10 bg-white p-8 shadow-soft shadow-black/5">
          <h3 className="text-lg font-semibold text-brand-dark">What to expect after you enquire</h3>
          <ol className="mt-4 space-y-3 text-sm text-brand-dark/80">
            {[
              'We’ll gather a few details about your property and heating goals.',
              'You receive a written quote with recommended options.',
              'Once approved, we agree a start date that suits you.',
              'Our engineers complete the work, test everything and tidy up.',
            ].map((step, index) => (
              <li key={step} className="flex items-start gap-3">
                <span className="inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-secondary text-xs font-semibold text-white">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

