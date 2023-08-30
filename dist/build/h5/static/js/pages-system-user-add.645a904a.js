(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[6176],{33576:function(t,a,e){var n=e(86560);n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);var i=e(56).Z;i("a14ffb06",n,!0,{sourceMap:!1,shadowMode:!1})},27814:function(t,a,e){"use strict";e.r(a),e.d(a,{default:function(){return b}});var n={uniForms:e(45442).Z,uniFormsItem:e(8831).Z,uniEasyinput:e(62651).Z,uniDataCheckbox:e(70723).Z},i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"uni-container"},[e("uni-forms",{ref:"form",attrs:{rules:t.rules,validateTrigger:"bind"},on:{submit:function(a){arguments[0]=a=t.$handleEvent(a),t.submit.apply(void 0,arguments)}},model:{value:t.formData,callback:function(a){t.formData=a},expression:"formData"}},[e("uni-forms-item",{attrs:{name:"username",label:"用户名",required:!0}},[e("uni-easyinput",{attrs:{clearable:!1,placeholder:"请输入用户名"},model:{value:t.formData.username,callback:function(a){t.$set(t.formData,"username",a)},expression:"formData.username"}})],1),e("uni-forms-item",{attrs:{name:"nickname",label:"用户昵称",required:!0}},[e("uni-easyinput",{attrs:{clearable:!1,placeholder:"请输入用户昵称"},model:{value:t.formData.nickname,callback:function(a){t.$set(t.formData,"nickname",a)},expression:"formData.nickname"}})],1),e("uni-forms-item",{attrs:{name:"password",label:"初始密码",required:!0}},[e("uni-easyinput",{attrs:{clearable:!1,placeholder:"请输入初始密码"},model:{value:t.formData.password,callback:function(a){t.$set(t.formData,"password",a)},expression:"formData.password"}})],1),e("uni-forms-item",{staticClass:"flex-center-x",attrs:{name:"role",label:"角色列表"}},[e("uni-data-checkbox",{attrs:{multiple:!0,localdata:t.roles},model:{value:t.formData.role,callback:function(a){t.$set(t.formData,"role",a)},expression:"formData.role"}})],1),e("uni-forms-item",{staticClass:"flex-center-x",attrs:{name:"tags",label:"用户标签",labelWidth:"100"}},[e("uni-data-checkbox",{ref:"checkbox",attrs:{multiple:!0,collection:"uni-id-tag",field:"tagid as value, name as text"},model:{value:t.formData.tags,callback:function(a){t.$set(t.formData,"tags",a)},expression:"formData.tags"}}),e("span",{staticClass:"link-btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.gotoTagAdd.apply(void 0,arguments)}}},[t._v("新增")]),e("span",{staticClass:"link-btn",staticStyle:{"margin-left":"10px"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.gotoTagList.apply(void 0,arguments)}}},[t._v("管理")])],1),e("uni-forms-item",{staticClass:"flex-center-x",attrs:{name:"authorizedApp",label:"可登录应用",labelWidth:"100"}},[e("uni-data-checkbox",{attrs:{multiple:!0,collection:"opendb-app-list",field:"appid as value, name as text"},model:{value:t.formData.authorizedApp,callback:function(a){t.$set(t.formData,"authorizedApp",a)},expression:"formData.authorizedApp"}}),e("span",{staticClass:"link-btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.gotoAppList.apply(void 0,arguments)}}},[t._v("管理")])],1),e("uni-forms-item",{attrs:{name:"mobile",label:"手机号"}},[e("uni-easyinput",{attrs:{clearable:!1,placeholder:"请输入手机号"},model:{value:t.formData.mobile,callback:function(a){t.$set(t.formData,"mobile",a)},expression:"formData.mobile"}})],1),e("uni-forms-item",{attrs:{name:"email",label:"邮箱"}},[e("uni-easyinput",{attrs:{clearable:!1,placeholder:"请输入邮箱"},model:{value:t.formData.email,callback:function(a){t.$set(t.formData,"email",a)},expression:"formData.email"}})],1),e("uni-forms-item",{attrs:{name:"status",label:"是否启用"}},[e("v-uni-switch",{attrs:{checked:t.formData.status},on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.binddata("status",a.detail.value)}}})],1),e("v-uni-view",{staticClass:"uni-button-group"},[e("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"},attrs:{type:"primary"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.submitForm.apply(void 0,arguments)}}},[t._v(t._s(t.$t("common.button.submit")))]),e("v-uni-navigator",{staticStyle:{"margin-left":"15px"},attrs:{"open-type":"navigateBack"}},[e("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"}},[t._v(t._s(t.$t("common.button.back")))])],1)],1)],1)],1)},s=[],r=e(41541),o=(e(26699),e(32023),e(9653),e(41539),e(21249),e(57658),e(82772),e(30541),e(38443)),l=e(65167)["Z"],u=l.database();u.command;function c(t){var a={};for(var e in o.sC)t.includes(e)&&(a[e]=o.sC[e]);return a}var m,f={data:function(){return{formData:{username:"",nickname:"",password:"",role:[],authorizedApp:[],tags:[],mobile:void 0,email:void 0,status:!0},rules:(0,r.Z)((0,r.Z)({},c(["username","password","role","mobile","email"])),{},{status:{rules:[{format:"bool"}]}}),roles:[]}},onLoad:function(){this.loadroles()},methods:{gotoAppList:function(){uni.navigateTo({url:"../app/list"})},gotoTagList:function(){uni.navigateTo({url:"../tag/list"})},gotoTagAdd:function(){var t=this;uni.navigateTo({url:"../tag/add",events:{refreshCheckboxData:function(){t.$refs.checkbox.loadData()}}})},submitForm:function(){this.$refs.form.submit()},submit:function(t){var a=this,e=t.detail,n=e.value,i=e.errors;i||(uni.showLoading({title:"提交中...",mask:!0}),"boolean"===typeof n.status&&(n.status=Number(!n.status)),this.$request("addUser",n).then((function(){uni.showToast({title:"新增成功"}),a.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(t){uni.hideLoading()})))},loadroles:function(){var t=this;u.collection("uni-id-roles").limit(500).get().then((function(a){var e=[];t.roles=a.result.data.map((function(t){return e.push(t.role_id),{value:t.role_id,text:t.role_name}})),-1===e.indexOf("admin")&&t.roles.unshift({value:"admin",text:"超级管理员"})})).catch((function(t){uni.showModal({title:"提示",content:t.message,showCancel:!1})}))}}},d=f,p=(e(33576),e(69453)),v=(0,p.Z)(d,i,s,!1,null,"33379317",null,!1,n,m),b=v.exports},38443:function(t,a,e){"use strict";e.d(a,{Kq:function(){return o},aQ:function(){return r},sC:function(){return s}});var n=e(89029),i=e(23957),s=(e(74916),e(77601),e(24603),e(28450),e(88386),e(39714),e(57658),{username:{rules:[{required:!0,errorMessage:"请输入用户名"},{minLength:3,maxLength:32,errorMessage:"用户名长度在 {minLength} 到 {maxLength} 个字符"},{validateFunction:function(t,a,e,n){return(/^1\d{10}$/.test(a)||/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(a))&&n("用户名不能是：手机号或邮箱"),/^\d+$/.test(a)&&n("用户名不能为纯数字"),/[\u4E00-\u9FA5\uF900-\uFA2D]{1,}/.test(a)&&n("用户名不能包含中文"),!0}}],label:"用户名"},nickname:{rules:[{minLength:3,maxLength:32,errorMessage:"昵称长度在 {minLength} 到 {maxLength} 个字符"},{validateFunction:function(t,a,e,n){return(/^1\d{10}$/.test(a)||/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(a))&&n("昵称不能是：手机号或邮箱"),/^\d+$/.test(a)&&n("昵称不能为纯数字"),!0}}],label:"昵称"},password:{rules:[{required:!0},{format:"password"},{minLength:6}],label:"密码"},mobile:{rules:[{format:"string"},{pattern:"^\\+?[0-9-]{3,20}$"}],label:"手机号码"},status:{rules:[{format:"int"},{range:[{text:"正常",value:0},{text:"禁用",value:1},{text:"审核中",value:2},{text:"审核拒绝",value:3}]}],defaultValue:0,label:"用户状态"},email:{rules:[{format:"string"},{format:"email"}],label:"邮箱"},role:{rules:[{format:"array"}],label:"角色"},last_login_date:{rules:[{format:"timestamp"}]}}),r={status_valuetotext:{0:"正常",1:"禁用",2:"审核中",3:"审核拒绝"}};function o(t,a){var e={};for(var s in t){var r=t[s],o=r.type,l=r.value;switch(o){case"search":"string"===typeof l&&l.length&&(e[s]=new RegExp(l));break;case"select":if(l.length){var u,c=[],m=(0,i.Z)(l);try{for(m.s();!(u=m.n()).done;){var f=u.value;c.push(a.eq(f))}}catch(y){m.e(y)}finally{m.f()}e[s]=a.or(c)}break;case"range":if(l.length){var d=l[0],p=l[1];e[s]=a.and([a.gte(d),a.lte(p)])}break;case"date":if(l.length){var v=(0,n.Z)(l,2),b=v[0],h=v[1],g=new Date(b),x=new Date(h);e[s]=a.and([a.gte(g),a.lte(x)])}break;case"timestamp":if(l.length){var k=(0,n.Z)(l,2),D=k[0],w=k[1];e[s]=a.and([a.gte(D),a.lte(w)])}break}}return e}},86560:function(t,a,e){"use strict";e.r(a);var n=e(8081),i=e.n(n),s=e(23645),r=e.n(s),o=r()(i());o.push([t.id,"[data-v-33379317] .uni-forms-item__label{width:90px!important}",""]),a["default"]=o}}]);