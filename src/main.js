import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
<<<<<<< HEAD
import ElementUI from 'element-ui';  //引入组件库
import 'element-ui/lib/theme-chalk/index.css'; //全局css样式

Vue.use(ElementUI); 

=======
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
>>>>>>> 09c38a7fa6857703aee0e7c333e246b4de5b7977
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
