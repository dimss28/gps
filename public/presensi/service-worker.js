// Minimal service worker for offline support and registration
self.addEventListener('install', function(event) {
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  // You can add custom caching logic here if needed
  // For now, just pass through all requests
});
