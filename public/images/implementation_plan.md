# Remodeling to DreamSofa Aesthetic

The goal is to re-design the showroom website for **Zain Sofas & Furniture** to align closely with the look, feel, and structural layout of [DreamSofa](https://www.dreamsofa.com/). This represents a shift from the previous dark theme to an ultra-premium, light, spacious, and luxury e-commerce catalog layout. Additionally, as requested, all product prices will be removed in favor of direct customization inquiry links.

---

## Technical Summary of Theme Shifts

### 1. Typography (index.html)
* **Headers**: Pair a luxurious serif font like `Playfair Display` (for a bespoke, premium look) with a high-end geometric sans-serif like `Plus Jakarta Sans` for body text and navigation labels.
* **Weights**: Use high-contrast font weights (light/regular body text paired with elegant, medium-italic headings).

### 2. Color Scheme & Layout (src/index.css)
* **Backgrounds**: Soft, warm ivory/cream (`#F9F6F0`) and pure white (`#FFFFFF`).
* **Text**: Deep charcoal-black (`#151515`) for high contrast readability, replacing green-sage variables.
* **Accents**: Gold-wood tone (`#C68642`) and soft tan offsets (`#E9D4B7`).
* **Spacing**: Expand margins and paddings to give items "breathing room" (white space). Use thin, clean dividing lines instead of heavy borders.

---

## Proposed Component Changes

### 1. [Navbar] [Navbar.tsx](file:///d:/zainsofa/src/components/Navbar.tsx)
* Remodel to match DreamSofa's elegant, clean header:
  * Pure white background with a thin charcoal lower divider.
  * Thin, elegant, capital navigation links (e.g., `SOFAS`, `SECTIONALS`, `CHAIRS`, `ABOUT`).
  * Right action link: gold outline button reading `"Live WhatsApp Chat"` or `"Inquire Now"`.

### 2. [Hero Section] [Hero.tsx](file:///d:/zainsofa/src/components/Hero.tsx)
* Remodel after DreamSofa's header banner:
  * Split grid: Left column features bold serif typography (`"Inspired by Life. Custom Built by You."`), a descriptive subtitle about the Wandoor craftsmanship, and a pill-shaped outline button `"Design Your Sofa"`.
  * Right column shows a high-end transparent cut-out product render of the flagship tan sectional on a clean background.

### 3. [DreamSofa Difference (Value Props)] [WhyChooseUs.tsx](file:///d:/zainsofa/src/components/WhyChooseUs.tsx)
* Style a wide showcase row featuring four clean trust columns:
  * **Custom Size & Fit**: Tailored to your room dimensions.
  * **Lifetime Frame Warranty**: Seasoned teak wood structure.
  * **200+ Premium Fabrics**: Velvets, linens, and leatherette.
  * **Direct Factory Rates**: Handcrafted in Wandoor without dealer markups.

### 4. [Product Catalog Showcase] [Collection.tsx](file:///d:/zainsofa/src/components/Collection.tsx)
* **Price Removal**: Remove all mentions of starting prices (e.g. `Starting at...`).
* **Interactive Swatches**: When user clicks fabric dots under a card, the card image changes dynamically.
* **Layout details**: Display ratings stars (`★★★★★ 4.9`), clean titles, customizable text labels, and an outline action button: `"Customize & Inquire"`.

### 5. [About Brand Heritage] [About.tsx](file:///d:/zainsofa/src/components/About.tsx)
* A high-end split column showcasing the workshop legacy in Kuttiyil, Wandoor:
  * Left: Large image of master craftsmen assembling frames.
  * Right: Elegant serif storytelling text describing raw teak sourcing, high-density comfort foams, and local heritage.

---

## Verification Plan

### Automated Verification
- Run `npm run build` to verify there are zero TypeScript compiler warnings or CSS errors.

### Manual Verification
- Deploy local dev server (`npm run dev`) and test responsive scaling on mobile and desktop layout views.
- Test interactive swatches (ensure clicking fabric colors updates image nodes instantly without screen flicker).
- Verify all prices are fully removed from all catalog filters and popup panels.
