(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[4014],{25388:function(t,n,e){var i=e(84871);i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);var a=e(56).Z;a("22291668",i,!0,{sourceMap:!1,shadowMode:!1})},95840:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return h}});var i={uniForms:e(45442).Z,uniFormsItem:e(8831).Z},a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"uni-container"},[e("uni-forms",{ref:"form",attrs:{value:t.formData,validateTrigger:"bind"}},[e("uni-forms-item",{attrs:{name:"permission_id",label:"权限ID",required:!0}},[e("v-uni-input",{staticClass:"uni-input-border",attrs:{placeholder:"权限唯一标识，不可修改，不允许重复",trim:"both"},on:{input:function(n){arguments[0]=n=t.$handleEvent(n),t.binddata("permission_id",n.detail.value)}},model:{value:t.formData.permission_id,callback:function(n){t.$set(t.formData,"permission_id",n)},expression:"formData.permission_id"}})],1),e("uni-forms-item",{attrs:{name:"permission_name",label:"权限名称",required:!0}},[e("v-uni-input",{staticClass:"uni-input-border",attrs:{placeholder:"权限名称",trim:"both"},on:{input:function(n){arguments[0]=n=t.$handleEvent(n),t.binddata("permission_name",n.detail.value)}},model:{value:t.formData.permission_name,callback:function(n){t.$set(t.formData,"permission_name",n)},expression:"formData.permission_name"}})],1),e("uni-forms-item",{attrs:{name:"comment",label:"备注"}},[e("v-uni-textarea",{staticClass:"uni-textarea-border",attrs:{placeholder:"备注",trim:"both"},on:{input:function(n){arguments[0]=n=t.$handleEvent(n),t.binddata("comment",n.detail.value)}},model:{value:t.formData.comment,callback:function(n){t.$set(t.formData,"comment",n)},expression:"formData.comment"}})],1),e("v-uni-view",{staticClass:"uni-button-group"},[e("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"},attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.submit.apply(void 0,arguments)}}},[t._v(t._s(t.$t("common.button.submit")))]),e("v-uni-navigator",{staticStyle:{"margin-left":"15px"},attrs:{"open-type":"navigateBack"}},[e("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"}},[t._v(t._s(t.$t("common.button.back")))])],1)],1)],1)],1)},s=[],o=e(41541),r=(e(26699),e(32023),e(47941),e(41539),e(26467)),u=e(65167)["Z"],m=u.database(),l=(m.command,"uni-id-permissions");function c(t){var n={};for(var e in r.sC)t.includes(e)&&(n[e]=r.sC[e]);return n}var d,f={data:function(){var t={permission_id:"",permission_name:"",comment:""};return{formData:t,formOptions:{},rules:(0,o.Z)({},c(Object.keys(t)))}},onReady:function(){this.$refs.form.setRules(this.rules)},methods:{submit:function(){var t=this;uni.showLoading({mask:!0}),this.$refs.form.validate().then((function(n){t.submitForm(n)})).catch((function(){uni.hideLoading()}))},submitForm:function(t){var n=this;m.collection(l).add(t).then((function(t){uni.showToast({title:"新增成功"}),n.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}))}}},p=f,v=(e(25388),e(69453)),b=(0,v.Z)(p,a,s,!1,null,"e8de5626",null,!1,i,d),h=b.exports},26467:function(t,n,e){"use strict";e.d(n,{aQ:function(){return a},sC:function(){return i}});e(89029),e(23957),e(24603),e(28450),e(74916),e(88386),e(39714),e(57658);var i={permission_id:{rules:[{required:!0},{format:"string"}],label:"权限标识"},permission_name:{rules:[{required:!0},{format:"string"}],label:"权限名称"},comment:{rules:[{format:"string"}],label:"备注"}},a={}},84871:function(t,n,e){"use strict";e.r(n);var i=e(8081),a=e.n(i),s=e(23645),o=e.n(s),r=o()(a());r.push([t.id,"[data-v-e8de5626] .uni-forms-item__label{width:90px!important}",""]),n["default"]=r}}]);