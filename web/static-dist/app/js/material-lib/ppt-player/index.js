!function(o){function e(e){for(var n,t,r=e[0],a=e[1],l=e[2],i=0,s=[];i<r.length;i++)t=r[i],Object.prototype.hasOwnProperty.call(u,t)&&u[t]&&s.push(u[t][0]),u[t]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(o[n]=a[n]);for(p&&p(e);s.length;)s.shift()();return f.push.apply(f,l||[]),c()}function c(){for(var e,n=0;n<f.length;n++){for(var t=f[n],r=!0,a=1;a<t.length;a++){var l=t[a];0!==u[l]&&(r=!1)}r&&(f.splice(n--,1),e=i(i.s=t[0]))}return e}var t={},u={177:0},f=[];function i(e){if(t[e])return t[e].exports;var n=t[e]={i:e,l:!1,exports:{}};return o[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=o,i.c=t,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)i.d(t,r,function(e){return n[e]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/static-dist/";var n=window.webpackJsonp=window.webpackJsonp||[],r=n.push.bind(n);n.push=e,n=n.slice();for(var a=0;a<n.length;a++)e(n[a]);var p=r;f.push([607,0]),c()}({161:function(e,n,t){"use strict";t.d(n,"a",function(){return A});var r=t(2),a=t.n(r),l=t(0),s=t.n(l),i=t(1),o=t.n(i),c=t(7),u=t.n(c),f=t(4),p=t.n(f),d=t(8),h=t.n(d),g=t(52),v=t(79),m=t.n(v);function y(r){return function(){var e,n=p()(r);if(function(){if("undefined"==typeof Reflect||!a.a)return;if(a.a.sham)return;if("function"==typeof Proxy)return 1;try{return Date.prototype.toString.call(a()(Date,[],function(){})),1}catch(e){return}}()){var t=p()(this).constructor;e=a()(n,arguments,t)}else e=n.apply(this,arguments);return u()(this,e)}}var A=function(e){h()(i,e);var l=y(i);function i(e){var n,t=e.element,r=e.slides,a=e.watermark;return s()(this,i),(n=l.call(this)).element=$(t),n.slides=r||[],n.watermark=a||"",n._KEY_ACTION_MAP={37:n._onPrev,39:n._onNext,38:n._onLast,40:n._onFirst},n.total=n.slides.length,n._page=0,n.placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",n._init(),n}return o()(i,[{key:"_render",value:function(){this.element.html('\n      <div class="slide-player">\n        <div class="slide-player-body loading-background"></div>\n        <div class="slide-notice">\n          <div class="header">{{ \'site.data_last_picture\'|trans }}\n            <button type="button" class="close">×</button>\n          </div>\n        </div>\n      \n        <div class="slide-player-control clearfix">\n          <a href="javascript:" class="goto-first">\n            <span class="glyphicon glyphicon-step-backward"></span>\n          </a>\n          <a href="javascript:" class="goto-prev">\n            <span class="glyphicon glyphicon-chevron-left"></span>\n          </a>\n          <a href="javascript:" class="goto-next">\n            <span class="glyphicon glyphicon-chevron-right"></span>\n          </a>\n          <a href="javascript:" class="goto-last">\n            <span class="glyphicon glyphicon-step-forward"></span>\n          </a>\n          <a href="javascript:" class="fullscreen">\n            <span class="glyphicon glyphicon-fullscreen"></span>\n          </a>\n          <div class="goto-page-input">\n            <input type="text" class="goto-page form-control input-sm" value="1">&nbsp;/&nbsp;\n              <span class="total"></span>\n          </div>\n        </div>\n      </div>'),this.element.find(".total").text(this.total);var e=this.slides.reduce(function(e,n,t){return e+='<img data-src="'.concat(n,'" class="slide" data-page="').concat(t+1,'">')},"");this.element.find(".slide-player-body").html(e),this.watermark&&this.element.append('<div class="slide-player-watermark">'.concat(this.watermark,"</div>"))}},{key:"_init",value:function(){this._render(),this._bindEvents(),this._onFirst()}},{key:"_lazyLoad",value:function(e){for(var n=e;n<e+4&&!(n>this.total);n++){var t=this._getSlide(n);t.attr("src")||t.attr("src",t.data("src"))}}},{key:"_getSlide",value:function(e){return this.element.find(".slide-player-body .slide").eq(e-1)}},{key:"_bindEvents",value:function(){var t=this;$(document).on("keydown",function(e){t._KEY_ACTION_MAP[e.keyCode]&&t._KEY_ACTION_MAP[e.keyCode].call(t)}),this.element.on("click",".goto-next",function(e){return t._onNext(e)}),this.element.on("click",".goto-prev",function(e){return t._onPrev(e)}),this.element.on("click",".goto-first",function(e){return t._onFirst(e)}),this.element.on("click",".goto-last",function(e){return t._onLast(e)}),this.element.on("click",".fullscreen",function(e){return t._onFullScreen(e)}),this.element.on("change",".goto-page",function(e){return t._onChangePage(e)});var r=this;this.on("change",function(e){var n=e.current;e.before;n==r.total&&r.emit("end",{page:t.total})})}},{key:"_onNext",value:function(){this.page!==this.total?this.page++:this.emit("end",{page:this.total})}},{key:"_onPrev",value:function(){1!=this.page&&this.page--}},{key:"_onFirst",value:function(){this.page=1}},{key:"_onLast",value:function(){this.page=this.total}},{key:"_onFullScreen",value:function(){var e=!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);m.a.enabled?m.a.isFullscreen?m.a.toggle():m.a.request():e&&$("#task-content-iframe",parent.document).toggleClass("ios-full-screen")}},{key:"_onChangePage",value:function(e){this.page=$(e.target).val()}},{key:"page",get:function(){return this._page},set:function(e){var n=this,t=this.page,r=e;r>this.total&&(this.element.find(".goto-page").val(r),this._page=r),r<1&&(this.element.find(".goto-page").val(t),this._page=t),t&&this.element.find(".slide-player-body .slide").eq(t-1).removeClass("active");var a=this._getSlide(r);a.attr("src")?a.addClass("active"):(a.load(function(){n._page==a.data("page")&&a.addClass("active")}),a.attr("src",a.data("src"))),this._lazyLoad(r),this.element.find(".goto-page").val(r),this._page=r,this.emit("change",{current:r,before:t})}}]),i}(g.a)},52:function(e,n,t){"use strict";t.d(n,"a",function(){return A});var r=t(2),a=t.n(r),l=t(58),i=t.n(l),s=t(0),o=t.n(s),c=t(1),u=t.n(c),f=t(7),p=t.n(f),d=t(4),h=t.n(d),g=t(8),v=t.n(g),m=t(19);function y(r){return function(){var e,n=h()(r);if(function(){if("undefined"==typeof Reflect||!a.a)return;if(a.a.sham)return;if("function"==typeof Proxy)return 1;try{return Date.prototype.toString.call(a()(Date,[],function(){})),1}catch(e){return}}()){var t=h()(this).constructor;e=a()(n,arguments,t)}else e=n.apply(this,arguments);return p()(this,e)}}var A=function(e){v()(t,e);var n=y(t);function t(){return o()(this,t),n.apply(this,arguments)}return u()(t,[{key:"delay",value:function(e,n,t){var r=2<arguments.length&&void 0!==t?t:0;return this.on(e,function(){var e=arguments;setTimeout(function(){n.apply(self,i()(e))},r)})}},{key:"once",value:function(n,t){var r=this;return this.on(n,function e(){t.apply(r,Array.prototype.slice.call(arguments)),r.off(n,e)})}}]),t}(t.n(m).a)},607:function(e,n,t){"use strict";t.r(n);var r=t(161),a=$("#ppt-player").data("params");new r.a({element:"#ppt-player",slides:a.images})},79:function(a,e,n){
/*!
* screenfull
* v3.0.0 - 2015-11-24
* (c) Sindre Sorhus; MIT License
*/
!function(){"use strict";var e=a.exports,t="undefined"!=typeof Element&&"ALLOW_KEYBOARD_INPUT"in Element,r=function(){for(var e,n,t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],r=0,a=t.length,l={};r<a;r++)if((e=t[r])&&e[1]in document){for(r=0,n=e.length;r<n;r++)l[t[0][r]]=e[r];return l}return!1}(),n={request:function(e){var n=r.requestFullscreen;e=e||document.documentElement,/5\.1[\.\d]* Safari/.test(navigator.userAgent)?e[n]():t?e[n](Element.ALLOW_KEYBOARD_INPUT):e[n]({navigationUI:"auto"})},exit:function(){document[r.exitFullscreen]()},toggle:function(e){this.isFullscreen?this.exit():this.request(e)},raw:r};r?(Object.defineProperties(n,{isFullscreen:{get:function(){return Boolean(document[r.fullscreenElement])}},element:{enumerable:!0,get:function(){return document[r.fullscreenElement]}},enabled:{enumerable:!0,get:function(){return Boolean(document[r.fullscreenEnabled])}}}),e?a.exports=n:window.screenfull=n):e?a.exports=!1:window.screenfull=!1}()}});