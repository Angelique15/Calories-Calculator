/*! For license information please see 723.5af8dfea.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkCalories_Calculator=self.webpackChunkCalories_Calculator||[]).push([[723],{8723:function(t,n,e){e.r(n),e.d(n,{default:function(){return w}});var r,o,i=e(5861),a=e(9439),c=e(2791),u=e(9434),s=e(7689),l=e(1087),h=e(9273),p=e(168),f=e(5867),d=f.ZP.div(r||(r=(0,p.Z)(["\n  height: 105vh;\n  padding: 0 0 0 50px;\n  align-items: center;\n\n  h3 {\n    margin-top: 8vh;\n    margin-bottom: 4vh;\n    color: #fc842d;\n    font-family: Verdana;\n  }\n\n  input {\n    width: 300px;\n    display: flex;\n    padding-top: 25px;\n    padding-bottom: 18px;\n    font-family: Verdana;\n    border: none;\n    border-bottom: 3px solid #e0e0e0;\n    outline: none;\n    background-color: transparent;\n    transition: border-bottom 0.3s ease, background-color 0.3s ease;\n\n    &:focus,\n    &:not(:placeholder-shown) {\n      background-color: rgba(255, 193, 7, 0.1);\n      border-bottom: 3px solid #fc842d;\n    }\n  }\n\n  input::placeholder {\n    font-size: 14px;\n    font-weight: 700;\n    color: #9b9faa;\n  }\n\n  button {\n    margin-top: 40px;\n    width: 140px;\n    height: 50px;\n    border-radius: 30px;\n    border: 3px solid #fc842d;\n    background-color: white;\n    font-family: Verdana;\n    font-size: 15px;\n    font-weight: 700;\n    color: #fc842d;\n    transition: background-color 0.3s, color 0.3s;\n    cursor: pointer;\n\n    &:hover {\n      background-color: #fc842d;\n      color: white;\n    }\n\n    &:active {\n      color: white;\n    }\n\n    &:focus {\n      outline: none;\n      box-shadow: 0 0 5px rgba(252, 132, 45, 0.5);\n    }\n  }\n\n  button:last-child {\n    margin-left: 20px;\n  }\n\n  button.register-active {\n    background-color: #fc842d;\n    color: white;\n    border: 3px solid white;\n    &:hover {\n      background-color: #e05e00;\n    }\n  }\n\n  /******************************************/\n\n  @media screen and (min-width: 1120px) {\n  }\n\n  /******************************************/\n\n  @media screen and (min-width: 769px) and (max-width: 1024px) {\n    height: 90vh;\n    margin-left: 50px;\n    padding: 0;\n    align-items: center;\n\n    h3 {\n      margin-top: 16vh;\n      font-size: 20px;\n      margin-bottom: 6vh;\n    }\n\n    input {\n      width: 40%;\n      padding-top: 40px;\n      padding-bottom: 20px;\n      height: auto;\n    }\n\n    input::placeholder {\n      font-size: 16px;\n    }\n\n    button {\n      margin-top: 60px;\n      margin-bottom: 30px;\n      height: 60px;\n      font-size: 16px;\n    }\n  }\n\n  /******************************************/\n\n  @media (max-width: 768px) {\n    padding: 0;\n    align-items: center;\n    width: 100%;\n    height: auto;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n\n    h3 {\n      font-size: 24px;\n      margin-top: 6vh;\n      margin-bottom: 6vh;\n    }\n\n    input {\n      width: 80%;\n      padding-top: 40px;\n      padding-bottom: 30px;\n      height: auto;\n    }\n\n    input::placeholder {\n      font-size: 18px;\n    }\n\n    button {\n      margin-top: 60px;\n      width: 200px;\n      height: 60px;\n      font-size: 18px;\n    }\n\n    button:last-child {\n      margin-left: 0px;\n      margin-top: 30px;\n      margin-bottom: 30px;\n    }\n  }\n"]))),g=f.ZP.div(o||(o=(0,p.Z)(["\n  margin-top: 20px;\n  width: 35%;\n  display: flex;\n  justify-content: space-around;\n\n  @media (max-width: 768px) {\n    width: 41%;\n  }\n"]))),m=e(9085),v=e(1243),x=e(2148),y=e(184);function b(){b=function(){return n};var t,n={},e=Object.prototype,r=e.hasOwnProperty,o=Object.defineProperty||function(t,n,e){t[n]=e.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{s({},"")}catch(t){s=function(t,n,e){return t[n]=e}}function l(t,n,e,r){var i=n&&n.prototype instanceof m?n:m,a=Object.create(i.prototype),c=new Z(r||[]);return o(a,"_invoke",{value:C(t,e,c)}),a}function h(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}n.wrap=l;var p="suspendedStart",f="executing",d="completed",g={};function m(){}function v(){}function x(){}var y={};s(y,a,(function(){return this}));var w=Object.getPrototypeOf,E=w&&w(w(O([])));E&&E!==e&&r.call(E,a)&&(y=E);var L=x.prototype=m.prototype=Object.create(y);function j(t){["next","throw","return"].forEach((function(n){s(t,n,(function(t){return this._invoke(n,t)}))}))}function k(t,n){function e(o,i,a,c){var u=h(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&r.call(l,"__await")?n.resolve(l.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):n.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new n((function(n,o){e(t,r,n,o)}))}return i=i?i.then(o,o):o()}})}function C(n,e,r){var o=p;return function(i,a){if(o===f)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var u=N(c,r);if(u){if(u===g)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===p)throw o=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=f;var s=h(n,e,r);if("normal"===s.type){if(o=r.done?d:"suspendedYield",s.arg===g)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=d,r.method="throw",r.arg=s.arg)}}}function N(n,e){var r=e.method,o=n.iterator[r];if(o===t)return e.delegate=null,"throw"===r&&n.iterator.return&&(e.method="return",e.arg=t,N(n,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var i=h(o,n.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,g;var a=i.arg;return a?a.done?(e[n.resultName]=a.value,e.next=n.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,g):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function _(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function S(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function Z(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function O(n){if(n||""===n){var e=n[a];if(e)return e.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var o=-1,i=function e(){for(;++o<n.length;)if(r.call(n,o))return e.value=n[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(typeof n+" is not iterable")}return v.prototype=x,o(L,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:v,configurable:!0}),v.displayName=s(x,u,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===v||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,s(t,u,"GeneratorFunction")),t.prototype=Object.create(L),t},n.awrap=function(t){return{__await:t}},j(k.prototype),s(k.prototype,c,(function(){return this})),n.AsyncIterator=k,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new k(l(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(L),s(L,u,"Generator"),s(L,a,(function(){return this})),s(L,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=O,Z.prototype={constructor:Z,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!n)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var e=this;function o(r,o){return c.type="throw",c.arg=n,e.next=r,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),g},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),S(e),g}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;S(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,e,r){return this.delegate={iterator:O(n),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=t),g}},n}var w=function(){var t,n=(0,c.useState)(""),e=(0,a.Z)(n,2),r=e[0],o=e[1],p=(0,c.useState)(""),f=(0,a.Z)(p,2),w=f[0],E=f[1],L=(0,c.useState)(""),j=(0,a.Z)(L,2),k=j[0],C=j[1],N=(0,c.useState)(""),_=(0,a.Z)(N,2),S=_[0],Z=_[1],O=(0,c.useState)(""),A=(0,a.Z)(O,2),P=A[0],T=A[1],z=(0,c.useState)(""),F=(0,a.Z)(z,2),G=F[0],I=F[1],R=(0,c.useState)(!1),U=(0,a.Z)(R,2),V=U[0],Y=U[1],H=(0,c.useState)(!1),q=(0,a.Z)(H,2),B=q[0],D=q[1],J=(0,u.I0)(),K=(0,s.s0)(),M=function(){Y(!0)};return(0,y.jsxs)("div",{children:[(0,y.jsxs)(d,{children:[(0,y.jsx)(g,{children:(0,y.jsx)("h3",{children:"CREAR UNA CUENTA"})}),(0,y.jsx)("input",{type:"text",placeholder:"Nombre *",value:r,onChange:function(t){return o(t.target.value)},onFocus:M}),S&&(0,y.jsx)("p",{className:"error",children:S}),(0,y.jsx)("input",{type:"email",placeholder:"Correo Electr\xf3nico *",value:w,onChange:function(t){return E(t.target.value)},onFocus:M}),P&&(0,y.jsx)("p",{className:"error",children:P}),(0,y.jsx)("input",{type:"password",placeholder:"Contrase\xf1a *",value:k,onChange:function(t){return C(t.target.value)},onFocus:M}),G&&(0,y.jsx)("p",{className:"error",children:G}),(0,y.jsx)("button",{onClick:function(){return(t=t||(0,i.Z)(b().mark((function t(){var n;return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(D(!0),n=!0,r?Z(""):(Z("El campo de Nombre es obligatorio"),n=!1),w?w.includes("@")||(T('El correo electr\xf3nico debe contener "@"'),n=!1):(T("El campo de Correo Electr\xf3nico es obligatorio"),n=!1),k?k.length<8&&(I("La contrase\xf1a debe tener al menos 8 caracteres"),n=!1):(I("El campo de Contrase\xf1a es obligatorio"),n=!1),!n){t.next=20;break}return t.prev=6,t.next=9,v.Z.post("http://localhost:3001/api/users/signup",{username:r,email:w,password:k});case 9:201===t.sent.status?(J((0,h.x4)({email:w,password:k})),K("/calculate"),m.Am.success("\xa1Registro exitoso! Redirigiendo...")):m.Am.error("Hubo un problema durante el registro. Por favor, int\xe9ntalo de nuevo."),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(6),console.error("Error al registrarse:",t.t0),m.Am.error("Error al registrarse");case 17:return t.prev=17,D(!1),t.finish(17);case 20:setTimeout((function(){Z(""),T(""),I("")}),5e3);case 21:case"end":return t.stop()}}),t,null,[[6,13,17,20]])})))).apply(this,arguments)},className:V?"register-active":"",disabled:B,children:B?"Cargando...":"CREAR UNA CUENTA"}),(0,y.jsx)(l.rU,{to:"/login",children:(0,y.jsx)("button",{children:"INICIAR SESI\xd3N"})})]}),B&&(0,y.jsx)(x.Z,{})," "]})}}}]);
//# sourceMappingURL=723.5af8dfea.chunk.js.map