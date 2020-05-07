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
				serveItem:["申请纪录","申请价格保护"],
				info:"申请纪录"
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
