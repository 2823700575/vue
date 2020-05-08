import Vue from 'vue'
import VueRouter from 'vue-router'
import Cart from '../views/Cart/Cart.vue'
import Mine from '../views/Mine/Mine.vue'
Vue.use(VueRouter)

  const routes = [
  {
	path: '/',
	name: 'Home',
	component: ()=>import ("../views/Home.vue")
  },
  {
	 //商品详情页 
  	path: '/productdetails',
  	name: 'ProductDetails',
  	component: ()=>import ("../views/ProductDetails.vue")
  },
  {
  	 //单件商品详情页 
  	path: '/singieItem',
  	name: 'SingleItem',
  	component: ()=>import ("../views/SingleItem.vue")
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
	// beforeEnter(to,form,next){//局部导航守卫
	// 	let flag=window.localStorage.getItem("tel")
	// 	if(flag=="sussessful"){
	// 		next()
	// 	}else{
	// 		next("/login")
	// 	}
	// }
  },{
    path: '/mine',
    name: 'Mine',
    component: Mine
  },
  {
    path: '/login',
    name: 'Login',
    component: ()=>import("@/views/Loginregister/Loginregister.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
