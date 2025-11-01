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
// APPEND START — 關燈箱即停止並重置影片，下次可重播
function resetLightboxVideos(){document.querySelectorAll('.lightbox video').forEach(v=>{if(!v.paused){v.pause();}v.currentTime=0;});}
window.addEventListener('hashchange',resetLightboxVideos);
document.querySelectorAll('.lightbox .close').forEach(a=>a.addEventListener('click',resetLightboxVideos));
// APPEND END
