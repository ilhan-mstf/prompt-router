const CACHE_NAME = 'pr-v2';

const CORE_ASSETS = [
  '/',
  '/css/core.css',
  '/css/prompt.css',
  '/js/prompt.js',
  '/dev',
  '/writing',
  '/marketing',
  '/job',
  '/startup',
  '/data',
  '/design',
  '/student',
  '/productivity',
  '/legal',
  '/sales',
  '/site.webmanifest',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(CORE_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;

  e.respondWith(
    fetch(e.request)
      .then(res => {
        const clone = res.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
