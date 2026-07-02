import React from 'react';
import { MapPin, Phone, Clock, Truck, Navigation } from 'lucide-react';

export const VisitUs: React.FC = () => {
  const directionsUrl = 'https://maps.google.com/?q=Zain+Sofas+and+Furniture+Kalikavu+Road+Wandoor+Kerala';
  const mapEmbedUrl = 'https://maps.google.com/maps?q=Zain%20Sofas%20%26%20Furniture,%20Kalikavu%20Road,%20Wandoor,%20Kerala&t=&z=16&ie=UTF8&iwloc=&output=embed';

  return (
    <section id="visit" className="section" style={{ backgroundColor: '#EAE0D3', borderBottom: '1px solid rgba(198, 134, 66, 0.08)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header fade-in-on-scroll visible" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-subtitle" style={{ letterSpacing: '0.15em', fontWeight: 600, color: 'var(--color-primary)' }}>EXPERIENCE THE COMFORT</span>
          <h2 className="section-title" style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 600, color: '#1A120E', marginTop: '0.5rem' }}>
            Visit Our Showroom
          </h2>
        </div>

        <div className="visit-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '5rem', alignItems: 'center' }}>
          {/* Left Side: Contact details */}
          <div className="visit-info-left fade-in-on-scroll visible">
            <p className="visit-description" style={{ fontSize: '0.95rem', color: '#6B5B4F', marginBottom: '2rem', lineHeight: '1.7' }}>
              Experience the luxury and comfort of our custom sofa collections firsthand. 
              Step into our showroom in Kuttiyil, Wandoor, to browse our designs, discuss custom requirements, 
              and feel the texture of our premium upholstery fabrics.
            </p>

            <ul className="contact-details-list" style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <li className="contact-item" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div className="contact-icon-box" style={{ color: 'var(--color-primary)', marginTop: '4px' }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="contact-item-title" style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1A120E', marginBottom: '0.2rem' }}>Our Address</h4>
                  <p className="contact-item-value" style={{ fontSize: '0.88rem', color: '#6B5B4F', lineHeight: '1.5' }}>
                    Zain Sofas & Furniture, Kuttiyil,<br />
                    Kalikavu Road, Wandoor, Malappuram District,<br />
                    Kerala, India - 679328
                  </p>
                </div>
              </li>

              <li className="contact-item" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div className="contact-icon-box" style={{ color: 'var(--color-primary)', marginTop: '4px' }}>
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="contact-item-title" style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1A120E', marginBottom: '0.2rem' }}>Phone Number</h4>
                  <a href="tel:+919961734882" className="contact-item-value" style={{ fontSize: '0.88rem', color: 'var(--color-primary)', fontWeight: 600 }}>
                    +91 99617 34882
                  </a>
                </div>
              </li>

              <li className="contact-item" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div className="contact-icon-box" style={{ color: 'var(--color-primary)', marginTop: '4px' }}>
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="contact-item-title" style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1A120E', marginBottom: '0.2rem' }}>Business Hours</h4>
                  <p className="contact-item-value" style={{ fontSize: '0.88rem', color: '#6B5B4F' }}>
                    Monday - Sunday: 9:30 AM - 8:30 PM
                  </p>
                </div>
              </li>

              <li className="contact-item" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div className="contact-icon-box" style={{ color: 'var(--color-primary)', marginTop: '4px' }}>
                  <Truck size={20} />
                </div>
                <div>
                  <h4 className="contact-item-title" style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1A120E', marginBottom: '0.2rem' }}>Home Delivery</h4>
                  <p className="contact-item-value" style={{ fontSize: '0.88rem', color: '#6B5B4F' }}>
                    Safe delivery available directly from our workshop to any location in Kerala.
                  </p>
                </div>
              </li>
            </ul>

            <div>
              <a 
                href={directionsUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-dream-solid"
                style={{ display: 'inline-flex', gap: '0.5rem', alignItems: 'center' }}
              >
                <Navigation size={16} />
                <span>GET DIRECTIONS</span>
              </a>
            </div>
          </div>

          {/* Right Side: Map Embed */}
          <div className="visit-map-right fade-in-on-scroll visible delay-2" style={{ border: '1px solid rgba(198, 134, 66, 0.12)', padding: '0.75rem', borderRadius: 'var(--radius-md)', backgroundColor: '#ffffff', boxShadow: 'var(--shadow-md)' }}>
            <iframe
              title="Google Map Location for Zain Sofas & Furniture"
              src={mapEmbedUrl}
              className="map-iframe"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ width: '100%', height: '400px', border: 'none', borderRadius: 'var(--radius-sm)', display: 'block' }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
export default VisitUs;
