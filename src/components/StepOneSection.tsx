import React from 'react';

export const StepOneSection: React.FC = () => {
  const luxurySofaBg = 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80';

  return (
    <div style={{ width: '100%' }}>
      {/* Yellow How It Works Header Band */}
      <div 
        style={{ 
          backgroundColor: '#F7E6C4', 
          color: '#151515', 
          padding: '1.25rem 0', 
          textAlign: 'center', 
          letterSpacing: '0.2em', 
          fontWeight: 800,
          fontSize: '1.1rem',
          textTransform: 'uppercase',
          borderBottom: '1px solid rgba(198,134,66,0.1)'
        }}
      >
        HERE'S HOW IT WORKS
      </div>

      {/* Main Step 1 Details banner */}
      <div 
        style={{ 
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.85)), url(${luxurySofaBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '480px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '4rem 2rem'
        }}
      >
        <div style={{ maxWidth: '650px', margin: '0 auto' }}>
          {/* Big Number 1 */}
          <span 
            style={{ 
              fontSize: '4.5rem', 
              fontWeight: 800, 
              color: 'var(--color-dark)', 
              display: 'block',
              lineHeight: 1
            }}
          >
            1
          </span>

          {/* Title */}
          <h3 
            style={{ 
              fontFamily: 'var(--font-family)', 
              fontWeight: 800, 
              fontSize: '2.25rem', 
              letterSpacing: '0.1em', 
              color: 'var(--color-dark)', 
              textTransform: 'uppercase',
              marginBottom: '1rem',
              marginTop: '0.5rem'
            }}
          >
            DISCOVER YOUR STYLE
          </h3>

          {/* Description */}
          <p 
            style={{ 
              fontSize: '0.92rem', 
              color: 'var(--color-dark-muted)', 
              lineHeight: '1.8',
              fontWeight: 500,
              maxWidth: '520px',
              margin: '0 auto'
            }}
          >
            Start by exploring our designer curated collection of iconic styles. 
            Any style can be customized until it's simply perfect. Modern, romantic, 
            classic or daring... Dive in & start designing!
          </p>
        </div>
      </div>
    </div>
  );
};
export default StepOneSection;
