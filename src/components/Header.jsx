import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import GPRLogo from '../assets/GPR.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo-link" onClick={closeMenu}>
          <img src={GPRLogo} alt="GPR Logo" style={{ height: '48px', width: '48px', borderRadius: '50%', objectFit: 'cover' }} />
          <div className="logo-text">
            GPR
            <span>CONSTRUCTION</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
            onClick={closeMenu}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
            onClick={closeMenu}
          >
            About Us
          </NavLink>

          {/* Services Hoverable Dropdown */}
          <div className="nav-dropdown">
            <span className="nav-item dropdown-trigger">
              Services
              <ChevronDown size={14} style={{ marginLeft: '4px' }} />
            </span>
            <div className="dropdown-menu">
              <NavLink
                to="/construction-services"
                className={({ isActive }) => isActive ? 'dropdown-item active' : 'dropdown-item'}
                onClick={closeMenu}
              >
                Construction Services
              </NavLink>
              <NavLink
                to="/building-materials"
                className={({ isActive }) => isActive ? 'dropdown-item active' : 'dropdown-item'}
                onClick={closeMenu}
              >
                Building Materials
              </NavLink>
              <NavLink
                to="/vehicle-rental"
                className={({ isActive }) => isActive ? 'dropdown-item active' : 'dropdown-item'}
                onClick={closeMenu}
              >
                Earth Movers
              </NavLink>
            </div>
          </div>

          <NavLink
            to="/packages"
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
            onClick={closeMenu}
          >
            Packages
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
            onClick={closeMenu}
          >
            Projects
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
            onClick={closeMenu}
          >
            Contact
          </NavLink>

          {/* Mobile-only CTA */}
          <Link
            to="/contact"
            className="btn btn-primary mobile-only"
            onClick={closeMenu}
          >
            Get a Quote
          </Link>
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="header-cta">
          <a href="tel:+918778434867" className="btn btn-outline-white" style={{ display: 'flex', gap: '0.5rem', padding: '0.6rem 1.2rem' }}>
            <Phone size={16} />
            <span>Call Now</span>
          </a>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '0.6rem 1.2rem' }}>
            Get Quote
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="mobile-menu-btn"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
}
