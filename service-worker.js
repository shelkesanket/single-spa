// service-worker.js

const CACHE_NAME = "my-app-cache";
const urlsToCache = ["/spa-root-config"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// self.addEventListener("install", (event) => {
//   console.log("Service Worker installing.");
//   // Add your custom install logic here
// });

// self.addEventListener("activate", (event) => {
//   console.log("Service Worker activating.");
//   // Add your custom activate logic here
// });

// self.addEventListener("fetch", (event) => {
//   console.log("Service Worker fetching.", event.request.url);
//   // Add your custom fetch logic here
// });
