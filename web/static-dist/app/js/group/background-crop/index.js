!function(t){function e(e){for(var n,a,i=e[0],p=e[1],c=e[2],f=0,d=[];f<i.length;f++)a=i[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in p)Object.prototype.hasOwnProperty.call(p,n)&&(t[n]=p[n]);for(l&&l(e);d.length;)d.shift()();return u.push.apply(u,c||[]),r()}function r(){for(var t,e=0;e<u.length;e++){for(var r=u[e],n=!0,i=1;i<r.length;i++){var p=r[i];0!==o[p]&&(n=!1)}n&&(u.splice(e--,1),t=a(a.s=r[0]))}return t}var n={},o={228:0},u=[];function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/static-dist/";var i=window.webpackJsonp=window.webpackJsonp||[],p=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var l=p;u.push([993,0]),r()}({993:function(t,e,r){"use strict";r.r(e);var n=new(r(191).a)({element:"#logo-crop",group:"group",cropedWidth:1140,cropedHeight:150});n.afterCrop=function(t){var e=$("#upload-picture-btn").data("url");$.post(e,{images:t},(function(){document.location.href=$("#upload-picture-btn").data("reloadUrl")}))},$("#upload-picture-btn").click((function(t){t.stopPropagation(),n.crop({imgs:{backgroundLogo:[1140,150]}})}))}});