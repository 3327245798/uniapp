// vue.config.js
"use strict";
const path = require("path");
 
function resolve(dir) {
  return path.join(__dirname, dir);
}
 
//解决ws报错
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer:{
    host: '0.0.0.0',
    port:3000,
    client: {
      webSocketURL: 'ws://0.0.0.0:3000/ws',
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
  transpileDependencies: true
})
const name = "在uniapp中使用echarts及自适应界面";
module.exports = {
		transpileDependencies:['@dcloudio/uni-ui','uview-ui'],
		//路径别名
		configureWebpack:{
			name:name,
			resolve:{
				alias:{
					"@":resolve("src"),
					"@i": resolve("src/api"),
					"@c": resolve("src/components"),
					"@a": resolve("src/assets"),
					"@s": resolve("src/styles"),
					"@u": resolve("src/utils"),
					"@v": resolve("src/pages"),
			}
		}
}
}