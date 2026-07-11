import React, { useState, useEffect } from 'react';
import { MessageSquare, Search, X, Grid, List } from 'lucide-react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

interface SofaItem {
  id: string;
  name: string;
  style: string;
  tag?: string;
  swatches?: { name: string; hex: string }[];
  image?: string;
}

const STYLE_FILTERS = ['ALL', 'MODERN', 'L-SHAPE', 'SECTIONAL', 'CLASSIC', 'CUSTOM'];

export const Collection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [activeSwatches, setActiveSwatches] = useState<Record<string, string>>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sofas, setSofas] = useState<SofaItem[]>([]);

  useEffect(() => {
    const fetchSofas = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'sofas'));
        const dynamicSofas: SofaItem[] = querySnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            name: data.name || '',
            style: data.style || '',
            image: data.image || '',
            tag: data.tag || '',
            swatches: data.swatches || [],
            order: data.order !== undefined ? data.order : Number.MAX_SAFE_INTEGER,
            createdAt: data.createdAt || ''
          } as any;
        });

        // Sort client-side by order ascending. Legacy documents without 'order' default to end.
        dynamicSofas.sort((a: any, b: any) => {
          const orderA = a.order !== undefined ? a.order : Number.MAX_SAFE_INTEGER;
          const orderB = b.order !== undefined ? b.order : Number.MAX_SAFE_INTEGER;
          if (orderA !== orderB) {
            return orderA - orderB;
          }
          return new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime();
        });

        setSofas(dynamicSofas);
      } catch (error) {
        console.error("Error fetching dynamic sofas:", error);
      }
    };
    fetchSofas();
  }, []);

  const filtered = sofas.filter((s) => {
    const matchStyle = activeFilter === 'ALL' || s.style === activeFilter;
    const matchSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchStyle && matchSearch;
  });

  const handleWhatsApp = (sofa: SofaItem, intent: 'inquire' | 'colors' = 'inquire') => {
    const phoneNumber = '919961734882';
    const color = activeSwatches[sofa.id] || sofa.swatches?.[0]?.name || 'Default';

    // Build the absolute image URL so owner can tap it and view the sofa immediately
    const imageUrl = sofa.image
      ? sofa.image.startsWith('http')
        ? sofa.image
        : `${window.location.origin}${sofa.image}`
      : null;

    let message = '';
    if (intent === 'colors') {
      message =
        `Hi Zain Sofas & Furniture! 👋\n\n` +
        `I am interested in the *"${sofa.name}"* (${sofa.style}) sofa and would like to see the available colors.\n\n` +
        `📋 *Sofa Details:*\n` +
        `• Model: ${sofa.name}\n` +
        `• Style: ${sofa.style}\n` +
        (imageUrl ? `• Sofa Photo: ${imageUrl}\n` : '') +
        `\nCould you please show me all available fabric colors for this model?`;
    } else {
      message =
        `Hi Zain Sofas & Furniture! 👋\n\n` +
        `I am interested in the *"${sofa.name}"* sofa from your collection.\n\n` +
        `📋 *Sofa Details:*\n` +
        `• Model: ${sofa.name}\n` +
        `• Style: ${sofa.style}\n` +
        `• Selected Color: ${color}\n` +
        (imageUrl ? `• Sofa Photo: ${imageUrl}\n` : '') +
        `\nPlease share availability and pricing details. Thank you! 🙏`;
    }

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="collection" style={{ backgroundColor: '#F4EFE6', paddingBottom: '5rem' }}>
      {/* Section Header */}
      <div style={{ textAlign: 'center', padding: '5rem 1rem 3rem 1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.25rem', marginBottom: '0.5rem' }}>
          <div style={{ height: '1.5px', backgroundColor: 'var(--color-primary)', width: '50px', opacity: 0.4 }} />
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>OUR COLLECTION</span>
          <div style={{ height: '1.5px', backgroundColor: 'var(--color-primary)', width: '50px', opacity: 0.4 }} />
        </div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', fontWeight: 500, color: '#1A120E', lineHeight: 1.1, marginTop: '0.5rem' }}>
          Explore Our <span style={{ color: 'var(--color-primary)' }}>Sofas</span>
        </h2>
        <p style={{ fontSize: '0.9rem', color: '#6B5B4F', marginTop: '0.75rem', maxWidth: '480px', margin: '0.75rem auto 0' }}>
          Every sofa is handcrafted to order in our Wandoor workshop. Browse our curated collection below.
        </p>
      </div>

      {/* Controls Bar: Filters + Search + View Toggle */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>

        {/* Style Filter Pills */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
          {STYLE_FILTERS.map((f) => {
            const isActive = f === activeFilter;
            return (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                style={{
                  padding: '0.45rem 1.1rem',
                  borderRadius: '999px',
                  border: `1.5px solid ${isActive ? 'var(--color-primary)' : '#ddd'}`,
                  backgroundColor: isActive ? 'var(--color-primary)' : '#ffffff',
                  color: isActive ? '#ffffff' : '#555',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  textTransform: 'uppercase'
                }}
              >
                {f}
              </button>
            );
          })}

          {/* Spacer */}
          <div style={{ flex: 1 }} />

          {/* Search */}
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <Search size={15} style={{ position: 'absolute', left: '0.75rem', color: '#aaa', pointerEvents: 'none' }} />
            <input
              type="text"
              placeholder="Search sofas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                paddingLeft: '2.25rem',
                paddingRight: searchQuery ? '2rem' : '1rem',
                paddingTop: '0.45rem',
                paddingBottom: '0.45rem',
                border: '1.5px solid #ddd',
                borderRadius: '999px',
                fontSize: '0.78rem',
                outline: 'none',
                backgroundColor: '#ffffff',
                color: '#333',
                width: '200px'
              }}
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} style={{ position: 'absolute', right: '0.65rem', background: 'none', border: 'none', cursor: 'pointer', color: '#aaa', display: 'flex' }}>
                <X size={13} />
              </button>
            )}
          </div>

          {/* View Mode Toggle */}
          <div style={{ display: 'flex', border: '1.5px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
            <button
              onClick={() => setViewMode('grid')}
              style={{ padding: '0.45rem 0.75rem', backgroundColor: viewMode === 'grid' ? '#f0ebe3' : '#fff', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', color: viewMode === 'grid' ? 'var(--color-primary)' : '#aaa' }}
            >
              <Grid size={16} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              style={{ padding: '0.45rem 0.75rem', backgroundColor: viewMode === 'list' ? '#f0ebe3' : '#fff', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', borderLeft: '1.5px solid #ddd', color: viewMode === 'list' ? 'var(--color-primary)' : '#aaa' }}
            >
              <List size={16} />
            </button>
          </div>
        </div>

        {/* Results count */}
        <div style={{ fontSize: '0.78rem', color: '#aaa', fontWeight: 600 }}>
          {filtered.length} {filtered.length === 1 ? 'sofa' : 'sofas'} in {activeFilter === 'ALL' ? 'all styles' : activeFilter}
        </div>
      </div>

      {/* Product Grid */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'grid',
          gridTemplateColumns: viewMode === 'grid' ? 'repeat(4, 1fr)' : '1fr',
          gap: viewMode === 'grid' ? '1.5rem' : '1rem',
        }}
        className="collection-grid"
      >
        {filtered.map((sofa) => {
          const activeSwatch = activeSwatches[sofa.id] || sofa.swatches?.[0]?.name;

          return viewMode === 'grid' ? (
            // GRID CARD
            <div
              key={sofa.id}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid #eee',
                display: 'flex',
                flexDirection: 'column',
                transition: 'box-shadow 0.25s ease',
                cursor: 'pointer'
              }}
              className="sofa-card"
            >
              {/* Image Area — placeholder */}
              <div className="sofa-img-wrapper" style={{ position: 'relative', backgroundColor: '#f3efe8', aspectRatio: '4/3', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                {sofa.image ? (
                  <img src={sofa.image} alt={sofa.name} className="sofa-img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <div className="sofa-img" style={{ textAlign: 'center', color: '#c4b8a4' }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '0.25rem' }}>🛋</div>
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Photo Coming Soon</span>
                  </div>
                )}
              </div>

              {/* Card Info */}
              <div style={{ padding: '1rem 1rem 1.25rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.65rem', flexGrow: 1 }}>
                {/* Style label + Name */}
                <div>
                  <span style={{ fontSize: '0.62rem', fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '0.15rem' }}>
                    {sofa.style}
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', fontWeight: 600, color: '#151515', margin: 0, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    {sofa.name}
                  </h3>
                </div>

                {/* Swatches */}
                {sofa.swatches && sofa.swatches.length > 0 && (
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', alignItems: 'center' }}>
                    {sofa.swatches.map((sw) => (
                      <button
                        key={sw.name}
                        onClick={() => setActiveSwatches((prev) => ({ ...prev, [sofa.id]: sw.name }))}
                        title={sw.name}
                        style={{
                          width: '18px',
                          height: '18px',
                          borderRadius: '50%',
                          backgroundColor: sw.hex,
                          border: `2.5px solid ${activeSwatch === sw.name ? 'var(--color-primary)' : 'transparent'}`,
                          outline: `1.5px solid ${activeSwatch === sw.name ? 'var(--color-primary)' : '#ddd'}`,
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          padding: 0
                        }}
                      />
                    ))}
                  </div>
                )}

                {/* CTA */}
                <button
                  onClick={() => handleWhatsApp(sofa)}
                  style={{
                    marginTop: 'auto',
                    backgroundColor: 'transparent',
                    border: '1.5px solid var(--color-primary)',
                    color: 'var(--color-primary)',
                    padding: '0.55rem 0',
                    borderRadius: '4px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.4rem',
                    transition: 'all 0.2s ease',
                    width: '100%'
                  }}
                  className="sofa-inquire-btn"
                >
                  <MessageSquare size={13} />
                  INQUIRE
                </button>
              </div>
            </div>
          ) : (
            // LIST ROW
            <div
              key={sofa.id}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                border: '1px solid #eee',
                display: 'grid',
                gridTemplateColumns: '180px 1fr auto',
                gap: '1.5rem',
                alignItems: 'center',
                padding: '1rem',
                transition: 'box-shadow 0.25s ease'
              }}
              className="sofa-card"
            >
              {/* Thumbnail */}
              <div className="sofa-img-wrapper" style={{ backgroundColor: '#f3efe8', borderRadius: '6px', aspectRatio: '4/3', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                {sofa.image ? (
                  <img src={sofa.image} alt={sofa.name} className="sofa-img" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '6px' }} />
                ) : (
                  <span className="sofa-img" style={{ fontSize: '1.8rem' }}>🛋</span>
                )}
              </div>

              {/* Info */}
              <div>
                <span style={{ fontSize: '0.62rem', fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{sofa.style}</span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontWeight: 600, color: '#151515', margin: '0.15rem 0 0.5rem 0', textTransform: 'uppercase' }}>{sofa.name}</h3>
                {sofa.swatches && (
                  <div style={{ display: 'flex', gap: '0.4rem' }}>
                    {sofa.swatches.map((sw) => (
                      <button
                        key={sw.name}
                        onClick={() => setActiveSwatches((prev) => ({ ...prev, [sofa.id]: sw.name }))}
                        title={sw.name}
                        style={{ width: '18px', height: '18px', borderRadius: '50%', backgroundColor: sw.hex, border: `2.5px solid ${activeSwatch === sw.name ? 'var(--color-primary)' : 'transparent'}`, outline: `1.5px solid ${activeSwatch === sw.name ? 'var(--color-primary)' : '#ddd'}`, cursor: 'pointer', padding: 0 }}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* CTA */}
              <button
                onClick={() => handleWhatsApp(sofa)}
                style={{ backgroundColor: 'var(--color-primary)', border: 'none', color: '#fff', padding: '0.65rem 1.5rem', borderRadius: '4px', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem', whiteSpace: 'nowrap' }}
              >
                <MessageSquare size={13} />
                INQUIRE
              </button>
            </div>
          );
        })}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div style={{ textAlign: 'center', padding: '4rem 1rem', color: '#bbb' }}>
          <div style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>🛋</div>
          <p style={{ fontSize: '0.9rem', fontWeight: 600 }}>No sofas found for "{searchQuery}".</p>
        </div>
      )}

      <style>{`
        .sofa-card:hover {
          box-shadow: 0 8px 24px rgba(0,0,0,0.07);
        }
        .sofa-card:hover .sofa-img {
          transform: scale(1.05) translateY(-5px);
        }
        .sofa-img {
          transition: transform 0.3s ease;
        }
        .sofa-inquire-btn:hover {
          background-color: var(--color-primary) !important;
          color: #ffffff !important;
        }
        .sofa-colors-badge:hover {
          background-color: var(--color-primary) !important;
          color: #ffffff !important;
        }
        @media (max-width: 900px) {
          .collection-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 560px) {
          .collection-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Collection;
