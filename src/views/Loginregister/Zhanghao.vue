<template>
	<div class="div2">
		<input type="tel" v-model="tel" placeholder="已验证用户名"/><br>
		<input type="password" v-model="password" placeholder="密码"/><br>
		<button @click="login" class="login">登陆</button>
		<p class="p3">忘记密码？</p>
	</div>
</template>

<script>
	import axios from "axios"
	export default{
		data(){
			return{
				tel:"",
				password:""
			}
		},
		methods:{
			login(){
				let url="http://localhost:7001/login"
				let params={tel:this.tel,password:this.password}
				axios.post(url,params)
				.then((res)=>{
					if(res.data.code==2000){
					   alert(res.data.info)
					   // console.log((res.data.sta))
					   window.localStorage.setItem("tel",res.data.sta)//设置前端缓存
					   this.$router.push({path:"/"})//跳转到首页
					   this.$store.commit("vuexB/mye",{tel:this.tel})//更改仓库展示用户信息
					   
					}
					else{
					    alert(res.data.info)
					}
					
				})
			}
		}
	}
</script>

<style>
	.div2{
		background-color: #FFFFFF;
	}
	.div2 input{
		background-color: #FFFFFF;
		outline: none;
		width: 336px;
		height: 40px;
		margin-top: 30px;
	}
	.div2 .login{
		display: inline-block;
		height: 40px;
		width: 336px;
		background-color: #D70057;
		margin-top: 40px;
		border: none;
		outline: none;
		color: white;
		font-size: 17px;
		font-weight: 700;
	}
	.div2 .p3{
		width: 83px;
		background-color: #FFFFFF;
		margin-top: 8px;
		position: relative;
		left: 260px;
		color: #B0B0B0;
		font-size: 12px;
	}
</style>
