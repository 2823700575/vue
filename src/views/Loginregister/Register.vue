<template>
	<div class="neibox">
		<div class="topbox">
			<p>欢迎注册</p>
		</div>
		<div class="myreg">
			<input class="i1" type="tel" v-model="tel" placeholder="请输入手机号"/><br>
			<input class="i2" :type="ispassword" v-model="password" placeholder="请输入6位数字加字母密码"/><br>
			<input class="i3" type="text" v-model="verif" />
			<button id="verif" @click="getverif" v-html="sverif" class="buto"></button><br>
			<button @click="register" class="register">注册</button>
			<span class="sp1">注册即视为同意</span><span class="sp2">好乐买隐私协议</span>
			<i :class="iseye" @click="myeye"></i>
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
				sverif:"",
				ispassword:"password",
				iseye:"el-icon-turn-off"
			}
		},
		methods:{
			//获取验证码
			getverif(){
				axios("http://localhost:7001/verif")
				.then((res)=>{
				    this.sverif=res.data.data
				})
			},
			//注册
			register(){
				let url="http://localhost:7001/register"
				let params={tel:this.tel,password:this.password,verif:this.verif}
				axios.post(url,params)
				.then((res)=>{
					if(res.data.code==2000){
					   alert(res.data.info)
					   this.$emit("myclick")//注册成功跳转到登陆模块
					}
					else{
					    alert(res.data.info)
					}
				})
			},
			myeye(){//设置密码可见或者不可见
				if(this.ispassword=="password"){
				        this.iseye="el-icon-open"
				        this.ispassword="text"
				    }else{
				        this.iseye="el-icon-turn-off"
				        this.ispassword= "password"
				    }
			}
		},
		mounted() {
			this.getverif()
		}
	}
</script>

<style scoped="scoped">
	.topbox{
		display: flex;
		justify-content: space-between;
		margin-top: 20px;
		background-color: #FFFFFF;
	}
	.topbox p{
		background-color: #FFFFFF;
		font-weight: 800;
		font-size: 24px;
	}
	.neibox{
		padding: 20px;
		background-color: #FFFFFF;
	}
	.myreg{
		background-color: #FFFFFF;
	}
	.myreg input{
		background-color: #FFFFFF;
	}
	.myreg .i1{
		outline: none;
		width: 336px;
		height: 40px;
		margin-top: 30px;
	}
	.myreg .i2{
		outline: none;
		width: 336px;
		height: 40px;
		margin-top: 30px;
	}
	.myreg .i3{
		outline: none;
		width: 168px;
		height: 40px;
		margin-top: 30px;
	}
	.myreg .buto{
		cursor: pointer;
	}
	.myreg .buto{
		position: relative;
		left: 85px;
		top: 9px;
		outline: none;
		border: none;
	}
	.myreg .register{
		width: 336px;
		height: 40px;
		margin-top: 40px;
		outline: none;
		border: none;
		background-color: #D70057;
		color: white;
		font-size: 17px;
		font-weight: 700;
	}
	.myreg .sp1{
		background-color: #FFFFFF;
		font-size: 12px;
		color: #999999;
	}
	.myreg .sp2{
		background-color: #FFFFFF;
		color: #D70057;
		margin-left: 10px;
		font-size: 12px;
	}
	.myreg i:hover{
		cursor:pointer;
	}
	.myreg i{
		position: absolute;
		top: 190px;
		right: 40px;
		background-color: #FFFFFF;
	}
</style>
