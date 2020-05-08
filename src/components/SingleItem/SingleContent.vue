<template>
	<div class="singlecontent">
		<div class="singlecontent_show">
			<div class="singlecontent_show_top">
				<!-- 面包屑 -->
				<el-breadcrumb separator-class="el-icon-arrow-right">
					<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
					<el-breadcrumb-item>好买乐</el-breadcrumb-item>
					<el-breadcrumb-item>运动服</el-breadcrumb-item>
					<el-breadcrumb-item>活动详情</el-breadcrumb-item>
				</el-breadcrumb>
			</div>
			<div class="singlecontent_mywords">
				<div>
					<img :src="showdata.imgurl" alt="" style="width: 340px;height: 400px;">
				</div>
				<div class="singlecontent_mywords_2">
					<div style="font-size: 18px;font-weight: bold;height: 40px;line-height: 40px;">{{showdata.text}}</div>
					<div style="font-size: 20px; color: orangered;display: flex;justify-content: flex-start;align-items: center;height: 40px;">
						好乐买价<span style="margin-left: 20px;">¥:</span>
						<span style="font-size: 24px;">{{showdata.nowprice}}</span>
						<span style="color: #CCCCCC;text-decoration: line-through;margin-left: 20px;"><i>{{showdata.prevprice}}</i></span>
						<span style="margin-left: 20px;height: 28px;width: 90px; border-radius: 28px;background-color: orange;display: block;text-align: center;">{{showdata.discount}}折</span>
					</div>
					<div style="display: flex;justify-content: flex-start;align-items: center;height: 40px;">
						活动:<span style="font-size: 20px; margin-left: 20px;height: 28px;width: 90px; border-radius: 28px;background-color: pink;display: block;text-align: center;color: orangered;">满折</span>
					</div>
					<div>
						<div>颜色</div>
						<img :src="showdata.imgurl" alt="" style="height: 60px;width: 60px;margin-left: 20px ;">
					</div>
					<div style="background-color: white;">
						<div>尺码表</div>
						<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
							<el-menu-item index="1">M</el-menu-item>
							<el-menu-item index="2">S</el-menu-item>
							<el-menu-item index="3">XML</el-menu-item>
						</el-menu>
					</div>
					<div>
						数量:
						<div style="display: flex;justify-content: flex-start;align-items: center;">
							<div @click="reduce" style="height: 40px;width: 40px;background-color: #CCC;text-align: center;line-height: 40px;margin-left: 10px;">-</div>
							<div style="height: 40px;width: 40px;background-color: white;text-align: center;line-height: 40px;">{{count}}</div>
							<div @click="add" style="height: 40px;width: 40px;background-color: #ccc;text-align: center;line-height: 40px;">+</div>
						</div>
					</div>
					<div @click="jump">
						<div style="margin: 0px auto;font-size: 30px;height: 80px;width: 180px; border-radius: 80px;background-color: red;text-align: center;color: white;line-height: 80px;">加入购物车</div>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import axios from "axios"
	export default {
		data() {
			return {
				showdata: "",
				activeIndex: '1',
				activeIndex2: '1',
				count: 1,
				size:""
			}
		},
		mounted() {
			// let vuexAdata = this.$store.state.vuexA.singledshow_data ;
			// this.showdata = vuexAdata;
			// console.log(this.$store.state.vuexA.singledshow_dataid,this.$store.state.vuexA.singledshow_datalistname );
			let shoppingid = this.$store.state.vuexA.singledshow_dataid;
			let shoppinglistname = this.$store.state.vuexA.singledshow_datalistname;
			// 发送网络请求，获取数据
			let url = "http://localhost:7001/getsingleitem";
			let obj = {
				myid: shoppingid,
				mylistanme: shoppinglistname
			};
			axios.post(url, obj)
				.then((result) => {
					// console.log(result.data[0],11122)
					this.showdata = result.data[0];
					this.count = this.showdata.count;
					// console.log(this.showdata)
				})
		},
		methods: {
			handleSelect(key, keyPath) {
				if(key==1){
					this.size = "M";
					console.log(this.size)
				}else if(key==2){
					this.size = "S";
					console.log(this.size)
				}else{
					this.size = "XML";
					console.log(this.size)
				}
			},
			reduce(){
				if(this.count<=1){
					this.count = 1;
				}else{
					this.count --;
				}
			},
			add(){
				this.count ++;
			},
			jump(){
				this.$router.push({
					name:"Cart"
				})
			}
		}
	}
</script>

<style scoped="scoped">
	.el-breadcrumb{
		background-color: white;
	}
	.singlecontent {
		width: 100%;
		display: flex;
		justify-content: center;
	}
	
	.singlecontent_show {
		width: 90%;
		background-color: white;
	}

	.singlecontent_show_top {
		margin: 10px;
	}

	.singlecontent_mywords {
		display: flex;
		justify-content: space-between;

	}

	.singlecontent_mywords_2 {
		width: 70%;
		background-color: white;
		padding-left: 10px;
	}

	.singlecontent_mywords_2 div,
	img,
	i,
	span {
		background-color: white;
	}
</style>
