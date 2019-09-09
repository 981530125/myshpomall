<template>
	<div class="contain">
	    <div class="loginimg">
	    	<x-img :src="src"></x-img>
	    </div>
	    <p class="description">您还没有登录，请登录后查看订单1323</p>
	    <x-button type="primary" mini class="loginbtn" link="/Login">登录</x-button>
		<Bottomnav></Bottomnav>
	</div>
</template>

<script>
import Bottomnav from './Bottomnav.vue'
export default {
	name: 'Type',
	data () {
	    return {
	      msg: 'Welcome to Your Vue.js App ! This is User',
	      value:'',
	      src:require('../assets/images/loginmeun.png')
	    }
	},
	components:{
	  	Bottomnav
	  },
}
</script>

<style scoped="scoped">
p{
	margin: 0;
}
.loginimg{
	padding-top: 3.26rem;
	padding-bottom: 0.5rem;
}
.contain{
	background-color: #eee;
	text-align: center;
	height: 100%;
}
.loginbtn{
	margin: 0 auto;
	background-color: #000000;
	color: #fff;
}
.description{
	font-size:14px;
	color: #aaa;
	height:0.8rem;
	line-height: 0.53rem;
}
</style>
