import Vue from 'vue'
import VueRouter from 'vue-router'
import Cart from '../views/Cart/Cart.vue'
import Mine from '../views/Mine/Mine.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },{
    path: '/mine',
    name: 'Mine',
    component: Mine
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
