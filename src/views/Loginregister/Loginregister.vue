<template>
	<div>
		<div class="lrbox">
		<keep-alive>
			<component :is="loginregiste" @myclick="myclick"></component>
		</keep-alive>
		<div class="btm">
			<button @click="login">登陆</button>
			<button v-on:click="register">注册</button>
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
	.lrbox{
		height: 520px;
		width: 340px;
		margin: 20px auto;
		border: 1px solid red;
		position: relative;
	}
	.btm{
		position: absolute;
		left: 0;
		bottom: 0;
	}
</style>
