import React, { useState } from 'react';
import { Calendar, MapPin, Wrench, Eye, X, Image as ImageIcon } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  // Local state to track "Before/After" toggle for project IDs
  const [beforeAfterToggle, setBeforeAfterToggle] = useState({});

  const projects = [
    {
      id: "riverdale-home",
      category: "completed",
      title: "Riverdale Heights Custom Home",
      desc: "Full custom-home build from empty plot to keys-in-hand. This project involved excavating a steep slope, pouring reinforced concrete footings, structural timber framing, roofing, and premium external cedar siding.",
      location: "Riverdale Heights",
      duration: "8 Months",
      machinery: "12-ton Excavator, Concrete Pumper, Crane Truck",
      workType: "Excavation, Structural framing, Roofing, Siding",
      hasBeforeAfter: true,
      beforeLabel: "Bare Excavated Lot (Dec 2025)",
      afterLabel: "Completed 4-Bedroom Home (Aug 2026)",
      beforeSvg: (
        <svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', background: '#334155' }}>
          <rect x="0" y="0" width="400" height="250" fill="#334155" />
          <path d="M0 200 Q100 160 200 210 T400 190 L400 250 L0 250 Z" fill="#78350f" />
          <path d="M50 180 L110 180 L80 150 Z" stroke="#cbd5e1" strokeWidth="2" />
          <rect x="130" y="160" width="80" height="40" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4,4" />
          <line x1="170" y1="130" x2="170" y2="160" stroke="#f97316" strokeWidth="2" />
          <circle cx="170" cy="120" r="10" stroke="#f97316" strokeWidth="2" fill="#0f172a" />
          <text x="20" y="40" fill="#cbd5e1" fontSize="12" fontWeight="bold">PROJECT PHASE: GROUNDWORK</text>
        </svg>
      ),
      afterSvg: (
        <svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', background: '#1e293b' }}>
          <rect x="0" y="0" width="400" height="250" fill="#1e293b" />
          <path d="M0 210 Q200 210 400 210 L400 250 L0 250 Z" fill="#475569" />
          {/* Finished House */}
          <rect x="100" y="110" width="200" height="100" rx="4" fill="#0f172a" stroke="#0284c7" strokeWidth="3" />
          <path d="M80 110 L200 40 L320 110 Z" fill="#f97316" />
          <rect x="130" y="140" width="45" height="45" fill="#1e293b" rx="2" stroke="#cbd5e1" strokeWidth="2" />
          <rect x="225" y="140" width="45" height="70" fill="#cbd5e1" rx="2" />
          <text x="20" y="40" fill="#94a3b8" fontSize="12" fontWeight="bold">PROJECT PHASE: COMPLETED BUILD</text>
        </svg>
      )
    },
    {
      id: "oakridge-remodel",
      category: "renovation",
      title: "Oakridge Structural Remodel",
      desc: "Updating an aging residential layout by removing load-bearing timber partition walls, installing a 6-meter steel structural beam (RSJ) to support the roof load, and installing triple-pane structural glass panels facing the garden.",
      location: "Oakridge Suburbs",
      duration: "3 Months",
      machinery: "Flatbed Crane, Wall Props, Hydraulic Jacks",
      workType: "Structural engineering, Steel placement, Wall removal",
      hasBeforeAfter: true,
      beforeLabel: "Original Partition Walls (Feb 2026)",
      afterLabel: "Open-Plan Living Layout (May 2026)",
      beforeSvg: (
        <svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', background: '#334155' }}>
          <rect x="40" y="40" width="320" height="170" fill="#0f172a" stroke="#94a3b8" strokeWidth="2" />
          {/* Wall partition grids */}
          <line x1="140" y1="40" x2="140" y2="210" stroke="#f97316" strokeWidth="4" />
          <line x1="260" y1="40" x2="260" y2="210" stroke="#f97316" strokeWidth="4" />
          <line x1="140" y1="120" x2="260" y2="120" stroke="#cbd5e1" strokeWidth="2" />
          <text x="20" y="30" fill="#cbd5e1" fontSize="12" fontWeight="bold">BEFORE: SEPARATED ROOMS</text>
        </svg>
      ),
      afterSvg: (
        <svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', background: '#1e293b' }}>
          <rect x="40" y="40" width="320" height="170" fill="#0f172a" stroke="#cbd5e1" strokeWidth="2" />
          {/* Steel overhead lintel */}
          <rect x="42" y="42" width="316" height="24" fill="#0284c7" />
          <text x="130" y="58" fill="white" fontSize="10" fontWeight="bold">6M STRUCTURAL STEEL BEAM</text>

          {/* Large windows */}
          <rect x="70" y="90" width="100" height="120" fill="none" stroke="#f97316" strokeWidth="2" />
          <rect x="230" y="90" width="100" height="120" fill="none" stroke="#f97316" strokeWidth="2" />
          <text x="20" y="30" fill="#94a3b8" fontSize="12" fontWeight="bold">AFTER: OPEN-PLAN INTEGRATED SPACE</text>
        </svg>
      )
    },
    {
      id: "downtown-foundation",
      category: "ongoing",
      title: "Commercial Slab & Foundations",
      desc: "Excavation and setting of a heavy commercial building foundation. This ongoing project requires detailed concrete formwork, steel grid tying, and coordinate leveling using high-precision surveying gear.",
      location: "Commercial Downtown",
      duration: "4 Weeks (Ongoing)",
      machinery: "Surveying equipment, concrete mixer fleet, vibrating screeds",
      workType: "Soil compacting, Concrete formwork, Steel rebar grid",
      hasBeforeAfter: false,
      graphicSvg: (
        <svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', background: '#1e293b' }}>
          <rect x="20" y="140" width="360" height="90" fill="#475569" stroke="#cbd5e1" strokeWidth="2" />
          <line x1="20" y1="170" x2="380" y2="170" stroke="#f97316" strokeWidth="2" />
          <line x1="20" y1="200" x2="380" y2="200" stroke="#f97316" strokeWidth="2" />
          <path d="M50 140 V230 M90 140 V230 M130 140 V230 M170 140 V230 M210 140 V230 M250 140 V230 M290 140 V230 M330 140 V230 M370 140 V230" stroke="#cbd5e1" strokeWidth="1" />
          {/* Level surveying equipment */}
          <line x1="200" y1="60" x2="170" y2="140" stroke="#e2e8f0" strokeWidth="3" />
          <line x1="200" y1="60" x2="230" y2="140" stroke="#e2e8f0" strokeWidth="3" />
          <circle cx="200" cy="50" r="12" fill="#f97316" />
          <text x="20" y="30" fill="#f97316" fontSize="12" fontWeight="bold">CONCRETE REINFORCING SLAB - ACTIVE</text>
        </svg>
      )
    },
    {
      id: "steel-logistics",
      category: "transport",
      title: "Structural Steel Haulage Corridor",
      desc: "Transport logistics for a commercial factory project. We loaded, routed, and safely delivered 120 tons of heavy structural steel portal frames from the port terminal using our long flatbeds and pilot escort vehicles.",
      location: "Port Terminal to Jobsite C",
      duration: "2 Weeks (Completed)",
      machinery: "26-Ton Tractor Unit, Extendable Flatbed Trailer, Escort Pilot",
      workType: "Permit securing, Route clearing, Heavy haulage, Escort sync",
      hasBeforeAfter: false,
      graphicSvg: (
        <svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', background: '#0f172a' }}>
          <line x1="0" y1="200" x2="400" y2="200" stroke="#cbd5e1" strokeWidth="3" />
          {/* Heavy logistics flatbed transport */}
          <rect x="40" y="140" width="220" height="45" rx="3" fill="#1e293b" stroke="#0284c7" strokeWidth="2" />
          <rect x="260" y="150" width="50" height="35" rx="3" fill="#f97316" />
          {/* Wheels */}
          <circle cx="70" cy="195" r="14" fill="#1e293b" stroke="#e2e8f0" strokeWidth="2" />
          <circle cx="110" cy="195" r="14" fill="#1e293b" stroke="#e2e8f0" strokeWidth="2" />
          <circle cx="210" cy="195" r="14" fill="#1e293b" stroke="#e2e8f0" strokeWidth="2" />
          <circle cx="250" cy="195" r="14" fill="#1e293b" stroke="#e2e8f0" strokeWidth="2" />
          <circle cx="285" cy="195" r="14" fill="#1e293b" stroke="#e2e8f0" strokeWidth="2" />
          {/* Steel beams cargo */}
          <rect x="50" y="105" width="200" height="15" fill="#94a3b8" />
          <rect x="60" y="122" width="180" height="15" fill="#64748b" />
          <text x="20" y="40" fill="#0284c7" fontSize="12" fontWeight="bold">HEAVY HAULAGE ROUTING ACTIVE</text>
        </svg>
      )
    }
  ];

  const handleFilter = (filter) => {
    setActiveFilter(filter);
  };

  const toggleBeforeAfter = (id) => {
    setBeforeAfterToggle(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div>
      {/* Page Header */}
      <section className="section section-dark" style={{ padding: '4rem 0', borderBottom: '4px solid var(--color-safety-orange)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '2.5rem', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 800 }}>Project Gallery</h1>
          <p style={{ color: '#cbd5e1', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            A look at our completed custom homes, ongoing foundations, renovations, and heavy material transport routes.
          </p>
        </div>
      </section>

      {/* Filter Buttons & Projects Grid */}
      <section className="section">
        <div className="container">

          {/* Category Filter Bar */}
          <div className="filter-bar">
            <button
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => handleFilter('all')}
            >
              All Projects
            </button>
            <button
              className={`filter-btn ${activeFilter === 'completed' ? 'active' : ''}`}
              onClick={() => handleFilter('completed')}
            >
              Completed Homes
            </button>
            <button
              className={`filter-btn ${activeFilter === 'renovation' ? 'active' : ''}`}
              onClick={() => handleFilter('renovation')}
            >
              Renovations
            </button>
            <button
              className={`filter-btn ${activeFilter === 'ongoing' ? 'active' : ''}`}
              onClick={() => handleFilter('ongoing')}
            >
              Ongoing Builds
            </button>
            <button
              className={`filter-btn ${activeFilter === 'transport' ? 'active' : ''}`}
              onClick={() => handleFilter('transport')}
            >
              Logistics & Haulage
            </button>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-2">
            {filteredProjects.map((project) => {
              const isAfterActive = beforeAfterToggle[project.id];
              return (
                <div key={project.id} className="project-card">

                  {/* Before/After or regular graphic box */}
                  <div className="project-img-box" style={{ height: '300px' }}>
                    {project.hasBeforeAfter ? (
                      isAfterActive ? project.afterSvg : project.beforeSvg
                    ) : (
                      project.graphicSvg
                    )}

                    {/* Metadata Overlay on Hover */}
                    <div className="project-meta-overlay">
                      <span className="project-tag">
                        {project.category}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                        className="btn btn-primary"
                        style={{ padding: '0.4rem 0.8rem', fontSize: '0.75rem', display: 'flex', gap: '0.25rem', alignItems: 'center' }}
                      >
                        <Eye size={12} />
                        <span>View Details</span>
                      </button>
                    </div>

                    {/* Before/After Selector Float widget */}
                    {project.hasBeforeAfter && (
                      <div style={{ position: 'absolute', top: '1rem', right: '1rem', display: 'flex', gap: '0.5rem', zIndex: 10 }}>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleBeforeAfter(project.id);
                          }}
                          className="btn btn-secondary"
                          style={{ padding: '0.35rem 0.75rem', fontSize: '0.7rem', display: 'flex', gap: '0.25rem', alignItems: 'center', boxShadow: 'var(--shadow-sm)' }}
                        >
                          <ImageIcon size={12} />
                          <span>Show {isAfterActive ? 'Before' : 'After'}</span>
                        </button>
                        <span
                          style={{
                            backgroundColor: 'rgba(15, 23, 42, 0.9)',
                            color: isAfterActive ? 'var(--color-success)' : 'var(--color-safety-orange)',
                            padding: '0.35rem 0.75rem',
                            fontSize: '0.7rem',
                            fontWeight: 700,
                            borderRadius: '4px',
                            border: '1px solid var(--color-charcoal-light)'
                          }}
                        >
                          {isAfterActive ? 'AFTER' : 'BEFORE'}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Project Summary Text details */}
                  <div className="project-info">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                      <h3>{project.title}</h3>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-steel-blue)', textTransform: 'uppercase', background: 'var(--color-concrete-base)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                        {project.category}
                      </span>
                    </div>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1.25rem', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {project.desc}
                    </p>

                    {/* Metadata strip - Vertical Stack */}
                    <div style={{ borderTop: '1px solid var(--color-concrete-base)', paddingTop: '0.75rem', marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <MapPin size={14} style={{ color: 'var(--color-safety-orange)', flexShrink: 0 }} />
                        <strong style={{ minWidth: '80px', color: 'var(--color-charcoal-dark)', fontSize: '0.85rem' }}>Location:</strong>
                        <span style={{ color: 'var(--color-text-muted)' }}>{project.location}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Calendar size={14} style={{ color: 'var(--color-steel-blue)', flexShrink: 0 }} />
                        <strong style={{ minWidth: '80px', color: 'var(--color-charcoal-dark)', fontSize: '0.85rem' }}>Duration:</strong>
                        <span style={{ color: 'var(--color-text-muted)' }}>{project.duration}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Wrench size={14} style={{ color: 'var(--color-text-muted)', flexShrink: 0 }} />
                        <strong style={{ minWidth: '80px', color: 'var(--color-charcoal-dark)', fontSize: '0.85rem' }}>Scope:</strong>
                        <span style={{ color: 'var(--color-text-muted)' }}>{project.workType}</span>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Lightbox / Details Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content-wrap" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProject(null)} aria-label="Close modal">
              <X size={20} />
            </button>
            <div className="modal-body">

              {/* Media Block inside modal */}
              <div className="modal-media">
                {selectedProject.hasBeforeAfter ? (
                  beforeAfterToggle[selectedProject.id] ? selectedProject.afterSvg : selectedProject.beforeSvg
                ) : (
                  selectedProject.graphicSvg
                )}

                {/* Float toggle inside modal media */}
                {selectedProject.hasBeforeAfter && (
                  <div style={{ position: 'absolute', top: '1rem', right: '1rem', display: 'flex', gap: '0.5rem', zIndex: 10 }}>
                    <button
                      onClick={() => toggleBeforeAfter(selectedProject.id)}
                      className="btn btn-secondary"
                      style={{ padding: '0.35rem 0.75rem', fontSize: '0.7rem' }}
                    >
                      Show {beforeAfterToggle[selectedProject.id] ? 'Before' : 'After'}
                    </button>
                    <span style={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', color: 'white', padding: '0.35rem 0.75rem', fontSize: '0.7rem', fontWeight: 700, borderRadius: '4px' }}>
                      {beforeAfterToggle[selectedProject.id] ? 'AFTER STATE' : 'BEFORE STATE'}
                    </span>
                  </div>
                )}
              </div>

              {/* Info Block inside modal */}
              <div className="modal-info">
                <div>
                  <span className="modal-project-type">{selectedProject.category} Division</span>
                  <h2>{selectedProject.title}</h2>
                  <p className="modal-desc">{selectedProject.desc}</p>
                </div>

                <div className="modal-stats">
                  <div className="modal-stat-row">
                    Office Location: <span>{selectedProject.location}</span>
                  </div>
                  <div className="modal-stat-row">
                    Work Duration: <span>{selectedProject.duration}</span>
                  </div>
                  <div className="modal-stat-row">
                    Accredited Scope: <span>{selectedProject.workType}</span>
                  </div>
                  <div className="modal-stat-row">
                    Machinery Standard: <span style={{ textAlign: 'right', maxWidth: '180px', fontSize: '0.8rem' }}>{selectedProject.machinery}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
