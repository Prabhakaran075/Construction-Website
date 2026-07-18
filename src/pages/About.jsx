import React from 'react';
import { ShieldAlert, Award, Compass, MapPin, CheckCircle, Flame } from 'lucide-react';

export default function About() {
  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "200+", label: "Projects Completed" },
    { number: "50+", label: "Fleet & Machines" },
    { number: "100%", label: "OSHA Compliant" }
  ];

  const values = [
    {
      icon: <ShieldAlert size={28} />,
      title: "Safety First",
      desc: "Our zero-incident goal is backed by daily site briefs, certified rigging checks, and professional heavy haulage securing practices."
    },
    {
      icon: <Award size={28} />,
      title: "Quality Materials",
      desc: "We never compromise on structures. All lumber, concrete mixes, and structural steel are grade-certified and code-approved."
    },
    {
      icon: <Compass size={28} />,
      title: "Timely Delivery",
      desc: "We own our logistics line. If concrete or framing materials are delayed, we adjust transport dynamically to prevent team downtime."
    }
  ];

  const serviceAreas = [
    "Metro City (Downtown & Suburbs)",
    "West Logistics Corridor (Routes I-90 / I-95)",
    "East Coast Shipping Terminal Hubs",
    "Regional Industrial Developments",
    "Outer County Residential Zones",
    "Commercial Ports and Hub Access"
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="section section-dark" style={{ padding: '4rem 0', borderBottom: '4px solid var(--color-safety-orange)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ color: '#fff', fontSize: '2.5rem', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 800 }}>About GPR Construction</h1>
          <p style={{ color: '#cbd5e1', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            Learn about our safety standard, team strength, and the values that drive our construction and logistics work.
          </p>
        </div>
      </section>

      {/* Main Story & Metrics */}
      <section className="section">
        <div className="container">
          <div className="about-hero-grid">
            <div className="about-content">
              <h2 style={{ borderLeft: '4px solid var(--color-safety-orange)', paddingLeft: '1rem' }}>
                Your Construction
              </h2>
              <p>
                Founded in 2011, GPR Construction was created to solve a common bottleneck in building projects: coordination delays between building crews and raw material suppliers. By operating our own fleet of tippers, cranes, and logistics vehicles alongside our licensed construction team, we cut out the middleman.
              </p>
              <p>
                Whether we are excavating for a structural concrete foundation, building a multi-story residential home, or transporting structural framing to a commercial job site, our priority is safe and reliable execution.
              </p>
              <p>
                We serve general contractors, residential developers, and individual homeowners who value honest pricing, clear project timelines, and worksites that prioritize safety regulations.
              </p>
            </div>

            {/* Structured CSS Grid layout for stats */}
            <div style={{ background: '#1e293b', padding: '2.5rem', borderRadius: '8px', border: '2px solid var(--color-charcoal-light)', color: 'white' }}>
              <h3 style={{ textTransform: 'uppercase', marginBottom: '1.5rem', borderBottom: '2px solid #334155', paddingBottom: '0.5rem', color: 'var(--color-safety-orange)' }}>
                GPR Credentials & Stats
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                {stats.map((s, idx) => (
                  <div key={idx} style={{ borderLeft: '3px solid var(--color-steel-blue)', paddingLeft: '1rem' }}>
                    <strong style={{ fontSize: '2rem', display: 'block', color: 'white', fontFamily: 'var(--font-heading)' }}>{s.number}</strong>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.5px' }}>{s.label}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '2.5rem', background: '#0f172a', padding: '1rem', borderRadius: '4px', border: '1px solid #334155', fontSize: '0.85rem' }}>
                <p style={{ margin: 0, color: '#94a3b8' }}>
                  <strong style={{ color: 'var(--color-text-light)', display: 'block', marginBottom: '0.25rem' }}>✓ Fully Insured & Licensed</strong>
                  GPR Construction holds general liability coverage up to Rs. 2M, heavy-vehicle logistics insurance, and Class-A contracting licenses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workforce and Safety Values */}
      <section className="section section-gray">
        <div className="container">
          <div className="section-title-wrap">
            <h2 className="section-title">Our Safety & Core Values</h2>
            <p>Our operation is built on high safety and strict structural codes. These core values govern everything we build and transport.</p>
          </div>
          <div className="grid grid-3">
            {values.map((v, idx) => (
              <div key={idx} className="value-card">
                <div className="value-icon">
                  {v.icon}
                </div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workforce Strength and Service Area */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center' }}>
            {/* Service Area list */}
            <div>
              <h2 style={{ textTransform: 'uppercase', fontSize: '1.8rem', marginBottom: '1.5rem', borderLeft: '4px solid var(--color-steel-blue)', paddingLeft: '1rem' }}>
                Active Service Regions
              </h2>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                Our logistics vehicles and building crews operate daily in the following regions. We maintain dedicated routing clearances for heavy payloads.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                {serviceAreas.map((area, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                    <MapPin size={16} style={{ color: 'var(--color-safety-orange)', flexShrink: 0 }} />
                    <span style={{ fontWeight: 500 }}>{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Workforce strength cards */}
            <div style={{ backgroundColor: 'var(--color-concrete-base)', padding: '2.5rem', borderRadius: '8px', border: '1px solid var(--color-concrete-dark)' }}>
              <h3 style={{ textTransform: 'uppercase', fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 700 }}>
                Our Workforce Strength
              </h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                We employ a direct, full-time workforce. This ensures consistent quality and accountability compared to standard subcontracting.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  "Licensed Residential Builders & Framers",
                  "Accredited Heavy Transport & Crane Drivers (CDL Class-A)",
                  "Experienced Excavation & Rigging Teams",
                  "In-house Project Estimators & Site Logistics Managers"
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', fontWeight: 600 }}>
                    <CheckCircle size={18} style={{ color: 'var(--color-success)', flexShrink: 0 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Engineers Section */}
      <section className="section section-gray" style={{ borderTop: '1px solid var(--color-concrete-dark)' }}>
        <div className="container">
          <div className="section-title-wrap">
            <h2 className="section-title">Our Engineers</h2>
            <p>Led by qualified engineers with extensive experience in construction planning, materials, and site execution.</p>
          </div>

          <div className="grid grid-2" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="why-card" style={{ textAlign: 'center', padding: '2rem' }}>
              <div className="value-icon" style={{ backgroundColor: 'var(--color-charcoal-dark)', color: 'var(--color-safety-orange)', width: '70px', height: '70px', margin: '0 auto 1rem auto' }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 800 }}>EM</span>
              </div>
              <h3 style={{ marginTop: '1rem', fontSize: '1.25rem', textTransform: 'uppercase' }}>Er. R. Mano</h3>
              <p style={{ color: 'var(--color-steel-blue)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.5rem' }}>B.E., EEE</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>Operations Lead, Building Materials Supply, Truck/JCB Logistics & Rentals.</p>
              <a href="tel:8778434867" className="btn btn-outline" style={{ display: 'inline-flex', padding: '0.5rem 1rem', fontSize: '0.8rem' }}>Call: 87784 34867</a>
            </div>
            <div className="why-card" style={{ textAlign: 'center', padding: '2rem' }}>
              <div className="value-icon" style={{ backgroundColor: 'var(--color-charcoal-dark)', color: 'var(--color-safety-orange)', width: '70px', height: '70px', margin: '0 auto 1rem auto' }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 800 }}>EB</span>
              </div>
              <h3 style={{ marginTop: '1rem', fontSize: '1.25rem', textTransform: 'uppercase' }}>Er. R. Bharathkumar</h3>
              <p style={{ color: 'var(--color-steel-blue)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.5rem' }}>B.Tech., Civil</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>Head of Construction, Building Planning, 2D/3D Drafting & Approvals.</p>
              <a href="tel:9688503306" className="btn btn-outline" style={{ display: 'inline-flex', padding: '0.5rem 1rem', fontSize: '0.8rem' }}>Call: 96885 03306</a>
            </div>


          </div>
        </div>
      </section>
    </div>
  );
}
