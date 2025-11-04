<!-- REPLACE START — Mobile drawer toggle (Aurevo 版) -->
<script>
(function(){
  const btn=document.querySelector('.nav-toggle');
  const nav=document.querySelector('.site-nav');
  if(!btn||!nav) return;

  let overlay=document.getElementById('menuOverlay');
  if(!overlay){
    overlay=document.createElement('div');
    overlay.id='menuOverlay';
    overlay.className='menu-overlay';
    document.body.appendChild(overlay);
  }

  const open=()=>{document.body.classList.add('nav-open');overlay.classList.add('show');btn.setAttribute('aria-expanded','true');};
  const close=()=>{document.body.classList.remove('nav-open');overlay.classList.remove('show');btn.setAttribute('aria-expanded','false');};

  btn.addEventListener('click',e=>{e.stopPropagation();document.body.classList.contains('nav-open')?close():open();});
  overlay.addEventListener('click',close);
  nav.addEventListener('click',e=>{const a=e.target.closest('a'); if(a) close();});
  window.addEventListener('keyup',e=>{if(e.key==='Escape') close();});
  window.addEventListener('resize',()=>{if(window.innerWidth>=981) close();});
})();
</script>
<!-- REPLACE END -->

