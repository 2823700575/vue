import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';  //引入组件库
import 'element-ui/lib/theme-chalk/index.css'; //全局css样式
import '@/assets/iconfont/iconfont.css'	//引入第三方图标
import axios from 'axios'//引入axios
import VueAxios from 'vue-axios'

axios.defaults.withCredentials = true//解决后端其它接口访问不到session的问题

Vue.use(VueAxios,axios);
Vue.use(ElementUI); 

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
