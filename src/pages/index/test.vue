<template>
	<view class="content">
		<view>
			<text class="title">{{title}}</text>
			<!--
				<navigator url="/pages/index/test" hover-class="navigator-hover">
					<button type="default">跳转到新页面</button>
				</navigator>-->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '顶部topwindow',
				url:'',
			}
		},
		onLoad:function(option) {
			console.log(option.id);
			console.log(option.name)
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: #9696eb;
		height: 60px;
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
