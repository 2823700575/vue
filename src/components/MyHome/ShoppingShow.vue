<template>
	<div class="shoppingshow">
		<div class="showbigimg">
			<img src="http://i.okaybuy.cn/static/f90cee3a14cc1ea4c296108b1a68d758.png" alt="">
		</div>
		<div class="showinfo">
			<a href="#" class="showimg" v-for="(item,index) in showdata" :key="index" v-on:click="getbrand(item.brand)">
				<img :src="item.imgsrc" alt="">
				<div class="showword">
					<div class="show_word">{{item.word1}}</div>
					<div class="show_word">{{item.word2}}</div>
					<div class="show_word2">{{item.price}}</div>
					<div>{{showtime}}</div>
				</div>
			</a>
		</div>
		
	</div>
</template>

<script>
	import axios from "axios"
	export default{
		data(){
			return {
				showdata:"",
				showtime:""
			}
		},
		mounted() {
			let url = "http://localhost:7001/allshoppings";
			axios.post(url)
			.then((result)=>{
				this.showdata =  result.data;
			})
		},
		methods:{
			// brand :品牌
			getbrand(shoppingbrand){
				// console.log(shoppingbrand,"shopping111111");
				this.$router.push({
					name: "ProductDetails",       
					query: {         //参数携带方式
					  brand: shoppingbrand
					}
				})
			}
		}
	}
</script>

<style scoped="scoped">
	.shoppingshow{
		background-color: white;
		width: 100%;
		height: 500px;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}
	.showbigimg{
		width: 90%;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	.showinfo{
		width: 90%;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	.showimg{
		position: relative;
	}
	.showword{
		position: absolute;
		top: 80px;
		left: 60px;
	}
	.showword .show_word{
		color: black;
		background-color: white;
		margin: 4px 0;
	}
	.showword .show_word2{
		color: orange;
		font-size: 20px;
		background-color: pink;
	}
</style>
