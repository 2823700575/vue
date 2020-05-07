<template>
	<div>
		<Order :serve="serveItem"></Order>
		<Title :title="title"></Title>
		<Info :names="info"></Info>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				serveItem:["积分明细","积分兑换"],
				title:["主题","时间","来自","状态","操作"],
				info:"您当前还没有积分获取记录"
			}
		},
		methods: {
		},
		components:{
			Info: () => import("./Info.vue"),
			Title: () => import("./Title.vue"),
			Order: () => import("./Order.vue")
		}
		
	}
</script>

<style>
</style>
