const staticCacheName = 's-app-v1';
const dynamicCacheName = 'd-app-v1';

const assetUrls = [
  'index.html',
  'bundle.js',
  'bundle.css',
  // 'icons',
  'bg-min.jpg',
  'favicon.ico',
  'offline.html',
];

self.addEventListener('install', async (e) => {
  const cache = await caches.open(staticCacheName);
  await cache.addAll(assetUrls);
});


self.addEventListener('activate', async (e) => {
  const cacheNames = await caches.keys();
  await Promise.all(
    cacheNames
      .filter((name) => name !== staticCacheName)
      .filter((name) => name !== dynamicCacheName)
      .map((name) => caches.delete(name))
  );
});

self.addEventListener('fetch', (e) => {
  const {request} = e;
  const url = new URL(request.url);
  if (url.origin === location.origin) {
    e.respondWith(cacheFirst(request));
  } else {
    e.respondWith(networkFirst(request));
  }
});

async function cacheFirst(request) {
  const cached = await caches.match(request);
  return cached ?? await fetch(request);
}

async function networkFirst(request) {
  const cache = await caches.open(dynamicCacheName);
  try {
    const response = await fetch(request);
    await cache.put(request, response.clone());
    return response;
  } catch (error) {
    const cached = cache.match(request);
    return cached ?? await caches.match('/offline.html');
  }
}
