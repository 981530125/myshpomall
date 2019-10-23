// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import store from './vuex/store'
// import './assets/iconfont/iconfont.css'
import App from './App'
import router from './router'
import 'lib-flexible'
import axios from 'axios'
import api from './api' // 导入api接口
import has from './public/js/btnPermissions.js'
import {ViewBox, 
	Group, 
	Cell, 
	CellBox,
	XInput, 
	Tabbar, 
	TabbarItem, 
	XHeader, 
	Swiper,
	Grid, 
	GridItem,
	Flexbox, 
	FlexboxItem, 
	XImg,
	XButton, 
	Panel, 
	Toast, 
	Sticky, 
	Tab, 
	TabItem,
	Rater,
	Badge
} from 'vux'

Vue.use(Vuex)
Vue.prototype.$axios = axios
Vue.prototype.$api = api
// 配置axios
Vue.component('view-box', ViewBox)
Vue.component('group', Group)
Vue.component('cell', Cell)
Vue.component('x-input', XInput)
Vue.component('tabbar', Tabbar)
Vue.component('tabbar-item', TabbarItem)
Vue.component('x-header', XHeader)
Vue.component('swiper', Swiper)
Vue.component('grid', Grid)
Vue.component('grid-item', GridItem)
Vue.component('flexbox', Flexbox)
Vue.component('flexbox-item', FlexboxItem)
Vue.component('x-img', XImg)
Vue.component('x-button', XButton)
Vue.component('panel', Panel)
Vue.component('toast', Toast)
Vue.component('sticky', Sticky)
Vue.component('tab', Tab)
Vue.component('tab-item', TabItem)
Vue.component('cell-box', CellBox)
Vue.component('rater', Rater)
Vue.component('badge', Badge)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
})

router.beforeEach((to, from, next) => {
	if(to.meta.isLogin){
		//获取用户登录成功后存储的登录标志
		let getFlag = localStorage.getItem('Flag');
		
		//如果登录标志存在且为isLogin，即用户一登录
		if(getFlag === "isLogin"){
			//设置vuex登录状态为已登录
			store.state.isLogin = true
			next();
			
			//如果已登录，还想进入登录注册界面，则返回首页
			if(to.meta.title == '登录'){
				//提示
				alert('请先退出登录');
				next({
					path: '/Home'
				})
					//如果登录标志不存在，即未登录
			}else{
				next();
			}
		}else{
			next({
					path: '/Login'
				})
		}
	}else{
		next();
	}
});
router.afterEach(route =>{
	window.scroll(0,0)
})
