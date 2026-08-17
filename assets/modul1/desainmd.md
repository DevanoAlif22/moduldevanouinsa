# KODEMUDA DESIGN SYSTEM & UI PROMPTS

**Brand:** Kodemuda Web Development  
**Target Framework:** Next.js + Tailwind CSS  
**Status:** Ready for Production & Stitch AI  
**Versi Dokumen:** 1.0 (Final Design System)  

---

## 1. Design System Specification (Inspired Design Style)

Design System Kodemuda diadaptasi secara langsung dari estetika visual sampel (*clean, soft-tech, approachable, & high-converting*). Gaya ini mengeliminasi kesan AI-generated/slop yang kaku dengan menggabungkan *soft gradient canvas*, *asymmetric rounded cards*, *floating micro-badges*, *organic confetti/shapes*, dan *high-contrast typography*.

### 1.1 Color Palette System

| Color Name | Color Hex / Tailwind | Role & Application |
| :--- | :--- | :--- |
| **Sky Blue** | `#0284c7` / `sky-600` | Primary CTA & Brand Accent |
| **Soft Sky Tint** | `#e0f2fe` / `sky-100` | Hero & Section Background |
| **Amber Gold** | `#f59e0b` / `amber-500` | Badges & Ratings |
| **Slate Dark** | `#0f172a` / `slate-900` | Headings & Text |
| **Pure White** | `#ffffff` / `white` | Cards & Container Background |

### 1.2 Typography System

| Level / Element | Font Family | Tailwind Class & Size | Weight & Style |
| :--- | :--- | :--- | :--- |
| **Display / Hero H1** | Plus Jakarta Sans / Inter | `text-4xl md:text-5xl lg:text-6xl` | Extra Bold (800), Leading Tight (-0.03em) |
| **Section Heading H2** | Plus Jakarta Sans / Inter | `text-2xl md:text-3xl lg:text-4xl` | Bold (700), Tracking Normal |
| **Card / Subsection H3** | Plus Jakarta Sans / Inter | `text-lg md:text-xl` | SemiBold (600) |
| **Body Text** | Inter / System Sans | `text-sm md:text-base` (14px - 16px) | Regular (400) / Medium (500), Color: `text-slate-600` |
| **Micro Badge / Label** | Inter | `text-xs md:text-sm` | SemiBold (600), Rounded Full Pill |

### 1.3 Spacing & Layout Grid System

*Pedoman Desain Visual Modern (Inspired by Volume One Studios) & Prompt Presisi Google Stitch / v0*

| Token Name | Size Value | Tailwind Equivalent | Penggunaan Utama |
| :--- | :--- | :--- | :--- |
| **Page Container Max-Width** | 1280px | `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` | Ketersediaan margin samping yang konsisten |
| **Section Vertical Gap** | 80px - 112px | `py-16 md:py-24 lg:py-28` | Jarak antar seksi halaman agar bernapas lega |
| **Grid Gaps** | 24px - 32px | `gap-6 md:gap-8` | Jarak antar kartu paket / portofolio |
| **Card Inner Padding** | 24px - 32px | `p-6 md:p-8` | Ruang dalam kartu komponen |
| **Border Radius System** | 16px - 24px | `rounded-2xl` / `rounded-3xl` | Sudut melengkung halus khas modern SaaS/Agency |

### 1.4 Component Inventory (Visual Elements)

* **Floating Pill Header Badge:** Badge kapsul melayang di atas H1 dengan teks berwarna biru tua di latar belakang `sky-100` + ikon emoji/bintang.
* **Asymmetric Split Hero Layout:** Kolom kiri berisi teks H1 + Subtitle + Dual CTA Buttons + Avatar Social Proof. Kolom kanan berisi foto developer / ilustrator modern yang dikelilingi *floating metric cards* (misal: "Loading Speed 99%", "Client Satisfaction 100%").
* **Floating Metric & Testimonial Cards:** Card putih melayang (*floating overlay*) dengan `shadow-xl` dan `backdrop-blur` yang bertengger di tepi gambar hero.
* **Trust Logo Banner:** Marquee / Grid grayscale logo teknologi (React, Next.js, Laravel, Tailwind CSS, PostgreSQL, Figma).
* **Rounded Card Containers:** Kartu putih bersih dengan sudut `rounded-3xl`, border tipis `border-slate-100`, dan efek hover lift-up `hover:-translate-y-1 transition-all duration-300`.
* **Confetti & Decorative Blobs:** Shape lingkaran/blob pastel berwarna pastel orange (`amber-400`) dan sky blue yang mengapung lembut di latar belakang section.

