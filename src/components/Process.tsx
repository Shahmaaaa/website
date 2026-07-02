import React, { useState } from 'react';
import { MessageSquare, Palette, Ruler, Hammer, ShieldCheck, Truck, ArrowLeft, Check, Box, Award } from 'lucide-react';

interface ProcessStep {
  id: number;
  number: string;
  title: string;
  icon: React.ReactNode;
  description: string;
}

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  // Step 2 Interactive Configurator States
  const [sofaStyle, setSofaStyle] = useState('Modern');
  const [seatingCapacity, setSeatingCapacity] = useState('3 Seater');
  const [upholsteryFabric, setUpholsteryFabric] = useState('Bouclé');
  const [fabricColor, setFabricColor] = useState('Beige');
  const [legFinish, setLegFinish] = useState('Natural Oak');
  const [armStyle, setArmStyle] = useState('Square Arms');
  const [cushionStyle, setCushionStyle] = useState('Loose Cushions');

  // Step 3 Interactive Measurement States
  const [customWidth, setCustomWidth] = useState('7 Feet');
  const [customHeight, setCustomHeight] = useState('34 Inches');
  const [customDepth, setCustomDepth] = useState('36 Inches');

  // Step 6 Delivery & Logistics States (Only Region selection)
  const [deliveryZone, setDeliveryZone] = useState('Central Kerala');

  const steps: ProcessStep[] = [
    {
      id: 1,
      number: '1',
      title: 'Consultation',
      icon: <MessageSquare size={26} style={{ color: 'var(--color-primary)' }} />,
      description: 'We start by understanding your needs, style preferences, space, and budget. Our team listens to your ideas and suggests the best solutions.'
    },
    {
      id: 2,
      number: '2',
      title: 'Design & Customization',
      icon: <Palette size={26} style={{ color: 'var(--color-primary)' }} />,
      description: 'Choose your upholstery texture and color from 150+ options, select leg finishes, stitching alignments, and layout dimensions.'
    },
    {
      id: 3,
      number: '3',
      title: 'Measurement',
      icon: <Ruler size={26} style={{ color: 'var(--color-primary)' }} />,
      description: 'Our team verifies dimensions, wall spacing, and seating ergonomics so that your custom sectional fits perfectly without blocking doors or pathways.'
    },
    {
      id: 4,
      number: '4',
      title: 'Crafting',
      icon: <Hammer size={26} style={{ color: 'var(--color-primary)' }} />,
      description: 'Master artisans construct the solid seasoned teakwood frame, lay high-tensile spring supports, and precision-upholster your selected fabric.'
    },
    {
      id: 5,
      number: '5',
      title: 'Quality Check',
      icon: <ShieldCheck size={26} style={{ color: 'var(--color-primary)' }} />,
      description: 'Every sofa undergoes a multi-point inspection check verifying stitch alignment, seam stability, cushion resiliency, and frame load capacity.'
    },
    {
      id: 6,
      number: '6',
      title: 'Delivery & Setup',
      icon: <Truck size={26} style={{ color: 'var(--color-primary)' }} />,
      description: 'We pack, transport, and install your customized sofa safely inside your home anywhere in Kerala with zero hassle.'
    }
  ];

  const handleWhatsAppInquiry = (stepTitle: string) => {
    const phoneNumber = '919961734882';
    const message = encodeURIComponent(`Hi Zain Sofas, I am interested in custom building a sofa and want to consult on the "${stepTitle}" step.`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleWhatsAppCustomizer = () => {
    const phoneNumber = '919961734882';
    const message = encodeURIComponent(
      `Hi Zain Sofas, I am customizing a sofa layout on your Step 2 page. Here are my selections:\n\n` +
      `- Sofa Style: ${sofaStyle}\n` +
      `- Seating Capacity: ${seatingCapacity}\n` +
      `- Upholstery Fabric: ${upholsteryFabric}\n` +
      `- Color Shade: ${fabricColor}\n` +
      `- Leg Finish: ${legFinish}\n` +
      `- Armrest Style: ${armStyle}\n` +
      `- Cushion Style: ${cushionStyle}\n\n` +
      `Could you check fabric availability and give me a price estimate for this custom build?`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleWhatsAppMeasurements = () => {
    const phoneNumber = '919961734882';
    const message = encodeURIComponent(
      `Hi Zain Sofas, I have selected the custom dimensions for my sofa build on your Step 3 page:\n\n` +
      `- Custom Width (Length): ${customWidth}\n` +
      `- Custom Height: ${customHeight}\n` +
      `- Custom Depth: ${customDepth}\n\n` +
      `Please consult me on frame fitting and spatial clearances based on these dimensions.`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleWhatsAppDelivery = () => {
    const phoneNumber = '919961734882';
    const message = encodeURIComponent(
      `Hi Zain Sofas, I want to check custom sofa shipping rates and fleet availability to my region:\n\n` +
      `- Selected Delivery Region: ${deliveryZone}\n\n` +
      `Please let me know the timing slots and local shipping policies.`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };



  const renderStepPage = () => {
    if (activeStep === null) return null;

    switch (activeStep) {
      case 1:
        return (
          <div 
            className="step-detail-page fade-in-on-scroll visible" 
            style={{ 
              backgroundColor: '#43270F', 
              width: '100%', 
              borderRadius: '16px', 
              overflow: 'hidden', 
              marginTop: '1rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
              border: '1px solid rgba(198,134,66,0.3)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            {/* Direct pixel-perfect screenshot render matching Step One Consultation */}
            <img 
              src="/images/step1_consultation.jpg" 
              alt="Step 1 Consultation detailed visual description page" 
              style={{ width: '100%', height: 'auto', display: 'block' }} 
            />
            
            {/* Actions Panel */}
            <div style={{ padding: '2.5rem', textAlign: 'center', backgroundColor: 'var(--color-bg)', width: '100%', borderTop: '1.5px solid rgba(198,134,66,0.15)' }}>
              <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button
                  onClick={() => handleWhatsAppInquiry('Step 1: Consultation')}
                  style={{ backgroundColor: 'var(--color-primary)', color: '#ffffff', border: 'none', padding: '0.85rem 2.25rem', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', borderRadius: '4px', cursor: 'pointer', textTransform: 'uppercase' }}
                  className="btn-block-action"
                >
                  START CONSULTATION
                </button>
                <button
                  onClick={() => setActiveStep(null)}
                  style={{ backgroundColor: 'transparent', color: 'var(--color-dark)', border: '1px solid rgba(198,134,66,0.3)', padding: '0.85rem 2.25rem', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <ArrowLeft size={16} />
                  <span>PROCESS OVERVIEW</span>
                </button>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div 
            className="step-detail-page fade-in-on-scroll visible" 
            style={{ 
              backgroundColor: '#43270F', 
              color: '#ffffff', 
              width: '100%', 
              borderRadius: '16px', 
              overflow: 'hidden', 
              marginTop: '1rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
              border: '1px solid rgba(198,134,66,0.3)',
              textAlign: 'left'
            }}
          >
            {/* Styled centered header matching Step 1 Consultation layout */}
            <div style={{ padding: '3.5rem 2rem 0 2rem', textAlign: 'center', maxWidth: '850px', margin: '0 auto' }}>
              <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-primary)', display: 'block', marginBottom: '0.75rem', letterSpacing: '0.1em' }}>2</span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.5rem', color: 'var(--color-dark)', lineHeight: 1.1 }}>
                Design & Customization
              </h3>
              <div style={{ width: '40px', height: '1.5px', backgroundColor: 'var(--color-primary)', margin: '0.75rem auto 1.5rem auto', opacity: 0.6 }}></div>
            </div>

            {/* Split layout: Interactive Form (Left), Live preview & selections (Right) */}
            <div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: '1.15fr 0.85fr', 
                gap: '2.5rem', 
                padding: '1.5rem 2.5rem 3.5rem 2.5rem'
              }}
              className="masterpiece-row"
            >
              {/* Left Column: Interactive customization options */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {/* 1. Sofa Style */}
                <div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-dark)', display: 'block', marginBottom: '0.65rem' }}>1. SOFA STYLE</span>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {['Modern', 'L Shape', 'Sectional', 'Classic', 'Minimalist'].map((style) => {
                      const isSel = style === sofaStyle;
                      return (
                        <button
                          key={style}
                          onClick={() => setSofaStyle(style)}
                          style={{
                            padding: '0.55rem 1rem',
                            border: `1.5px solid ${isSel ? 'var(--color-primary)' : '#ddd'}`,
                            backgroundColor: isSel ? '#ffffff' : 'rgba(255,255,255,0.4)',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontSize: '0.78rem',
                            fontWeight: 700,
                            color: isSel ? 'var(--color-primary)' : 'var(--color-dark-muted)',
                            transition: 'all 0.2s ease',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.4rem'
                          }}
                          className="step-option-btn"
                        >
                          {isSel && <Check size={12} />}
                          <span>{style}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Seating Capacity */}
                <div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-dark)', display: 'block', marginBottom: '0.65rem' }}>2. SEATING CAPACITY</span>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {['1 Seater', '2 Seater', '3 Seater', '4 Seater', 'Custom Size'].map((cap) => {
                      const isSel = cap === seatingCapacity;
                      return (
                        <button
                          key={cap}
                          onClick={() => setSeatingCapacity(cap)}
                          style={{
                            padding: '0.55rem 1rem',
                            border: `1.5px solid ${isSel ? 'var(--color-primary)' : '#ddd'}`,
                            backgroundColor: isSel ? '#ffffff' : 'rgba(255,255,255,0.4)',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontSize: '0.78rem',
                            fontWeight: 700,
                            color: isSel ? 'var(--color-primary)' : 'var(--color-dark-muted)',
                            transition: 'all 0.2s ease',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.4rem'
                          }}
                          className="step-option-btn"
                        >
                          {isSel && <Check size={12} />}
                          <span>{cap}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Upholstery Fabric */}
                <div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-dark)', display: 'block', marginBottom: '0.65rem' }}>3. UPHOLSTERY FABRIC</span>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {['Bouclé', 'Velvet', 'Linen', 'Chenille', 'Leatherette'].map((fabric) => {
                      const isSel = fabric === upholsteryFabric;
                      return (
                        <button
                          key={fabric}
                          onClick={() => setUpholsteryFabric(fabric)}
                          style={{
                            padding: '0.55rem 1rem',
                            border: `1.5px solid ${isSel ? 'var(--color-primary)' : '#ddd'}`,
                            backgroundColor: isSel ? '#ffffff' : 'rgba(255,255,255,0.4)',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontSize: '0.78rem',
                            fontWeight: 700,
                            color: isSel ? 'var(--color-primary)' : 'var(--color-dark-muted)',
                            transition: 'all 0.2s ease',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.4rem'
                          }}
                          className="step-option-btn"
                        >
                          {isSel && <Check size={12} />}
                          <span>{fabric}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 4. Fabric Color + inline thumbnail */}
                <div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-dark)', display: 'block', marginBottom: '0.65rem' }}>
                    4. FABRIC COLOR: <strong style={{ color: 'var(--color-primary)' }}>{fabricColor}</strong>
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                    {/* Swatch dots */}
                    <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap', alignItems: 'center' }}>
                      {[
                        { name: 'Beige',    hex: '#D5C4A1', border: '#ddd' },
                        { name: 'Caramel',  hex: '#A65D24', border: 'transparent' },
                        { name: 'Grey',     hex: '#D3D3D3', border: 'transparent' },
                        { name: 'Rust',     hex: '#C35831', border: 'transparent' },
                        { name: 'Teal',     hex: '#008080', border: 'transparent' },
                        { name: 'Pink',     hex: '#EBB4B8', border: 'transparent' },
                        { name: 'Custom',   hex: 'linear-gradient(45deg,#ff9a9e,#fecfef)', border: '#ccc' }
                      ].map((color) => {
                        const isSel = color.name === fabricColor;
                        return (
                          <button
                            key={color.name}
                            onClick={() => setFabricColor(color.name)}
                            style={{
                              width: '34px',
                              height: '34px',
                              borderRadius: '50%',
                              background: color.hex,
                              border: `3px solid ${isSel ? 'var(--color-primary)' : color.border}`,
                              cursor: 'pointer',
                              transition: 'all 0.25s ease',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
                              flexShrink: 0
                            }}
                            title={color.name}
                          >
                            {isSel && <Check size={13} style={{ color: color.name === 'Beige' || color.name === 'Pink' ? '#151515' : '#ffffff' }} />}
                          </button>
                        );
                      })}
                    </div>

                    {/* Small sofa thumbnail — updates on swatch click */}
                    {(() => {
                      if (fabricColor === 'Custom') return null;
                      
                      const imgMap: Record<string, string> = {
                        'Beige':    '/images/sofa_beige_fabric_3seater.png',
                        'Caramel':  '/images/sofa_brown_tufted_lshape.jpg',
                        'Grey':     '/images/sofa_lightgrey_3seater.jpg',
                        'Rust':     '/images/sofa_orange_ribbed_3seater.jpg',
                        'Teal':     '/images/sofa_teal_3seater.jpg',
                        'Pink':     '/images/sofa_pink_velvet_3seater.jpg'
                      };
                      return (
                        <div style={{ borderRadius: '8px', overflow: 'hidden', backgroundColor: '#f7f3ee', border: '1px solid rgba(198,134,66,0.12)', padding: '0.4rem', flexShrink: 0 }}>
                          <img
                            key={fabricColor}
                            src={imgMap[fabricColor] || '/images/sofa_beige_fabric_3seater.png'}
                            alt={`${fabricColor} sofa`}
                            style={{ width: '110px', height: '72px', objectFit: 'contain', display: 'block', transition: 'opacity 0.25s ease' }}
                          />
                        </div>
                      );
                    })()}
                  </div>
                </div>

                {/* 5. Leg Finish (Gold removed) */}
                <div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-dark)', display: 'block', marginBottom: '0.65rem' }}>5. LEG FINISH</span>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {['Natural Oak', 'Walnut', 'Teak', 'Black', 'White'].map((leg) => {
                      const isSel = leg === legFinish;
                      return (
                        <button
                          key={leg}
                          onClick={() => setLegFinish(leg)}
                          style={{
                            padding: '0.55rem 1rem',
                            border: `1.5px solid ${isSel ? 'var(--color-primary)' : '#ddd'}`,
                            backgroundColor: isSel ? '#ffffff' : 'rgba(255,255,255,0.4)',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontSize: '0.78rem',
                            fontWeight: 700,
                            color: isSel ? 'var(--color-primary)' : 'var(--color-dark-muted)',
                            transition: 'all 0.2s ease',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.4rem'
                          }}
                          className="step-option-btn"
                        >
                          {isSel && <Check size={12} />}
                          <span>{leg}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 6. Arm Style */}
                <div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-dark)', display: 'block', marginBottom: '0.65rem' }}>6. ARM STYLE</span>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {['Square Arms', 'Curved Arms', 'Track Arms', 'Pillow Arms'].map((arm) => {
                      const isSel = arm === armStyle;
                      return (
                        <button
                          key={arm}
                          onClick={() => setArmStyle(arm)}
                          style={{
                            padding: '0.55rem 1rem',
                            border: `1.5px solid ${isSel ? 'var(--color-primary)' : '#ddd'}`,
                            backgroundColor: isSel ? '#ffffff' : 'rgba(255,255,255,0.4)',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontSize: '0.78rem',
                            fontWeight: 700,
                            color: isSel ? 'var(--color-primary)' : 'var(--color-dark-muted)',
                            transition: 'all 0.2s ease',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.4rem'
                          }}
                          className="step-option-btn"
                        >
                          {isSel && <Check size={12} />}
                          <span>{arm}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 7. Cushion Style */}
                <div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-dark)', display: 'block', marginBottom: '0.65rem' }}>7. CUSHION STYLE</span>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {['Loose Cushions', 'Fixed Back', 'Tufted Back'].map((cushion) => {
                      const isSel = cushion === cushionStyle;
                      return (
                        <button
                          key={cushion}
                          onClick={() => setCushionStyle(cushion)}
                          style={{
                            padding: '0.55rem 1rem',
                            border: `1.5px solid ${isSel ? 'var(--color-primary)' : '#ddd'}`,
                            backgroundColor: isSel ? '#ffffff' : 'rgba(255,255,255,0.4)',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontSize: '0.78rem',
                            fontWeight: 700,
                            color: isSel ? 'var(--color-primary)' : 'var(--color-dark-muted)',
                            transition: 'all 0.2s ease',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.4rem'
                          }}
                          className="step-option-btn"
                        >
                          {isSel && <Check size={12} />}
                          <span>{cushion}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right Column: Selections Summary */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', justifyContent: 'flex-start' }}>
                {/* Selection Details Box */}
                <div 
                  style={{ 
                    backgroundColor: 'var(--color-bg)', 
                    border: '1.5px solid rgba(198,134,66,0.15)', 
                    borderRadius: '12px', 
                    padding: '1.5rem', 
                    boxShadow: '0 6px 15px rgba(0,0,0,0.2)' 
                  }}
                >
                  <h4 style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-primary)', marginBottom: '1.25rem', borderBottom: '1px solid rgba(198,134,66,0.1)', paddingBottom: '0.5rem' }}>
                    YOUR SELECTION
                  </h4>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.8rem', color: 'var(--color-dark)' }}>
                    <div>
                      <span style={{ color: 'var(--color-dark-muted)', display: 'block', fontSize: '0.7rem', textTransform: 'uppercase' }}>Style</span>
                      <strong>{sofaStyle}</strong>
                    </div>
                    <div>
                      <span style={{ color: 'var(--color-dark-muted)', display: 'block', fontSize: '0.7rem', textTransform: 'uppercase' }}>Leg Finish</span>
                      <strong>{legFinish}</strong>
                    </div>
                    <div>
                      <span style={{ color: 'var(--color-dark-muted)', display: 'block', fontSize: '0.7rem', textTransform: 'uppercase' }}>Seating</span>
                      <strong>{seatingCapacity}</strong>
                    </div>
                    <div>
                      <span style={{ color: 'var(--color-dark-muted)', display: 'block', fontSize: '0.7rem', textTransform: 'uppercase' }}>Arm Style</span>
                      <strong>{armStyle}</strong>
                    </div>
                    <div>
                      <span style={{ color: 'var(--color-dark-muted)', display: 'block', fontSize: '0.7rem', textTransform: 'uppercase' }}>Fabric</span>
                      <strong>{upholsteryFabric}</strong>
                    </div>
                    <div>
                      <span style={{ color: 'var(--color-dark-muted)', display: 'block', fontSize: '0.7rem', textTransform: 'uppercase' }}>Cushion Style</span>
                      <strong>{cushionStyle}</strong>
                    </div>
                    <div>
                      <span style={{ color: 'var(--color-dark-muted)', display: 'block', fontSize: '0.7rem', textTransform: 'uppercase' }}>Color</span>
                      <strong>{fabricColor}</strong>
                    </div>
                  </div>
                </div>

                {/* Customizer trust badges footer */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem', textAlign: 'center', borderTop: '1px solid rgba(198,134,66,0.1)', paddingTop: '1rem' }}>
                  <div>
                    <Ruler size={16} style={{ color: 'var(--color-primary)', margin: '0 auto' }} />
                    <span style={{ display: 'block', fontSize: '0.62rem', fontWeight: 700, marginTop: '0.2rem', color: 'var(--color-dark)' }}>Custom Built</span>
                  </div>
                  <div>
                    <Box size={16} style={{ color: 'var(--color-primary)', margin: '0 auto' }} />
                    <span style={{ display: 'block', fontSize: '0.62rem', fontWeight: 700, marginTop: '0.2rem', color: 'var(--color-dark)' }}>Premium Fabric</span>
                  </div>
                  <div>
                    <Award size={16} style={{ color: 'var(--color-primary)', margin: '0 auto' }} />
                    <span style={{ display: 'block', fontSize: '0.62rem', fontWeight: 700, marginTop: '0.2rem', color: 'var(--color-dark)' }}>Expert Craft</span>
                  </div>
                  <div>
                    <ShieldCheck size={16} style={{ color: 'var(--color-primary)', margin: '0 auto' }} />
                    <span style={{ display: 'block', fontSize: '0.62rem', fontWeight: 700, marginTop: '0.2rem', color: 'var(--color-dark)' }}>1 Yr Warranty</span>
                  </div>
                </div>

                {/* Split Action CTAs */}
                <div style={{ display: 'flex', gap: '1rem', width: '100%' }}>
                  <button
                    onClick={handleWhatsAppCustomizer}
                    style={{ flex: 1, backgroundColor: 'var(--color-primary)', color: '#ffffff', border: 'none', padding: '0.85rem 0', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1rem', borderRadius: '4px', cursor: 'pointer', textTransform: 'uppercase' }}
                    className="btn-block-action"
                  >
                    INQUIRE THIS LAYOUT
                  </button>
                  <button
                    onClick={() => setActiveStep(null)}
                    style={{ backgroundColor: '#ffffff', color: '#555555', border: '1px solid #ddd', padding: '0.85rem 1.5rem', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.11em', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                  >
                    <ArrowLeft size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div 
            className="step-detail-page fade-in-on-scroll visible" 
            style={{ 
              backgroundColor: '#43270F', 
              color: '#ffffff', 
              width: '100%', 
              borderRadius: '16px', 
              overflow: 'hidden', 
              marginTop: '1rem', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)', 
              border: '1px solid rgba(198,134,66,0.3)',
              textAlign: 'left'
            }}
          >
            {/* Centered header matching Step 1/2 */}
            <div style={{ padding: '3.5rem 2rem 0 2rem', textAlign: 'center', maxWidth: '850px', margin: '0 auto' }}>
              <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-primary)', display: 'block', marginBottom: '0.75rem', letterSpacing: '0.1em' }}>3</span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.5rem', color: 'var(--color-dark)', lineHeight: 1.1 }}>
                Measurement & Size Options
              </h3>
              <div style={{ width: '40px', height: '1.5px', backgroundColor: 'var(--color-primary)', margin: '0.75rem auto 1.5rem auto', opacity: 0.6 }}></div>
            </div>
            
            <div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: '1.15fr 0.85fr', 
                gap: '2.5rem', 
                padding: '1.5rem 2.5rem 3.5rem 2.5rem' 
              }}
              className="masterpiece-row"
            >
              {/* Left Column: Interactive Dimensions Selectors */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-dark)', marginBottom: '0.5rem' }}>Select Custom Dimensions</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-dark-muted)', lineHeight: '1.5', margin: 0 }}>
                    Select your desired Width, Height, and Depth. We will adjust the seasoned teakwood framework exactly to your choices.
                  </p>
                </div>

                {/* Sofa Width Selector */}
                <div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-dark)', display: 'block', marginBottom: '0.65rem' }}>
                    1. SOFA WIDTH (LENGTH): <strong style={{ color: 'var(--color-primary)' }}>{customWidth}</strong>
                  </span>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {['5 Feet', '6 Feet', '7 Feet', '8 Feet', '9 Feet', 'Custom Size'].map((w) => {
                      const isSel = w === customWidth;
                      return (
                        <button
                          key={w}
                          onClick={() => setCustomWidth(w)}
                          style={{
                            padding: '0.55rem 1rem',
                            border: `1.5px solid ${isSel ? 'var(--color-primary)' : '#ddd'}`,
                            backgroundColor: isSel ? 'var(--color-bg)' : 'rgba(255,255,255,0.05)',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontSize: '0.78rem',
                            fontWeight: 700,
                            color: isSel ? 'var(--color-primary)' : 'var(--color-dark-muted)',
                            transition: 'all 0.2s ease',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.4rem'
                          }}
                          className="step-option-btn"
                        >
                          {isSel && <Check size={12} />}
                          <span>{w}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Sofa Height Selector */}
                <div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-dark)', display: 'block', marginBottom: '0.65rem' }}>
                    2. SOFA BACK HEIGHT: <strong style={{ color: 'var(--color-primary)' }}>{customHeight}</strong>
                  </span>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {['30 Inches', '32 Inches', '34 Inches', '36 Inches', 'Custom Height'].map((h) => {
                      const isSel = h === customHeight;
                      return (
                        <button
                          key={h}
                          onClick={() => setCustomHeight(h)}
                          style={{
                            padding: '0.55rem 1rem',
                            border: `1.5px solid ${isSel ? 'var(--color-primary)' : '#ddd'}`,
                            backgroundColor: isSel ? 'var(--color-bg)' : 'rgba(255,255,255,0.05)',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontSize: '0.78rem',
                            fontWeight: 700,
                            color: isSel ? 'var(--color-primary)' : 'var(--color-dark-muted)',
                            transition: 'all 0.2s ease',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.4rem'
                          }}
                          className="step-option-btn"
                        >
                          {isSel && <Check size={12} />}
                          <span>{h}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Sofa Depth Selector */}
                <div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-dark)', display: 'block', marginBottom: '0.65rem' }}>
                    3. SEAT DEPTH: <strong style={{ color: 'var(--color-primary)' }}>{customDepth}</strong>
                  </span>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {['32 Inches', '34 Inches', '36 Inches', '38 Inches', 'Custom Depth'].map((d) => {
                      const isSel = d === customDepth;
                      return (
                        <button
                          key={d}
                          onClick={() => setCustomDepth(d)}
                          style={{
                            padding: '0.55rem 1rem',
                            border: `1.5px solid ${isSel ? 'var(--color-primary)' : '#ddd'}`,
                            backgroundColor: isSel ? 'var(--color-bg)' : 'rgba(255,255,255,0.05)',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontSize: '0.78rem',
                            fontWeight: 700,
                            color: isSel ? 'var(--color-primary)' : 'var(--color-dark-muted)',
                            transition: 'all 0.2s ease',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.4rem'
                          }}
                          className="step-option-btn"
                        >
                          {isSel && <Check size={12} />}
                          <span>{d}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right Column: Selected Measurements Summary */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', justifyContent: 'flex-start' }}>

                {/* Measurements Summary Card */}
                <div 
                  style={{ 
                    backgroundColor: 'var(--color-bg-alt)', 
                    border: '1.5px solid rgba(198,134,66,0.25)', 
                    borderRadius: '12px', 
                    padding: '2rem', 
                    boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
                    textAlign: 'left'
                  }}
                >
                  <h4 style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-primary)', marginBottom: '1.5rem', borderBottom: '1px solid rgba(198,134,66,0.2)', paddingBottom: '0.6rem' }}>
                    SELECTED MEASUREMENTS
                  </h4>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '0.9rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px dashed rgba(198,134,66,0.15)', paddingBottom: '0.75rem' }}>
                      <span style={{ color: 'var(--color-dark-muted)', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>Width (Length)</span>
                      <strong style={{ color: 'var(--color-dark)', fontSize: '1rem', fontWeight: 800 }}>{customWidth}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px dashed rgba(198,134,66,0.15)', paddingBottom: '0.75rem' }}>
                      <span style={{ color: 'var(--color-dark-muted)', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>Back Height</span>
                      <strong style={{ color: 'var(--color-dark)', fontSize: '1rem', fontWeight: 800 }}>{customHeight}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ color: 'var(--color-dark-muted)', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>Seat Depth</span>
                      <strong style={{ color: 'var(--color-dark)', fontSize: '1rem', fontWeight: 800 }}>{customDepth}</strong>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'flex', gap: '1rem', width: '100%' }}>
                  <button
                    onClick={handleWhatsAppMeasurements}
                    style={{ flex: 1, backgroundColor: 'var(--color-primary)', color: '#ffffff', border: 'none', padding: '0.85rem 0', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1rem', borderRadius: '4px', cursor: 'pointer', textTransform: 'uppercase' }}
                    className="btn-block-action"
                  >
                    SUBMIT MEASUREMENTS
                  </button>
                  <button
                    onClick={() => setActiveStep(null)}
                    style={{ backgroundColor: 'var(--color-bg-alt)', color: 'var(--color-dark)', border: '1px solid rgba(198,134,66,0.25)', padding: '0.85rem 1.5rem', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.11em', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                  >
                    <ArrowLeft size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div 
            className="step-detail-page fade-in-on-scroll visible" 
            style={{ 
              background: 'linear-gradient(135deg, #43270F 0%, #2e1a0a 100%)',
              color: '#ffffff', 
              width: '100%', 
              borderRadius: '16px', 
              overflow: 'hidden', 
              marginTop: '1rem', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
              border: '1px solid rgba(198,134,66,0.3)',
              position: 'relative'
            }}
          >
            {/* Decorative background elements */}
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(198,134,66,0.1) 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: 0.6, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(198,134,66,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '-40px', left: '-40px', width: '220px', height: '220px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(198,134,66,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
            
            {/* Thin gold horizontal rule accent */}
            <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '1.5px', background: 'linear-gradient(90deg, transparent, rgba(198,134,66,0.3), transparent)' }} />
            
            <div style={{ padding: '3.5rem 2rem', textAlign: 'center', maxWidth: '850px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
              <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-primary)', display: 'block', marginBottom: '0.75rem', letterSpacing: '0.1em' }}>4</span>
              
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.75rem', color: '#ffffff', lineHeight: 1.1 }}>
                Artisan Crafting
              </h3>

              {/* Gold divider */}
              <div style={{ width: '40px', height: '1.5px', backgroundColor: 'var(--color-primary)', margin: '0 auto 1.75rem auto', opacity: 0.6 }} />
              
              <p style={{ fontSize: '0.9rem', color: '#cccccc', lineHeight: '1.7', marginBottom: '2.5rem', maxWidth: '640px', margin: '0 auto 2.5rem auto' }}>
                Master artisans construct the solid seasoned teakwood frame, lay high-tensile spring supports, and precision-upholster your selected fabric to guarantee ultimate structural durability.
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button
                  onClick={() => setActiveStep(null)}
                  style={{ backgroundColor: 'transparent', color: '#ffffff', border: '1px solid rgba(198,134,66,0.3)', padding: '0.85rem 2.25rem', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}
                >
                  <ArrowLeft size={16} />
                  <span>PROCESS OVERVIEW</span>
                </button>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div 
            className="step-detail-page fade-in-on-scroll visible" 
            style={{ 
              backgroundColor: '#43270F', 
              color: '#ffffff', 
              width: '100%', 
              borderRadius: '16px', 
              overflow: 'hidden', 
              marginTop: '1rem', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
              border: '1px solid rgba(198,134,66,0.3)',
              position: 'relative'
            }}
          >
            {/* Decorative large watermark numeral */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '28rem', fontWeight: 900, color: 'rgba(60,130,80,0.04)', lineHeight: 1, pointerEvents: 'none', userSelect: 'none', fontFamily: 'var(--font-serif)', letterSpacing: '-0.05em' }}>5</div>
            {/* Top corner geometric squares */}
            <div style={{ position: 'absolute', top: '2rem', right: '2rem', width: '60px', height: '60px', border: '1.5px solid rgba(60,130,80,0.12)', borderRadius: '6px', transform: 'rotate(15deg)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', top: '2.5rem', right: '2.5rem', width: '60px', height: '60px', border: '1.5px solid rgba(198,134,66,0.1)', borderRadius: '6px', transform: 'rotate(30deg)', pointerEvents: 'none' }} />
            {/* Bottom left diamond accent */}
            <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', width: '40px', height: '40px', border: '1.5px solid rgba(60,130,80,0.1)', transform: 'rotate(45deg)', pointerEvents: 'none' }} />
            {/* Sage radial glow */}
            <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '350px', height: '350px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(60,130,80,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
            {/* Thin green top accent line */}
            <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(60,130,80,0.35), transparent)' }} />

            <div style={{ padding: '3.5rem 2rem', textAlign: 'center', maxWidth: '850px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
              <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-primary)', display: 'block', marginBottom: '0.75rem', letterSpacing: '0.1em' }}>5</span>
              
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.75rem', color: 'var(--color-dark)', lineHeight: 1.1 }}>
                Quality Audit
              </h3>

              {/* Gold divider — same as Step 1 */}
              <div style={{ width: '40px', height: '1.5px', backgroundColor: 'var(--color-primary)', margin: '0 auto 1.75rem auto', opacity: 0.6 }} />
              
              <p style={{ fontSize: '0.9rem', color: 'var(--color-dark-muted)', lineHeight: '1.7', maxWidth: '620px', margin: '0 auto 2.5rem auto' }}>
                Every cushion seam, wood finish profile, frame joint, and stitching alignment is inspected by our quality controllers to guarantee ultimate build resilience and lifetime performance.
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button
                  onClick={() => handleWhatsAppInquiry('Step 5: Quality Audit')}
                  style={{ backgroundColor: '#C68642', color: '#ffffff', border: 'none', padding: '0.85rem 2.25rem', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', borderRadius: '4px', cursor: 'pointer', textTransform: 'uppercase' }}
                  className="btn-block-action"
                >
                  INQUIRE QUALITY METRICS
                </button>
                <button
                  onClick={() => setActiveStep(null)}
                  style={{ backgroundColor: 'rgba(255,255,255,0.7)', color: '#374151', border: '1px solid rgba(198,134,66,0.3)', padding: '0.85rem 2.25rem', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', backdropFilter: 'blur(8px)' }}
                >
                  <ArrowLeft size={16} />
                  <span>PROCESS OVERVIEW</span>
                </button>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div 
            className="step-detail-page fade-in-on-scroll visible" 
            style={{ 
              backgroundColor: '#43270F', 
              color: '#ffffff', 
              width: '100%', 
              borderRadius: '16px', 
              overflow: 'hidden', 
              marginTop: '1rem', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)', 
              border: '1px solid rgba(198,134,66,0.3)',
              textAlign: 'left'
            }}
          >
            {/* Centered header matching other sections */}
            <div style={{ padding: '3.5rem 2rem 0 2rem', textAlign: 'center', maxWidth: '850px', margin: '0 auto' }}>
              <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-primary)', display: 'block', marginBottom: '0.75rem', letterSpacing: '0.1em' }}>6</span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.5rem', color: 'var(--color-dark)', lineHeight: 1.1 }}>
                Safe Kerala-Wide Delivery
              </h3>
              <div style={{ width: '40px', height: '1.5px', backgroundColor: 'var(--color-primary)', margin: '0.75rem auto 1.5rem auto', opacity: 0.6 }}></div>
            </div>

            <div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: '1.15fr 0.85fr', 
                gap: '2.5rem', 
                padding: '1.5rem 2.5rem 3.5rem 2.5rem' 
              }}
              className="masterpiece-row"
            >
              {/* Left Column: Region Selectors (Only region) */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-dark)', marginBottom: '0.5rem' }}>Select Shipping Zone</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-dark-muted)', lineHeight: '1.5', margin: 0 }}>
                    We securely transport and handle full installation inside your home anywhere in Kerala. Select your delivery region:
                  </p>
                </div>

                {/* Delivery Zone Selector */}
                <div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#1f2937', display: 'block', marginBottom: '0.65rem' }}>
                    SHIPPING DISTRICT ZONE: <strong style={{ color: 'var(--color-primary)' }}>{deliveryZone}</strong>
                  </span>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {['Local Malappuram', 'North Kerala', 'Central Kerala', 'South Kerala'].map((zone) => {
                      const isSel = zone === deliveryZone;
                      return (
                        <button
                          key={zone}
                          onClick={() => setDeliveryZone(zone)}
                          style={{
                            padding: '0.55rem 1rem',
                            border: `1.5px solid ${isSel ? 'var(--color-primary)' : '#ddd'}`,
                            backgroundColor: isSel ? 'var(--color-bg)' : 'rgba(255,255,255,0.05)',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontSize: '0.78rem',
                            fontWeight: 700,
                            color: isSel ? 'var(--color-primary)' : 'var(--color-dark-muted)',
                            transition: 'all 0.2s ease',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.4rem'
                          }}
                          className="step-option-btn"
                        >
                          {isSel && <Check size={12} />}
                          <span>{zone}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right Column: Kerala map design element + Summary card (no photo, no transit) */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', justifyContent: 'flex-start' }}>
                {/* Kerala Region Design Element */}
                <div style={{ borderRadius: '12px', background: 'linear-gradient(160deg, #FDF6EC 0%, #F5E6D0 100%)', border: '1.5px solid rgba(198,134,66,0.2)', padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#8B6914', display: 'block', marginBottom: '0.25rem' }}>KERALA DELIVERY ZONES</span>
                  {[
                    { zone: 'Local Malappuram', note: 'Same-day to next-day delivery after finished work' },
                    { zone: 'North Kerala', note: 'Calicut, Kannur, Kasaragod' },
                    { zone: 'Central Kerala', note: 'Ernakulam, Thrissur, Palakkad' },
                    { zone: 'South Kerala', note: 'Trivandrum, Kollam, Alappuzha' }
                  ].map((item) => (
                    <div key={item.zone} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: item.zone === deliveryZone ? '#ffffff' : 'rgba(255,255,255,0.5)', borderRadius: '6px', padding: '0.6rem 0.85rem', border: `1px solid ${item.zone === deliveryZone ? '#C68642' : 'transparent'}`, transition: 'all 0.2s ease' }}>
                      <div>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: item.zone === deliveryZone ? '#8B6914' : '#374151', display: 'block' }}>{item.zone}</span>
                        <span style={{ fontSize: '0.68rem', color: '#6b7280' }}>{item.note}</span>
                      </div>
                      {item.zone === deliveryZone && <Check size={14} style={{ color: '#C68642', flexShrink: 0 }} />}
                    </div>
                  ))}
                </div>

                {/* Shipping summary card - Estimated Transit removed */}
                <div 
                  style={{ 
                    backgroundColor: '#ffffff', 
                    border: '1.5px solid rgba(198,134,66,0.12)', 
                    borderRadius: '12px', 
                    padding: '1.5rem', 
                    boxShadow: '0 6px 15px rgba(0,0,0,0.02)',
                    textAlign: 'left'
                  }}
                >
                  <h4 style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-primary)', marginBottom: '1rem', borderBottom: '1px solid rgba(198,134,66,0.1)', paddingBottom: '0.4rem' }}>
                    SHIPPING DIRECTORY
                  </h4>
                  <div style={{ fontSize: '0.8rem', color: '#151515' }}>
                    <span style={{ color: 'var(--color-dark-muted)', display: 'block', fontSize: '0.68rem', textTransform: 'uppercase' }}>Selected Region:</span>
                    <strong>{deliveryZone}</strong>
                  </div>
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'flex', gap: '1rem', width: '100%' }}>
                  <button
                    onClick={handleWhatsAppDelivery}
                    style={{ flex: 1, backgroundColor: 'var(--color-primary)', color: '#ffffff', border: 'none', padding: '0.85rem 0', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1rem', borderRadius: '4px', cursor: 'pointer', textTransform: 'uppercase' }}
                    className="btn-block-action"
                  >
                    CONFIRM SHIPPING SLOT
                  </button>
                  <button
                    onClick={() => setActiveStep(null)}
                    style={{ backgroundColor: '#ffffff', color: '#555555', border: '1px solid #ddd', padding: '0.85rem 1.5rem', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.11em', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                  >
                    <ArrowLeft size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const roomBackdropImage = 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80';
  const customCreamSofaMockup = 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80';

  return (
    <section 
      id="process" 
      className="section" 
      style={{ 
        backgroundImage: `linear-gradient(rgba(26, 18, 14, 0.88), rgba(26, 18, 14, 0.95)), url(${roomBackdropImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderBottom: '1px solid rgba(198, 134, 66, 0.08)',
        padding: '5rem 0 0 0',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ maxWidth: '1200px', width: '100%', padding: '0 1rem', position: 'relative' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4.5rem', position: 'relative', zIndex: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{ height: '1px', backgroundColor: 'var(--color-primary)', width: '40px', opacity: 0.6 }} />
            <div style={{ width: '4px', height: '4px', backgroundColor: 'var(--color-primary)', transform: 'rotate(45deg)' }} />
            <span style={{ letterSpacing: '0.25em', fontWeight: 800, color: 'var(--color-primary)', fontSize: '0.72rem', textTransform: 'uppercase' }}>
              OUR MASTER PROCESS
            </span>
            <div style={{ width: '4px', height: '4px', backgroundColor: 'var(--color-primary)', transform: 'rotate(45deg)' }} />
            <div style={{ height: '1px', backgroundColor: 'var(--color-primary)', width: '40px', opacity: 0.6 }} />
          </div>
          
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: 400, color: 'var(--color-dark)', lineHeight: 1.1, marginTop: '0', letterSpacing: '0.01em' }}>
            Design Your <span style={{ color: 'var(--color-primary)', fontStyle: 'italic' }}>Dream Sofa</span>
          </h2>
        </div>

        {/* 6 Step Cards Container with Timeline Line */}
        <div style={{ position: 'relative', paddingBottom: '3rem', zIndex: 10, maxWidth: '960px', margin: '0 auto' }}>
          
          {/* Decorative Dashed Timeline connecting Row 1 and Row 2 */}
          <div style={{ position: 'absolute', top: '100px', left: '10%', right: '10%', height: '1.5px', backgroundImage: 'linear-gradient(90deg, var(--color-primary) 50%, transparent 50%)', backgroundSize: '12px 100%', opacity: 0.3, zIndex: 0 }} />
          <div style={{ position: 'absolute', top: '100px', left: '50%', transform: 'translateX(-50%)', width: '1.5px', height: '240px', backgroundImage: 'linear-gradient(180deg, var(--color-primary) 50%, transparent 50%)', backgroundSize: '100% 12px', opacity: 0.3, zIndex: 0 }} />
          <div style={{ position: 'absolute', top: '340px', left: '30%', right: '30%', height: '1.5px', backgroundImage: 'linear-gradient(90deg, var(--color-primary) 50%, transparent 50%)', backgroundSize: '12px 100%', opacity: 0.3, zIndex: 0 }} />

          {/* Row 1: Steps 1, 2, 3, 4 */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '3rem', position: 'relative', zIndex: 1 }}>
            {steps.slice(0, 4).map((step) => {
              const isActive = step.id === activeStep;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  style={{
                    width: '165px', height: '210px',
                    borderRadius: '110px 110px 24px 24px', 
                    background: isActive ? 'var(--color-bg-alt)' : 'linear-gradient(145deg, var(--color-card-bg) 0%, var(--color-bg) 100%)',
                    border: isActive ? '2px solid var(--color-primary)' : '1px solid rgba(198, 134, 66, 0.25)',
                    boxShadow: isActive ? '0 15px 35px rgba(0,0,0,0.4)' : '0 8px 25px rgba(0,0,0,0.2)',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start',
                    padding: '2.5rem 0.5rem 1.2rem 0.5rem',
                    position: 'relative', cursor: 'pointer', outline: 'none'
                  }}
                  className="process-arched-pill"
                >
                  {/* Floating Number Badge */}
                  <div style={{ position: 'absolute', top: '-20px', width: '40px', height: '40px', borderRadius: '50%', background: isActive ? 'linear-gradient(135deg, #d3914a 0%, #b87532 100%)' : 'var(--color-bg-alt)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.95rem', border: '3px solid var(--color-bg)', boxShadow: '0 4px 12px rgba(0,0,0,0.3)', transition: 'all 0.3s ease', zIndex: 2 }}>
                    {step.number}
                  </div>

                  {/* Icon Circle */}
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: isActive ? 'rgba(198,134,66,0.08)' : 'transparent', border: isActive ? '1px dashed rgba(198,134,66,0.3)' : '1px solid transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', transition: 'all 0.3s ease', color: isActive ? 'var(--color-primary)' : 'var(--color-primary)' }}>
                    {step.icon}
                  </div>

                  {/* Title */}
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: isActive ? 'var(--color-dark)' : 'var(--color-dark-muted)', lineHeight: '1.3', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {step.title}
                  </span>
                  
                  {/* Active Indicator Dot */}
                  {isActive && <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--color-primary)', position: 'absolute', bottom: '1rem' }} />}
                </button>
              );
            })}
          </div>

          {/* Row 2: Steps 5, 6 */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
            {steps.slice(4, 6).map((step) => {
              const isActive = step.id === activeStep;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  style={{
                    width: '165px', height: '210px',
                    borderRadius: '110px 110px 24px 24px', 
                    background: isActive ? 'var(--color-bg-alt)' : 'linear-gradient(145deg, var(--color-card-bg) 0%, var(--color-bg) 100%)',
                    border: isActive ? '2px solid var(--color-primary)' : '1px solid rgba(198, 134, 66, 0.25)',
                    boxShadow: isActive ? '0 15px 35px rgba(0,0,0,0.4)' : '0 8px 25px rgba(0,0,0,0.2)',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start',
                    padding: '2.5rem 0.5rem 1.2rem 0.5rem',
                    position: 'relative', cursor: 'pointer', outline: 'none'
                  }}
                  className="process-arched-pill"
                >
                  <div style={{ position: 'absolute', top: '-20px', width: '40px', height: '40px', borderRadius: '50%', background: isActive ? 'linear-gradient(135deg, #d3914a 0%, #b87532 100%)' : '#e6d3bf', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.95rem', border: '3px solid #fcfbf9', boxShadow: '0 4px 12px rgba(198,134,66,0.15)', transition: 'all 0.3s ease', zIndex: 2 }}>
                    {step.number}
                  </div>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: isActive ? 'rgba(198,134,66,0.08)' : 'transparent', border: isActive ? '1px dashed rgba(198,134,66,0.3)' : '1px solid transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', transition: 'all 0.3s ease', color: 'var(--color-primary)' }}>
                    {step.icon}
                  </div>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: isActive ? 'var(--color-dark)' : '#7a6a58', lineHeight: '1.3', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {step.title}
                  </span>
                  {isActive && <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--color-primary)', position: 'absolute', bottom: '1rem' }} />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Display Render: Show custom Step Page when active, else show the base cream process sofa diagram */}
        {activeStep !== null ? (
          <div style={{ paddingBottom: '4rem' }}>
            {renderStepPage()}
          </div>
        ) : (
          /* Seamless visual blending of custom cream sofa mockup */
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
            <img 
              src={customCreamSofaMockup} 
              alt="Our Process - Modern Luxury Custom Sofa Mockup" 
              style={{ 
                width: '80%',
                maxWidth: '680px', 
                height: 'auto', 
                objectFit: 'contain',
                display: 'block',
                borderRadius: '12px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
                marginBottom: '2rem'
              }}
            />
          </div>
        )}

      </div>

      <style>{`
        .process-arched-pill {
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        .process-arched-pill:hover {
          transform: translateY(-8px) !important;
          box-shadow: 0 18px 40px rgba(198, 134, 66, 0.18) !important;
          border-color: rgba(198, 134, 66, 0.5) !important;
          z-index: 10;
        }
        .process-arched-pill:hover > div:first-child {
          transform: translateY(-4px) scale(1.1) !important;
          box-shadow: 0 6px 16px rgba(198, 134, 66, 0.2) !important;
        }

        /* Float animation for option selector buttons (width, height, style, fabric, etc.) */
        .step-option-btn {
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease, border-color 0.2s ease !important;
          cursor: pointer;
        }
        .step-option-btn:hover {
          transform: translateY(-4px) !important;
          box-shadow: 0 8px 20px rgba(198, 134, 66, 0.18) !important;
          border-color: var(--color-primary) !important;
        }
        .step-option-btn:active {
          transform: translateY(-1px) !important;
          box-shadow: 0 3px 8px rgba(198, 134, 66, 0.1) !important;
        }

        /* Float for color swatch buttons */
        .color-swatch-btn {
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease !important;
        }
        .color-swatch-btn:hover {
          transform: translateY(-5px) scale(1.08) !important;
          box-shadow: 0 10px 22px rgba(0,0,0,0.2) !important;
        }

        /* Float for delivery zone buttons */
        .zone-option-btn {
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease !important;
        }
        .zone-option-btn:hover {
          transform: translateY(-3px) !important;
          box-shadow: 0 6px 16px rgba(198, 134, 66, 0.15) !important;
        }

        /* Float CTA action buttons */
        .btn-block-action {
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease, opacity 0.2s ease !important;
        }
        .btn-block-action:hover {
          transform: translateY(-3px) !important;
          box-shadow: 0 10px 24px rgba(198, 134, 66, 0.3) !important;
          opacity: 0.92;
        }
      `}</style>
    </section>
  );
};
export default Process;
