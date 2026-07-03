import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  initials: string;
}

export const Reviews: React.FC = () => {
  const reviews: Testimonial[] = [
    {
      name: 'Mathew Joseph',
      location: 'Ernakulam, Kerala',
      rating: 5,
      text: 'Absolutely love the custom L-shaped sectional sofa we ordered. The fabric is highly premium and stain-resistant. Zain\'s delivery team brought it safely and set it up perfectly.',
      initials: 'MJ',
    },
    {
      name: 'Fathima Nissa',
      location: 'Wandoor, Kerala',
      rating: 5,
      text: 'We ordered custom velvet sofas for our new house. The craftsmanship is excellent, and the dual-tone colors match our living room walls beautifully. Truly furniture that feels like home!',
      initials: 'FN',
    },
    {
      name: 'Rajesh Kumar',
      location: 'Kozhikode, Kerala',
      rating: 5,
      text: 'Best furniture showroom in the Wandoor region. They customized the seat depth and foam density exactly to my parents\' orthopedic comfort needs. Excellent wholesale rates and client care.',
      initials: 'RK',
    },
  ];

  return (
    <section className="section" style={{ background: 'linear-gradient(135deg, #c4a484 0%, #684128 100%)', borderBottom: '1px solid rgba(198, 134, 66, 0.08)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header fade-in-on-scroll visible" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-subtitle" style={{ letterSpacing: '0.15em', fontWeight: 600, color: '#f5ebe0' }}>CLIENT REVIEWS</span>
          <h2 className="section-title" style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 600, color: '#ffffff', marginTop: '0.5rem' }}>
            Customer Testimonials
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid-3 reviews-grid fade-in-on-scroll visible delay-1">
          {reviews.map((review, idx) => (
            <div 
              key={idx} 
              className="review-card"
              style={{
                background: 'linear-gradient(135deg, #5C4033 0%, #3E2723 60%, #2e1c15 100%)', // Mostly dark brown gradient
                border: '1px solid rgba(198, 134, 66, 0.2)',
                padding: '2.5rem 2rem',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                color: '#ffffff',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
            >
              {/* Star Rating */}
              <div className="stars-container" style={{ display: 'flex', color: '#ffcd3c', gap: '2px' }}>
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="#ffcd3c" stroke="none" />
                ))}
              </div>

              {/* Review Text */}
              <p className="review-text" style={{ fontSize: '0.95rem', color: '#fcfaf8', lineHeight: '1.6', fontStyle: 'italic', flexGrow: 1, textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>
                "{review.text}"
              </p>

              {/* Reviewer Meta */}
              <div className="reviewer-info" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', borderTop: '1px solid rgba(255, 255, 255, 0.15)', paddingTop: '1rem' }}>
                <div 
                  className="reviewer-avatar"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '1rem',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                >
                  {review.initials}
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff' }}>{review.name}</h4>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.8)' }}>{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div style={{ textAlign: 'center', marginTop: '3.5rem' }} className="fade-in-on-scroll visible delay-2">
          <p style={{ color: '#fcfaf8', fontSize: '0.9rem', marginBottom: '1rem', textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>
            Have you purchased from us? We'd love to hear your thoughts!
          </p>
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              alert("Please provide your Google Business Profile link to activate this button.");
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: '#ffffff',
              color: 'var(--color-primary)',
              padding: '0.85rem 2.5rem',
              borderRadius: '999px',
              fontSize: '0.95rem',
              fontWeight: 700,
              textDecoration: 'none',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
              transition: 'all 0.2s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
            }}
          >
            <Star size={18} fill="currentColor" />
            Rate Us on Google
          </a>
        </div>
      </div>
    </section>
  );
};
export default Reviews;
