import React from 'react';

interface HeroProps {
  onBrowseClick: () => void;
  onVisitClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBrowseClick, onVisitClick }) => {
  const heroBackground = 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80';

  return (
    <header 
      id="home" 
      className="hero-root-dream" 
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#ffffff',
        padding: '6rem 2rem 0 2rem', // Top padding prevents overlapping with fixed navbar
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '850px', width: '100%', margin: '0 auto', zIndex: 10 }}>
        {/* Small Location Label */}
        <span 
          style={{ 
            fontSize: '0.8rem', 
            fontWeight: 700, 
            letterSpacing: '0.22em', 
            color: 'var(--color-primary)', 
            textTransform: 'uppercase', 
            marginBottom: '0.75rem',
            display: 'block' 
          }}
        >
          KUTTIYIL, WANDOOR, KERALA
        </span>

        {/* Main Brand Title */}
        <h1 
          style={{ 
            fontFamily: 'var(--font-serif)', 
            fontWeight: 600, 
            fontSize: '4.5rem', 
            lineHeight: '1.1',
            color: '#ffffff', 
            marginBottom: '1rem',
            textShadow: '0 4px 15px rgba(0,0,0,0.25)'
          }}
          className="hero-brand-title"
        >
          Zain Sofas & Furniture
        </h1>

        {/* Slogan Subtitle */}
        <h2 
          style={{ 
            fontFamily: 'var(--font-family)',
            fontSize: '1.35rem', 
            fontWeight: 500, 
            letterSpacing: '0.08em', 
            color: '#ffffff',
            opacity: 0.95,
            marginBottom: '1.5rem'
          }}
        >
          Furniture That Feels Like Home.
        </h2>

        {/* Narrative Description */}
        <p 
          style={{ 
            fontSize: '0.98rem', 
            color: '#e5e5e5', 
            maxWidth: '640px', 
            margin: '0 auto 2.5rem auto', 
            lineHeight: '1.6',
            fontWeight: 400
          }}
        >
          Handcrafted custom sofas, sectionals, and teapoys tailored to your preferred colors, fabrics, and dimensions. 
          Experience premium seasoned teakwood joinery and custom configurations hand-built by local Wandoor artisans.
        </p>

        {/* Action button row */}
        <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={onBrowseClick}
            style={{
              backgroundColor: 'var(--color-primary)',
              color: '#ffffff',
              border: 'none',
              padding: '0.95rem 2.25rem',
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              borderRadius: 'var(--radius-sm)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
              boxShadow: '0 4px 12px rgba(198, 134, 66, 0.25)'
            }}
            className="btn-dream-solid-hero"
          >
            BROWSE COLLECTION
          </button>
          
          <button
            onClick={onVisitClick}
            style={{
              backgroundColor: 'transparent',
              color: '#ffffff',
              border: '2px solid #ffffff',
              padding: '0.95rem 2.25rem',
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              borderRadius: 'var(--radius-sm)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textTransform: 'uppercase'
            }}
            className="btn-dream-outline-hero"
          >
            VISIT SHOWROOM
          </button>
        </div>
      </div>
    </header>
  );
};
export default Hero;
