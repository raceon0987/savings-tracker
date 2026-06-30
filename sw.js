const CACHE_NAME = "savings-app-v1";
const urlsToCache = [
  "/savings-tracker/",
  "/savings-tracker/index.html",
  "/savings-tracker/manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});