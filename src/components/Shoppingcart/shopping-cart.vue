<!--  -->
 <template>
	<div class="weui-tabbar" style="height:">
		<flexbox>
			<flexbox-item :span="1/5">
				<div class="cart-item">
					<div class="badge-value" style="position:relative;padding-top: 8px;padding-bottom:3px;">
						<span class="vertical-middle;">
							<i class="iconfont icon-gouwuche icon-gouwuche-style"></i>
						</span>
						<badge text="888" style="position:absolute;;top:-4px;right:-5px;"></badge>
					</div>
					<div style="font-size:12px;">
						购物车
					</div>
				</div>
			</flexbox-item>
			<flexbox-item :span="2/5" @click="choosetype">
				<div class="cart-item addcart">加入购物车</div>
			</flexbox-item>
			<flexbox-item :span="2/5">
				<div class="cart-item buying">立即购买</div>
			</flexbox-item>
		</flexbox>
	</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
name:'',
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
	
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='less' scoped>
.cart-item{
	height: 60px;
	text-align:center;
}
.vux-flexbox-item{
	margin-left:0 !important;
}
.icon-gouwuche-style{
	font-size:22px;
}
.addcart{
	font-size:16px;
	color:#000;
	line-height:60px;
	border-left: 1px solid #eee;
	letter-spacing: 1px;
}
.buying{
	background-color: #000;
	color:#fff;
	font-size:16px;
	line-height:60px;
	letter-spacing: 1px;
}
</style>