import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
 
export default new Vuex.Store({
  state:{
    isLogin: false,
  },
  //获取属性的状态
  getters: {
  	//获取登陆状态
  	isLogin: state =>state.isLogin,
  },
  mutations:{
  	//保存登录状态
  	userStatus(state,flag){
  		state.islogin = flag
  	},
  },
  actions: {
  	userLogin({commit},flag){
  		commit("userStatus",flag)
  	},
  }
 })