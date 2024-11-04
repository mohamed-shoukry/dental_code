'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f009a75224508e0d8e01d296ffc5d678",
"assets/AssetManifest.bin.json": "69ec10fff3a07792dc5a25c7e122dfba",
"assets/AssetManifest.json": "2c67a33cdf242b8472323ee013ed9fdd",
"assets/assets/backgrond.jpg": "d6d880d005a5e813384e07c9062ab780",
"assets/assets/backgrounds.png": "0c69190582b47732f474e1282eb49f39",
"assets/assets/chart/lower/ll1.svg": "59544a372e6de1b17b92efe817aa11b1",
"assets/assets/chart/lower/ll2.svg": "4ac332aa74695f72b5eba83267da8a3a",
"assets/assets/chart/lower/ll3.svg": "36ddcc78175a6f7821ca9c1cee0971e0",
"assets/assets/chart/lower/ll4.svg": "c850fad26f420dee1415eeb2ea3c2508",
"assets/assets/chart/lower/ll5.svg": "504c7a20c0d73214e5a9afc3febf52b9",
"assets/assets/chart/lower/ll6.svg": "2a7e7a3b31bb0a751de29582d20ffa5c",
"assets/assets/chart/lower/ll7.svg": "837c0b4907b2a165d81aa4d41888f459",
"assets/assets/chart/lower/ll8.svg": "52503613dea68eaa5a8484d4563d0008",
"assets/assets/chart/lower/lr1.svg": "59544a372e6de1b17b92efe817aa11b1",
"assets/assets/chart/lower/lr2.svg": "4ac332aa74695f72b5eba83267da8a3a",
"assets/assets/chart/lower/lr3.svg": "36ddcc78175a6f7821ca9c1cee0971e0",
"assets/assets/chart/lower/lr4.svg": "c850fad26f420dee1415eeb2ea3c2508",
"assets/assets/chart/lower/lr5.svg": "504c7a20c0d73214e5a9afc3febf52b9",
"assets/assets/chart/lower/lr6.svg": "2a7e7a3b31bb0a751de29582d20ffa5c",
"assets/assets/chart/lower/lr7.svg": "837c0b4907b2a165d81aa4d41888f459",
"assets/assets/chart/lower/lr8.svg": "52503613dea68eaa5a8484d4563d0008",
"assets/assets/chart/upper/ul1.svg": "187cb2c67cdbd81bf4e94d33038512fc",
"assets/assets/chart/upper/ul2.svg": "b2aed152c53e92ea0794cae1b8ffbe21",
"assets/assets/chart/upper/ul3.svg": "2c9d5826336cfc9674f5e88b4d744d3a",
"assets/assets/chart/upper/ul4.svg": "3b83801dc19c5743e0de0a77905552d0",
"assets/assets/chart/upper/ul5.svg": "a4bed78f01bade0e6f2c47e84ed4acde",
"assets/assets/chart/upper/ul6.svg": "c3a4c98716c15168e1a02c1eecbbad71",
"assets/assets/chart/upper/ul7.svg": "4c26cb949a477e5cd69c3f646d5f9d0a",
"assets/assets/chart/upper/ul8.svg": "f1049d78f7ae36f82f53e6693631fc14",
"assets/assets/chart/upper/ur1.svg": "187cb2c67cdbd81bf4e94d33038512fc",
"assets/assets/chart/upper/ur2.svg": "b2aed152c53e92ea0794cae1b8ffbe21",
"assets/assets/chart/upper/ur3.svg": "2c9d5826336cfc9674f5e88b4d744d3a",
"assets/assets/chart/upper/ur4.svg": "3b83801dc19c5743e0de0a77905552d0",
"assets/assets/chart/upper/ur5.svg": "a4bed78f01bade0e6f2c47e84ed4acde",
"assets/assets/chart/upper/ur6.svg": "c3a4c98716c15168e1a02c1eecbbad71",
"assets/assets/chart/upper/ur7.svg": "4c26cb949a477e5cd69c3f646d5f9d0a",
"assets/assets/chart/upper/ur8.svg": "f1049d78f7ae36f82f53e6693631fc14",
"assets/assets/dailyvisits.png": "4d75c46a5d6da4613e96aa69571345e4",
"assets/assets/dentalback.png": "c13821445a892f52c3ade50d19827e8d",
"assets/assets/dollar.png": "bbd13e69a24c0e3b88d720013bd89bd2",
"assets/assets/dollars.png": "cbb633dfcec8b4b944b25fef15c76c98",
"assets/assets/fonts/Roboto-Bold.ttf": "d329cc8b34667f114a95422aaad1b063",
"assets/assets/fonts/Roboto-Regular.ttf": "ac3f799d5bbaf5196fab15ab8de8431c",
"assets/assets/icons.json": "078502918b1ec2cc3b99f6b8d87dde03",
"assets/assets/lodo.png": "2336e1e8f62cfad0efe74a75dc0a56eb",
"assets/assets/logo2.png": "7c41753ecda7209c28e4bb054b8362a9",
"assets/assets/profile.jpg": "41149a5b43dcd785679f09d3b1a4278b",
"assets/assets/secretary.jpg": "fcd29e524860d504251539a4075dc927",
"assets/FontManifest.json": "73eddddc3c3171e950dcef98bc4b0bd6",
"assets/fonts/MaterialIcons-Regular.otf": "b719a24bc52a154410632914363fa488",
"assets/NOTICES": "3d5b67ccdcf26e33d79ce3ce13935606",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "b8e5e5bf2b490d3576a9562f24395532",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "acdd567faa403388649e37ceb9adeb44",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "e02ae819c1756ea8fbcb2166450e56d6",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1ec8945d42b5238c2857285e328eb8d9",
"/": "1ec8945d42b5238c2857285e328eb8d9",
"main.dart.js": "31b803749e6c0333b212bc2f500ba088",
"manifest.json": "99f93f40be4bd909bf454ef2e8cab92d",
"version.json": "0e1784878435fc93b7dda2a14d84ce80"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
