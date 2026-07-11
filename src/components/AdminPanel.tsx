import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { onAuthStateChanged, signOut, type User } from 'firebase/auth';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { AdminLogin } from './AdminLogin';
import { seedSofasToFirestore } from '../data/importSofas';
import { Trash2, Plus, Image as ImageIcon, LogOut, Edit, X, Palette, Database } from 'lucide-react';

export const AdminPanel: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [sofas, setSofas] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isSeeding, setIsSeeding] = useState(false);

  // Form State
  const [editingProduct, setEditingProduct] = useState<any | null>(null);
  const [newName, setNewName] = useState('');
  const [newStyle, setNewStyle] = useState('MODERN');
  const [newTag, setNewTag] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  // Swatches (Color Circles) State
  const [swatches, setSwatches] = useState<{ name: string; hex: string }[]>([]);
  const [currentSwatchName, setCurrentSwatchName] = useState('');
  const [currentSwatchHex, setCurrentSwatchHex] = useState('#C68642');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        fetchSofas();
      } else {
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const fetchSofas = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, 'sofas'));
      const sofasData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      // Sort client-side by order ascending. Legacy documents without 'order' default to end.
      sofasData.sort((a: any, b: any) => {
        const orderA = a.order !== undefined ? a.order : Number.MAX_SAFE_INTEGER;
        const orderB = b.order !== undefined ? b.order : Number.MAX_SAFE_INTEGER;
        if (orderA !== orderB) {
          return orderA - orderB;
        }
        return new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime();
      });

      setSofas(sofasData);
    } catch (error) {
      console.error("Error fetching sofas:", error);
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  const handleSeedData = async () => {
    if (sofas.length > 0) {
      alert("Products already exist in Firestore. Seeding skipped to prevent duplicates.");
      return;
    }

    const confirmed = window.confirm("This will import the 15 original sofa products (with their styles, tags, image paths, and color swatches) into Firestore. Proceed?");
    if (!confirmed) return;

    setIsSeeding(true);
    try {
      const count = await seedSofasToFirestore();
      alert(`Import complete! Loaded ${count} sofas into Firestore.`);
      fetchSofas();
    } catch (error: any) {
      console.error("Seeding failed:", error);
      alert("Error seeding data: " + error.message);
    }
    setIsSeeding(false);
  };

  const handleSaveSofa = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName) {
      alert("Please provide a name.");
      return;
    }

    setUploading(true);
    try {
      let finalImageUrl = editingProduct ? editingProduct.image : '';

      // Upload file to Cloudinary if selected
      if (imageFile) {
        const formData = new FormData();
        formData.append('file', imageFile);
        formData.append('upload_preset', 'zain_sofas_upload');

        const response = await fetch('https://api.cloudinary.com/v1_1/fwgr9fu2/image/upload', {
          method: 'POST',
          body: formData
        });
        
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.error?.message || 'Failed to upload image');
        }
        finalImageUrl = data.secure_url;
      } else if (!editingProduct) {
        alert("Please select a photo to upload.");
        setUploading(false);
        return;
      }

      if (editingProduct) {
        // Edit mode: update Firestore document
        const docRef = doc(db, 'sofas', editingProduct.id);
        await updateDoc(docRef, {
          name: newName,
          style: newStyle,
          tag: newTag,
          image: finalImageUrl,
          swatches: swatches
        });
        alert(`Successfully updated product "${newName}"`);
      } else {
        // Add mode: determine order index (max order + 1)
        const nextOrder = sofas.reduce((max, s) => Math.max(max, s.order ?? 0), -1) + 1;

        // Add document to Firestore
        await addDoc(collection(db, 'sofas'), {
          name: newName,
          style: newStyle,
          tag: newTag,
          image: finalImageUrl,
          swatches: swatches,
          order: nextOrder,
          createdAt: new Date().toISOString()
        });
        alert(`Successfully added product "${newName}"`);
      }

      resetForm();
      fetchSofas();
    } catch (error) {
      console.error("Error saving sofa:", error);
      alert("Error saving sofa. Check console.");
    }
    setUploading(false);
  };

  const handleEditSofa = (sofa: any) => {
    setEditingProduct(sofa);
    setNewName(sofa.name || '');
    setNewStyle(sofa.style || 'MODERN');
    setNewTag(sofa.tag || '');
    setSwatches(sofa.swatches || []);
    setImageFile(null); // Keep the current image unless a new one is explicitly selected
  };

  const handleDeleteSofa = async (id: string, name: string) => {
    const confirmed = window.confirm(`Are you sure you want to delete the product "${name}"?\nThis action is permanent and cannot be undone.`);
    if (!confirmed) return;
    
    try {
      await deleteDoc(doc(db, 'sofas', id));
      if (editingProduct?.id === id) {
        resetForm();
      }
      fetchSofas();
    } catch (error) {
      console.error("Error deleting sofa:", error);
      alert("Error deleting sofa.");
    }
  };

  const resetForm = () => {
    setNewName('');
    setNewStyle('MODERN');
    setNewTag('');
    setImageFile(null);
    setSwatches([]);
    setCurrentSwatchName('');
    setCurrentSwatchHex('#C68642');
    setEditingProduct(null);
  };

  const handleAddSwatch = () => {
    if (!currentSwatchName.trim()) {
      alert("Please enter a color name.");
      return;
    }
    // Prevent duplicate color names in the same product
    if (swatches.some(s => s.name.toLowerCase() === currentSwatchName.trim().toLowerCase())) {
      alert("A color swatch with this name already exists.");
      return;
    }
    setSwatches([...swatches, { name: currentSwatchName.trim(), hex: currentSwatchHex }]);
    setCurrentSwatchName('');
  };

  const handleRemoveSwatch = (index: number) => {
    setSwatches(swatches.filter((_, i) => i !== index));
  };

  if (loading) {
    return <div style={{ textAlign: 'center', marginTop: '3rem', fontFamily: 'sans-serif', color: '#666' }}>Loading Dashboard...</div>;
  }

  if (!user) {
    return <AdminLogin onLogin={() => {}} />;
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      {/* Top Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
        <div>
          <h1 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', margin: 0, fontSize: '2.2rem' }}>Admin Dashboard</h1>
          <p style={{ color: '#666', fontSize: '0.85rem', marginTop: '0.25rem' }}>Manage sofa products in Firestore</p>
        </div>
        <button 
          onClick={handleLogout}
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', border: '1px solid #ccc', borderRadius: '4px', cursor: 'pointer', backgroundColor: '#fff', fontWeight: 600, color: '#333' }}
        >
          <LogOut size={16} /> Logout
        </button>
      </div>

      {/* Database Empty / Seeding Section */}
      {sofas.length === 0 && (
        <div style={{ backgroundColor: '#fffcf5', border: '1px solid #f6e0b5', borderRadius: '8px', padding: '1.5rem', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#c68642' }}>
            <Database size={20} />
            <strong style={{ fontSize: '1rem' }}>Firestore Collection is Empty</strong>
          </div>
          <p style={{ margin: 0, fontSize: '0.88rem', color: '#6b5b4f', lineHeight: 1.5 }}>
            There are currently no products in your database. Click the button below to seed the database with the 15 original website sofas, including their tags, images, and color swatches.
          </p>
          <div>
            <button
              onClick={handleSeedData}
              disabled={isSeeding}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#c68642',
                color: '#fff',
                border: 'none',
                padding: '0.6rem 1.2rem',
                borderRadius: '4px',
                fontWeight: 'bold',
                cursor: isSeeding ? 'not-allowed' : 'pointer',
                fontSize: '0.85rem'
              }}
            >
              {isSeeding ? 'Importing...' : 'Import Original Sofas'}
            </button>
          </div>
        </div>
      )}

      {/* Grid Layout: Form on Left, List on Right */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1.9fr', gap: '2.5rem', alignItems: 'start' }}>
        
        {/* Save/Edit Form Card */}
        <div style={{ backgroundColor: '#fcfbfa', padding: '1.75rem', borderRadius: '8px', border: '1px solid #eae5dc' }}>
          <h3 style={{ marginTop: 0, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)', fontFamily: 'var(--font-serif)', fontSize: '1.3rem' }}>
            {editingProduct ? <Edit size={20} /> : <Plus size={20} />}
            {editingProduct ? 'Edit Sofa Product' : 'Add New Sofa'}
          </h3>

          <form onSubmit={handleSaveSofa}>
            
            {/* Sofa Name */}
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '0.4rem', fontWeight: 600, color: '#444' }}>Sofa Name</label>
              <input 
                type="text" 
                value={newName} 
                onChange={e => setNewName(e.target.value)}
                style={{ width: '100%', padding: '0.6rem', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
                required
                placeholder="e.g. Royal Chesterfield"
              />
            </div>

            {/* Style Category */}
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '0.4rem', fontWeight: 600, color: '#444' }}>Style Category</label>
              <select 
                value={newStyle} 
                onChange={e => setNewStyle(e.target.value)}
                style={{ width: '100%', padding: '0.6rem', border: '1px solid #ccc', borderRadius: '4px', backgroundColor: '#fff', boxSizing: 'border-box' }}
              >
                <option value="MODERN">MODERN</option>
                <option value="CLASSIC">CLASSIC</option>
                <option value="SECTIONAL">SECTIONAL</option>
                <option value="L-SHAPE">L-SHAPE</option>
                <option value="CUSTOM">CUSTOM</option>
              </select>
            </div>

            {/* Tag */}
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '0.4rem', fontWeight: 600, color: '#444' }}>Tag (Optional)</label>
              <input 
                type="text" 
                value={newTag} 
                onChange={e => setNewTag(e.target.value)}
                style={{ width: '100%', padding: '0.6rem', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
                placeholder="e.g. Premium, New Arrival, Featured"
              />
            </div>

            {/* Photo / Image Selection */}
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '0.4rem', fontWeight: 600, color: '#444' }}>Photo</label>
              
              {editingProduct && !imageFile && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px', backgroundColor: '#fff' }}>
                  <div style={{ width: '50px', height: '40px', overflow: 'hidden', borderRadius: '2px', backgroundColor: '#f5f5f5' }}>
                    <img src={editingProduct.image} alt="current" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#666', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1 }}>
                    {editingProduct.image}
                  </div>
                  <span style={{ fontSize: '0.7rem', color: '#2b6cb0', fontWeight: 600, padding: '0.1rem 0.3rem', backgroundColor: '#ebf8ff', borderRadius: '3px' }}>Current</span>
                </div>
              )}

              <div style={{ border: '1px dashed #ccc', padding: '1rem', textAlign: 'center', borderRadius: '4px', backgroundColor: '#fff' }}>
                <input 
                  type="file" 
                  accept="image/*"
                  onChange={e => setImageFile(e.target.files ? e.target.files[0] : null)}
                  id="file-upload"
                  style={{ display: 'none' }}
                />
                <label htmlFor="file-upload" style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#666' }}>
                  <ImageIcon size={24} style={{ marginBottom: '0.5rem', color: 'var(--color-primary)' }} />
                  {imageFile ? (
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-primary)', fontWeight: 600 }}>{imageFile.name}</span>
                  ) : (
                    <span style={{ fontSize: '0.8rem' }}>{editingProduct ? 'Select new photo to replace' : 'Click to upload image file'}</span>
                  )}
                </label>
              </div>
            </div>

            {/* Color circles / Swatches Section */}
            <div style={{ marginBottom: '1.5rem', padding: '1rem', border: '1px solid #eae5dc', borderRadius: '6px', backgroundColor: '#fcfcfc' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.88rem', fontWeight: 600, color: '#333', marginBottom: '0.75rem' }}>
                <Palette size={16} style={{ color: 'var(--color-primary)' }} />
                Color Circles (Swatches)
              </label>

              {/* Added Swatches List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
                {swatches.length === 0 ? (
                  <span style={{ fontSize: '0.78rem', color: '#aaa', fontStyle: 'italic' }}>No color circles added yet.</span>
                ) : (
                  swatches.map((sw, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.35rem 0.5rem', border: '1px solid #eee', borderRadius: '4px', backgroundColor: '#fff' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: sw.hex, border: '1px solid #ccc', display: 'inline-block' }} />
                        <span style={{ fontSize: '0.8rem', fontWeight: 500, color: '#444' }}>{sw.name}</span>
                        <span style={{ fontSize: '0.7rem', color: '#999', fontFamily: 'monospace' }}>{sw.hex}</span>
                      </div>
                      <button 
                        type="button" 
                        onClick={() => handleRemoveSwatch(idx)}
                        style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#e53e3e', display: 'flex', alignItems: 'center', padding: '0.15rem' }}
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {/* Add Swatch Row */}
              <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                <input 
                  type="text"
                  placeholder="Color Name (e.g. Tan)"
                  value={currentSwatchName}
                  onChange={e => setCurrentSwatchName(e.target.value)}
                  style={{ flex: 1, padding: '0.45rem', border: '1px solid #ccc', borderRadius: '4px', fontSize: '0.8rem' }}
                />
                <input 
                  type="color"
                  value={currentSwatchHex}
                  onChange={e => setCurrentSwatchHex(e.target.value)}
                  style={{ width: '32px', height: '32px', border: '1px solid #ccc', borderRadius: '4px', cursor: 'pointer', padding: 0, backgroundColor: 'transparent' }}
                  title="Choose swatch hex color"
                />
                <button
                  type="button"
                  onClick={handleAddSwatch}
                  style={{
                    backgroundColor: '#fff',
                    border: '1px solid var(--color-primary)',
                    color: 'var(--color-primary)',
                    padding: '0.45rem 0.75rem',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                  }}
                >
                  Add
                </button>
              </div>
            </div>

            {/* Form actions */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button 
                type="submit" 
                disabled={uploading}
                style={{ flex: 1, padding: '0.75rem', backgroundColor: 'var(--color-primary)', color: '#fff', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: uploading ? 'not-allowed' : 'pointer' }}
              >
                {uploading ? 'Processing...' : editingProduct ? 'Update Product' : 'Save Product'}
              </button>
              {editingProduct && (
                <button 
                  type="button" 
                  onClick={resetForm}
                  style={{ padding: '0.75rem 1rem', backgroundColor: '#fff', color: '#666', border: '1px solid #ccc', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Existing Products List */}
        <div>
          <h3 style={{ marginTop: 0, marginBottom: '1.5rem', fontFamily: 'var(--font-serif)', color: '#111', fontSize: '1.4rem' }}>
            Current Products ({sofas.length})
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {sofas.length === 0 ? (
              <div style={{ padding: '3rem', textAlign: 'center', color: '#999', border: '1px dashed #eae5dc', borderRadius: '8px', backgroundColor: '#fff' }}>
                <p style={{ margin: 0, fontWeight: 600, fontSize: '0.95rem' }}>No sofa products found in Firestore.</p>
                <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.8rem', color: '#b5a596' }}>Seed the database or use the form on the left to add a product.</p>
              </div>
            ) : (
              sofas.map(sofa => (
                <div key={sofa.id} style={{ display: 'flex', alignItems: 'center', padding: '1rem', border: '1px solid #eae5dc', borderRadius: '8px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.01)' }}>
                  
                  {/* Product Image */}
                  <div style={{ width: '90px', height: '68px', backgroundColor: '#fcfbfa', borderRadius: '4px', overflow: 'hidden', marginRight: '1.25rem', border: '1px solid #eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {sofa.image ? (
                      <img src={sofa.image} alt={sofa.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#aaa', fontSize: '0.7rem' }}>No Photo</div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 600, color: '#222', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{sofa.name}</h4>
                      {sofa.tag && (
                        <span style={{ fontSize: '0.65rem', padding: '0.15rem 0.4rem', backgroundColor: '#eef2f7', color: '#2b6cb0', borderRadius: '4px', fontWeight: 600 }}>
                          {sofa.tag}
                        </span>
                      )}
                    </div>
                    
                    {/* Style Category & Color circles indicator */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.75rem', marginTop: '0.35rem' }}>
                      <span style={{ fontSize: '0.72rem', padding: '0.15rem 0.4rem', backgroundColor: '#f7f6f2', borderRadius: '12px', color: '#6b5b4f', fontWeight: 700, border: '1px solid #eae5dc' }}>
                        {sofa.style}
                      </span>
                      {sofa.swatches && sofa.swatches.length > 0 && (
                        <div style={{ display: 'inline-flex', gap: '0.25rem', alignItems: 'center' }}>
                          {sofa.swatches.map((sw: any, sIdx: number) => (
                            <span 
                              key={sIdx} 
                              title={sw.name}
                              style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: sw.hex, border: '1px solid #ddd', display: 'inline-block' }} 
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions (Edit / Delete) */}
                  <div style={{ display: 'flex', gap: '0.25rem', marginLeft: '1rem' }}>
                    <button 
                      onClick={() => handleEditSofa(sofa)}
                      style={{ background: 'none', border: 'none', color: '#2b6cb0', cursor: 'pointer', padding: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      title="Edit product"
                    >
                      <Edit size={18} />
                    </button>
                    <button 
                      onClick={() => handleDeleteSofa(sofa.id, sofa.name)}
                      style={{ background: 'none', border: 'none', color: '#e53e3e', cursor: 'pointer', padding: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      title="Delete product"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>

                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
