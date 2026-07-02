export interface Swatch {
  name: string;
  hex: string;
  image?: string; // Optional image representing the product in this color variant
}

export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  tag: string;
  description: string;
  features: string[];
  rating?: number;
  reviewsCount?: number;
  swatches?: Swatch[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  isComingSoon?: boolean;
}

export const CATEGORIES: Category[] = [
  {
    id: 'sofas',
    name: 'Sofas & Sectionals',
    description: 'Handcrafted custom sofas designed for maximum comfort and style.',
  },
  {
    id: 'beds',
    name: 'Comfort Beds',
    description: 'Sturdy wooden bed frames built for durability and peaceful sleep.',
  },
  {
    id: 'chairs',
    name: 'Chairs',
    description: 'Comfortable study chairs, office chairs, and solid wood seating.',
  },
  {
    id: 'tables',
    name: 'Study Tables',
    description: 'Compact and writing desks designed for home offices and students.',
  },
  {
    id: 'teapoys',
    name: 'Teapoys & Coffee Tables',
    description: 'Elegant wooden teapoys and center tables for your living area.',
  },
  {
    id: 'mattresses',
    name: 'Mattresses',
    description: 'Comfortable mattress selections for home relaxation.',
    isComingSoon: true,
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'sofa-1',
    name: 'Imperial Tan Leatherette L-Shape',
    category: 'sofas',
    image: '/images/sofa_tan_leather.png',
    tag: 'Premium Collection',
    rating: 4.9,
    reviewsCount: 124,
    description: 'A masterpiece of showroom luxury. This premium L-shaped sofa is upholstered in deep glossy tan leatherette, featuring elegant button-tufting on the cushions, deep padded seating, and a heavy-duty hardwood chassis.',
    features: [
      'Genuine high-grade glossy leatherette',
      'Elegant button-tufted backrest styling',
      'Solid hardwood internal framing',
      'High-density memory foam core cushioning',
      'Perfect for executive offices or premium living rooms',
    ],
    swatches: [
      { name: 'Imperial Tan', hex: '#C68642', image: '/images/sofa_tan_leather.png' },
      { name: 'Royal Beige', hex: '#E5D3B3', image: '/images/sofa_beige.png' },
      { name: 'Ruby Velvet', hex: '#8C1F28', image: '/images/showroom_sofa.jpg' },
      { name: 'Charcoal Grey', hex: '#4A4A4A', image: '/images/sofa_grey_3seater.png' }
    ]
  },
  {
    id: 'sofa-2',
    name: 'Royal Beige L-Shaped Sectional',
    category: 'sofas',
    image: '/images/sofa_beige.png',
    tag: 'Premium Collection',
    rating: 4.8,
    reviewsCount: 92,
    description: 'A luxurious, custom-made beige L-shaped sectional sofa. Engineered with high-density foam and wrapped in soft, stain-resistant premium linen fabric. Features adjustable headrests and a solid hardwood frame.',
    features: [
      'Sturdy hardwood inner frame',
      'Premium stain-resistant linen upholstery',
      'High-density comfort foam cushioning',
      'Customizable orientation (Left/Right facing)',
      'Adjustable headrests for ergonomic support',
    ],
    swatches: [
      { name: 'Royal Beige', hex: '#E5D3B3', image: '/images/sofa_beige.png' },
      { name: 'Imperial Tan', hex: '#C68642', image: '/images/sofa_tan_leather.png' },
      { name: 'Classic Grey', hex: '#63666A', image: '/images/sofa_grey_brown.png' }
    ]
  },
  {
    id: 'sofa-3',
    name: 'Classic Showroom Velvet Sofa',
    category: 'sofas',
    image: '/images/showroom_sofa.jpg',
    tag: 'Premium Collection',
    rating: 4.9,
    reviewsCount: 78,
    description: 'An elegant showroom masterpiece featuring a rich royal red velvet body contrasted with deep navy blue fabric inserts. Perfect for formal living areas and offices looking to make a bold statement of craftsmanship.',
    features: [
      'Contrasting dual-tone fabric design',
      'Premium royal red velvet and navy upholstery',
      'Plush, extra-padded seating and backrest',
      'Designed for formal guest hosting',
      'Built by family-owned master craftsmen',
    ],
    swatches: [
      { name: 'Ruby Velvet & Navy', hex: '#5b1426', image: '/images/showroom_sofa.jpg' },
      { name: 'Purple & White', hex: '#582A72', image: '/images/sofa_maroon_white.png' },
      { name: 'Blue & Tan', hex: '#1E3F66', image: '/images/sofa_blue_brown.png' }
    ]
  },
  {
    id: 'sofa-4',
    name: 'Luxury Tan L-Shape Sectional',
    category: 'sofas',
    image: '/images/sofa_brown.png',
    tag: 'Premium Collection',
    rating: 4.7,
    reviewsCount: 65,
    description: 'A grand L-shaped sofa upholstered in premium tan textured fabric that mimics the elegance of luxury leather while providing breathable comfort. Ideal for larger living spaces and premium interior layouts.',
    features: [
      'Breathable, premium textured upholstery',
      'Spacious L-shape layout with corner wedge',
      'Tufted detailing for classic, elegant look',
      'Heavy-duty support suspension system',
      'Perfect for large families and spacious living rooms',
    ],
    swatches: [
      { name: 'Textured Tan', hex: '#B5835C', image: '/images/sofa_brown.png' },
      { name: 'Sky Blue', hex: '#6AA84F', image: '/images/sofa_blue_brown.png' }
    ]
  },
  {
    id: 'sofa-5',
    name: 'Sky Blue & Brown Fabric L-Shape',
    category: 'sofas',
    image: '/images/sofa_blue_brown.png',
    tag: 'Premium Collection',
    rating: 4.8,
    reviewsCount: 54,
    description: 'A vibrant dual-tone custom L-shaped sofa. Features bright sky blue seat upholstery paired with earth-brown lower frames and arm panels. Engineered for modern, cheerful, and light-filled rooms.',
    features: [
      'Eye-catching dual-toned fabric panels',
      'High-density resilient foam support',
      'Ultra-soft breathable cotton-poly blend fabric',
      'Solid wood corner block reinforcement',
      'Comfortable headrest cushions',
    ],
    swatches: [
      { name: 'Sky Blue & Brown', hex: '#3498DB', image: '/images/sofa_blue_brown.png' },
      { name: 'Purple & White', hex: '#7D3C98', image: '/images/sofa_maroon_white.png' }
    ]
  },
  {
    id: 'sofa-6',
    name: 'Charcoal & Oak Round-Arm L-Shape',
    category: 'sofas',
    image: '/images/sofa_grey_brown.png',
    tag: 'Premium Collection',
    rating: 4.8,
    reviewsCount: 46,
    description: 'An elegant sectional combining rich charcoal grey textured fabric with warm oak-brown lower panels. Features classic rolled arms, deep seating, and custom fabric accent pillows.',
    features: [
      'Classic rolled/rounded armrests styling',
      'Textured charcoal weave and oak accents',
      'No-sag steel spring suspension system',
      'Customizable sizing to fit small or large rooms',
      'High-density foam with Dacron wrap for plushness',
    ],
    swatches: [
      { name: 'Charcoal & Oak', hex: '#3B4045', image: '/images/sofa_grey_brown.png' },
      { name: 'Grey 3-Seater', hex: '#757575', image: '/images/sofa_grey_3seater.png' }
    ]
  },
  {
    id: 'sofa-7',
    name: 'Imperial Purple & White Sectional',
    category: 'sofas',
    image: '/images/sofa_maroon_white.png',
    tag: 'Premium Collection',
    rating: 4.9,
    reviewsCount: 39,
    description: 'A striking modern sectional featuring deep royal purple velvet fabric paired with crisp white leatherette side and lower panels. Designed to make a dramatic statement in high-contrast spaces.',
    features: [
      'Bold purple velvet and white leatherette contrast',
      'Modern block-foot frame design',
      'Premium plush padded armrests',
      'Stain-protected fabric finish',
      'Easy-to-clean leatherette base',
    ],
    swatches: [
      { name: 'Purple & White', hex: '#63257C', image: '/images/sofa_maroon_white.png' },
      { name: 'Red & Navy', hex: '#A93226', image: '/images/showroom_sofa.jpg' }
    ]
  },
  {
    id: 'sofa-8',
    name: 'Metro Charcoal & Beige 3-Seater',
    category: 'sofas',
    image: '/images/sofa_grey_3seater.png',
    tag: 'Premium Collection',
    rating: 4.7,
    reviewsCount: 51,
    description: 'A premium 3-seater sofa styled with adjustable head supports and rolled arms. Combines charcoal textured fabric with warm beige accent panels and wood finishes. Fits traditional and transitional homes.',
    features: [
      'Spacious 3-seater configuration',
      'Adjustable head and neck support cushions',
      'Tough, long-lasting woven fabric blend',
      'Contouring foam padding for lumbar relief',
    ],
    swatches: [
      { name: 'Charcoal & Beige', hex: '#424949', image: '/images/sofa_grey_3seater.png' },
      { name: 'Charcoal & Oak', hex: '#5D6D7E', image: '/images/sofa_grey_brown.png' }
    ]
  },
  {
    id: 'sofa-9',
    name: 'Workshop Tan Tufted Sectional',
    category: 'sofas',
    image: '/images/custom_sofa_tan_l.png',
    tag: 'Showroom Collection',
    rating: 5.0,
    reviewsCount: 112,
    description: 'A premium workshop custom-made L-shaped sofa upholstered in rich tan leatherette. Designed with modern tufted back support and wide comfort armrests.',
    features: [
      'Deep tan leatherette finish',
      'Sturdy solid hardwood chassis',
      'Tufted cushioning detail',
      'Kerala home-made custom build',
    ],
    swatches: [
      { name: 'Workshop Tan', hex: '#D38E5F', image: '/images/custom_sofa_tan_l.png' },
      { name: 'Textured Tan', hex: '#B87333', image: '/images/custom_sofa_tan_fabric.png' }
    ]
  },
  {
    id: 'sofa-10',
    name: 'Wandoor Dual-Tone Red & Grey L-Shape',
    category: 'sofas',
    image: '/images/custom_sofa_red_grey.png',
    tag: 'Showroom Collection',
    rating: 4.9,
    reviewsCount: 68,
    description: 'A high-contrast custom L-shaped sofa combining soft charcoal grey cushions with vibrant red panel stripes, featuring beautiful button detailing.',
    features: [
      'Custom dual-tone fabric pattern',
      'Plush comfort foam core',
      'Modern button-accented backrest',
      'Durable seasoned wood frame',
    ],
    swatches: [
      { name: 'Red & Grey', hex: '#A30000', image: '/images/custom_sofa_red_grey.png' },
      { name: 'Red & Navy', hex: '#720917', image: '/images/custom_sofa_red_navy.png' }
    ]
  },
  {
    id: 'sofa-11',
    name: 'Comfort Textured Tan Sectional',
    category: 'sofas',
    image: '/images/custom_sofa_tan_fabric.png',
    tag: 'Showroom Collection',
    rating: 4.8,
    reviewsCount: 43,
    description: 'An elegant L-shaped sofa upholstered in soft, breathable tan fabric. Designed for cozy family living rooms and long seating durations.',
    features: [
      'Textured breathable fabric',
      'High density comfort padding',
      'Reinforced support suspension',
      'Spacious corner wedge design',
    ],
    swatches: [
      { name: 'Textured Tan', hex: '#BA8D65', image: '/images/custom_sofa_tan_fabric.png' },
      { name: 'Workshop Tan', hex: '#B57C53', image: '/images/custom_sofa_tan_l.png' }
    ]
  },
  {
    id: 'sofa-12',
    name: 'Zain Signature Royal Red & Navy 3-Seater',
    category: 'sofas',
    image: '/images/custom_sofa_red_navy.png',
    tag: 'Showroom Collection',
    rating: 5.0,
    reviewsCount: 85,
    description: 'A magnificent workshop creation featuring a royal red velvet main body highlighted with deep navy blue padded back segments.',
    features: [
      'Premium velvet and linen blend',
      'Ergonomic lumbar back supports',
      'High density memory foam core',
      'Kerala hardwood base structure',
    ],
    swatches: [
      { name: 'Red & Navy', hex: '#830C1C', image: '/images/custom_sofa_red_navy.png' },
      { name: 'Red & Grey', hex: '#A92636', image: '/images/custom_sofa_red_grey.png' }
    ]
  },
  {
    id: 'bed-1',
    name: 'Comfort Wooden Bed Frame',
    category: 'beds',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80',
    tag: 'Home Beds',
    rating: 4.7,
    reviewsCount: 54,
    description: 'A durable, solid wooden bed frame designed for daily family use. Built using seasoned hardwood support beams and wrapped in a clean, scratch-resistant laminate wood-grain finish.',
    features: [
      'Sturdy seasoned hardwood rails',
      'Heavy-duty mattress support slats',
      'Scratch-resistant laminate wood grain finish',
      'Flat-pack design for easy setup and relocations',
    ],
    swatches: [
      { name: 'Natural Oak', hex: '#C29B70' },
      { name: 'Mahogany', hex: '#4E2F1D' },
      { name: 'Teak wood', hex: '#B87A3E' }
    ]
  },
  {
    id: 'bed-2',
    name: 'Standard Teak Comfort Bed',
    category: 'beds',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
    tag: 'Home Beds',
    rating: 4.8,
    reviewsCount: 63,
    description: 'A beautiful and durable bed constructed entirely from aged local teak wood. Features a classic polished headboard with simple vertical slate accents.',
    features: [
      '100% aged local Wandoor teak wood',
      'Hand-sanded natural lacquer polish',
      'Reinforced steel connector brackets',
      'Includes dual under-bed storage drawers',
    ],
    swatches: [
      { name: 'Teak wood', hex: '#B87A3E' },
      { name: 'Walnut Finish', hex: '#3E2512' }
    ]
  },
  {
    id: 'chair-1',
    name: 'Designer Patterned Showroom Chairs',
    category: 'chairs',
    image: '/images/showroom_chairs.jpg',
    tag: 'Showroom Collection',
    rating: 4.9,
    reviewsCount: 71,
    description: 'Premium mesh chairs with unique geometric backrest patterning. Crafted for modern home dining layouts, offices, or study desks, offering excellent ventilation and modern aesthetic appeal.',
    features: [
      'Unique ventilation back design',
      'Durable reinforced polymer framework',
      'Stackable and space-saving layout',
      'Perfect for dining, study, or visitor seating',
    ],
    swatches: [
      { name: 'Showroom Black', hex: '#1C1C1C' },
      { name: 'Premium Charcoal', hex: '#3D3D3D' }
    ]
  },
  {
    id: 'chair-2',
    name: 'Executive Wooden Study Chair',
    category: 'chairs',
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80',
    tag: 'Chairs',
    rating: 4.8,
    reviewsCount: 45,
    description: 'A premium, solid hardwood chair tailored for writing desks and study setups. Upholstered in highly breathable fabric over contouring foam padding.',
    features: [
      'Solid hardwood structural frames',
      'Highly breathable seat fabric cushion',
      'Slightly inclined ergonomic backrest',
      'Anti-scratch floor protector pads',
    ],
    swatches: [
      { name: 'Walnut Wood', hex: '#482D1D' },
      { name: 'Teak Wood', hex: '#A36838' }
    ]
  },
  {
    id: 'chair-3',
    name: 'Classic Teak Dining Chair',
    category: 'chairs',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80',
    tag: 'Chairs',
    rating: 4.7,
    reviewsCount: 32,
    description: 'A simple, elegant dining chair crafted from seasoned wood. Features a comfortable curved back support and a padded seat option.',
    features: [
      'Seasoned durable wood frame',
      'Contoured ergonomic backrest',
      'Sleek minimal footprint',
      'Perfect for dining rooms or writing desks',
    ],
    swatches: [
      { name: 'Natural Polish', hex: '#DCA26E' },
      { name: 'Teak Finish', hex: '#875128' }
    ]
  },
  {
    id: 'chair-4',
    name: 'Premium Cushion Desk Chair',
    category: 'chairs',
    image: 'https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=800&q=80',
    tag: 'Chairs',
    rating: 4.8,
    reviewsCount: 29,
    description: 'A heavily padded executive desk chair featuring modern chrome accents, high-density foam padding, and adjustable height control.',
    features: [
      'Plush high-density padding',
      'Adjustable pneumatic height control',
      'Padded matching armrests',
      'Sturdy chrome star base legs',
    ],
    swatches: [
      { name: 'Midnight Black', hex: '#1B1B1B' },
      { name: 'Slate Grey', hex: '#63666A' }
    ]
  },
  {
    id: 'table-1',
    name: 'Classic Wooden Study Table',
    category: 'tables',
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80',
    tag: 'Study Tables',
    rating: 4.8,
    reviewsCount: 56,
    description: 'A space-efficient wooden writing desk featuring storage drawers. Perfect for students and work-from-home setups.',
    features: [
      'Large smooth tabletop workspace',
      'Built-in sliding storage drawers',
      'Reinforced solid-wood legs',
      'Integrated wire grommets for cable neatness',
    ],
    swatches: [
      { name: 'Teak Finish', hex: '#B57A42' },
      { name: 'Walnut Finish', hex: '#4E2F12' }
    ]
  },
  {
    id: 'table-2',
    name: 'Compact Wall-Mount Writing Desk',
    category: 'tables',
    image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=800&q=80',
    tag: 'Study Tables',
    rating: 4.6,
    reviewsCount: 23,
    description: 'A space-saving foldable wall desk that opens to reveal internal shelving organizers and a steady writing ledge. Perfect for tight bedroom spaces.',
    features: [
      'Foldable space-saving design',
      'Integrated inner storage folders',
      'Solid safety locking latches',
      'Heavy-duty wall anchors included',
    ],
    swatches: [
      { name: 'Natural Pine', hex: '#D2B48C' },
      { name: 'Charcoal Black', hex: '#2C3E50' }
    ]
  },
  {
    id: 'teapoy-1',
    name: 'Traditional Wooden Teapoy',
    category: 'teapoys',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80',
    tag: 'Teapoys',
    rating: 4.8,
    reviewsCount: 88,
    description: 'A classic teapoy / coffee center table featuring a bottom rack shelf for storing magazines and TV remotes. Upholstered with wood-grain lacquer coating.',
    features: [
      '100% seasoned solid wood carcass',
      'Integrated storage rack shelf underneath',
      'Smooth rounded corners for safety',
      'Waterproof protective coating',
    ],
    swatches: [
      { name: 'Teak wood', hex: '#B87A3E' },
      { name: 'Rosewood Polish', hex: '#582118' }
    ]
  },
  {
    id: 'teapoy-2',
    name: 'Modern Glass-Top Teapoy',
    category: 'teapoys',
    image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=800&q=80',
    tag: 'Teapoys',
    rating: 4.7,
    reviewsCount: 37,
    description: 'An elegant coffee table featuring a thick tempered glass top supported by a curved, sculptured wooden base block.',
    features: [
      'Thick tempered safety glass top',
      'Sculptured wooden support leg block',
      'Chrome corner spacers accents',
      'Easy wipe-to-clean design',
    ],
    swatches: [
      { name: 'Polished Oak', hex: '#D8AA78' },
      { name: 'Dark Mahogany', hex: '#3A1E11' }
    ]
  },
  {
    id: 'sofa-13',
    name: 'Teal Modern 3-Seater Sofa',
    category: 'sofas',
    image: '/images/sofa_teal_3seater.jpg',
    tag: 'Premium Collection',
    rating: 4.8,
    reviewsCount: 34,
    description: 'A stylish and vibrant teal 3-seater sofa with clean modern lines. Features gold-accented base detailing for an extra touch of elegance.',
    features: [
      'Vibrant teal premium upholstery',
      'Modern minimalist block-style design',
      'Gold-accented bottom trim',
      'High-density comfort seating',
    ],
    swatches: [
      { name: 'Teal Blue', hex: '#008080', image: '/images/sofa_teal_3seater.jpg' },
      { name: 'Navy Blue', hex: '#000080' },
      { name: 'Emerald', hex: '#50C878' }
    ]
  },
  {
    id: 'sofa-14',
    name: 'Rust Orange Ribbed L-Shape Sectional',
    category: 'sofas',
    image: '/images/sofa_orange_ribbed_lshape.jpg',
    tag: 'Showroom Collection',
    rating: 4.9,
    reviewsCount: 76,
    description: 'A striking L-shaped sectional sofa in rust orange velvet fabric. Showcases a distinct vertically ribbed backrest design for a bold, contemporary look.',
    features: [
      'Bold rust orange velvet upholstery',
      'Unique vertically ribbed backrest',
      'Spacious L-shape design',
      'Gold-accented lower piping',
    ],
    swatches: [
      { name: 'Rust Orange', hex: '#C35831', image: '/images/sofa_orange_ribbed_lshape.jpg' },
      { name: 'Charcoal', hex: '#36454F' },
      { name: 'Mustard', hex: '#FFDB58' }
    ]
  },
  {
    id: 'sofa-15',
    name: 'Light Grey Button-Tufted 3-Seater',
    category: 'sofas',
    image: '/images/sofa_lightgrey_3seater.jpg',
    tag: 'Premium Collection',
    rating: 4.7,
    reviewsCount: 52,
    description: 'An elegant light grey 3-seater sofa featuring classic button tufting on the backrest. Combines timeless design with plush modern comfort.',
    features: [
      'Soft light grey premium fabric',
      'Classic button-tufted backrest',
      'Solid wood tapered legs',
      'Generous seating proportions',
    ],
    swatches: [
      { name: 'Light Grey', hex: '#D3D3D3', image: '/images/sofa_lightgrey_3seater.jpg' },
      { name: 'Dark Grey', hex: '#A9A9A9' },
      { name: 'Beige', hex: '#F5F5DC' }
    ]
  },
  {
    id: 'sofa-16',
    name: 'Caramel Diamond-Tufted Sectional',
    category: 'sofas',
    image: '/images/sofa_brown_tufted_lshape.jpg',
    tag: 'Showroom Collection',
    rating: 4.8,
    reviewsCount: 61,
    description: 'A grand L-shaped sectional in rich caramel brown velvet. Features exquisite diamond button tufting and silver studded accents along the rolled arms.',
    features: [
      'Rich caramel brown velvet',
      'Exquisite diamond tufting',
      'Silver stud armrest accents',
      'Classic rolled arms design',
    ],
    swatches: [
      { name: 'Caramel Brown', hex: '#A65D24', image: '/images/sofa_brown_tufted_lshape.jpg' },
      { name: 'Espresso', hex: '#4B3621' },
      { name: 'Ivory', hex: '#FFFFF0' }
    ]
  },
  {
    id: 'sofa-17',
    name: 'Rust Orange Ribbed 3-Seater',
    category: 'sofas',
    image: '/images/sofa_orange_ribbed_3seater.jpg',
    tag: 'Showroom Collection',
    rating: 4.9,
    reviewsCount: 48,
    description: 'A vibrant 3-seater sofa in rust orange velvet fabric. Features the distinct vertically ribbed backrest design and classic rolled arms with gold piping.',
    features: [
      'Bold rust orange velvet upholstery',
      'Unique vertically ribbed backrest',
      'Classic rolled armrests',
      'Gold-accented lower piping',
    ],
    swatches: [
      { name: 'Rust Orange', hex: '#C35831', image: '/images/sofa_orange_ribbed_3seater.jpg' },
      { name: 'Forest Green', hex: '#228B22' },
      { name: 'Navy', hex: '#000080' }
    ]
  },
  {
    id: 'sofa-18',
    name: 'Blush Pink Velvet 3-Seater',
    category: 'sofas',
    image: '/images/sofa_pink_velvet_3seater.jpg',
    tag: 'Premium Collection',
    rating: 4.8,
    reviewsCount: 39,
    description: 'A charming blush pink velvet 3-seater sofa with adjustable headrests. Perfect for adding a soft, elegant touch to contemporary living spaces.',
    features: [
      'Soft blush pink velvet upholstery',
      'Adjustable headrest positions',
      'Plush, deep seating comfort',
      'Modern sleek armrests',
    ],
    swatches: [
      { name: 'Blush Pink', hex: '#EBB4B8', image: '/images/sofa_pink_velvet_3seater.jpg' },
      { name: 'Mint Green', hex: '#98FF98' },
      { name: 'Cream', hex: '#FFFDD0' }
    ]
  },
  {
    id: 'sofa-19',
    name: 'Classic Brown Leather Sectional',
    category: 'sofas',
    image: '/images/sofa_brown_leather_sectional.jpg',
    tag: 'Showroom Collection',
    rating: 4.9,
    reviewsCount: 82,
    description: 'A luxurious brown leather L-shaped sectional featuring classic tufted backrests. Crafted for sophisticated interiors offering generous seating and timeless style.',
    features: [
      'Premium brown faux leather',
      'Classic tufted backrest design',
      'Spacious L-shaped configuration',
      'Durable and easy to clean',
    ],
    swatches: [
      { name: 'Classic Brown', hex: '#8B4513', image: '/images/sofa_brown_leather_sectional.jpg' },
      { name: 'Black', hex: '#000000' },
      { name: 'Tan', hex: '#D2B48C' }
    ]
  },
  {
    id: 'sofa-20',
    name: 'Beige Fabric 3-Seater',
    category: 'sofas',
    image: '/images/sofa_beige_fabric_3seater.png',
    tag: 'Premium Collection',
    rating: 4.7,
    reviewsCount: 45,
    description: 'A versatile beige fabric 3-seater sofa. Features simple, clean lines and comfortable cushioning, ideal for minimalist or neutral-toned living rooms.',
    features: [
      'Durable beige fabric upholstery',
      'Minimalist contemporary design',
      'High-resilience foam cushions',
      'Sturdy hidden base frame',
    ],
    swatches: [
      { name: 'Neutral Beige', hex: '#D5C4A1', image: '/images/sofa_beige_fabric_3seater.png' },
      { name: 'Slate Blue', hex: '#6A5ACD' },
      { name: 'Olive', hex: '#808000' }
    ]
  },
  {
    id: 'sofa-21',
    name: 'Textured Grey L-Shape Sectional',
    category: 'sofas',
    image: '/images/sofa_grey_sectional.png',
    tag: 'Premium Collection',
    rating: 4.8,
    reviewsCount: 66,
    description: 'A modern L-shaped sectional sofa in textured grey fabric with contrasting black wooden base. Includes matching scatter cushions for added comfort.',
    features: [
      'Textured grey woven fabric',
      'Contrasting black wooden base',
      'Includes scatter cushions',
      'Spacious chaise lounger',
    ],
    swatches: [
      { name: 'Textured Grey', hex: '#808080', image: '/images/sofa_grey_sectional.png' },
      { name: 'Sand', hex: '#C2B280' },
      { name: 'Ocean Blue', hex: '#0077BE' }
    ]
  },
  {
    id: 'sofa-22',
    name: 'Amber Velvet Sectional',
    category: 'sofas',
    image: '/images/sofa_orange_velvet_sectional.png',
    tag: 'Showroom Collection',
    rating: 4.9,
    reviewsCount: 57,
    description: 'An eye-catching amber orange velvet sectional sofa with elegant wooden stiletto legs. Brings warmth and mid-century modern flair to any home.',
    features: [
      'Vibrant amber velvet fabric',
      'Mid-century wooden legs',
      'Spacious modular seating',
      'High-comfort foam core',
    ],
    swatches: [
      { name: 'Amber Orange', hex: '#CC7722', image: '/images/sofa_orange_velvet_sectional.png' },
      { name: 'Ruby Red', hex: '#E0115F' },
      { name: 'Sapphire', hex: '#0F52BA' }
    ]
  }
];
