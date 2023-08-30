<template>
  <view class="content">
    <view class="canvasView">
      <l-echart ref="chart" @finished="init"></l-echart>
    </view>
  </view>
</template>

<script>
// 引入echarts文件
import * as echarts from "@/uni_modules/lime-echart/static/echarts.min";
import LEchart from "@/uni_modules/lime-echart/components/l-echart/l-echart.vue";
var option = {
  legend: {
    top: 'bottom'
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      //dataView: { show: true, readOnly: false },
    //restore: { show: true },
      //saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: [20, 80],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      data: [
        { value: 40, name: 'rose 1' },
        { value: 38, name: 'rose 2' },
        { value: 32, name: 'rose 3' },
        { value: 30, name: 'rose 4' },
        { value: 28, name: 'rose 5' },
        { value: 26, name: 'rose 6' },
        { value: 22, name: 'rose 7' },
        { value: 18, name: 'rose 8' }
      ]
    }
  ]
} ;
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
    display: flex;
    padding: 5px 5px;
    width: 100%;
    height: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
}





</style>
