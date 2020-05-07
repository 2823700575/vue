<template>
	<div class="proshow">
		<div class="proshow_shopping">
			<div class="zt_25_list" v-for="(item,index) in dataarr" :key="item.id">
				<a href="#" title="阿迪达斯运动生活-跑步运动圆领短袖T恤-白色-EJ7080" target="_blank"><img :src="item.imgurl"
					 alt="阿迪达斯运动生活-跑步运动圆领短袖T恤-白色-EJ7080" class="zt_25_img"></a>
				<span class="zt_25_logobg"><span class="BLB"><img :src="item.icon"></span></span>
				<a href="#" class="zt_25_link" title="阿迪达斯运动生活-跑步运动圆领短袖T恤-白色-EJ7080" target="_blank">{{item.text}}</a>
				<span class="zt_25_link">¥<span id="17777750" class="zt_25_pr">{{item.nowprice}}</span><i><span>{{item.prevprice}}</span></i></span>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from "axios"
	export default {
		data(){
			return {
				dataarr:""
			}
		},
		mounted() {
			// console.log(this.$store.state.vuexA.productShow_data)
			let getmyserachdata = this.$store.state.vuexA.productShow_data; //通过仓库将父组件的中，传过来并赋值给变量
			let url = "http://localhost:7001/productShow";
			let obj = {
				sqllistname: getmyserachdata
			};
			axios.post(url, obj)
				.then((result) => {
					// console.log(result.data);
					this.dataarr = result.data;
				})
		}
	}
</script>

<style scoped="scoped">
	.proshow{
		display: flex;
		justify-content: space-around;
	}
	.proshow_shopping{
		width: 90%;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	/* 商品的展示 */
	.zt_25_list {
		float: left;
		display: inline;
		width: 270px;
		height: 394px;
		overflow: hidden;
		background-color: #fff;
		position: relative;
		border: 1px solid white;
	}

	.zt_25_list .zt_25_img {
		width: 270px;
		margin: 0 0 16px 0;
	}

	img {
		vertical-align: top;
	}

	.zt_25_list .zt_25_img {
		width: 270px;
		margin: 0 0 16px 0;
	}

	.zt_25_list .zt_25_logobg {
		height: 50px;
		margin-bottom: 10px;
		display: block;
		width: auto;
		/* 两条杠杠 */
		background: url(http://0.js.al.okbuycdn.com/resources/images/v6/product/zt/zt_22_list_bg.png) no-repeat center center;
	}
	img[data-v-eaa13e40] {
	    vertical-align: top;
	    margin: 0 100px;
	}
	.zt_25_list .zt_25_link {
		margin-top: 6px;
		text-align: center;
		display: block;
		color: black;
		font-size: 14px;
		text-decoration: none;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.zt_25_list span.zt_25_link .zt_25_pr {
		font-family: Verdana;
		color: #d70057;
		font-size: 18px;
		font-weight: normal;
		margin-left: 3px;
	}

	.zt_25_list span.zt_25_link i {
		color: #999;
		margin-left: 10px;
		text-decoration: line-through;
	}
</style>
