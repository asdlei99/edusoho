!function(e){function t(t){for(var n,o,s=t[0],u=t[1],c=t[2],l=0,h=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&h.push(a[o][0]),a[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(d&&d(t);h.length;)h.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,s=1;s<r.length;s++){var u=r[s];0!==a[u]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={291:0},i=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/static-dist/";var s=window.webpackJsonp=window.webpackJsonp||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var d=u;i.push([1349,0]),r()}({1349:function(e,t,r){"use strict";r.r(t);var n=r(2),a=r.n(n),i=r(3),o=r.n(i),s=r(202),u=r(8),c=$(".js-time-left"),d=$(".js-sms-send"),l=$(".js-fetch-btn-text"),h=function e(){var t=c.text();c.html(t-1),t-1>0?(d.attr("disabled",!0),setTimeout(e,1e3)):(c.html(""),l.html(Translator.trans("oauth.send.validate_message")),d.removeAttr("disabled"))},g=r(42),f=r(84),m=r(177);new(function(){function e(){a()(this,e),this.$form=$("#third-party-create-account-form"),this.$btn=$(".js-submit-btn"),this.validator=null,this.dragCaptchaToken="",this.smsToken=null,this.$sendBtn=$(".js-sms-send"),this.drag=!!$("#drag-btn").length&&new f.a($("#drag-btn"),$(".js-jigsaw"),{limitType:"bind_register"}),this.init()}return o()(e,[{key:"init",value:function(){this.setValidateRule(),this.initValidator(),this.smsSend(),this.submitForm(),this.removeSmsErrorTip(),this.dragEvent(),this.initRegisterVisitIdField()}},{key:"setValidateRule",value:function(){$.validator.addMethod("spaceNoSupport",(function(e,t){return e.indexOf(" ")<0}),$.validator.format(Translator.trans("validate.have_spaces")))}},{key:"dragEvent",value:function(){var e=this;this.drag&&this.drag.on("success",(function(t){e.$sendBtn.attr("disabled",!1),e.dragCaptchaToken=t.token})),$(".js-drag-jigsaw").hasClass("hidden")||this.addDragCaptchaRules()}},{key:"initValidator",value:function(){$.validator.addMethod("sms_code_required",(function(e,t){return!!($("#originalMobileAccount").val()&&e||!$("#originalMobileAccount").val())}),$.validator.format(Translator.trans("auth.mobile_captcha_required_error_hint"))),$.validator.addMethod("account_password",(function(e,t){return!!($("#originalEmailAccount").val()&&e||!$("#originalMobileAccount").val())}),$.validator.format(Translator.trans("auth.login.password_required_error_hint"))),this.rules={username:{required:!0,byte_minlength:4,byte_maxlength:18,nickname:!0,chinese_alphanumeric:!0,es_remote:{type:"get"}},invitedCode:{required:!1,reg_inviteCode:!0,es_remote:{type:"get"}},password:{required:!0,minlength:5,maxlength:20,spaceNoSupport:!0},confirmPassword:{required:!0,equalTo:"#password"},sms_code:{required:!0,unsigned_integer:!0,rangelength:[6,6]},agree_policy:{required:!0},originalMobileAccount:{required:!1,phone:!0,es_remote:{type:"get",callback:function(e){e?$(".js-sms-send").removeAttr("disabled"):$(".js-sms-send").attr("disabled","true")}}},originalEmailAccount:{required:!1,email:!0,es_remote:{type:"get"}},originalAccountPassword:{required:!1,account_password:!0},accountSmsCode:{required:!1,sms_code_required:!0,unsigned_integer:!0,rangelength:[6,6]}},this.validator=this.$form.validate({rules:this.rules,messages:{sms_code:{required:Translator.trans("site.captcha_code.required"),rangelength:Translator.trans("validate.sms_code.message")},agree_policy:{required:Translator.trans("validate.valid_policy_input.message")}}})}},{key:"smsSend",value:function(){var e=this,t=this,r=$("#captcha_code");this.$sendBtn.length&&this.$sendBtn.click((function(n){t.smsSended||($.ajaxSetup({global:!1}),t.smsSended=!0);var a=(new m.a).getCoordinate(n,$("meta[name=csrf-token]").attr("content"));t.$sendBtn.attr("disabled",!0);var i=$(n.currentTarget).data("type"),o={type:i,unique:"register"===i?1:0,mobile:"register"===i?$(".js-account").text():$("#originalMobileAccount").val(),dragCaptchaToken:e.dragCaptchaToken,encryptedPoint:a,phrase:r.val()};g.a.sms.send({data:o}).then((function(t){var r;$.ajaxSetup({global:!0}),e.smsToken=t.smsToken,r=120,c.html(r),l.html(Translator.trans("site.data.get_sms_code_again_btn")),Object(u.a)("success",Translator.trans("site.data.get_sms_code_success_hint")),h()})).catch((function(e){t.drag&&($.ajaxSetup({global:!0}),t.addDragCaptchaRules(),t.drag.initDragCaptcha(),$(".js-drag-jigsaw").removeClass("hidden"))}))}))}},{key:"submitForm",value:function(){var e=this;this.$btn.click((function(t){var r=$(t.target);if(e.validator.form()){r.button("loading");var n={nickname:$("#username").val(),password:$("#password").val(),mobile:$(".js-account").html(),smsToken:e.smsToken,smsCode:$("#sms-code").val(),captchaToken:e.captchaToken,phrase:$("#captcha_code").val(),dragCaptchaToken:$('[name="dragCaptchaToken"]').val(),invitedCode:$("#invitedCode").length>0?$("#invitedCode").val():"",registerVisitId:$('[name="registerVisitId"]').val(),originalMobileAccount:$('[name="originalMobileAccount"]').val(),accountSmsCode:$('[name="accountSmsCode"]').val(),originalEmailAccount:$('[name="originalEmailAccount"]').val(),originalAccountPassword:$('[name="originalAccountPassword"]').val()},a=Translator.trans("oauth.send.sms_code_error_tip");$.post(r.data("url"),n,(function(e){r.button("reset"),1===e.success?window.location.href=e.url:$(".js-password-error").length||r.prev().addClass("has-error").append('<p id="password-error" class="form-error-message js-password-error">'.concat(a,"</p>"))})).error((function(e){r.button("reset")}))}})),Object(s.a)(this.$form,this.$btn)}},{key:"addDragCaptchaRules",value:function(){$('[name="dragCaptchaToken"]').rules("add",{required:!0,messages:{required:Translator.trans("auth.register.drag_captcha_tips")}})}},{key:"removeSmsErrorTip",value:function(){$("#sms-code").focus((function(){var e=$(".js-password-error");e.length&&e.remove()}))}},{key:"initRegisterVisitIdField",value:function(){$(document).ready((function(){"undefined"!==window._VISITOR_ID&&$('[name="registerVisitId"]').val(window._VISITOR_ID)}))}}]),e}())},177:function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));var n=r(2),a=r.n(n),i=r(3),o=r.n(i),s=2654435769;function u(e,t){var r=e.length,n=r<<2;if(t){var a=e[r-1];if(a<(n-=4)-3||a>n)return null;n=a}for(var i=0;i<r;i++)e[i]=String.fromCharCode(255&e[i],e[i]>>>8&255,e[i]>>>16&255,e[i]>>>24&255);var o=e.join("");return t?o.substring(0,n):o}function c(e,t){var r,n=e.length,a=n>>2;0!=(3&n)&&++a,t?(r=new Array(a+1))[a]=n:r=new Array(a);for(var i=0;i<n;++i)r[i>>2]|=e.charCodeAt(i)<<((3&i)<<3);return r}function d(e){return 4294967295&e}function l(e,t,r,n,a,i){return(r>>>5^t<<2)+(t>>>3^r<<4)^(e^t)+(i[3&n^a]^r)}function h(e){return e.length<4&&(e.length=4),e}function g(e){if(/^[\x00-\x7f]*$/.test(e))return e;for(var t=[],r=e.length,n=0,a=0;n<r;++n,++a){var i=e.charCodeAt(n);if(i<128)t[a]=e.charAt(n);else if(i<2048)t[a]=String.fromCharCode(192|i>>6,128|63&i);else{if(!(i<55296||i>57343)){if(n+1<r){var o=e.charCodeAt(n+1);if(i<56320&&56320<=o&&o<=57343){var s=65536+((1023&i)<<10|1023&o);t[a]=String.fromCharCode(240|s>>18&63,128|s>>12&63,128|s>>6&63,128|63&s),++n;continue}}throw new Error("Malformed string")}t[a]=String.fromCharCode(224|i>>12,128|i>>6&63,128|63&i)}}return t.join("")}function f(e,t){return null==e||0===e.length?e:(e=g(e),t=g(t),u(function(e,t){var r,n,a,i,o,u,c=e.length,h=c-1;for(n=e[h],a=0,u=0|Math.floor(6+52/c);u>0;--u){for(i=(a=d(a+s))>>>2&3,o=0;o<h;++o)r=e[o+1],n=e[o]=d(e[o]+l(a,r,n,o,i,t));r=e[0],n=e[h]=d(e[h]+l(a,r,n,h,i,t))}return e}(c(e,!0),h(c(t,!1))),!1))}var m=function(){function e(){a()(this,e)}return o()(e,[{key:"getCoordinate",value:function(e,t){var r=t,n=e.screenX+","+e.screenY;return"1."+btoa(f(n,r))}}]),e}()},202:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n=function(e,t){e.keypress((function(e){13==e.which&&(t.trigger("click"),e.preventDefault())}))}},22:function(e,t){e.exports=jQuery}});