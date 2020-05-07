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
				serveItem:["积分明细","积分兑换"],
				info:"您当前还没有积分获取记录"
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
