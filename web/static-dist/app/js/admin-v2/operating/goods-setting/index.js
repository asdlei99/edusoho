!function(e){function n(n){for(var r,l,s=n[0],i=n[1],u=n[2],c=0,p=[];c<s.length;c++)l=s[c],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&p.push(a[l][0]),a[l]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(d&&d(n);p.length;)p.shift()();return o.push.apply(o,u||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,s=1;s<t.length;s++){var i=t[s];0!==a[i]&&(r=!1)}r&&(o.splice(n--,1),e=l(l.s=t[0]))}return e}var r={},a={86:0},o=[];function l(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=e,l.c=r,l.d=function(e,n,t){l.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,n){if(1&n&&(e=l(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)l.d(t,r,function(n){return e[n]}.bind(null,r));return t},l.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="/static-dist/";var s=window.webpackJsonp=window.webpackJsonp||[],i=s.push.bind(s);s.push=n,s=s.slice();for(var u=0;u<s.length;u++)n(s[u]);var d=i;o.push([842,0]),t()}({842:function(e,n,t){"use strict";t.r(n);var r=t(33),a=t.n(r);cd.upload({el:"#cd-upload"}).on("success",(function(e,n,t){var r=$(e.currentTarget),o=$(r.data("target")),l=new FormData;l.append("token",r.data("token")),l.append("file",n),function(e){return new a.a((function(n,t){$.ajax({url:app.uploadUrl,type:"POST",cache:!1,data:e,processData:!1,contentType:!1}).done((function(e){n(e)}))}))}(l).then((function(e){o.attr("src",e.url),$('input[name="leading[qrcode]"]').val(e.uri)}))})).on("error",(function(e){$el.val(""),"FILE_SIZE_LIMIT"===e?cd.message({type:"danger",message:Translator.trans("uploader.size_2m_limit_hint")}):5006201===e&&cd.message({type:"danger",message:Translator.trans("uploader.type_denied_limit_hint")})}));var o=$("#goods-setting-form").validate({rules:{},ajax:!0,submitSuccess:function(e){cd.message({type:"success",message:Translator.trans("site.save_success_hint")}),$(".js-setting-save-btn").button("reset")}});function l(){o.resetForm(),1==$('input[name="leading_join_enabled"]:checked').val()?($("#leading-label").rules("add",{required:!0,maxlength:20}),$("#leading-description").rules("add",{required:!0,maxlength:40}),$('input[name="leading[qrcode]"]').rules("add",{required:!0})):($("#leading-label").rules("remove"),$("#leading-description").rules("remove"),$('input[name="leading[qrcode]"]').rules("remove"))}l(),$(".js-setting-save-btn").on("click",(function(e){var n=$(e.currentTarget);o.form()&&(n.button("loading"),$("#goods-setting-form").submit())})),$("input[type=radio][name=recommend_rule]").change((function(e){var n=$(e.currentTarget),t=$(".js-recommend-rule").find(".help-block");"hot"===n.val()?(t.addClass("hidden"),$(".js-recommend-rule-hot").removeClass("hidden")):"latest"===n.val()?(t.addClass("hidden"),$(".js-recommend-rule-latest").removeClass("hidden")):"label"===n.val()&&(t.addClass("hidden"),$(".js-recommend-rule-label").removeClass("hidden"))})),$('input[name="leading_join_enabled"]').on("change",(function(e){l()}))}});