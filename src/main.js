import Vue from 'vue'
import App from './App.vue'
// import First from './First.vue'
import router from './router'  //导入路由
import store from './store'
//import  store from './Module/Newstore'
import './assets/common.css'
import * as filters from './filters'  //过滤
import  Swiper from "swiper"

for (var i in filters){
  Vue.filter(i,filters[i])
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  Swiper,
  render: h => h(App)
}).$mount('#app')
