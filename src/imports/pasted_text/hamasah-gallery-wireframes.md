ROLE: You are a Senior UI/UX Designer and Front-end Architect who specializes in converting low-fidelity wireframes into production-ready, minimalist Figma designs that map 1:1 to HTML/Tailwind CSS. You design for Indonesian local MSME (UMKM) with warm, editorial-minimalist aesthetics. You NEVER create generic SaaS templates, AI-slop gradients, or tech-bro aesthetics.

CONTEXT: I have attached ALL wireframe images for "Hamasah Gallery" — a local craft business in Jambi, Indonesia selling dried flower bouquets, graduation sashes, medals, parcels, and money bouquets. Your job is to convert ALL attached wireframes into a cohesive, high-fidelity Figma design while PRESERVING THE EXACT STRUCTURE, LAYOUT, GRID COUNT, COLUMN RATIOS, AND SECTION ORDER from my wireframes. This will be hand-coded into HTML + Tailwind CSS, so you must design with Tailwind's utility-first system in mind.

CRITICAL: These are WIREFRAME IMAGES. Trace the layout precisely. Do not reinvent the structure. Only upgrade the visual polish: colors, typography, spacing, shadows, and micro-interactions.

---

DESIGN SYSTEM (Tailwind-Compatible — Use ONLY these specs):

COLOR PALETTE:
- Primary CTA: gradient from #F59E0B (amber-500) to #EA580C (orange-600)
- Background: #FFFBEB (amber-50 / warm cream)
- Surface: #FFFFFF (white)
- Surface Muted: #F3F4F6 (gray-100) — for testimonial sections, USP strips
- Text Primary: #111827 (gray-900)
- Text Secondary: #6B7280 (gray-500)
- Text Muted: #9CA3AF (gray-400)
- Border: #E5E7EB (gray-200)
- WhatsApp: #22C55E (green-500)
- Dark Footer: #1C1917 (stone-900)

TYPOGRAPHY (Tailwind classes):
- H1: text-5xl (48px), font-serif, font-bold, leading-tight, tracking-tight. Use Playfair Display or Cormorant Garamond style. NEVER sans-serif for H1.
- H2: text-3xl (30px), font-serif, font-semibold, leading-snug.
- H3: text-xl (20px), font-sans, font-semibold.
- Body: text-base (16px), font-sans, leading-relaxed. Font: Inter or Poppins.
- Caption: text-sm (14px), font-sans.
- Nav: text-sm (14px), font-sans, font-medium.
- Price: text-lg (18px), font-sans, font-bold.

SPACING (Tailwind scale):
- Section padding: py-20 (80px) or py-24 (96px)
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Grid gap: gap-6 (24px)
- Card internal padding: p-6 (24px)

BORDERS & SHADOWS:
- Card radius: rounded-2xl (16px)
- Button radius: rounded-full (pill) for CTAs, rounded-lg (8px) for form elements
- Shadow default: shadow-sm
- Shadow hover: shadow-md
- Border: border border-gray-200 for cards

---

WIREFRAME STRUCTURE PRESERVATION (DO NOT DEVIATE):

For EVERY attached frame, preserve these exact structural patterns:

1. HEADER (All Pages):
   - Sticky top-0, bg-white/80 backdrop-blur-md, border-b border-gray-100
   - Left: "Hamasah Gallery" wordmark in elegant script/cursive serif font
   - Right: Horizontal nav — Beranda, Produk, Galeri, Cara Pesan, Tentang Kami, Kontak, Blog
   - Active page: text-amber-600 font-semibold
   - Mobile: Hamburger icon only

2. HERO SECTION (Beranda — EXACT 2-COLUMN WIREFRAME):
   - Left 55%: H1 "Cari Hadiah, Ingat Hamasah" (two lines, large serif), body paragraph, CTA pill button "Lihat Produk Kami →"
   - Right 45%: Image with ARCH/TOMBSTONE shape — rounded-t-[200px] rounded-b-2xl. This shape is NON-NEGOTIABLE. Preserve exactly.
   - CTA Button: bg-gradient-to-r from-amber-500 to-orange-600, text-white, rounded-full, px-8 py-3, shadow-lg

