'use strict';

const CACHE_NAME = 'pr-v5';

const CORE_ASSETS = [
  '/',
  '/index.html',
  '/css/core.css',
  '/css/prompt.css',
  '/js/locales.js',
  '/js/prompt.js',
  '/site.webmanifest',
  '/clumsy.svg',
  '/favicon.ico',
  '/favicon-32x32.png',
  '/favicon-16x16.png',
  '/apple-touch-icon.png',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
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
  '/blog-new-look',
  '/blog-budget-prompt-routing',
  '/blog-reduce-ai-costs',
  '/blog-compare-ai',
  '/blog-dev-prompts',
  '/blog-writing-prompts',
  '/blog-marketing-prompts',
  '/blog-job-prompts',
  '/blog-startup-prompts',
  '/blog-data-prompts',
  '/blog-design-prompts',
  '/blog-student-prompts',
  '/blog-productivity-prompts',
  '/blog-legal-prompts',
  '/blog-sales-prompts',
  '/blog-prompt-router',
];

// Install: Cache core assets resiliently
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return Promise.all(
        CORE_ASSETS.map(asset => {
          return cache.add(asset).catch(err => {
            console.warn(`[SW] Failed to precache ${asset}:`, err);
          });
        })
      );
    })
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
        if (cached) return cached;
        return fetch(e.request).then(res => {
          if (res && res.status === 200) {
            const clone = res.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
          }
          return res;
        });
      }).catch(() => new Response('', { status: 408, statusText: 'Request Timeout' }))
    );
    return;
  }

  // Default: Stale-While-Revalidate with status validation and offline fallback
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(cached => {
      const networked = fetch(e.request)
        .then(res => {
          if (res && res.status === 200 && (res.type === 'basic' || res.type === 'cors')) {
            const clone = res.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
          }
          return res;
        })
        .catch(err => {
          if (cached) return cached;
          throw err;
        });

      if (cached) {
        // Trigger background revalidation without uncaught promise rejection
        networked.catch(() => {});
        return cached;
      }

      return networked.catch(async () => {
        if (e.request.mode === 'navigate') {
          const fallback = await caches.match('/') || await caches.match('/index.html');
          if (fallback) return fallback;
        }
        return new Response('Network offline', { status: 503, statusText: 'Service Unavailable' });
      });
    }).catch(async () => {
      if (e.request.mode === 'navigate') {
        const fallback = await caches.match('/') || await caches.match('/index.html');
        if (fallback) return fallback;
      }
      return new Response('Network offline', { status: 503, statusText: 'Service Unavailable' });
    })
  );
});
