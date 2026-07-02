import React from 'react';

export const MasterpieceGrid: React.FC = () => {
  const blueSofaImg = '/images/showroom_sofa.jpg';
  const creamSofaImg = '/images/sofa_beige.png';

  const handleWhatsAppChat = (variant: string) => {
    const phoneNumber = '919961734882';
    const message = encodeURIComponent(`Hi Zain Sofas, I would like to consult on custom building a "${variant}" sectional sofa layout.`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section style={{ backgroundColor: 'var(--color-bg)', padding: '6rem 0' }}>
      <div className="container" style={{ maxWidth: '1100px', display: 'flex', flexDirection: 'column', gap: '6rem' }}>
        
        {/* Row 1: Kerala Crafted Masterpiece */}
        <div 
          className="masterpiece-row"
          style={{ 
            display: 'grid', 
            gridTemplateColumns: '1.1fr 0.9fr', 
            gap: '5rem', 
            alignItems: 'center' 
          }}
        >
          {/* Left Side: Sofa image */}
          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '4px', boxShadow: 'var(--shadow-md)', background: 'var(--color-bg-alt)' }}>
            <img 
              src={blueSofaImg} 
              alt="Zain Sofas luxury tufted blue/grey showroom sectional" 
              style={{ 
                width: '100%', 
                height: '380px', 
                objectFit: 'cover', 
                display: 'block' 
              }}
            />
          </div>

          {/* Right Side: Text & Actions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', alignItems: 'flex-start', textAlign: 'left' }}>
            <h3 
              style={{ 
                fontFamily: 'var(--font-family)', 
                fontWeight: 800, 
                fontSize: '2rem', 
                letterSpacing: '0.08em', 
                color: 'var(--color-dark)', 
                textTransform: 'uppercase',
                lineHeight: 1.15
              }}
            >
              KERALA CRAFTED <br />
              MASTER PIECE
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--color-dark-muted)', lineHeight: '1.7' }}>
              Custom sectionals are versatile Kerala furniture pieces offering flexible seating arrangements. 
              Personalize them with flirty tufting, lived-in nailheads, or polished wood stains. 
              Custom sectionals allow tailored configurations and materials, ensuring your living space reflects 
              your unique style and personality. Create a true Wandoor masterpiece that's one hundred percent you.
            </p>
            <button
              onClick={() => handleWhatsAppChat("Kerala Crafted Master Piece")}
              style={{
                backgroundColor: '#151515',
                color: '#ffffff',
                border: 'none',
                padding: '0.95rem 2rem',
                fontSize: '0.78rem',
                fontWeight: 800,
                letterSpacing: '0.12em',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                textTransform: 'uppercase',
                marginTop: '0.5rem'
              }}
              className="btn-block-action"
            >
              START DESIGNING YOUR SECTIONAL
            </button>
          </div>
        </div>

        {/* Row 2: Lifetime Warranty */}
        <div 
          className="masterpiece-row"
          style={{ 
            display: 'grid', 
            gridTemplateColumns: '0.9fr 1.1fr', 
            gap: '5rem', 
            alignItems: 'center' 
          }}
        >
          {/* Left Side: Text & Actions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', alignItems: 'flex-start', textAlign: 'left', order: 1 }}>
            <h3 
              style={{ 
                fontFamily: 'var(--font-family)', 
                fontWeight: 800, 
                fontSize: '2rem', 
                letterSpacing: '0.08em', 
                color: 'var(--color-dark)', 
                textTransform: 'uppercase',
                lineHeight: 1.15
              }}
            >
              LIFETIME <br />
              WARRANTY
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--color-dark-muted)', lineHeight: '1.7' }}>
              Master Craftsmanship and timeless elegance, backed by a lifetime warranty, 
              we've got you covered every step of the way. All structural joints constructed 
              from seasoned local teakwood hold a permanent guarantee. Get your custom made sofa today.
            </p>
            <button
              onClick={() => handleWhatsAppChat("Teakwood Lifetime Warranty")}
              style={{
                backgroundColor: '#151515',
                color: '#ffffff',
                border: 'none',
                padding: '0.95rem 2.5rem',
                fontSize: '0.78rem',
                fontWeight: 800,
                letterSpacing: '0.12em',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                textTransform: 'uppercase',
                marginTop: '0.5rem'
              }}
              className="btn-block-action"
            >
              LEARN MORE
            </button>
          </div>

          {/* Right Side: Cream Sofa image */}
          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '4px', boxShadow: 'var(--shadow-md)', background: 'var(--color-bg-alt)', order: 2 }}>
            <img 
              src={creamSofaImg} 
              alt="Zain Sofas luxury cream beige upholstery model" 
              style={{ 
                width: '100%', 
                height: '380px', 
                objectFit: 'contain', 
                display: 'block',
                padding: '2rem'
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
};
export default MasterpieceGrid;
