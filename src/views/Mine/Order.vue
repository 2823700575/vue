<template>
	<div class="orderBox" >
		<span v-for="(item,index) in serve" :key="index">{{item}}</span>
	</div>
</template>

<script>
	export default {
		data() {  
			return {
				// show:this.$store.state.vuexC.serveItem[1]
			}
		},
		props:["serve"],
		// computed:{
		// 	names:function(){
		// 		console.log(this.show,44)
		// 		//根据组件内容切换选项
		// 		let showItem = this.$store.state.vuexC;
		// 		switch(this.$store.state.vuexC.orderInfo){
		// 			case "我的订单": this.show = this.$store.state.vuexC.serveItem[1];break;
		// 			case "评价晒单": this.show =this.$store.state.vuexC.serveItem[1];break;
		// 			case "我的优惠券": this.show = this.$store.state.vuexC.serveItem[2];break;
		// 			case "我的积分": this.show = this.$store.state.vuexC.serveItem[3];break
		// 			case "退换货管理": this.show =this.$store.state.vuexC.serveItem[4];break;
		// 			case "价格保护": this.show = this.$store.state.vuexC.serveItem[5];break;
		// 			default:this.show = this.$store.state.vuexC.serveItem[0];break;
		// 		}
		// 		return this.show
		// 	}
		// }
		
	}
</script>

<style scoped="scoped">
	*{
		background-color: #FFFFFF;
	}
	.orderBox {
		padding: 40px 30px;
		width: 800px;
		height: 30px;
	    line-height: 32px;
	    font-family: 'Microsoft Yahei';
	    font-size: 14px;
	    color: #666;
	}
	span {
		width: 60px;
		text-align: left;
		height: 100%;
	}
	span::after {
		content: "|";
		margin: 0 20px;
	}
	span:last-child::after {
		content: "";
	}
	.orderBox {
	    text-align: left;
	}
</style>
