import React from 'react';

export const StepTwoSection: React.FC = () => {
  const yellowSofaBg = 'https://images.unsplash.com/photo-1550254478-ead40cd825c0?auto=format&fit=crop&w=1000&q=80';

  return (
    <section 
      style={{ 
        backgroundColor: '#4ad5b2', 
        color: '#151515', 
        padding: '5rem 0 0 0', 
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ maxWidth: '800px' }}>
        {/* Big Number 2 */}
        <span 
          style={{ 
            fontSize: '4.5rem', 
            fontWeight: 800, 
            color: '#151515', 
            display: 'block',
            lineHeight: 1
          }}
        >
          2
        </span>

        {/* Title */}
        <h3 
          style={{ 
            fontFamily: 'var(--font-family)', 
            fontWeight: 800, 
            fontSize: '2.25rem', 
            letterSpacing: '0.1em', 
            color: '#151515', 
            textTransform: 'uppercase',
            marginBottom: '1rem',
            marginTop: '0.5rem'
          }}
        >
          SELECT YOUR SIZE
        </h3>

        {/* Description */}
        <p 
          style={{ 
            fontSize: '0.92rem', 
            color: '#151515', 
            lineHeight: '1.8',
            fontWeight: 600,
            maxWidth: '520px',
            margin: '0 auto 4rem auto'
          }}
        >
          Fit even the toughest of floorplans and everyone in the family. 
          With countless configurations and limitless sizing options you can 
          have a fit that's just right for you.
        </p>

        {/* Yellow Sofa crop preview */}
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', overflow: 'hidden' }}>
          <img 
            src={yellowSofaBg} 
            alt="Custom yellow L-shaped sectional couch configuration" 
            style={{ 
              width: '85%', 
              height: '300px', 
              objectFit: 'cover', 
              borderRadius: '20px 20px 0 0',
              boxShadow: '0 -8px 30px rgba(0,0,0,0.15)',
              display: 'block'
            }}
          />
        </div>
      </div>
    </section>
  );
};
export default StepTwoSection;
