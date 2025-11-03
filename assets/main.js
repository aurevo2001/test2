/* REPLACE START — assets/main.js */
(()=>{const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
document.addEventListener("DOMContentLoaded",()=>{const body=document.body,nav=$(".site-nav"),btn=$(".nav-toggle");if(!nav||!btn)return;
/* 補遮罩(若不存在) */let mask=$("#navOverlay");if(!mask){mask=document.createElement("div");mask.id="navOverlay";body.appendChild(mask);}
const open=()=>{body.classList.add("nav-open");btn.setAttribute("aria-expanded","true");},close=()=>{body.classList.remove("nav-open");btn.setAttribute("aria-expanded","false");};
btn.addEventListener("click",e=>{e.preventDefault();body.classList.contains("nav-open")?close():open();});
mask.addEventListener("click",close);
nav.addEventListener("click",e=>{if(e.target.closest("a")) close();});
document.addEventListener("keydown",e=>{if(e.key==="Escape") close();});
/* 初始強制關閉，避免舊 CSS/快取讓它一開始就展開 */close();
/* 桌機斷點自動關閉，避免殘留 */matchMedia("(min-width:981px)").addEventListener("change",m=>{if(m.matches) close();});
/* Footer 年份 */const y=$("#y");if(y) y.textContent=new Date().getFullYear();
/* Lightbox：點空白或叉關閉並重置影片 */$$(".lightbox").forEach(b=>{b.addEventListener("click",ev=>{if(ev.target===b||ev.target.classList.contains("close")){b.removeAttribute("open");const v=b.querySelector("video");if(v){v.pause();v.currentTime=0;}}});});
/* frame 防注入 */try{if(top!==self) top.location=location.href;}catch(_){}});
/* REPLACE END — assets/main.js */
