<template>
<view>
		  <view class="container">
	<u-action-sheet :list="list" v-model="show"></u-action-sheet>
      </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					text: '点赞',
					color: 'blue',
					fontSize: 28
				}, {
					text: '分享'
				}, {
					text: '评论'
				}],
				show: true
			}
		}
	}
</script>
<style lang="scss">
	
</style>