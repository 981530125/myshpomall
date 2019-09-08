<template>
	<tabbar class="weui-tabbar" slot="bottom">
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
	</tabbar>
</template>

<script>
</script>

<style>
</style>