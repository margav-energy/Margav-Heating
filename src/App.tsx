import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { CaseStudies } from './pages/CaseStudies'
import { Contact } from './pages/Contact'
import { Process } from './pages/Process'
import { Resources } from './pages/Resources'
import { Schedule } from './pages/Schedule'
import { About } from './pages/About'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Process', to: '/process' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Resources', to: '/resources' },
]

const FOOTER_QUICK_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Process', to: '/process' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Resources', to: '/resources' },
  { label: 'Schedule Consultation', to: '/schedule' },
  { label: 'Contact', to: '/contact' },
]

const FOOTER_SERVICE_LINKS = [
  { label: 'Air Source Heat Pumps', to: '/services/ashp' },
  { label: 'Boiler Services', to: '/services/boiler' },
  { label: 'HHRSH Infrared Heating', to: '/services/hhrsh' },
]

const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://www.facebook.com/people/Margav-Solar/61581971564867/', icon: 'f' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/margav-energy/', icon: 'in' },
  { label: 'Instagram', href: 'https://www.instagram.com/margav.solar/', icon: 'ig' },
]

function NotFound() {
  return (
    <div className="section bg-white text-brand-dark">
      <div className="container text-center">
        <span className="section-eyebrow">Page not found</span>
        <h1 className="text-4xl font-bold">We couldn&rsquo;t find that page</h1>
        <p className="mt-4 text-sm text-brand-dark/70">
          The link you followed may be broken. Head back to the homepage or explore our case studies.
        </p>
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-gradient-to-b from-white via-white/60 to-white text-brand-dark">
        <Header links={NAV_LINKS} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/process" element={<Process />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer quickLinks={FOOTER_QUICK_LINKS} services={FOOTER_SERVICE_LINKS} socials={SOCIAL_LINKS} />
      </div>
    </BrowserRouter>
  )
}

export default App
