<template>
	<div class="content1">
		<Order :serve="serveItem"></Order>
		<Info :names="info"></Info>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				serveItem:["全部订单","待支付","待发货","待签收","待评价"],
				info:"您当前还没有符合条件的购物订单!"
			}
		},
		components: {
			Info: () => import("./Info.vue"),
			Order: () => import("./Order.vue")
		},
		methods:{
			
		}
	}
</script>

<style scoped="scoped">
</style>
