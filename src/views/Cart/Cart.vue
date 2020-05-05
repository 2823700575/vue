<template>
	<el-container class="cart">
		<el-header>
			<h1>我的购物车</h1>
		</el-header>
		<GoodTitle></GoodTitle>
		<Goodsbox v-for="(item,index) in this.$store.state.vuexC.cartGoods" :key="index" :data="item" :index="index"></Goodsbox>
		<GoodsTotal></GoodsTotal>
	</el-container>
</template>

<script>
	export default {
		name: 'Cart',
		components: {
			GoodTitle: () => import("./GoodTitle.vue"),
			Goodsbox: () => import("./Goodsbox.vue"),
			GoodsTotal: () => import("./GoodsTotal.vue")
			
		},
		data() {
			return {
			}
		},
		
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		background-color: #F5F5F5;
	}

	.cart {
		width: 1200px;
		height: 70px;
		margin: 0 auto;
		background-color: #FFFFFF;
	}

	.cart .el-header {
		height: 70px;
		line-height: 70px;
		padding: 0;
	}
	h1 {
		width: 100%;
		font-size: 30px;
		line-height: 50px;
		color: #333;
		display: inline-block;
		font-weight: normal;
		font-family: 'Microsoft Yahei';
		border-bottom: 6px solid #D70057;
	}
</style>
