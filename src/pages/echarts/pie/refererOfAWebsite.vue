<template>
  <view class="content">
    <view class="canvasView">
      <text>某站点用户访问源</text>
      <l-echart ref="chart" @finished="init"></l-echart>
    </view>
  </view>
</template>

<script>
// 引入echarts文件
import * as echarts from "@/uni_modules/lime-echart/static/echarts.min";
import LEchart from "@/uni_modules/lime-echart/components/l-echart/l-echart.vue";
var option = {
  title: {
    text: 'Referer of a Website',
    subtext: 'Fake Data',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};
export default {
  components: {
    LEchart,
  },
  data() {
    return {
    option:option,
    };
  },
  onLoad() {},
  methods: {
    init() {
      this.$refs.chart.init(echarts, (chart) => {
        chart.setOption(this.option);
      });
    },
  },
};
</script>

<style lang="scss">
 .content {
  display: flex;
  .canvasView {
    width: 100%;
    height: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
}





</style>
