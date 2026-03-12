const CACHE_NAME = 'echo-v1';
const ASSETS = [
  './',
  './index.html',
  './assets/css/style.css',
  './assets/js/main.js',
  './assets/js/tailwind-config.js',
  './assets/images/logo.svg'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
