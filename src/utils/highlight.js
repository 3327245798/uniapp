import Vue from 'vue'
 // 自定义代码高亮插件
 import hljs from 'highlight.js'
 import 'highlight.js/styles/dark.css'
 //import 'highlight.js/styles/atom-one-dark-reasonable.css'

 const install=function(Vue){
    Vue.directive('highlight',
    {
        deep:true,
        bind(el,binding){
            let targets=el.querySelectorAll('code')
            targets.forEach(target=>{
                if(typeof binding.value==='string'){
                    target.textContent=binding.value

                }
                hljs.highlightBlock(target)
            })
        },
        componentUpdated(el,binding){
            let taregts=el.querySelectorAll('code');
            taregts.forEach(target=>{
                if(typeof binding.value==='string'){
                  target.textContent=binding.value
                  hljs.highlightBlock(target)  
                }
            })
        }
    })
 }
 Vue.use(install)
 export default install