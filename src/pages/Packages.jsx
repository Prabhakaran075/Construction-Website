import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Calculator, CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

export default function Packages() {
  const navigate = useNavigate();
  const [area, setArea] = useState(1500);
  const [selectedPlan, setSelectedPlan] = useState('1999');
  
  const plans = {
    '1999': {
      name: 'Basic Plan',
      price: 1999,
      tagline: 'Practical & budget-friendly residential builds with durable standards.',
      details: {
        cement: 'Ramco, Chettinad',
        bricks: 'Fly ash bricks',
        tmt: 'IS brand 550D grade steel',
        brickWork: 'M sand',
        plasteringWork: 'P sand',
        switches: 'GM Cuba brand',
        wires: 'Kundan',
        bathroomPipes: 'CPVC pipes',
        mainDoor: 'Teak wood frame & shutter',
        bedroomDoor: 'Flush door with laminate',
        bathroomDoor: 'PVC waterproof door',
        windows: 'Grill with UPVC sliding',
        floorTiles: 'Allowance: Rs. 45 / sq.ft',
        wallTiles: 'Allowance: Rs. 35 / sq.ft',
        bathroomFittings: 'Western closet & Indian closet options',
        lightings: 'Strulite LED fittings'
      }
    },
    '2199': {
      name: 'Standard Plan',
      price: 2199,
      tagline: 'Traditional red-brick strength with enhanced fittings and finishes.',
      details: {
        cement: 'Ramco',
        bricks: 'First-class Red brick',
        tmt: 'IS brand 550D grade steel',
        brickWork: 'M sand',
        plasteringWork: 'P sand',
        switches: 'GM modular series',
        wires: 'Kundan E FAB',
        bathroomPipes: 'CPVC pipes',
        mainDoor: 'Premium Teak wood',
        bedroomDoor: 'Flush door with wood veneer',
        bathroomDoor: 'PVC waterproof door',
        windows: 'Grill with UPVC sliding',
        floorTiles: 'Allowance: Rs. 50 / sq.ft',
        wallTiles: 'Allowance: Rs. 40 / sq.ft',
        bathroomFittings: 'Western closet & Indian closet options',
        lightings: 'Strulite brand'
      }
    },
    '2299': {
      name: 'Premium Plan',
      price: 2299,
      tagline: 'Luxury finishes, wirecut bricks, and top-tier JSW/Tata structural steel.',
      details: {
        cement: 'Ramco, Ultratech',
        bricks: 'Wirecut brick quality',
        tmt: 'JSW, Tata 550D grade steel',
        brickWork: 'M sand',
        plasteringWork: 'P sand',
        switches: 'GM premium modular',
        wires: 'Kundan, Finolex wires',
        bathroomPipes: 'CPVC pipes',
        mainDoor: 'Luxury solid Teak wood',
        bedroomDoor: 'Flush door with premium molding',
        bathroomDoor: 'PVC waterproof door',
        windows: 'Grill with UPVC sliding',
        floorTiles: 'Allowance: Rs. 60 / sq.ft',
        wallTiles: 'Allowance: Rs. 45 / sq.ft',
        bathroomFittings: 'Western closet & Indian closet options',
        lightings: 'Strulite, Philips LED fittings'
      }
    }
  };

  const handleCalculate = () => {
    const rate = plans[selectedPlan].price;
    const baseCost = area * rate;
    return {
      rate,
      baseCost,
      floorAllowance: area * (selectedPlan === '1999' ? 45 : selectedPlan === '2199' ? 50 : 60),
      wallAllowance: area * (selectedPlan === '1999' ? 35 : selectedPlan === '2199' ? 40 : 45),
    };
  };

  const calculation = handleCalculate();

  const handleInquiryRedirect = () => {
    navigate(`/contact?package=${selectedPlan}&area=${area}`);
  };

  // Specification items to compare
  const specItems = [
    { key: 'cement', label: 'Cement' },
    { key: 'bricks', label: 'Bricks Type' },
    { key: 'tmt', label: 'TMT Steel' },
    { key: 'brickWork', label: 'Brick Work Sand' },
    { key: 'plasteringWork', label: 'Plastering Sand' },
    { key: 'switches', label: 'Switches' },
    { key: 'wires', label: 'Wiring' },
    { key: 'bathroomPipes', label: 'Plumbing Pipes' },
    { key: 'mainDoor', label: 'Main Door' },
    { key: 'bedroomDoor', label: 'Bedroom Door' },
    { key: 'bathroomDoor', label: 'Bathroom Door' },
    { key: 'windows', label: 'Windows & Grills' },
    { key: 'floorTiles', label: 'Floor Tiles allowance' },
    { key: 'wallTiles', label: 'Wall Tiles allowance' },
    { key: 'bathroomFittings', label: 'Bathroom fittings' },
    { key: 'lightings', label: 'Lighting fixtures' }
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="section section-dark" style={{ padding: '4rem 0', borderBottom: '4px solid var(--color-safety-orange)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span style={{ color: 'var(--color-safety-orange)', textTransform: 'uppercase', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '2px', display: 'block', marginBottom: '0.5rem' }}>
            Transparent Pricing
          </span>
          <h1 style={{ color: '#fff', fontSize: '2.5rem', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 800 }}>
            Construction Packages
          </h1>
          <p style={{ color: '#cbd5e1', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            Select from our pre-approved material schedules. Clear pricing per square foot, backed by engineered construction.
          </p>
        </div>
      </section>

      {/* Packages High-level Grid */}
      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {Object.keys(plans).map((key) => {
              const plan = plans[key];
              const isActive = selectedPlan === key;
              return (
                <div 
                  key={key} 
                  className={`why-card plan-card ${isActive ? 'active' : ''} ${key === '2299' && !isActive ? 'premium-featured' : ''}`}
                  style={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '2rem'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-steel-blue)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        Plan Option
                      </span>
                      {isActive && (
                        <span style={{ background: 'var(--color-safety-orange)', color: 'white', fontSize: '0.65rem', padding: '0.2rem 0.5rem', borderRadius: '4px', fontWeight: 800 }}>
                          SELECTED FOR ESTIMATOR
                        </span>
                      )}
                    </div>
                    <h3 style={{ fontSize: '1.5rem', textTransform: 'uppercase', fontWeight: 800, marginBottom: '0.5rem' }}>
                      {plan.name}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', marginBottom: '1rem' }}>
                      <span style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-charcoal-dark)' }}>
                        Rs. {plan.price}
                      </span>
                      <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                        / sq.ft
                      </span>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem', minHeight: '45px' }}>
                      {plan.tagline}
                    </p>
                    
                    {/* Highlighted bullets */}
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: 600 }}>
                        <CheckCircle2 size={16} style={{ color: 'var(--color-success)', flexShrink: 0 }} />
                        <span>Cement: {plan.details.cement.split(',')[0]}</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: 600 }}>
                        <CheckCircle2 size={16} style={{ color: 'var(--color-success)', flexShrink: 0 }} />
                        <span>Bricks: {plan.details.bricks}</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: 600 }}>
                        <CheckCircle2 size={16} style={{ color: 'var(--color-success)', flexShrink: 0 }} />
                        <span>TMT Steel: {plan.details.tmt.split(' ')[0]} Brand</span>
                      </li>
                    </ul>
                  </div>

                  <button 
                    onClick={() => {
                      setSelectedPlan(key);
                      // Scroll to calculator
                      const calcElem = document.getElementById('budget-calculator');
                      if (calcElem) calcElem.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`btn ${isActive ? 'btn-primary' : 'btn-outline'}`}
                    style={{ width: '100%' }}
                  >
                    Select Plan & Estimate Cost
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cost Estimator Calculator Widget */}
      <section id="budget-calculator" className="section section-gray" style={{ borderTop: '1px solid var(--color-concrete-dark)', borderBottom: '1px solid var(--color-concrete-dark)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="section-title-wrap">
            <h2 className="section-title">Home Construction Budget Estimator</h2>
            <p>Input your built-up area and select a package to get a direct cost projection.</p>
          </div>

          <div style={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid var(--color-concrete-dark)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ padding: '2.5rem', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '2.5rem' }} className="grid-responsive-mobile">
              
              {/* Form Controls */}
              <div>
                <h4 style={{ textTransform: 'uppercase', marginBottom: '1.5rem', fontSize: '1rem', borderBottom: '2px solid var(--color-concrete-dark)', paddingBottom: '0.5rem' }}>
                  Step 1: Input Parameters
                </h4>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                    Select Plan Package:
                  </label>
                  <select 
                    value={selectedPlan} 
                    onChange={(e) => setSelectedPlan(e.target.value)}
                    style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-concrete-dark)', outline: 'none', fontWeight: 600 }}
                  >
                    <option value="1999">Basic Plan (Rs. 1999/sq.ft)</option>
                    <option value="2199">Standard Plan (Rs. 2199/sq.ft)</option>
                    <option value="2299">Premium Plan (Rs. 2299/sq.ft)</option>
                  </select>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <label style={{ fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase' }}>
                      Built-up Area (Sq.Ft):
                    </label>
                    <span style={{ fontWeight: 800, color: 'var(--color-safety-orange)' }}>
                      {area} sq.ft
                    </span>
                  </div>
                  <input 
                    type="range" 
                    min="500" 
                    max="5000" 
                    step="50"
                    value={area}
                    onChange={(e) => setArea(parseInt(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--color-safety-orange)', cursor: 'pointer' }}
                  />
                  <input 
                    type="number"
                    value={area}
                    onChange={(e) => setArea(Math.max(0, parseInt(e.target.value) || 0))}
                    style={{ width: '100%', padding: '0.5rem', marginTop: '0.75rem', borderRadius: '4px', border: '1px solid var(--color-concrete-dark)', fontWeight: 600 }}
                  />
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', background: '#fef3c7', padding: '1rem', borderRadius: '6px', border: '1px solid #fde68a' }}>
                  <AlertTriangle size={18} style={{ color: '#d97706', flexShrink: 0, marginTop: '2px' }} />
                  <p style={{ fontSize: '0.75rem', color: '#92400e', margin: 0, lineHeight: '1.4' }}>
                    <strong>Note:</strong> Estimates are based on plain site conditions. Foundation costs may vary based on soil test profiles (e.g. black cotton soil).
                  </p>
                </div>
              </div>

              {/* Calculation Output Panel */}
              <div style={{ backgroundColor: 'var(--color-charcoal-dark)', color: 'white', padding: '2.5rem', borderRadius: '6px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ textTransform: 'uppercase', marginBottom: '1.5rem', fontSize: '1rem', borderBottom: '1px solid var(--color-charcoal-light)', paddingBottom: '0.5rem', color: 'var(--color-safety-orange)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Calculator size={18} />
                    <span>Estimated Cost Summary</span>
                  </h4>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <span style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>
                      Selected Rate:
                    </span>
                    <span style={{ fontSize: '1.25rem', fontWeight: 700 }}>
                      Rs. {calculation.rate} / sq.ft
                    </span>
                  </div>

                  <div style={{ marginBottom: '2rem' }}>
                    <span style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>
                      Estimated Base Cost:
                    </span>
                    <strong style={{ fontSize: '2.25rem', color: 'var(--color-safety-orange)', fontFamily: 'var(--font-heading)' }}>
                      Rs. {calculation.baseCost.toLocaleString('en-IN')}
                    </strong>
                  </div>

                  <div style={{ borderTop: '1px solid var(--color-charcoal-light)', paddingTop: '1.25rem' }}>
                    <h5 style={{ textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '1px', marginBottom: '0.75rem', color: '#cbd5e1' }}>
                      Included Material Allowances:
                    </h5>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                      <span style={{ color: '#94a3b8' }}>Floor Tiles:</span>
                      <span style={{ fontWeight: 600 }}>Rs. {calculation.floorAllowance.toLocaleString('en-IN')}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                      <span style={{ color: '#94a3b8' }}>Wall Tiles:</span>
                      <span style={{ fontWeight: 600 }}>Rs. {calculation.wallAllowance.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={handleInquiryRedirect}
                  className="btn btn-primary"
                  style={{ width: '100%', marginTop: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                >
                  <span>Submit Estimate Quote</span>
                  <ArrowRight size={16} />
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Comparison Specifications Table */}
      <section className="section">
        <div className="container">
          <div className="section-title-wrap">
            <h2 className="section-title">Comparative Material Specifications</h2>
            <p>Compare standard parameters side-by-side to choose the right plan for your dream home.</p>
          </div>

          <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid var(--color-concrete-dark)', boxShadow: 'var(--shadow-sm)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '800px', backgroundColor: 'white' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--color-charcoal-dark)', color: 'white' }}>
                  <th style={{ padding: '1.25rem 1.5rem', textTransform: 'uppercase', fontSize: '0.85rem', fontWeight: 700 }}>
                    Item Parameter
                  </th>
                  <th style={{ padding: '1.25rem 1.5rem', textTransform: 'uppercase', fontSize: '0.85rem', fontWeight: 700 }}>
                    Basic Plan <br /><span style={{ fontSize: '0.75rem', fontWeight: 400, color: '#cbd5e1' }}>Rs. 1999/sq.ft</span>
                  </th>
                  <th style={{ padding: '1.25rem 1.5rem', textTransform: 'uppercase', fontSize: '0.85rem', fontWeight: 700 }}>
                    Standard Plan <br /><span style={{ fontSize: '0.75rem', fontWeight: 400, color: '#cbd5e1' }}>Rs. 2199/sq.ft</span>
                  </th>
                  <th style={{ padding: '1.25rem 1.5rem', textTransform: 'uppercase', fontSize: '0.85rem', fontWeight: 700 }}>
                    Premium Plan <br /><span style={{ fontSize: '0.75rem', fontWeight: 400, color: '#cbd5e1' }}>Rs. 2299/sq.ft</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {specItems.map((item, idx) => (
                  <tr 
                    key={item.key}
                    style={{ 
                      backgroundColor: idx % 2 === 0 ? 'white' : 'var(--color-concrete-base)',
                      borderBottom: '1px solid var(--color-concrete-dark)',
                      fontSize: '0.9rem'
                    }}
                  >
                    <td style={{ padding: '1rem 1.5rem', fontWeight: 700, color: 'var(--color-charcoal-dark)' }}>
                      {item.label}
                    </td>
                    <td style={{ padding: '1rem 1.5rem', color: 'var(--color-text-muted)' }}>
                      {plans['1999'].details[item.key]}
                    </td>
                    <td style={{ padding: '1rem 1.5rem', color: 'var(--color-text-muted)' }}>
                      {plans['2199'].details[item.key]}
                    </td>
                    <td style={{ padding: '1rem 1.5rem', color: 'var(--color-text-muted)', fontWeight: item.key === 'bricks' || item.key === 'tmt' ? 600 : 400 }}>
                      {plans['2299'].details[item.key]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: '2.5rem', display: 'flex', gap: '0.75rem', justifyContent: 'center', alignItems: 'center' }}>
            <ShieldCheck size={20} style={{ color: 'var(--color-success)' }} />
            <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
              All packages include certified structural design checks and standard municipal drawing plan submissions.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
