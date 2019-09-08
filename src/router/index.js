import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Regist from '@/components/Regist'
import Home from '@/components/Home'
import User from '@/components/User'
import Mine from '@/components/Mine'
import Type from '@/components/Type'
import Nologin from '@/components/Nologin'
import Goodsdetail from '@/components/Goods/Goodsdetail'
Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/Login',
      name: 'Login',
      component: Login,
      meta: {
            title: '登录',   // 标题设置
				    isLogin: false
          }
    },
    {
      path: '/Regist',
      name: 'Regist',
      component: Regist,
      meta: {
            title: '注册',   // 标题设置
            isLogin: false
          }
    },
  	{
      path: '/',
      component: Home,
      redirect: {
       name: 'Home'
   		},
      meta: {
            title: '首页',   // 标题设置
            isLogin: false
          }
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      meta: {
            title: '首页',   // 标题设置
            isLogin: false
          }
    },
    {
      path: '/User',
      name: 'User',
      component: User,
      meta: {
            title: '分类',   // 标题设置
            isLogin: true
          }
    },
    {
      path: '/Type',
      name: 'Type',
      component: Type,
      meta: {
            title: '订单列表',   // 标题设置
            isLogin: false
          }
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine,
      meta: {
            title: '我的',   // 标题设置
            isLogin: false
          }
    },
    {
      path: '/Nologin',
      name: 'Nologin',
      component: Nologin,
      meta: {
            title: '',   // 标题设置
            isLogin: false
          }
    },
    {
      path: '/Goods/Goodsdetail',
      name: 'Goodsdetail',
      component: Goodsdetail,
      meta: {
            title: '商品',   // 标题设置
            isLogin: false
          }
    }
  ]
})
