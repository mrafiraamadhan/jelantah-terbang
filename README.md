# JELANTAH TERBANG

**Paspor digital berbasis AI bagi jelantah dapur MBG menuju bahan baku bioavtur bersertifikat**

Tim Wirahmadhan · UNS Innovation Hackathon 2026 · Track Energi, Subtema B: Pengelolaan Sampah dan Ekonomi Sirkular untuk Energi dan Produk Bernilai

**Coba purwarupa:** https://mrafiraamadhan.github.io/jelantah-terbang/

## Masalah

Dapur Makan Bergizi Gratis (SPPG) menghasilkan jelantah dalam jumlah besar. Beratnya dicatat manual, mutunya tidak diukur, dan tujuan akhirnya tidak tercatat. Akibatnya, jelantah dapur tidak dapat dihitung sebagai bahan baku bioavtur bersertifikat (ISCC), dan harganya ditentukan pengepul. Formulir pernyataan ISCC saja tidak cukup: titik asal di bawah 5 ton per bulan tidak diaudit, celah yang dipakai untuk menyamarkan minyak sawit murni sebagai jelantah (Transport & Environment, 2024). JELANTAH TERBANG melengkapi program pengumpulan jelantah Pertamina dengan bukti per kiriman.

## Solusi

Petugas memotret layar timbangan seperti biasa. Model AI:

1. membaca berat pada layar timbangan;
2. mengenali wadah terdaftar untuk mengurangkan tara secara otomatis;
3. menaksir mutu dagang (asam lemak bebas, air, dan endapan) dari foto minyak di atas kartu acuan, lalu menetapkan kelas mutu untuk harga yang adil dan kebutuhan praolah. Acuan pasar: FFA maks. 5% dan MIU maks. 2%. Jalur bioavtur (HEFA) atau biodiesel ditentukan pembeli;
4. memeriksa kewajaran jumlah dengan neraca massa per dapur.

Setiap kiriman memperoleh **paspor ber-QR** yang memuat berat, mutu, asal, dan dokumen sumber siap audit.

## Isi purwarupa

| Halaman | Isi |
|---|---|
| Beranda | Masalah, solusi, bukti lapangan 6 SPPG (harga Rp7.500–11.000/kg), dan cara kerja dalam satu layar |
| 1 · Catat | **Kamera berstempel otomatis:** foto timbangan → stempel waktu, tanggal, nama dapur, GPS, dan kode foto (SHA-256) → tara dan berat bersih dihitung → paspor ber-QR yang isinya tersimpan di QR (bisa diperiksa tanpa server) dan dapat diunduh sebagai JSON. Disertai contoh data nyata 24 Oktober 2026 (4 foto, 16 galon) |
| 2 · Mutu | **Berjalan langsung di peramban:** foto jelantah di atas kertas putih → kejernihan (cahaya yang menembus minyak), warna CIELAB (L\*, b\*, sudut warna), dan indikator partikel → kelas A (layak dijual), B (perlu praolah ringan), C (perlu uji laboratorium) |
| 3 · Paspor | Paspor kiriman ber-QR dan simulasi serah terima dapur → pengepul → tujuan akhir |
| 4 · Dasbor | Neraca minyak, kiriman bulanan, temuan audit foto |
| 5 · Verifikasi | Membaca berkas paspor JSON dan mencocokkan sidik digital SHA-256 foto sumber yang dihitung langsung di peramban |
| Dampak | Kalkulator: jumlah SPPG, jelantah per dapur, harga, dan biaya verifikasi → volume, nilai, pendapatan dapur dan layanan, energi, potensi SAF, emisi yang dihindari (faktor ICAO/CORSIA) |

### Cara kerja uji mutu

1. Petugas menandai dua titik pada foto: minyak dan kertas putih di luar minyak.
2. Warna rata-rata di sekitar tiap titik dihitung dalam ruang warna linear, lalu warna minyak dinormalkan terhadap kertas putih agar tidak bergantung pada lampu dan kamera.
3. **Kejernihan** = luminans minyak dibanding luminans kertas (cahaya yang menembus lapisan minyak). Warna diubah ke CIELAB.
4. Koefisien variasi luminans di area minyak menandai partikel atau endapan.
5. Ambang kelas sementara: A ≥ 60%, B 35–60%, C < 35%. Ambang ini ditetapkan ulang dari uji titrasi asam lemak bebas pada ≥ 40 sampel (target R² ≥ 0,85); taksiran asam lemak bebas diaktifkan setelah kalibrasi.

