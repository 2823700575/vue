<template>
	<div class="neibox">
		<div class="topbox">
			<p>欢迎注册</p>
			<button>登陆</button>
		</div>
		<div>
			号码：<input type="tel" v-model="tel" /><br>
			密码：<input type="password" v-model="password" /><br>
			验证码：<input type="text" v-model="verif" />
			<button id="verif" @click="getverif">{{sverif}}</button><br>
			<button @click="register">提交</button>
		</div>
	</div>
</template>

<script>
	import axios from "axios"
	export default{
		data(){
			return{
				tel:"",
				password:"",
				verif:"",
				sverif:""
			}
		},
		methods:{
			//获取验证吗
			getverif(){
				axios("http://localhost:7001/verif")
				.then((res)=>{
				    this.sverif=res.data.data
				})
			},
			//注册
			register(){
				let url="http://localhost:7001/register"
				let params={tel:this.tel,password:this.password}
				axios.post(url,params)
				.then((res)=>{
					if(res.data.code==2000){
					   alert(res.data.info)
					   this.$emit("myclick")
					}
					else{
					    alert(res.data.info)
					}
				})
			}
		},
		mounted() {
			// this.getverif()
		}
	}
</script>

<style scoped="scoped">
	.topbox{
		display: flex;
		justify-content: space-between;
		margin-top: 20px;
	}
	.neibox{
		padding: 20px;
	}
</style>
