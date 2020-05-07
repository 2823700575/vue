<template>
	<div>
		<Add :addinfo="add"></Add>
		<p>收货地址最多添加3个，您还可以添加3个</p>
		<Info :names="info"></Info>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				add: "添加新地址",
				info: "暂无收货地址信息"
			}
		},
		methods: {},
		components: {
			Info: () => import("./Info.vue"),
			Add: () => import("./Add.vue")
		}

	}
</script>

<style>
	p {
		background-color: #FFFFFF;
		text-align: left;
		font-size: 14px;
		height: 30px;
		line-height: 32px;
		color: #999;
		margin: 5px 30px;
		color: #d70057;
	}
</style>
