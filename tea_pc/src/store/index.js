import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 标记用户是否登录
    // 如果用户已登录,isLogin的值为sessionStorage中的isLogin的值
    isLogin: localStorage.getItem('isLogin') || false,
    phone: localStorage.getItem('phone') || 0,
    uid:localStorage.getItem('uid') || 0,
  },
  mutations: {
    login_mutation(state, payload) {
      state.isLogin = true;
      state.phone = payload.phone
      state.uid = payload.uid
    },
    login_out(state) {
      state.isLogin = false;
      localStorage.clear();
    }
  },
  actions: {
  },
  modules: {
  }
})
