!function(e){function t(t){for(var n,o,r=t[0],l=t[1],c=t[2],d=0,h=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&h.push(a[o][0]),a[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(u&&u(t);h.length;)h.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],n=!0,r=1;r<s.length;r++){var l=s[r];0!==a[l]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=s[0]))}return e}var n={},a={182:0},i=[];function o(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=n,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(s,n,function(t){return e[t]}.bind(null,n));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/static-dist/";var r=window.webpackJsonp=window.webpackJsonp||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var u=l;i.push([831,0]),s()}({180:function(e,t,s){"use strict";s.d(t,"b",(function(){return a})),s.d(t,"c",(function(){return o})),s.d(t,"d",(function(){return r})),s.d(t,"a",(function(){return l}));var n=s(188),a=function(){$("body").on("click",".js-close-course",(function(e){var t=$(e.currentTarget);cd.confirm({title:Translator.trans("site.close"),content:Translator.trans("course.manage.close_hint"),okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.cancel")}).on("ok",(function(){$.post(t.data("checkUrl"),(function(e){e.warn?cd.confirm({title:Translator.trans("site.close"),content:Translator.trans(e.message),okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.cancel")}).on("ok",(function(){i(t)})):i(t)}))}))}))},i=function(e){$.post(e.data("url"),(function(e){e.success?(cd.message({type:"success",message:Translator.trans("course.manage.close_success_hint")}),location.reload()):cd.message({type:"danger",message:Translator.trans("course.manage.close_fail_hint")+":"+e.message})}))},o=function(){$("body").on("click",".js-delete-course",(function(e){cd.confirm({title:Translator.trans("site.delete"),content:Translator.trans("course.manage.delete_hint"),okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.cancel")}).on("ok",(function(){$.post($(e.currentTarget).data("url"),(function(e){e.success?(cd.message({type:"success",message:Translator.trans("site.delete_success_hint")}),e.redirect?window.location.href=e.redirect:location.reload()):cd.message({type:"danger",message:Translator.trans("site.delete_fail_hint")+":"+e.message})}))}))}))},r=function(){Object(n.a)(".js-publish-course",{title:"course.manage.publish_title",hint:"course.manage.publish_hint",success:"course.manage.publish_success_hint",fail:"course.manage.publish_fail_hint"})},l=function(){var e=$(".js-task-list-header"),t=$(".js-task-list-header__slot");if(e.length){var s=e.offset().top;$(window).scroll((function(n){$(window).scrollTop()>=s?(e.addClass("fixed"),t.removeClass("hidden")):(e.removeClass("fixed"),t.addClass("hidden"))}))}}},203:function(e,t,s){"use strict";s.d(t,"b",(function(){return n})),s.d(t,"a",(function(){return a}));var n=function(){cd.onoff({el:".js-switch"}).on("change",(function(e){var t=$(".js-switch"),s=t.data("url"),n=t.parent().hasClass("checked")?1:0,a=t.parent().hasClass("checked")?"on":"off";cd.confirm({title:Translator.trans("confirm.oper.tip"),content:Translator.trans("confirm.lesson.hidden.tip."+a),okText:Translator.trans("site.yes"),cancelText:Translator.trans("site.no")}).on("ok",(function(){$.post(s,{status:n}).success((function(e){cd.message({type:"success",message:Translator.trans("site.save_success_hint")}),location.reload()})).error((function(e){cd.message({type:"danger",message:e.responseJSON.error.message})}))})).on("cancel",(function(e,s){t[0].checked=!t[0].checked,t.parent().toggleClass("checked")}))}))},a=function(){$("body").on("click",".js-lesson-create-btn",(function(e){var t=$(e.currentTarget).data("url");$.get(t,{}).success((function(e){$("#modal").html(""),$("#modal").append(e.html),$("#modal").modal({backdrop:"static",show:!0})})).error((function(e){cd.message({type:"danger",message:Translator.trans(e.responseJSON.error.message)})}))}))}},22:function(e,t){e.exports=jQuery},324:function(e,t,s){"use strict";s.d(t,"a",(function(){return c}));var n=s(2),a=s.n(n),i=s(3),o=s.n(i),r=s(67),l=s(8),c=function(){function e(t){a()(this,e),this.$element=$(t),this._sort(),this._event()}return o()(e,[{key:"_event",value:function(){var e=this;this.$element.on("addItem",(function(t,s){e.addItem(s),e.sortList()})),$("body").on("click","[data-position]",(function(t){var s=$(this);e.position=s.data("position"),e.type=s.data("type")})),this._deleteChapter(),this._collapse(),this._publish(),this._createTask(),this._optional(),this._initLessonTaskAction()}},{key:"_collapse",value:function(){var e=['<i class="es-icon es-icon-chevronright cd-mr16"></i>','<i class="es-icon es-icon-keyboardarrowdown cd-mr16"></i>'];this.$element.on("click",".js-toggle-show",(function(t){var s=$(t.currentTarget),n=s.closest(".task-manage-item"),a=n.hasClass("js-task-manage-chapter")?".js-task-manage-chapter":".js-task-manage-chapter,.js-task-manage-unit",i=n.nextUntil(a),o=s.hasClass("toogle-hide");s.hasClass("js-toggle-unit")?o?i.removeClass("unit-hide"):i.addClass("unit-hide"):s.hasClass("js-toggle-chapter")&&(i=i.not(".unit-hide")),(i=i.filter((function(e,t){var s="none"===$(t).css("display");return o===s}))).stop().animate({height:"toggle",opacity:"toggle"},"fast"),s.toggleClass("toogle-hide").hasClass("toogle-hide")?s.html(e[0]):s.html(e[1])}))}},{key:"addItem",value:function(e){var t=$(e),s=$("#"+t.attr("id"));if(s.length>0)return s.replaceWith(t),void this.afterAddItem(t);switch(this.type){case"chapter":var n=this.$element.find("#chapter-"+this.position),a=n.nextUntil(".js-task-manage-chapter").last();0==a.length?n.after(t):a.after(t);break;case"task":this.$element.find("#chapter-"+this.position+" .js-lesson-box").append(t);var i=t.parents(".js-lesson-container");this._triggerAsTaskNumUpdated(i);break;case"lesson":var o=this.$element.find("#chapter-"+this.position),r=o.nextUntil(".js-task-manage-unit,.js-task-manage-chapter").last();0==r.length?o.after(t):r.after(t);break;default:this.$element.append(t)}$('[data-toggle="tooltip"]').tooltip(),this.handleEmptyShow(),this._flushTaskNumber(),this._flushPublishLessonNum(),this.clearPosition(),this.afterAddItem(t)}},{key:"clearPosition",value:function(){this.position="",this.type=""}},{key:"_deleteChapter",value:function(){var e=this;this.$element.on("click",".js-delete",(function(t){var s=$(this),n=s.closest(".task-manage-item"),a=e._getDeleteText(s);cd.confirm({title:Translator.trans("site.delete"),content:a,okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.cancel")}).on("ok",(function(){"task"==s.data("type")&&0==n.siblings().length&&n.closest(".js-task-manage-lesson").remove();var t=n.parents(".js-lesson-container");n.remove(),e._triggerAsTaskNumUpdated(t),e.handleEmptyShow(),e._flushTaskNumber(),e._flushPublishLessonNum(),$.post(s.data("url"),(function(t){Object(l.a)("success",Translator.trans("site.delete_success_hint")),e.sortList()}))}))}))}},{key:"_getDeleteText",value:function(e){return"task"==e.data("type")?Translator.trans("course.manage.task_delete_hint",{taskName:e.data("name")}):Translator.trans("course.manage.chapter_delete_hint",{name:e.data("name")})}},{key:"_sort",value:function(){var e,t=this,s=null;Object(r.a)({element:t.$element,ajax:!1,group:"nested",exclude:".drag_cancel",placeholder:'<li class="placeholder task-dragged-placeholder"></li>',isValidTarget:function(e,s){return t._sortRules(e,s)},onDragStart:function(n,a,i){var o=n.offset(),r=a.rootGroup.pointer;e={left:r.left-o.left,top:r.top-o.top},s=t.getChildrens(n),i(n,a)},onDrag:function(t,s){var n=t.height();$(".task-dragged-placeholder").css({height:n,"background-color":"#eee"}),t.css({left:s.left-e.left,top:s.top-e.top})},onDrop:function(e,n,a){a(e,n);for(var i=e;"none"===i.next().css("display");)i=i.next();i.after(e),s&&(e.after(s),s=null),t.sortList()}})}},{key:"getChildrens",value:function(e){if(!(e.find(".js-toggle-show.toogle-hide").length>0))return null;var t=null;return e.hasClass("js-task-manage-chapter")?t=e.nextUntil(".js-task-manage-chapter"):e.hasClass("js-task-manage-unit")&&(t=e.nextUntil(".js-task-manage-unit,.js-task-manage-chapter")),t&&(t=t.filter((function(e){return"none"===t.eq(e).css("display")}))),t}},{key:"_sortRules",value:function(e,t){return(!e.hasClass("js-task-manage-item")||t.target.closest(".js-task-manage-lesson").attr("id")==e.closest(".js-task-manage-lesson").attr("id"))&&(!((e.hasClass("js-task-manage-unit")||e.hasClass("js-task-manage-chapter"))&&!t.target.hasClass("sortable-list"))&&(!e.hasClass("js-task-manage-lesson")||!t.target.hasClass("js-lesson-box")))}},{key:"handleEmptyShow",value:function(){0===$("#sortable-list").find("li").length?$(".js-task-empty").removeClass("hidden"):$(".js-task-empty").addClass("hidden")}},{key:"sortList",value:function(){var e=[],t=this;this.$element.find(".task-manage-item").each((function(){e.push($(this).attr("id"))})),$.post(this.$element.data("sortUrl"),{ids:e},(function(e){t.$element.data("multiClass")&&window.location.reload()})),this.sortablelist()}},{key:"setShowNum",value:function(e){0==e.attr("show-num")?e.attr("show-num",1):e.attr("show-num",0)}},{key:"sortablelist",value:function(){for(var e=[".js-task-manage-lesson[show-num=1]",".js-task-manage-chapter",".js-task-manage-item[show-num=1]",".js-task-manage-unit"],t=0;t<e.length;t++)this._sortNumberByClassName(e[t]);this._sortUnitNumber()}},{key:"_sortNumberByClassName",value:function(e){var t=1;this.$element.find(e).each((function(){$(this).find(".number").text(t++)}))}},{key:"_sortUnitNumber",value:function(){var e;this.$element.find(".js-task-manage-chapter").each((function(){var t=$(this).nextUntil(".js-task-manage-chapter").filter(".js-task-manage-unit");e=1,t.each((function(){$(this).find(".number").text(e++)}))}))}},{key:"_publish",value:function(){var e=this,t=this,s={class:".js-publish-item, .js-delete, .js-lesson-unpublish-status",oppositeClas:".js-unpublish-item",isHideUnPublish:$("#isHideUnPublish").hasClass("checked"),flag:!1};this.$element.on("click",".js-unpublish-item",(function(n){var a=$(n.target);s.success=Translator.trans("course.manage.task_unpublish_success_hint"),s.danger=Translator.trans("course.manage.task_unpublish_fail_hint")+":",e.toggleOptional(a,t,s)})),this.$element.on("click",".js-publish-item",(function(n){var a=$(n.target);s.success=Translator.trans("course.manage.task_publish_success_hint"),s.danger=Translator.trans("course.manage.task_publish_fail_hint")+":",e.toggleOptional(a,t,s)}))}},{key:"_flushTaskNumber",value:function(){this.$taskNumber||(this.$taskNumber=$("#task-num"));var e=$(".js-settings-item.active").length;this.$taskNumber.text(e)}},{key:"_flushPublishLessonNum",value:function(){var e=$(".js-settings-item.active").length,t=$(".js-lesson-unpublish-status.hidden").length,s=Translator.trans("course.plan_task.lessons_publish_status",{publishedNum:t,unpublishedNum:e-t});$(".js-lessons-publish-status").attr("data-content",s)}},{key:"_createTask",value:function(){this.$element.on("click",".js-create-task-btn",(function(e){var t=$(this).data("url");$.get(t,(function(e){e.code?($("#modal").html(""),$("#modal").append(e.html),$("#modal").modal({backdrop:"static",show:!0})):cd.message({type:"danger",message:Translator.trans(e.message)})})).fail((function(e){cd.message({type:"danger",message:e.responseJSON.error.message})}))}))}},{key:"_optional",value:function(){var e=this,t={class:".js-set-optional",oppositeClas:".js-unset-optional,.js-lesson-option-tag",success:Translator.trans("site.save_success_hint"),danger:Translator.trans("site.save_error_hint")+":",flag:!0};this.$element.on("click",".js-set-optional",(function(s){var n=$(s.target);e.toggleOptional(n,e,t)})),this.$element.on("click",".js-unset-optional",(function(s){var n=$(s.target);e.toggleOptional(n,e,t)}))}},{key:"_initLessonTaskAction",value:function(){var e={"js-lesson-preview-btn":"js-hidden-lesson-preview-btn","js-lesson-edit-btn":"js-hidden-lesson-edit-btn","js-lesson-rename-btn":"js-hidden-lesson-rename-btn"},t=function(t){var s=e[t];$("#sortable-list").on("click","."+t,(function(){var e=$(this).parents(".js-lesson-container"),t=e.find(".js-task-manage-item").attr("id").split("-")[1],n=e.find("."+s),a=n.data("url").replace("%7BtaskId%7D",t);n.data("url",a),n.data("toggle")?n.click():window.open(n.data("url"),"_blank")}))};for(var s in e)t(s)}},{key:"toggleOptional",value:function(e,t,s){var n=this,a=e.closest(".task-manage-item"),i=a.find(s.class),o=a.find(s.oppositeClas),r=$("#isHideUnPublish").hasClass("checked");$.post(e.data("url"),(function(l){var c=!0;(r&&(c=t.checkShouldSetProperty(e,a)),i.toggleClass("hidden"),o.toggleClass("hidden"),r&&c||!r&&s.flag)&&(a.find(".display-text").toggleClass("hidden"),t.setShowNum(a),t.sortList());n._flushPublishLessonNum(),l.success?cd.message({type:"success",message:s.success}):cd.message({type:"danger",message:s.danger+l.message})})).fail((function(e){cd.message({type:"danger",message:s.danger+e.responseJSON.error.message})}))}},{key:"checkShouldSetProperty",value:function(e,t){var s=t.find(".js-publish-item"),n=t.find(".js-set-optional"),a=s.hasClass("hidden"),i=n.hasClass("hidden"),o=!0;return e.hasClass("js-unpublish-item")||e.hasClass("js-publish-item")?i&&(o=!1):(e.hasClass("js-set-optional")||e.hasClass("js-unset-optional"))&&(a||(o=!1)),o}},{key:"afterAddItem",value:function(e){console.log("afterAddItem")}},{key:"_triggerAsTaskNumUpdated",value:function(e){var t=e.find(".js-lesson-box"),s=t.find(".js-task-manage-item").length>1;s?(t.removeClass("hidden"),e.find(".js-display-when-mul-tasks").removeClass("hidden"),e.find(".js-display-when-single-task").addClass("hidden")):(t.addClass("hidden"),e.find(".js-display-when-mul-tasks").addClass("hidden"),e.find(".js-display-when-single-task").removeClass("hidden"),e.find(".js-task-title").html(e.find(".js-lesson-title").html())),this._triggerLessonIconAsTaskNumUpdated(e,s)}},{key:"_triggerLessonIconAsTaskNumUpdated",value:function(e,t){var s=e.find(".js-lesson-icon"),n="";t?n=s[0].classList:n=0==e.find(".js-lesson-box").find(".es-icon").length?[]:e.find(".js-lesson-box").find(".es-icon")[0].classList;for(var a=0;a<n.length;a++){var i=n[a];i.startsWith("es-icon-")&&(t?s.removeClass(i):s.addClass(i))}}}]),e}()},831:function(e,t,s){"use strict";s.r(t);var n=s(5),a=s.n(n),i=s(2),o=s.n(i),r=s(3),l=s.n(r),c=s(12),u=s.n(c),d=s(13),h=s.n(d),f=s(9),m=s.n(f),g=s(203),p=s(324),k=s(180);function v(e){var t=function(){if("undefined"==typeof Reflect||!a.a)return!1;if(a.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(a()(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,n=m()(e);if(t){var i=m()(this).constructor;s=a()(n,arguments,i)}else s=n.apply(this,arguments);return h()(this,s)}}new(function(e){u()(s,e);var t=v(s);function s(e){var n;return o()(this,s),(n=t.call(this,e))._defaultEvent(),n}return l()(s,[{key:"_defaultEvent",value:function(){this._showLesson()}},{key:"_sortRules",value:function(e,t){return!1}},{key:"_showLesson",value:function(){this.$element.find(".js-task-manage-item").first().addClass("active").find(".js-settings-list").stop().slideDown(500),this.$element.on("click",".js-item-content",(function(e){var t=$(e.currentTarget).closest(".js-task-manage-item");t.hasClass("active")?t.removeClass("active").find(".js-settings-list").stop().slideUp(500):(t.addClass("active").find(".js-settings-list").stop().slideDown(500),t.siblings(".js-task-manage-item.active").removeClass("active").find(".js-settings-list").hide())}))}},{key:"afterAddItem",value:function(e){e.find(".js-item-content").length>0&&e.find(".js-item-content").trigger("click"),$('[data-toggle="popover"]').popover({html:!0})}}]),s}(p.a))("#sortable-list"),Object(g.b)(),Object(g.a)(),Object(k.a)()}});