3. USP STRIP (Full-width below hero):
   - bg-gray-100, py-8
   - 3 centered items with icons: "⚡ Sameday Order", "🎨 Custom Request", "💰 Harga Pelajar"

4. PRODUCTS SECTION (Beranda — EXACT GRID FROM WIREFRAME):
   - H2 centered: "Produk Hamasah Gallery"
   - ROW 1: 2 large featured cards, 50/50 split — Buket Pink, Parcel V1. Tall aspect ratio, image-dominant.
   - ROW 2: 4-column grid — Selempang, Buket Uang, Medali, Buket Biru
   - ROW 3: 4-column grid — Parcel V2, Buket Lampu, [plus 2 more if shown]
   - EACH SMALL CARD: Image (rounded-2xl), Product name (H3), Price "Rp35.000" (bold), WhatsApp icon button (green circle, 32px)
   - NO "Add to Cart". NO shopping cart. NO checkout.

5. TESTIMONIAL SECTION:
   - bg-gray-100, rounded-3xl container
   - H2: "Apa Kata Pelanggan?"
   - 3 testimonial cards inside: white bg, rounded-xl, shadow-sm, avatar circle + name + quote

6. CTA BANNER (Above footer):
   - bg-gradient-to-r from-amber-500 to-orange-600, py-16, text-center
   - Text: "Pesan Hari Ini, Selesai Sore!" (white, text-2xl, serif)
   - Large WhatsApp button

7. FOOTER (All pages — EXACT 4-COLUMN WIREFRAME):
   - bg-stone-900, text-gray-300, py-16
   - COL 1: "Hamasah Gallery" logo (white script) + description paragraph
   - COL 2: "Bantuan" — "Pertanyaan Umum" link
   - COL 3: "Layanan" — Phone icon + "0812-3456-7890", WhatsApp icon + same number
   - COL 4: "Halaman" — 2-col sub-links (Beranda, Produk, Galeri, Cara Pesan, Tentang Kami, Kontak) + "Ikuti Sosial Media" (Instagram, Facebook icons)

---

PAGE-SPECIFIC INSTRUCTIONS:

Apply to corresponding attached frames:

BERANDA (/): All sections above exactly as wireframed.

PRODUK (/produk):
   - Compact hero: H1 "Katalog Produk", breadcrumb "Beranda &gt; Produk"
   - 2x2 category cards: Buket, Medali, Parcel, Selempang
   - Filter chips: "Semua | Buket | Parcel | Selempang | Medali | Custom" — pill style, active=amber bg
   - Product grid using same card component as Beranda

SUB-PAGES (/produk/buket, /produk/medali, /produk/parcel, /produk/selempang):
   - H1 category name + breadcrumb
   - Product grid for that category only
   - Category description + testimonials

GALERI (/galeri):
   - H1 "Galeri Karya"
   - Masonry/grid 8-10 images, rounded-2xl
   - Filter tabs: Wisuda | Perpisahan | Parcel | Custom

CARA PESAN (/cara-pesan):
   - H1 "Cara Pesan"
   - 4-step horizontal timeline: circles with connecting line
   - Steps: ① Pilih Produk → ② Chat WA → ③ Konfirmasi → ④ Pickup/Delivery
   - Alert box: cream bg, amber border — "Order pagi sebelum jam 10.00 = selesai siang hari ini"
   - Centered large WA CTA

TENTANG KAMI (/tentang-kami):
   - H1 "Tentang Hamasah Gallery"
   - Story paragraph
   - Team row: 3 photo placeholders (Suami, Istri, Adik Istri)
   - Values: Respectfully explain no Valentine/anniversary/cigarettes/photo orders
   - Location: Kota Jambi

KONTAK (/kontak):
   - H1 "Hubungi Kami"
   - 2 columns: Left form (Name, Email, Message), Right info cards (WA, IG @hamasahgallery, FB, Address)

