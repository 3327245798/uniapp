<script>
import {
		mapActions,
		mapMutations
	} from 'vuex'
	import config from '@/admin.config.js'
	import { uniAdminCacheKey } from './store/constants.js'
	export default {
		created() {
			this.clear = undefined
		},
		methods: {
			...mapMutations('app',['SET_THEME']),
			
			...mapActions({
				init: 'app/init'
			}),
			clearPlatform() {
				const keysOfPlatform = uni.getStorageInfoSync().keys.filter(key => key.indexOf('platform') > -1)
				keysOfPlatform.length && keysOfPlatform.forEach(key => uni.removeStorageSync(key))
			}
		},
		onPageNotFound(msg) {
			uni.redirectTo({
				url: config.error.url
			})
		},
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
			this.clear = setInterval(() => this.clearPlatform(), 15*60*1000)
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/common/uni.css';
	@import '@/common/uni-icons.css';
	@import '@/common/admin-icons.css';
	/*@import '@/common/theme.scss';*/
</style>
