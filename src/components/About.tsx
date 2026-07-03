import React from 'react';
import { Sparkles, Flame, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="section" style={{ background: 'linear-gradient(135deg, #1a0f0a 0%, #684128 100%)', borderBottom: '1px solid rgba(198, 134, 66, 0.08)' }}>
      <div className="container">
        <div className="grid-2 about-grid">
          {/* Left Column: Story & Info */}
          <div className="about-content-left fade-in-on-scroll visible">
            <span className="section-subtitle" style={{ letterSpacing: '0.15em', fontWeight: 600, color: '#e3a564', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'block' }}>
              OUR BRAND HERITAGE
            </span>
            <h2 className="about-headline" style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 600, color: '#ffffff', lineHeight: '1.2', marginBottom: '1.5rem' }}>
              Crafting Quality Furniture <br />
              <span style={{ fontStyle: 'italic', fontWeight: 400 }}>That Feels Like Home.</span>
            </h2>
            <p className="about-story-text" style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.85)', marginBottom: '1.25rem', lineHeight: '1.7' }}>
              Located on the <strong>Kalikavu Road in Kuttiyil, Wandoor, Kerala</strong>, <strong>Zain Sofas & Furniture</strong> 
              is a proud family-owned local workshop and showroom. Our core philosophy is simple: 
              provide high-quality, long-lasting furniture that brings comfort and warmth to your family.
            </p>
            <p className="about-story-text" style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.85)', marginBottom: '2rem', lineHeight: '1.7' }}>
              While our main focus is designing and manufacturing <strong>custom-made sofas and sectionals</strong> tailored to your preferred colors, 
              fabrics, and dimensions, we also craft a selection of household essentials. 
              We offer sturdy <strong>chairs, study tables, and teapoys</strong> built to complement your living spaces.
            </p>
            
            {/* Core Values Sub-list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1.5rem', marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ color: '#e3a564', marginTop: '3px' }}>
                  <Sparkles size={20} />
                </div>
                <div>
                  <h4 style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: 700 }}>Premium Fabric Collection</h4>
                  <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem', marginTop: '0.15rem' }}>Choose from over 150+ high-end velvets, textured cotton linens, and durable leatherettes to match your theme.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ color: '#e3a564', marginTop: '3px' }}>
                  <Flame size={20} />
                </div>
                <div>
                  <h4 style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: 700 }}>Tailored Craftsmanship</h4>
                  <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem', marginTop: '0.15rem' }}>Every sofa frame and wood profile is hand-joined by local carpenters who understand structural architecture.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ color: '#e3a564', marginTop: '3px' }}>
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: 700 }}>Local Trust & Delivery</h4>
                  <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem', marginTop: '0.15rem' }}>A neighborhood business built on trust, offering safe home delivery straight to your room anywhere in Kerala.</p>
                </div>
              </div>
            </div>

            {/* Performance Stats */}
            <div className="about-stats" style={{ display: 'flex', gap: '1.5rem', borderTop: '1px solid rgba(198, 134, 66, 0.2)', paddingTop: '1.5rem', flexWrap: 'wrap' }}>
              <div className="stat-item">
                <span className="stat-number" style={{ fontSize: '1.75rem', fontWeight: 800, color: '#e3a564', display: 'block' }}>10+</span>
                <span className="stat-label" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>Years of Trust</span>
              </div>
              <div className="stat-item">
                <span className="stat-number" style={{ fontSize: '1.75rem', fontWeight: 800, color: '#e3a564', display: 'block' }}>1000+</span>
                <span className="stat-label" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>Happy Homes</span>
              </div>
              <div className="stat-item">
                <span className="stat-number" style={{ fontSize: '1.75rem', fontWeight: 800, color: '#e3a564', display: 'block' }}>100%</span>
                <span className="stat-label" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>Custom Built</span>
              </div>
            </div>
          </div>

          {/* Right Column: Showroom Poster Frame */}
          <div className="about-image-right fade-in-on-scroll visible delay-2" style={{ display: 'flex', justifyContent: 'center' }}>
            <div 
              className="about-poster-frame" 
              style={{ 
                border: '1px solid rgba(198, 134, 66, 0.3)', 
                padding: '0.75rem', 
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-md)',
                maxWidth: '100%'
              }}
            >
              <img 
                src="/images/poster.jpg" 
                alt="Zain Sofas & Furniture - Showroom Poster" 
                className="about-poster-img"
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  borderRadius: 'var(--radius-sm)',
                  display: 'block'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
