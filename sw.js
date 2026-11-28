
const CACHE="goal-ledger-_goal_ledger_site_-1795855309740",PREFIX="goal-ledger-_goal_ledger_site_-",BASE="/goal-ledger-site/",URLS=["/goal-ledger-site/","/goal-ledger-site/index.html","/goal-ledger-site/icon.svg","/goal-ledger-site/icon-192.png","/goal-ledger-site/icon-512.png","/goal-ledger-site/manifest.webmanifest","/goal-ledger-site/assets/index-DIGIQQUT.css","/goal-ledger-site/assets/MobileGlassMaterial-BgFUBPe-.css","/goal-ledger-site/assets/index-Bu_Aj_uh.js","/goal-ledger-site/assets/MobileGlassMaterial-B0zdIsXt.js","/goal-ledger-site/assets/gpu-BZ44-8V2.js","/goal-ledger-site/assets/map-encoder.worker-Be9DES-u.js"],CORE=["/goal-ledger-site/","/goal-ledger-site/index.html","/goal-ledger-site/icon.svg","/goal-ledger-site/icon-192.png","/goal-ledger-site/icon-512.png","/goal-ledger-site/manifest.webmanifest","/goal-ledger-site/assets/index-Bu_Aj_uh.js","/goal-ledger-site/assets/index-DIGIQQUT.css"];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith(PREFIX)&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  const url=new URL(e.request.url);
  if(e.request.method!=='GET'||url.origin!==location.origin||!url.pathname.startsWith(BASE))return;
  if(e.request.mode==='navigate'){
    e.respondWith(fetch(e.request).catch(()=>caches.open(CACHE).then(c=>c.match(BASE+'index.html',{ignoreVary:true}))));return;
  }
  if(URLS.includes(url.pathname))e.respondWith(caches.open(CACHE).then(c=>c.match(e.request,{ignoreVary:true}).then(async hit=>{if(hit)return hit;const response=await fetch(e.request);if(response.ok){try{await c.put(e.request,response.clone());}catch{/* Cache quota or disabled storage must not discard a valid network response. */}}return response;})));
});