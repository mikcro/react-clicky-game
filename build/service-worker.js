"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","d68a6752add1b42a721812cd516ec6e8"],["/static/css/main.782ca115.css","22b773749fa63c729dd4927b2a46ba39"],["/static/js/main.63bcecff.js","c0fd5fd87c37364dfdcdbcffd832fea5"],["/static/media/55-Chevy.1c9cbf4b.jpg","1c9cbf4b6d140c30d25839dc15392144"],["/static/media/65-Corvette.de4033e3.jpg","de4033e32674686338ec882a8fe1630c"],["/static/media/67-Camero.adf2d089.jpg","adf2d089351f45081b9f6a5cfd95c63c"],["/static/media/Aston-Martin.71445cc7.jpg","71445cc7d480f24397c478dbeca1c615"],["/static/media/Audi-R8.9acd4532.jpg","9acd4532efe95e4d6b1ec33101aa73aa"],["/static/media/Dodge-Viper.abd329d8.jpg","abd329d8ee2098e2287bea7e7e271c50"],["/static/media/Ferarri.e380b845.jpg","e380b845a99778541d7d8a0afbb70a2b"],["/static/media/Jaguar-E-Type-Roadster.b7dddd7d.jpg","b7dddd7db128976aa1f381e47c026262"],["/static/media/Lamborghini.8d63623a.jpg","8d63623a2eec8916498c572cd2d1a5fa"],["/static/media/Maybach.4d292aec.jpg","4d292aec57c45f70d991cd9062e338ad"],["/static/media/Mercedes-AMG-GT-S.5dcd297f.jpg","5dcd297f12f77a8426dad6f4cdcd6c8e"],["/static/media/Porsche-911.43b8725b.jpg","43b8725b7652dab17226c60ba978fcb4"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var r="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});