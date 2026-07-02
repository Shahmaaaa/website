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
                backgroundColor: '#ffffff',
                border: '1px solid rgba(198, 134, 66, 0.08)',
                borderRadius: 'var(--radius-sm)',
                marginBottom: '1rem',
                overflow: 'hidden'
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
                  padding: '1.5rem 2rem',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: '#1A120E',
                  textAlign: 'left',
                  fontFamily: 'var(--font-family)'
                }}
              >
                <span>{item.question}</span>
                {openIndex === index ? <ChevronUp size={18} style={{ color: 'var(--color-primary)' }} /> : <ChevronDown size={18} style={{ color: 'var(--color-primary)' }} />}
              </button>

              <div 
                className="faq-answer" 
                style={{ 
                  maxHeight: openIndex === index ? '200px' : '0', 
                  transition: 'all 0.3s ease',
                  padding: openIndex === index ? '0 2rem 1.5rem 2rem' : '0 2rem',
                  opacity: openIndex === index ? 1 : 0
                }}
              >
                <p className="faq-answer-text" style={{ fontSize: '0.9rem', color: '#6B5B4F', lineHeight: '1.6' }}>
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FAQ;