---

## 2. Google Stitch & AI Generator Prompts (Per Page)

Gunakan prompt di bawah ini langsung pada Google Stitch / v0.dev / Bolt.new. Prompt telah dirancang dengan bahasa instruksi spesifik UI/UX tanpa memunculkan ciri khas "AI Slop" (seperti dark mode berlebih, neon glow berlebihan, atau grid monoton).

### Halaman 1: Beranda (Home Page)

```text
Role: Lead UI/UX Designer & Next.js Tailwind Engineer.
Task: Create a highly converting, modern, clean Home Page for a web development agency named "Kodemuda".

Design Aesthetic: Inspired by friendly modern SaaS landing pages. Light-mode first with a very soft sky-blue background gradient (bg-gradient-to-b from-sky-50/70 via-white to-sky-50/30). Rounded UI cards (rounded-3xl), rich whitespace, vibrant sky-blue primary accents (#0284c7), amber badges (#f59e0b), crisp typography (Plus Jakarta Sans). NO AI SLOP, NO dark-mode neon gradients, NO generic boxed cards.

Key Page Sections:
1. Navbar: Clean sticky glassmorphic navbar (backdrop-blur-md bg-white/80) with Kodemuda logo (sky-blue icon + bold dark text), nav links (Home, Services & Pricing, Portfolio, About), and a primary pill button "Konsultasi Free" (bg-sky-600 hover:bg-sky-700 text-white shadow-md rounded-full).
2. Hero Section: Asymmetric two-column split.
 - Left Column: Top pill badge with emoji ("🚀 Solusi Web Developer Professional Sidoarjo & Surabaya"), huge bold display title "Bikin Website Bisnis Modern, Cepat & High-Converting", subtitle text describing Next.js & Laravel development for UMKM & Enterprise. Dual CTA: Primary pill button "Konsultasi Gratis (WhatsApp)" with WA icon, and Secondary button "Lihat Portofolio" with play icon. Below CTAs: Client avatar stack with 5-star rating ("Join 50+ Happy Business Owners").
 - Right Column: High-quality professional portrait of a tech developer working on a laptop, surrounded by floating micro-widgets: Widget 1 (top right): "Page Speed Score 99/100" with green line graph. Widget 2 (bottom right): "100% Responsive Design" badge. Floating decorative pastel blue & amber blob shapes around.
3. Tech Stack & Trust Banner: "Teknologi Modern yang Kami Gunakan" showcasing clean SVG logos of React, Next.js, Laravel, Tailwind CSS, Figma, and MySQL in a soft grey scale to color hover bar.
4. Why Us / Core Advantages Section: Section title "Mengapa Memilih Kodemuda?". 4 feature cards with custom pastel background icons (Fast Pengerjaan 3-5 Hari, Custom Tech No-Wordpress Bloat, SEO & Google Index Ready, Free Support 1 Tahun).
5. Featured Portfolio Preview: Title "Hasil Karya Terkemuka". 3 showcase cards featuring real-looking mockups of desktop & mobile UI, category tag pills (e.g. "E-Commerce", "Company Profile"), title, tech pills, and a "View Case Study →" link.
6. Pricing Highlights: 3 simplified pricing preview cards with popular tag on Company Profile card. Button linking to /pricing.
7. Testimonial & Final CTA Section: Soft sky-blue rounded background container. Quotes from clients with real photos and company names. Big bold CTA banner "Siap Naikkan Omset Bisnis dengan Website Baru?" with WhatsApp CTA button.
8. Footer: 4-column footer with quick links, contact info, social icons, and copyright text.

Use clean Tailwind CSS classes, responsive grid, and interactive hover states.
```

---