Pendekatan warna untuk menilai minyak goreng bekas mengikuti Udomkun, Innawong, & Sopa (2019), *Journal of Food Quality*. Empat contoh pada halaman Mutu adalah gambar buatan untuk mencoba alat, bukan foto sampel.

## Siap dipakai di lapangan

- **Aplikasi ponsel (PWA):** dapat dipasang ke layar utama dan tetap terbuka saat sinyal lemah (`manifest.webmanifest`, `sw.js`).
- **Kartu acuan siap cetak:** [`kartu-acuan.pdf`](kartu-acuan.pdf), A4 berisi 4 kartu dengan skala abu-abu, pola garis, dan penggaris 5 cm.
- **Skema data terbuka:** [`skema-paspor.json`](skema-paspor.json) (JSON Schema) dan contoh [`paspor/JT-MND-261024-01.json`](paspor/JT-MND-261024-01.json), agar paspor dapat dipetakan ke pernyataan titik asal ISCC dan laporan BGN.

## Peta jalan

| Waktu | Kegiatan | Luaran |
|---|---|---|
| Nov–Des 2026 | Arsip foto berlabel, ≥ 40 sampel uji asam lemak bebas | Dataset berlabel |
| Nov 2026–Jan 2027 | Model AI: timbangan, wadah, mutu, kejanggalan | Model v1 |
| Nov 2026–Jan 2027 | Klinik pemilik masalah, hackathon UNS, aplikasi, paspor QR | Aplikasi v1 |
| Jan–Apr 2027 | Uji coba dan validasi 3 SPPG ≥ 8 minggu (termasuk Ramadan, cadangan April) | TKT 6 |
| Jan–Apr 2027 | Kajian regulasi, syarat ISCC, perjanjian kerja sama | Draf tata kelola |
| Jan–Mei 2027 | Uji harga, model bisnis, penjajakan pembeli energi; replikasi Solo Raya bersama DLH Kota Surakarta dan Disperinaker Sukoharjo | Mitra jalur energi |

## Status

**TKT 3 (bukti konsep).** Pembacaan berat telah diuji pada 76 foto timbangan nyata SPPG Murnisari Mande (sisa makanan dan jelantah, Juli–Oktober 2026); neraca massa dihitung dari data pembelian minyak. Hasil baca AI timbangan ditampilkan dari uji tersebut, belum dari model yang berjalan langsung. Uji mutu (kejernihan dan warna) sudah berjalan langsung di peramban; ambang kelasnya dan rentang wajar neraca masih sementara sampai kalibrasi dengan titrasi selesai. Target: **TKT 6**, sistem utuh teruji di tiga SPPG selama minimal 8 minggu.

## Data

Angka berat, wadah, waktu, dan harga berasal dari SPPG Murnisari Mande, Kabupaten Cianjur, dapur percontohan tim. Nama pembeli tidak ditampilkan; foto hanya menampilkan layar timbangan dan wadah.

## Tim

- Dr. H. Cecep Wiharma, S.H., M.H. — ketua dan dosen pembimbing; regulasi dan tata kelola
- Muhammad Rafi Ramadhan, S.Tr.Stat. — koordinator teknis; model AI, aplikasi, dasbor
- Anisya Putri Wirahma, S.Tr.Stat. — data dan evaluasi
- Baharuddin Jusuf Wirahma, S.H., M.H. — validasi pengguna; Kepala SPPG Murnisari Mande
- Nabila Salsa Wirahma — bisnis dan hilirisasi
- Nadiyah Salma Wirahma — regulasi dan data

Pustaka QR: [qrcode-generator](https://github.com/kazuhikoarase/qrcode-generator) oleh Kazuhiko Arase (lisensi MIT).
