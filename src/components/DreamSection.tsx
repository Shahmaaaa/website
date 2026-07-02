import React from 'react';

export const DreamSection: React.FC = () => {
  return (
    <section 
      style={{ 
        backgroundColor: '#151515', 
        color: '#ffffff', 
        padding: '7rem 0 0 0', 
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}
    >
      <div className="container" style={{ maxWidth: '1100px' }}>
        {/* Title */}
        <h2 
          style={{ 
            fontFamily: 'var(--font-family)', 
            fontWeight: 800, 
            fontSize: '3.5rem', 
            letterSpacing: '0.08em', 
            color: '#ffffff', 
            textTransform: 'uppercase',
            marginBottom: '0.5rem',
            lineHeight: 1.1
          }}
        >
          DESIGN YOUR DREAM
        </h2>
        
        <h3 
          style={{ 
            fontSize: '1rem', 
            fontWeight: 700, 
            letterSpacing: '0.22em', 
            color: 'var(--color-mint)', 
            textTransform: 'uppercase', 
            marginBottom: '2rem' 
          }}
        >
          CUSTOM MADE SOFA, COUCH AND SLEEPER SOFA
        </h3>

        {/* Narrative Paragraph */}
        <p 
          style={{ 
            fontSize: '0.85rem', 
            color: '#bbbbbb', 
            maxWidth: '920px', 
            margin: '0 auto 4rem auto', 
            lineHeight: '1.8',
            textAlign: 'justify',
            hyphens: 'auto'
          }}
        >
          At Zain Sofas, we understand that finding the perfect piece of furniture to match your home can be a hassle. 
          That is why we developed our four-step custom furniture design process to give our customers the ability to 
          have their custom made sofa, sectional, sleeper sofa, bed, and more match their exact specifications. 
          We first allow you to choose a style, such as contemporary, classic, midcentury, or modern. Then, we have you 
          pick a size. No matter the floorplan, we can build the perfect Sofa or L-shape sectional for you. Our third step 
          has you decide on a fabric choose from cloth with durable and luxury qualities and an endless amount of colors 
          and fashionable designs. Lastly, we allow you to add a touch of personalization. Make the piece your own 
          from wood staining, tufting, and more. Shop with us for custom furniture design today!
        </p>

        {/* Circular Indicators Row */}
        <div 
          className="steps-circles-row"
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: '1.25rem', 
            marginBottom: '3rem',
            flexWrap: 'wrap'
          }}
        >
          {/* Step 1: Style */}
          <div 
            style={{ 
              width: '85px', 
              height: '85px', 
              borderRadius: '50%', 
              backgroundColor: '#f2cf49', 
              border: '4px solid #ffffff',
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center', 
              justifyContent: 'center',
              boxShadow: 'var(--shadow-sm)',
              color: '#151515'
            }}
          >
            <span style={{ fontSize: '0.62rem', fontWeight: 800, opacity: 0.8 }}>1</span>
            <span style={{ fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.05em' }}>STYLE</span>
          </div>

          {/* Step 2: Size */}
          <div 
            style={{ 
              width: '85px', 
              height: '85px', 
              borderRadius: '50%', 
              backgroundColor: 'var(--color-mint)', 
              border: '4px solid #ffffff',
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center', 
              justifyContent: 'center',
              boxShadow: 'var(--shadow-sm)',
              color: '#151515'
            }}
          >
            <span style={{ fontSize: '0.62rem', fontWeight: 800, opacity: 0.8 }}>2</span>
            <span style={{ fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.05em' }}>SIZE</span>
          </div>

          {/* Step 3: Fabric */}
          <div 
            style={{ 
              width: '85px', 
              height: '85px', 
              borderRadius: '50%', 
              backgroundColor: '#ded4c8', 
              border: '4px solid #ffffff',
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center', 
              justifyContent: 'center',
              boxShadow: 'var(--shadow-sm)',
              color: '#151515'
            }}
          >
            <span style={{ fontSize: '0.62rem', fontWeight: 800, opacity: 0.8 }}>3</span>
            <span style={{ fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.05em' }}>FABRIC</span>
          </div>

          {/* Step 4: Personalize */}
          <div 
            style={{ 
              width: '85px', 
              height: '85px', 
              borderRadius: '50%', 
              backgroundColor: '#ffffff', 
              border: '4px solid #ffffff',
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center', 
              justifyContent: 'center',
              boxShadow: 'var(--shadow-sm)',
              color: '#151515',
              outline: '1px solid rgba(0,0,0,0.1)'
            }}
          >
            <span style={{ fontSize: '0.62rem', fontWeight: 800, opacity: 0.8 }}>4</span>
            <span style={{ fontSize: '0.58rem', fontWeight: 800, letterSpacing: '0.02em', lineHeight: 1.1 }}>PERSONALIZE</span>
          </div>
        </div>

        {/* 4 Steps text */}
        <h4 
          style={{ 
            fontSize: '1.25rem', 
            fontWeight: 800, 
            letterSpacing: '0.12em', 
            color: '#ffffff', 
            textTransform: 'uppercase',
            marginBottom: '4rem'
          }}
        >
          4 STEPS TO CREATE
        </h4>

        {/* Crops sofa image preview */}
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', overflow: 'hidden' }}>
          <img 
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80" 
            alt="Custom built tufted sofa sectional showroom crop" 
            style={{ 
              width: '80%', 
              height: '320px', 
              objectFit: 'cover', 
              borderRadius: '25px 25px 0 0',
              boxShadow: '0 -10px 40px rgba(0,0,0,0.5)',
              display: 'block'
            }}
          />
        </div>
      </div>
    </section>
  );
};
export default DreamSection;
