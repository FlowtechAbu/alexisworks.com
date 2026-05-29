import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar      from './components/Navbar'
import Footer      from './components/Footer'
import Hero        from './components/Hero'
import About       from './components/About'
import Projects    from './components/Projects'
import Services    from './components/Services'
import CTABanner   from './components/CTABanner'
import FAQ         from './components/FAQ'
import Contact     from './components/Contact'
import ContactPage  from './pages/ContactPage'
import ProjectsPage      from './pages/ProjectsPage'
import TestimonialsPage  from './pages/TestimonialsPage'
import ServicesPage      from './pages/ServicesPage'
import RenovationsPage   from './pages/services/RenovationsPage'
import DemolitionPage    from './pages/services/DemolitionPage'
import FlooringTilePage    from './pages/services/FlooringTilePage'
import MovingCartingPage   from './pages/services/MovingCartingPage'
import DecksPatiosPage        from './pages/services/DecksPatiosPage'
import FinishedBasementsPage  from './pages/services/FinishedBasementsPage'
import KitchenRemodelPage     from './pages/services/KitchenRemodelPage'
import BathroomRemodelPage       from './pages/services/BathroomRemodelPage'
import CommercialRenovationsPage  from './pages/services/CommercialRenovationsPage'
import BasementRenovationPage         from './pages/projects/BasementRenovationPage'
import NYCGutRenovationPage           from './pages/projects/NYCGutRenovationPage'
import HellsKitchenRenovationPage     from './pages/projects/HellsKitchenRenovationPage'

function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Services />
      <CTABanner />
      <FAQ />
      <Contact />
    </main>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact"  element={<ContactPage />} />
        <Route path="/projects"      element={<ProjectsPage />} />
        <Route path="/testimonials"  element={<TestimonialsPage />} />
        <Route path="/services"               element={<ServicesPage />} />
        <Route path="/services/renovations"   element={<RenovationsPage />} />
        <Route path="/services/demolition"    element={<DemolitionPage />} />
        <Route path="/services/flooring-tile"   element={<FlooringTilePage />} />
        <Route path="/services/moving-carting"           element={<MovingCartingPage />} />
        <Route path="/services/decks-patios-landscaping" element={<DecksPatiosPage />} />
        <Route path="/services/finished-basements"       element={<FinishedBasementsPage />} />
        <Route path="/services/kitchen-remodel"          element={<KitchenRemodelPage />} />
        <Route path="/services/bathroom-remodel"          element={<BathroomRemodelPage />} />
        <Route path="/services/commercial-renovations"    element={<CommercialRenovationsPage />} />
        <Route path="/projects/basement-renovation"      element={<BasementRenovationPage />} />
        <Route path="/projects/nyc-gut-renovation"       element={<NYCGutRenovationPage />} />
        <Route path="/projects/gut-remodel-modern-renovation" element={<HellsKitchenRenovationPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
