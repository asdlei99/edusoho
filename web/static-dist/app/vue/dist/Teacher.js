(window.webpackJsonp=window.webpackJsonp||[]).push([[426],{111:function(e,t,a){e.exports=a(344)},1439:function(e,t,a){"use strict";a.r(t);var r=a(131),n=a.n(r),i=a(111),o=a.n(i),s=a(80),c=a.n(s),u=a(70),l=a.n(u),d=a(81),f=a.n(d),p=a(44),m=a.n(p),v=a(37),h=a.n(v),_=a(194),g=a.n(_),b=a(342),y=a.n(b),k=a(394),w=a.n(k),x=a(1451),S=a(1446),C=a(1480),T=a(1611);function I(e,t){var a=m()(e);if(f.a){var r=f()(e);t&&(r=r.filter((function(t){return l()(e,t).enumerable}))),a.push.apply(a,r)}return a}function E(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?I(Object(a),!0).forEach((function(t){h()(e,t,a[t])})):c.a?o()(e,c()(a)):I(Object(a)).forEach((function(t){n()(e,t,l()(a,t))}))}return e}var q=[{title:"用户名",dataIndex:"nickname",ellipsis:!0,scopedSlots:{customRender:"nickname"}},{title:"在教班课/学员总数",dataIndex:"liveMultiClassNum",ellipsis:!0,customRender:function(e,t){return"".concat(e,"/").concat(t.liveMultiClassStudentNum)}},{title:"完结班课/学员总数",dataIndex:"endMultiClassNum",ellipsis:!0,customRender:function(e,t){return"".concat(e,"/").concat(t.endMultiClassStudentNum)}},{title:"在网校显示",scopedSlots:{customRender:"display"}},{title:"首页推荐",scopedSlots:{customRender:"promoteInfo"}},{title:"最近登录",scopedSlots:{customRender:"loginInfo"}},{title:"操作",scopedSlots:{customRender:"action"}}],O={title:"教师资格证编号",dataIndex:"qualification",width:"20%",scopedSlots:{customRender:"qualification"}},P={name:"Teachers",components:{userInfoTable:C.a,AsideLayout:x.a,EditorQualification:T.a},data:function(){return{visible:!1,user:{},columns:q,pageData:[],loading:!1,pagination:{},keyWord:"",setNumId:0,promotedSeq:void 0,modalVisible:!1,form:this.$form.createForm(this,{name:"set_number"}),qualificationVisible:!1,currentTeacherUserId:0,currentTeacherQualification:{},showEditorSualification:!1}},created:function(){this.getSetting()},methods:{getSetting:function(){var e=this;return y()(g.a.mark((function t(){var a;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.D.get("qualification");case 2:a=t.sent,e.showEditorSualification=Boolean(a.qualification),e.showEditorSualification&&(w.a.forEach(e.columns,(function(e){e.width="20%"})),e.columns.splice(1,0,O)),e.fetchTeacher();case 6:case"end":return t.stop()}}),t)})))()},handleTableChange:function(e){var t=E({},this.pagination);t.current=e.current,this.pagination=t;var a={limit:e.pageSize,offset:(e.current-1)*e.pageSize};this.fetchTeacher(a)},fetchTeacher:function(e){var t=this;return y()(g.a.mark((function a(){var r,n,i,o;return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.loading=!0,a.next=3,S.E.search(E({limit:20,nickname:t.keyWord},e));case 3:r=a.sent,n=r.data,i=r.paging,(o=E({},t.pagination)).total=i.total,o.pageSize=Number(i.limit),w.a.forEach(n,(function(e){e.isPromoted=1==e.promoted})),t.loading=!1,t.pageData=n,t.pagination=o;case 13:case"end":return a.stop()}}),a)})))()},onSearch:function(e){var t=this;return y()(g.a.mark((function a(){return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:t.keyWord=e,t.pagination.current=1,t.fetchTeacher();case 3:case"end":return a.stop()}}),a)})))()},edit:function(e){var t=this;return y()(g.a.mark((function a(){return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,S.I.get(e);case 2:t.user=a.sent,t.visible=!0;case 4:case"end":return a.stop()}}),a)})))()},close:function(){this.visible=!1},clickSetNumberModal:function(e){var t=e.id,a=e.promotedSeq;this.setNumId=t,this.promotedSeq=a,this.modalVisible=!0},handleOk:function(e){var t=this;this.form.validateFields(function(){var e=y()(g.a.mark((function e(a,r){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=6;break}return e.next=3,S.E.promotion(t.setNumId,r);case 3:n=e.sent,n.success&&(w.a.forEach(t.pageData,(function(e){if(e.id==t.setNumId)return e.promotedSeq=r.number,e.isPromoted=!0,!1})),t.handleCancel());case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())},handleCancel:function(){this.modalVisible=!1,this.form.resetFields()},changePromoted:function(e,t){var a=this;return y()(g.a.mark((function r(){var n;return g.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n={},!e){r.next=7;break}return r.next=4,S.E.promotion(t);case 4:return n=r.sent,a.changePromotedCallBack(n,t,e),r.abrupt("return");case 7:a.$confirm({content:"真的要取消该教师推荐吗？",okText:"确认",cancelText:"取消",onOk:function(){var r=y()(g.a.mark((function r(){return g.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,S.E.cancelPromotion(t);case 2:n=r.sent,a.changePromotedCallBack(n,t,e);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}()});case 8:case"end":return r.stop()}}),r)})))()},changePromotedCallBack:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=arguments.length>2?arguments[2]:void 0;e.success&&w.a.forEach(this.pageData,(function(e){if(e.id==t)return e.isPromoted=a,!1}))},changeDisplay:function(e,t){var a=this;return y()(g.a.mark((function r(){var n,i,o;return g.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n={query:{id:t},params:{showable:e?1:0}},i={},!e){r.next=8;break}return r.next=5,S.H.mdityDisplay(n);case 5:return i=r.sent,a.changeDisplayCallBack(i,t,e),r.abrupt("return");case 8:o=a,a.$confirm({content:"取消教师显示，将同时取消首页推荐。确定取消？",okText:"确定",cancelText:"取消",onOk:function(){return y()(g.a.mark((function a(){return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,S.H.mdityDisplay(n);case 2:i=a.sent,o.changeDisplayCallBack(i,t,e);case 4:case"end":return a.stop()}}),a)})))()}});case 10:case"end":return r.stop()}}),r)})))()},changeDisplayCallBack:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=arguments.length>2?arguments[2]:void 0;e.id&&w.a.forEach(this.pageData,(function(e){if(e.id==t)return e.showable=a?"1":"0",a||(e.isPromoted=!1,e.promotedSeq=0),!1}))},validateRange:function(e,t,a){!t||!1!==w.a.inRange(t,0,10001)&&!1!==/^\+?[0-9][0-9]*$/.test(t)||a("请输入0-10000的整数"),a()},handleEditorQualification:function(e){this.currentTeacherUserId=e.id,this.currentTeacherQualification=e.qualification,this.qualificationVisible=!0},handleCancelEditQualification:function(e){w.a.forEach(this.pageData,(function(t){t.id==e.user_id&&(t.qualification=e)})),this.qualificationVisible=!1}}},j=(a(1767),a(30)),D=Object(j.a)(P,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("aside-layout",{staticClass:"teacher-manage-container",attrs:{breadcrumbs:[{name:"教师管理"}]}},[a("div",{staticClass:"clearfix cd-mb24"},[a("a-input-search",{staticStyle:{width:"224px"},attrs:{placeholder:"请输入用户名搜索",allowClear:!0},on:{search:e.onSearch}})],1),e._v(" "),a("a-table",{attrs:{columns:e.columns,"data-source":e.pageData,"row-key":function(e){return e.id},pagination:e.pagination,"row-class-name":function(e){return"teacher-manage-row"},loading:e.loading},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"nickname",fn:function(t,r){return[a("a-avatar",{attrs:{size:48,src:r.avatar.middle,icon:"user"}}),e._v(" "),a("a",{staticClass:"ml8",on:{click:function(t){return e.edit(r.id)}}},[e._v(e._s(t))])]}},{key:"display",fn:function(t){return a("div",{},[a("a-checkbox",{attrs:{checked:"1"===t.showable},on:{change:function(a){return e.changeDisplay(a.target.checked,t.id)}}})],1)}},{key:"promoteInfo",fn:function(t){return a("div",{},["0"===t.showable?a("a-button",{attrs:{type:"link",disabled:""}},[e._v("推荐")]):[a("a-button",{attrs:{type:"link"}},[t.isPromoted?[e._v("推荐序号"+e._s(t.promotedSeq))]:[e._v("推荐")]],2),e._v(" "),a("a",{staticClass:"set-number",attrs:{href:"javascript:;"},on:{click:function(a){return e.clickSetNumberModal(t)}}},[a("a-icon",{attrs:{type:"edit"}})],1)]],2)}},{key:"qualification",fn:function(t){return[e._v("\n      "+e._s(t.code)+"\n    ")]}},{key:"loginInfo",fn:function(t){return a("div",{},[a("div",[e._v(e._s(e.$dateFormat(t.loginTime,"YYYY-MM-DD HH:mm")))]),e._v(" "),a("div",{staticClass:"color-gray text-sm"},[e._v(e._s(t.loginIp))])])}},{key:"action",fn:function(t){return[a("a-button",{attrs:{type:"link"},on:{click:function(a){return e.edit(t.id)}}},[e._v("\n        查看\n      ")]),e._v(" "),a("a-dropdown",[a("a",{staticClass:"ant-dropdown-link",staticStyle:{"margin-left":"-6px"},on:{click:function(e){e.preventDefault()}}},[a("a-icon",{attrs:{type:"caret-down"}})],1),e._v(" "),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a",{attrs:{"data-toggle":"modal","data-target":"#modal","data-backdrop":"static","data-keyboard":"false","data-url":"/admin/v2/user/"+t.id+"/edit"}},[e._v("\n              编辑用户信息\n            ")])]),e._v(" "),a("a-menu-item",[a("a",{attrs:{"data-toggle":"modal","data-target":"#modal","data-backdrop":"static","data-keyboard":"false","data-url":"/admin/v2/user/"+t.id+"/avatar"}},[e._v("\n              修改用户头像\n            ")])]),e._v(" "),e.showEditorSualification?a("a-menu-item",{on:{click:function(a){return e.handleEditorQualification(t)}}},[e._v("\n            编辑教师资质\n          ")]):e._e()],1)],1)]}}])}),e._v(" "),a("a-modal",{attrs:{title:"教师详细信息",visible:e.visible},on:{cancel:e.close}},[a("userInfoTable",{attrs:{user:e.user}}),e._v(" "),a("template",{slot:"footer"},[a("a-button",{key:"back",on:{click:e.close}},[e._v(" 关闭 ")])],1)],2),e._v(" "),a("a-modal",{attrs:{title:"设置推荐教师",okText:"确认",cancelText:"取消",visible:e.modalVisible},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-form",{attrs:{form:e.form,"label-col":{span:3},"wrapper-col":{span:21}}},[a("a-form-item",{attrs:{label:"序号",extra:"请输入0-10000的整数"}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["number",{rules:[{required:!0,message:"请输入序号"},{validator:e.validateRange,message:"请输入0-10000的整数"}],initialValue:e.promotedSeq}],expression:"[ 'number', {\n            rules: [\n              { required: true, message: '请输入序号' },\n              { validator: validateRange, message: '请输入0-10000的整数' }\n            ],\n            initialValue: promotedSeq\n          }]"}],staticStyle:{width:"100%"}})],1)],1)],1),e._v(" "),a("a-modal",{attrs:{title:"编辑教师资质",width:"900px",footer:null,visible:e.qualificationVisible},on:{cancel:e.handleCancelEditQualification}},[a("editor-qualification",{attrs:{"user-id":e.currentTeacherUserId,"edit-info":e.currentTeacherQualification},on:{"handle-cancel-modal":e.handleCancelEditQualification}})],1)],1)}),[],!1,null,"754031fe",null);t.default=D.exports},1448:function(e,t,a){},1451:function(e,t,a){"use strict";var r={name:"AsideLayout",props:{breadcrumbs:{type:Array,required:!0},headerTitle:{type:String,default:""},headerTip:{type:String,default:""}}},n=(a(1452),a(30)),i=Object(n.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"aside-layout"},[a("div",{staticClass:"aside-layout-header"},[a("a-breadcrumb",{staticClass:"pull-left aside-layout-header__breadcrumb",attrs:{separator:"/"}},e._l(e.breadcrumbs,(function(t,r){return a("a-breadcrumb-item",{key:r},[t.href?[a("a",{attrs:{href:t.href,target:"_blank"}},[e._v(e._s(t.name))])]:t.pathName?[a("a",{attrs:{href:"javascript:;"},on:{click:function(a){return e.$router.push({name:t.pathName})}}},[e._v(e._s(t.name))])]:[e._v("\n          "+e._s(t.name)+"\n        ")]],2)})),1),e._v(" "),e.headerTip?a("a-popover",{attrs:{placement:"bottomLeft"}},[a("template",{slot:"content"},[a("div",{staticClass:"aside-header-tip",domProps:{innerHTML:e._s(e.headerTip)}})]),e._v(" "),a("span",{staticClass:"aside-header-title-icon"},[a("a-icon",{attrs:{theme:"filled",type:"question-circle"}}),a("span",{staticClass:"icon-circle"},[e._v(e._s(e.headerTitle))])],1)],2):e._e()],1),e._v(" "),a("div",{staticClass:"aside-layout-main"},[e._t("default")],2)])}),[],!1,null,null,null);t.a=i.exports},1452:function(e,t,a){"use strict";var r=a(1448);a.n(r).a},1476:function(e,t,a){},1480:function(e,t,a){"use strict";var r={props:{user:{type:Object,default:{}}},computed:{getUserRoles:function(){return _.join(this.user.user.roles," ")}},methods:{toPersonalHomepage:function(e){window.open("/user/"+e+"/about","_blank")},formatTimeIp:function(e,t){var a="";return a+=0!=e?this.$dateFormat(e,"YYYY-MM-DD HH:mm"):" -- ",""!=t&&(a+=" / "+t+" 本机IP"),a},formatStr:function(e){return void 0===e||""==e||null==e?"暂无":e},formatGender:function(){return{male:"男性",female:"女性",secret:"秘密"}[this.user.profile.gender]}}},n=a(30),i=Object(n.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("table",{staticClass:"table table-striped table-condenseda table-bordered"},[a("tbody",[a("tr",[a("th",{attrs:{width:"30%"}},[e._v("用户名")]),e._v(" "),a("td",{attrs:{width:"70%"}},[a("a",{staticClass:"pull-right",attrs:{href:"javascript:;"},on:{click:function(t){return e.toPersonalHomepage(e.user.user.id)}}},[e._v("个人主页")]),e._v("\n        "+e._s(e.user.user.nickname)+"\n      ")])]),e._v(" "),a("tr",[a("th",[e._v("Email")]),e._v(" "),a("td",[e._v(e._s(e.user.profile.email||"- -"))])]),e._v(" "),a("tr",[a("th",[e._v("用户组")]),e._v(" "),a("td",[e._v(e._s(e.getUserRoles))])]),e._v(" "),a("tr",[a("th",[e._v("注册时间/IP")]),e._v(" "),a("td",[e._v(e._s(e.formatTimeIp(e.user.user.createdTime,e.user.user.createdIp)))])]),e._v(" "),a("tr",[a("th",[e._v("最近登录时间/IP")]),e._v(" "),a("td",[e._v(e._s(e.formatTimeIp(e.user.user.loginTime,e.user.user.loginIp)))])]),e._v(" "),a("tr",[a("th",[e._v("姓名")]),e._v(" "),a("td",[e._v(e._s(e.formatStr(e.user.profile.truename)))])]),e._v(" "),a("tr",[a("th",[e._v("性别")]),e._v(" "),a("td",[e._v(e._s(e.formatGender()))])]),e._v(" "),a("tr",[a("th",[e._v("身份证号")]),e._v(" "),a("td",[e._v(e._s(e.formatStr(e.user.profile.idcard)))])]),e._v(" "),a("tr",[a("th",[e._v("手机号码")]),e._v(" "),a("td",[e._v(e._s(e.formatStr(e.user.profile.mobile)))])]),e._v(" "),a("tr",[a("th",[e._v("公司")]),e._v(" "),a("td",[e._v(e._s(e.formatStr(e.user.profile.company)))])]),e._v(" "),a("tr",[a("th",[e._v("职业")]),e._v(" "),a("td",[e._v(e._s(e.formatStr(e.user.profile.job)))])]),e._v(" "),a("tr",[a("th",[e._v("头衔")]),e._v(" "),a("td",[e._v(e._s(e.formatStr(e.user.user.title)))])]),e._v(" "),a("tr",[a("th",[e._v("个人签名")]),e._v(" "),a("td",[e._v(e._s(e.formatStr(e.user.profile.signature)))])]),e._v(" "),a("tr",[a("th",[e._v("自我介绍")]),e._v(" "),a("td",{domProps:{innerHTML:e._s(e.user.profile.about||"暂无")}})]),e._v(" "),a("tr",[a("th",[e._v("个人网站")]),e._v(" "),a("td",[e._v(e._s(e.formatStr(e.user.profile.site)))])]),e._v(" "),a("tr",[a("th",[e._v("微博")]),e._v(" "),a("td",[e._v(e._s(e.formatStr(e.user.profile.weibo)))])]),e._v(" "),a("tr",[a("th",[e._v("微信")]),e._v(" "),a("td",[e._v(e._s(e.formatStr(e.user.profile.weixin)))])]),e._v(" "),a("tr",[a("th",[e._v("QQ")]),e._v(" "),a("td",[e._v(e._s(e.formatStr(e.user.profile.qq)))])])])])}),[],!1,null,null,null);t.a=i.exports},1567:function(e,t,a){"use strict";var r=a(1476);a.n(r).a},1605:function(e,t,a){},1611:function(e,t,a){"use strict";var r=a(131),n=a.n(r),i=a(111),o=a.n(i),s=a(80),c=a.n(s),u=a(70),l=a.n(u),d=a(81),f=a.n(d),p=a(44),m=a.n(p),v=a(194),h=a.n(v),_=a(37),g=a.n(_),b=a(342),y=a.n(b),k=a(394),w=a.n(k),x=a(1446),S=a(1492),C=a.n(S),T=(a(1493),{name:"UploadPicture",components:{VueCropper:C.a},props:{title:{type:String,default:"图片裁剪"},tip:{type:String,default:""},aspectRatio:{type:Number},file:{type:String,default:""}},data:function(){return{loading:!1,pictureName:"",pictureUrl:"",imgUrl:"",visible:!1,uploadLoading:!1,uploadToken:{},cropperKey:0}},created:function(){this.pictureUrl=this.file,this.toBlobPolyfillInIE()},watch:{file:function(){this.pictureUrl=this.file}},methods:{toBlobPolyfillInIE:function(){HTMLCanvasElement.prototype.toBlob||n()(HTMLCanvasElement.prototype,"toBlob",{value:function(e,t,a){var r=this;setTimeout((function(){for(var n=atob(r.toDataURL(t,a).split(",")[1]),i=n.length,o=new Uint8Array(i),s=0;s<i;s++)o[s]=n.charCodeAt(s);e(new Blob([o],{type:t||"image/png"}))}))}})},getUploadToken:function(){var e=this;return y()(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.G.get("default");case 2:e.uploadToken=t.sent;case 3:case"end":return t.stop()}}),t)})))()},uploadPicture:function(e){var t=this;this.cropperKey++;var a=new FileReader;a.onload=function(e){t.imgUrl=e.target.result,t.visible=!0},this.pictureName=e.file.originFileObj.name,a.readAsDataURL(e.file.originFileObj)},handleCancel:function(){this.visible=!1},handleReselect:function(){var e=this.$refs.upload.$el.getElementsByTagName("input");this.visible=!1,e.length>0&&e[0].click()},handleSaveCropper:function(){var e=this;return y()(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.loading=!0,e.uploadToken.expiry&&!(new Date>=new Date(e.uploadToken.expiry))){t.next=4;break}return t.next=4,e.getUploadToken();case 4:e.$refs.cropper.getCroppedCanvas().toBlob(function(){var t=y()(h.a.mark((function t(a){var r,n,i,o;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(r=new FormData).append("file",a,e.pictureName),r.append("token",e.uploadToken.token),e.uploadLoading=!0,t.prev=4,t.next=7,x.l.uploadFile(r);case 7:n=t.sent,i=n.url,o=n.id,e.pictureUrl=i,e.$emit("success",o),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(4),413==t.t0.response.status&&Vue.prototype.$message.error("文件过大，请上传小于 2M 的文件！");case 18:return t.prev=18,e.loading=!1,e.visible=!1,e.uploadLoading=!1,t.finish(18);case 23:case"end":return t.stop()}}),t,null,[[4,14,18,23]])})));return function(e){return t.apply(this,arguments)}}());case 6:case"end":return t.stop()}}),t)})))()}}}),I=(a(1567),a(30));function E(e,t){var a=m()(e);if(f.a){var r=f()(e);t&&(r=r.filter((function(t){return l()(e,t).enumerable}))),a.push.apply(a,r)}return a}function q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(Object(a),!0).forEach((function(t){g()(e,t,a[t])})):c.a?o()(e,c()(a)):E(Object(a)).forEach((function(t){n()(e,t,l()(a,t))}))}return e}var O={name:"EditorTeacherQualification",components:{UploadPicture:Object(I.a)(T,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-upload",{ref:"upload",attrs:{accept:"image/*","file-list":[],"list-type":"picture-card",customRequest:function(){}},on:{change:e.uploadPicture}},[e.pictureUrl?a("img",{staticStyle:{width:"100%"},attrs:{src:e.pictureUrl}}):a("div",[a("a-icon",{attrs:{type:e.loading?"loading":"plus"}}),e._v(" "),a("div",{staticClass:"ant-upload-text"},[e._v("\n        上传照片\n      ")])],1)]),e._v(" "),e.tip?a("p",{staticClass:"mb0",staticStyle:{"font-size":"14px","line-height":"20px"}},[e._v(e._s(e.tip))]):e._e(),e._v(" "),a("a-modal",{key:e.cropperKey,attrs:{title:e.title,visible:e.visible,"mask-closable":!1},on:{cancel:e.handleCancel}},[a("vue-cropper",{ref:"cropper",attrs:{"view-mode":1,"auto-crop-area":1,"aspect-ratio":e.aspectRatio,src:e.imgUrl}}),e._v(" "),a("template",{slot:"footer"},[a("a-button",{on:{click:e.handleReselect}},[e._v("重新选择")]),e._v(" "),a("a-button",{attrs:{type:"primary",loading:e.uploadLoading},on:{click:e.handleSaveCropper}},[e._v("保存图片")])],1)],2)],1)}),[],!1,null,"8162e456",null).exports},props:{userId:{type:String,required:!0},editInfo:{type:Object,required:!0}},data:function(){return{labelCol:{span:4},wrapperCol:{span:16},form:{truename:"",avatarFileId:"",code:""},rules:{truename:[{required:!0,message:"请输入姓名",trigger:"blur"},{min:2,message:"最少需要输入 2 个字符",trigger:"blur"},{max:36,message:"最多只能输入 36 个字符",trigger:"blur"},{pattern:/^[\u4E00-\u9FA5A-Za-z0-9_]+$/,message:"只支持中文字、英文字母、数字及_",trigger:"blur"}],avatarFileId:[{required:!0,message:"请上传图片"}],code:[{required:!0,message:"请输入教师资格证书编号",trigger:"blur"},{len:17,message:"请输入 17 位数字",trigger:"blur"},{pattern:/^[0-9]*$/,message:"请输入整数",trigger:"blur"}]},file:""}},watch:{editInfo:function(){this.setFormValue()}},created:function(){this.setFormValue()},methods:{setFormValue:function(){var e=this.editInfo,t=e.truename,a=e.avatarFileId,r=e.code,n=e.url;w.a.assign(this.form,{truename:t,avatarFileId:a,code:r}),this.file=n},onSubmit:function(){var e=this;this.$refs.ruleForm.validate(function(){var t=y()(h.a.mark((function t(a){var r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,x.F.add(q(q({},e.form),{},{userId:e.userId}));case 4:r=t.sent,e.$message.success("保存成功"),e.$emit("handle-cancel-modal",r);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},uploadedSuccessfully:function(e){this.form.avatarFileId=e}}},P=Object(I.a)(O,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-form-model",{key:e.userId,ref:"ruleForm",attrs:{model:e.form,rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[a("a-form-model-item",{ref:"truename",attrs:{label:"姓名",prop:"truename"}},[a("a-input",{on:{blur:function(){e.$refs.truename.onFieldBlur()}},model:{value:e.form.truename,callback:function(t){e.$set(e.form,"truename",t)},expression:"form.truename"}})],1),e._v(" "),a("a-form-model-item",{attrs:{label:"照片",prop:"avatarFileId"}},[a("upload-picture",{attrs:{file:e.file,"aspect-ratio":1,tip:"请上传jpg, gif, png格式的图片，建议图片尺寸为 270×270px，建议图片大小不超过2MB"},on:{success:e.uploadedSuccessfully}})],1),e._v(" "),a("a-form-model-item",{ref:"code",attrs:{label:"教师资格证书编号",prop:"code"}},[a("a-input",{on:{blur:function(){e.$refs.code.onFieldBlur()}},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}})],1),e._v(" "),a("a-form-model-item",{attrs:{"wrapper-col":{span:14,offset:4}}},[a("a-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("\n      保存\n    ")])],1)],1)}),[],!1,null,null,null);t.a=P.exports},1767:function(e,t,a){"use strict";var r=a(1605);a.n(r).a},215:function(e,t,a){a(216);var r=a(52).Object;e.exports=function(e,t){return r.getOwnPropertyDescriptor(e,t)}},216:function(e,t,a){var r=a(136),n=a(185).f;a(343)("getOwnPropertyDescriptor",(function(){return function(e,t){return n(r(e),t)}}))},343:function(e,t,a){var r=a(79),n=a(52),i=a(312);e.exports=function(e,t){var a=(n.Object||{})[e]||Object[e],o={};o[e]=t(a),r(r.S+r.F*i((function(){a(1)})),"Object",o)}},344:function(e,t,a){a(345);var r=a(52).Object;e.exports=function(e,t){return r.defineProperties(e,t)}},345:function(e,t,a){var r=a(79);r(r.S+r.F*!a(142),"Object",{defineProperties:a(395)})},346:function(e,t,a){a(347),e.exports=a(52).Object.getOwnPropertyDescriptors},347:function(e,t,a){var r=a(79),n=a(348),i=a(136),o=a(185),s=a(397);r(r.S,"Object",{getOwnPropertyDescriptors:function(e){for(var t,a,r=i(e),c=o.f,u=n(r),l={},d=0;u.length>d;)void 0!==(a=c(r,t=u[d++]))&&s(l,t,a);return l}})},348:function(e,t,a){var r=a(370),n=a(350),i=a(135),o=a(102).Reflect;e.exports=o&&o.ownKeys||function(e){var t=r.f(i(e)),a=n.f;return a?t.concat(a(e)):t}},349:function(e,t,a){a(396),e.exports=a(52).Object.getOwnPropertySymbols},44:function(e,t,a){e.exports=a(626)},626:function(e,t,a){a(627),e.exports=a(52).Object.keys},627:function(e,t,a){var r=a(369),n=a(368);a(343)("keys",(function(){return function(e){return n(r(e))}}))},70:function(e,t,a){e.exports=a(215)},80:function(e,t,a){e.exports=a(346)},81:function(e,t,a){e.exports=a(349)}}]);