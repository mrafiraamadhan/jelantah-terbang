# JELANTAH TERBANG

**Paspor digital berbasis AI bagi jelantah dapur MBG menuju bahan baku bioavtur bersertifikat**

Tim Wirahmadhan · UNS Innovation Hackathon 2026 · Track Energi, Subtema B: Pengelolaan Sampah dan Ekonomi Sirkular untuk Energi dan Produk Bernilai

**Coba purwarupa:** https://mrafiraamadhan.github.io/jelantah-terbang/

## Masalah

Dapur Makan Bergizi Gratis (SPPG) menghasilkan jelantah dalam jumlah besar. Beratnya dicatat manual, mutunya tidak diukur, dan tujuan akhirnya tidak tercatat. Akibatnya, jelantah dapur tidak dapat dihitung sebagai bahan baku bioavtur bersertifikat (ISCC), dan harganya ditentukan pengepul.

## Solusi

Petugas memotret layar timbangan seperti biasa. Model AI:

1. membaca berat pada layar timbangan;
2. mengenali wadah terdaftar untuk mengurangkan tara secara otomatis;
3. menaksir mutu (kadar asam lemak bebas) dari foto tetesan minyak pada kartu acuan, lalu memilah jalur bioavtur, biodiesel, atau nonenergi;
4. memeriksa kewajaran jumlah dengan neraca massa per dapur.

Setiap kiriman memperoleh **paspor ber-QR** yang memuat berat, mutu, asal, dan dokumen sumber siap audit.

## Isi purwarupa

| Halaman | Isi |
|---|---|
| 1 · Catat | Alur aplikasi petugas: 4 foto timbangan nyata, 24 Oktober 2026 (16 galon) |
| 2 · Mutu | **Berjalan langsung di peramban:** foto jelantah di atas kertas putih → kejernihan (cahaya yang menembus minyak), warna CIELAB (L\*, b\*, sudut warna), dan indikator partikel → kelas A/B/C dan jalur bioavtur, biodiesel, atau nonenergi |
| 3 · Paspor | Paspor kiriman ber-QR dan jejak dapur → pengepul → tujuan akhir |
| 4 · Dasbor | Neraca minyak, kiriman bulanan, temuan audit foto |
| 5 · Verifikasi | Pemeriksaan nomor paspor dan sidik digital SHA-256 foto sumber, dihitung langsung di peramban |

### Cara kerja uji mutu

1. Petugas menandai dua titik pada foto: minyak dan kertas putih di luar minyak.
2. Warna rata-rata di sekitar tiap titik dihitung dalam ruang warna linear, lalu warna minyak dinormalkan terhadap kertas putih agar tidak bergantung pada lampu dan kamera.
3. **Kejernihan** = luminans minyak dibanding luminans kertas (cahaya yang menembus lapisan minyak). Warna diubah ke CIELAB.
4. Koefisien variasi luminans di area minyak menandai partikel atau endapan.
5. Ambang kelas sementara: A ≥ 60%, B 35–60%, C < 35%. Ambang ini ditetapkan ulang dari uji titrasi asam lemak bebas pada ≥ 40 sampel (target R² ≥ 0,85); taksiran asam lemak bebas diaktifkan setelah kalibrasi.

Pendekatan warna untuk menilai minyak goreng bekas mengikuti Udomkun, Innawong, & Sopa (2019), *Journal of Food Quality*. Empat contoh pada halaman Mutu adalah gambar buatan untuk mencoba alat, bukan foto sampel.

## Status

**TKT 3 (bukti konsep).** Pembacaan berat dan neraca massa telah diuji pada 76 foto timbangan nyata SPPG Murnisari Mande (Juli–Oktober 2026). Hasil baca AI timbangan ditampilkan dari uji tersebut, belum dari model yang berjalan langsung. Uji mutu (kejernihan dan warna) sudah berjalan langsung di peramban; ambang kelasnya dan rentang wajar neraca masih sementara sampai kalibrasi dengan titrasi selesai. Target: **TKT 6**, sistem utuh teruji di tiga SPPG selama minimal 8 minggu.

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
