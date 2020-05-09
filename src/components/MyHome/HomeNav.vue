<template>
  <div class="homenav">
	<el-menu :default-active="activeIndex" class="el-menu-demo myset" mode="horizontal" @select="handleSelect">
	  <el-menu-item index="1">{{this.$store.state.vuexB.login}}</el-menu-item>
	  <el-menu-item index="2">{{this.$store.state.vuexB.register}}</el-menu-item>
	  <el-submenu index="3">
	    <template slot="title">我的好乐买</template>
	    <el-menu-item index="3-1">我的订单</el-menu-item>
	    <el-menu-item index="3-2">我的收藏</el-menu-item>
	    <el-menu-item index="3-3">我的优惠券</el-menu-item>
	  </el-submenu>
	  <el-submenu index="4">
	    <template slot="title">手机好乐买</template>
	    <el-menu-item index="4-1" class="mystyle"><img :src="imgerweima1" alt=""></el-menu-item>
	  </el-submenu>
	  <el-submenu index="5">
	    <template slot="title">关注好乐买</template>
	    <el-menu-item index="5-1"><img :src="imgerweima2" alt=""></el-menu-item>
	  </el-submenu>
	  <el-submenu index="6">
	    <template slot="title">客户服务</template>
	    <el-menu-item index="6-1">联系客户</el-menu-item>
		<el-menu-item index="6-2">帮助中心</el-menu-item>
		<el-menu-item index="6-3">意见中心</el-menu-item>
	  </el-submenu>
	  <el-submenu index="7">
	    <template slot="title">公告</template>
	    <el-menu-item index="7-1"><a href="">好乐买售后部已复工 </a></el-menu-item>
		<el-menu-item index="7-2"><a href=""> 在线咨询时效通知</a></el-menu-item>
		<el-menu-item index="7-3"><a href=""> 客服中心即将取消电话咨询服务</a></el-menu-item>
	  </el-submenu>
	  <el-menu-item index="8">个人中心</el-menu-item>
	</el-menu>
  </div>
</template>

<script>
	import axios from "axios"
export default {
    data() {
          return {
            activeIndex: '1',
            activeIndex2: '1',
			imgerweima1:"",
			imgerweima2:""
          };
        },
		created() {
			this.imgerweima1 = this.$store.state.vuexA.nav_erweima1;
			this.imgerweima2 = this.$store.state.vuexA.nav_erweima2;
		},
        methods: {
          handleSelect(key, keyPath) {
			  let flag=window.localStorage.getItem("tel")
			  // console.log(typeof flag,flag)
			  //如果登陆过，就展示用户信息，做不同的功能
			  if(flag=="sussessful"){
				  if(key==1){
				  	this.$router.push({path:"/mine"})
				  }else if(key==2){
				  	let url="http://localhost:7001/outlogin"
				  	axios.get(url)
				  	.then((res)=>{
				  		if(res.data.code==2001){
							window.localStorage.setItem("tel",null)
							this.$store.commit("vuexB/myb")
							alert("退出成功")
						}
				  	})
				  }
			  }else{
				  if(key==1){
				  	this.$router.push({path:"/login"})
				  }else if(key==2){
				  	this.$router.push({path:"/login",query:{key:key}})//params传参页面刷新数据就不在了
				  }
			  }
			  
			  if(key==8){
				  this.$router.push({
					  name:"Mine"
				  })
			  }
            
          }
        },
		mounted(){
			//页面一加载，如果登陆过了就直接展示账号，解决一刷新数据变为仓库原始值的问题
			let flag=window.localStorage.getItem("tel")
			if(flag=="sussessful"){
				//如果注册过就请求后端缓存的信息过来
				let url="http://localhost:7001/getuserinfo"
				axios.get(url)
				.then((res)=>{
					if(res.data.code==2002){
						// console.log(res.data.info)
						this.$store.commit("vuexB/myc",{n:res.data.info})
					}
				})
			}
		}
}
</script>

<style >
	.homenav{
		width: 100%;
		font-size: 12px;
		height: 30px;
		border-bottom: 1px solid #E4E4E4;
	}
	.homenav .myset{
		float: right;
	}
	.el-menu--horizontal>.el-menu-item{
		height: 30px;
		line-height: 30px;
		/* margin:0 -10px; */
	}
	.el-menu--horizontal>.el-submenu .el-submenu__title {
	    height: 30px;
	    line-height: 30px;
	    border-bottom: 2px solid transparent;
	    color: #909399;
	}
	.el-menu--popup-bottom-start {
	    margin-top: 2px;
	}
	.el-menu--popup-bottom-start a{
	    text-decoration: none;
		display: block;
		width: 90px;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		background-color: white;
	}
	/* 二维码 */
	.el-menu--horizontal .el-menu .el-menu-item, .el-menu--horizontal .el-menu .el-submenu__title {
	    background-color: #FFF;
	    float: none;
	    height: 80px;
		width: 80px;
	    line-height: 80px;
	    padding: 0 10px;
	}
	.el-menu--collapse .el-menu .el-submenu, .el-menu--popup {
	    min-width: 90px;
	}

</style>
