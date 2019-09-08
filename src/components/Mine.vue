<template>
  <div class="contain">
  	<div class="useritem">
  		<div class="headlogo">
  			<img src="@/assets/images/headicon.png"  style="width: 100%;"/>
  		</div>
  		<div class="username">
  			<div class="myname">请登录/注册</div>
  			<div class="btn-tips">点击登录账号</div>
  		</div>
  	</div>
  	<div class="three-item">
  		<grid :show-vertical-dividers="false">
	      <grid-item v-for="(item,index) in items" :key="index">
	        <span class="grid-center">{{item.value}}</span>
	        <span class="grid-title">{{item.title}}</span>
	      </grid-item>
	    </grid>
  	</div>
  	<div>
  		<panel :list="list" :type="type"></panel>
  	</div>
  	<Bottomnav></Bottomnav>
  </div>
</template>

<script>
import Bottomnav from './Bottomnav.vue'
export default {
  name: 'Mine',
  data () {
    return {
    	type:'3',
      msg: 'Welcome to Your Vue.js App ! This is Mine',
      value:'',
      items:[{
      	value:'0元',
      	title:'余额'
      }
      ,{
      	value:'0个',
      	title:'优惠'
      }
      ,{
      	value:'0分',
      	title:'积分'
      }],
      list: [{
        src: require('@/assets/images/addressicon.png'),
        fallbackSrc: require('@/assets/images/addressicon.png'),
        title: '收货地址管理'
      }, {
        src: require('@/assets/images/jifen.png'),
        title: '积分兑换'
      }, {
        src: require('@/assets/images/vipcard.png'),
        title: '我的会员卡'
      }, {
        src: require('@/assets/images/help.png'),
        title: '帮助中心'
      }]
    }
  },
  components:{
  	Bottomnav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.useritem{
	background-color: #E02E24;
	width: calc(100% - 0.8rem);
	height: 2rem;
	padding: 2rem 0.4rem;
}
.headlogo{
	width: 2rem;
	height: 2rem;
	vertical-align: top;
	display: inline-block;
	border-radius: 50%;
	overflow: hidden;
	border: #fff 1px solid;
}
.username{
	display: inline-block;
	line-height: 1rem;
	font-size: 14px;
	margin-left: 0.4rem;
	letter-spacing: 0.04rem;
	color: #fff;
}
.myname{
	font-size: 20px;
}
.btn-tips{
	color: #FBF9FE;
}
.three-item{
	border-top: #EEEEEE 0.3rem solid;
	width: 100%;
	height: 3rem;
	border-bottom: 1px solid #000000;
}
.grid-center {
  display: block;
  text-align: center;
  color: #000;
  font-weight: bold;
  font-size: 20px;
  height: 1rem;
  line-height: 1rem;
}
.weui-grids {
  background-color: #fff;
}
.grid-title{
	display: block;
  text-align: center;
  color: #666;
  font-size: 14px;
  height: 1rem;
  line-height: 1rem;
}
</style>
