<template>
	<div class="content1">
		<h3>{{sidedata}}</h3>
		<div :is="TabC"></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				TabC:"TabCom",	
			}
		},
		components: {
			TabCom: () => import("./TabCom.vue"),
			Mycollection: () => import("./Mycollection.vue"),
			Coupon: () => import("./Coupon.vue"),
			Integrate: () => import("./Integrate.vue"),
			Address: () => import("./Address.vue"),
			Certification: () => import("./Certification.vue"),
			MyNews: () => import("./MyNews.vue"),
			Exchanged: () => import("./Exchanged.vue"),
			Protection: () => import("./Protection.vue")
		},
		props:["sidedata"],
		methods:{
			toNews() {
				this.com = "One"
			},
			toSports() {
				this.com = "Two"
			},
			toGuoji(){
				this.com = "Three"
			},
			
		},
		watch:{
			sidedata(){
				console.log(this.sidedata,33)
				//根据Aside切换组件
				switch(this.sidedata){
					case "我的订单": this.TabC = "TabCom";break;
					case "评价晒单": this.TabC ="TabCom";break;
					case "我的收藏": this.TabC ="Mycollection";break;
					case "我的优惠券": this.TabC = "Coupon";break;
					case "我的积分": this.TabC ="Integrate";break;
					case "收货地址管理": this.TabC = "Address";break;
					case "实名认证": this.TabC ="Certification";break;
					case "我的消息": this.TabC ="MyNews";break;
					case "退换货管理": this.TabC ="Exchanged";break;
					case "价格保护": this.TabC ="Protection";break;
				}
				
			}
		}
	}
</script>

<style scoped="scoped">
	*{
		background-color: #FFFFFF;
	}
	h3 {
	    vertical-align: middle;
	    line-height: 50px;
		font-weight: normal;
	    font-family: 'Microsoft Yahei';
	    font-size: 30px;
	    color: #666;
		margin: 30px;
		text-align: left!important;
	}
	.content1 {
		width: 920px;
	}
</style>
