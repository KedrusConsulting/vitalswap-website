if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const t=s=>i(s,r),d={module:{uri:r},exports:u,require:t};e[r]=Promise.all(n.map((s=>d[s]||t(s)))).then((s=>(l(...s),u)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/clsx.m.ab2a4b6e.js",revision:null},{url:"assets/formik.esm.fe63a408.js",revision:null},{url:"assets/index.02666bb5.js",revision:null},{url:"assets/index.0b892bd2.js",revision:null},{url:"assets/index.23e401f3.js",revision:null},{url:"assets/index.3507fe84.js",revision:null},{url:"assets/index.40d9d753.js",revision:null},{url:"assets/index.5a08969e.js",revision:null},{url:"assets/index.63cb0db8.js",revision:null},{url:"assets/index.6962fa95.js",revision:null},{url:"assets/index.8042a136.js",revision:null},{url:"assets/index.8a1c737c.js",revision:null},{url:"assets/index.a088563c.js",revision:null},{url:"assets/index.a5678b9b.js",revision:null},{url:"assets/index.bdeb10be.js",revision:null},{url:"assets/index.beb28cda.js",revision:null},{url:"assets/index.d34b624c.css",revision:null},{url:"assets/index.f46dcbea.js",revision:null},{url:"assets/index.fa7636d9.js",revision:null},{url:"index.html",revision:"84c2f3d18a3452307f471d314d376fbc"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"920adfbf2b750a9f0b66648704440c8d"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
