(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[9385],{10230:function(t,e,a){var n=a(52085);n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);var i=a(56).Z;i("36acb5bb",n,!0,{sourceMap:!1,shadowMode:!1})},36991:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return b}});var n={uniForms:a(45442).Z,uniFormsItem:a(8831).Z,uniEasyinput:a(62651).Z,uniDataCheckbox:a(70723).Z},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-container"},[a("uni-forms",{ref:"form",attrs:{value:t.formData,validateTrigger:"bind"}},[a("uni-forms-item",{attrs:{name:"role_id",label:"唯一ID",required:!0}},[a("uni-easyinput",{attrs:{placeholder:"角色唯一标识，不可修改，不允许重复",trim:"both",disabled:!0},model:{value:t.formData.role_id,callback:function(e){t.$set(t.formData,"role_id",e)},expression:"formData.role_id"}})],1),a("uni-forms-item",{attrs:{name:"role_name",label:"名称",required:!0}},[a("uni-easyinput",{attrs:{placeholder:"角色名称",trim:"both"},model:{value:t.formData.role_name,callback:function(e){t.$set(t.formData,"role_name",e)},expression:"formData.role_name"}})],1),a("uni-forms-item",{staticClass:"flex-center-x",attrs:{name:"permission",label:"权限"}},[a("uni-data-checkbox",{attrs:{multiple:!0,collection:"uni-id-permissions","page-size":500,field:"permission_name as text, permission_id as value"},model:{value:t.formData.permission,callback:function(e){t.$set(t.formData,"permission",e)},expression:"formData.permission"}})],1),a("uni-forms-item",{attrs:{name:"comment",label:"备注"}},[a("uni-easyinput",{attrs:{type:"textarea",placeholder:"备注",trim:"both"},model:{value:t.formData.comment,callback:function(e){t.$set(t.formData,"comment",e)},expression:"formData.comment"}})],1),a("v-uni-view",{staticClass:"uni-button-group"},[a("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"},attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v(t._s(t.$t("common.button.submit")))]),a("v-uni-navigator",{staticStyle:{"margin-left":"15px"},attrs:{"open-type":"navigateBack"}},[a("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"}},[t._v(t._s(t.$t("common.button.back")))])],1)],1)],1)],1)},r=[],o=a(41541),s=(a(26699),a(32023),a(47941),a(41539),a(78925)),l=a(65167)["Z"],u=l.database(),c=(u.command,"uni-id-roles");function m(t){var e={};for(var a in s.sC)t.includes(a)&&(e[a]=s.sC[a]);return e}var f,d={data:function(){var t={role_id:"",role_name:"",permission:[],comment:"",create_date:null};return{formData:t,formOptions:{},rules:(0,o.Z)({},m(Object.keys(t)))}},onLoad:function(t){if(t.id){var e=t.id;this.formDataId=e,this.getDetail(e)}},onReady:function(){this.$refs.form.setRules(this.rules)},methods:{submit:function(){var t=this;uni.showLoading({mask:!0}),this.$refs.form.validate().then((function(e){t.submitForm(e)})).catch((function(){uni.hideLoading()}))},submitForm:function(t){var e=this;u.collection(c).doc(this.formDataId).update(t).then((function(t){uni.showToast({title:"修改成功"}),e.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}))},getDetail:function(t){var e=this;uni.showLoading({mask:!0}),u.collection(c).doc(t).field("role_id,role_name,permission,comment,create_date").get().then((function(t){var a=t.result.data[0];a&&(e.formData=a)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}))}}},h=d,p=(a(10230),a(69453)),v=(0,p.Z)(h,i,r,!1,null,"7b347ced",null,!1,n,f),b=v.exports},78925:function(t,e,a){"use strict";a.d(e,{Kq:function(){return s},aQ:function(){return o},sC:function(){return r}});var n=a(89029),i=a(23957),r=(a(24603),a(28450),a(74916),a(88386),a(39714),a(57658),{role_id:{rules:[{required:!0},{format:"string"}],label:"唯一ID"},role_name:{rules:[{required:!0},{format:"string"}],label:"名称"},permission:{rules:[{format:"array"}],label:"权限"},comment:{rules:[{format:"string"}],label:"备注"},create_date:{rules:[{format:"timestamp"}]}}),o={};function s(t,e){var a={};for(var r in t){var o=t[r],s=o.type,l=o.value;switch(s){case"search":"string"===typeof l&&l.length&&(a[r]=new RegExp(l));break;case"select":if(l.length){var u,c=[],m=(0,i.Z)(l);try{for(m.s();!(u=m.n()).done;){var f=u.value;c.push(e.eq(f))}}catch(w){m.e(w)}finally{m.f()}a[r]=e.or(c)}break;case"range":if(l.length){var d=l[0],h=l[1];a[r]=e.and([e.gte(d),e.lte(h)])}break;case"date":if(l.length){var p=(0,n.Z)(l,2),v=p[0],b=p[1],g=new Date(v),_=new Date(b);a[r]=e.and([e.gte(g),e.lte(_)])}break;case"timestamp":if(l.length){var D=(0,n.Z)(l,2),y=D[0],k=D[1];a[r]=e.and([e.gte(y),e.lte(k)])}break}}return a}},52085:function(t,e,a){"use strict";a.r(e);var n=a(8081),i=a.n(n),r=a(23645),o=a.n(r),s=o()(i());s.push([t.id,"[data-v-7b347ced] .uni-forms-item__label{width:90px!important}",""]),e["default"]=s}}]);