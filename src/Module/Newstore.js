//store只存在一个
import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from './Module-a'  //引入模块a
import moduleB from './Module-b'
Vue.use(Vuex)
//Vuex 允许我们将 store 分割成模块（module）
const store1=new Vuex.Store({
  modules:{
    a:moduleA,
    b:moduleB,
  }
})
export  default  store1
