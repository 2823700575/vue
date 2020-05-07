<template>
	<div>
		<!-- 商品详情页面 -->
		<HomeNav></HomeNav>
		<!-- 搜索框 -->
		<HomeSerach></HomeSerach>
		<!-- 轮播 -->
		<HomeCarousel></HomeCarousel>
		<!-- 展示商品 -->
		<ProductShow></ProductShow>
		<BottomInfo></BottomInfo>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		components: {
			"HomeNav": () => import("../components/MyHome/HomeNav.vue"),
			"HomeSerach": () => import("../components/MyHome/HomeSerach.vue"),
			"HomeCarousel": () => import("../components/ProductDetails/ProductNav.vue"),
			"ProductShow": () => import("../components/ProductDetails/ProductShow.vue"),
			"BottomInfo": () => import("../components/ProductDetails/BottomInfo.vue"),
		},
		mounted() {
			let paramsObj = this.$route.query;
			// console.log(paramsObj.brand,1111)
			this.$store.commit('vuexA/productShow_datafunction', {
				mybrand: paramsObj.brand
			}) //对仓库中的数据进行更改，方便子组件
			// 进行访问
		}
	}
</script>

<style>
</style>
