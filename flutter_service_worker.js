'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f148d264bda053c69492fdf9900db0ff",
"assets/AssetManifest.bin.json": "e08bd60471385504f9017b3ecd262fad",
"assets/AssetManifest.json": "dd30c1896e4898fba8573bfae2758da5",
"assets/assets/cv/CV_Raul_lama_08-2025.pdf": "dc3e5c785db8e01da9e736199bb8c522",
"assets/assets/cv/CV_Raul_lama_18-08-2025.pdf": "63af93bb2fc7f1f183f0e48c8346544c",
"assets/assets/flags/ca.webp": "5f1d333cb1585fd95fafb3f7204454a3",
"assets/assets/flags/en.jpeg": "4ab1f09200c942a3b492e0f36269bde3",
"assets/assets/flags/es.png": "eadb97165768d1de1f1408a2d10bc5ae",
"assets/assets/fonts/OFL.txt": "17293189e4ca3f79c0bcca524d41ba52",
"assets/assets/fonts/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/Poppins-BlackItalic.ttf": "e9c5c588e39d0765d30bcd6594734102",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-BoldItalic.ttf": "19406f767addf00d2ea82cdc9ab104ce",
"assets/assets/fonts/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/Poppins-ExtraBoldItalic.ttf": "8afe4dc13b83b66fec0ea671419954cc",
"assets/assets/fonts/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/assets/fonts/Poppins-ExtraLightItalic.ttf": "a9bed017984a258097841902b696a7a6",
"assets/assets/fonts/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-LightItalic.ttf": "0613c488cf7911af70db821bdd05dfc4",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-MediumItalic.ttf": "cf5ba39d9ac24652e25df8c291121506",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/Poppins-SemiBoldItalic.ttf": "9841f3d906521f7479a5ba70612aa8c8",
"assets/assets/fonts/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/assets/fonts/Poppins-ThinItalic.ttf": "01555d25092b213d2ea3a982123722c9",
"assets/assets/imagen_raul/foto_perfil.jpeg": "8fbdeced4b5077ba186293428c2cf56b",
"assets/assets/lang/ca.json": "3a4f509e849849555e149c0cf7109dc5",
"assets/assets/lang/en.json": "5a5d5b9aa089794f5aa322dd5a26ea35",
"assets/assets/lang/es.json": "4b31df97061065721ac1fd144eabc75e",
"assets/assets/projects/al.png": "7c1ae3ccfabfd7a6de1de7feccda72f1",
"assets/assets/projects/Buscador-de-hoteles.png": "66e64c1f3472a111280716b1c4ec71d7",
"assets/assets/projects/buscador_de_hoteles_inincial.png": "1e741df77fbd0dd456f3093a5472a8fc",
"assets/assets/projects/rannn.png": "aa481fe812812c145a16197d30677b10",
"assets/assets/projects/Rulox_arts_NFT.png": "d67abad563260a97c872e8650ff51854",
"assets/assets/projects/tm.png": "d508ede8a6cfe86240a139d74c0c354c",
"assets/assets/projects/tmDetall.png": "b2b21d77bae21a4e62a1c3a0833cb0a9",
"assets/assets/proyectos.json": "52e3143c7c09a8c4e1d63042cf6d2575",
"assets/assets/tecnologias/canva.png": "14fe3f310e9eb71c0560247739284df7",
"assets/assets/tecnologias/chatgpt.webp": "6068cd91e8cef17aef77a3392d95757d",
"assets/assets/tecnologias/dart.png": "05c3eaf74f9d8e2462e1f9791df10efa",
"assets/assets/tecnologias/firebase.png": "9ed79d8d77f3aab27b935896f7258479",
"assets/assets/tecnologias/flutter.png": "218c4c5df83b068f8cb476f89832d5dd",
"assets/assets/tecnologias/git.png": "150140b2bd5a9ee94633a87850cad7db",
"assets/assets/tecnologias/java.png": "de6b97f9cdec6635264cc67bcee4a8f9",
"assets/assets/tecnologias/Logo_PostgreSQL.png": "a05b6e7e349788ae1476397b34512caf",
"assets/assets/tecnologias/mongodb2.png": "c2e7e29a19f017b7d050cf27899391cd",
"assets/assets/tecnologias/mysql2.png": "05d4c0948a0b433160a6c84980e45406",
"assets/assets/tecnologias/NestJS.svg.png": "f8a7c0c5111a8c67c019a1282bccde7e",
"assets/assets/tecnologias/node-js.png": "6570d8efa8a1d8f582b6c9522cb08f5c",
"assets/assets/tecnologias/postman.webp": "7cc4594e27c600c158f5c605ed88a93f",
"assets/assets/tecnologias/React.png": "4ebc37736efa4390b9fec485c5c7a878",
"assets/assets/tecnologias/spring-logo.png": "854d81ed991e7bc4406af738b629d171",
"assets/assets/tecnologias/sqlserver.png": "e0acb058e32a93b51bb4560e2d0d2297",
"assets/assets/tecnologias/sww.png": "9ea44c1e82ec1d42b40ac11466ce1483",
"assets/assets/tecnologias/tailwind.png": "8eb8dfcf83d64115b3beb67f8a48244b",
"assets/assets/tecnologias/thunderclient.png": "d741816ec702df444623c2c2972efe9b",
"assets/assets/tecnologias/ts.png": "dc121ccb27e2d4b3d3a1d7a8a97a6929",
"assets/assets/tecnologias/typescript.png": "f5f04b74f18841884f1f7bb66a3e9d2f",
"assets/FontManifest.json": "664f7102db9efa3a413d763e1ce66f9c",
"assets/fonts/MaterialIcons-Regular.otf": "5c1a42d1f5fe8ef82711e62398b11b3b",
"assets/NOTICES": "ee9b17a5a763895b320b6e2aac72f218",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "41a081131f182f1575039d66985c27d3",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "64c54e59840d062a43bc884319c2692a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "6f8da286a5a0f7f5e931f9fde1020701",
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
"favicon.ico": "ee1893fbeaa1a7df5997cf3012af2751",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "b8fea142bb65eda1f8d1f02c0fa5b6e0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7d34fe4796784d5a2badf54730bf4d36",
"/": "7d34fe4796784d5a2badf54730bf4d36",
"main.dart.js": "ac344f1fc486d23384217e8ef69ee10d",
"manifest.json": "7d835ef508615d9bb2382f8338664cab",
"version.json": "96f91ee3f4b8d56fbd70b76cbfe3c399"};
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
