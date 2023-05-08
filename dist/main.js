(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"* {\n  margin: 0;\n  padding: 0;\n}\n\n#wrapper {\n  height: 100vh;\n  width: 100vw;\n  display: grid;\n  grid-template-columns: 1fr 5fr;\n  grid-template-rows: 1fr 5fr;\n}\n\n#header {\n  background-color: rgb(20, 18, 18);\n  grid-row: 1/2;\n  grid-column: 1/3;\n  display: flex;\n\n  align-items: center;\n}\n\n#header > h1 {\n  font-size: 3rem;\n  color: white;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 2rem;\n}\n\n#sidebar {\n  display: flex;\n  flex-direction: column;\n  background-color: antiquewhite;\n  min-width: 200px;\n}\n\n#sidebar > h1 {\n  text-align: center;\n  padding-top: 1rem;\n}\n\n#projectsContainer {\n  display: flex;\n  flex-direction: column;\n  justify-content: left;\n  margin: 0 1rem 0 1rem;\n  gap: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n.project {\n  display: flex;\n  align-items: center;\n}\n.project2 {\n  display: flex;\n  align-items: center;\n}\n.project2:hover {\n  -webkit-transform: scale(1.05);\n}\n\n.projectImage {\n  width: 35px;\n}\n\n#createProjectBtnContainer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n\n#addProjectsButton {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n#projectNameInput {\n  border: none;\n  border-bottom: 2px solid black;\n  background-color: transparent;\n}\n.deleteProjectButton {\n  margin-left: auto;\n}\n\n.project2.active h4 {\n  text-decoration: underline;\n  text-decoration-thickness: 0.2rem;\n}\n\nbutton {\n  border: none;\n  background: none;\n  cursor: pointer;\n}\n\n#addTaskButton {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.addTaskImage {\n  width: 50px;\n}\n\n.task {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: auto;\n  padding: 0.5rem;\n}\n.taskLeftSide {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n#taskContainer {\n  border-radius: 25px;\n  width: 50%;\n}\n\n.taskDelBtn {\n  background-color: red;\n  padding: 0.2rem;\n  border-radius: 5px;\n  border: 1px solid hsla(0, 0%, 100%, 0.4);\n  cursor: pointer;\n}\n",""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var d=e[c],s=r.base?d[0]+r.base:d[0],l=a[s]||0,u="".concat(s," ").concat(l);a[s]=l+1;var p=n(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=o(m,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var d=r(e,o),s=0;s<a.length;s++){var l=n(a[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=d}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;var r={};(()=>{n.d(r,{d:()=>P});var e=n(379),t=n.n(e),o=n(795),a=n.n(o),i=n(569),c=n.n(i),d=n(565),s=n.n(d),l=n(216),u=n.n(l),p=n(589),m=n.n(p),f=n(426),g={};g.styleTagTransform=m(),g.setAttributes=s(),g.insert=c().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=u(),t()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;let h=document.getElementById("projectNameInput");class v{constructor(e){this.id=(100*Math.random()).toFixed(5),this.name=e,this.todoList=[],this.active=!1}}function b(){let e=document.getElementsByClassName("active");if(console.log(e),e.length>0){let t=e[0].getAttribute("data-id");return P.find((e=>e.id===t))}}function y(){b().todoList.forEach((e=>{!function(e,t){let n=document.createElement("div");n.setAttribute("class","task"),n.setAttribute("data-id",t);let r=document.createElement("div");r.innerHTML="X",r.setAttribute("class","taskDelBtn"),r.addEventListener("click",(function(){console.log("Working delete task button")}));let o=document.createElement("h4");o.innerHTML=e,n.appendChild(o),n.appendChild(checkbox),x.appendChild(n)}(e.name,e.id)}))}const x=document.getElementById("taskContainer");function E(){x.innerHTML=""}class k{constructor(e){this.name=e,this.id=(100*Math.random()).toFixed(5)}}const L=document.getElementById("content");function j(){document.getElementById("taskForm").remove()}function C(){const e=document.createElement("button");e.setAttribute("id","addTaskButton");const t=document.createElement("h4");t.innerHTML="Add Task";const n=document.createElement("img");n.setAttribute("src","../src/plus-circle-1441-svgrepo-com.svg"),n.classList.add("addTaskImage"),e.appendChild(n),e.appendChild(t),L.appendChild(e),e.addEventListener("click",(function(){console.log("asd"),T(),function(){const e=document.createElement("div");e.setAttribute("id","taskForm");const t=document.createElement("input");t.type="text",t.setAttribute("id","taskNameInput");const n=document.createElement("btn");n.setAttribute("id","addTaskBtn"),n.innerHTML="Add";const r=document.createElement("btn");r.setAttribute("id","cancelBtn"),r.innerHTML="Cancel",r.addEventListener("click",(function(){j(),C()})),n.addEventListener("click",(function(){console.log("working"),function(){const e=function(){let e=document.getElementById("taskNameInput");return""==e.value?(alert("Task name cannot be empty"),!1):e.value}();0!=e&&function(e){let t=b();t.todoList.push(e),console.log(t.todoList)}(new k(e))}(),E(),y(),j(),C()})),e.appendChild(t),e.appendChild(n),e.appendChild(r),L.appendChild(e)}()}))}function T(){const e=document.getElementById("addTaskButton");null!=e&&e.remove()}const I=document.getElementById("projectsContainer"),w=document.getElementById("content");function B(){P.forEach((e=>{let t=function(e,t,n){let r=document.createElement("button");r.classList.add("project2"),r.setAttribute("data-ID",t),1==n&&r.classList.add("active");let o=document.createElement("img"),a=document.createElement("h4");o.setAttribute("src","../src/to-do-list-svgrepo-com.svg"),o.classList.add("projectImage","project"),a.textContent=e,a.classList.add("project"),r.appendChild(o),r.appendChild(a);let i=document.createElement("button");return i.classList.add("deleteProjectButton"),i.innerHTML="X",r.appendChild(i),r}(e.name,e.id,e.active);I.appendChild(t)}))}function A(){let e=""==h.value?(alert("Project name cannot be empty"),!1):h.value;if(0!=e){let t=new v(e);P.push(t),N(),B(),H(),M()}}function M(){document.querySelectorAll(".project").forEach((e=>{e.addEventListener("click",(function(e){!function(){const e=document.querySelector(".active");null!=e&&e.classList.remove("active")}(),function(e){"projectsContainer"===e.target.parentNode.id?e.target.classList.add("active"):e.target.parentNode.classList.add("active")}(e),function(){const e=document.querySelector(".active").getAttribute("data-id");P.forEach((t=>{t.id===e?t.active=!0:t.active=!1}))}(),E(),y(),T(),C(),S(),function(){let e=document.createElement("h1");e.setAttribute("id","projectHeader");let t=b();e.innerHTML=t.name,w.prepend(e)}()}))}))}function H(){document.querySelectorAll(".deleteProjectButton").forEach((e=>{e.addEventListener("click",(function(e){const t=e.target.parentNode.dataset.id;(function(e,t){const n=e.findIndex((e=>e.id===t));e.splice(n,1)})(P,t),N(),S(),B(),M(),H(),E(),T(),0===P.length?T():null!=b()&&(y(),C())}))}))}function N(){I.innerHTML=""}function S(){const e=document.getElementById("projectHeader");null!=e&&(e.innerHTML="")}let P=[];document.getElementById("addProjectsButton").addEventListener("click",(function(){A(),h.value=""}))})()})();