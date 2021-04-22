/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-63327cc8f10f47689259.js"
  },
  {
    "url": "styles.a7ba0aeb680784f5fd6e.css"
  },
  {
    "url": "styles-136dffcde22e5b1103b3.js"
  },
  {
    "url": "framework-338f0cd752cdf476fc07.js"
  },
  {
    "url": "11100001-6a27cc2c234957255985.js"
  },
  {
    "url": "app-ecadeebb6e22bb7b3c87.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "0f780392c75164eb95031472037fcade"
  },
  {
    "url": "SocialIcon-3599c413fbb3baa6647f.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-959d7e10e315cfbb0346.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "1395e8bd6e874d199bf9de267974e44e"
  },
  {
    "url": "page-data/sq/d/1707798776.json",
    "revision": "72dc50a424b4186b8358739332341b2c"
  },
  {
    "url": "page-data/sq/d/2744294623.json",
    "revision": "99fcc0f0c16210998952dfe3d766dbab"
  },
  {
    "url": "page-data/sq/d/2923265353.json",
    "revision": "a3efd5a2f1f1cf8bbf82a50cb871c668"
  },
  {
    "url": "page-data/sq/d/3839994529.json",
    "revision": "7bd80a77bc3531b7130a388171e3e0e5"
  },
  {
    "url": "page-data/sq/d/4007454649.json",
    "revision": "e2118a3ffc29312345e27bb1768855fd"
  },
  {
    "url": "page-data/sq/d/923754104.json",
    "revision": "01d2931e04685afdf6d7c5d0cb3f39be"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "8ea6d1897c113434d60dfdc4a0e26e2a"
  },
  {
    "url": "polyfill-3732724668a85e8507c4.js"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "5e9da468fe7677023a271df835d4dc20"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|avif|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^/karite-gatsby`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/karite-gatsby/app-ecadeebb6e22bb7b3c87.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/karite-gatsby/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
