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
				serveItem:["退换记录","申请退换"],
				info:"您当前还没有退换货记录"
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
