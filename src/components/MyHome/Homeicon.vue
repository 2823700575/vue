<template>
	<div class="allicon">
		<div class="bigimg">
			<img src="http://0.js.al.okbuycdn.com/resources/images/v6/index/ad_7.png" alt="">
		</div>
		<div class="icons">
			<a class="shoeicon" href="http://www.okbuy.com/brand/fuguiniao"  target="_blank" title="三叶草" v-for="(item,index) in iconarr" :key="index">
				<img :src="item.myurl" alt="">
			</a>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				iconarr:[
					{myurl:"http://0.image.al.okbuycdn.com//nbn/l72_50_detect/static/15a959617cb0dc7802db41d93c758923.jpg"},
					{myurl:"http://0.image.al.okbuycdn.com//nbn/l72_50_detect/static/79ee9f430dfd13b990cd211547525441.jpg"},
					{myurl:"http://0.image.al.okbuycdn.com//nbn/l72_50_detect/static/14ff119a643db529a889fd00d59b8776.jpg"},
					{myurl:"http://0.image.al.okbuycdn.com//nbn/l72_50_detect/static/50914de9daeb0112a84387487d4a4b24.png"},
					{myurl:"http://0.image.al.okbuycdn.com//nbn/l72_50_detect/static/882b650945cc0264422fc09e0c8a4e77.png"},
					{myurl:"http://0.image.al.okbuycdn.com//nbn/l72_50_detect/static/c0a5a52354ba4fb3e2911a4e620484da.png"},
					{myurl:"http://0.image.al.okbuycdn.com//nbn/l72_50_detect/static/5c01f7c9851c0adceae1937c3229225a.jpg"},
					{myurl:"http://0.image.al.okbuycdn.com//nbn/l72_50_detect/static/f2bc6eec56cbbad2a43704ddb6eebf1f.jpg"},
					{myurl:"http://0.image.al.okbuycdn.com//nbn/l72_50_detect/static/e2557f55f4a8b1f22eebfd385cee4a1b.png"},
					{myurl:"http://0.image.al.okbuycdn.com//nbn/l72_50_detect/static/7b3c6824f219711181eab764be85e29d.png"},
					{myurl:"http://0.image.al.okbuycdn.com//nbn/l72_50_detect/static/b2e2de252c597cdd44335ec257d9ddb9.jpg"},
					{myurl:"http://0.image.al.okbuycdn.com//nbn/l72_50_detect/static/79ee9f430dfd13b990cd211547525441.jpg"},
					{myurl:"http://0.image.al.okbuycdn.com//nbn/l72_50_detect/static/14ff119a643db529a889fd00d59b8776.jpg"},
					{myurl:"http://0.image.al.okbuycdn.com//nbn/l72_50_detect/static/50914de9daeb0112a84387487d4a4b24.png"},
					{myurl:"http://0.image.al.okbuycdn.com//nbn/l72_50_detect/static/882b650945cc0264422fc09e0c8a4e77.png"},
					{myurl:"http://0.image.al.okbuycdn.com//nbn/l72_50_detect/static/c0a5a52354ba4fb3e2911a4e620484da.png"},
					{myurl:"http://0.image.al.okbuycdn.com//nbn/l72_50_detect/static/5c01f7c9851c0adceae1937c3229225a.jpg"},
					{myurl:"http://0.image.al.okbuycdn.com//nbn/l72_50_detect/static/f2bc6eec56cbbad2a43704ddb6eebf1f.jpg"},
					{myurl:"http://0.image.al.okbuycdn.com//nbn/l72_50_detect/static/e2557f55f4a8b1f22eebfd385cee4a1b.png"},
					{myurl:"http://0.image.al.okbuycdn.com//nbn/l72_50_detect/static/7b3c6824f219711181eab764be85e29d.png"},
					{myurl:"http://0.image.al.okbuycdn.com//nbn/l72_50_detect/static/b2e2de252c597cdd44335ec257d9ddb9.jpg"},
					{myurl:"http://0.image.al.okbuycdn.com//nbn/l72_50_detect/static/15a959617cb0dc7802db41d93c758923.jpg"}
				]
			}
		}
	}
</script>

<style scoped="scoped">
	.allicon{
		width: 100%;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}
	.allicon .bigimg{
		width: 90%;
	}
	.allicon .bigimg .bigimg img{
		width: 100%;
	}
	.icons{
		width: 90%;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	.icons .shoeicon{
		width: 100px;
		height: 66px;
		border: 1px solid red;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.icons .shoeicon img{
		width: 72px;
		height: 50px;
	}
</style>
