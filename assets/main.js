/* REPLACE START — assets/main.js 全量覆蓋 */
(()=>{"use strict";const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];function ready(fn){if(document.readyState!=="loading"){fn();}else{document.addEventListener("DOMContentLoaded",fn);} }
ready(()=>{const body=document.body,nav=$(".site-nav"),btn=$(".nav-toggle");if(!nav||!btn)return;
/* 建立遮罩（一次） */let overlay=$("#navOverlay");if(!overlay){overlay=document.createElement("div");overlay.id="navOverlay";overlay.setAttribute("aria-hidden","true");body.appendChild(overlay);}
const mq=window.matchMedia("(min-width:981px)");
function openNav(){body.classList.add("nav-open");btn.setAttribute("aria-expanded","true");overlay.removeAttribute("aria-hidden");}
function closeNav(){body.classList.remove("nav-open");btn.setAttribute("aria-expanded","false");overlay.setAttribute("aria-hidden","true");}
function toggleNav(){body.classList.contains("nav-open")?closeNav():openNav();}
/* 綁定事件 */btn.addEventListener("click",e=>{e.preventDefault();toggleNav();});overlay.addEventListener("click",()=>closeNav());nav.addEventListener("click",e=>{const a=e.target.closest("a");if(a)closeNav();});document.addEventListener("keydown",e=>{if(e.key==="Escape")closeNav();});
/* 視窗尺寸切換時，自動關閉抽屜，避免殘留狀態 */mq.addEventListener("change",e=>{if(e.matches)closeNav();});
/* Footer 年份 */const y=$("#y");if(y)y.textContent=new Date().getFullYear();
/* Lightbox：點空白關閉、影片自動暫停 */$$(".lightbox").forEach(box=>{box.addEventListener("click",e=>{if(e.target===box||e.target.classList.contains("close")){box.removeAttribute("open");const v=box.querySelector("video");if(v){v.pause();v.currentTime=0;}}});});
/* 阻擋被 iframe 夾帶 */try{if(window.top!==window.self)window.top.location=window.location.href;}catch(_){}
/* 防右鍵（可自行移除） */document.addEventListener("contextmenu",e=>e.preventDefault(),{passive:false});});})();
/* REPLACE END — assets/main.js 全量覆蓋 */
