# Dokumentasi Proyek MANIKA

Website ini adalah aplikasi React 18 + TypeScript yang dibangun dengan Vite dan Tailwind CSS untuk menampilkan brand gelang manik buatan mahasiswa bernama MANIKA. Struktur multi-halaman (SPA dengan React Router) digunakan untuk menjaga pengalaman mulus sambil memisahkan konten utama: Homepage, Profil UMKM, Katalog Produk, dan Kontak.

## Ringkasan Proyek

- **Tujuan**: Menyediakan situs hangat dan minimalis untuk memamerkan gelang manik, memperkenalkan latar UMKM mahasiswa, serta memudahkan pemesanan dan komunikasi.
- **Bahasa antarmuka**: Indonesia (dengan copy brand bernuansa ramah dan jujur).
- **Komponen utama**:
  - Header responsif dengan menu hamburger, logo bulat, dan highlight navigasi aktif.
  - Hero dengan tagline “From beads to meaning”, CTA ke katalog, dan kartu produk unggulan.
  - Seksi gambaran UMKM, preview proses handmade, dan nilai brand.
  - Preview produk grid (3 item) pada homepage + katalog penuh dengan data mock (`src/data/mockProducts.ts`).
  - Halaman kontak dengan formulir sederhana serta tautan WhatsApp dan Instagram.
  - Footer konsisten pada seluruh halaman.
- **Palet warna**: hijau lembut / teal, putih, krem terang (#F5F2EC) sesuai mood logo MANIKA.
- **Tipografi**: Google Font “Outfit”.

## Arsitektur & Struktur Folder

```
src/
├── App.tsx                # Router utama + deklarasi rute
├── main.tsx               # Entrypoint React
├── index.css              # Import font + utilitas Tailwind
├── components/            # Header, Footer, Hero, dsb.
├── layouts/MainLayout.tsx # Rangka halaman (Header + Outlet + Footer)
├── pages/                 # HomePage, ProfilePage, ProductsPage, ContactPage
└── data/mockProducts.ts   # Data produk mock untuk katalog
```

Seluruh halaman menggunakan `<MainLayout>` agar Header/Footer konsisten. Data produk sementara diletakkan pada modul data untuk memudahkan integrasi backend ke depan.

## Alur Navigasi

```
Home → Profil → Products → Contact
``` 

Header menggunakan `<NavLink>` sehingga tab aktif mendapat highlight. CTA di hero dan grid preview mengarahkan ke katalog/halaman kontak sesuai konteks.

## Pengembangan & Perintah Penting

- Instal dependensi: `npm install`
- Jalankan build produksi: `npm run build`
- Jalankan dev server: `npm run dev` (port default Vite `http://127.0.0.1:5173`)

Setelah meng-install dependensi, pastikan kamu menjalankan build untuk memverifikasi tidak ada error. Proyek telah dibangun sukses pada 2025-12-14.

## Detail Implementasi Kunci

- **Header/Header mobile**: `src/components/Header.tsx`
- **Hero, preview profil, produk, kontak**: `src/components/`
- **Layout utama**: `src/layouts/MainLayout.tsx`
- **Routing**: `src/App.tsx`
- **Halaman spesifik**: `src/pages/`
- **Mock products**: `src/data/mockProducts.ts`

Semua copy/UI menggunakan bahasa Indonesia sesuai konteks UMKM lokal.

## Rencana Lanjutan

- Integrasi backend (Youware Backend) bila dibutuhkan untuk pengelolaan produk, pesanan, dan form kontak.
- Tambah modal detail produk atau fitur keranjang bila e-commerce penuh diperlukan.
- Optimalkan gambar produk (kompresi atau CDN) saat menggunakan data real.

Tidak ada perubahan database saat ini karena data bersifat mock (in-memory).

## Teknologi Utama

- **React 18 + TypeScript** untuk komponen fungsional yang tiped.
- **React Router DOM** untuk navigasi SPA multi-halaman (`App.tsx`).
- **Tailwind CSS** (lihat `tailwind.config.js` dan `src/index.css`) sebagai sistem styling utama dengan warna brand khusus.
- **Lucide-react** untuk ikon WhatsApp & Instagram.

## Pedoman Implementasi

- Seluruh halaman dibungkus `MainLayout` agar Header/Footer konsisten.
- Komponen berada di `src/components/` dan reusable antar halaman.
- Format data katalog sementara berada pada `src/data/mockProducts.ts`; siap diganti dengan sumber API/back-end.
- Jagalah konsistensi tone copy (hangat, jujur, berbahasa Indonesia) saat menambah konten baru.

## Konfigurasi Penting

- Jangan ubah baris `<script type="module" src="/src/main.tsx"></script>` di `index.html`.
- Tailwind akan berfungsi bila `@import` font tetap ditempatkan sebelum direktif Tailwind di `src/index.css`.
- Untuk menambahkan warna/spacing baru, gunakan `tailwind.config.js` kemudian referensikan dengan utility class.

## Langkah Pengembangan

1. `npm install`
2. `npm run dev` untuk menjalankan lokal (http://127.0.0.1:5173)
3. `npm run build` untuk produksi (menguji sebelum publish)

Log build terakhir: berhasil pada 2025-12-14 setelah instal dependensi.

## Ide Pengembangan Lanjutan

- Integrasi Youware Backend saat membutuhkan data dinamis & penyimpanan order.
- Tambah modal detail produk atau flow keranjang bila e-commerce penuh diinginkan.
- Optimasi gambar (kompresi/CDN) jika memakai foto produk resolusi tinggi.
