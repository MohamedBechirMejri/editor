(()=>{"use strict";const e=document.querySelector(".textarea");var t;e.focus(),e.addEventListener("blur",(e=>e.target.focus())),(t=e).addEventListener("keydown",(e=>{"Backspace"!==e.key&&" "!==e.key||1===t.children.length&&t.children[0].innerText<1&&e.preventDefault()})),(e=>{e.addEventListener("input",(()=>{for(let t=0;t<e.children.length;t++)e.children[t].innerText<1?e.children[t].classList.remove("hide-placeholder"):e.children[t].classList.add("hide-placeholder")}))})(e),(e=>{e.addEventListener("input",(()=>{const e=document.querySelector(".block-picker"),{x:t,y:n}=(()=>{const e=document.getSelection().getRangeAt(0);let t,n;const c=e.startContainer,o=e.startOffset;if(o>0)return n=document.createRange(),n.setStart(c,o-1),n.setEnd(c,o),t=n.getBoundingClientRect(),{x:t.right,y:t.top};if(o<c.length)return n=document.createRange(),n.setStart(c,o),n.setEnd(c,o+1),t=n.getBoundingClientRect(),{x:t.left,y:t.top};t=c.getBoundingClientRect();const d=getComputedStyle(c),r=(parseInt(d.lineHeight)-parseInt(d.fontSize))/2;return{x:t.left,y:t.top+r}})();e.style.position="fixed",e.style.top=n+35+"px",e.style.left=t+10+"px"}))})(e),(e=>{e.addEventListener("keydown",(e=>{const t=document.querySelector(".block-picker");"/"===e.key&&t.classList.add("open"),"Escape"===e.key&&t.classList.remove("open")}))})(e),(e=>{const t=document.querySelector(".block-picker"),n=document.getElementById("h1-block"),c=document.getElementById("h2-block"),o=document.getElementById("h3-block"),d=e=>{window.getSelection().focusNode.parentElement.insertAdjacentHTML("afterend",e),t.classList.remove("open"),window.getSelection()?.modify("move","forward","line")};n.addEventListener("click",(e=>{d("<h1 data-placeholder='Heading 1'><br /></h1>")})),c.addEventListener("click",(e=>{d("<h2 data-placeholder='Heading 2'><br /></h2>")})),o.addEventListener("click",(e=>{d("<h3 data-placeholder='Heading 3'><br /></h3>")})),e.addEventListener("keydown",(e=>{"Enter"===e.key&&t.classList.contains("open")&&(t.children[2].click(),e.preventDefault())}))})(e),((e,t)=>{e.addEventListener("keydown",(e=>{const n=document.querySelector(".block-picker");n.classList.contains("open")&&(1===e.key.length&&(t+=e.key),"Backspace"===e.key&&(t=t.slice(0,-1)),t||n.classList.remove("open"))}))})(e,"")})();