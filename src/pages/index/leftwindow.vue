<template>
	<view class="content">
	<uni-collapse>
	<uni-collapse-item title="社区" :open="true">
		<button type="default"  @click="goto('/pages/community/community')">社区首页</button>
		<button type="default" @click="goto('/pages/index/index2')">侧边栏展示及详情页</button>
		
	</uni-collapse-item>
	<uni-collapse-item title="框架">
		<button type="default" @click="goto('/pages/framework/frame')" >框架首页</button>
	</uni-collapse-item>
	<uni-collapse-item title="指南" >
		<button type="default"  @click="goto('/pages/guidelines/guide')">指南首页</button>
	</uni-collapse-item>
	<uni-collapse-item title="element-ui的兼容性" >

		<button type="default"  @click="goto('/pages/elementui/data_eltable')">el-table</button>
	</uni-collapse-item>
	<uni-collapse-item title="uni-ui的兼容性" >
		<button type="default"  @click="goto('/pages/uniui/uni_collpase')">uniui组件库的折叠面板组件</button>
		<button type="default"  @click="goto('/pages/uniui/uni_breadcrumb')">uniui组件库的面包屑组件</button>
	</uni-collapse-item>
	<uni-collapse-item title="uView-ui的兼容性" >
		<button type="default"  @click="goto('/pages/uViewui/uView_actionsheet')">uViewui组件库的actionSheet组件</button>
		<button type="default"  @click="goto('/pages/uViewui/uView_icon')">uViewui组件库的图标组件</button>
		<button type="default"  @click="goto('/pages/uViewui/uView_layout')">uViewui组件库的布局组件</button>
	</uni-collapse-item>
	<uni-collapse-item title="uniapp中echart的使用" >
		<button type="default" @click="goto('/pages/echarts/bar/barEchart')">柱状图</button>
      <button type="default" @click="goto('/pages/echarts/line/baseLineEchart')">基础折线图</button>
      <button type="default" @click="goto('/pages/echarts/line/smoothedlineChart')" >平滑折线图
      </button>
      <button type="default" @click="goto('/pages/echarts/line/basicArea')">
        基础面积图
      </button>
      <button
        type="default"
        @click="goto('/pages/echarts/line/stackedLineChart')"
      >
        折线图堆叠图
      </button>
      <button
        type="default"
        @click="goto('/pages/echarts/line/gradientStsckesAreaChart')"
      >
        渐变堆叠面积图
      </button>
	  <button
        type="default"
        @click="goto('/pages/echarts/line3D/orthographicProjection')"
      >
        三维折线图正交投影
      </button>
     <button
        type="default"
        @click="goto('/pages/echarts/pie/refererOfAWebsite')"
      >
       某站点用户访问源的饼图
      </button>
     <button
        type="default"
        @click="goto('/pages/echarts/pie/nightingaleChart')"
      >
       南丁格尔玫瑰图的饼图
      </button>
	  <button
        type="default"
        @click="goto('/pages/echarts/pie/basicNightingaleChart')"
      >
       基础的南丁格尔玫瑰图的饼图
      </button>
	</uni-collapse-item>
</uni-collapse>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '左侧leftwindow',
				url:'',
			}
		},
		onLoad:function(option) {
			console.log(option.id);
			console.log(option.name)
		},
		methods: {
			goto(url) {
				console.log("进入goto方法")
				uni.navigateTo({
					url:url
				})
			}

		}
	}
</script>

<style>
.uni-button[type=default] {
    color: #000;
    background-color: #f8f8f8;
    font-size: small;
}
	.content {
		display: flex;
		flex-direction: column;
		/*align-items: center;*/
		/*justify-content: center;*/
		background: white;
		height: 600px;
		margin-right: 20px;
	
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
