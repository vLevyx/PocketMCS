// ========================================
// POCKETMCS SERVICE WORKER
// Precaches the whole app so PMCS lookups work with no signal.
// Bump VERSION whenever any precached file changes.
// ========================================

const VERSION = 'pocketmcs-v4.0.1';
const FONT_CACHE = 'pocketmcs-fonts';

const PRECACHE = [
    './',
    'index.html',
    'humvee.html',
    'lmtv.html',
    'gen.html',
    'trailer.html',
    'css/tokens.css',
    'css/base.css',
    'css/components.css',
    'manifest.webmanifest',
    'js/search.js',
    'js/shell.js',
    'js/app.js',
    'js/home.js',
    'data/hmmwv.js',
    'data/lmtv.js',
    'data/gen.js',
    'data/trailer.js',
    'images/clock.png',
    'images/gen.png',
    'images/humvee.png',
    'images/interval.png',
    'images/lmtv.png',
    'images/military-hat.png',
    'images/trailer.png',
    'icons/icon-192.png',
    'icons/icon-512.png',
    'icons/icon-maskable-512.png',
    'icons/apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(caches.open(VERSION).then(cache => cache.addAll(PRECACHE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then(keys => Promise.all(keys.filter(key => key !== VERSION && key !== FONT_CACHE).map(key => caches.delete(key))))
            .then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    const request = event.request;
    if (request.method !== 'GET') return;
    const url = new URL(request.url);

    // Google Fonts: cache-first (they never change for a given URL).
    if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
        event.respondWith(caches.open(FONT_CACHE).then(cache =>
            cache.match(request).then(hit => hit || fetch(request).then(response => {
                cache.put(request, response.clone());
                return response;
            }))));
        return;
    }

    if (url.origin !== self.location.origin) return;

    // Pages: network-first so updates show immediately online; cached copy offline.
    // Query strings (?q=…) are ignored when matching the cache.
    if (request.mode === 'navigate') {
        event.respondWith(
            fetch(request).then(response => {
                const copy = response.clone();
                caches.open(VERSION).then(cache => cache.put(url.pathname.endsWith('/') ? './' : url.pathname, copy));
                return response;
            }).catch(() => caches.match(request, { ignoreSearch: true })
                .then(hit => hit || caches.match('index.html')))
        );
        return;
    }

    // Everything else: stale-while-revalidate.
    event.respondWith(
        caches.open(VERSION).then(cache => cache.match(request, { ignoreSearch: true }).then(hit => {
            const network = fetch(request).then(response => {
                if (response.ok) cache.put(request, response.clone());
                return response;
            }).catch(() => hit);
            return hit || network;
        }))
    );
});
