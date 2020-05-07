<template>
	<div>
		<Add :addinfo="add"></Add>
		<p class="color">购买全球购商品需验证您的身份信息:</p>
		<p>请您填写正确的个人身份信息，并授权我们向外汇管理局和海关进行申报</p>
		<p>好乐买承诺所传身份证明只用于办理全球购商品的清关手续，不作他用途使用，其他人均无法查看。</p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				add: "添加实名认证信息",
			}
		},
		methods: {
		},
		components:{
			Add: () => import("./Add.vue")
		}
		
	}
</script>

<style>
	p {
		background-color: #FFFFFF;
		text-align: left;
		font-size: 14px;
		height: 30px;
		line-height: 32px;
		color: #999;
		margin: 5px 30px;
	}
	.color {
		color: #d70057!important;
	}
</style>
