<template>
	<div class="mineBox">
		<el-container>
		  <el-aside class="aside"><Aside></Aside></el-aside>
		  <el-container class="content">
		    <el-header>Header</el-header>
		    <el-main><ContentInfo>不是大V是</ContentInfo></el-main>
		    <el-footer>Footer</el-footer>
		  </el-container>
		</el-container>
	</div>
</template>

<script>
	export default {
		name: 'Cart',
		components: {
			Aside: () => import("./Aside.vue"),
			ContentInfo: () => import("./ContentInfo.vue")
			
		},
		
	}
</script>

<style>
	*{
		padding: 0;
		margin: 0;
	}
	.mineBox {
		width: 1200px;
		margin: 30px auto;
	}
	.el-header, .el-footer {
	    background-color: #FFFFFF;
	    color: #333;
	    text-align: center;
	    line-height: 60px;
	  }
	  
	  .el-aside {
	    background-color: #FFFFFF;
	    color: #333;
	    text-align: center;
	  }
	  
	  .el-main {
	    background-color: #FFFFFF;
	    color: #333;
	    text-align: center;
	    line-height: 250px;
	  }
	  
	  .el-container {
	    margin-bottom: 40px;
	  }
	  
	  .aside {
		  width: 220px!important;
	  }
	  .content {
		  width: 950px;
		  margin-left: 20px;
	  }
</style>
