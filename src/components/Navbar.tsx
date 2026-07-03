import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onLinkClick: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onLinkClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', id: 'home' },
    { label: 'COLLECTION', id: 'collection' },
    { label: 'ABOUT US', id: 'about' },
    { label: 'GALLERY', id: 'gallery' },
    { label: 'VISIT US', id: 'visit' }
  ];

  const handleNavClick = (id: string) => {
    onLinkClick(id);
    setIsMobileMenuOpen(false);
  };

  const handleWhatsAppInquiry = () => {
    const phoneNumber = '919961734882';
    const message = encodeURIComponent("Hi Zain Sofas & Furniture, I am visiting your website and want to inquire about custom building a furniture model.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      <nav className={`navbar-root ${isScrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}>
        {/* Thin Gold Top Announcement Banner */}
        <div 
          className="navbar-promo-banner"
          style={{
            width: '100%',
            backgroundColor: 'var(--color-primary)',
            color: 'var(--color-white)',
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            padding: isScrolled ? '0px' : '0.45rem 1rem',
            textAlign: 'center',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
            height: isScrolled ? '0px' : 'auto',
            opacity: isScrolled ? 0 : 1,
            overflow: 'hidden',
            whiteSpace: 'nowrap'
          }}
        >
          <span>DELIVERY ACROSS KERALA</span>
          <span className="promo-extra" style={{ opacity: 0.4, margin: '0 0.8rem' }}>|</span>
          <span className="promo-extra">CUSTOMIZE SOFAS LIKE ANYTHING</span>
          <span className="promo-extra" style={{ opacity: 0.4, margin: '0 0.8rem' }}>|</span>
          <span className="promo-extra">EXPERT LOCAL CRAFTSMANSHIP</span>
        </div>

        <div className="navbar-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 2rem' }}>
          {/* Logo */}
          <div className="navbar-logo-container" onClick={() => handleNavClick('home')} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <img src="/images/logo.png" alt="Zain Sofas Logo" className="navbar-logo-img" />
            <div className="navbar-logo-text">
              <span className="navbar-brand-name" style={{ color: 'var(--color-dark)', fontWeight: 800, fontSize: '1.3rem', letterSpacing: '0.05em' }}>ZAIN</span>
              <span className="navbar-brand-sub" style={{ color: 'var(--color-dark-muted)', fontSize: '0.6rem', letterSpacing: '0.15em', display: 'block' }}>SOFAS & FURNITURE</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <ul className="navbar-menu-desktop" style={{ display: 'flex', listStyle: 'none', gap: '2rem', margin: 0, padding: 0 }}>
            {navLinks.map((link) => (
              <li key={link.id} className="navbar-item">
                <button
                  onClick={() => handleNavClick(link.id)}
                  className={`navbar-link-btn ${activeSection === link.id ? 'active' : ''}`}
                  style={{ textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-dark)', border: 'none', background: 'none', cursor: 'pointer' }}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* WhatsApp Inquire Button (Desktop) */}
          <div className="navbar-actions-desktop">
            <button
              onClick={handleWhatsAppInquiry}
              className="btn-dream-nav"
              style={{
                backgroundColor: 'transparent',
                border: '1px solid var(--color-primary)',
                color: 'var(--color-primary)',
                padding: '0.55rem 1.4rem',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                borderRadius: 'var(--radius-sm)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase'
              }}
            >
              INQUIRE NOW
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="navbar-toggle-mobile"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            style={{ color: 'var(--color-dark)', border: 'none', background: 'none', cursor: 'pointer' }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div className={`navbar-drawer-mobile ${isMobileMenuOpen ? 'open' : ''}`} style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="drawer-header">
          <div className="navbar-logo-container">
            <img src="/images/logo.png" alt="Zain Sofas Logo" className="navbar-logo-img" />
            <div className="navbar-logo-text">
              <span className="navbar-brand-name" style={{ color: 'var(--color-dark)' }}>ZAIN</span>
              <span className="navbar-brand-sub" style={{ color: 'var(--color-dark-muted)' }}>SOFAS & FURNITURE</span>
            </div>
          </div>
          <button className="drawer-close" onClick={() => setIsMobileMenuOpen(false)} style={{ color: 'var(--color-dark)', border: 'none', background: 'none' }}>
            <X size={24} />
          </button>
        </div>
        <ul className="drawer-links">
          {navLinks.map((link) => (
            <li key={link.id} className="drawer-item">
              <button
                onClick={() => handleNavClick(link.id)}
                className={`drawer-link-btn ${activeSection === link.id ? 'active' : ''}`}
                style={{ textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-dark)', border: 'none', background: 'none' }}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="drawer-actions" style={{ marginTop: '2rem' }}>
          <button
            onClick={handleWhatsAppInquiry}
            className="btn btn-primary w-full justify-center"
            style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}
          >
            <MessageSquare size={18} />
            <span>INQUIRE ON WHATSAPP</span>
          </button>
        </div>
      </div>
      <div
        className={`navbar-overlay-mobile ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};
export default Navbar;
