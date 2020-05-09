<template>
	<el-container class="cart">
		<!-- nav -->
		<HomeNav></HomeNav>
		<!-- 搜索框 -->
		<HomeSerach></HomeSerach>
		<el-header>
			<h1>我的购物车</h1>
		</el-header>
		<GoodTitle></GoodTitle>
		<Goodsbox v-for="(item,index) in this.$store.state.vuexC.cartGoods" :key="index" :data="item" :index="index"></Goodsbox>
		<GoodsTotal></GoodsTotal>
		<!-- 底部信息 -->
		<BottomInfo></BottomInfo>
	</el-container>
</template>

<script>
	export default {
		name: 'Cart',
		components: {
			HomeNav:()=> import("@/components/MyHome/HomeNav.vue"),
			HomeSerach:()=> import("@/components/MyHome/HomeSerach.vue"),
			GoodTitle: () => import("./GoodTitle.vue"),
			Goodsbox: () => import("./Goodsbox.vue"),
			GoodsTotal: () => import("./GoodsTotal.vue"),
			BottomInfo:()=> import("@/components/MyHome/BottomInfo.vue")
			
		},
		data() {
			return {
			}
		},
		mounted() {
			// console.log(this.$route.query)
		},
		created() {
			//初次加载购物车，从购物车表中获取已加入的商品
			let url = 'http://localhost:7001/getCartInfo';
			this.axios.get(url)
			.then((result)=>{
				console.log(result,result.data.code),5555
				if(result.data.code==200) {
					this.$store.commit('vuexC/changeCart',{cartInfo:result.data.info})
				}
			})
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
	.bottom{
		position: relative;
		left: 0;
		bottom: 0!important;
	}
</style>
