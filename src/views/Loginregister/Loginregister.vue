<template>
	<div class="loginbox">
		<div class="top">
		<div class="mynavtop">
		<div class="logo">
			<div class="img" @click="fanhui"><img src="http://0.js.al.okbuycdn.com/resources/images/v6/index/logo.png" alt=""></div>
			<ul>
				<li class="li"><i class="el-icon-circle-check"></i>天天低价</li>
				<li class="li"><i class="el-icon-circle-check"></i>正品保障</li>
				<li class="li"><i class="el-icon-circle-check"></i>7天退换货</li>
				<li><i class="el-icon-circle-check"></i>评价晒单有礼</li>
			</ul>
		</div>
		</div>
		</div>
		<div class="mdu">
			<img src="http://i.okaybuy.cn/static/68074f6f4abb3bd39eec3acfebacf164.jpg" />
		</div>
		<div class="btom">
		<div class="mynavtop">
			<div class="btombox">
			<span class="sp1">Copyright © 2007-2020 OkBuy.com All Rights Reserved</span>
			<span class="sp2">天津好乐买信息技术有限公司  津B2-20200075  京公网安备 110105006859</span>
			</div>
		</div>
		</div>
		<div class="lrbox">
		<keep-alive>
			<component :is="loginregiste" @myclick="myclick"></component>
		</keep-alive>
		<div class="btm">
			<div class="btntwo">
			<button @click="login">去登陆</button>
			<button v-on:click="register">去注册</button>
			</div>
		</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				loginregiste:"Login"
			}
		},
		methods:{
			login(){
				this.loginregiste="Login"
			},
			register(){
				this.loginregiste="Register"
			},
			myclick(){
				this.loginregiste="Login"
			},
			fanhui(){
				this.$router.push({path:"/"})
			}
		},
		components:{
			Login:()=>import("@/views/Loginregister/Login.vue"),
			Register:()=>import("@/views/Loginregister/Register.vue")
		},
		mounted(){
			// console.log(this.$route)
			//点击注册跳到注册模块
			if(this.$route.query.key==2){
				this.loginregiste="Register"
			}
		}
	}
</script>

<style scoped="scoped">
	.loginbox{
		position: relative;
	}
	.loginbox .btom{
		width: 100%;
		background-color: #FFFFFF;
	}
	.loginbox .btom .btombox{
		display: flex;
		justify-content: space-around;
		background-color: #FFFFFF;
	}
	.loginbox .btom .btombox span{
		background-color: #FFFFFF;
		font-size: 12px;
		margin-top: 72px;
		color: #B0B0B0;
	}
	.loginbox .btom .btombox .sp1{
		margin-left: 250px;
	}
	.loginbox .btom .btombox .sp2{
		margin-right: 250px;
	}
	.loginbox .mdu{
		width: 100%;
		height: 560px;
	}
	.loginbox .mdu img{
		width: 100%;
		height: 560px;
	}
	.top{
		width: 100%;
		height: 99px;
		background-color: #FFFFFF;
	}
	.mynavtop{
		width: 1278px;
		margin: 2px auto;
		height: 99px;
		background-color: #FFFFFF;
	}
	.logo{
		height: 99px;
		display: flex;
		justify-content: space-between;
		background-color: #FFFFFF;
	}
	.loginbox .logo ul{
		list-style: none;
		display: flex;
		background-color: #FFFFFF;
	}
	.loginbox .logo .img{
		height: 99px;
		width: 210px;
		background-color: #FFFFFF;
	}
	.loginbox .logo img{
		background-color: #FFFFFF
	}
	.loginbox ul li{
		height:99px ;
		color: #666666;
		line-height: 99px;
		background-color: #FFFFFF;
	}
	.loginbox ul .li{
		margin-right: 60px;
	}
	.loginbox li i{
		color: red;
		background-color: #FFFFFF;
	}
	.lrbox{
		height: 520px;
		width: 380px;
		margin: 20px auto;
		position: absolute;
		top: 98px;
		right: 127px;
		background-color: #FFFFFF;
	}
	.btm{
		width: 100%;
		height: 40px;
		background-color: #F6F6F6;
		position: absolute;
		bottom: 0;
	}
	.btm button{
		outline: none;
	}
	.btm .btntwo{
		position: absolute;
		right: 0;
		top: 50%;
		margin-top: -12px;
	}
</style>
