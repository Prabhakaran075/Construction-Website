import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Truck, Check, Shield, Wrench, ShieldAlert, Award } from 'lucide-react';

export default function VehicleRental() {
  const navigate = useNavigate();

  const machinery = [
    {
      name: "JCB Heavy Excavator (3DX / 4DX)",
      desc: "Versatile backhoe loader, ideal for trench digging, foundational excavation, site grading, soil compaction, and heavy bucket lifting.",
      specs: {
        capacity: "1.0 - 1.2 cubic meter bucket",
        reach: "4.7 meters dig depth",
        power: "76 - 92 HP diesel engine"
      },
      rate: "Hourly / Shift Basis (Operator included)",
      features: ["Advanced 4WD traction", "Meticulously serviced hydraulic seals", "Front loader & rear backhoe attachment"]
    },
    {
      name: "Tipper Lorries & Dump Trucks",
      desc: "Heavy-duty tipper trucks for bulk aggregate transport, M Sand hauling, brick delivery, and demolition site debris clearing.",
      specs: {
        capacity: "10 - 25 Ton payload limits",
        axle: "Multi-axle dual tippers",
        volume: "12 - 18 cubic yards"
      },
      rate: "Per Trip / Daily Basis (Driver included)",
      features: ["Hydraulic tipping beds", "GPS-tracked routes", "Overload warning safety sensors"]
    },
    {
      name: "Utility Site Tractors",
      desc: "Agricultural and construction site tractors fitted with trailers and leveler boards. Ideal for aggregate distribution and access road clearing.",
      specs: {
        capacity: "3 - 5 Ton trailer loads",
        type: "Fitted with back-leveler sheets",
        power: "45 - 60 HP heavy utility"
      },
      rate: "Daily / Weekly Lease (Operator included)",
      features: ["Heavy tread tires for wet mud", "Tow hook attachments", "Gravel leveler boards"]
    }
  ];

  const handleInquire = (machineName) => {
    navigate(`/contact?projectType=vehicle-rental&message=${encodeURIComponent(`I would like to inquire about renting: ${machineName}. Rental duration / scope: `)}`);
  };

  return (
    <div>
      {/* Page Header */}
      <section className="section section-dark" style={{ padding: '4rem 0', borderBottom: '4px solid var(--color-safety-orange)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ color: '#fff', fontSize: '2.5rem', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 800 }}>Earth Movers & Vehicle Rental</h1>
          <p style={{ color: '#cbd5e1', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            Fully insured JCB excavators, tipper lorries, and tractors for hire. All rentals include a licensed operator.
          </p>
        </div>
      </section>

      {/* Machinery Catalog */}
      <section className="section">
        <div className="container">
          <div className="section-title-wrap">
            <h2 className="section-title">Our Active Lease Fleet</h2>
            <p>We maintain our machinery to strict mechanical standards. Zero down-time is our target.</p>
          </div>

          <div className="grid grid-3">
            {machinery.map((m, idx) => (
              <div key={idx} className="service-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', color: 'var(--color-steel-blue)' }}>
                  <div className="why-icon-box" style={{ margin: 0, backgroundColor: 'var(--color-charcoal-dark)', color: 'var(--color-safety-orange)' }}>
                    <Truck size={24} />
                  </div>
                </div>

                <h3 style={{ fontSize: '1.25rem', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: 800 }}>
                  {m.name}
                </h3>

                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', flexGrow: 1 }}>
                  {m.desc}
                </p>

                {/* Specs Block */}
                <div style={{ margin: '0 0 1.5rem 0', background: 'var(--color-concrete-base)', padding: '1rem', borderRadius: '4px', border: '1px solid var(--color-concrete-dark)' }}>
                  <span style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                    Machine Specifications
                  </span>
                  <ul style={{ fontSize: '0.8rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <li><strong>Capacity:</strong> {m.specs.capacity}</li>
                    <li><strong>Power Rating:</strong> {m.specs.power}</li>
                    <li><strong>Reach/Axle:</strong> {m.specs.reach || m.specs.axle}</li>
                  </ul>
                </div>

                {/* Rate Card */}
                <div style={{ marginBottom: '1.5rem', borderLeft: '3px solid var(--color-safety-orange)', paddingLeft: '1rem' }}>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', display: 'block' }}>LEASE STRUCTURE</span>
                  <strong style={{ fontSize: '0.85rem', color: 'var(--color-charcoal-dark)' }}>{m.rate}</strong>
                </div>

                <ul style={{ borderTop: '1px solid var(--color-concrete-base)', paddingTop: '1rem', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {m.features.map((feat, fIdx) => (
                    <li key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--color-charcoal-light)' }}>
                      <Check size={12} style={{ color: 'var(--color-success)', flexShrink: 0 }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleInquire(m.name)}
                  className="btn btn-outline"
                  style={{ width: '100%', marginTop: 'auto' }}
                >
                  Book Rental/Vehicle
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Operator and Safety Policies */}
      <section className="section section-gray" style={{ borderTop: '1px solid var(--color-concrete-dark)' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
            <div style={{ background: '#0f172a', padding: '2.5rem', borderRadius: '8px', color: 'white', border: '2px solid var(--color-charcoal-light)' }}>
              <h3 style={{ textTransform: 'uppercase', color: 'var(--color-safety-orange)', marginBottom: '1rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Shield size={20} />
                <span>Operator Inclusions</span>
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '1rem' }}>
                For safety compliance and insurance reasons, all of our JCBs, tractors, and tipper lorries are leased with our own fully certified operators.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
                <li><strong>✓ Operator wages included:</strong> No hidden labor add-ons.</li>
                <li><strong>✓ Certified skill sets:</strong> Operators hold specialized commercial cards and heavy license endorsements.</li>
                <li><strong>✓ Full liability coverage:</strong> Apex covers machine-level worksite insurance policies during lease.</li>
              </ul>
            </div>
            <div>
              <h2 style={{ textTransform: 'uppercase', fontSize: '2rem', marginBottom: '1.5rem' }}>
                Fleet Maintenance & Security
              </h2>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                Site delays caused by broken equipment cost general contractors thousands of dollars. We actively mitigate this through mechanical protocols.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <Wrench size={24} style={{ color: 'var(--color-steel-blue)', flexShrink: 0 }} />
                  <div>
                    <strong style={{ textTransform: 'uppercase', fontSize: '0.95rem', display: 'block' }}>Regular Fleet Inspections</strong>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Meticulous hydraulic checking, brake diagnostics, and structural bucket welding audits.</span>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <ShieldAlert size={24} style={{ color: 'var(--color-safety-orange)', flexShrink: 0 }} />
                  <div>
                    <strong style={{ textTransform: 'uppercase', fontSize: '0.95rem', display: 'block' }}>GPS Vehicle Coordination</strong>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Every tractor and lorry is coordinate-tracked, letting our logistics managers dispatch payloads immediately.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
