
const CACHE="goal-ledger-_goal_ledger_site_-1791376294022",PREFIX="goal-ledger-_goal_ledger_site_-",BASE="/goal-ledger-site/",URLS=["/goal-ledger-site/","/goal-ledger-site/index.html","/goal-ledger-site/icon.svg","/goal-ledger-site/icon-192.png","/goal-ledger-site/icon-512.png","/goal-ledger-site/manifest.webmanifest","/goal-ledger-site/assets/index-CH954Mmi.css","/goal-ledger-site/assets/index-DWKKB-nU.js"];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(URLS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith(PREFIX)&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  const url=new URL(e.request.url);
  if(e.request.method!=='GET'||url.origin!==location.origin||!url.pathname.startsWith(BASE))return;
  if(e.request.mode==='navigate'){
    e.respondWith(fetch(e.request).catch(()=>caches.open(CACHE).then(c=>c.match(BASE+'index.html',{ignoreVary:true}))));return;
  }
  if(URLS.includes(url.pathname))e.respondWith(caches.open(CACHE).then(c=>c.match(e.request,{ignoreVary:true}).then(hit=>hit||fetch(e.request))));
});