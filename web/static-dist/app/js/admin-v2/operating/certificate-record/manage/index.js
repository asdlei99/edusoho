!function(t){function n(n){for(var r,c,a=n[0],u=n[1],l=n[2],s=0,p=[];s<a.length;s++)c=a[s],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);for(f&&f(n);p.length;)p.shift()();return i.push.apply(i,l||[]),e()}function e(){for(var t,n=0;n<i.length;n++){for(var e=i[n],r=!0,a=1;a<e.length;a++){var u=e[a];0!==o[u]&&(r=!1)}r&&(i.splice(n--,1),t=c(c.s=e[0]))}return t}var r={},o={73:0},i=[];function c(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=r,c.d=function(t,n,e){c.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},c.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,n){if(1&n&&(t=c(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)c.d(e,r,function(n){return t[n]}.bind(null,r));return e},c.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return c.d(n,"a",n),n},c.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},c.p="/static-dist/";var a=window.webpackJsonp=window.webpackJsonp||[],u=a.push.bind(a);a.push=n,a=a.slice();for(var l=0;l<a.length;l++)n(a[l]);var f=u;i.push([828,0]),e()}({22:function(t,n){t.exports=jQuery},828:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return u}));var r=e(2),o=e.n(r),i=e(3),c=e.n(i),a=e(8),u=function(){function t(){o()(this,t),this.init()}return c()(t,[{key:"init",value:function(){this.initEvent()}},{key:"initEvent",value:function(){$("#record-table").on("click",".js-cancel",(function(){confirm(Translator.trans("admin_v2.certificate.record.cancel.hint"))&&$.post($(this).data("url"),(function(t){t?(Object(a.a)("success",Translator.trans("admin_v2.certificate.record.cancel.success_hint"),1),window.location.reload()):Object(a.a)("danger",Translator.trans("admin_v2.certificate.record.cancel.failure_hint"),1)}))}))}}]),t}();new u}});