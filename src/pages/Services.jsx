import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Hammer, Construction, Truck, Workflow, ShieldCheck, Check } from 'lucide-react';

export default function Services() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');

  const services = [
    {
      id: "residential-build",
      category: "construction",
      icon: <Home size={32} />,
      title: "Residential Home Construction",
      desc: "Full-service custom home building. From initial timber framing and roofing installation to detailed interior trim and carpentry.",
      features: [
        "Certified timber framing",
        "Complete roof installation",
        "Interior carpentry & fit-outs"
      ],
      svgGraphic: (
        <svg viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', background: '#334155' }}>
          <path d="M50 120 L150 40 L250 120 Z" stroke="#f97316" strokeWidth="4" fill="#1e293b" />
          <rect x="70" y="100" width="40" height="20" stroke="#cbd5e1" strokeWidth="2" />
          <rect x="190" y="100" width="40" height="20" stroke="#cbd5e1" strokeWidth="2" />
          <line x1="30" y1="120" x2="270" y2="120" stroke="#cbd5e1" strokeWidth="3" />
        </svg>
      )
    },
    {
      id: "renovations",
      category: "construction",
      icon: <Hammer size={32} />,
      title: "Building Renovation",
      desc: "Updating older structures, expanding residential footprints, wall removal, structural reinforcing, and premium layout conversions.",
      features: [
        "Load-bearing wall removal",
        "Structural home extensions",
        "Modern layout remodeling"
      ],
      svgGraphic: (
        <svg viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', background: '#334155' }}>
          <rect x="60" y="50" width="180" height="70" rx="4" stroke="#cbd5e1" strokeWidth="2" fill="#1e293b" />
          <path d="M120 30 L180 30 M150 10 V50" stroke="#f97316" strokeWidth="3" strokeLinecap="round" />
          <line x1="90" y1="120" x2="210" y2="120" stroke="#cbd5e1" strokeWidth="3" />
          <circle cx="150" cy="85" r="10" stroke="#0284c7" strokeWidth="2" />
        </svg>
      )
    },
    {
      id: "foundation",
      category: "construction",
      icon: <Construction size={32} />,
      title: "Foundation & Structure Work",
      desc: "Excavation, grading, formwork setup, steel reinforcing (rebar), and precision structural concrete pours for slabs and retaining walls.",
      features: [
        "Slab-on-ground & footings",
        "Concrete retaining walls",
        "Steel reinforcement rebar"
      ],
      svgGraphic: (
        <svg viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', background: '#334155' }}>
          <rect x="40" y="80" width="220" height="40" rx="2" fill="#475569" stroke="#cbd5e1" strokeWidth="2" />
          <path d="M60 80 V120 M100 80 V120 M140 80 V120 M180 80 V120 M220 80 V120 M260 80 V120" stroke="#0284c7" strokeWidth="2" />
          <line x1="30" y1="120" x2="270" y2="120" stroke="#94a3b8" strokeWidth="4" />
          <path d="M110 50 L140 20 L170 50 Z" stroke="#f97316" strokeWidth="2" fill="#ea580c" />
        </svg>
      )
    },
    {
      id: "material-transport",
      category: "transport",
      icon: <Truck size={32} />,
      title: "Material Transport",
      desc: "Heavy haulage of bulk construction materials, aggregates, structural steel beams, precast concrete, scaffolding, and lumber.",
      features: [
        "Flatbed steel & lumber transport",
        "Aggregate & gravel bulk hauling",
        "Heavy cargo securing compliance"
      ],
      svgGraphic: (
        <svg viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', background: '#334155' }}>
          <rect x="50" y="70" width="140" height="40" rx="2" fill="#1e293b" stroke="#cbd5e1" strokeWidth="2" />
          <rect x="190" y="80" width="40" height="30" rx="2" fill="#f97316" />
          <circle cx="80" cy="120" r="10" fill="#0f172a" stroke="#cbd5e1" strokeWidth="2" />
          <circle cx="150" cy="120" r="10" fill="#0f172a" stroke="#cbd5e1" strokeWidth="2" />
          <circle cx="210" cy="120" r="10" fill="#0f172a" stroke="#cbd5e1" strokeWidth="2" />
          <rect x="70" y="50" width="100" height="20" fill="#0284c7" />
        </svg>
      )
    },
    {
      id: "site-logistics",
      category: "transport",
      icon: <Workflow size={32} />,
      title: "Site Logistics & Layout",
      desc: "Complete site logistics support, including demolition clearing, equipment positioning, access route preparation, and load planning.",
      features: [
        "Site clearing & pre-work prep",
        "Rigging & placement logistics",
        "Access route management"
      ],
      svgGraphic: (
        <svg viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', background: '#334155' }}>
          <circle cx="150" cy="75" r="40" stroke="#0284c7" strokeWidth="2" strokeDasharray="5,5" />
          <path d="M150 15 V45 M150 105 V135 M90 75 H120 M180 75 H210" stroke="#cbd5e1" strokeWidth="2" />
          <circle cx="150" cy="75" r="8" fill="#f97316" />
          <line x1="80" y1="120" x2="220" y2="120" stroke="#94a3b8" strokeWidth="2" />
        </svg>
      )
    },
    {
      id: "truck-services",
      category: "transport",
      icon: <ShieldCheck size={32} />,
      title: "Truck & Vehicle Services",
      desc: "Providing heavy machinery vehicle hire, including loader cranes, concrete dump trucks, and hooklifts for job-site hauling demands.",
      features: [
        "Truck loader crane capability",
        "Concrete transit agitator sync",
        "Flexible hourly/day hire rates"
      ],
      svgGraphic: (
        <svg viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', background: '#334155' }}>
          <rect x="60" y="80" width="130" height="30" rx="2" fill="#1e293b" stroke="#cbd5e1" strokeWidth="2" />
          <path d="M130 80 L180 30 L220 30" stroke="#f97316" strokeWidth="4" strokeLinecap="round" />
          <circle cx="90" cy="120" r="10" fill="#0f172a" stroke="#cbd5e1" strokeWidth="2" />
          <circle cx="160" cy="120" r="10" fill="#0f172a" stroke="#cbd5e1" strokeWidth="2" />
          <circle cx="210" cy="120" r="10" fill="#0f172a" stroke="#cbd5e1" strokeWidth="2" />
        </svg>
      )
    }
  ];

  const handleInquire = (serviceTitle) => {
    // Navigate to contact page with selected service parameter
    const slug = encodeURIComponent(serviceTitle);
    navigate(`/contact?projectType=${slug}`);
  };

  const filteredServices = activeTab === 'all'
    ? services
    : services.filter(s => s.category === activeTab);

  return (
    <div>
      {/* Page Header */}
      <section className="section section-dark" style={{ padding: '4rem 0', borderBottom: '4px solid var(--color-safety-orange)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ color: '#fff', fontSize: '2.5rem', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 800 }}>Our Services</h1>
          <p style={{ color: '#cbd5e1', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            Explore our specialized division of building construction and material transport operations.
          </p>
        </div>
      </section>

      {/* Services Tabs and Grid */}
      <section className="section">
        <div className="container">

          {/* Service Filters */}
          <div className="service-tabs">
            <button
              className={`service-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Services
            </button>
            <button
              className={`service-tab-btn ${activeTab === 'construction' ? 'active' : ''}`}
              onClick={() => setActiveTab('construction')}
            >
              Building & Construction
            </button>
            <button
              className={`service-tab-btn ${activeTab === 'transport' ? 'active' : ''}`}
              onClick={() => setActiveTab('transport')}
            >
              Transport & Logistics
            </button>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-3">
            {filteredServices.map((service) => (
              <div key={service.id} className="service-card">

                {/* SVG Graphic Banner */}
                <div className="service-img-box">
                  {service.svgGraphic}
                  <span className="service-badge">
                    {service.category === 'construction' ? 'Build' : 'Transport'}
                  </span>
                </div>

                <div className="service-info">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--color-steel-blue)' }}>
                    {service.icon}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>

                  {/* Features checklist */}
                  <ul className="service-features">
                    {service.features.map((feat, idx) => (
                      <li key={idx}>
                        <Check size={14} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA button */}
                  <button
                    onClick={() => handleInquire(service.title)}
                    className="btn btn-outline"
                    style={{ width: '100%', marginTop: 'auto' }}
                  >
                    Inquire Service
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* End-to-end support section */}
      <section className="section section-gray" style={{ borderTop: '1px solid var(--color-concrete-dark)' }}>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div style={{ background: '#0f172a', padding: '2.5rem', borderRadius: '8px', color: 'white', border: '2px solid var(--color-charcoal-light)' }}>
              <h3 style={{ textTransform: 'uppercase', color: 'var(--color-safety-orange)', marginBottom: '1rem', fontWeight: 800 }}>
                Combined Service Synergy
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>
                Why hire separate contractors for structural work and bulk gravel transport? When you partner with Apex, we sync material transport and framing crews directly.
              </p>
              <ul style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  "No scheduling delays waiting for concrete or aggregates",
                  "Direct responsibility from raw excavation to lock-up stage",
                  "Clear itemized invoices covering both site work and hauling"
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem' }}>
                    <span style={{ color: 'var(--color-safety-orange)', fontWeight: 'bold' }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 style={{ textTransform: 'uppercase', fontSize: '2rem', marginBottom: '1.5rem' }}>
                Accredited Fleet & Licensing
              </h2>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                Apex operates in full compliance with local regulatory building codes and heavy-vehicle transport regulations.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ borderLeft: '3px solid var(--color-steel-blue)', paddingLeft: '1rem' }}>
                  <strong style={{ display: 'block', textTransform: 'uppercase', fontSize: '0.95rem' }}>Licensed Residential Contractors</strong>
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Class-A general contracting credentials enabling multi-story structural works.</span>
                </li>
                <li style={{ borderLeft: '3px solid var(--color-steel-blue)', paddingLeft: '1rem' }}>
                  <strong style={{ display: 'block', textTransform: 'uppercase', fontSize: '0.95rem' }}>Heavy Haulage Operator Clearances</strong>
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Meticulous route planning, secure tie-down checks, and overweight payload permits.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
