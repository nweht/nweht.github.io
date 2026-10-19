(function(){
if(!('IntersectionObserver'in window))return;
var links=[].slice.call(document.querySelectorAll('nav a')),map={};
links.forEach(function(a){map[a.getAttribute('href').slice(1)]=a});
var io=new IntersectionObserver(function(es){es.forEach(function(e){
if(e.isIntersecting){links.forEach(function(a){a.removeAttribute('aria-current')});var a=map[e.target.id];if(a)a.setAttribute('aria-current','true')}
})},{rootMargin:'-40% 0px -55% 0px'});
Object.keys(map).forEach(function(id){var el=document.getElementById(id);if(el)io.observe(el)});
})();
