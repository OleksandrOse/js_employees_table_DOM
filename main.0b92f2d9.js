parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return r(e)||a(e)||n(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}function a(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function r(e){if(Array.isArray(e))return o(e)}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var i=document.querySelector("table"),c=document.querySelector("body"),l=e(i.children[0].children[0].children);i.addEventListener("click",function(t){var n=e(i.children[1].children);if(t.target.parentElement.classList.contains("active")||n.forEach(function(e){return e.classList.remove("active")}),"TD"===t.target.tagName&&t.target.parentElement.classList.add("active"),"TH"===t.target.tagName){var a="",r=t.target.cellIndex,o=t.target.textContent;switch(t.target.classList.contains(o)||l.forEach(function(e){return e.classList.remove("asc","Name","Position","Office","Age","Salary")}),o){case"Name":case"Position":case"Office":t.target.classList.toggle("asc"),a=n.sort(function(e,t){return e.children[r].textContent.localeCompare(t.children[r].textContent)}),t.target.classList.contains("asc")||a.reverse(),t.target.classList.add(o);break;case"Age":t.target.classList.toggle("asc"),a=n.sort(function(e,t){return+e.children[r].textContent-+t.children[r].textContent}),t.target.classList.contains("asc")||a.reverse(),t.target.classList.add(o);break;case"Salary":t.target.classList.toggle("asc");var c=function(e){return+e.children[r].textContent.split(",").join("").slice(1)};a=n.sort(function(e,t){return c(e)-c(t)}),t.target.classList.contains("asc")||a.reverse(),t.target.classList.add(o)}a.forEach(function(e){return i.children[1].appendChild(e)})}});var s=document.createElement("form");s.classList.add("new-employee-form"),s.innerHTML='\n  <label>Name:\n    <input name="name" type="text" data-qa="name">\n  </label>\n  <label>Position:\n    <input name="position" type="text" data-qa="position">\n  </label>\n  <label>Office:\n    <select name="office" data-qa="office">\n      <option value="Tokyo">Tokyo</option>\n      <option value="Singapore">Singapore</option>\n      <option value="London">London</option>\n      <option value="New York">New York</option>\n      <option value="Edinburgh">Edinburgh</option>\n      <option value="San Francisco">San Francisco</option>\n    </select>\n  </label>\n  <label>Age:\n    <input name="age" type="text" data-qa="age">\n  </label>\n  <label>Salary:\n    <input name="salary" type="text" data-qa="salary">\n  </label>\n  <button>Save to table</button>\n',c.append(s),s.addEventListener("submit",function(e){e.preventDefault();var t=new FormData(s),n=Object.fromEntries(t.entries()),a=n.name,r=n.position,o=n.office,c=n.age,l=n.salary;for(var d in n)if(""===n[d])return void u(450,30,"Error ".concat(d),"Enter ".concat(d),"error");if(isNaN(+c))u(450,30,"Error age","Age must be number","error");else if(isNaN(+l))u(450,30,"Error age","Salary must be number","error");else if(a.length<4)u(450,30,"Error name","Name has 4 letters or more.","error");else if(c<18)u(450,30,"Age field","The employee must be 18 years old","error");else if(c>90)u(450,30,"Age field","The employee must be under 90 years old","error");else{var f="$".concat(l.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g,"$1,")),p=document.createElement("tr");p.innerHTML="\n    <td>".concat(a,"</td>\n    <td>").concat(r,"</td>\n    <td>").concat(o,"</td>\n    <td>").concat(c,"</td>\n    <td>").concat(f,"</td>\n  "),i.children[1].append(p),u(450,30,"Add to table","Employee add to table","success"),document.querySelectorAll("input").forEach(function(e){e.value=""})}});var u=function(e,t,n,a,r){var o=document.createElement("div");o.className="notification ".concat(r),o.setAttribute("data-qa","notification"),o.style.top="".concat(e,"px"),o.style.right="".concat(t,"px"),o.innerHTML='\n    <h2 class="title">'.concat(n,"</h2>\n    <p>").concat(a,"</p>\n  "),c.insertBefore(o,c.lastChild),setTimeout(function(){return o.remove()},3e3)},d=null;function f(e,t){e.innerHTML='<input type="text" class="cell-input">',(d=document.querySelector(".cell-input")).onkeyup=function(e){"Enter"===e.key&&this.blur()},d.onblur=function(){p(e,t)},e.replaceWith(d),d.focus()}function p(e,t){""===d.value?e.innerHTML=t:e.innerHTML=d.value,d.replaceWith(e)}i.ondblclick=function(e){"TD"===e.target.tagName&&f(e.target,e.target.textContent)};
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.0b92f2d9.js.map