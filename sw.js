'use strict';

const CACHE_NAME = 'pr-v3';

const CORE_ASSETS = [
  '/',
  '/index.html',
  '/css/core.css',
  '/css/prompt.css',
  '/js/locales.js',
  '/js/prompt.js',
  '/site.webmanifest',
  '/clumsy.svg',
  '/favicon-32x32.png',
  '/favicon-16x16.png',
  '/apple-touch-icon.png',
  '/og-image.png',
  // Navigation pages
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
  '/blog',
  '/blog-compare-ai',
];

// Install: Cache core assets
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(CORE_ASSETS))
  );
  self.skipWaiting();
});

// Activate: Clean up old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(key => {
        if (key !== CACHE_NAME) return caches.delete(key);
      })
    ))
  );
  self.clients.claim();
});

// Fetch: Stale-While-Revalidate strategy
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;

  const url = new URL(e.request.url);

  // For Google Fonts or other CDNs, use Cache-First
  if (url.origin.includes('fonts.googleapis.com') || url.origin.includes('fonts.gstatic.com')) {
    e.respondWith(
      caches.match(e.request).then(cached => {
        return cached || fetch(e.request).then(res => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
          return res;
        });
      })
    );
    return;
  }

  // Default: Stale-While-Revalidate
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(cached => {
      const networked = fetch(e.request)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
          return res;
        })
        .catch(() => cached); // Fallback to cached if network fails completely

      return cached || networked;
    })
  );
});
