!function(e){var r={};function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var a in e)t.d(n,a,function(r){return e[r]}.bind(null,a));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="/static-dist/",t(t.s=948)}({948:function(e,r){var t=$("#student-remark-form").parents(".modal"),n=$("#student-remark-form"),a=n.validate({rules:{remark:{required:!1,maxlength:80}},messages:{remark:{maxlength:Translator.trans("course_manage.student_remark_validate_error_hint")}}});$(".js-student-remark-save-btn").click((function(e){a.form()&&($(e.currentTarget).button("loadding"),$.post(n.attr("action"),n.serialize(),(function(e){t.modal("hide");var r=n.data("user");cd.message({type:"success",message:Translator.trans("course_manage.student_remark_success_hint",{username:r}),delay:1e3}).on("close",(function(){window.location.reload()}))})).error((function(){var e=n.data("user");cd.message({type:"danger",message:Translator.trans("course_manage.student_remark_failed_hint",{username:e})})})))}))}});