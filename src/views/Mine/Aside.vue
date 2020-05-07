<template>
	<div class="aside">
		<div class="itemList">
			<h4>订单中心</h4>
			<div v-for="(item,index) in orderItem" :key="index">
				<span :title="item" @click="changeCom">{{item}}</span>
			</div>
		</div>
		<div class="itemList">
			<h4>个人中心</h4>
			<div v-for="(item,index) in personItem" :key="index">
				<span :title="item" @click="changeCom">{{item}}</span>
			</div>
		</div>
		<div class="itemList">
			<h4>客户服务</h4>
			<div v-for="(item,index) in serveItem" :key="index">
				<span :title="item" @click="changeCom">{{item}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				orderItem:["我的订单","评价晒单"],
				personItem:["我的收藏","我的优惠券","我的积分","收货地址管理","实名认证","我的消息"],
				serveItem:["退换货管理","价格保护"]
			}
		},
		methods:{
			changeCom:function(e){
				console.log(e.target,22222222)
				// this.$store.commit('vuexC/changeTable',{table:e.target.innerHTML})
				this.$emit("myevent",e.target.innerHTML)
			}
		}
		
	}
</script>

<style scoped="scoped">
	*{	
		background-color: #FFFFFF;
	}
	.itemList {
		margin: 20px 0; 
	}
	.itemList span{
		font-size: 14px;
		height: 30px;
		line-height: 30px;
	}
	span:hover {
		cursor: pointer;
	}
	.itemList h4 {
	    height: 40px;
	    line-height: 40px;
	    color: #333;
	    font-size: 16px;
	}
</style>
