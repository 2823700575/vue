<template>
	<div class="loginbox">
		<div class="div1">
			<p class="p1" @click="zhanghao" :style="{color:mycolor}">账号登陆</p>
			<p class="p2" @click="saoma" :style="{color:mycolor2}">扫码登陆</p>
		</div>
		<keep-alive>
			<component :is="zhorsaoma" @myforget="myforget"></component>
		</keep-alive>
		<div class="div3">
			<span class="iconfont icon-QQ sp1"></span>
			<span class="iconfont icon-weixin sp2"></span>
			<span class="iconfont icon-zhifubao sp3"></span>
			<span class="iconfont icon-qunfengxinlangweibo
 sp4"></span>
			<span class="iconfont icon-xingxing sp5"></span>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				zhorsaoma:"Zhanghao",
				mycolor:"#D70057",
				mycolor2:"#000000"
			}
		},
		components:{
			Zhanghao:()=>import("./Zhanghao.vue"),
			Saoma:()=>import("./Saoma.vue")
		},
		methods:{
			zhanghao(){
				this.zhorsaoma="Zhanghao",
				this.mycolor2="#000000",
				this.mycolor="#D70057"
			},
			saoma(){
				this.zhorsaoma="Saoma",
				this.mycolor2="#D70057",
				this.mycolor="#000000"
			},
			myforget(){
				this.$emit("myforget2")
			}
		}
	}
</script>

<style scoped="scoped">
	.loginbox{
		padding: 20px;
		background-color: #FFFFFF;
	}
	.div1{
		background-color: #FFFFFF;
		display: flex;
		justify-content: space-between;
		margin-top: 20px;
	}
	.div1 p{
		background-color: #FFFFFF;
		font-weight: 800;
		font-size: 24px;
	}
	.div1 .p1{
		margin-left: 50px;
	}
	.div1 .p2{
		margin-right: 50px;
	}
	.div3{
		z-index: 100;
		position: absolute;
		top: 490px;
	}
	.div3 span{
		font-size: 20px;
	}
	.div3 .sp1{
		color: #00AAEF;
	}
	.div3 .sp2{
		color: #22D121;
		margin-left: 30px;
	}
	.div3 .sp3{
		color: #00AAEF;
		margin-left: 30px;
	}
	.div3 .sp4{
		color: #E63B53;
		margin-left: 30px;
	}
	.div3 .sp5{
		color: #E63B53;
		margin-left: 30px;
	}
</style>
