import{r as l,j as e,a as i}from"./index.a49a6d1c.js";const _="/assets/slider-@1x.51d94590.webp",u="/assets/slider-2@1x.c378f6a3.webp",h="/assets/slider-3@1x.ba8af8f6.webp";function f(){const o=l.exports.useRef(),p=l.exports.useRef();l.exports.useState(!0);let s=0,r;return l.exports.useEffect(()=>{const c=Array.from(p.current.querySelectorAll(".steps__card")),n=Array.from(o.current.querySelectorAll("[class^=steps__img"));return r=setInterval(()=>{c.map((a,d)=>{a.classList.remove("steps__card--active")}),n.map((a,d)=>{a.classList.remove("steps__img--active")}),s<c.length-1?s++:s=0,c[s].classList.add("steps__card--active"),n[s].classList.add("steps__img--active")},4e3),()=>clearInterval(r)},[]),e("section",{className:"steps__section",id:"how-it-works",children:i("div",{className:"container",children:[e("div",{"data-aos":"fade-up","data-aos-duration":"2000",className:"steps__caption",children:e("h2",{className:"heading--secondary",children:"Send money to friends and family in 3 simple steps."})}),i("div",{className:"steps__container",onClick:c=>{const n=c.target.closest(".steps__card"),a=Array.from(p.current.querySelectorAll(".steps__card")),d=Array.from(o.current.querySelectorAll("[class^=steps__img"));s=+n.dataset.card,clearInterval(r),a.map((t,m)=>{t.classList.remove("steps__card--active")}),d.map((t,m)=>{t.classList.remove("steps__img--active")}),a[s].classList.add("steps__card--active"),d[s].classList.add("steps__img--active"),r=setInterval(()=>{a.map((t,m)=>{t.classList.remove("steps__card--active")}),d.map((t,m)=>{t.classList.remove("steps__img--active")}),s<a.length-1?s++:s=0,a[s].classList.add("steps__card--active"),d[s].classList.add("steps__img--active")},4e3)},ref:p,children:[i("div",{className:"steps__text-box",children:[i("div",{"data-card":"0","data-aos":"fade-up","data-aos-duration":"2000",className:"steps__card steps__card--active",children:[e("h4",{className:"heading--quad",children:"1. Enter amount you wish to send"}),e("p",{children:"Once you sign up, add an amount you want to send, and hit the EasySend button."})]}),e("div",{"data-aos":"fade-up","data-aos-duration":"2000",className:"steps__img--mob steps__img--1","data-mob":"0",children:e("img",{src:_,alt:"Vitalswap send money app screen"})}),i("div",{"data-card":"1","data-aos":"fade-up","data-aos-duration":"2000",className:"steps__card",children:[e("h4",{className:"heading--quad",children:"2. Choose a destination currency"}),e("p",{children:"Select the destination currency, and VitalSwap EasySend will help you select the best rates in the market."})]}),e("div",{"data-aos":"fade-up","data-aos-duration":"2000",className:"steps__img--mob steps__img--2","data-mob":"1",children:e("img",{src:u,alt:"Vitalswap send money app screen"})}),i("div",{"data-card":"2","data-aos":"fade-up","data-aos-duration":"2000",className:"steps__card",children:[e("h4",{className:"heading--quad",children:"3. Send to recipients"}),e("p",{children:"Select send to yourself or someone else and funds will be delivered in seconds."})]}),e("div",{"data-aos":"fade-up","data-aos-duration":"2000",className:"steps__img--mob steps__img--3","data-mob":"2",children:e("img",{src:h,alt:"Vitalswap send money app screen"})})]}),i("div",{ref:o,"data-aos":"fade-left","data-aos-delay":"500","data-aos-duration":"1000",className:"steps__img-box",children:[e("div",{className:"steps__img--1 steps__img--active","data-img":"0",children:e("img",{src:_,alt:"Vitalswap send money app screen"})}),e("div",{className:"steps__img--2","data-img":"1",children:e("img",{src:u,alt:"Vitalswap destination currency app screen"})}),e("div",{className:"steps__img--3","data-img":"2",children:e("img",{src:h,alt:"Vitalswap send to recipient app screen"})})]})]})]})})}export{f as default};