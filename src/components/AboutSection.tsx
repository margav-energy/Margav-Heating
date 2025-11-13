export function AboutSection() {
  return (
    <section id="about" className="section bg-white">
      <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-4">
          <span className="section-eyebrow">About <span className="text-brand-gradient">MarGav</span> <span className="text-brand-blue">Heating</span></span>
          <h2 className="text-3xl font-bold text-brand-dark md:text-4xl">Built on reliability, workmanship and care</h2>
          <p className="text-base text-brand-dark/80">
            <span className="text-brand-gradient">MarGav</span> <span className="text-brand-blue">Heating</span> is a professional heating and boiler company built on reliability, workmanship and customer
            care. We pride ourselves on honest advice, tidy work and leaving every heating system running safely and
            efficiently.
          </p>
          <p className="text-base text-brand-dark/70">
            Every engineer is fully qualified, insured and supported by our customer service team. Whether you need a
            quick repair or a full system upgrade, we explain what needs doing and keep you updated at every stage.
          </p>
        </div>
        <div className="rounded-3xl border border-brand-secondary/10 bg-brand-light p-8 shadow-soft shadow-black/5">
          <h3 className="text-lg font-semibold text-brand-dark">How we work</h3>
          <ul className="mt-4 space-y-3 text-sm text-brand-dark/80">
            {[
              'Friendly, no-obligation advice before any work begins',
              'Detailed handover so you know how to use your heating system',
              'Follow-up checks to make sure everything is performing as it should',
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
  )
}

