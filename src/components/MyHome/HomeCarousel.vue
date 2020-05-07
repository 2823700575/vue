<template>
	<div class="home_carousel">
		<!-- 轮播的导航 -->
		<div>
			<el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
			 background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
				<el-menu-item index="1">首页</el-menu-item>
				<el-menu-item index="2" class="sportslife">运动生活
					<div class="isshow">
						<!--运动生活start-->
						<h3>品类导购</h3>
						<div>
							<h4>运动鞋</h4>
							<div class="allshoes">
								<a href="http://www.okbuy.com/shoe/49" target="_blank">跑步鞋</a>
								<a href="http://www.okbuy.com/shoe/62" target="_blank">复古鞋</a>
								<a href="http://www.okbuy.com/shoe/319" target="_blank">休闲鞋</a>
								<a href="http://www.okbuy.com/shoe/57" target="_blank">帆布鞋</a>
								<a href="http://www.okbuy.com/shoe/55" target="_blank">板鞋</a>
								<a href="http://www.okbuy.com/shoe/55" target="_blank">运动生活系列</a>
								<a href="http://www.okbuy.com/shoe/65" target="_blank">滑板鞋</a>
								<a href="http://www.okbuy.com/shoe/52" target="_blank">篮球鞋</a>
								<a href="http://www.okbuy.com/shoe/56" target="_blank">凉鞋/凉拖</a>
								<a href="http://www.okbuy.com/shoe/316" target="_blank">健步鞋</a>
								<a href="http://www.okbuy.com/shoe/53" target="_blank">足球鞋</a>
								<a href="http://www.okbuy.com/shoe/51" target="_blank">羽毛球鞋</a>
								<a href="http://www.okbuy.com/shoe/54" target="_blank">网球鞋</a>
								<a href="http://www.okbuy.com/shoe/58" target="_blank">乒乓球鞋</a>
							</div>
						</div>
					</div>
				</el-menu-item>
				<el-menu-item index="3">休闲服饰</el-menu-item>
				<el-menu-item index="4">男女名鞋</el-menu-item>
			</el-menu>

		</div>
		<!-- 轮播 -->
		<div>
			<div class="block">
				<el-carousel height="350px">
					<el-carousel-item v-for="(item,index) in imgarr" :key="index">
						<img :src="item.url1" alt="" class="myimg">
					</el-carousel-item>
				</el-carousel>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: '1',
				activeIndex2: '1',
				imgarr: [{
						url1: "http://i.okaybuy.cn/static/9bdb541c5f8e55bc1c60c7ab01f2d48d.jpg"
					},
					{
						url1: "http://i.okaybuy.cn/static/ccf9f7b2b3a29305d8552b2649a40cba.jpg"
					},
					{
						url1: "http://i.okaybuy.cn/static/d20cc553cb53349bd39fe3715ce7d9ba.jpg"
					},
					{
						url1: "http://i.okaybuy.cn/static/bcb61cbf7a6be2f08808ee16097d7bf4.jpg"
					}
				]
			}
		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			}
		}

	}
</script>

<style scoped="scoped">
	.el-carousel__item h3 {
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
		line-height: 150px;
		margin: 0;
	}

	.myimg {
		width: 100%;
		height: 350px;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: orange;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: orangered;
	}
	
	/* 运动生活hover */
	.sportslife {
		position: relative;
	}
	.sportslife:hover .isshow {
		display: block;
	}
	.isshow {
		display: none;
		position: absolute;
		top: 30px;
		left: 0;
		z-index: 100;
		width: 360px;
		background-color: white;
		color: black;
	}
	.isshow .allshoes[data-v-37b94ae3] {
	    display: flex;
	    justify-content: space-around;
		flex-wrap: wrap;
	}
	.isshow .allshoes a{
		text-decoration: none;
		font-size: 14px;
		margin: 10px;
	}
	.isshow .allshoes a:hover{
		color: orangered;
	}
	
	
</style>
