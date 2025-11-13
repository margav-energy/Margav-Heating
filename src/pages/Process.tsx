import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

const PROCESS_STEPS = [
  {
    title: 'Discovery & Energy Audit',
    description:
      "We run a detailed site survey, review energy bills, and model your property's heating demand to identify the optimal system mix.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'System Design & Proposal',
    description:
      'Our engineers prepare an MCS-compliant design package with heat-loss calculations, schematics, and ROI projections.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Premium Installation',
    description:
      'Accredited MarGav installers deliver a tidy, code-compliant install, coordinate scaffolding, and manage all permits and paperwork.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Commissioning & Training',
    description:
      'We configure controls, integrate smart thermostats, and train your household or facilities team on how to get the most from the system.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'Monitoring & Aftercare',
    description:
      'Performance monitoring, seasonal optimisation visits, and priority support keep your heating system efficient year-round.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
]

export function Process() {
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set())
  const observersRef = useRef<Map<number, IntersectionObserver>>(new Map())

  const observeStep = (element: HTMLDivElement | null, index: number) => {
    // Disconnect existing observer for this index
    const existingObserver = observersRef.current.get(index)
    if (existingObserver) {
      existingObserver.disconnect()
    }

    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSteps((prev) => new Set([...prev, index]))
          }
        })
      },
      { threshold: 0.2, rootMargin: '-50px' }
    )

    observer.observe(element)
    observersRef.current.set(index, observer)
  }

  useEffect(() => {
    return () => {
      // Cleanup all observers on unmount
      observersRef.current.forEach((observer) => observer.disconnect())
    }
  }, [])

  return (
    <div className="space-y-16 bg-white text-brand-dark mb-32 md:mb-40">
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

          {/* Timeline Layout */}
          <div className="relative mt-16">
            {/* Vertical Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-greenLight via-brand-green to-brand-teal md:left-1/2 md:-translate-x-0.5" />

            <div className="space-y-12 md:space-y-16">
              {PROCESS_STEPS.map((step, index) => {
                const isVisible = visibleSteps.has(index)
                const isEven = index % 2 === 0

                return (
                  <div
                    key={step.title}
                    ref={(el) => observeStep(el, index)}
                    className={`relative flex items-center gap-8 md:gap-12 ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-white shadow-lg ring-4 ring-white md:h-20 md:w-20">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-full bg-brand-gradient text-white transition-all duration-700 md:h-16 md:w-16 ${
                          isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                        }`}
                      >
                        <div className="flex h-8 w-8 items-center justify-center md:h-10 md:w-10">
                          {step.icon}
                        </div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span
                          className={`text-lg font-bold text-brand-dark transition-all duration-500 md:text-xl ${
                            isVisible ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                          }`}
                        >
                          {index + 1}
                        </span>
                      </div>
                    </div>

                    {/* Content Card */}
                    <article
                      className={`flex-1 rounded-3xl border border-brand-secondary/10 bg-white p-6 shadow-soft shadow-black/5 transition-all duration-700 md:p-8 ${
                        isVisible
                          ? 'translate-x-0 translate-y-0 opacity-100'
                          : isEven
                            ? '-translate-x-8 translate-y-8 opacity-0 md:translate-x-8'
                            : 'translate-x-8 translate-y-8 opacity-0 md:-translate-x-8'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 rounded-xl bg-brand-greenLight/10 p-3 text-brand-green">
                          {step.icon}
                        </div>
                        <div className="flex-1">
                          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary">
                            Step {index + 1}
                          </span>
                          <h2 className="mt-2 text-xl font-semibold text-brand-dark md:text-2xl">{step.title}</h2>
                          <p className="mt-3 text-sm leading-relaxed text-brand-dark/70 md:text-base">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section relative bg-black text-brand-white pb-32 md:pb-40">
        {/* Gradient separator */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-greenLight/60 to-transparent" />
        <div className="container flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl space-y-4">
            <h2 className="text-3xl font-bold md:text-4xl text-brand-white">Ready to decarbonise your heating?</h2>
            <p className="text-base text-white/80 md:text-lg">
              Book a discovery call with the <span className="text-brand-gradient">MarGav</span> <span className="text-brand-blue">Heating</span> team and receive a tailored concept design, funding options,
              and energy savings forecast.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link
              className="inline-flex items-center justify-center rounded-full bg-brand-gradient px-8 py-4 text-sm font-semibold !text-white shadow-soft transition hover:-translate-y-1 hover:shadow-lg hover:!text-white md:px-10 md:py-4"
              to="/schedule"
            >
              Book a discovery call
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

