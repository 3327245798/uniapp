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
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line",
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
