!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const a=()=>{const e=document.createElement("section");e.id="main-section";const t=document.createElement("article"),n=document.createElement("img");document.createElement("p");return function(e){e.src="assets/graphics/maintab.png"}(n),t.appendChild(n),function(e){const t=["Gary's Great Restuarant is where you come to sit back, relax with your friends and let us provide you with tasty food to enhance your experience.","We have a small menu of quality TexMex BBQ offerings.  Everything is prepared freshed daily, including the tortillas.  Every bite is a bite of freshness","We also have a selection of craft beers.  Currently you can choose from IPA, Dark Lager, Pilsner or Mexican beer.  We rotate our selection regulary and seasonally.","Come on down and sink your teeth into greatness."];for(let n=0;n<t.length;n++){let a=document.createElement("p");a.textContent=t[n],e.appendChild(a)}}(t),e.appendChild(t),e};function o(e,t){for(let n=0;n<t.length;n++){let a=document.createElement("h4");if(a.textContent=t[n].item+" "+t[n].price,e.appendChild(a),""!==t[n].desc){let a=document.createElement("p");a.textContent=t[n].desc,a.classList.add("item-info"),e.appendChild(a)}}}function r(e){const t=document.createElement("h3");t.textContent="Sandwiches",e.appendChild(t),o(e,[{item:"Sliced Brisket",desc:"mesquite smoked bbq sauce",price:"$10"},{item:"Chopped Brisket",desc:"mesquite smoked bbq sauce",price:"$9"},{item:"Pulled Pork",desc:"mesquite smoked bbq sauce",price:"$8.50"},{item:"Pulled Chicken",desc:"mesquite smoked bbq sauce",price:"$8"}])}function c(e){const t=document.createElement("h3");t.textContent="Tortillas",e.appendChild(t),o(e,[{item:"Smoked Brisket",desc:"tomato serrano salsa",price:"$6"},{item:"Cerveza Beef Fajita",desc:"tomato serrano salsa",price:"$6"},{item:"Smoked Carnitas",desc:"tomato serrano salsa",price:"$5"},{item:"Pulled Pollo",desc:"tomato serrano salsa",price:"$4.50"}])}function i(e){o(e,[{item:"Charro Beans",desc:"",price:"$2.50"},{item:"Smoked Corn",desc:"",price:"$2.75"},{item:"Mexican Rice",desc:"",price:"$2.50"},{item:"Red Potato Salad",desc:"",price:"$2.75"}])}function s(e){o(e,[{item:"Dawn's IPA",desc:"",price:"$8"},{item:"Ridge Dark Lager",desc:"",price:"$7"},{item:"Shade Pilsner",desc:"",price:"$6.50"},{item:"Tios Cerveza",desc:"",price:"$7"},{item:"Cielto Cerveza",desc:"",price:"$7.50"}])}const d=()=>{const e=document.createElement("section");e.id="main-section";const t=document.createElement("article"),n=document.createElement("img"),a=document.createElement("section");return function(e){e.src="assets/graphics/menutab.jpg"}(n),function(e){const t=document.createElement("h1"),n=document.createElement("h2"),a=document.createElement("h2"),o=document.createElement("h2"),d=document.createElement("h2"),l=[t,n,a,o,d],m=[null,r,c,i,s];t.textContent="Our menu is simple but tasty!",n.textContent="Tex",a.textContent="Mex",o.textContent="Sides",d.textContent="Drinks";for(let t=0;t<l.length;t++)e.appendChild(l[t]),m[t]&&m[t](e)}(a),t.appendChild(n),t.appendChild(a),e.appendChild(t),e};function l(e){const t=e.target.parentNode,n=t.querySelectorAll("button");t.checkValidity()?(alert("Thank you for your comment."),t.reset()):n[0].click()}const m=()=>{const e=document.createElement("section");e.id="main-section";const t=document.createElement("article"),n=document.createElement("img"),a=document.createElement("form");a.id="comments",a.setAttribute("action","#"),a.setAttribute("method","post");const o=document.createElement("div");!function(e){e.src="assets/graphics/contacttab.jpg"}(n);const r=document.createElement("p");return r.textContent="We aim for perfection. Let us know when we didn't.  Let us know when we did.",function(e){const t=[{tag:"label",attrs:[{name:"for",value:"name"}],text:"Name",required:null},{tag:"input",attrs:[{name:"type",value:"text"},{name:"name",value:"name"}],text:"",required:!0},{tag:"label",attrs:[{name:"for",value:"email"}],text:"Email (optional)"},{tag:"input",attrs:[{name:"type",value:"email"},{name:"name",value:"email"}],text:"",required:!1},{tag:"label",attrs:[{name:"for",value:"comment"}],text:"Comment",required:null},{tag:"textarea",attrs:[{name:"name",value:"comment"},{name:"rows",value:"4"},{name:"cols",value:"60"}],text:"",required:!0}];for(let n=0;n<t.length;n++){let a=document.createElement(t[n].tag);"input"===t[n].tag&&a.classList.add("form-input");let o=t[n].attrs;for(let e=0;e<o.length;e++)a.setAttribute(o[e].name,o[e].value);t[n].required&&a.setAttribute("required","required"),""!==t[n].text&&(a.textContent=t[n].text),e.appendChild(a),e.appendChild(document.createElement("br"))}const n=document.createElement("button");n.setAttribute("type","submit"),n.classList.add("btn"),n.textContent="Submit",e.appendChild(n),n.addEventListener("click",l)}(a),t.appendChild(n),t.appendChild(r),o.appendChild(a),t.appendChild(o),e.appendChild(t),e};function u(e){const t=document.getElementById("container"),n=document.getElementById("main-section");n&&t.removeChild(n),t.appendChild(e)}document.addEventListener("DOMContentLoaded",function(){!function(){const e=["Main","Menu","Contact"],t=document.getElementById("container"),n=document.createElement("nav");n.id="main-nav";const o=document.createElement("ul");o.classList.add("tabrow");for(let t=0;t<e.length;t++){let n=document.createElement("li");n.textContent=e[t],0===t&&n.classList.add("selected"),o.appendChild(n),n.addEventListener("click",function(e){!function(e){switch(function(e){const t=[...document.getElementById("main-nav").children];for(let n=0;n<t.length;n++)if("UL"===t[n].tagName){let a=[...t[n].children];for(let t=0;t<a.length;t++)if(a[t].classList.contains("selected")){a[t].classList.remove("selected"),e.target.classList.add("selected");break}break}}(e),e.target.textContent){case"Main":u(a());break;case"Menu":u(d());break;case"Contact":u(m())}}(e)})}n.appendChild(o),t.appendChild(n)}(),u(a())})}]);