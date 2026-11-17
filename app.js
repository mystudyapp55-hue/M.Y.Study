(function(){var l;try{l=localStorage.getItem('mys-lang')}catch(e){}
if(l!=='ar'&&l!=='en'){l=((navigator.language||'en').toLowerCase().indexOf('ar')===0)?'ar':'en'}
var d=document.documentElement;d.setAttribute('data-lang',l);d.setAttribute('lang',l)})();
document.addEventListener('DOMContentLoaded',function(){
(function(){
  var root=document.documentElement;
  document.getElementById('langbtn').addEventListener('click',function(){
    var n=root.getAttribute('data-lang')==='ar'?'en':'ar';
    root.setAttribute('data-lang',n);root.setAttribute('lang',n);
    try{localStorage.setItem('mys-lang',n)}catch(e){}
  });
  var copy=document.getElementById('copybtn');
  if(copy)copy.addEventListener('click',function(){
    var t=document.getElementById('mailaddr').textContent;
    function sel(){var r=document.createRange();r.selectNodeContents(document.getElementById('mailaddr'));var s=getSelection();s.removeAllRanges();s.addRange(r)}
    try{navigator.clipboard.writeText(t).then(function(){flash()},sel)}catch(e){sel()}
  });
  function flash(){var o=copy.innerHTML;copy.textContent='✓';setTimeout(function(){copy.innerHTML=o},1200)}
})();
});
