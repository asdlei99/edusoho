!function(r){function e(e){for(var n,s,u=e[0],i=e[1],c=e[2],p=0,d=[];p<u.length;p++)s=u[p],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(r[n]=i[n]);for(l&&l(e);d.length;)d.shift()();return a.push.apply(a,c||[]),t()}function t(){for(var r,e=0;e<a.length;e++){for(var t=a[e],n=!0,u=1;u<t.length;u++){var i=t[u];0!==o[i]&&(n=!1)}n&&(a.splice(e--,1),r=s(s.s=t[0]))}return r}var n={},o={348:0},a=[];function s(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=r,s.c=n,s.d=function(r,e,t){s.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:t})},s.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},s.t=function(r,e){if(1&e&&(r=s(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var n in r)s.d(t,n,function(e){return r[e]}.bind(null,n));return t},s.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return s.d(e,"a",e),e},s.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},s.p="/static-dist/";var u=window.webpackJsonp=window.webpackJsonp||[],i=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var l=i;a.push([968,0]),t()}({22:function(r,e){r.exports=jQuery},968:function(r,e,t){"use strict";t.r(e);var n=t(8);$.validator.addMethod("spaceNoSupport",(function(r,e){return r.indexOf(" ")<0}),$.validator.format(Translator.trans("validate.have_spaces")));var o,a;$("#settings-password-form").validate({currentDom:"#password-save-btn",ajax:!0,rules:{currentPassword:{required:!0},newPassword:(o={required:!0,visible_character:!0,spaceNoSupport:!0},a=$("#password_level").val(),o["check_password_".concat(a)]=!0,o),confirmPassword:{required:!0,equalTo:"#form_newPassword",visible_character:!0}},submitSuccess:function(r){Object(n.a)("success",Translator.trans(r.message)),$(".modal").modal("hide"),window.location.reload()},submitError:function(r){Object(n.a)("danger",Translator.trans(r.responseJSON.message))}})}});