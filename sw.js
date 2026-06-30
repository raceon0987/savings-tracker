const CACHE_NAME = "savings-app-v1";

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      cache.addAll([
        "/savings-tracker/",
        "/savings-tracker/index.html",
        "/savings-tracker/manifest.json"
      ])
    )
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request).catch(() => {
        return caches.match("/savings-tracker/index.html");
      });
    })
  );
});