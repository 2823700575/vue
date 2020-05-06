<template>
	<div>
		<div>
			<p>账号登陆</p>
			<p>扫码登陆</p>
		</div>
		<div>
			<input type="tel" v-model="tel" /><br>
			<input type="password" v-model="password" /><br>
			<button @click="login">登陆</button>
		</div>
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
					   this.$router.push({path:"/"})
					   
					   
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
</style>
