<template>
	<!-- 单件商品显示页面 -->
	<div>
		<!-- 商品详情页面 -->
		<HomeNav></HomeNav>
		<!-- 搜索框 -->
		<HomeSerach></HomeSerach>
		<!-- 轮播 -->
		<HomeCarousel></HomeCarousel>
		<!-- 内容部分 -->
		<SingleContent></SingleContent>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				
			}
		},
		mounted() {
			let shoppingarr = this.$route.query
			// console.log(shoppingarr.singledataarr);
			// this.$store.commit("vuexA/singledshow_datafun",{dataarr:shoppingarr.singledataarr})
			this.$store.commit("vuexA/singledshow_datafun",{shoppingid:shoppingarr.shoppingid,listname:shoppingarr.listname})
		},
		components: {
			"HomeNav": () => import("../components/MyHome/HomeNav.vue"),
			"HomeSerach": () => import("../components/MyHome/HomeSerach.vue"),
			"HomeCarousel": () => import("../components/ProductDetails/ProductNav.vue"),
			"SingleContent":() => import("../components/SingleItem/SingleContent.vue"),
		}
	}
</script>

<style scoped="scoped">
	
</style>
