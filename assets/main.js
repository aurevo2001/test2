// REPLACE START: /assets/main.js 全量覆蓋
// ===== 導覽列：行動版切換 =====
const $ = (s, r=document)=>r.querySelector(s);const $$=(s,r=document)=>Array.from(r.querySelectorAll(s));
const header=$('.site-header'),toggle=$('.nav-toggle'),nav=$('.site-nav');if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open)});$$('.site-nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));}
// ===== 導覽列：目前頁面高亮 =====
(function markActive(){const path=location.pathname.split('/').pop()||'index.html';$$('.site-nav a').forEach(a=>{const href=a.getAttribute('href');if(href===path){a.classList.add('is-active')}})})();
// ===== 年度自動更新 =====
const y=$('#y');if(y){y.textContent=new Date().getFullYear();}
// ===== Contact 表單訊息（示範）=====
const form=$('.form');if(form){form.addEventListener('submit',()=>{$('.form-tip',form).textContent='已收到訊息（示範：此頁不會實際送出）。'})}
// REPLACE END: /assets/main.js 

/* PATCH START — Lightbox video pause on close */
(function(){
  const pauseAll=()=>document.querySelectorAll('.lightbox video').forEach(v=>{v.pause();try{v.currentTime=0;}catch(e){}});
  // 關閉（hash 清空）時停止所有影片
  window.addEventListener('hashchange',()=>{ if(!location.hash) pauseAll(); });
  // 開某支時，暫停其他支，避免同時播放
  document.querySelectorAll('.lightbox video').forEach(v=>{
    v.addEventListener('play',()=>document.querySelectorAll('.lightbox video').forEach(o=>{if(o!==v){o.pause();}}));
  });
})();
/* PATCH END — Lightbox video pause on close */