BLOG (/blog):
   - H1 "Tips & Inspirasi"
   - 2x3 article cards: Thumbnail, amber category pill, H3, excerpt, date
   - Sidebar: Categories + sticky WA CTA

FAQ (/faq):
   - H1 "Pertanyaan Umum"
   - 6 accordion items about price, sameday, custom, payment, delivery, no-Valentine policy

---

COMPONENT LIBRARY (Create as reusable Figma components):

1. Button/Primary: gradient amber-to-orange, white text, rounded-full, px-8 py-3
2. Button/WA: bg-green-500, white, rounded-full, WhatsApp icon
3. Card/Product: rounded-2xl, white, border-gray-200, shadow-sm, hover:shadow-md hover:-translate-y-1
4. Card/Testimonial: rounded-xl, white, p-6
5. Card/Article: rounded-2xl, white, overflow-hidden, border border-gray-200
6. Nav/Link: text-gray-600 hover:text-amber-600
7. Input: rounded-lg, border-gray-300, focus:ring-amber-500, px-4 py-3
8. Badge: bg-amber-100 text-amber-800, rounded-full, px-3 py-1, text-xs
9. IconButton/WA: 32px circle, bg-green-500, white icon

---

INTERACTION & BEHAVIOR:

- Hover: Cards lift (-translate-y-1), shadow deepens. Buttons scale-105.
- Active nav: amber-600 + subtle underline.
- Product cards: Clickable to WhatsApp with message template annotation: "Halo Hamasah Gallery, saya tertarik dengan [Nama Produk]. Apakah ready stock?"
- Mobile: Single column grids, stacked hero, hamburger nav.
- Floating WA: Fixed bottom-4 right-4, green circle, shadow-lg, ALL pages.

---

TAILWIND EXPORT PREPARATION (CRITICAL):

- Frame naming: "page-beranda", "page-produk", "page-buket", "page-medali", "page-parcel", "page-selempang", "page-galeri", "page-cara-pesan", "page-tentang-kami", "page-kontak", "page-blog", "page-faq"
- Use Auto Layout with flexbox logic (Row, Column, Wrap). NO absolute positioning for structural layout.
- Semantic groups: "section-hero", "section-products", "section-testimonials", "section-cta", "section-footer"
- Text layers: "h1-hero-title", "h2-section-title", "h3-product-name", "p-description"
- Image placeholders: "img-hero-main", "img-product-[name]", "img-team-[number]"
- Spacing: Use multiples of 4 only (4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96)

---

ANTI-SLOP ENFORCEMENT (MANDATORY):

1. DO NOT change wireframe layout. Preserve 2-column hero, 4-column footer, product grid counts, and section order EXACTLY.
2. DO NOT use sans-serif for H1/H2. Headings MUST be serif (Playfair Display style).
3. DO NOT use generic 3D illustrations, AI vector characters, or stock people. Use clean geometric placeholders.
4. DO NOT create SaaS/tech/startup aesthetics. This is a LOCAL CRAFT BUSINESS in Jambi. Warm, human, approachable.
5. DO NOT add shopping cart, checkout, "Buy Now", or e-commerce patterns. ONLY WhatsApp redirect.
6. DO NOT use dollar signs ($) or English text. All copy natural Bahasa Indonesia. Prices: RpXX.XXX.
7. DO NOT use neon, purple, or blue primary colors. ONLY amber/orange/warm palette.
8. DO NOT ignore the arch/tombstone hero image shape. Must be rounded-t-[200px] rounded-b-2xl.
9. DO NOT use "Lorem Ipsum". All text must be real, contextual Indonesian.
10. DO NOT make the design busy or cluttered. Minimalist whitespace is key. Let products breathe.

---

DELIVERABLE:

Generate polished, high-fidelity designs for ALL attached wireframes. Each page must look like a premium minimalist local business website that a developer can immediately hand-code with HTML + Tailwind CSS. Create a separate "Design System" frame showing Colors, Typography, Buttons, Cards, and Icons.