import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Clock, Users, Truck, DollarSign, Award, Star, PhoneCall } from 'lucide-react';

export default function Home() {
  const testimonials = [
    {
      name: "Marcus Vance",
      role: "Developer, Vance Housing projects",
      content: "Bannari Amman Construction handled our entire layout planning, concrete slab foundations, and brick supply. Their integrated JCB rental and aggregate trucking meant we didn't face scheduling gaps. Solid execution.",
      stars: 5,
      avatar: "MV"
    },
    {
      name: "Sarah Jenkins",
      role: "Homeowner",
      content: "We hired them to design and build our home. They drafted the 2D planning, managed the local plan approval, and handled structural cement and steel. They kept us updated on costs. Highly recommended!",
      stars: 5,
      avatar: "SJ"
    },
    {
      name: "Arthur Pendelton",
      role: "Site Manager, LogiCorp",
      content: "Our project required 400 tons of M Sand and aggregates within a tight timeframe. Bannari Amman's lorry logistics fleet moved the material on time, and their tractor operators clearing the yard were top-tier.",
      stars: 5,
      avatar: "AP"
    }
  ];

  const whyChooseUs = [
    {
      icon: <Users size={24} />,
      title: "Reliable Build Crew",
      desc: "Licensed builders, planning draftsmen, and operators ensuring solid structural design and safety standard adherence."
    },
    {
      icon: <Award size={24} />,
      title: "Quality Materials Sourced",
      desc: "We supply certified M Sand, P Sand, high-grade aggregates, bricks, TMT steel, and cement direct to your project site."
    },
    {
      icon: <Clock size={24} />,
      title: "Timely Project Execution",
      desc: "Synchronized schedules between our construction crews, material supply trucks, and rental machinery reduces downtime."
    },
    {
      icon: <Truck size={24} />,
      title: "Safe Transport & Rigging",
      desc: "Fully-insured lorries, tractors, and JCB excavators operated by certified commercial operators."
    },
    {
      icon: <DollarSign size={24} />,
      title: "Transparent Estimates",
      desc: "Detailed building plan bills, clear material tonnage rates, and straightforward vehicle rental pricing."
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "End-to-End Support",
      desc: "From initial building approvals, bank loan documentation, site clearing, materials delivery, to finished homes."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-pattern"></div>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-badge">
                <ShieldCheck size={14} />
                <span>Building Materials & Earth Movers</span>
              </div>
              <h1 className="hero-headline" style={{ fontSize: '3rem' }}>
                Bannari Amman <span>Construction</span>
              </h1>
              <p className="hero-subtitle" style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
                Trusted construction planning, building materials, transport, JCB, lorry and tractor rental services.
              </p>
              <div className="hero-buttons">
                <a href="tel:+15550192831" className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  <PhoneCall size={16} />
                  <span>Call Now</span>
                </a>
                <Link to="/contact" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>Get Quote</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Interactive SVG graphic depicting construction framing & earth movers */}
            <div className="hero-image-container">
              <div className="hero-img-box" style={{ background: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ padding: '2rem' }}>
                  {/* Grid layout lines */}
                  <path d="M0 50 H400 M0 100 H400 M0 150 H400 M0 200 H400 M0 250 H400 M0 300 H400 M0 350 H400" stroke="#334155" strokeWidth="0.5" />
                  <path d="M50 0 V400 M100 0 V400 M150 0 V400 M200 0 V400 M250 0 V400 M300 0 V400 M350 0 V400" stroke="#334155" strokeWidth="0.5" />

                  {/* Structure (Construction division) */}
                  <rect x="60" y="160" width="150" height="180" rx="2" stroke="#0284c7" strokeWidth="3" fill="#0f172a" fillOpacity="0.8" />
                  <path d="M40 160 L135 80 L230 160 Z" stroke="#f97316" strokeWidth="4" fill="#0f172a" fillOpacity="0.4" />
                  <line x1="135" y1="80" x2="135" y2="160" stroke="#f97316" strokeWidth="3" />
                  <line x1="85" y1="120" x2="135" y2="160" stroke="#f97316" strokeWidth="2" />
                  <line x1="185" y1="120" x2="135" y2="160" stroke="#f97316" strokeWidth="2" />

                  {/* JCB Arm lifting structure */}
                  <path d="M330 200 L260 120 L200 130" stroke="#eab308" strokeWidth="6" strokeLinecap="round" />
                  <rect x="185" y="115" width="20" height="20" fill="#cbd5e1" rx="2" />

                  {/* Heavy Vehicle (Lorry / Tractor) */}
                  <rect x="230" y="270" width="105" height="50" rx="3" fill="#1e293b" stroke="#e2e8f0" strokeWidth="2" />
                  <rect x="335" y="282" width="25" height="38" rx="2" fill="#eab308" />
                  <circle cx="255" cy="325" r="12" fill="#0f172a" stroke="#cbd5e1" strokeWidth="2" />
                  <circle cx="305" cy="325" r="12" fill="#0f172a" stroke="#cbd5e1" strokeWidth="2" />
                  <circle cx="348" cy="325" r="12" fill="#0f172a" stroke="#cbd5e1" strokeWidth="2" />

                  {/* Cargo load */}
                  <path d="M235 270 Q285 240 330 270 Z" fill="#94a3b8" />
                </svg>

                <div className="hero-stats-badge">
                  <span className="hero-stats-number">15+</span>
                  <span className="hero-stats-label">Years of Trust</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Intro Panel Section */}
      <section className="section" style={{ paddingTop: '0' }}>
        <div className="container">
          <div className="intro-panel">
            <div className="intro-grid">
              <div className="intro-tagline">
                <h3>From Design Plans to Foundation Material</h3>
              </div>
              <div className="intro-desc">
                <p>
                  At <strong>Bannari Amman Construction</strong>, we combine engineering planning with physical material logistics. We handle local municipality building plan approvals, structural engineering, bank loan documentation, and supply the building materials (M Sand, Hollow Blocks, steel, cement) directly to the site using our own JCB loaders, tractors, and tipper lorries.
                </p>
                <div style={{ display: 'flex', gap: '2rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                  <div>
                    <strong style={{ color: 'var(--color-steel-blue)', fontSize: '1.25rem', display: 'block' }}>Class-A License</strong>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Building Approvals</span>
                  </div>
                  <div>
                    <strong style={{ color: 'var(--color-safety-orange)', fontSize: '1.25rem', display: 'block' }}>Direct Sourced</strong>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>M Sand & Aggregates</span>
                  </div>
                  <div>
                    <strong style={{ color: 'var(--color-success)', fontSize: '1.25rem', display: 'block' }}>Flexible Lease</strong>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>JCB, Lorry, Tractor Hire</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section section-gray">
        <div className="container">
          <div className="section-title-wrap">
            <h2 className="section-title">Why Choose Bannari Amman?</h2>
            <p>Our combined build services, wholesale material deck, and direct earth mover fleet ensure your project stays on schedule and in budget.</p>
          </div>
          <div className="grid grid-3">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="why-card">
                <div className="why-icon-box">
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-title-wrap">
            <h2 className="section-title">What Our Clients Say</h2>
            <p>We work closely with contractors and private clients to ensure safety compliance and high material quality standards.</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, idx) => (
              <div key={idx} className="testimonial-card">
                <div>
                  <div className="testimonial-rating">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="testimonial-content">"{t.content}"</p>
                </div>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    {t.avatar}
                  </div>
                  <div className="testimonial-author-info">
                    <h4>{t.name}</h4>
                    <p>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action Prompt */}
      <section className="section" style={{ backgroundColor: 'var(--color-concrete-base)', borderTop: '1px solid var(--color-concrete-dark)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', textTransform: 'uppercase', marginBottom: '1rem', fontWeight: 800 }}>Need a quote for building plan design or aggregates?</h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
            Our estimators compile itemized planning costs, sand supply delivery estimates, and machinery hire day-rates.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">Request Quote</Link>
            <a href="tel:+918778434867" className="btn btn-outline">Call 87784 34867</a>
          </div>
        </div>
      </section>
    </div>
  );
}