### Halaman 2: Layanan & Paket Harga (Services & Pricing Page)

```text
Role: Lead UI/UX Designer & Tailwind Frontend Engineer.
Task: Create a crisp, conversion-focused "Services & Pricing" page for "Kodemuda".

Design Style: Light modern SaaS theme, soft pastel grey-blue background (bg-slate-50), clear hierarchy, pill buttons, rounded containers (rounded-3xl), high-contrast pricing cards.

Key Page Sections:
1. Page Header Section: Centered header with a top badge "Investasi Transparan", main heading "Pilih Paket Website Sesuai Skala Bisnis Anda", subtitle "Tanpa biaya tersembunyi. Semua paket sudah termasuk domain, hosting, dan garansi maintenance."
2. 3 Tier Pricing Cards (Grid 3 Columns):
 - Card 1: Paket Starter (Rp1.000.000+)
   - Target: UMKM & Personal Brand.
   - Features checklist: 1 Single Page Landing Page, Mobile Responsive, WhatsApp Direct Button, Basic SEO (Meta & Google Search Console), Free .com/.id Domain & Hosting 1 Year, Pengerjaan 3-5 Hari.
   - CTA Button: "Pilih Paket Starter" (Outline / Soft Sky style).
 - Card 2: Paket Company Profile (Rp3.000.000+) — HIGHLIGHTED CARD
   - Featured Badge: "Paling Populer" (bg-amber-500 text-white rounded-full px-4 py-1 text-xs).
   - Styling: Distinct sky-blue border, shadow-2xl, background white.
   - Target: Perusahaan, Agensi, Klinik, Sekolah.
   - Features checklist: Multi-Page (Home, About, Services, Portfolio, Contact), Easy CMS / Admin Panel, Advanced SEO Optimization, Google Maps & Email Inquiry Form, Pengerjaan 7-14 Hari, Free Support 6 Bulan.
   - CTA Button: "Pilih Company Profile" (Solid bg-sky-600 text-white shadow-lg).
 - Card 3: Paket Enterprise / Custom (Custom Quote)
   - Target: Startup, Web App, E-Commerce, Custom Portal.
   - Features checklist: Full Custom Web App (Next.js/Laravel), Database & API Integration, Payment Gateway / Booking System, High Security & Custom Architecture, Maintenance SLA & Priority Support.
   - CTA Button: "Konsultasi Custom Project" (Dark slate button).
3. Feature Comparison Matrix (Table Component):
 - Detailed comparison table comparing Starter vs Company Profile vs Enterprise across 8 rows: Jumlah Halaman, CMS Admin Panel, SEO Optimization, Custom Domain, Google Search Console, Revisions Count, Delivery Time, Maintenance Support.
4. Transparent Payment & FAQ Accordion:
 - Accordion section addressing: "Bagaimana sistem pembayarannya?" (DP 50% awal, 50% setelah website live), "Apakah ada biaya perpanjangan?", "Berapa kali batas revisi?", "Apakah saya bisa update isi website sendiri?".
5. Direct Custom Inquiry Banner:
 - CTA Card at bottom: "Punya kebutuhan fitur khusus atau budget tersendiri? Mari diskusikan via WhatsApp." with direct WhatsApp action button.
```

---

### Halaman 3: Portofolio & Studi Kasus (Portfolio & Case Studies Page)

