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
	export default{
		data(){
			return{
				tel:"",
				password:""
			}
		},
		methods:{
			login(){
				
			}
		}
	}
</script>

<style>
</style>
