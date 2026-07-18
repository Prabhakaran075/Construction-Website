import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          {/* Company Brief */}
          <div className="footer-info">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0, marginBottom: '1.25rem' }}>
              <Link to="/" className="logo-link">
                <img src="https://res.cloudinary.com/j2vormve/image/upload/v1784298491/GPR_clg45y.png" alt="GPR Logo" style={{ height: '48px', width: '48px', borderRadius: '50%', objectFit: 'cover' }} />
                <div className="logo-text">
                  GPR
                  <span>CONSTRUCTION</span>
                </div>
              </Link>

            </h3>
            <p>
              Your trusted partner for architectural planning, structural designing, sand & building material supply, and earth mover logistics/vehicle rentals.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              <a
                href="https://wa.me/918778434867"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', background: '#25d366' }}
              >
                WhatsApp Chat
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/construction-services">Construction Services</Link></li>
              <li><Link to="/building-materials">Building Materials</Link></li>
              <li><Link to="/vehicle-rental">Earth Movers / Rentals</Link></li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="footer-services">
            <h4>Core Offerings</h4>
            <ul>
              <li><Link to="/construction-services">Building Plan & Design</Link></li>
              <li><Link to="/construction-services">Structural Designing</Link></li>
              <li><Link to="/building-materials">M Sand & P Sand</Link></li>
              <li><Link to="/building-materials">Cement & TMT Steel</Link></li>
              <li><Link to="/vehicle-rental">JCB & Lorry Rental</Link></li>
            </ul>
          </div>

          {/* Contact & Areas */}
          <div className="footer-contact">
            <h4>Talk to Our Team</h4>
            <div className="footer-contact-item">
              <Phone size={18} />
              <div>
                <h4>Er. R. Mano <span style={{ fontSize: '0.65rem', color: '#cbd5e1', display: 'block' }}>B.E., EEE</span></h4>
                <a href="tel:8778434867">87784 34867</a>
              </div>
            </div>
            <div className="footer-contact-item">
              <Phone size={18} />
              <div>
                <h4>Er. R. Bharathkumar <span style={{ fontSize: '0.65rem', color: '#cbd5e1', display: 'block' }}>B.Tech., Civil</span></h4>
                <a href="tel:9688503306">96885 03306</a>
              </div>
            </div>

            <div className="footer-contact-item">
              <Mail size={18} />
              <div>
                <h4>Email Support</h4>
                <a href="mailto:gprconstruction2@gmail.com">gprconstruction2@gmail.com</a>
              </div>
            </div>
            <div style={{ marginTop: '1.5rem', borderTop: '1px solid var(--color-charcoal-light)', paddingTop: '1rem' }}>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-safety-orange)', fontWeight: 700, textTransform: 'uppercase' }}>
                Service Areas:
              </p>
              <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: 0 }}>
                Metro Area, West Logistics Corridor, and neighboring regional districts.
              </p>
            </div>
          </div>

        </div>

        {/* Footer Bottom copyright bar */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} GPR Construction & Transport. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
            <a href="tel:+918778434867">Emergency Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
