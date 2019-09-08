、<template>
  <div id="app">
  	<view-box ref="viewBox" :body-padding-top="isShowNav ? '46px' : '0'" body-padding-bottom="55px">
  	<x-header 
  		:title="$route.meta.title" 
  		:left-options="{showBack: false}"
  		style="width:100%;position:absolute;left:0;top:0;z-index:100;"
  		 class="myheader" >
  	</x-header>
    <router-view/>
    <!--<tabbar class="weui-tabbar" slot="bottom" v-on:istabbar='istabbar'>
			<tabbar-item link="/Home" :selected="$route.name === 'Home'">
				<img slot="icon" src="@/assets/imgs/home.png" class="icon icon-tabbar">
				<img slot="icon-active" src="@/assets/imgs/homeactive.png" class="icon-tabbar">
				<span slot="label">首页</span>
			</tabbar-item>
			<tabbar-item link="/User" :selected="$route.name === 'User'">
				<img slot="icon" src="@/assets/imgs/classify.png" class="icon icon-tabbar">
				<img slot="icon-active" src="@/assets/imgs/classifyactive.png" class="icon-tabbar">
				<span slot="label">分类</span>
			</tabbar-item>
			<tabbar-item link="/Type" :selected="$route.name === 'Type'">
				<img slot="icon" src="@/assets/imgs/order.png" class="icon icon-tabbar">
				<img slot="icon-active" src="@/assets/imgs/orderactive.png" class="icon-tabbar">
				<span slot="label">订单</span>
			</tabbar-item>
			<tabbar-item link="/Mine" :selected="$route.name === 'Mine'">
				<img slot="icon" src="@/assets/imgs/mine.png" class="icon icon-tabbar">
				<img slot="icon-active" src="@/assets/imgs/mineactive.png" class="icon-tabbar">
				<span slot="label">我的</span>
			</tabbar-item>
		</tabbar>-->
		</view-box>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      titleText: '首页',
      isShowNav:true
    }
  },
  methods:{
  	istabbar(nid){
  		console.log(nid);
  	}
  }
}
</script>
<style lang="less">
@import '~vux/src/styles/1px.less';
</style>
<style>
.weui-tabbar__label{
	padding: 0;
	margin-top: 3px;
	margin-bottom: 3px;
}
a{
	text-decoration: none;
}
html, body {
  height: 100%;
  width: 100%;
  padding: 0;
	margin: 0;
  overflow-x: hidden;
}
body {
  background-color: #fbf9fe;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height:100%;
}
</style>
