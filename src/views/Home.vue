<template>
  <div class="home">
	  <!-- nav -->
    <HomeNav></HomeNav>
	<!-- 搜索框 -->
	<HomeSerach></HomeSerach>
	<!-- 轮播 -->
	<HomeCarousel></HomeCarousel>
	<!-- 轮播后的图标 -->
	<Homeicon></Homeicon>
	<!-- 展示商品 -->
	<ShoppingShow></ShoppingShow>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    "HomeNav":()=> import("../components/MyHome/HomeNav.vue"),
	"HomeSerach":()=> import("../components/MyHome/HomeSerach.vue"),
	"HomeCarousel":()=> import("../components/MyHome/HomeCarousel.vue"),
	"Homeicon":()=> import("../components/MyHome/Homeicon.vue"),
	"ShoppingShow":()=> import("../components/MyHome/ShoppingShow.vue"),
	"BottomInfo":()=> import("../components/MyHome/BottomInfo.vue")
  }
}
</script>
<style>
	
</style>