import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Truck, Check, Grid, Flame, Settings } from 'lucide-react';

export default function BuildingMaterials() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');

  const materials = [
    {
      name: "M Sand (Manufactured Sand)",
      category: "sand",
      desc: "High-grade artificial sand produced by crushing hard granite stones. Ideal for concrete mixing, structural columns, and foundational casting due to zero silt content.",
      unit: "Per Ton / Per Lorry Load",
      features: ["Granular cubic shape", "Zero silt or clay contamination", "Superior concrete bonding"]
    },
    {
      name: "P Sand (Plastering Sand)",
      category: "sand",
      desc: "Super-fine manufactured sand specially graded for internal and external wall plastering. Provides a smooth finish and reduces cracks in masonry work.",
      unit: "Per Ton / Per Lorry Load",
      features: ["Sieved for uniform particle size", "Reduces paint bubble defects", "High durability finish"]
    },
    {
      name: "Coarse Aggregates (10mm, 20mm, 40mm)",
      category: "sand",
      desc: "Crushed blue metal stone aggregates. 20mm is perfect for standard concrete structural slabs, while 40mm handles heavy road base and trench footings.",
      unit: "Per Ton / Per Load",
      features: ["Hard granite blue metal", "Strict sizing compliance", "Ideal for structural columns"]
    },
    {
      name: "Red Sand",
      category: "sand",
      desc: "Naturally sourced fine red soil/sand, perfect for masonry, landscaping backfills, soil mixtures, and tile bedding foundations.",
      unit: "Per Ton / Per Load",
      features: ["Rich mineral composition", "Fine sieved texture", "Excellent masonry binder"]
    },
    {
      name: "Fly Ash Bricks",
      category: "bricks",
      desc: "Eco-friendly masonry bricks manufactured from industrial fly ash, cement, and sand. They offer superior heat insulation, uniform dimensions, and high strength.",
      unit: "Per 1000 Pieces",
      features: ["High thermal resistance", "Saves mortar costs (uniform size)", "High compressive strength"]
    },
    {
      name: "Traditional Red Clay Bricks",
      category: "bricks",
      desc: "Kiln-burnt solid red clay bricks. Sourced from premier local clay fields, they offer traditional load-bearing strength and structural durability.",
      unit: "Per 1000 Pieces",
      features: ["Eco-friendly organic clay", "High moisture resistance", "Classic load-bearing strength"]
    },
    {
      name: "Concrete Hollow Blocks",
      category: "bricks",
      desc: "High-strength precast concrete hollow blocks. Best for rapid construction of boundary walls, structural partitions, and commercial yards.",
      unit: "Per Piece",
      features: ["Rapid building pace", "Reduces structure weight", "Sound dampening design"]
    },
    {
      name: "High-Strength TMT Steel Bars",
      category: "steel",
      desc: "Thermo-mechanically treated reinforcement steel bars. Available in Fe 500/550 grades from leading mills, providing high tensile strength and seismic protection.",
      unit: "Per Ton",
      features: ["Fe 500 / 550 grade certified", "High corrosion resistance", "Excellent bendability & weldability"]
    },
    {
      name: "Premium OPC & PPC Cement",
      category: "steel",
      desc: "Portland Pozzolana (PPC) and Ordinary Portland (OPC Grade 53) cement bag supplies. We supply top national brands for high-strength foundations and brickwork.",
      unit: "Per 50kg Bag / Bulk Loads",
      features: ["OPC 53 & PPC available", "Rapid strength development", "Weather-tight protection packaging"]
    }
  ];

  const handleInquire = (materialName) => {
    navigate(`/contact?projectType=material&message=${encodeURIComponent(`I would like to request a quote for: ${materialName}. Tonnage / quantity needed: `)}`);
  };

  const filteredMaterials = activeCategory === 'all'
    ? materials
    : materials.filter(m => m.category === activeCategory);

  return (
    <div>
      {/* Page Header */}
      <section className="section section-dark" style={{ padding: '4rem 0', borderBottom: '4px solid var(--color-safety-orange)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ color: '#fff', fontSize: '2.5rem', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 800 }}>Building Materials</h1>
          <p style={{ color: '#cbd5e1', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            We supply high-grade sand, crushed blue metal aggregates, structural steel, bricks, and concrete blocks direct to site.
          </p>
        </div>
      </section>

      {/* Materials List */}
      <section className="section">
        <div className="container">

          {/* Category Filter bar */}
          <div className="filter-bar">
            <button
              className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All Materials
            </button>
            <button
              className={`filter-btn ${activeCategory === 'sand' ? 'active' : ''}`}
              onClick={() => setActiveCategory('sand')}
            >
              Sands & Aggregates
            </button>
            <button
              className={`filter-btn ${activeCategory === 'bricks' ? 'active' : ''}`}
              onClick={() => setActiveCategory('bricks')}
            >
              Bricks & Blocks
            </button>
            <button
              className={`filter-btn ${activeCategory === 'steel' ? 'active' : ''}`}
              onClick={() => setActiveCategory('steel')}
            >
              Steel & Cement
            </button>
          </div>

          {/* Grid display */}
          <div className="grid grid-3">
            {filteredMaterials.map((mat, idx) => (
              <div key={idx} className="service-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
                <span
                  style={{
                    alignSelf: 'flex-start',
                    backgroundColor: 'var(--color-concrete-base)',
                    color: 'var(--color-steel-blue)',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px',
                    marginBottom: '1rem',
                    letterSpacing: '0.5px'
                  }}
                >
                  {mat.category === 'sand' ? 'Sand & Stone' : mat.category === 'bricks' ? 'Brickwork' : 'Steel & Cement'}
                </span>

                <h3 style={{ fontSize: '1.2rem', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: 800 }}>
                  {mat.name}
                </h3>

                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1.25rem', flexGrow: 1 }}>
                  {mat.desc}
                </p>

                <div style={{ marginBottom: '1.25rem', background: 'var(--color-concrete-base)', padding: '0.6rem 1rem', borderRadius: '4px', borderLeft: '3px solid var(--color-safety-orange)' }}>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', fontWeight: 600, display: 'block' }}>SUPPLY METRIC</span>
                  <span style={{ fontWeight: 700, color: 'var(--color-charcoal-dark)', fontSize: '0.9rem' }}>{mat.unit}</span>
                </div>

                <ul style={{ borderTop: '1px solid var(--color-concrete-base)', paddingTop: '1rem', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {mat.features.map((feat, fIdx) => (
                    <li key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--color-charcoal-light)' }}>
                      <Check size={12} style={{ color: 'var(--color-success)', flexShrink: 0 }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleInquire(mat.name)}
                  className="btn btn-outline"
                  style={{ width: '100%', marginTop: 'auto' }}
                >
                  Request Material Quote
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Logistics & Delivery assurance */}
      <section className="section section-gray" style={{ borderTop: '1px solid var(--color-concrete-dark)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <Truck size={40} style={{ color: 'var(--color-safety-orange)', marginBottom: '1rem' }} />
          <h2 style={{ textTransform: 'uppercase', fontSize: '2rem', marginBottom: '1rem', fontWeight: 800 }}>Direct Haulage & Delivery Guarantees</h2>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '650px', margin: '0 auto 2rem auto' }}>
            We do not subcontract our material supply deliveries. GPR operates a direct fleet of blue-metal tipping lorries and payload tractors, ensuring sand, gravel, and steel are securely loaded and delivered precisely when your layout crew requires them.
          </p>
          <button onClick={() => navigate('/contact')} className="btn btn-primary">Book Materials Delivery</button>
        </div>
      </section>
    </div>
  );
}
