<template>
	<div class="home_carousel">
		<!-- 轮播的导航 -->
		<div>
			<el-menu
			  :default-active="activeIndex2"
			  class="el-menu-demo"
			  mode="horizontal"
			  @select="handleSelect"
			  background-color="#545c64"
			  text-color="#fff"
			  active-text-color="#ffd04b">
			  <el-menu-item index="1">首页</el-menu-item>
			  <el-menu-item index="2">运动生活</el-menu-item>
			  <el-menu-item index="3">休闲服饰</el-menu-item>
			  <el-menu-item index="4">男女名鞋</el-menu-item>
			</el-menu>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				activeIndex: '1',
				activeIndex2: '1'
			}
		},
		methods: {
		  handleSelect(key, keyPath) {
		    console.log(key, keyPath);
			if(key == 1){
				this.$router.push({
					name:"Home"
				})
			}
		  }
		}
		
	}
</script>

<style scoped="scoped">
    .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 150px;
      margin: 0;
    }
  .myimg{
	  width: 100%;
	  height: 350px;
  }
    .el-carousel__item:nth-child(2n) {
       background-color: orange;
    }
    
    .el-carousel__item:nth-child(2n+1) {
       background-color: orangered;
    }
</style>
