/* REPLACE START — Mobile Drawer Controller (final) */
(function(){
  const btn=document.querySelector('.nav-toggle');
  const drawer=document.querySelector('.site-nav');
  const overlay=document.getElementById('menuOverlay');
  if(!btn||!drawer||!overlay) return;

  const open=()=>{document.body.classList.add('nav-open');btn.setAttribute('aria-expanded','true');overlay.classList.add('show');};
  const close=()=>{document.body.classList.remove('nav-open');btn.setAttribute('aria-expanded','false');overlay.classList.remove('show');};
  const toggle=()=>{document.body.classList.contains('nav-open')?close():open();};

  // 事件
  btn.addEventListener('click',toggle);
  overlay.addEventListener('click',close);
  window.addEventListener('keydown',e=>{if(e.key==='Escape') close();});

  // 點選單連結後自動關閉（避免留著抽屜）
  drawer.addEventListener('click',e=>{
    const a=e.target.closest('a'); if(!a) return;
    // 讓導向照常發生，同時先關抽屜
    close();
  });

  // 視窗放大回桌機時，確保關閉狀態
  const mql=window.matchMedia('(min-width:981px)');
  const onResize=()=>{ if(mql.matches) close(); };
  mql.addEventListener ? mql.addEventListener('change',onResize) : window.addEventListener('resize',onResize);
})();
 /* REPLACE END — Mobile Drawer Controller (final) */
