<template>
	<div>
		<Order :serve="serveItem"></Order>
		<Info :names="info"></Info>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				serveItem:["未使用  (0)","已使用  (0)","已过期  (0)"],
				info:"未找到相应优惠券"
			}
		},
		methods: {
		},
		components:{
			Info: () => import("./Info.vue"),
			Order: () => import("./Order.vue")
			
		}
		
	}
</script>

<style>
</style>
