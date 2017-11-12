var filesToCache = [
    '.',
    './assets/scripts/bundle.js',
    'https://code.jquery.com/jquery-1.12.4.js',
    './assets/scripts/jquery-ui.min.css',
    './assets/scripts/jquery-ui.min.js',
    './assets/scripts/jquery-ui.theme.min.js',
    './assets/sprites/asset05.png',
    'index.html'

];

var staticCacheName = 'pages-cache-v1';

self.addEventListener('install', function(event) {
    console.log('Attempting to install service worker and cache static assets');
    event.waitUntil(
        caches.open(staticCacheName)
            .then(function(cache) {
                return cache.addAll(filesToCache);
            })
    );
});