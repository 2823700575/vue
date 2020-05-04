<template>
	<div class="serach">
		<div class="serachleft">
			<img src="http://0.js.al.okbuycdn.com/resources/images/v6/index/logo.png" alt="">
		</div>
		<div class="serachcenter">
			<div class="serach_input">
				<el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
					<el-button slot="append" icon="el-icon-search" ></el-button>
				</el-input>
			</div>
			<div>
				<span class="hotWords">
					<a href="http://www.okbuy.com/clothes/401" data-ref="i_hotkey" target="_blank">夹克外套</a>
					<a href="http://www.okbuy.com/brand/crocs" data-ref="i_hotkey" target="_blank">卡骆驰</a>
					<a href="http://www.okbuy.com/brand/skechers" data-ref="i_hotkey" target="_blank">斯凯奇</a>
					<a href="http://www.okbuy.com/brand/metersbonwe" data-ref="i_hotkey" target="_blank">美特斯邦威</a>
					<a href="http://www.okbuy.com/shoe/276-brv2" data-ref="i_hotkey" target="_blank">Adidas童鞋</a>
					<a href="http://www.okbuy.com/brand/lee?category=67" data-ref="i_hotkey" target="_blank">LEE</a>
					<a href="http://www.okbuy.com/accessory/618" data-ref="i_hotkey" target="_blank">美妆个护</a>
				</span>
			</div>
		</div>
		<div class="serachright">
			<div class="shoppingcar">
				<img src="../../assets/购物车.png" alt="">
				<span> 去购物车结算 <b>(0)</b></span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				input3: '',
				input4: '',
				input5: '',
				select: ''
			}
		}
	}
</script>

<style>
	.serach {
		width: 100%;
		height: 110px;
		display: flex;
		justify-content: space-around;
		flex-wrap: nowrap;
	}
	.el-select .el-input {
		width: 130px;
	}
	.serach_input{
		margin-top: 26px;
	}
	.el-input__inner {
		border: 1px solid red;
		width: 380px;
	}
	.shoppingcar{
		width: 230px;
		border: 1px solid red;
		background-color: #FFDA73;
		display: flex;
		justify-content: flex-start;
	}
	.shoppingcar img{
		height: 32px;
	}
	.shoppingcar span {
		height: 32px;
		width: 175px;
		background: #fff;
		display: block;
		line-height: 28px;
		text-align: center;
	}
	.hotWords {
	    height: 16px;
	    width: 420px;
		font-size: 12px;
	    overflow: hidden;
	}
	.hotWords a {
	    color: #888;
	    margin-right: 10px;
		text-decoration: none;
	}
	.serachright{
		margin-top: 30px;
	}
</style>
