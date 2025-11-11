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
    title: 'Boiler Installation & Replacement',
    summary: 'Modern, efficient boilers sized and installed to suit your property.',
    points: [
      'Gas Safe design and commissioning',
      'Removal and disposal of old equipment',
      'Smart controls and thermostats available',
      'Manufacturer-backed warranties registered',
    ],
  },
  {
    title: 'Boiler Repairs & Diagnostics',
    summary: 'Accurate fault finding and fast repairs to get your heating back on.',
    points: [
      'Transparent call-out and labour rates',
      'Genuine parts sourced quickly',
      'Emergency response available',
      'Full safety checks after repair',
    ],
  },
  {
    title: 'Boiler Servicing & Annual Maintenance',
    summary: 'Routine servicing keeps your boiler efficient, safe and within warranty.',
    points: [
      'Full combustion analysis and cleaning',
      'Service reminders so you never miss a visit',
      'Documentation for warranty and insurance',
      'Advice on efficiency improvements',
    ],
  },
  {
    title: 'Radiator & Central Heating Upgrades',
    summary: 'Improve comfort and efficiency with balanced radiators and updated controls.',
    points: [
      'System flushing and inhibitor dosing',
      'New radiators and towel warmers fitted',
      'Smart zoning and thermostatic valves',
      'Heating performance optimisation',
    ],
  },
  {
    title: 'Landlord Gas Safety Certificates (CP12)',
    summary: 'Fast, reliable CP12 inspections for landlords and managing agents.',
    points: [
      'Annual safety checks scheduled for you',
      'Digital certificates issued promptly',
      'Remedial works quoted clearly',
      'Key collection and tenant liaison available',
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

