'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6047d9a27fc14cd412b77e961a5687ac",
"assets/AssetManifest.bin.json": "514a109ed7fa6e4f7eebaa55d3de197c",
"assets/AssetManifest.json": "4d81b12475744dc8678de6880b474a09",
"assets/assets/bendera.png": "b7ed67dc0f16088313617e9cfdae37df",
"assets/assets/bg3.jpg": "5a61cda5410af26768341462f8ed31af",
"assets/assets/calender.png": "085e3c81270d9378aa1ddae6b178d016",
"assets/assets/cs.png": "6770f202ed779d6c6a5c57ba563d0c3b",
"assets/assets/data_kosong.png": "b8dacb295c7d2acf32042af5de214dfd",
"assets/assets/david.png": "a48f65e3e235ce10f3e0ad97291ae440",
"assets/assets/dlhk.png": "c727b3f7502478cca365098ae300f255",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/gojo.jpg": "9fa8244bc9146aa73cc5a793f82ae47f",
"assets/assets/gojo2.jpg": "cd7d554472860681c590895cbb5facbe",
"assets/assets/gojo3.jpg": "65ca501c0915ae24e0bbb7739e97813b",
"assets/assets/gojo4.jpg": "b1aae3d98fbb1f3983f3c0149f0689e8",
"assets/assets/gojo5.jpg": "05a51b7cdf132dd89f6db7b404cae8a1",
"assets/assets/gojo6.jpg": "8b7d2fe719b0ee3beae43ed1d5d376f2",
"assets/assets/isa.png": "f38780632730126f34584f2dc61f5f2b",
"assets/assets/kosong.png": "e594bfdb8eed4475c6aff9d62d2f90ee",
"assets/assets/list.png": "07a312eff8e0e93631bb151ae39e03a1",
"assets/assets/logo.png": "b9c69e088a86cb58049206fbda9a315e",
"assets/assets/lufy.jpg": "f504a96e00d6d32cc5a290af39884459",
"assets/assets/man.png": "3cfc1c57504c11daadbb603a370b07f5",
"assets/assets/man2.png": "1a75cdc36da45329a7de1336373321b5",
"assets/assets/man3.png": "c2367126d5582f6db7e249da15f7555a",
"assets/assets/man4.png": "2b0836ad6cf748d5522d4f91efa61bbf",
"assets/assets/man5.png": "4d16aef0e8bf972c2937916db64cc663",
"assets/assets/man6.png": "f6b0934650cd5d3865170ff92a4f1b10",
"assets/assets/man7.png": "ccf9e733f7415303de3f0e5ce1bf8801",
"assets/assets/natsu.jpg": "a4c0cdc3f60ac0540698c26fece2497d",
"assets/assets/nec.png": "f2313723ed50ccbc140e89e901e31c73",
"assets/assets/post1.jpg": "cc2971dce0e2cfc37b61810e5e4b72fa",
"assets/assets/post2.jpg": "352eca3e20e449c8af00f245f0c71cfa",
"assets/assets/post3.jpg": "b02e4fd6f55b8c40dfbb7c783579125b",
"assets/assets/post4.jpg": "dac65c37b352d70f14c3cc7c6092a94c",
"assets/assets/post5.jpg": "eb3e8a23a57f817fc815b8f537c6ba90",
"assets/assets/rapat.jpg": "774c951ec6a5d945b8ac47979b8777a1",
"assets/assets/rapat2.jpg": "572d1d52edd2f737a02e3fa19b026f59",
"assets/assets/rapat3.jpg": "194077dfb63a12bdb6ec9caf1a2885ee",
"assets/assets/rapat4.jpg": "3993a2046c7c7f4618adbf63b561b99d",
"assets/assets/rapat5.png": "f86e60a3846822980bcd87a3bd8766f4",
"assets/assets/rapat6.png": "080b89c3f6fb8221144f2f65d530d2eb",
"assets/assets/rapat7.jpg": "36acba4e75919a8d3abd77ef7e1df9c3",
"assets/assets/ruly.png": "a9bdc7c36dd0fbf2fa5e006a993c2cbf",
"assets/assets/soyo.jpg": "063bd3a74e479fad8c51c387f4c04808",
"assets/assets/tanjiro.jpg": "00dfe2b0263f4f99a6e73fa8090c6776",
"assets/assets/time.png": "99f9a0f85f27c30b7d1e7e8edca460a3",
"assets/assets/woman.png": "b737f9e056ebd2c82a199f6aa9c55e06",
"assets/FontManifest.json": "238adbe1e9478eb4ddaaa6a7f2ec445b",
"assets/fonts/MaterialIcons-Regular.otf": "987300a2c28a60d3c816389492da59b6",
"assets/NOTICES": "8221ebd0994871528d81162f85262f0e",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "86137676312d439f0836520802df6313",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
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
"flutter_bootstrap.js": "a3f40418d3b6f75a6943db3679f83f3f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6a7fa04627873753edfe0b9fcd30e64e",
"/": "6a7fa04627873753edfe0b9fcd30e64e",
"main.dart.js": "8f25fefee20d7d2d75f7e1fa00bfca14",
"manifest.json": "cc46981f73a1117282b46aabf50fba8d",
"version.json": "58e04433a8cbccf26ae11e4798f26d40"};
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
