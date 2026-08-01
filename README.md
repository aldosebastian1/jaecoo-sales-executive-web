# Jaecoo Medan Sales Executive Portal

**Status**: Phase 1-9 Complete ✓ | (Final Optimization & Code Audit Passed: Grade A+)

Jaecoo Medan Sales Executive Portal adalah aplikasi web modern kelas premium yang dibangun dengan ekosistem rilis terbaru (Next.js 15+, React 19, TypeScript, dan Tailwind CSS v4). Portal ini dirancang secara khusus untuk memberikan pengalaman sinematik dan mewah bagi pelanggan Jaecoo Medan dalam mengeksplorasi katalog kendaraan, melakukan *test drive*, membaca artikel, dan melihat lokasi diler resmi dengan performa secepat kilat.

## 📋 Dokumentasi Utama

- **[PRD-Website-Jaecoo-Medan.md](./docs/PRD-Website-Jaecoo-Medan.md)** - Product Requirements Document (Dokumen Utama Arsitektur & Bisnis Logic)

## 🎯 Project Overview

### Teknologi Utama
- **Framework**: Next.js 15+ (App Router, Server Components)
- **Engine**: React 19 (Hooks modern & Server Actions)
- **Language**: TypeScript 5.3 (Strict Mode - Bebas `any`)
- **Styling**: Tailwind CSS v4 + PostCSS (`@tailwindcss/postcss`)
- **Animations**: CSS Animations, Framer Motion & ScrollReveal
- **Validation**: Zod 3.22 (Synchronous `safeParse` Optimization)
- **Analytics & SEO**: Google Analytics 4 (GA4) & Schema Markup JSON-LD

### Fitur Tersedia (Telah Lulus QA Audit)
1. **Premium Customer Journey**: Animasi UI mewah (Framer Motion) dan terstruktur khusus untuk pengalaman pengguna (UX) kelas atas.
2. **Katalog Dinamis**: Daftar mobil Jaecoo dengan informasi harga dan gambar beresolusi tinggi tersinkronisasi `next/image` lazy-loading.
3. **Peta Interaktif**: Pemilihan lokasi diler secara dinamis tanpa menghalangi alur perenderan halaman utama (*zero render blocking*).
4. **Formulir Lanjutan**: Validasi aman sinkron menggunakan Zod tanpa memicu eksepsi yang membebani komputasi.
5. **Konektivitas WhatsApp**: Integrasi pelacakan klik konversi cerdas (GA4) ke dalam tautan WhatsApp dinamis.
6. **Arsitektur SEO**: Pemuatan skema diler mobil lokal di dalam *JSON-LD* dengan metadata statis dinamis untuk visibilitas AI (EEAT).

## 🚀 Panduan Memulai (Getting Started)

### Kebutuhan Sistem
- Node.js 20+ 
- npm 11+

### Instalasi & Pengembangan

```bash
# Instalasi modul dependensi (Clean Install)
npm install

# Menjalankan server pengembangan (http://localhost:3000)
npm run dev
```

### Eksekusi & Validasi Kualitas

```bash
# Validasi Tipe Data (TypeScript Strict Check)
npm run type-check

# Pembuatan Versi Produksi & Analisis Bundel
npm run build
npm run start
```

## 📁 Struktur Direktori Penting

```
jaecoo-medan-portal/
├── src/
│   ├── app/                    # Next.js App Router (Halaman Utama & Layout)
│   ├── components/             # Komponen Reusable (Navbar, Footer, Preloader, Cards, Forms)
│   ├── types/                  # Definisi antarmuka TypeScript Global
│   ├── lib/                    # Utilitas (Validasi Zod sinkron, Formatters, dll)
│   ├── config/                 # Konfigurasi Situs, Kontak, & Metadata
│   └── data/                   # Basis data statis JSON (Katalog, Artikel, FAQ)
├── public/                     # Aset Gambar, Ikon, Logo
├── docs/                       # Dokumentasi Internal (Audit & Workflow)
├── .env.example                # Referensi Environment Variables Kosong
└── package.json                # Kunci Dependensi (Bebas dari modul mati)
```

## ⚠️ Kebijakan Pengembangan (Clean Code)

Mengacu pada `AGENTS.md` dan `CODE_ARCHITECTURE_AUDIT.md`, setiap pengembangan wajib memenuhi aturan berikut:
1. **Zero Warnings & Errors:** Kode harus selalu lolos `npm run type-check` tanpa deklarasi implisit (`any`).
2. **Optimalisasi Server Components:** Kurangi penggunaan `'use client'` kecuali untuk elemen interaktif khusus yang membutuhkan *window/document*.
3. **Validasi Formulir Cerdas:** Hindari penangkapan galat asinkron (`try/catch`). Gunakan metode sinkron `safeParse` yang dikombinasikan dengan Generic Types.
4. **Performa Gambar & SEO:** Gunakan komponen `<Image />` bawaan Next.js, utamakan properti `priority` pada area hulu (above-the-fold) dan *lazy-loading* pada area hilir. Pertahankan skor CLS di titik nol.

---

## Hak Cipta dan Lisensi
© 2026 Aldo Sebastian. Semua Hak Dilindungi.
Proyek ini dikembangkan secara komersial eksklusif untuk Jaecoo Medan. Dilarang mendistribusikan atau menggandakan kode ini tanpa izin tertulis.