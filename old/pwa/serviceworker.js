self.importScripts('main.js')

var cacheName = 'calendarTest_0.0.1'
var appShellFiles = [
    `./`,
    `./img/`,
    `./img/test.jpg`,
    `./icon/`,
    `./icon/icon.png`,
    `./app.js`,
    `./main.js`,
    `./index.html`,
    `./style.css`
]

self.addEventListener('install', function(e){
    console.log('[Service Worker] Install')
    e.waitUntil(
        caches.open(cacheName).then(function(cache){
            console.log('[Service Worker] Caching all: app shell and content')
            return cache.addAll(contentToCache);
        })
    )
})

self.addEventListener('fetch',function(e){
    e.responWith(
        caches.match(e.request).then(function(r){
            console.log(`[Service Worker] Fetching resource: ${e.request.url}` )
            return r || fetch(e.request).then(function(response){
                return caches.open(cacheName).then(function(cache){
                    console.log(`[service Worker] Caching new resource: ${e.request.url}`)
                    cache.put(e.request, response.clone())
                    return response
                })
            })
        })
    )
})

self.addEventListener('activate', (e)=>{
    e.waitUntil(
        cashes.keys().then((keylist) => {
            return Promise.all(keylist.map((key) => {
                if(key != casheName) {
                    return caches.delete(key);
                }
            }))
        })
    )
})