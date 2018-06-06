importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "9xdp.github.io",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.ac09c397c255323bad90.js",
    "revision": "40dd8f6fe57f3d909a8d539884388bfa"
  },
  {
    "url": "/_nuxt/layouts_default.8f2c34f218396cebc0e0.js",
    "revision": "3f784386e7a1cddd5d259addfc6ce0da"
  },
  {
    "url": "/_nuxt/manifest.b2d328499a87ae38a6e3.js",
    "revision": "4cf4784890f51655bf51b40724d2d07f"
  },
  {
    "url": "/_nuxt/pages_index.3c6e3656f4292c7d2c55.js",
    "revision": "65ac921d7c6cb08578d04f72fe882e26"
  },
  {
    "url": "/_nuxt/vendor.4b505821a1d62eba37f0.js",
    "revision": "610d6ce6cf896ff0f47b3066438bdf72"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

