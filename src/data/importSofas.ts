import { collection, getDocs, writeBatch, doc } from 'firebase/firestore';
import { db } from '../firebase';

export interface SofaItem {
  id?: string;
  name: string;
  style: string;
  tag: string;
  image: string;
  swatches: { name: string; hex: string }[];
  order: number;
}

export const INITIAL_SOFAS: SofaItem[] = [
  { name: 'Royal Chesterfield', style: 'CLASSIC', tag: 'Premium', image: '/images/sofas/sofa-classic-chesterfield.jpg', swatches: [{ name: 'Brown', hex: '#7a4a2a' }, { name: 'Tan', hex: '#c68642' }, { name: 'Beige', hex: '#e8dec9' }], order: 0 },
  { name: 'Milano Elegance', style: 'MODERN', tag: 'New Arrival', image: '/images/sofas/sofa-modern-cream.png', swatches: [{ name: 'Ivory', hex: '#f5f1ea' }, { name: 'Grey', hex: '#888' }, { name: 'Beige', hex: '#e8dec9' }], order: 1 },
  { name: 'Grand Luxe Sectional', style: 'SECTIONAL', tag: 'Featured', image: '/images/sofas/sofa-luxury-sectional.jpg', swatches: [{ name: 'Beige', hex: '#e8dec9' }, { name: 'Grey', hex: '#999' }, { name: 'Ivory', hex: '#f5f1ea' }], order: 2 },
  { name: 'Quilted Modular', style: 'L-SHAPE', tag: 'New Arrival', image: '/images/sofas/sofa-quilted-modular.jpg', swatches: [{ name: 'Sand', hex: '#d2c4a8' }, { name: 'Brown', hex: '#7a4a2a' }, { name: 'Tan', hex: '#c68642' }], order: 3 },
  { name: 'Nordic Comfort', style: 'MODERN', tag: 'Featured', image: '/images/sofas/sofa-minimal-beige.png', swatches: [{ name: 'Cream', hex: '#f5f0e1' }, { name: 'Beige', hex: '#e8dec9' }, { name: 'Grey', hex: '#888' }], order: 4 },
  { name: 'Teal Modern 3-Seater', style: 'MODERN', tag: 'Premium', image: '/images/sofa_teal_3seater.jpg', swatches: [{ name: 'Teal Blue', hex: '#008080' }, { name: 'Navy Blue', hex: '#000080' }, { name: 'Emerald', hex: '#50C878' }], order: 5 },
  { name: 'Rust Orange Ribbed L-Shape', style: 'L-SHAPE', tag: 'New Arrival', image: '/images/sofa_orange_ribbed_lshape.jpg', swatches: [{ name: 'Rust Orange', hex: '#C35831' }, { name: 'Charcoal', hex: '#36454F' }, { name: 'Mustard', hex: '#FFDB58' }], order: 6 },
  { name: 'Light Grey Button-Tufted', style: 'CLASSIC', tag: 'Premium', image: '/images/sofa_lightgrey_3seater.jpg', swatches: [{ name: 'Light Grey', hex: '#D3D3D3' }, { name: 'Dark Grey', hex: '#A9A9A9' }, { name: 'Beige', hex: '#F5F5DC' }], order: 7 },
  { name: 'Caramel Diamond-Tufted', style: 'SECTIONAL', tag: 'Featured', image: '/images/sofa_brown_tufted_lshape.jpg', swatches: [{ name: 'Caramel Brown', hex: '#A65D24' }, { name: 'Espresso', hex: '#4B3621' }, { name: 'Ivory', hex: '#FFFFF0' }], order: 8 },
  { name: 'Rust Orange Ribbed 3-Seater', style: 'CUSTOM', tag: 'New Arrival', image: '/images/sofa_orange_ribbed_3seater.jpg', swatches: [{ name: 'Rust Orange', hex: '#C35831' }, { name: 'Forest Green', hex: '#228B22' }, { name: 'Navy', hex: '#000080' }], order: 9 },
  { name: 'Blush Pink 3-Seater', style: 'MODERN', tag: 'Premium', image: '/images/sofa_pink_velvet_3seater.jpg', swatches: [{ name: 'Blush Pink', hex: '#EBB4B8' }, { name: 'Mint Green', hex: '#98FF98' }, { name: 'Cream', hex: '#FFFDD0' }], order: 10 },
  { name: 'Brown Leather Sectional', style: 'SECTIONAL', tag: 'Showroom', image: '/images/sofa_brown_leather_sectional.jpg', swatches: [{ name: 'Classic Brown', hex: '#8B4513' }, { name: 'Black', hex: '#000000' }, { name: 'Tan', hex: '#D2B48C' }], order: 11 },
  { name: 'Beige Fabric 3-Seater', style: 'CLASSIC', tag: 'Premium', image: '/images/sofa_beige_fabric_3seater.png', swatches: [{ name: 'Neutral Beige', hex: '#D5C4A1' }, { name: 'Slate Blue', hex: '#6A5ACD' }, { name: 'Olive', hex: '#808000' }], order: 12 },
  { name: 'Textured Grey Sectional', style: 'L-SHAPE', tag: 'Featured', image: '/images/sofa_grey_sectional.png', swatches: [{ name: 'Textured Grey', hex: '#808080' }, { name: 'Sand', hex: '#C2B280' }, { name: 'Ocean Blue', hex: '#0077BE' }], order: 13 },
  { name: 'Amber Velvet Sectional', style: 'SECTIONAL', tag: 'Showroom', image: '/images/sofa_orange_velvet_sectional.png', swatches: [{ name: 'Amber Orange', hex: '#CC7722' }, { name: 'Ruby Red', hex: '#E0115F' }, { name: 'Sapphire', hex: '#0F52BA' }], order: 14 }
];

export const seedSofasToFirestore = async (): Promise<number> => {
  const collectionName = 'sofas';
  console.log(`[Import] Checking collection: "${collectionName}"`);

  // Direct collection query (matches Admin Panel query and checks for ALL documents)
  const querySnapshot = await getDocs(collection(db, collectionName));
  const docCount = querySnapshot.size;
  console.log(`[Import] Document count before import: ${docCount}`);

  if (docCount > 0) {
    console.log(`[Import] Status: SKIPPED (collection is not empty)`);
    throw new Error(`Database already contains sofa products (${docCount} items). Import was skipped to prevent duplicate records.`);
  }

  console.log(`[Import] Status: STARTED (seeding ${INITIAL_SOFAS.length} products)`);
  const batch = writeBatch(db);
  INITIAL_SOFAS.forEach((sofa) => {
    const docRef = doc(collection(db, collectionName));
    batch.set(docRef, {
      ...sofa,
      createdAt: new Date().toISOString()
    });
  });

  await batch.commit();
  console.log(`[Import] Status: COMPLETED`);
  return INITIAL_SOFAS.length;
};
