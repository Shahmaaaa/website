import React from 'react';

interface GalleryItem {
  id: string;
  image: string;
  title: string;
  category: string;
  isWide?: boolean;
}

export const Gallery: React.FC = () => {
  const items: GalleryItem[] = [
    {
      id: 'gal-1',
      image: '/images/sofa_teal_3seater.jpg',
      title: 'Teal Modern 3-Seater',
      category: 'Collection',
    },
    {
      id: 'gal-2',
      image: '/images/sofa_orange_ribbed_lshape.jpg',
      title: 'Rust Orange Ribbed L-Shape',
      category: 'Collection',
      isWide: true,
    },
    {
      id: 'gal-3',
      image: '/images/sofa_lightgrey_3seater.jpg',
      title: 'Light Grey Button-Tufted 3-Seater',
      category: 'Collection',
    },
    {
      id: 'gal-4',
      image: '/images/sofa_brown_tufted_lshape.jpg',
      title: 'Caramel Diamond-Tufted Sectional',
      category: 'Collection',
    },
    {
      id: 'gal-5',
      image: '/images/sofa_orange_ribbed_3seater.jpg',
      title: 'Rust Orange Ribbed 3-Seater',
      category: 'Collection',
    },
    {
      id: 'gal-6',
      image: '/images/sofa_pink_velvet_3seater.jpg',
      title: 'Blush Pink Velvet 3-Seater',
      category: 'Collection',
    },
    {
      id: 'gal-7',
      image: '/images/sofa_brown_leather_sectional.jpg',
      title: 'Classic Brown Leather Sectional',
      category: 'Collection',
      isWide: true,
    },
    {
      id: 'gal-8',
      image: '/images/sofa_beige_fabric_3seater.png',
      title: 'Beige Fabric 3-Seater',
      category: 'Collection',
    },
    {
      id: 'gal-9',
      image: '/images/sofa_grey_sectional.png',
      title: 'Textured Grey L-Shape Sectional',
      category: 'Collection',
    },
    {
      id: 'gal-10',
      image: '/images/sofa_orange_velvet_sectional.png',
      title: 'Amber Velvet Sectional',
      category: 'Collection',
    },
  ];

  return (
    <section id="gallery" className="section" style={{ backgroundColor: '#F4EFE6', borderBottom: '1px solid rgba(198, 134, 66, 0.08)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header fade-in-on-scroll visible" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-subtitle" style={{ letterSpacing: '0.15em', fontWeight: 600, color: 'var(--color-primary)' }}>REAL HOMES SHOWCASE</span>
          <h2 className="section-title" style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 600, color: '#1A120E', marginTop: '0.5rem' }}>
            Our Gallery
          </h2>
        </div>

        {/* Grid */}
        <div className="gallery-grid fade-in-on-scroll visible delay-1">
          {items.map((item) => (
            <div
              key={item.id}
              className={`gallery-item ${item.isWide ? 'wide' : ''}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="gallery-img"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <h3 className="gallery-title">{item.title}</h3>
                <span className="gallery-category">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Gallery;
