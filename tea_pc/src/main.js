import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Header from "./components/header.vue" //全局头部组件
import Foot from "./components/foot.vue"  //全局脚部组件

// 全局 引入 axios 使用方法 
import Axios from 'axios'
// 将 axios 放到 原型链上 供全局使用
Vue.prototype.axios = Axios
// 全局 配置 axios 默认地址
Axios.defaults.baseURL = 'http://127.0.0.1:9850'

import qs from 'qs'
Vue.prototype.qs=qs

// 全局配置 headers, 设置数据 以 form-data 格式传输
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

import VueAwesomeswiper from 'vue-awesome-swiper'

Vue.config.productionTip = false

Vue.use(VueAwesomeswiper)
Vue.component("Head",Header)
Vue.component("Footr",Foot)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
