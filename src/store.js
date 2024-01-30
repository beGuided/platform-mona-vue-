import {createStore} from "vuex"
import router from './router'

export default createStore({
  state:{
    isLoggedIn: !!localStorage.getItem('token')
  },
  mutations:{
    LOGIN(state) {
      state.isLoggedIn = true //on
    },
    LOGOUT(state) {
      state.isLoggedIn = false
    }
  },
  actions:{
    login({commit}) {
      commit('LOGIN')
      dispatch('navigateToLogin')
    },
    logout({commit, dispatch}) {
      commit('LOGOUT')
      dispatch('navigateToLogin')
    },
    navigateToLogin() {
      router.push({name:'Login'})
    }
  }
})

// import Vue from "vue";
// import Vuex from "vuex";
// Vue.use(Vuex);
// export default new Vuex.Store({
//   state: {
//     user: null,
//     token: null,
//   },
//   mutations: {
//     setUser(state, user) {
//       state.user = user;
//     },
//     setToken(state, token) {
//       state.token = token;
//     },
//   },
//   actions: {},
//   getters: {},
// });