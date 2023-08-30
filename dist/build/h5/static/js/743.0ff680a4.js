"use strict";(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[743,302,2510],{50302:function(e,t,n){n.r(t),n.d(t,{A:function(){return o}});var o={link:"www.schneider-electric.com",domain:"ecostruxure",copyright:"This application is protected by copyright law and international treaties. © 2020 Schneider Electric Industries SAS. All Rights Reserved."}},80743:function(e,t,n){n.r(t),n.d(t,{se_authentication:function(){return l}});var o=n(96971),i=n(92510),r=n(50302),a='.se-authentication{position:absolute;top:0;bottom:0;left:0;right:0;background-color:var(--se-background-standard, #f7f7f7);z-index:300}.se-authentication.hide{display:none}.content-wrapper{display:-ms-flexbox;display:flex;-moz-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:relative;-ms-flex-pack:justify;justify-content:space-between;overflow:hidden;padding:0;-webkit-box-shadow:0 1px 1px 1px #c2c2c2;box-shadow:0 1px 1px 1px #c2c2c2}.image-container{position:absolute;top:0;bottom:0;left:0;right:0;width:100%;height:100%;overflow:hidden;transform:translate3d(0, 0, 0);-webkit-transform:translate3d(0, 0, 0)}.image-background{position:absolute;width:102%;height:102%;top:-2px;background-position:center, center;background-repeat:no-repeat;background-origin:content-box;background-size:cover}:host(:not([dir="rtl"])) .image-background{left:-2px}:host([dir="rtl"]) .image-background{right:-2px}main{-moz-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;display:-ms-flexbox;display:flex;-moz-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:end;justify-content:flex-end;height:36.5%;overflow:hidden}.green-bars{-moz-flex-direction:column;-ms-flex-direction:column;flex-direction:column;display:-ms-flexbox;display:flex;-moz-flex:0 0 36.5%;-ms-flex:0 0 36.5%;flex:0 0 36.5%;z-index:2}.dark-green-bar,.light-green-bar{background-color:var(--se-primary, #3dcd58);-moz-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;height:40px}.dark-green-bar{opacity:0.5}.login-container{background-color:var(--se-background-alternative, #ffffff);display:-ms-flexbox;display:flex;-moz-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:100%;z-index:1}.information,.form{-moz-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;-moz-flex-direction:column;-ms-flex-direction:column;flex-direction:column;display:-ms-flexbox;display:flex;overflow:hidden;z-index:2}.form{-ms-flex-line-pack:center;align-content:center;-ms-flex-pack:center;justify-content:center;padding:0 60px;max-width:300px}.information{-ms-flex-pack:end;justify-content:flex-end;color:var(--se-primary, #3dcd58);padding:60px}:host(:not([dir="rtl"])) .information{padding-right:0}:host([dir="rtl"]) .information{padding-left:0}.header-title{color:var(--se-primary, #3dcd58);font-size:40px;padding-top:14px;padding-bottom:24px;line-height:1;margin:0;width:400px}:host(:not([dir="rtl"])) .header-title{padding-left:0}:host([dir="rtl"]) .header-title{padding-right:0}.header-title .light{font-weight:300}footer{display:-ms-flexbox;display:flex;-moz-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;-moz-align-items:center;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;height:17%;overflow:hidden;color:#ffffff;font-size:14px;z-index:2}.copyright-note{max-width:450px}:host(:not([dir="rtl"])) .copyright-note{margin-left:25px}:host([dir="rtl"]) .copyright-note{margin-right:25px}.footer-logo{-moz-flex:auto 1 auto;-ms-flex:auto 1 auto;flex:auto 1 auto;max-width:300px}:host(:not([dir="rtl"])) .footer-logo{text-align:right}:host([dir="rtl"]) .footer-logo{text-align:left}@media only screen and (min-width: 600px){.content-wrapper{margin:18px auto;max-width:960px;min-height:575px;height:auto}:host(:not([dir="rtl"])) .footer-logo{margin-right:25px}:host([dir="rtl"]) .footer-logo{margin-left:25px}}@media only screen and (max-width: 600px){.login-container{-moz-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.information{padding:32px}.form{padding:0px 32px 32px;margin:auto}footer{-moz-flex-direction:column;-ms-flex-direction:column;flex-direction:column}}',l=function(){function e(e){(0,o.r)(this,e),this.appTitle=void 0,this.version=void 0,this.domain=r.A.domain,this.copyright=r.A.copyright,this.imageUrl=void 0,this.hide=!1}return e.prototype.renderAuthentication=function(){var e,t=(0,i.g)(this.appTitle);return"ecostruxure"===this.domain.toLowerCase()?e=(0,o.h)("se-icon-ecostruxure",{size:"medium"}):"none"!==this.domain.toLowerCase()&&(e=(0,o.h)("span",null,this.domain)),(0,o.h)("div",{class:"content-wrapper"},(0,o.h)("div",{class:"image-container"},(0,o.h)("img",{class:"image-background",style:{backgroundImage:this.imageUrl}})),(0,o.h)("main",null,(0,o.h)("div",{class:"green-bars"},(0,o.h)("div",{class:"dark-green-bar"}),(0,o.h)("div",{class:"light-green-bar"}))),(0,o.h)("div",{class:"login-container"},(0,o.h)("div",{class:"information"},e,(0,o.h)("h1",{class:"header-title"},t.first,(0,o.h)("span",{class:"light"}," ",t.last)),(0,o.h)("p",null,"version ",this.version)),(0,o.h)("div",{class:"form"},(0,o.h)("slot",null))),(0,o.h)("footer",null,(0,o.h)("div",{class:"copyright-note"},(0,o.h)("span",null,this.copyright)),(0,o.h)("div",{class:"footer-logo"},(0,o.h)("se-icon-lifeison",null))))},e.prototype.render=function(){return(0,o.h)("div",{class:["se-authentication",this.hide?"hide":""].join(" ")},this.hide?"":this.renderAuthentication())},e}();l.style=a},92510:function(e,t,n){function o(e){var t="",n="";if(e&&e.length){var o=e.split(" ");o.length>1&&(t=o.pop()),n=o.length?o.join(" "):""}return{first:n,last:t}}function i(e){var t="",n="";if(e&&e.length){var o=e.split(" ©");o.length>1&&(t="©"+o.pop()),n=o.length?o.join(" "):""}return{first:n,last:t}}function r(){return!!window["MSInputMethodContext"]&&!!document["documentMode"]}function a(e,t,n){var o=void 0,i=e.nodeName.toUpperCase(),r=e.parentNode;if("SE-LIST"===i)return!0;if(o=window.getComputedStyle(e,null),null===o)return!1;var l=!e.offsetParent,d="none"===o.getPropertyValue("display"),c="STYLE"===i.toUpperCase()||"SCRIPT"===i.toUpperCase(),s=t&&"true"===e.getAttribute("aria-hidden"),f=!n&&"hidden"===o.getPropertyValue("visibility");return!(l||d||c||s||f)&&(!!r&&a(r,t,!0))}function l(e,t){var n;return function(){for(var o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];var r=function(){return e.apply(void 0,o)};n&&clearTimeout(n),n=setTimeout(r,t>0?t:300)}}function d(){return!("undefined"===typeof window||!("ontouchstart"in window||window["DocumentTouch"]&&"undefined"!==typeof document&&document instanceof window["DocumentTouch"]))}function c(e){return Number.isInteger(e)||new RegExp("^[0-9]*$").test(e)}function s(e,t){for(var n=0,o=Object.keys(t);n<o.length;n++){var i=o[n];e.dataset[i]=t[i]}}n.r(t),n.d(t,{a:function(){return r},b:function(){return c},c:function(){return a},d:function(){return l},e:function(){return i},g:function(){return o},i:function(){return d},r:function(){return f},s:function(){return s}});var f=function(e){return new ResizeObserver((function(t){window.requestAnimationFrame((function(){Array.isArray(t)&&t.length&&e()}))}))}}}]);