<template>
  <view class="content">
    <view class="canvasView">
      <l-echart ref="chart" @finished="init"></l-echart>
    </view>
  </view>
</template>

<script>

// 引入echarts文件
	import * as echarts from '@/uni_modules/lime-echart/static/echarts.min'
	import LEchart from '@/uni_modules/lime-echart/components/l-echart/l-echart.vue';
	export default {
        components:{
			LEchart
		},
		data() {
			return {
                option: {
								title: {
									text: '特性示例：渐变色 阴影 点击缩放',
									subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
								},
								xAxis: {
									data: ['海燕', '马小梅', '罗永浩', '卫绍强', '李凤兰', '木管琴', '周少华'],
									type: 'category',
									axisTick: {
									        alignWithLabel: true
									      },
									// axisLine: {
									// 	show: false
									// },
									z: 10
								},
								yAxis: {
									axisLine: {
										show: false
									},
									axisTick: {
										show: false
									},
									axisLabel: {
										color: '#999'
									}
								},
								dataZoom: [
									{
										type: 'inside'
									}
								],
								series: [
									{
										 label: {
										        show: true,
										        position: 'top'
										      },
										type: 'bar',
										showBackground: true,
										stack: 'Total',
										itemStyle: {
											color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
												{ offset: 0, color: '#83bff6' },
												{ offset: 0.5, color: '#188df0' },
												{ offset: 1, color: '#188df0' }
											])
										},
										emphasis: {
											itemStyle: {
												color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
													{ offset: 0, color: '#2378f7' },
													{ offset: 0.7, color: '#2378f7' },
													{ offset: 1, color: '#83bff6' }
												])
											}
										},
										data: [4, 7, 9, 10, 8, 6, 5]
									}
								]
			}
            
        }
        },
        	onLoad() {

		},
		methods: {
             init() {
            this.$refs.chart.init(echarts, chart => {
                chart.setOption(this.option);
            });
        }

	}
    }
    
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
