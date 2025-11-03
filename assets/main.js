/* REPLACE START — main.js 全量覆蓋（行為統一：手機選單/遮罩/年分/安全） */
(function(){'use strict';
  // 取得元素
  const btn=document.querySelector('.nav-toggle'); const nav=document.querySelector('.site-nav');
  if(!btn||!nav) return;

  // ARIA 初始
  btn.setAttribute('aria-expanded','false'); btn.setAttribute('aria-controls','siteNav'); nav.id=nav.id||'siteNav';

  // 動態建立遮罩（不用改 HTML）
  let overlay=document.querySelector('.nav-overlay'); if(!overlay){overlay=document.createElement('div');overlay.className='nav-overlay';overlay.hidden=true;document.body.appendChild(overlay);}

  // 狀態控制
  const isOpen=()=>document.body.classList.contains('nav-open');
  const open =()=>{document.body.classList.add('nav-open');btn.setAttribute('aria-expanded','true');overlay.hidden=false;};
  const close=()=>{document.body.classList.remove('nav-open');btn.setAttribute('aria-expanded','false');overlay.hidden=true;};

  // 事件：切換/關閉
  btn.addEventListener('click',()=>{isOpen()?close():open();});
  overlay.addEventListener('click',close);
  nav.addEventListener('click',e=>{ if(e.target.closest('a')) close(); });
  window.addEventListener('keydown',e=>{ if(e.key==='Escape') close(); });

  // 斷點切換時自動關閉（避免桌機↔手機殘留打開狀態）
  const mq=window.matchMedia('(min-width:981px)'); const onMQ=()=>{ if(mq.matches) close(); };
  mq.addEventListener?mq.addEventListener('change',onMQ):mq.addListener(onMQ);

  // Footer 年份
  const y=document.getElementById('y'); if(y){ y.textContent=new Date().getFullYear(); }

  // 再保險防 iframe 夾帶（配合 CSP）
  try{ if(top!==self){ document.body.innerHTML=''; } }catch(_){}
})();
/* REPLACE END — main.js 全量覆蓋 */
