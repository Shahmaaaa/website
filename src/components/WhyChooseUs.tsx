import React from 'react';
import { Palette, Sparkles, ShieldCheck, Truck } from 'lucide-react';

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const WhyChooseUs: React.FC = () => {
  const features: FeatureItem[] = [
    {
      icon: <Palette size={28} style={{ color: '#c68642' }} />,
      title: 'Customize Sofas Like Anything',
      description: 'Choose your preferred width, seat depth, layout orientation, and back cushion density to match your comfort profile.',
    },
    {
      icon: <Sparkles size={28} style={{ color: '#c68642' }} />,
      title: 'Premium Quality Fabrics',
      description: 'Select from 150+ premium upholstery options — stain-resistant linens, rich velvets, and luxury leatherettes.',
    },
    {
      icon: <ShieldCheck size={28} style={{ color: '#c68642' }} />,
      title: 'Expert Local Carpentry',
      description: 'Hand-assembled by Wandoor craftsmen using seasoned teak and hardwoods built for lifetime durability.',
    },
    {
      icon: <Truck size={28} style={{ color: '#c68642' }} />,
      title: 'Reliable Home Delivery',
      description: 'Delivered safely in our own vehicles, directly to your living room anywhere in Kerala.',
    },
  ];

  return (
    <section style={{ position: 'relative', overflow: 'hidden' }}>

      {/* ══════════ CREAM PATTERN BANNER ══════════ */}
      <div style={{
        background: 'linear-gradient(160deg, #fdf8f2 0%, #faf3e8 40%, #f5ece0 70%, #fdf8f2 100%)',
        padding: '6rem 1.5rem 5rem',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
        borderBottom: '1px solid rgba(198,134,66,0.1)',
      }}>

        {/* ── Pattern layer: diagonal dot grid ── */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'radial-gradient(circle, rgba(198,134,66,0.18) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          opacity: 0.45
        }} />

        {/* ── Diagonal stripe overlay ── */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'repeating-linear-gradient(45deg, rgba(198,134,66,0.03) 0px, rgba(198,134,66,0.03) 1px, transparent 1px, transparent 18px)',
        }} />

        {/* ── Large concentric circles top-left ── */}
        <div style={{ position: 'absolute', top: '-100px', left: '-100px', width: '420px', height: '420px', borderRadius: '50%', border: '1.5px solid rgba(198,134,66,0.12)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '-60px',  left: '-60px',  width: '300px', height: '300px', borderRadius: '50%', border: '1px solid rgba(198,134,66,0.08)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '-20px',  left: '-20px',  width: '180px', height: '180px', borderRadius: '50%', border: '1px solid rgba(198,134,66,0.06)', pointerEvents: 'none' }} />

        {/* ── Large concentric circles bottom-right ── */}
        <div style={{ position: 'absolute', bottom: '-100px', right: '-100px', width: '400px', height: '400px', borderRadius: '50%', border: '1.5px solid rgba(198,134,66,0.1)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-60px',  right: '-60px',  width: '280px', height: '280px', borderRadius: '50%', border: '1px solid rgba(198,134,66,0.07)', pointerEvents: 'none' }} />

        {/* ── Diamond accents ── */}
        <div style={{ position: 'absolute', top: '2.5rem', right: '4rem', width: '44px', height: '44px', border: '1.5px solid rgba(198,134,66,0.18)', transform: 'rotate(45deg)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '3.5rem', right: '5rem', width: '28px', height: '28px', border: '1px solid rgba(198,134,66,0.11)', transform: 'rotate(45deg)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '2.5rem', left: '4rem', width: '44px', height: '44px', border: '1.5px solid rgba(198,134,66,0.18)', transform: 'rotate(45deg)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '3.5rem', left: '5rem', width: '28px', height: '28px', border: '1px solid rgba(198,134,66,0.11)', transform: 'rotate(45deg)', pointerEvents: 'none' }} />

        {/* ── Radial warm glow center ── */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(198,134,66,0.07) 0%, transparent 65%)', pointerEvents: 'none' }} />

        {/* ── Gold shimmer lines ── */}
        <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(198,134,66,0.35), transparent)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: 0, left: '20%', right: '20%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(198,134,66,0.2), transparent)', pointerEvents: 'none' }} />

        {/* ── Content ── */}
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '680px', margin: '0 auto' }}>

          {/* Gold divider eyebrow */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
            <div style={{ height: '1px', width: '40px', background: 'linear-gradient(90deg, transparent, #c68642)' }} />
            <div style={{ width: '5px', height: '5px', backgroundColor: '#c68642', transform: 'rotate(45deg)', opacity: 0.8 }} />
            <div style={{ height: '1px', width: '40px', background: 'linear-gradient(90deg, #c68642, transparent)' }} />
          </div>

          {/* Main Headline */}
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.1rem, 5vw, 3.4rem)', fontWeight: 400, lineHeight: 1.18, margin: '0 0 0.35rem 0', color: '#1a1208', letterSpacing: '0.01em' }}>
            Where Quality Begins.
          </h2>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.1rem, 5vw, 3.4rem)', fontWeight: 400, lineHeight: 1.18, margin: '0 0 2rem 0', letterSpacing: '0.01em', color: '#c68642' }}>
            Where Comfort Lives.
          </h2>

          {/* Decorative divider */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', marginBottom: '1.75rem' }}>
            <div style={{ height: '1px', width: '32px', backgroundColor: 'rgba(198,134,66,0.35)' }} />
            <div style={{ width: '5px', height: '5px', backgroundColor: '#c68642', transform: 'rotate(45deg)', opacity: 0.6 }} />
            <div style={{ height: '1px', width: '32px', backgroundColor: 'rgba(198,134,66,0.35)' }} />
          </div>

          {/* Body */}
          <p style={{ fontSize: '1rem', color: '#7a6a58', lineHeight: '1.78', maxWidth: '500px', margin: '0 auto' }}>
            Every piece is thoughtfully built by skilled craftsmen, combining durability, elegant design, and everyday comfort you'll enjoy for years.
          </p>
        </div>
      </div>

      {/* ══════════ FEATURE CARDS (DARK BROWN THEME) ══════════ */}
      <div style={{ backgroundColor: '#160e0a', padding: '5rem 1.5rem', position: 'relative' }}>
        {/* Subtle grid and glow overlay for the dark section */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(198,134,66,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(198,134,66,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '80%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(198,134,66,0.4), transparent)', pointerEvents: 'none' }} />
        
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.5rem', position: 'relative', zIndex: 1 }} className="why-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className="why-card"
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left',
                padding: '2.5rem 1.75rem', 
                backgroundColor: '#20150f', /* Rich espresso card */
                border: '1px solid rgba(198,134,66,0.15)', 
                borderRadius: '12px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                position: 'relative', overflow: 'hidden'
              }}
            >
              {/* Card top gold line accent */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #c68642, rgba(198,134,66,0.2))' }} className="card-top-line" />
              
              <div className="icon-wrapper" style={{ width: '56px', height: '56px', borderRadius: '12px', background: 'linear-gradient(135deg, rgba(198,134,66,0.15) 0%, rgba(198,134,66,0.05) 100%)', border: '1px solid rgba(198,134,66,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', transition: 'all 0.3s ease' }}>
                {feature.icon}
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#f5e8d0', marginBottom: '0.75rem', letterSpacing: '0.02em', lineHeight: 1.3 }}>{feature.title}</h3>
              <p style={{ fontSize: '0.88rem', color: '#a89889', lineHeight: '1.7', margin: 0 }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .why-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 520px) { .why-grid { grid-template-columns: 1fr !important; } }
        
        .why-card:hover { 
          transform: translateY(-10px) !important; 
          box-shadow: 0 25px 50px rgba(0,0,0,0.4), 0 0 40px rgba(198,134,66,0.1) !important; 
          border-color: rgba(198,134,66,0.4) !important;
          background-color: #261912 !important;
        }
        .why-card:hover .card-top-line {
          background: linear-gradient(90deg, #e3a564, #c68642) !important;
        }
        .why-card:hover .icon-wrapper {
          transform: scale(1.1);
          background: linear-gradient(135deg, rgba(198,134,66,0.25) 0%, rgba(198,134,66,0.1) 100%) !important;
        }
      `}</style>
    </section>
  );
};
export default WhyChooseUs;
