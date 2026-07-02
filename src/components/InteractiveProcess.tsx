import React, { useState, useEffect } from 'react';
import { Palette, Sparkles, Move, Hammer } from 'lucide-react';

interface StepDetail {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  activeColor: string;
  image: string;
}

export const InteractiveProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  
  // Drag-and-drop state hooks
  const [draggedCircle, setDraggedCircle] = useState<number | null>(null);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [initialPos, setInitialPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [circleOffsets, setCircleOffsets] = useState<Record<number, { x: number; y: number }>>({
    1: { x: 0, y: 0 },
    2: { x: 0, y: 0 },
    3: { x: 0, y: 0 },
    4: { x: 0, y: 0 }
  });

  const steps: StepDetail[] = [
    {
      id: 1,
      title: 'DISCOVER YOUR STYLE',
      subtitle: 'STEP 1: CHOOSE A DESIGN BASE',
      description: 'Explore our design profiles to match your home\'s architecture. Whether you prefer a contemporary clean-line sectional, a classic tufted Chesterfield, or a modern low-profile track-arm lounge, we build the frame to suit your taste.',
      icon: <Palette size={20} />,
      activeColor: '#f2cf49', // Yellow
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'CHOOSE THE PERFECT SIZE',
      subtitle: 'STEP 2: CUSTOM DIMENSIONS',
      description: 'Fit your living room layout exactly with no gaps. Tell us your ideal width, seat depth, and height. Configure as a left-facing sectional, a right-facing L-shape, a cozy U-shape, or a classic 3-seater sofa set.',
      icon: <Move size={20} />,
      activeColor: 'var(--color-mint)', // Mint Teal
      image: 'https://images.unsplash.com/photo-1550254478-ead40cd825c0?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'SELECT UPHOLSTERY FABRICS',
      subtitle: 'STEP 3: OVER 150+ TEXTURES & COLORS',
      description: 'Find the fabric that fits your lifestyle. Choose from water-repellent performance velvets, stain-resistant textured cotton-linens, or durable executive leatherettes in a full spectrum of colors to match your wall tone.',
      icon: <Sparkles size={20} />,
      activeColor: '#ded4c8', // Beige
      image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      title: 'PERSONALIZE THE DETAILS',
      subtitle: 'STEP 4: HANDCRAFTED CUSTOM TOUCHES',
      description: 'Complete your masterpiece with custom details. Choose wood staining shades for support legs, add elegant diamond tufting, specify cushion softness (memory foam or orthopedic support), and select armrest designs.',
      icon: <Hammer size={20} />,
      activeColor: '#ffffff', // White
      image: '/images/showroom_sofa.jpg'
    }
  ];

  const currentStepData = steps.find(s => s.id === activeStep) || steps[0];

  const handleWhatsAppInquiry = (stepTitle: string) => {
    const phoneNumber = '919961734882';
    const message = encodeURIComponent(`Hi Zain Sofas, I would like to consult on custom building a sofa. I am looking at "${stepTitle}" options.`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  // Dial circular coordinates mapping
  const getCirclePosition = (id: number) => {
    switch (id) {
      case 1: return { top: '5px', left: '115px' }; // Top
      case 2: return { top: '115px', left: '225px' }; // Right
      case 3: return { top: '225px', left: '115px' }; // Bottom
      case 4: return { top: '115px', left: '5px' }; // Left
      default: return { top: '0px', left: '0px' };
    }
  };

  // Drag listeners
  const handleStartDrag = (e: React.MouseEvent | React.TouchEvent, id: number) => {
    if ('clientX' in e) {
      e.preventDefault();
    }
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    setDraggedCircle(id);
    setInitialPos({ x: clientX, y: clientY });
    setDragStart({ x: clientX - circleOffsets[id].x, y: clientY - circleOffsets[id].y });
  };

  // Global event tracker during drag
  useEffect(() => {
    const handleDrag = (e: MouseEvent | TouchEvent) => {
      if (draggedCircle === null) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      
      const dx = clientX - dragStart.x;
      const dy = clientY - dragStart.y;
      
      setCircleOffsets(prev => ({
        ...prev,
        [draggedCircle]: { x: dx, y: dy }
      }));
    };

    const handleEndDrag = (e: MouseEvent | TouchEvent) => {
      if (draggedCircle === null) return;
      
      const clientX = 'changedTouches' in e ? e.changedTouches[0].clientX : ('clientX' in e ? e.clientX : initialPos.x);
      const clientY = 'changedTouches' in e ? e.changedTouches[0].clientY : ('clientY' in e ? e.clientY : initialPos.y);
      const totalMove = Math.sqrt(Math.pow(clientX - initialPos.x, 2) + Math.pow(clientY - initialPos.y, 2));
      
      // If movement is under 6 pixels, treat it as a step selection click
      if (totalMove < 6) {
        setActiveStep(draggedCircle);
      }
      
      setDraggedCircle(null);
    };

    if (draggedCircle !== null) {
      window.addEventListener('mousemove', handleDrag);
      window.addEventListener('mouseup', handleEndDrag);
      window.addEventListener('touchmove', handleDrag, { passive: false });
      window.addEventListener('touchend', handleEndDrag);
    }

    return () => {
      window.removeEventListener('mousemove', handleDrag);
      window.removeEventListener('mouseup', handleEndDrag);
      window.removeEventListener('touchmove', handleDrag);
      window.removeEventListener('touchend', handleEndDrag);
    };
  }, [draggedCircle, dragStart, initialPos, circleOffsets]);

  const texturedWoodBg = 'https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?auto=format&fit=crop&w=1200&q=80';

  return (
    <section 
      style={{ 
        backgroundImage: `linear-gradient(rgba(21, 21, 21, 0.93), rgba(21, 21, 21, 0.95)), url(${texturedWoodBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#ffffff', 
        padding: '6rem 0', 
        textAlign: 'center',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        position: 'relative'
      }}
      id="custom-process"
    >
      <div className="container" style={{ maxWidth: '1100px' }}>
        {/* Header */}
        <div style={{ marginBottom: '5rem' }}>
          <span 
            style={{ 
              letterSpacing: '0.15em', 
              fontWeight: 700, 
              color: 'var(--color-primary)', 
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '0.5rem'
            }}
          >
            INTERACTIVE DRAGGABLE DIAL
          </span>
          <h2 
            style={{ 
              fontFamily: 'var(--font-serif)', 
              fontSize: '2.5rem', 
              fontWeight: 600, 
              color: '#ffffff',
              lineHeight: 1.2
            }}
          >
            Design Your Dream Sofa
          </h2>
          <p style={{ fontSize: '0.8rem', color: '#888888', marginTop: '0.5rem', fontStyle: 'italic' }}>
            *Drag the step circles around the dial console to arrange your custom dashboard workspace.
          </p>
        </div>

        {/* Dynamic Console Dial & Details Grid */}
        <div 
          className="masterpiece-row"
          style={{ 
            display: 'grid', 
            gridTemplateColumns: '0.9fr 1.1fr', 
            gap: '5rem', 
            alignItems: 'center'
          }}
        >
          {/* Left Column: Draggable Stepper Dial Console */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div 
              className="stepper-console-dial"
              style={{
                position: 'relative',
                width: '320px',
                height: '320px',
                background: 'radial-gradient(circle, rgba(198,134,66,0.06) 0%, rgba(0,0,0,0) 70%)'
              }}
            >
              {/* Outer Dashed Circular Guide Ring */}
              <div 
                style={{
                  position: 'absolute',
                  width: '220px',
                  height: '220px',
                  borderRadius: '50%',
                  border: '1.5px dashed rgba(198, 134, 66, 0.2)',
                  top: '50px',
                  left: '50px',
                  pointerEvents: 'none'
                }}
              />

              {/* Central Info Core Hub */}
              <div 
                style={{
                  position: 'absolute',
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  backgroundColor: '#1c1c1c',
                  border: `1.5px solid ${currentStepData.activeColor}`,
                  top: '85px',
                  left: '85px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: `0 0 35px ${currentStepData.activeColor}15`,
                  transition: 'border-color 0.4s ease, box-shadow 0.4s ease'
                }}
              >
                <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--color-primary)', letterSpacing: '0.1em' }}>STEP</span>
                <span style={{ fontSize: '2.5rem', fontWeight: 800, fontFamily: 'var(--font-serif)', color: '#ffffff', lineHeight: 1.1 }}>
                  0{currentStepData.id}
                </span>
                <span style={{ fontSize: '0.62rem', fontWeight: 800, color: '#bbbbbb', letterSpacing: '0.05em', textTransform: 'uppercase', marginTop: '3px' }}>
                  {currentStepData.id === 1 ? 'STYLE' : currentStepData.id === 2 ? 'SIZE' : currentStepData.id === 3 ? 'FABRIC' : 'DETAIL'}
                </span>
              </div>

              {/* Floating circular steps */}
              {steps.map((step) => {
                const isActive = step.id === activeStep;
                const basePos = getCirclePosition(step.id);
                const offset = circleOffsets[step.id] || { x: 0, y: 0 };
                
                return (
                  <button
                    key={step.id}
                    onMouseDown={(e) => handleStartDrag(e, step.id)}
                    onTouchStart={(e) => handleStartDrag(e, step.id)}
                    style={{
                      position: 'absolute',
                      top: basePos.top,
                      left: basePos.left,
                      transform: `translate(${offset.x}px, ${offset.y}px)`,
                      width: '90px',
                      height: '90px',
                      borderRadius: '50%',
                      backgroundColor: isActive ? step.activeColor : '#222222',
                      border: `4px solid ${isActive ? '#ffffff' : '#333333'}`,
                      color: isActive ? '#151515' : '#888888',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: draggedCircle === step.id ? 'grabbing' : 'grab',
                      transition: draggedCircle === step.id ? 'none' : 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s, border-color 0.3s',
                      boxShadow: isActive ? '0 10px 20px rgba(0,0,0,0.3)' : 'none',
                      outline: 'none',
                      zIndex: draggedCircle === step.id ? 100 : 20,
                      userSelect: 'none',
                      touchAction: 'none'
                    }}
                    className={`step-circle-badge bloom-step-${step.id}`}
                  >
                    <span style={{ fontSize: '0.68rem', fontWeight: 800, opacity: isActive ? 0.9 : 0.6 }}>0{step.id}</span>
                    <span style={{ fontSize: '0.58rem', fontWeight: 800, letterSpacing: '0.05em', textTransform: 'uppercase', marginTop: '2px' }}>
                      {step.id === 1 ? 'STYLE' : step.id === 2 ? 'SIZE' : step.id === 3 ? 'FABRIC' : 'DETAIL'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Display Panel */}
          <div 
            style={{ 
              display: 'flex', 
              flexDirection: 'column',
              gap: '2.5rem',
              backgroundColor: 'rgba(26, 26, 26, 0.85)',
              backdropFilter: 'blur(10px)',
              padding: '2.5rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(255,255,255,0.05)',
              textAlign: 'left',
              minHeight: '420px',
              justifyContent: 'center'
            }}
          >
            {/* Visual Panel */}
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-sm)', boxShadow: '0 10px 25px rgba(0,0,0,0.25)', background: '#222222' }}>
              <img 
                src={currentStepData.image} 
                alt={currentStepData.title} 
                style={{ 
                  width: '100%', 
                  height: '240px', 
                  objectFit: 'cover', 
                  display: 'block'
                }}
              />
            </div>

            {/* Description Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)' }}>
                {currentStepData.icon}
                <span style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {currentStepData.subtitle}
                </span>
              </div>
              
              <h3 
                style={{ 
                  fontFamily: 'var(--font-family)', 
                  fontWeight: 800, 
                  fontSize: '1.5rem', 
                  letterSpacing: '0.04em', 
                  color: '#ffffff',
                  textTransform: 'uppercase',
                  lineHeight: 1.2
                }}
              >
                {currentStepData.title}
              </h3>

              <p style={{ fontSize: '0.88rem', color: '#bbbbbb', lineHeight: '1.7', margin: 0 }}>
                {currentStepData.description}
              </p>

              <button
                onClick={() => handleWhatsAppInquiry(currentStepData.title)}
                style={{
                  backgroundColor: 'var(--color-primary)',
                  color: '#ffffff',
                  border: 'none',
                  padding: '0.8rem 2rem',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  textTransform: 'uppercase',
                  marginTop: '0.5rem'
                }}
                className="btn-block-action"
              >
                INQUIRE THIS STEP
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
export default InteractiveProcess;
