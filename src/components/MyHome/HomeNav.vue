<template>
  <div class="homenav">
	<el-menu :default-active="activeIndex" class="el-menu-demo myset" mode="horizontal" @select="handleSelect">
	  <el-menu-item index="1">登录</el-menu-item>
	  <el-menu-item index="2">注册</el-menu-item>
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
	</el-menu>
  </div>
</template>

<script>
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
            console.log(key, keyPath);
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
