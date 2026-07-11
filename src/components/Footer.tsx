import React from 'react';
import { MessageSquare, Phone, MapPin, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FooterProps {
  onLinkClick: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onLinkClick }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-root">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Logo & Slogan */}
          <div className="footer-brand-col">
            <div className="footer-logo-box">
              <img src="/images/logo.png" alt="Zain Sofas Logo" className="footer-logo-img" />
              <div>
                <h3 className="footer-brand-title">ZAIN</h3>
                <span className="footer-brand-sub">SOFAS & FURNITURE</span>
              </div>
            </div>
            <p className="footer-slogan">
              Furniture That Feels Like Home. Premium quality sofas custom-made for your home.
            </p>
            <div className="footer-socials">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link-btn" aria-label="Facebook">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 2.5-5.751 5.8-5.751 1.58 0 3.224.282 3.224.282v3.543h-1.81c-2.026 0-2.657 1.258-2.657 2.546v1.96h3.993l-.639 3.667h-3.354v7.98h-4.8z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link-btn" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://wa.me/919961734882" target="_blank" rel="noopener noreferrer" className="social-link-btn" aria-label="WhatsApp">
                <MessageSquare size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item">
                <button onClick={() => onLinkClick('home')} className="footer-link-btn-text">
                  Home
                </button>
              </li>
              <li className="footer-link-item">
                <button onClick={() => onLinkClick('collection')} className="footer-link-btn-text">
                  Collection
                </button>
              </li>
              <li className="footer-link-item">
                <button onClick={() => onLinkClick('about')} className="footer-link-btn-text">
                  About Us
                </button>
              </li>
              <li className="footer-link-item">
                <button onClick={() => onLinkClick('gallery')} className="footer-link-btn-text">
                  Gallery
                </button>
              </li>
              <li className="footer-link-item">
                <button onClick={() => onLinkClick('visit')} className="footer-link-btn-text">
                  Visit Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="footer-col-title">Contact Us</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <MapPin size={18} />
                <span>Kuttiyil, Kalikavu Road, Wandoor, Kerala 679328</span>
              </li>
              <li className="footer-contact-item">
                <Phone size={18} />
                <a href="tel:+919961734882" style={{ color: 'inherit' }}>
                  +91 99617 34882
                </a>
              </li>
              <li className="footer-contact-item">
                <Truck size={18} />
                <span>Home Delivery Available across all districts of Kerala</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom-bar">
          <p className="footer-copy">
            &copy; {currentYear} Zain Sofas & Furniture. All rights reserved.
          </p>
          <p className="footer-credits" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            Designed for <Link to="/">Zain Furniture</Link>
            <span style={{ opacity: 0.3 }}>|</span>
            <Link to="/admin" style={{ color: 'inherit', display: 'flex', alignItems: 'center' }} title="Admin Login">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};
