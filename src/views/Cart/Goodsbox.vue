<template>
	<div class="goodsbox">
		<el-row>
			<el-col class="goodsbox_top">
				<span class="promotion"></span>
				<div class="cartlist-active">
					<span>{{data.logo}}</span>
					<span>{{data.youhuitext}}</span>
				</div>
			</el-col>
		</el-row>
		<el-row class="cartlist_info">
			<el-col :span="3">
				<el-checkbox v-model="data.check" :checked="data.check">选择</el-checkbox>
			</el-col>
			<el-col :span="9" class="goods">
				<img class="img" :src="data.imgurl" alt="sf">
				<div class="goods_text">
					<span>{{data.text}}</span>
					<span>{{data.size}}</span>
				</div>
			</el-col>
			<el-col :span="2"><span>￥{{data.nowprice}}</span></el-col>
			<el-col :span="5">
				<Sumbtn class="sum_btn" :index="index"></Sumbtn>
			</el-col>
			<el-col :span="2"><span class="sum">￥{{sum}}</span></el-col>
			<el-col :span="3"><i @click="collect" class="el-icon-star-off" title="收藏"></i><i @click="delect" class="el-icon-delete"
				 title="删除"></i></el-col>
		</el-row>
	</div>
</template>

<script>
	import Sumbtn from './Sumbtn.vue'
	import axios from "axios"
	export default {
		props: ["data", "index"],
		data() {
			return {


			}
		},
		methods: {
			checkedChange() {
				this.data.check = !this.data.check
				console.log(this.$store.state.vuexC.cartGoods[this.index].check, "00000000");
			},
			delect() {
				let flag=confirm("确定删除？");
				if(flag) {
					this.$store.commit('vuexC/delect',{position:this.index})
				}
				console.log(this.$store.state.vuexC.cartGoods,444)
			},
			collect() {
				let collectArr = this.$store.state.vuexC.collect;
				let flag = collectArr.some((item)=>{
					return item.title==this.data.title&&item.img==this.data.img
				})
				if(!flag){
					this.$store.commit('vuexC/collect',this.data)
					confirm("收藏成功");
				}else {
					confirm("你已收藏过该商品！");
				}
				
			}
		},
		computed: {
			sum() {
				let sum = 0;
				console.log(this.checked, 333)
				sum = this.data.count * this.data.nowprice;
				return sum
			}

		},
		components: {
			Sumbtn
		}
	}
</script>

<style scoped="scoped">
	.goodsbox {
		width: 100%;
		height: 180px;
		background-color: #FFFFFF;
	}

	.goodsbox_top {
		display: flex;
		border-top: 1px solid #E8E8E8;
	}

	.promotion {
		display: inline-block;
		width: 150px;
		height: 70px;
	}

	.cartlist_info span {
		display: inline-block;
		height: 20px;
		line-height: 20px;
	}

	.cartlist-active {
		width: 100%;
		height: 70px;
		line-height: 70px;
		font-size: 16px;
		background-color: #FFFFFF;
		border-bottom: 1px dashed #e8e8e8;
	}

	.cartlist-active span {
		display: inline-block;
		height: 20px;
		line-height: 20px;
	}

	.goods_text>span {
		display: block;
		text-align: left;
		cursor: pointer;
		height: 20px;
		line-height: 20px;
	}

	.cartlist-active span:first-child {
		display: inline-block;
		background: #d70057;
		color: #fff;
		padding: 0 5px;
		height: 20px;
		border-radius: 4px;
		font-size: 12px;
		line-height: 20px;
		margin-right: 10px;
	}

	.cartlist_info {
		height: 110px;
		background-color: #FFFFFF;
		text-align: center;
		line-height: 110px;
	}

	.img {
		width: 90px;
		height: 90px;
	}

	.goods_text {
		height: 40px;
	}

	.goods {
		height: 110px;
		font-size: 14px;
		display: flex;
		align-items: center;
	}

	.sum_btn {
		width: 100%;
		height: 100%;
	}

	.sum {
		color: #D70057;
	}

	i {
		font-size: 20px;
		margin: 0 10px;
		background-color: #FFFFFF;
	}

	i:hover {
		color: #D70057;
		cursor: pointer;
	}
</style>
