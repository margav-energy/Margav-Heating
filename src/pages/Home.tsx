import { CallToAction } from '../components/CallToAction'
import { Hero } from '../components/Hero'
import type { Highlight } from '../components/Types'
import { PricingSection } from '../components/PricingSection'
import { Solutions } from '../components/Solutions'
import type { ServiceItem } from '../components/Solutions'
// import { TrustSection } from '../components/TrustSection'
// import { AboutSection } from '../components/AboutSection'

const HERO_HIGHLIGHTS: Highlight[] = [
  {
    title: 'Gas Safe engineers',
    description: 'Fully qualified and insured professionals handling every boiler and heating task.',
  },
  {
    title: 'Friendly service',
    description: 'Clear advice, tidy workmanship and respect for your home or workplace.',
  },
  {
    title: 'Rapid response',
    description: 'Flexible appointments and quick call-outs when your heating needs attention.',
  },
]

const SERVICES: ServiceItem[] = [
  {
    title: 'Air Source Heat Pumps (ASHP)',
    summary: 'Efficient, low-carbon heating systems that extract heat from the air to warm your home.',
    points: [
      'MCS-accredited installation and design',
      'Government grants and funding support available',
      'Lower running costs compared to traditional heating',
      'Smart controls and monitoring included',
    ],
  },
  {
    title: 'Boiler Installation & Services',
    summary: 'Professional boiler installation, repairs, servicing and maintenance for all makes and models.',
    points: [
      'Gas Safe registered engineers',
      'New installations and replacements',
      'Fast repairs and diagnostics',
      'Annual servicing to maintain efficiency and safety',
    ],
  },
  {
    title: 'HHRSH Infrared Heating',
    summary: 'High Heat Retention Storage Heaters provide efficient, responsive heating with smart controls.',
    points: [
      'Modern infrared heating technology',
      'Energy-efficient operation',
      'Zone control and smart thermostats',
      'Suitable for homes and commercial properties',
    ],
  },
]

export function Home() {
  return (
    <div className="space-y-0">
      <Hero highlights={HERO_HIGHLIGHTS} />
      <Solutions services={SERVICES} />
      {/* <TrustSection /> */}
      {/* <AboutSection /> */}
      <PricingSection />
      <CallToAction />
    </div>
  )
}

