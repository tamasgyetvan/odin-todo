(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"* {\n  margin: 0;\n  padding: 0;\n}\n\n#wrapper {\n  height: 100vh;\n  width: 100vw;\n  display: grid;\n  grid-template-columns: 1fr 5fr;\n  grid-template-rows: 1fr 5fr;\n}\n\n#header {\n  background-color: rgb(20, 18, 18);\n  grid-row: 1/2;\n  grid-column: 1/3;\n  display: flex;\n\n  align-items: center;\n}\n\n#header > h1 {\n  font-size: 3rem;\n  color: white;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 2rem;\n}\n\n#sidebar {\n  display: flex;\n  flex-direction: column;\n  background-color: antiquewhite;\n  min-width: 200px;\n}\n\n#sidebar > h1 {\n  text-align: center;\n  padding-top: 1rem;\n}\n\n#projectsContainer {\n  display: flex;\n  flex-direction: column;\n  justify-content: left;\n  margin: 0 1rem 0 1rem;\n  gap: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n.project {\n  display: flex;\n  align-items: center;\n}\n\n.project:hover {\n  -webkit-transform: scale(1.05);\n}\n\n.projectImage {\n  width: 35px;\n}\n\n#createProjectBtnContainer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n\n#addProjectsButton {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n#projectNameInput {\n  border: none;\n  border-bottom: 2px solid black;\n  background-color: transparent;\n}\n.deleteProjectButton {\n  margin-left: auto;\n}\n\nbutton {\n  border: none;\n  background: none;\n  cursor: pointer;\n}\n\n#addTaskButton {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.addTaskImage {\n  width: 50px;\n}\n\n.task {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: auto;\n  padding: 0.5rem;\n}\n.taskLeftSide {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n#taskContainer {\n  border: 1px solid black;\n  border-radius: 25px;\n  width: 50%;\n}\n\n.checkbox {\n  background-color: red;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  border: 1px solid hsla(0, 0%, 100%, 0.4);\n  cursor: pointer;\n}\n",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var r={};(()=>{t.d(r,{d:()=>E});var n=t(379),e=t.n(n),o=t(795),a=t.n(o),i=t(569),c=t.n(i),s=t(565),d=t.n(s),l=t(216),u=t.n(l),p=t(589),f=t.n(p),m=t(426),v={};v.styleTagTransform=f(),v.setAttributes=d(),v.insert=c().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=u(),e()(m.Z,v),m.Z&&m.Z.locals&&m.Z.locals;let h=document.getElementById("projectNameInput");class g{constructor(n){this.id=(100*Math.random()).toFixed(5),this.name=n,this.todoList=[],this.active=!1}}const y=document.getElementById("projectsContainer");function b(){E.forEach((n=>{let e=function(n,e){let t=document.createElement("button");t.classList.add("project"),t.setAttribute("data-ID",e);let r=document.createElement("img"),o=document.createElement("h4");r.setAttribute("src","../src/to-do-list-svgrepo-com.svg"),r.classList.add("projectImage","project"),o.textContent=n,o.classList.add("project"),t.appendChild(r),t.appendChild(o);let a=document.createElement("button");return a.classList.add("deleteProjectButton"),a.innerHTML="X",t.appendChild(a),t}(n.name,n.id);y.appendChild(e)}))}function x(){let n=""==h.value?(alert("Project name cannot be empty"),!1):h.value;if(0!=n){let e=new g(n);E.push(e),w(),b(),j(),document.querySelectorAll(".project").forEach((n=>{n.addEventListener("click",(function(n){!function(){const n=document.querySelector(".active");null!=n&&n.classList.remove("active")}(),function(n){"projectsContainer"===n.target.parentNode.id?n.target.classList.add("active"):n.target.parentNode.classList.add("active")}(n),function(){const n=document.querySelector(".active").getAttribute("data-id");E.forEach((e=>{e.id===n?e.active=!0:e.active=!1}))}()}))}))}}function j(){document.querySelectorAll(".deleteProjectButton").forEach((n=>{n.addEventListener("click",(function(n){const e=n.target.parentNode.dataset.id;!function(n,e){const t=n.findIndex((n=>n.id===e));n.splice(t,1)}(E,e),w(),b(),j(),console.log(E)}))}))}function w(){y.innerHTML=""}let E=[];document.getElementById("addProjectsButton").addEventListener("click",(function(){x(),h.value=""})),b()})()})();