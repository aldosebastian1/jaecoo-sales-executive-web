# Product Requirements Document (PRD)
## Website Dealer Mobil — jaecoomedan.biz.id

| | |
|---|---|
| **Versi** | 1.0 |
| **Tanggal** | 30 Juni 2026 |
| **Domain** | jaecoomedan.biz.id |
| **Tipe Proyek** | Frontend-only (Static Site) |
| **Status** | Draft |

---

## 1. Latar Belakang & Tujuan

### 1.1 Latar Belakang
Dealer mobil membutuhkan kehadiran digital yang cepat, profesional, dan mudah ditemukan di Google untuk menjangkau calon pembeli di area Medan dan sekitarnya, serta menampilkan katalog produk secara menarik.

### 1.2 Tujuan Bisnis
- Meningkatkan jumlah leads (booking test drive, konsultasi, kontak) dari pengunjung organik.
- Mencapai peringkat halaman 1 (idealnya posisi #1) Google untuk keyword target seperti "dealer Jaecoo Medan", "mobil Jaecoo Medan", dll.
- Membangun kredibilitas brand melalui katalog produk dan konten artikel/edukasi.

### 1.3 Tujuan Teknis
- Skor Core Web Vitals & PageSpeed Insights ≥ 90 (mobile & desktop).
- Website 100% statis (frontend-only), tanpa server backend/database custom.
- Struktur SEO-friendly: clean URL, schema markup, sitemap otomatis.

---

## 2. Target Pengguna

| Persona | Kebutuhan |
|---|---|
| Calon pembeli baru | Cari info mobil, bandingkan varian, lihat harga & promo |
| Calon pembeli siap beli | Booking test drive / konsultasi dengan sales |
| Pencari informasi | Baca artikel review, tips, berita otomotif |
| Pengguna mobile | Akses cepat dari HP, langsung chat WhatsApp |

---

## 3. Lingkup Produk (Scope)

### 3.1 In Scope
- Halaman Home
- Halaman Katalog (listing + detail produk per mobil)
- Halaman Booking (form test drive/konsultasi)
- Halaman Artikel (listing + detail artikel/blog)
- Halaman pendukung: Tentang Kami, Kontak, 404
- Optimasi SEO on-page & teknis
- Integrasi WhatsApp & form pihak ketiga (non-backend)

### 3.2 Out of Scope
- Backend/server custom, database, CMS dinamis
- Sistem pembayaran online
- Login/akun pengguna
- Dashboard admin internal (kecuali pakai CMS pihak ketiga opsional di fase lanjutan)

---

## 4. Spesifikasi Fitur per Halaman

### 4.1 Home
- Hero section: headline + CTA utama ("Booking Test Drive" / "Lihat Katalog")
- Highlight model unggulan (3–4 mobil)
- Keunggulan dealer (garansi, after-sales, promo)
- Testimoni pelanggan
- Preview artikel terbaru (3 artikel)
- Floating CTA WhatsApp
- Section lokasi dealer (Google Maps embed)

**Kriteria Penerimaan:**
- LCP < 2.5s, semua gambar lazy-load kecuali hero
- CTA booking terlihat tanpa scroll (above the fold) di mobile

### 4.2 Katalog
**Listing:**
- Filter by tipe (SUV, sedan, dll), harga, transmisi
- Card produk: foto, nama, harga mulai dari, CTA "Detail" & "Booking"

**Detail Produk:**
- Galeri foto (carousel), spesifikasi lengkap (tabel), varian & harga
- Fitur unggulan, video (opsional embed YouTube)
- CTA booking & WhatsApp langsung dengan pre-filled pesan
- Schema markup `Vehicle` / `Product` per halaman

**Kriteria Penerimaan:**
- Setiap mobil punya URL statis unik (mis. `/katalog/jaecoo-j7`)
- Data terstruktur (JSON-LD) tervalidasi di Google Rich Results Test

### 4.3 Booking
- Form: Nama, No. HP/WA, Email, Pilihan Model, Tipe Booking (Test Drive/Konsultasi/Trade-in), Jadwal preferensi, Catatan
- Validasi input di sisi client
- Submit via pihak ketiga (Formspree/Web3Forms/Getform) → notifikasi email ke tim sales
- Alternatif: tombol "Lanjut via WhatsApp" yang auto-fill pesan dari form
- Halaman sukses/terima kasih (thank you page) untuk tracking konversi di GA4

**Kriteria Penerimaan:**
- Form berhasil terkirim tanpa reload halaman (AJAX submit)
- Tracking event `generate_lead` tercatat di Google Analytics 4

### 4.4 Artikel
- Listing artikel dengan kategori (Tips, Review, Promo, Berita)
- Halaman detail artikel: judul, gambar cover, konten, share button, related articles
- Author & tanggal publish/update (penting untuk E-E-A-T SEO)
- Schema markup `Article`/`BlogPosting`

**Kriteria Penerimaan:**
- Setiap artikel statis hasil build dari Markdown/MDX (Content Collections)
- Sitemap artikel otomatis terupdate saat build

---

## 5. Kebutuhan Non-Fungsional

| Kategori | Requirement |
|---|---|
| **Performa** | PageSpeed Insights ≥ 90 (mobile & desktop); LCP < 2.5s, CLS < 0.1, INP < 200ms |
| **SEO** | Meta title/description unik per halaman, sitemap.xml, robots.txt, structured data (Organization, AutoDealer, Vehicle, Article, BreadcrumbList) |
| **Responsivitas** | Mobile-first, mendukung lebar 320px–1920px |
| **Aksesibilitas** | Kontras warna sesuai WCAG AA, alt text di semua gambar |
| **Keamanan** | HTTPS wajib, tanpa input rawan XSS (validasi client-side) |
| **Maintainability** | Tambah/edit mobil & artikel cukup lewat file Markdown/JSON, tanpa coding ulang |
| **Browser Support** | 2 versi terakhir Chrome, Safari, Firefox, Edge; Android & iOS browser |

---

## 6. Rekomendasi Tech Stack

| Layer | Pilihan |
|---|---|
| Framework | Astro (Islands Architecture, output static) |
| Styling | Tailwind CSS |
| Konten Artikel & Katalog | Astro Content Collections (Markdown/MDX/JSON) |
| Form Booking | Formspree / Web3Forms + fallback WhatsApp link |
| Hosting | Cloudflare Pages atau Netlify (CDN global, auto SSL) |
| Analytics | Google Analytics 4 + Google Search Console |
| SEO Tools | astro-seo / astro-sitemap, JSON-LD manual per halaman |
| Image Optimization | Astro Image (`astro:assets`) — WebP/AVIF otomatis |
| Version Control | Git + GitHub (deploy otomatis ke hosting) |

---

## 7. SEO Strategy Singkat

1. **Riset Keyword**: target kombinasi "[merek] [model] Medan", "dealer mobil [merek] Medan", "harga [model] Medan", "promo [merek] Medan".
2. **On-page**: 1 keyword fokus per halaman, heading hierarki rapi (H1 satu per halaman), internal linking antara katalog ↔ artikel.
3. **Local SEO**: Google Business Profile terhubung, NAP (Nama, Alamat, No. Telp) konsisten, embed Maps.
4. **Technical SEO**: canonical tag, breadcrumb schema, sitemap submit ke Search Console, mobile-friendly test.
5. **Content Marketing**: artikel rutin (review, tips perawatan, perbandingan) untuk menjaring long-tail keyword & sinyal freshness.

---

## 8. Metrik Keberhasilan (KPI)

| Metrik | Target (3–6 bulan) |
|---|---|
| Posisi keyword utama di Google | Top 3 (ideal: #1) |
| Organic traffic bulanan | Meningkat signifikan dari baseline |
| Conversion rate booking | ≥ 2–3% dari total visitor |
| PageSpeed Score | ≥ 90 mobile & desktop |
| Bounce rate | < 55% |

---

## 9. Roadmap / Fase Pengembangan

| Fase | Deliverable | Estimasi |
|---|---|---|
| Fase 1 | Setup project Astro + Tailwind, struktur folder, desain UI (Home, Katalog, Booking, Artikel) | 1–2 minggu |
| Fase 2 | Implementasi konten (katalog mobil, artikel awal), integrasi form & WhatsApp | 1 minggu |
| Fase 3 | SEO setup (schema, sitemap, GA4, Search Console), optimasi performa | 3–5 hari |
| Fase 4 | Testing (cross-browser, mobile, kecepatan), deploy ke hosting + domain | 2–3 hari |
| Fase 5 | Monitoring SEO, iterasi konten artikel rutin | Ongoing |

---

## 10. Risiko & Mitigasi

| Risiko | Mitigasi |
|---|---|
| Persaingan keyword dealer resmi merek besar | Fokus long-tail + local SEO Medan, konten artikel rutin |
| Leads form tidak terkirim (limit free tier pihak ketiga) | Sediakan fallback WhatsApp + monitoring berkala |
| Update katalog manual merepotkan tanpa CMS | Pertimbangkan headless CMS ringan (mis. Decap CMS/Tina CMS) di fase lanjutan jika volume mobil besar |
| Skor performa turun karena banyak gambar | Wajib kompresi & format WebP/AVIF, lazy load konsisten |

---

## 11. Catatan Tambahan
Karena website ini frontend-only, pengelolaan konten (tambah mobil baru, artikel baru) dilakukan melalui file di repository (Markdown/JSON) lalu deploy ulang otomatis (CI/CD). Jika ke depan tim non-teknis perlu mengelola konten sendiri tanpa coding, disarankan menambahkan headless CMS gratis berbasis Git (Decap CMS) yang tetap kompatibel dengan arsitektur statis ini.
