!function(o){var e={};function t(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return o[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=o,t.c=e,t.d=function(o,e,n){t.o(o,e)||Object.defineProperty(o,e,{enumerable:!0,get:n})},t.r=function(o){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},t.t=function(o,e){if(1&e&&(o=t(o)),8&e)return o;if(4&e&&"object"==typeof o&&o&&o.__esModule)return o;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:o}),2&e&&"string"!=typeof o)for(var r in o)t.d(n,r,function(e){return o[e]}.bind(null,r));return n},t.n=function(o){var e=o&&o.__esModule?function(){return o.default}:function(){return o};return t.d(e,"a",e),e},t.o=function(o,e){return Object.prototype.hasOwnProperty.call(o,e)},t.p="/static-dist/",t(t.s=1024)}({1024:function(o,e){$("#notebook-list").on("click",".media",(function(){window.location.href=$(this).find(".notebook-go").attr("href")}));var t=$("#notebook");t.on("click",".notebook-note-collapsed",(function(){$(this).removeClass("notebook-note-collapsed")})),t.on("click",".notebook-note-collapse-bar",(function(){$(this).parents(".notebook-note").addClass("notebook-note-collapsed")})),t.on("click",".notebook-note-delete",(function(){var o=$(this);if(!confirm(Translator.trans("course.notebook.delete_hint")))return!1;$.post(o.data("url"),(function(){o.parents(".notebook-note").remove()}))}))}});