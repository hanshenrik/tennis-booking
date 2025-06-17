const CACHE_NAME = "tennis-booking-v1";
const urlsToCache = [
  "/tennis-booking/",
  "/tennis-booking/index.html",
  "/tennis-booking/output.css",
  "/tennis-booking/manifest.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return cached version or fetch from network
      return response || fetch(event.request);
    }),
  );
});
