// Service worker: aplikasi tetap terbuka saat sinyal di dapur lemah.
const CACHE = 'jt-v3';
const CORE = ['./', 'index.html', 'qrcode.js', 't1.jpg', 't2.jpg', 't3.jpg', 't4.jpg', 'nasi.jpg',
  'paspor/JT-MND-261024-01.json', 'skema-paspor.json', 'manifest.webmanifest', 'ikon-192.png', 'ikon-512.png'];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(CACHE).then((c) => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  // jaringan dulu untuk halaman (agar pembaruan cepat terlihat), cache bila offline
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then((r) => { const cp = r.clone(); caches.open(CACHE).then((c) => c.put('index.html', cp)); return r; }).catch(() => caches.match('index.html')));
    return;
  }
  e.respondWith(caches.match(req).then((hit) => hit || fetch(req).then((r) => {
    if (r.ok && new URL(req.url).origin === location.origin) { const cp = r.clone(); caches.open(CACHE).then((c) => c.put(req, cp)); }
    return r;
  }).catch(() => hit)));
});
