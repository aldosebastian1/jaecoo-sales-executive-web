# Jaecoo Medan Sales Executive Portal

**Status**: Phase 1-8 Complete ✓ | Phase 9 (Final Optimization & Code Audit) In Progress

Jaecoo Medan Sales Executive Portal adalah aplikasi web modern kelas premium yang dibangun dengan Next.js 15, TypeScript, dan Tailwind CSS. Portal ini dirancang secara khusus untuk memberikan pengalaman sinematik dan mewah bagi pelanggan Jaecoo Medan dalam mengeksplorasi katalog kendaraan, melakukan *test drive*, membaca artikel, dan melihat lokasi diler resmi.

## 📋 Dokumentasi Utama

- **[PRD-Website-Jaecoo-Medan.md](./PRD-Website-Jaecoo-Medan.md)** - Product Requirements Document (Dokumen Utama Arsitektur & Bisnis Logic)

## 🎯 Project Overview

### Teknologi Utama
- **Framework**: Next.js 15 (App Router, Server Components)
- **Language**: TypeScript 5.3 (Strict Mode)
- **Styling**: Tailwind CSS 3.4 + PostCSS (Custom Tokens)
- **Animations**: CSS Animations & ScrollReveal
- **Validation**: Zod 3.22

### Fitur Tersedia (Selesai Dibangun)
1. **Premium Customer Journey**: Animasi UI mewah dan terstruktur khusus untuk pengalaman pengguna (UX) kelas atas.
2. **Katalog Dinamis**: Daftar mobil Jaecoo dengan informasi harga dan gambar beresolusi tinggi.
3. **Peta Interaktif**: Pemilihan lokasi diler secara dinamis tanpa *refresh*.
4. **Formulir Lanjutan**: Validasi langsung pada kolom formulir Test Drive menggunakan Zod.
5. **Konektivitas WhatsApp**: Integrasi *lead generation* cerdas menggunakan tautan WhatsApp dinamis.
6. **Error & Fallback UI**: Halaman 404 kustom yang elegan.

## 🚀 Panduan Memulai (Getting Started)

### Kebutuhan Sistem
- Node.js 20+ 
- npm 11+

### Instalasi & Pengembangan

```bash
# Instalasi modul dependensi
npm install

# Menjalankan server pengembangan (http://localhost:3000)
npm run dev
```

### Eksekusi & Validasi Kualitas

```bash
# Validasi Tipe Data (TypeScript)
npm run type-check

# Pembuatan Versi Produksi
npm run build
npm run start
```

## 📁 Struktur Direktori Penting

```
jaecoo-medan-portal/
├── src/
│   ├── app/                    # Next.js App Router (Halaman Utama)
│   ├── components/             # Komponen Reusable (Navbar, Footer, Preloader, Cards, Forms)
│   ├── types/                  # Definisi antarmuka TypeScript
│   ├── lib/                    # Utilitas (Validasi Zod, Utils, dll)
│   ├── config/                 # Konfigurasi Situs & Meta
│   └── data/                   # Basis data statis JSON (Katalog, Artikel, FAQ)
├── public/                     # Aset Gambar, Ikon, Logo
├── docs/                       # Dokumentasi Internal (Audit & Workflow)
├── .env.example                # Referensi Environment Variables
└── PRD-Website-Jaecoo-Medan.md # Dokumen Induk Syarat Produk
```

## ⚠️ Kebijakan Pengembangan (Clean Code)

Mengacu pada `AGENTS.md` dan `CODE_ARCHITECTURE_AUDIT.md`, setiap pengembangan wajib memenuhi aturan berikut:
1. **Zero Warnings & Errors:** Kode harus selalu lolos `npm run type-check`.
2. **Optimalisasi Server Components:** Kurangi penggunaan `'use client'` kecuali untuk elemen interaktif (seperti *state management* atau *hooks*).
3. **Validasi Formulir:** Dilarang menggunakan state lokal berlebih, gunakan React Hook Form + Zod.
4. **Performa Gambar:** Selalu gunakan komponen `<Image />` bawaan Next.js untuk media gambar.

---

## Hak Cipta dan Lisensi
© 2026 Aldo Sebastian. Semua Hak Dilindungi.
Proyek ini dikembangkan secara komersial eksklusif untuk Jaecoo Medan. Dilarang mendistribusikan atau menggandakan kode ini tanpa izin tertulis.