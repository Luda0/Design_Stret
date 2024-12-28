'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "752d28bd1e8ae5c35b95f6b116b856c0",
"assets/AssetManifest.bin.json": "0a71846af7eb31ac651dd08f04f4e2d9",
"assets/AssetManifest.json": "6d0d90fa92bbba2d06d91fd6f3f53fa9",
"assets/assets/images/1.png": "d05c0f1636472fc03cf69fd1efda92be",
"assets/assets/images/10.png": "3b59b810604f70d2e8a18a210e57dabb",
"assets/assets/images/11.png": "f4dfa652b19e47383da8782e335644d1",
"assets/assets/images/12.png": "5831bcbf0fdd71c059607c74e106758c",
"assets/assets/images/13.png": "17335fd72a035d891e7fa8a809f1e030",
"assets/assets/images/14.png": "70ad9577d786a3858881fb1c3fed6d9e",
"assets/assets/images/2.png": "8c284ed436e2566955ad1b5278371ab2",
"assets/assets/images/3.png": "63c278463fd97daec271186ee095f135",
"assets/assets/images/4.png": "d24573fabd0881a314c797e1c8585ca7",
"assets/assets/images/5.png": "e324eb2cca6daade0e6abfe1b7795e88",
"assets/assets/images/6.png": "f0fd2560f07fca5f750733467092444a",
"assets/assets/images/7.png": "aed17ee0a997a011071b5fb5ea0e77c7",
"assets/assets/images/8.png": "31e560b91d34ab1eed053b8f84074ae8",
"assets/assets/images/9.png": "ccb3ce68d25bcdb9947a9b4a01f0529f",
"assets/assets/images/a1.jpg": "7aafc589a6ae604e3080b0caf191a50e",
"assets/assets/images/a2.jpg": "c834f7ee82d8a4f282ce2cdb68da550c",
"assets/assets/images/d1.mp4": "5974a7b02dad916a0f5986059f465961",
"assets/assets/images/ezgif.com-gif-maker-1.gif": "8d2d630cb10ef3e2c5d1f477f49ab0fa",
"assets/assets/images/gif.gif": "f0a52fb3d1e7cbaebf4ebeee748eb348",
"assets/assets/images/gif5.gif": "334971818f8c6ceaf8235f18e8de1086",
"assets/assets/images/gig3.gif": "e3034619cb417cb5560bae3c35a8558b",
"assets/assets/images/googel.png": "69e26ca4709928a2332deb67b3657b25",
"assets/assets/images/intro.mp4": "9a06abe2910c074261c50f3cb9d8ba8b",
"assets/assets/images/s1.jpg": "c7338582b5dfcbaa3e896ddac3e4fe41",
"assets/assets/images/ULV-.gif": "6ae11417b6a2ffbed5ca542577e4ce80",
"assets/assets/images/w1.jpg": "c8d50f1d1511d73a3f69d39dd762b867",
"assets/assets/images/w2.jpg": "3f829b0a68f734db02f764e98587f73a",
"assets/assets/images/w3.jpg": "a0c7f0f137f894e1ae68b85a9bda7ae2",
"assets/assets/images/w4.jpg": "ae2ae206ebd6c10e6c06bd9243ba953a",
"assets/assets/images/w5.jpg": "d2055bfbd52781d5357e5d7ab24fde52",
"assets/assets/images/w6.jpg": "be4b2d4da3af4b392ad367c29963b4e2",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "13890260c596222784f8328e2c1994cb",
"assets/NOTICES": "45f6ebf6dcf54513796560131890929a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4bb3eae0260e3ea23fc2cc66c1025c8a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/rive_animated_icon/assets/icons1.riv": "7f23a53d34a2b43b6dd551465d9f71a6",
"assets/packages/rive_animated_icon/assets/icons2.riv": "054611cd990d48b0415acc0def8b2064",
"assets/packages/rive_animated_icon/assets/icons3.riv": "0427231b1a0b147fef274cff2eff1f43",
"assets/packages/rive_animated_icon/assets/icons4.riv": "e1e065954b82deb7cacefaad8499880c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-messaging-sw.js": "a027cd2dd951e0c240ec0ce893ffdd9a",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "580424edd66d63c50004bf2cbded8ac7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4e51690d0af4eee44ba47f36322284e8",
"/": "4e51690d0af4eee44ba47f36322284e8",
"main.dart.js": "2dce1e32a0f7eff2e606afb34bb9e26b",
"manifest.json": "3f9f46d43b9a25da68f5dd4800d5ed6d",
"version.json": "c2a08cda2a1e690bfed5ce9fc4d9e5b1"};
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
