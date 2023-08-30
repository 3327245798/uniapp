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
  title: {
    /*text: 'Nightingale Chart',
    subtext: 'Fake Data',
    left: 'center'*/
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    left: 'center',
    top: 'bottom',
    data: [
      'rose1',
      'rose2',
      'rose3',
      'rose4',
      'rose5',
      'rose6',
      'rose7',
      'rose8'
    ]
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      //dataView: { show: true, readOnly: false },
    //  restore: { show: true },
     // saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: 'Radius Mode',
      type: 'pie',
      radius: [20, 140],
      center: ['25%', '50%'],
      roseType: 'radius',
      itemStyle: {
        borderRadius: 5
      },
      label: {
        show: false
      },
      emphasis: {
        label: {
          show: true
        }
      },
      data: [
        { value: 40, name: 'rose 1' },
        { value: 33, name: 'rose 2' },
        { value: 28, name: 'rose 3' },
        { value: 22, name: 'rose 4' },
        { value: 20, name: 'rose 5' },
        { value: 15, name: 'rose 6' },
        { value: 12, name: 'rose 7' },
        { value: 10, name: 'rose 8' }
      ]
    },
    {
      name: 'Area Mode',
      type: 'pie',
      radius: [20, 140],
      center: ['75%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 5
      },
      data: [
        { value: 30, name: 'rose 1' },
        { value: 28, name: 'rose 2' },
        { value: 26, name: 'rose 3' },
        { value: 24, name: 'rose 4' },
        { value: 22, name: 'rose 5' },
        { value: 20, name: 'rose 6' },
        { value: 18, name: 'rose 7' },
        { value: 16, name: 'rose 8' }
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
    width: 100%;
    height: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
}





</style>
