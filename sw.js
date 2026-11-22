// Cambia VERSION en cada actualizacion para renovar el cache.
const VERSION = "v11";
const CACHE = "desglose-" + VERSION;
const FILES = ["./", "./index.html", "./gabinetes.html", "./jspdf.umd.min.js", "./manifest.webmanifest", "./icons/icon-192.png", "./icons/icon-512.png", "./icons/apple-touch-icon.png", "./icons/favicon-64.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
// Red primero (siempre la ultima version); sin conexion usa el cache.
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(fetch(e.request,{cache:"no-store"}).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return r; }).catch(() => caches.match(e.request)));
});
