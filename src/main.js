import Vue from 'vue'
import App from './App'
import './uni.promisify.adaptor'

import { defineCustomElements, applyPolyfills } from "@se/web-ui/loader";
// protect <se-*></se-*> component for being interpreted by VUE
Vue.config.ignoredElements = [/^se-/];
// Add custom element definition to the windows
// Bind the custom elements to the window object
applyPolyfills().then(() => {
  defineCustomElements(window);
});


//自己定义的highlight代码高亮插件，在utils/highlight.js里
import Highlight from './utils/highlight.js'
Vue.use(Highlight);

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
