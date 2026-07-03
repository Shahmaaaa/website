import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: 'Do you deliver sofas and furniture across Kerala?',
      answer: 'Yes! We provide safe, reliable home delivery straight from our showroom/workshop in Kuttiyil, Wandoor, to any location or district across Kerala.',
    },
    {
      question: 'Can I customize the sizes, fabrics, and layout orientation?',
      answer: 'Absolutely. Customization is our specialty. You can select your preferred fabric color, upholstery material (linen, velvet, leatherette), foam density, seat height/depth, and choose left-facing or right-facing L-shape configurations.',
    },
    {
      question: 'What types of wood do you use for furniture frames?',
      answer: 'We use high-grade, seasoned Kerala teak wood and treated heavy-duty forest hardwoods. This ensures our sofa frameworks are structurally sound, warp-resistant, and built to last for generations.',
    },
    {
      question: 'Do you offer special rates for wholesale orders?',
      answer: 'Yes, we handle both retail and wholesale operations. We offer competitive rates for commercial spaces, hospitality suites, interior decorators, builders, and bulk residential projects.',
    },
    {
      question: 'What is the average timeline for custom-made sofa construction?',
      answer: 'Usually, custom-made orders are designed, structured, upholstered, and ready for home delivery within 7 to 12 working days from layout finalization.',
    },
  ];

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className="section" style={{ backgroundColor: '#EAE0D3', borderBottom: '1px solid rgba(198, 134, 66, 0.08)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header fade-in-on-scroll visible" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-subtitle" style={{ letterSpacing: '0.15em', fontWeight: 600, color: 'var(--color-primary)' }}>SUPPORT CENTER</span>
          <h2 className="section-title" style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 600, color: '#1A120E', marginTop: '0.5rem' }}>
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordions */}
        <div className="faq-root fade-in-on-scroll visible delay-1" style={{ maxWidth: '800px', margin: '0 auto' }}>
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              style={{
                background: openIndex === index ? '#3D2E24' : 'linear-gradient(135deg, #c4a484 0%, #684128 100%)',
                border: '1px solid rgba(166, 123, 91, 0.15)',
                borderRadius: '12px',
                marginBottom: '1rem',
                overflow: 'hidden',
                boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <button
                className="faq-question-btn"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1.5rem 1.75rem',
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  backgroundColor: 'transparent',
                  textAlign: 'left',
                  fontFamily: 'var(--font-family)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease'
                }}
              >
                <span style={{ paddingRight: '1rem', lineHeight: '1.4' }}>{item.question}</span>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  transition: 'all 0.3s ease'
                }}>
                  {openIndex === index ? <ChevronUp size={18} style={{ color: '#ffffff' }} /> : <ChevronDown size={18} style={{ color: '#ffffff' }} />}
                </div>
              </button>

              <div 
                className="faq-answer" 
                style={{ 
                  maxHeight: openIndex === index ? '200px' : '0', 
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  padding: openIndex === index ? '0 1.75rem 1.5rem 1.75rem' : '0 1.75rem',
                  opacity: openIndex === index ? 1 : 0
                }}
              >
                <p className="faq-answer-text" style={{ fontSize: '0.9rem', color: openIndex === index ? '#F4EFE6' : '#6B5B4F', lineHeight: '1.6', transition: 'color 0.3s ease' }}>
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .faq-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(166, 123, 91, 0.15) !important;
          border-color: rgba(166, 123, 91, 0.3) !important;
        }
      `}</style>
    </section>
  );
};
export default FAQ;
