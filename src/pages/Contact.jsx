import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Upload, X, FileText, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const fileInputRef = useRef(null);

  // Form Fields State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [projectType, setProjectType] = useState('construction');
  const [selectedPackage, setSelectedPackage] = useState('none');
  const [builtUpArea, setBuiltUpArea] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');
  const [attachedFiles, setAttachedFiles] = useState([]);

  // Interaction States
  const [isDragActive, setIsDragActive] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Handle prefilled service type from query parameters
  useEffect(() => {
    const typeParam = searchParams.get('projectType');
    if (typeParam) {
      const decoded = decodeURIComponent(typeParam).toLowerCase();
      if (decoded.includes('residential') || decoded.includes('construction')) setProjectType('construction');
      else if (decoded.includes('planning') || decoded.includes('design')) setProjectType('planning');
      else if (decoded.includes('material')) setProjectType('material');
      else if (decoded.includes('rental') || decoded.includes('vehicle')) setProjectType('rental');
    }

    const packageParam = searchParams.get('package');
    if (packageParam) {
      setSelectedPackage(packageParam);
      setProjectType('construction');
    }

    const areaParam = searchParams.get('area');
    if (areaParam) {
      setBuiltUpArea(areaParam);
    }
  }, [searchParams]);

  // Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !location.trim()) {
      setErrorMessage("Please fill in all required fields (Name, Phone, and Location).");
      return;
    }

    // Simulate successful API call
    setErrorMessage('');
    setIsSubmitted(true);
  };

  // Drag and Drop files
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragActive(true);
    } else if (e.type === "dragleave") {
      setIsDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      addFilesToList(e.dataTransfer.files);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      addFilesToList(e.target.files);
    }
  };

  const addFilesToList = (fileList) => {
    const newFiles = Array.from(fileList).map(file => ({
      name: file.name,
      size: (file.size / (1024 * 1024)).toFixed(2) + ' MB' // MB size
    }));
    setAttachedFiles(prev => [...prev, ...newFiles]);
  };

  const removeFile = (indexToRemove) => {
    setAttachedFiles(prev => prev.filter((_, idx) => idx !== indexToRemove));
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      {/* Page Header */}
      <section className="section section-dark" style={{ padding: '4rem 0', borderBottom: '4px solid var(--color-safety-orange)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ color: '#fff', fontSize: '2.5rem', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 800 }}>Get a Quote / Contact</h1>
          <p style={{ color: '#cbd5e1', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            Submit your building drawings, site location, and transport parameters. Our estimators will contact you.
          </p>
        </div>
      </section>

      {/* Form and Contact details Grid */}
      <section className="section">
        <div className="container">
          <div className="contact-layout">

            {/* Sidebar Contact Info */}
            <div className="contact-card-sidebar">
              <h3>Office Details</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '2rem' }}>
                Have an urgent excavation or logistics load deadline? Call our logistics deck directly.
              </p>

              <div className="contact-info-list">
                {/* Contact Persons */}
                <div style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--color-charcoal-light)', paddingBottom: '1.5rem' }}>
                  <h4 style={{ color: 'var(--color-safety-orange)', textTransform: 'uppercase', fontSize: '0.9rem', marginBottom: '1rem', fontWeight: 700 }}>
                    Contact Persons
                  </h4>
                  <div className="contact-info-block">
                    <div className="contact-info-icon">
                      <Phone size={18} />
                    </div>
                    <div className="contact-info-detail">
                      <h4 style={{ color: 'white', fontWeight: 700 }}>Er. R. Mano</h4>
                      <p style={{ fontSize: '0.75rem', color: '#cbd5e1', margin: '2px 0' }}>B.E., EEE</p>
                      <a href="tel:8778434867" style={{ fontWeight: 700, color: 'white', fontSize: '0.95rem' }}>87784 34867</a>
                    </div>
                  </div>
                  <div className="contact-info-block" style={{ marginBottom: '1.25rem' }}>
                    <div className="contact-info-icon">
                      <Phone size={18} />
                    </div>
                    <div className="contact-info-detail">
                      <h4 style={{ color: 'white', fontWeight: 700 }}>Er. R. Bharathkumar</h4>
                      <p style={{ fontSize: '0.75rem', color: '#cbd5e1', margin: '2px 0' }}>B.Tech., Civil</p>
                      <a href="tel:9688503306" style={{ fontWeight: 700, color: 'white', fontSize: '0.95rem' }}>96885 03306</a>
                    </div>
                  </div>

                </div>

                <div className="contact-info-block">
                  <div className="contact-info-icon">
                    <Mail size={18} />
                  </div>
                  <div className="contact-info-detail">
                    <h4>Project Bid Submissions</h4>
                    <a href="mailto:bids@bannariammambuild.com" style={{ color: 'white' }}>bids@bannariammambuild.com</a>
                  </div>
                </div>

                <div className="contact-info-block">
                  <div className="contact-info-icon">
                    <MapPin size={18} />
                  </div>
                  <div className="contact-info-detail">
                    <h4>Bannari Amman HQ & Yard</h4>
                    <p style={{ color: 'white' }}>
                      123 Industrial Parkway, Suite A<br />
                      Metro City, MC 90210
                    </p>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="contact-hours">
                <h4>Operations Hours</h4>
                <ul>
                  <li><span>Monday - Friday</span> <span>6:00 AM - 6:00 PM</span></li>
                  <li><span>Saturday Logistics</span> <span>7:00 AM - 2:00 PM</span></li>
                  <li><span>Sunday Crews</span> <span>Emergency Only</span></li>
                </ul>
              </div>
            </div>

            {/* Form Section */}
            <div className="contact-form-card">
              <h3>Request an Estimate</h3>
              <p>Fill out this form and attach construction blueprints, sketches, or site directions. Fields marked with * are required.</p>

              {isSubmitted ? (
                <div className="form-success-alert" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                  <CheckCircle2 size={48} style={{ color: 'var(--color-success)' }} />
                  <h4 style={{ textTransform: 'uppercase', color: 'var(--color-success)', fontSize: '1.25rem', margin: 0 }}>Quote Request Submitted!</h4>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', margin: 0 }}>
                    Thank you, <strong>{name}</strong>. Our estimating manager will review your project details for <strong>{projectType.toUpperCase()}</strong> at <strong>{location}</strong> and call you at <strong>{phone}</strong> within 1 business day.
                  </p>
                  <button
                    onClick={() => { setIsSubmitted(false); setName(''); setPhone(''); setLocation(''); setMessage(''); setAttachedFiles([]); }}
                    className="btn btn-secondary"
                    style={{ marginTop: '1rem' }}
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} onDragEnter={handleDrag}>
                  {errorMessage && (
                    <div style={{ color: '#ef4444', backgroundColor: 'rgba(239, 68, 68, 0.1)', padding: '0.75rem', borderRadius: '4px', marginBottom: '1.5rem', fontWeight: 600 }}>
                      {errorMessage}
                    </div>
                  )}

                  <div className="form-grid">

                    {/* Name */}
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div className="form-group">
                      <label className="form-label">Phone Number *</label>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="e.g. +1 (555) 012-3456"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>

                    {/* Project Type */}
                    <div className="form-group">
                      <label className="form-label">Project / Service Type</label>
                      <select
                        className="form-control"
                        value={projectType}
                        onChange={(e) => setProjectType(e.target.value)}
                      >
                        <option value="planning">Building Planning & Design (2D/3D)</option>
                        <option value="construction">Construction & Renovation Work</option>
                        <option value="material">Building Materials Supply</option>
                        <option value="rental">Earth Movers & Vehicle Rental</option>
                      </select>
                    </div>

                    {/* Construction Package */}
                    <div className="form-group">
                      <label className="form-label">Select Construction Package</label>
                      <select
                        className="form-control"
                        value={selectedPackage}
                        onChange={(e) => setSelectedPackage(e.target.value)}
                      >
                        <option value="none">-- Select Package (Optional) --</option>
                        <option value="1999">Basic Plan (Rs. 1999/sq.ft)</option>
                        <option value="2199">Standard Plan (Rs. 2199/sq.ft)</option>
                        <option value="2299">Premium Plan (Rs. 2299/sq.ft)</option>
                        <option value="custom">Need Custom Quote</option>
                      </select>
                    </div>

                    {/* Built-up Area (Sq.Ft) */}
                    <div className="form-group">
                      <label className="form-label">Built-up Area (Sq.Ft)</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="e.g. 1500"
                        value={builtUpArea}
                        onChange={(e) => setBuiltUpArea(e.target.value)}
                      />
                    </div>

                    {/* Location */}
                    <div className="form-group">
                      <label className="form-label">Project / Delivery Location *</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="City, site address, or coordinates"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                      />
                    </div>

                    {/* Message */}
                    <div className="form-group form-group-full">
                      <label className="form-label">Project Description & Instructions</label>
                      <textarea
                        className="form-control"
                        placeholder="Describe scope, dimensions, tonnage requirements, or delivery schedules..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>

                    {/* File Attachment Drop Zone */}
                    <div className="form-group form-group-full">
                      <label className="form-label">Attach Site Plans / Drawings / Site Photos</label>

                      <div
                        className={`file-drop-zone ${isDragActive ? 'drag-active' : ''}`}
                        onDragEnter={handleDrag}
                        onDragOver={handleDrag}
                        onDragLeave={handleDrag}
                        onDrop={handleDrop}
                        onClick={triggerFileInput}
                      >
                        <input
                          ref={fileInputRef}
                          type="file"
                          className="file-drop-input"
                          multiple
                          onChange={handleFileChange}
                          accept=".pdf,.png,.jpg,.jpeg,.dwg"
                        />
                        <div className="file-drop-content">
                          <Upload size={32} />
                          <div>
                            <span className="file-drop-title">Click to upload</span> or drag and drop files here
                          </div>
                          <span style={{ fontSize: '0.75rem' }}>Supports PDF, PNG, JPG, or DWG drawings (Max 10MB per file)</span>
                        </div>
                      </div>

                      {/* Attached File Preview list */}
                      {attachedFiles.length > 0 && (
                        <div className="file-preview-list">
                          {attachedFiles.map((file, idx) => (
                            <div key={idx} className="file-preview-item">
                              <div className="file-preview-info">
                                <FileText size={16} style={{ color: 'var(--color-steel-blue)' }} />
                                <span>{file.name}</span>
                                <span style={{ color: 'var(--color-text-muted)', fontWeight: 'normal', fontSize: '0.75rem' }}>({file.size})</span>
                              </div>
                              <button
                                type="button"
                                className="file-preview-remove"
                                onClick={(e) => { e.stopPropagation(); removeFile(idx); }}
                                aria-label="Remove file"
                              >
                                <X size={14} />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                  </div>

                  <div className="form-submit-wrap">
                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                      Submit Estimate Request
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>

          {/* Integrated Mock Map Section */}
          <div className="map-container">
            <div className="map-placeholder">
              <MapPin size={40} />
              <h4>Bannari Amman HQ Location</h4>
              <p>123 Industrial Parkway, Suite A, Metro City, MC 90210</p>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', background: 'var(--color-concrete-light)', padding: '0.35rem 0.75rem', borderRadius: '4px', border: '1px solid var(--color-concrete-dark)', marginTop: '0.5rem', fontWeight: 600 }}>
                GPS COORDS: 40.7128° N, 74.0060° W
              </span>

              {/* Map grid lines simulation */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.1, pointerEvents: 'none', border: '1px solid currentColor' }}>
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <rect width="20" height="20" fill="none" />
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
