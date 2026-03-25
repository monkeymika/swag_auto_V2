/* ================================================================
   SWAG AUTO — SERVICE WORKER
   Caching strategy: Cache-first for assets, Network-first for pages
   ================================================================ */

const CACHE = 'swagauto-v4';
const ASSETS = [
  '/',
  '/index.html',
  '/assets/css/main.css',
  '/assets/js/app.js',
  '/protection-solaire-vitre-teinte/',
  '/covering-total-ou-partiel/',
  '/protection-ceramique/',
  '/protection-ceramique/',
  '/lustrage-et-renovation-de-carrosserie/',
  '/peinture-etrier-de-frein/',
  '/active-sound-system/',
  '/galerie-2/',
  '/a-propos/',
  '/contact/',
  '/mentions-legales/',
  '/politique-de-confidentialite/',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

/* Only cache full successful responses */
function safePut(cache, request, response) {
  // Skip partial responses (206) and non-ok responses
  if (!response || response.status !== 200) return;
  cache.put(request, response);
}

self.addEventListener('fetch', e => {
  const { request } = e;
  const url = new URL(request.url);

  // Skip non-GET, non-http(s) schemes (chrome-extension, data, etc.)
  if (request.method !== 'GET') return;
  if (!url.protocol.startsWith('http')) return;

  // Network-first for CSS/JS (always serve latest code)
  if (url.pathname.match(/\.(css|js)$/)) {
    e.respondWith(
      fetch(request)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE).then(c => safePut(c, request, clone));
          return res;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  // Cache-first for images and fonts — skip video (range requests cause 206)
  if (url.pathname.match(/\.(webp|jpg|jpeg|png|svg|woff2)$/)) {
    e.respondWith(
      caches.match(request).then(cached => cached || fetch(request).then(res => {
        const clone = res.clone();
        caches.open(CACHE).then(c => safePut(c, request, clone));
        return res;
      }))
    );
    return;
  }

  // Network-first for HTML pages
  if (request.headers.get('accept')?.includes('text/html')) {
    e.respondWith(
      fetch(request)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE).then(c => safePut(c, request, clone));
          return res;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  // Default: network with cache fallback
  e.respondWith(
    fetch(request).catch(() => caches.match(request))
  );
});
