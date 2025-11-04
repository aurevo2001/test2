// REPLACE START — Mobile Drawer minimal controller (pure JS)
(function(){
  var btn=document.querySelector('.nav-toggle');
  var nav=document.querySelector('.site-nav');
  var overlay=document.getElementById('menuOverlay');
  if(!btn||!nav||!overlay) return;
 
  function open(){ document.body.classList.add('nav-open'); overlay.classList.add('show'); }
  function close(){ overlay.classList.remove('show'); document.body.classList.remove('nav-open'); }

  // 切換
  btn.addEventListener('click',function(e){ e.stopPropagation(); if(document.body.classList.contains('nav-open')) close(); else open(); });

  // 點遮罩關閉
  overlay.addEventListener('click',close);

  // ESC 關閉
  document.addEventListener('keydown',function(e){ if(e.key==='Escape') close(); });

  // 點抽屜內部不要冒泡到 body
  nav.addEventListener('click',function(e){ e.stopPropagation(); });

  // 點頁面其它地方也關閉
  document.addEventListener('click',function(e){
    if(!document.body.classList.contains('nav-open')) return;
    if(nav.contains(e.target) || btn.contains(e.target)) return;
    close();
  });
})();
// REPLACE END — Mobile Drawer minimal controller (pure JS)
