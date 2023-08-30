<template>
  <view class="content">
    <view>
      <text class="title">{{ title }}</text>
      <button type="default" @click="goto('/pages/echarts/bar/barEchart')">
        柱状图
      </button>
      <button
        type="default"
        @click="goto('/pages/echarts/line/baseLineEchart')"
      >
        基础折线图
      </button>
      <button
        type="default"
        @click="goto('/pages/echarts/line/smoothedlineChart')"
      >
        平滑折线图
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
	  

	  
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: "echarts各种图表的展示",
    };
  },
  onLoad() {},
  methods: {
    goto(url) {
      console.log("进入goto方法");
      uni.navigateTo({
        url: url,
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