```text
Role: Senior Frontend Engineer & UI Designer.
Task: Create an interactive, visually stunning Portfolio & Case Studies Showcase page for "Kodemuda".

Design Style: Gallery-style layout, clean light background, interactive filter pills, modal detail overlay design, emphasis on real results and metrics.

Key Page Sections:
1. Header Section:
 - Top badge "Rekam Jejak & Hasil Karya", Title "Portofolio Proyek Kodemuda", Subtitle "Jelajahi berbagai proyek website modern yang telah kami kembangkan untuk klien dari berbagai industri."
2. Interactive Category Filter Bar:
 - Horizontal pill tab system: ["Semua Proyek", "Landing Page", "Company Profile", "Custom Web App"]. Active tab highlighted in solid sky-blue (bg-sky-600 text-white).
3. Portfolio Showcase Grid (Responsive 2 or 3 Columns):
 - Card Design: Rounded 3XL card with smooth hover image zoom effect.
 - Mockup Image: High quality desktop/mobile browser frame mockup of the client's site.
 - Card Content: Project Title (e.g., "E-Notaris Platform", "Tiberman Checklist System", "Kedai Kopi Local"), Category Badge, Brief 2-line description, Tech stack badges (e.g. Next.js, Laravel, Tailwind CSS).
 - Card Actions: Two buttons: "Detail Case Study" (opens modal) and "Live Demo ↗" (external link).
4. Case Study Modal Detail View (Interactive Component Layout):
 - Header with Project Banner & Live URL button.
 - Section 1: Client Background & Challenge (Masalah awal klien).
 - Section 2: Kodemuda Solution (Solusi teknologi yang kami bangun).
 - Section 3: Tech Stack Used with icons.
 - Section 4: Key Metrics & Impact Grid: 4 stat boxes (e.g. "+150% Page Speed", "100% Mobile Optimized", "2 Weeks Delivery Time", "Zero Downtime").
5. Metrics & Client Impact Summary Bar:
 - Counter banner: "50+ Proyek Selesai", "99.9% Client Satisfaction", "Avg. Page Speed 95+", "24/7 Support Readiness".
6. Bottom Consultation CTA:
 - "Ingin Website Seperti Ini untuk Bisnis Anda?" button linking to WhatsApp consultation.
```

---

### Halaman 4: Tentang & Kontak (About Us & Contact Page)

```text
Role: Lead Web Designer & Frontend Developer.
Task: Build an authentic, high-trust "About Us & Contact" page for "Kodemuda".

Design Style: Warm, transparent, developer-centric light layout, interactive contact form, timeline workflow step cards.

Key Page Sections:
1. Hero & About Section:
 - Title "Tentang Kodemuda", Subtitle "Mitra Pengembang Website Modern, Jujur, dan Berorientasi Pada Hasil."
 - Story & Vision Card: Explaining Kodemuda's mission to empower local Indonesian businesses & startups with high-performing, non-bloated web technology (React, Next.js, Laravel). Highlight clean code, high speed, and direct communication without corporate bureaucracy.
2. Alur Kerja (Our 5-Step Transparent Workflow):
 - Timeline / Card Grid showing 5 steps:
   - Step 1: Discovery & Consultation (Diskusi kebutuhan & penentuan paket)
   - Step 2: Wireframe & Visual Design (Penyusunan tata letak & approval desain)
   - Step 3: Development & Clean Coding (Proses coding Next.js/Laravel & integrasi CMS)
   - Step 4: Testing & Optimization (Uji kecepatan, SEO, & mobile responsiveness)
   - Step 5: Launch & Support (Website live, penyerahan akses, & garansi)
3. Dual-Column Contact & Inquiry Section:
 - Left Column (Contact Info Card):
   - Direct WhatsApp link & QR code / button.
   - Email address (hello@kodemuda.com / dev@kodemuda.com).
   - Operating Area: Sidoarjo & Surabaya, East Java, Indonesia (Remote Friendly for Nationwide Clients).
   - Work Hours: Monday - Saturday (08.00 - 18.00 WIB).
 - Right Column (Interactive Inquiry Form Card):
   - Card container (white, shadow-xl, rounded-3xl, p-8).
   - Form Fields:
     1. Nama Lengkap (Text Input)
     2. Email / No. WhatsApp Active (Phone Input)
     3. Pilih Jenis Paket (Dropdown: Starter, Company Profile, Custom Web App)
     4. Budget Range (Dropdown: Rp1-3 Juta, Rp3-5 Juta, >Rp5 Juta)
     5. Deskripsi Brief Project (Textarea)
   - Submit Button: "Kirim Pesan / Konsultasi WhatsApp" (Full width bg-sky-600 hover:bg-sky-700 text-white font-bold py-4 rounded-xl shadow-lg).
4. Direct Location & Footer Banner:
 - Clean Google Maps aesthetic card showing regional operational base (Surabaya & Sidoarjo tech community ecosystem).
