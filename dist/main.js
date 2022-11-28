(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>o});var s=n(81),a=n.n(s),r=n(645),i=n.n(r)()(a());i.push([e.id,"/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nul[role='list'] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\nbody {\n  margin: 0;\n  min-height: 100vh;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\nbutton {\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n}\n\n.to-do-list {\n  width: 350px;\n  display: flex;\n  flex-direction: column;\n  margin: 10px;\n  border: 1px solid #eee;\n}\n\n.header,\n.add-task-section,\nli,\n.clear-btn {\n  padding: 10px;\n}\n\n.header,\n.add-task-section,\nli {\n  border-bottom: 1px solid #eee;\n}\n\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.enter-task {\n  width: 100%;\n  border: none;\n  font-style: italic;\n}\n\n.list-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 10px;\n}\n\n.task-input {\n  flex: 1;\n  border: none;\n  background-color: inherit;\n}\n\n.task-span {\n  text-decoration: line-through;\n  opacity: 0.5;\n  flex: 1;\n}\n\n.checkbox-ticked {\n  color: rgb(88, 236, 138);\n}\n\n.list-item > i {\n  cursor: move;\n  width: 40px;\n  text-align: center;\n}\n\n.clear-btn {\n  background-color: #eee;\n}\n\n.clear-btn > button {\n  width: 100%;\n}\n\n.clear-btn > button:disabled {\n  text-decoration: none;\n}\n\n.clear-btn > button:enabled {\n  text-decoration: underline;\n  color: grey;\n}\n\n@media screen and (min-width: 768px) {\n  .to-do-list {\n    width: 50%;\n  }\n}\n",""]);const o=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",s=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),s&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),s&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,s,a,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(s)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);s&&i[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,s=0;s<t.length;s++)if(t[s].identifier===e){n=s;break}return n}function s(e,s){for(var r={},i=[],o=0;o<e.length;o++){var c=e[o],l=s.base?c[0]+s.base:c[0],d=r[l]||0,u="".concat(l," ").concat(d);r[l]=d+1;var p=n(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var h=a(f,s);s.byIndex=o,t.splice(o,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var r=s(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var o=n(r[i]);t[o].references--}for(var c=s(e,a),l=0;l<r.length;l++){var d=n(r[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}r=c}}},569:e=>{var t={};e.exports=function(e,n){var s=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var s="";n.supports&&(s+="@supports (".concat(n.supports,") {")),n.media&&(s+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(s+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),s+=n.css,a&&(s+="}"),n.media&&(s+="}"),n.supports&&(s+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(s,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(s){var a=t[s];if(void 0!==a)return a.exports;var r=t[s]={id:s,exports:{}};return e[s](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),s=n(795),a=n.n(s),r=n(569),i=n.n(r),o=n(565),c=n.n(o),l=n(216),d=n.n(l),u=n(589),p=n.n(u),f=n(426),h={};h.styleTagTransform=p(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=d(),t()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const m=new class{constructor(){this.tasksList=[]}removeTask(e){this.tasksList.splice(e,1);for(let t=e;t<this.tasksList.length;t+=1)this.tasksList[t].index=t;localStorage.setItem("tasks",JSON.stringify(this.tasksList)),this.updateDisplay()}createTaskElement(e){const t=document.createElement("li");if(t.classList.add("list-item"),t.setAttribute("data-index",e.index),!1===e.completed){t.innerHTML=`<button><i class="fa-regular fa-square checkbox"></i></button>\n        <input type="text" value="${e.description}" class="task-input">\n        <i class="fa-solid fa-ellipsis-vertical trash-can"></i>`;const n=t.querySelector(".task-input"),s=t.querySelector(".trash-can");n.addEventListener("focus",(()=>{t.style.backgroundColor="rgb(205, 187, 205)",s.classList.remove("fa-solid"),s.classList.remove("fa-ellipsis-vertical"),s.classList.add("fa-regular"),s.classList.add("fa-trash-can"),s.style.cursor="pointer",s.addEventListener("click",(()=>{const e=parseInt(s.parentElement.getAttribute("data-index"),10);this.removeTask(e)}))})),n.addEventListener("focusout",(()=>{t.style.backgroundColor="white",s.classList.add("fa-solid"),s.classList.add("fa-ellipsis-vertical"),s.classList.remove("fa-regular"),s.classList.remove("fa-trash-can"),s.style.cursor="move"})),n.addEventListener("keypress",(e=>{if(e||(e=window.event),"Enter"===(e.code||e.key)){e.preventDefault();const t=n.parentElement.getAttribute("data-index");""!==n.value?(console.log("enter has been clicked"),this.editTask(n.value,t)):this.removeTask(t)}})),n.addEventListener("keyup",(e=>{13===e.keyCode&&(e.preventDefault(),e.target.blur())}))}else t.innerHTML=`<button><i class="fa-regular fa-square-check checkbox checkbox-ticked"></i></button>\n        <span class="task-span">${e.description}</span>\n        <i class="fa-solid fa-ellipsis-vertical trash-can"></i>`;const n=t.querySelector(".checkbox"),s=parseInt(t.getAttribute("data-index"),10);return n.addEventListener("click",(()=>{!function(e,t){!0===t[e].completed?t[e].completed=!1:t[e].completed=!0,localStorage.setItem("tasks",JSON.stringify(t)),t=JSON.parse(localStorage.getItem("tasks"))}(s,this.tasksList),this.updateDisplay()})),t}addTask(e){const t={description:e,completed:!1,index:this.tasksList.length};this.tasksList.push(t),localStorage.setItem("tasks",JSON.stringify(this.tasksList))}editTask(e,t){this.tasksList[t].description=e,localStorage.setItem("tasks",JSON.stringify(this.tasksList))}updateDisplay(){const e=document.querySelector("ul");e.innerHTML="",this.tasksList.forEach(((t,n)=>{e.append(this.createTaskElement(t))})),this.updateClearButton()}updateClearButton(){const e=document.querySelector(".clear-btn>button");let t=!1;this.tasksList.forEach((e=>{!0===e.completed&&(t=!0)})),e.disabled=!t}},v=document.querySelector(".enter-task"),k=document.querySelector(".tasks-list"),g=document.querySelector(".clear-btn>button");window.addEventListener("load",(()=>{localStorage.getItem("tasks")&&(m.tasksList=JSON.parse(localStorage.getItem("tasks")),0!==m.tasksList.length&&m.updateDisplay())})),v.addEventListener("keypress",(e=>{if(e||(e=window.event),"Enter"===(e.code||e.key)&&(e.preventDefault(),""!==v.value)){m.addTask(v.value),v.value="";const e=m.createTaskElement(m.tasksList[m.tasksList.length-1]);k.append(e)}})),g.addEventListener("click",(()=>{!function(e){e.tasksList=e.tasksList.filter((e=>!1===e.completed));for(let t=0;t<e.tasksList.length;t+=1)e.tasksList[t].index=t;localStorage.setItem("tasks",JSON.stringify(e.tasksList)),e.updateDisplay()}(m)}))})()})();