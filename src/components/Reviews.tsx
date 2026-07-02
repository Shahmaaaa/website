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
    <section className="section" style={{ backgroundColor: 'var(--color-bg)', borderBottom: '1px solid rgba(198, 134, 66, 0.08)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header fade-in-on-scroll visible" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-subtitle" style={{ letterSpacing: '0.15em', fontWeight: 600, color: 'var(--color-primary)' }}>CLIENT REVIEWS</span>
          <h2 className="section-title" style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 600, color: 'var(--color-dark)', marginTop: '0.5rem' }}>
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
                backgroundColor: 'var(--color-bg-alt)',
                border: '1px solid rgba(198, 134, 66, 0.08)',
                padding: '2.5rem 2rem',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              {/* Star Rating */}
              <div className="stars-container" style={{ display: 'flex', color: '#ffb300', gap: '2px' }}>
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="#ffb300" stroke="none" />
                ))}
              </div>

              {/* Review Text */}
              <p className="review-text" style={{ fontSize: '0.9rem', color: 'var(--color-dark)', lineHeight: '1.6', fontStyle: 'italic', flexGrow: 1 }}>
                "{review.text}"
              </p>

              {/* Reviewer Meta */}
              <div className="reviewer-info" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', borderTop: '1px solid rgba(198, 134, 66, 0.1)', paddingTop: '1rem' }}>
                <div 
                  className="reviewer-avatar"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-primary)',
                    color: 'var(--color-white)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '0.9rem'
                  }}
                >
                  {review.initials}
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-dark)' }}>{review.name}</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-dark-muted)' }}>{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Reviews;
