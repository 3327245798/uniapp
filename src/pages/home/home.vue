<template>
  <view class="total">
    <view class="top">
     

     
    </view>
    <view class="content">
      <view class="content-left"> 
	  </view>

    </view>
    <view class="bottom"></view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello首页",
      url: "",
    };
  },
  onLoad: function (option) {
    console.log(option.id);
    console.log(option.name);
  },
  methods: {
 
  },
};
</script>

<style lang="scss">
.total {
	width: 100%;
	height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.top{
	background: #b0c024;
	width: 100%;
	height:60px;
}

.content{
	width: 100%;
	height: 100%;
	background: #1766a3;
}
.content-left{
	width: 20%;
	height: 100%;
	background: #525261;
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
