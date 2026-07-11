# Personal Portfolio - Hisyam Santoso 🚀

Selamat datang di repositori website portfolio pribadi saya! Website ini dirancang untuk menampilkan profil, keterampilan (skills), proyek-proyek terbaru (latest works), serta menyediakan formulir kontak terintegrasi untuk kolaborasi lebih lanjut.

Website ini dibangun menggunakan **HTML5**, **JavaScript (ES6+)** dengan pendekatan **Native Web Components**, dan dibalut dengan keindahan **Tailwind CSS**.

---

## 🌟 Fitur Utama

- 📱 **Desain Modern & Responsif**: Tampilan yang dioptimalkan untuk perangkat mobile, tablet, hingga desktop menggunakan Tailwind CSS.
- ⚙️ **Native Web Components**: Menggunakan Custom Elements (`nav-header`, `site-footer`, `portfolio-card`) untuk modularitas kode yang bersih dan terstruktur tanpa dependensi framework besar.
- ✍️ **Animasi Auto-Type**: Efek mengetik dinamis pada bagian Hero Section menggunakan JavaScript murni.
- 🛠️ **Skills Showcase**: Pengelompokan keterampilan yang rapi (Frontend, Backend & Database, Tools & DevOps) dengan ikon teknologi modern.
- 💼 **Project Showcase (Latest Works)**: Menampilkan daftar proyek unggulan seperti **LibraFlow LMS** dan **Sistem Perpustakaan (PKM)** lengkap dengan link repositori / demo langsung.
- ✉️ **Formulir Kontak Interaktif**: Form yang terintegrasi dengan client email untuk mempermudah koneksi langsung.

---

## 🛠️ Tech Stack & Alat Pengembangan

### Core Technologies
- **HTML5 & CSS3**
- **JavaScript (ES6+)**
- **Tailwind CSS v3.4**

### Build Tools & Libraries
- **concurrently**: Menjalankan proses watch Tailwind CSS dan server lokal secara bersamaan.
- **live-server**: Server lokal otomatis (live reload) untuk mempermudah proses development.

---

## 📂 Struktur Direktori

```text
hisyamsz/
├── img/                  # Aset gambar, ikon, dan screenshot proyek
├── src/
│   ├── js/
│   │   ├── components/   # Native Web Components (Navbar, Footer, PortfolioCard)
│   │   ├── contact.js    # Logika interaksi & feedback formulir kontak
│   │   ├── script.js     # Animasi pengetikan teks dinamis (auto-type)
│   │   └── type.js
│   ├── input.css         # Entry CSS utama untuk Tailwind
│   └── output.css        # File CSS yang dikompilasi oleh Tailwind CLI
├── index.html            # Entry point halaman web utama
├── package.json          # Konfigurasi dependensi npm dan skrip development
├── tailwind.config.js    # Kustomisasi tema, warna, dan font Tailwind
└── README.md             # Dokumentasi proyek (file ini)
```

---

## 🚀 Cara Menjalankan Proyek Secara Lokal

Ikuti langkah-langkah berikut untuk menjalankan proyek di komputer Anda:

### Prasyarat
Pastikan Anda sudah menginstal [Node.js](https://nodejs.org/) (versi LTS sangat disarankan) di komputer Anda.

### Langkah-langkah

1. **Clone Repositori**
   ```bash
   git clone https://github.com/hisyamsz/web-portofolio.git
   cd web-portofolio/hisyamsz
   ```

2. **Instal Dependensi**
   Instal semua paket pendukung yang diperlukan untuk development (seperti Tailwind CSS, Live-Server, dll):
   ```bash
   npm install
   ```

3. **Jalankan Development Server**
   Jalankan perintah berikut untuk memulai server lokal dengan fitur live-reload serta kompilasi otomatis Tailwind CSS:
   ```bash
   npm run dev
   ```
   Setelah server berjalan, website akan otomatis dapat diakses melalui browser Anda di alamat: `http://localhost:3000`.

---

## 💼 Proyek Unggulan

Beberapa proyek utama yang ditampilkan di dalam portfolio ini:

1. **LibraFlow LMS** 📚
   - Sistem Manajemen Perpustakaan Digital kelas enterprise.
   - Fitur: Role-Based Access Control, Dashboard Statistik Real-time, Import/Export Excel, Dokumentasi OpenAPI Swagger.
   - Repo: [github.com/hisyamsz/libraflow](https://github.com/hisyamsz/libraflow)

2. **Sistem Perpustakaan (PKM)** 🏫
   - Digitalisasi administrasi perpustakaan hasil PKM yang terdaftar HKI/DJKI.
   - Teknologi: Next.js 15, React 19, TypeScript, NextUI, NextAuth.
   - Repo: [github.com/hisyamsz/fe-perpustakaan](https://github.com/hisyamsz/fe-perpustakaan)

3. **Astro Blog** 📝
   - Proyek blog statis berbasis Markdown dengan performa tinggi menggunakan Astro.js.
   - Demo: [astro-blog-delta-beryl.vercel.app](https://astro-blog-delta-beryl.vercel.app)

---

## 📞 Hubungi Saya

- **Nama**: Hisyam Santoso
- **Email**: [hisyam.s901@gmail.com](mailto:hisyam.s901@gmail.com)
- **Lokasi**: Tangerang, Banten, Indonesia
