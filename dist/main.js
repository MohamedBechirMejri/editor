(()=>{"use strict";const e=document.querySelector(".textarea");var t;e.focus(),e&&e.addEventListener("blur",(e=>e.target.focus())),(t=e).addEventListener("keydown",(e=>{"Backspace"!==e.key&&" "!==e.key||1===t.children.length&&t.children[0].innerText<1&&e.preventDefault()})),(e=>{e.addEventListener("input",(()=>{for(let t=0;t<e.children.length;t++)e.children[t].innerText<1?e.children[t].classList.remove("hide-placeholder"):e.children[t].classList.add("hide-placeholder")}))})(e),(e=>{e.addEventListener("input",(()=>{const e=document.querySelector(".block-picker"),{x:t,y:n}=(()=>{const e=document.getSelection().getRangeAt(0);let t,n;const c=e.startContainer,d=e.startOffset;if(d>0)return n=document.createRange(),n.setStart(c,d-1),n.setEnd(c,d),t=n.getBoundingClientRect(),{x:t.right,y:t.top};if(d<c.length)return n=document.createRange(),n.setStart(c,d),n.setEnd(c,d+1),t=n.getBoundingClientRect(),{x:t.left,y:t.top};t=c.getBoundingClientRect();const r=getComputedStyle(c),l=(parseInt(r.lineHeight)-parseInt(r.fontSize))/2;return{x:t.left,y:t.top+l}})();e.style.position="fixed",e.style.top=n+35+"px",e.style.left=t+10+"px"}))})(e),(e=>{const t=document.querySelector(".block-picker"),n=document.getElementById("h1-block"),c=document.getElementById("h2-block"),d=document.getElementById("h3-block"),r=e=>{window.getSelection().focusNode.parentElement.insertAdjacentHTML("afterend",e),t.classList.remove("open"),window.getSelection()?.modify("move","forward","line")};n.addEventListener("click",(e=>{r("<h1 data-placeholder='Heading 1'><br /></h1>")})),c.addEventListener("click",(e=>{r("<h2 data-placeholder='Heading 2'><br /></h2>")})),d.addEventListener("click",(e=>{r("<h3 data-placeholder='Heading 3'><br /></h3>")})),e.addEventListener("keydown",(e=>{if("Enter"===e.key&&t.classList.contains("open")){let t=!1;document.querySelectorAll(".block").forEach((e=>{t||"none"===e.style.display||(e.click(),t=!0)})),e.preventDefault()}}))})(e)})();