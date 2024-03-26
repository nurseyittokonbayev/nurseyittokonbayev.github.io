'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "9e8c01db57c7722cde020f35ae09ea47",
"/": "9e8c01db57c7722cde020f35ae09ea47",
"main.dart.js": "5afb39314bea3ac5a791736f5a844449",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7153a3b60445056c3f7f317a17a33434",
"assets/AssetManifest.json": "bf3e62f592e898b10c8ffa3f8df2feb5",
"assets/NOTICES": "0be3cf830e84298f37da34cecf9204bd",
"assets/FontManifest.json": "5aa09c2836b73051ba6143236125ce19",
"assets/AssetManifest.bin.json": "462df7a3646750d36e69437a92921355",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "a5247b6707d7fb10f40245fd04cd9dc6",
"assets/fonts/MaterialIcons-Regular.otf": "70445f466f4e7e49d458c3872ba67727",
"assets/assets/images/Emerald.png": "05ddb8545f0326c908f11c1c8f80af70",
"assets/assets/images/me.jpg": "0dd9d28e3fd40f02781a8a862b7d91af",
"assets/assets/images/img_ellipse_2.png": "f57ed08b89fe32268e02d4c0590bea3e",
"assets/assets/images/img_luck.png": "a083a777e212d4458c8f36e002673fbb",
"assets/assets/images/gold%2520(1).png": "47ef738c236c9284d1b69f73278d7ebd",
"assets/assets/images/Worm.png": "c583cea7f7b3e45a1dbe459c18386bd1",
"assets/assets/images/img_unluck.png": "f41c201989681155e685cc41c2a85684",
"assets/assets/images/img_shark.png": "fc3809d8337fb8e95d252dc5ce3c37e4",
"assets/assets/images/img_arrow_2.png": "ffa94ecf64312d23f5ae047d44f73018",
"assets/assets/images/img_worm.png": "1021a8472b0d1b14eac1b7ea7d0b6d55",
"assets/assets/images/seabed.png": "3d57d4836a7068f6d90a256664ffdabb",
"assets/assets/images/img_arrow_1.png": "286394bbc93855fa22e13c103b299790",
"assets/assets/images/img_emerald.png": "692fe61f2e1a3cb728c55a607cd0d152",
"assets/assets/images/Shark.png": "fd3e3f04d329b33e3ba09c25a1642f01",
"assets/assets/images/img_boat.png": "64ba69c7968c9f4fcace878c3176e59f",
"assets/assets/images/diver.png": "61e45662bd2ddd4dc51b6687f6f0bcb3",
"assets/assets/images/img_arrow.png": "21735ee881a18a946848c91396e2b939",
"assets/assets/images/cell.png": "4068782b3aacdc3a0efebdca4f1ba026",
"assets/assets/images/Shark%2520(1).png": "70c2cdada27608f847d6d13295322026",
"assets/assets/images/img_coin.png": "955933ca14b228be7573c66ea2abe508",
"assets/assets/images/Unlucky_coin.png": "366a6680c9fd57461cc96e367de8efa6",
"assets/assets/images/img_arrow_30x30.png": "91f66a32ebc634cb7f54f3f9f8ead800",
"assets/assets/images/back1.png": "aeb1addee26aa5432d1d811b80147553",
"assets/assets/images/img_gold.png": "1fdb7a1654b42a34b50b2b06dfce7f6d",
"assets/assets/images/back4.png": "3657f5614140fd09a86e778cc2bb88bf",
"assets/assets/images/skills.jpeg": "cf27d6ddd4662f86bb5e16dc2eefa25d",
"assets/assets/images/back6.png": "339fba2a1a8bc7beb5edd21a0e30b8fe",
"assets/assets/images/diamond.png": "a73094ee2de8c8eafaa153f92307735c",
"assets/assets/images/exit.png": "4bb92064eebecefdee089bf0bc87a95a",
"assets/assets/images/seabed%2520(1).png": "46f9dbf713039f29974aa6711a501d7e",
"assets/assets/images/img_close.png": "d22720d32534b2d1f95c4c47cb5dd068",
"assets/assets/images/Lucky_coin.png": "fb0eb10fee840450fc68f4e716144cdb",
"assets/assets/images/img_seabed.png": "79f487213e3eb389370b0ac05f27fd46",
"assets/assets/images/Gold.png": "5ad882faf660aba574a2cb42fad31a37",
"assets/assets/icons/email.png": "88492ab88c167bb8ec085edf1430db3e",
"assets/assets/icons/iosbattery.png": "e1b814a36f2daea47262a3b91b44f44f",
"assets/assets/icons/experience.png": "0c3fdfc115b016bdeac69119b7b161ff",
"assets/assets/icons/qrcode.png": "eb014267667a00afaae1a7a147762163",
"assets/assets/icons/instagram.png": "72a4b561233cbeed9b490e76dd57af83",
"assets/assets/icons/flutter.png": "6637b6c64481c76692760d0729b9c10a",
"assets/assets/icons/ioswifi.png": "3d183ac3a62b63c887d4dc7779d71091",
"assets/assets/icons/games.png": "75c439dca51dadb59458c32eb982ed2b",
"assets/assets/icons/fb.png": "ad56565a45e2dc6b77cfff4e48176666",
"assets/assets/icons/github.png": "1b9b9f71269e504156ce9d89a00f2551",
"assets/assets/icons/experience2.png": "6531c54089382d870ef48ae4d141dc6a",
"assets/assets/icons/hireme.png": "c7224addea3783bd7ee90f41d62f35cd",
"assets/assets/icons/iosnotch.png": "0c547711faa5627641dafe1440f72f60",
"assets/assets/icons/resume.png": "306d42cc94a4ebaddbd6e6e2cb33c577",
"assets/assets/icons/uparrow.png": "308f35973d51dde1eaa9b6c0c3bb2f86",
"assets/assets/icons/fontfamily.png": "e9bcc17213a478bc0affc2fbc811077c",
"assets/assets/icons/iosnetwork.png": "d9375e2480ca119713518afa96292ce4",
"assets/assets/icons/education.png": "b5e8a6ef13e85541bf2a17ceee1bdddd",
"assets/assets/icons/about.png": "5aa30cc029a3689c68e01fedf354b809",
"assets/assets/icons/love.png": "56ee6ca8a8f6b612933d7aa4b1810917",
"assets/assets/icons/google.png": "ca2f7db280e9c773e341589a81c15082",
"assets/assets/icons/linkedn.png": "8330cd41825fe864a437d38d921b7b4a",
"assets/assets/icons/skills.png": "131768135537f6d6e5b02081d86c5f4f",
"assets/assets/icons/downarrow.png": "69de8d56a8845fcd5d6a0c65dc2b8c52",
"assets/assets/icons/coding.png": "97643a49f5a141f5c31f46806b09c21d",
"assets/assets/icons/mic.png": "07cfbb4c10de5f8eb17f9d163073471e",
"assets/assets/documents/CV_NURSEIT_TOKONBAEV.pdf": "acb3a074cf6a1a76cbe0610c0b3e03ed",
"assets/assets/fonts/SFProTextSemibold.ttf": "8f079b59ff6659b39b41bc2255c968b8",
"assets/assets/fonts/PoppinsMedium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/PoppinsBold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/SFProTextRegular.ttf": "d704bcd64b0f4fa155e6bd7debacc6c4",
"assets/assets/fonts/PoppinsSemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
