/* REPLACE START — Navigation + header behavior (final) */
// 基本元素
document.addEventListener('DOMContentLoaded',()=>{const body=document.body,header=document.querySelector('.site-header'),toggle=document.querySelector('.nav-toggle'),nav=document.querySelector('.site-nav');if(!header||!nav){return}let overlay=document.querySelector('.menu-overlay');if(!overlay){overlay=document.createElement('div');overlay.className='menu-overlay';header.after(overlay)}let lastFocus=null;const mq=window.matchMedia('(min-width:981px)');
// 開關
const openNav=()=>{if(body.classList.contains('nav-open')) return;lastFocus=document.activeElement;body.classList.add('nav-open');overlay.classList.add('show');toggle&&toggle.setAttribute('aria-expanded','true');nav.setAttribute('aria-hidden','false');const firstLink=nav.querySelector('a,button,[tabindex]:not([tabindex="-1"])');firstLink&&firstLink.focus({preventScroll:true})};
const closeNav=()=>{if(!body.classList.contains('nav-open')) return;body.classList.remove('nav-open');overlay.classList.remove('show');toggle&&toggle.setAttribute('aria-expanded','false');nav.setAttribute('aria-hidden','true');lastFocus&&lastFocus.focus({preventScroll:true})};
const toggleNav=()=>{body.classList.contains('nav-open')?closeNav():openNav()};
// 事件：按鈕、遮罩、連結
toggle&&toggle.addEventListener('click',e=>{e.preventDefault();toggleNav()});
overlay.addEventListener('click',()=>closeNav());
nav.addEventListener('click',e=>{const a=e.target.closest('a');if(a){closeNav()}});
// Esc 關閉
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeNav()}});
// 視窗改成桌面寬度時關閉
mq.addEventListener('change',e=>{if(e.matches){closeNav()}});
// Header 滾動著色
const onScroll=()=>{if(window.scrollY>4){header.classList.add('scrolled')}else{header.classList.remove('scrolled')}};onScroll();window.addEventListener('scroll',onScroll,{passive:true});
// iOS 慣性滾動保護（抽屜開啟時禁止背景滾動已用 body.nav-open 控制，這裡再補觸控阻擋）
document.addEventListener('touchmove',e=>{if(body.classList.contains('nav-open')){const withinNav=e.target.closest('.site-nav');if(!withinNav){e.preventDefault()} }},{passive:false});
// 安全：避免重複開關造成動畫卡住
window.addEventListener('resize',()=>{if(window.innerWidth>980){closeNav()}});
// 可選：破快取（若你用 `<script src="main.js?v=20251104">` 就不用）
try{if('serviceWorker' in navigator&&navigator.serviceWorker.controller){navigator.serviceWorker.controller.postMessage({type:'BUST_NAV_CACHE'})}}catch(_){}
});
/* REPLACE END — Navigation + header behavior (final) */
