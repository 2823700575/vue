<template>
	<div class="goodsTotal">
		<el-row class="goodsCheck">
			<el-col :span="3">
				<el-checkbox v-model="checkAll" checked="true" false-label="false" true-label="true">全选</el-checkbox>
			</el-col>
			<el-col :span="2" class="delect">
				<span @click="delect">删除所选商品</span>
			</el-col>
			<el-col :span="7">
				<span>商品数量: <span class="color">{{num}}</span></span>
			</el-col>
			<el-col :span="2"><span>商品金额:<span class="color">￥{{total}}</span></span></el-col>
			<el-col :span="2">
				<span>活动优惠：<span class="color">{{del}}</span></span>
			</el-col>
			<el-col :span="5"><span>合计(不含运费)：<span class="color sizes">￥{{finalPrice}}</span></span></el-col>
			<el-col :span="3"  class="submit_bg"><span>去结算</span></el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				checkAll:"",
			}
		},
		methods:{
			delect() {
				let goodsArr = this.$store.state.vuexC.cartGoods;
				let flag=confirm("确定删除选中的商品？");
				if(flag) {
					let res = goodsArr.filter(function(item){
					      //得到要保留的数组
					      return item.check==false;
					  });
					this.$store.commit('vuexC/delectCheck',{arr:res})
					
				}
				console.log(this.$store.state.vuexC.cartGoods,444)
			},
		},
		computed:{
			total(){
				let sum = 0;
				let cartArr=this.$store.state.vuexC.cartGoods;
				for (let i = 0; i < cartArr.length; i++) {
					if(cartArr[i].check){
						sum+=cartArr[i].num*cartArr[i].price;
					}else{continue;}
				}
				return  Math.floor(sum)
			},
			finalPrice(){
				let sum = 0;
				let cartArr=this.$store.state.vuexC.cartGoods;
				for (let i = 0; i < cartArr.length; i++) {
					if(cartArr[i].check){
						sum+=cartArr[i].num*cartArr[i].price*cartArr[i].discount*0.1;
					}else{continue;}
				}
				return Math.floor(sum)
			},
			del(){
				let sum1 = 0;
				let sum2 = 0;
				let cartArr=this.$store.state.vuexC.cartGoods;
				for (let i = 0; i < cartArr.length; i++) {
					if(cartArr[i].check){
						sum1+=cartArr[i].num*cartArr[i].price*cartArr[i].discount*0.1;
						sum2+=cartArr[i].num*cartArr[i].price;
					}else{continue;}
				}
				let sum=sum2-sum1
				return Math.floor(sum)
			},
			num(){
				let sum = 0;
				let cartArr=this.$store.state.vuexC.cartGoods;
				for (let i = 0; i < cartArr.length; i++) {
					if(cartArr[i].check){
						sum+=cartArr[i].num;
					}else{continue;}
				}
				return Math.floor(sum)
			},
		},
		
	}
</script>

<style>
	.goodsTotal {
		width: 100%;
		margin: 30px 0;
		text-align: center;
	}
	.goodsCheck {
		height: 60px;
		line-height: 60px;
		background-color: #FFFFFF;
	}
	.goodsCheck span {
		display: inline-block;
		height: 20px;
		line-height: 20px;
		font-size: 12px;
	}
	.color {
		color: #D70057;
		padding-left: 4px;
	}
	.delect:hover {
		cursor: pointer;
	}
	.goodsCheck .sizes{
		font-size: 24px
	}
	.submit_bg{
		background-color: #D70057;
	}
	.submit_bg>span{
		background-color: #D70057;
		color: #FFFFFF;
		font-size: 24px;
	}
</style>
