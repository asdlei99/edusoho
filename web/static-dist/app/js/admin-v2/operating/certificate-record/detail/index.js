!function(t){function e(e){for(var r,a,c=e[0],u=e[1],l=e[2],f=0,d=[];f<c.length;f++)a=c[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);for(s&&s(e);d.length;)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={72:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/static-dist/";var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var s=u;i.push([724,0]),n()}({22:function(t,e){t.exports=jQuery},724:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return l}));var r=n(2),o=n.n(r),i=n(3),a=n.n(i),c=n(8),u=$("#modal"),l=function(){function t(){o()(this,t),this.init()}return a()(t,[{key:"init",value:function(){$(".js-loading-text").length>0&&$.post($(".js-loading-text").data("url"),(function(t){var e='<img class="mll" src="data:image/png;base64,'+t+'" width="520px" />';$(".js-loading-text").remove(),$(".js-certificate-image").html(e)}));var t=$("#cancel-certificate");t.on("click",(function(e){if(!confirm(Translator.trans("admin_v2.certificate.record.cancel.hint")))return!1;var n=t.data("url");t.button("loading"),$.post(n,(function(t){u.modal("hide"),Object(c.a)("success",Translator.trans("admin_v2.certificate.record.cancel.success_hint")),window.location.reload()})).error((function(){Object(c.a)("success",Translator.trans("admin_v2.certificate.record.cancel.failure_hint"))}))}))}}]),t}();new l}});