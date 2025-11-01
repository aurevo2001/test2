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
/* APPEND START — front-only hardening JS */
// 3.1 防被嵌入（frame-busting）
try{if(top!==self){top.location=self.location;}}catch(e){}

// 3.2 對外連結自動加 rel="noopener noreferrer" 並限制 target
document.querySelectorAll('a[target="_blank"]').forEach(a=>{
  a.rel=(a.rel||"").split(" ").filter(Boolean).concat(["noopener","noreferrer"]).join(" ");
});
// 3.3 移除可疑 href（避免有人在內容裡塞 javascript: 或 data:text/html）
document.querySelectorAll('a[href]').forEach(a=>{
  const href=a.getAttribute('href')||"";
  if(/^javascript:/i.test(href)||/^data:text\/html/i.test(href)){a.removeAttribute('href');}
});

// 3.4 禁止右鍵/拖拉（僅限圖片與影片；lightbox 的 video 不影響播放）
const blockCtx=(e)=>{const t=e.target; if(t.closest('.allow-menu')) return; if(t.tagName==='IMG'||t.tagName==='VIDEO'){e.preventDefault();}};
window.addEventListener('contextmenu',blockCtx);
window.addEventListener('dragstart',e=>{if(e.target.tagName==='IMG'||e.target.tagName==='VIDEO'){e.preventDefault();}},true);

// 3.5 行動裝置長按下載的簡易抑制（阻擋長按選單）
let pressTimer=null;
const cancelPress=()=>{clearTimeout(pressTimer);pressTimer=null;}
const onTouchStart=(e)=>{const t=e.target;if(t.tagName==='IMG'||t.tagName==='VIDEO'){pressTimer=setTimeout(()=>{e.preventDefault();},450);}}
document.addEventListener('touchstart',onTouchStart,{passive:false});
document.addEventListener('touchend',cancelPress,{passive:true});
document.addEventListener('touchmove',cancelPress,{passive:true});

// 3.6 Lightbox 內的影片：點關閉才停止並可重播（你之前的版本保留最佳化）
function resetLightboxVideos(){document.querySelectorAll('.lightbox video').forEach(v=>{try{v.pause();v.currentTime=0;}catch(_){}});}
window.addEventListener('hashchange',resetLightboxVideos);
document.querySelectorAll('.lightbox .close').forEach(a=>a.addEventListener('click',resetLightboxVideos));
/* APPEND END */

/* REPLACE START — Neon Signature (趙憶憫，一筆一畫正確筆順) */
const NEON_PAGE_SELECTOR='body';  // 只在 index.html 啟用
const AUTO_FADE_OUT=true, REMOVE_AFTER=false;
const NEON_STROKE='#00fff0', NEON_OUTLINE='rgba(255,255,255,.08)';
const SPEED=0.8;  // ⚠️ 已為你調成稍慢動畫速度
const CHARS=['趙','憶','憫'];

(function neonSignature(){
  if(!document.querySelector(NEON_PAGE_SELECTOR)) return;
  const mount=document.getElementById('neon-signature-mount'); if(!mount) return;

  const wrap=document.createElement('div');wrap.id='neon-signature';
  const box=document.createElement('div');box.className='neon-wrap';
  const note=document.createElement('div');note.className='neon-note';note.textContent='點擊可跳過動畫';
  const holders=CHARS.map((_,i)=>{const d=document.createElement('div');d.id='neon-char-'+i;d.className='neon-char';box.appendChild(d);return d;});
  wrap.appendChild(box);wrap.appendChild(note);mount.replaceWith(wrap);

  function ready(fn){if(window.HanziWriter){fn();}else{let t=setInterval(()=>{if(window.HanziWriter){clearInterval(t);fn();}},50);}}
  ready(()=>{
    const writers=holders.map((el,i)=>HanziWriter.create(el.id, CHARS[i], {
      width:el.clientWidth||220,height:el.clientHeight||220,padding:8,
      showCharacter:false,showOutline:true,strokeColor:NEON_STROKE,radicalColor:NEON_STROKE,outlineColor:NEON_OUTLINE,
      strokeAnimationSpeed:SPEED,delayBetweenStrokes:SPEED*120,delayBetweenLoops:0
    }));

    const playSeq=idx=>{
      if(idx>=writers.length){ if(AUTO_FADE_OUT) wrap.classList.add('hide'); if(REMOVE_AFTER) setTimeout(()=>wrap.remove(),500); return; }
      writers[idx].animateCharacter({onComplete:()=>playSeq(idx+1)});
    };
    box.style.animation='neonFlicker 2.6s ease-in-out infinite';
    wrap.addEventListener('click',()=>wrap.classList.add('hide'));
    playSeq(0);
  });
})();
/* REPLACE END */
