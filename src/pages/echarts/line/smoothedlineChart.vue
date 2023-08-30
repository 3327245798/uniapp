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
export default {
  components: {
    LEchart,
  },
  data() {
    return {
      option: {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            smooth: true,
          },
        ],
      },
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

<style lang="scss" >
 /*.canvasView {
    padding: 0px 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }*/
.content {
  display: flex;
  .canvasView {
    width: 100%;
    padding: 0px 8px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
}
.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}
</style>
