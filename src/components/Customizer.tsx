import React, { useState } from 'react';
import { Palette, MessageSquare } from 'lucide-react';

interface ColorOption {
  name: string;
  color: string; // CSS background color
  image: string;
  desc: string;
}

export const Customizer: React.FC = () => {
  const options: ColorOption[] = [
    {
      name: 'Imperial Tan Leatherette',
      color: '#C68642',
      image: '/images/sofa_tan_leather.png',
      desc: 'Luxurious glossy leatherette with classic tufting, offering an executive presence.',
    },
    {
      name: 'Classic Beige Linen',
      color: '#EADBC8',
      image: '/images/sofa_beige.png',
      desc: 'Soft, stain-resistant textured linen weave providing a warm, family-oriented comfort.',
    },
    {
      name: 'Velvet Royal Red & Blue',
      color: '#800020',
      image: '/images/showroom_sofa.jpg',
      desc: 'Plush velvet dual-tone insertions for high-end formal hosting and striking aesthetics.',
    },
    {
      name: 'Charcoal Grey & Oak',
      color: '#4A4A4A',
      image: '/images/sofa_grey_brown.png',
      desc: 'Woven slate-charcoal fabric set against oak-brown base profiles, matching contemporary tones.',
    },
  ];

  const [selectedColor, setSelectedColor] = useState(options[0]);

  const handleWhatsAppCustomInquiry = () => {
    const phoneNumber = '919961734882';
    const message = encodeURIComponent(
      `Hi Zain Sofas & Furniture, I used your website's customizer and would like to inquire about ordering a sofa in the "${selectedColor.name}" finish. Please share details and availability.`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-bg)', borderBottom: '1px solid rgba(198, 134, 66, 0.08)' }}>
      <div className="container">

        {/* Section Header */}
        <div className="fade-in-on-scroll visible" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
            <div style={{ height: '1px', width: '40px', backgroundColor: 'var(--color-primary)', opacity: 0.4 }} />
            <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-primary)' }}>UPHOLSTERY SELECTION</span>
            <div style={{ height: '1px', width: '40px', backgroundColor: 'var(--color-primary)', opacity: 0.4 }} />
          </div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.25rem', fontWeight: 500, color: 'var(--color-dark)', margin: '0 0 0.75rem 0', lineHeight: 1.15 }}>
            Choose Your Fabric &amp; Finish
          </h2>
          <p style={{ fontSize: '0.88rem', color: 'var(--color-dark-muted)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.65 }}>
            Every sofa we build can be upholstered in your preferred fabric. Select a finish below to preview how it looks — then inquire directly on WhatsApp.
          </p>
        </div>


        <div className="customizer-root fade-in-on-scroll visible delay-1" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem', alignItems: 'center' }}>
          {/* Left Side: Display */}
          <div className="customizer-display" style={{ background: 'var(--color-bg-alt)', padding: '3rem 2rem', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(198, 134, 66, 0.08)', minHeight: '350px' }}>
            <img
              src={selectedColor.image}
              alt={selectedColor.name}
              className="customizer-sofa-img"
              style={{ width: '100%', height: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.06))' }}
            />
          </div>

          {/* Right Side: Control swatches */}
          <div className="customizer-options" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)' }}>
              <Palette size={20} />
              <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Interactive Customizer
              </span>
            </div>
            
            <h3 className="customizer-title" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 600, color: 'var(--color-dark)' }}>
              {selectedColor.name}
            </h3>
            
            <p className="customizer-text" style={{ fontSize: '0.92rem', color: 'var(--color-dark-muted)', lineHeight: '1.6' }}>
              {selectedColor.desc}
            </p>

            <div>
              <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-dark)', display: 'block', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Select Fabric Color Option:
              </span>
              <div className="swatch-group" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedColor(option)}
                    className={`swatch-btn ${selectedColor.name === option.name ? 'active' : ''}`}
                    style={{ 
                      width: '32px', 
                      height: '32px', 
                      borderRadius: '50%', 
                      backgroundColor: option.color,
                      border: '2px solid var(--color-bg)',
                      outline: selectedColor.name === option.name ? '2px solid var(--color-primary)' : '1px solid rgba(198, 134, 66, 0.2)',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease'
                    }}
                    aria-label={`Select ${option.name}`}
                    title={option.name}
                  />
                ))}
              </div>
            </div>

            <p className="customizer-text" style={{ fontSize: '0.82rem', fontStyle: 'italic', color: 'var(--color-dark-muted)' }}>
              *Note: Any sectional model in our catalog can be customized in your preferred upholstery.
            </p>

            <div style={{ marginTop: '1rem' }}>
              <button
                onClick={handleWhatsAppCustomInquiry}
                className="btn btn-primary"
                style={{ background: 'var(--color-primary)', border: 'none', display: 'inline-flex', gap: '0.5rem', alignItems: 'center', padding: '0.75rem 1.5rem', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.05em' }}
              >
                <MessageSquare size={18} />
                <span>INQUIRE THIS FINISH</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Customizer;
