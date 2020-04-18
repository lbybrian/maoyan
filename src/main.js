import Vue from 'vue'
import App from './App.vue'
import router from './routers'
//import Movie from '@views/Movie'
//import Cinema from '@views/Cinema'
//import Mine from '@views/Mine'
import '../public/css/iconfont/iconfont.css';//解决刷新后iconfont样式改变问题
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
