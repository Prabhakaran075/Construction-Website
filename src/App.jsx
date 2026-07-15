import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Phone } from 'lucide-react';

// Layout Components
import Header from './components/Header';
import Footer from './components/Footer';

// Page Components
import Home from './pages/Home';
import About from './pages/About';
import ConstructionServices from './pages/ConstructionServices';
import BuildingMaterials from './pages/BuildingMaterials';
import VehicleRental from './pages/VehicleRental';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Packages from './pages/Packages';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

        {/* Sticky Header Nav */}
        <Header />

        {/* Main Content Area */}
        <main style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/construction-services" element={<ConstructionServices />} />
            <Route path="/building-materials" element={<BuildingMaterials />} />
            <Route path="/vehicle-rental" element={<VehicleRental />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Call & WhatsApp Widgets (Requested features) */}
        <div className="floating-contact-widgets">
          {/* WhatsApp Chat Widget */}
          <a
            href="https://wa.me/918778434867"
            target="_blank"
            rel="noopener noreferrer"
            className="float-widget float-widget-whatsapp"
            aria-label="Chat on WhatsApp"
          >
            <span className="float-widget-tooltip">Chat on WhatsApp</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          </a>

          {/* Click-to-Call Phone Widget */}
          <a
            href="tel:+918778434867"
            className="float-widget float-widget-phone"
            aria-label="Call Office"
          >
            <span className="float-widget-tooltip">Call Now</span>
            <Phone size={22} />
          </a>
        </div>

      </div>
    </Router>
  );
}

export default App;
