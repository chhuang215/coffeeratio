if(!self.define){let e,i={};const n=(n,l)=>(n=new URL(n+".js",l).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(l,s)=>{const u=e||("document"in self?document.currentScript.src:"")||location.href;if(i[u])return;let r={};const a=e=>n(e,u),o={module:{uri:u},exports:r,require:a};i[u]=Promise.all(l.map((e=>o[e]||a(e)))).then((e=>(s(...e),r)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"_app/immutable/assets/_layout.c2077271.css",revision:null},{url:"_app/immutable/assets/ReloadPrompt.b5165cab.css",revision:null},{url:"_app/immutable/chunks/_layout.9a8b0c19.js",revision:null},{url:"_app/immutable/chunks/_page.de0ef88a.js",revision:null},{url:"_app/immutable/chunks/0.3efdd9cb.js",revision:null},{url:"_app/immutable/chunks/1.a85fae07.js",revision:null},{url:"_app/immutable/chunks/2.3f3998ee.js",revision:null},{url:"_app/immutable/chunks/index.18e6901b.js",revision:null},{url:"_app/immutable/chunks/index.7fa818f6.js",revision:null},{url:"_app/immutable/chunks/preload-helper.f8376bb0.js",revision:null},{url:"_app/immutable/chunks/ReloadPrompt.b882e2eb.js",revision:null},{url:"_app/immutable/chunks/singletons.06260e99.js",revision:null},{url:"_app/immutable/chunks/virtual_pwa-register.2ddfe096.js",revision:null},{url:"_app/immutable/chunks/workbox-window.prod.es5.6a9d82f3.js",revision:null},{url:"_app/immutable/entry/_layout.js.6b8ccf02.js",revision:null},{url:"_app/immutable/entry/_layout.svelte.7b6a89ef.js",revision:null},{url:"_app/immutable/entry/_page.js.b034fc1e.js",revision:null},{url:"_app/immutable/entry/_page.svelte.30cbc633.js",revision:null},{url:"_app/immutable/entry/app.e5be350e.js",revision:null},{url:"_app/immutable/entry/error.svelte.0aa9f097.js",revision:null},{url:"_app/immutable/entry/start.7a9c56a8.js",revision:null},{url:"favicon.png",revision:"3a387408ecc6cc283f724b39ca5fffb4"},{url:"icons/icon-128x128.png",revision:"0b810f5e0055ea7f477cc45d0418727c"},{url:"icons/icon-144x144.png",revision:"a8a94b83130406dd6df31792dbc3b00f"},{url:"icons/icon-152x152.png",revision:"5238f24e1b9b2281d18072e74fef3de6"},{url:"icons/icon-192x192.png",revision:"6dc0953ded3380236fc4b0dff8c1b8ef"},{url:"icons/icon-256x256.png",revision:"8d62c4a39da8a54cf76080dddabb126f"},{url:"icons/icon-32x32.png",revision:"976a42daa337d166769cc070a3fa21d0"},{url:"icons/icon-512x512.png",revision:"501ad534a2cc50c2252e497ecd1c07fb"},{url:"/",revision:"6e15e1ddf37b807fd179fc7262389fd9"},{url:"manifest.webmanifest",revision:"993694611be1b2b367ab5df10dbedc01"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/")))}));
