
const header=document.querySelector('.site-header'), menu=document.querySelector('.mobile-btn'), nav=document.querySelector('.nav-links');
addEventListener('scroll',()=>header?.classList.toggle('scrolled',scrollY>25));
menu?.addEventListener('click',()=>nav.classList.toggle('show'));
document.querySelectorAll('.mega-btn').forEach(b=>b.addEventListener('click',e=>{e.stopPropagation();b.closest('.mega-wrap').classList.toggle('open')}));
document.addEventListener('click',()=>document.querySelectorAll('.mega-wrap').forEach(x=>x.classList.remove('open')));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
