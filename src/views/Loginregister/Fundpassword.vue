<template>
	<div class="upd">
		<p>重置密码</p>
		<input type="tel" v-model="tel" placeholder="用户名"/><br>
		<input type="password" v-model="newpassword" placeholder="重置密码"/><br>
		<button @click="updatepsd">确定</button>
	</div>
</template>

<script>
	import axios from "axios"
	export default{
		data(){
			return {
				tel:"",
				newpassword:""
			}
		},
		methods:{
			updatepsd(){
				let url="http://localhost:7001/updatepsd"
				let params={tel:this.tel,password:this.newpassword}
				axios.post(url,params)
				.then((res)=>{
					if(res.data.code==2000){
					   alert(res.data.info)
					   this.$emit("myupd")//切换到登陆模块
					   
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
	.upd{
		background-color: #FFFFFF;
		padding: 20px;
	}
	.upd input{
		background-color: #FFFFFF;
		outline: none;
		width: 336px;
		height: 40px;
		margin-top: 30px;
	}
	.upd button{
		background-color: #D70057;
		outline: none;
		width: 336px;
		height: 40px;
		margin-top: 30px;
		border: none;
		color: white;
		font-size: 17px;
		font-weight: 700;
	}
	.upd p{
		background-color: #FFFFFF;
		font-weight: 800;
		font-size: 24px;
	}
</style>
