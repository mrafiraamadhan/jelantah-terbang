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
| Beranda | Masalah, solusi, bukti lapangan 6 SPPG (harga Rp7.500–11.000/kg), dan cara kerja dalam satu layar |
| 1 · Catat | **Kamera berstempel otomatis:** foto timbangan → stempel waktu, tanggal, nama dapur, GPS, dan kode foto (SHA-256) → tara dan berat bersih dihitung → paspor ber-QR yang isinya tersimpan di QR (bisa diperiksa tanpa server) dan dapat diunduh sebagai JSON. Disertai contoh data nyata 24 Oktober 2026 (4 foto, 16 galon) |
| 2 · Mutu | **Berjalan langsung di peramban:** foto jelantah di atas kertas putih → kejernihan (cahaya yang menembus minyak), warna CIELAB (L\*, b\*, sudut warna), dan indikator partikel → kelas A/B/C dan jalur bioavtur, biodiesel, atau nonenergi |
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
| Nov–Des 2026 | Arsip foto berlabel, ≥ 40 sampel uji asam lemak bebas, model AI v1 | Dataset berlabel, model v1 |
| Des 2026–Feb 2027 | Hackathon UNS; aplikasi ponsel, dasbor, paspor QR | Aplikasi v1 |
| Feb–Apr 2027 | Uji coba 3 SPPG ≥ 8 minggu (termasuk Ramadan) | TKT 6 |
| Mar–Mei 2027 | Kajian regulasi dan syarat ISCC, perjanjian kerja sama, uji harga | Draf tata kelola, mitra jalur energi |

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
