import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, DraftingCompass, Calculator, Landmark, Shield, Palette, Layout, Award, Check } from 'lucide-react';

export default function ConstructionServices() {
  const navigate = useNavigate();

  const handleInquire = (serviceName) => {
    navigate(`/contact?projectType=${encodeURIComponent(serviceName)}`);
  };

  const services = [
    {
      title: "Building Plan Approval",
      icon: <FileText size={24} />,
      desc: "Liaising with local municipal authorities to verify zoning laws, set-backs, and code compliance, securing official plan approvals with minimal delay.",
      details: ["Zoning & municipal clearance", "Code compliance checks", "Official document preparation"]
    },
    {
      title: "Building Planning & Design (2D & 3D)",
      icon: <DraftingCompass size={24} />,
      desc: "Creating conceptual building layouts. We draft full 2D floor plans and high-resolution 3D walkthroughs, letting you inspect the design before excavation.",
      details: ["2D floor plans & elevations", "3D architectural rendering", "Walkthrough simulation reviews"]
    },
    {
      title: "Building Cost Estimation",
      icon: <Calculator size={24} />,
      desc: "Comprehensive material take-offs and itemized cost estimation. We compile budgets for aggregates, brick counts, structural steel, and labor hours.",
      details: ["Itemized material bills", "Labor hour forecasting", "Budget safety boundaries"]
    },
    {
      title: "Structural Designing",
      icon: <Shield size={24} />,
      desc: "Engineering structural columns, concrete slabs, load-bearing frames, and beam tolerances (RSJ/steel framing) to withstand load parameters safely.",
      details: ["Load calculations", "Steel column specifications", "Slab load resistance design"]
    },
    {
      title: "Interior Designing",
      icon: <Palette size={24} />,
      desc: "Premium layout design, lighting planning, electrical routes, woodwork framing, partitions, and floor materials coordination.",
      details: ["Lighting & electrical design", "Woodwork & carpentry layouts", "Material theme selection"]
    },
    {
      title: "Bank Loan Support & Documentation",
      icon: <Landmark size={24} />,
      desc: "Compiling code approvals, blueprints, itemized project estimations, and contracting licenses to satisfy commercial banking loan application packages.",
      details: ["Certified estimate printouts", "Licensed builder signatures", "Zoning approval attachments"]
    },
    {
      title: "Residential Home Construction",
      icon: <Layout size={24} />,
      desc: "Direct master building works. We execute masonry, carpentry, concrete framing, plumbing prep, and roof trusses under direct supervision.",
      details: ["Licensed master builders", "Reinforced framing & masonry", "Full turn-key handovers"]
    },
    {
      title: "Building Renovation & Additions",
      icon: <Award size={24} />,
      desc: "Remodeling older residential homes. We handle load-bearing wall removal, room additions, second-story expansions, and structural retrofitting.",
      details: ["Load-bearing structural alterations", "Floor expansions & room additions", "Renovating layout conversions"]
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="section section-dark" style={{ padding: '4rem 0', borderBottom: '4px solid var(--color-safety-orange)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ color: '#fff', fontSize: '2.5rem', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 800 }}>Construction Services</h1>
          <p style={{ color: '#cbd5e1', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            Professional building plan designs, municipal approvals, engineering, and master construction works.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="section-title-wrap">
            <h2 className="section-title">Core Construction Divisions</h2>
            <p>From paper layouts to masonry, we guide you through every regulatory and structural step.</p>
          </div>

          <div className="grid grid-3">
            {services.map((s, idx) => (
              <div key={idx} className="service-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', color: 'var(--color-steel-blue)' }}>
                  <div className="why-icon-box" style={{ margin: 0 }}>
                    {s.icon}
                  </div>
                </div>
                <h3 style={{ fontSize: '1.25rem', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: 700 }}>
                  {s.title}
                </h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', flexGrow: 1 }}>
                  {s.desc}
                </p>
                <ul style={{ borderTop: '1px solid var(--color-concrete-base)', paddingTop: '1rem', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {s.details.map((detail, dIdx) => (
                    <li key={dIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--color-charcoal-light)', fontWeight: 600 }}>
                      <Check size={12} style={{ color: 'var(--color-safety-orange)', flexShrink: 0 }} />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => handleInquire(s.title)}
                  className="btn btn-outline" 
                  style={{ width: '100%', marginTop: 'auto' }}
                >
                  Inquire Service
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plan Approvals detail block */}
      <section className="section section-gray" style={{ borderTop: '1px solid var(--color-concrete-dark)' }}>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <h2 style={{ textTransform: 'uppercase', fontSize: '2rem', marginBottom: '1rem', fontWeight: 800 }}>Need help securing municipal permits?</h2>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                Zoning approvals and local building authority laws can delay home construction projects for months. Our local estimators handle plan drafting, architectural reviews, and regulatory submissions under one roof.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button onClick={() => handleInquire("Municipal Plan Approval")} className="btn btn-primary">Request Plan Approval Service</button>
              </div>
            </div>
            <div style={{ backgroundColor: 'var(--color-charcoal-dark)', padding: '2.5rem', borderRadius: '8px', color: 'white', border: '2px solid var(--color-charcoal-light)' }}>
              <h3 style={{ textTransform: 'uppercase', color: 'var(--color-safety-orange)', marginBottom: '1rem', fontWeight: 700 }}>
                Regulatory Package Features
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
                <li><strong>✓ Land Survey Tying:</strong> Aligning structural layout with geographic plots.</li>
                <li><strong>✓ Architectural Endorsements:</strong> Blueprints stamped by licensed engineers.</li>
                <li><strong>✓ Bank Documentation:</strong> Providing cost models and estimates matching bank specifications.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
