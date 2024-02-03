/* eslint-disable max-len */const t=document.body,e=document.querySelector(".wall"),i=document.querySelector(".spider");// eslint-disable-next-line no-shadow
document.addEventListener("click",l=>{let n=(t.clientWidth-e.clientWidth)/2,c=(t.clientHeight-e.clientHeight)/2,d=l.clientX-n,h=l.clientY-c;e.contains(l.target)&&(d=Math.max(i.clientWidth/2,Math.min(d,e.clientWidth-i.clientWidth/2)),h=Math.max(i.clientHeight/2,Math.min(h,e.clientHeight-i.clientHeight/2)),d-=i.clientWidth/2,h-=i.clientHeight/2,i.style.top=`${h+window.scrollY}px`,i.style.left=`${d+window.scrollX}px`)});//# sourceMappingURL=index.b0d0ffed.js.map

//# sourceMappingURL=index.b0d0ffed.js.map
