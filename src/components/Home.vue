<template>
	<div class="hello">
    <swiper :list="demo03_list" :show-desc-mask="false" auto style="width:100%;margin:0 auto;" :aspect-ratio="600/900" dots-class="custom-bottom" dots-position="center"></swiper>
    <grid :show-lr-borders="false" :show-vertical-dividers="false">
      <grid-item link="/component/cell">
        <img slot="icon" src="@/assets/images/cake.png">
        <span slot="label">蛋糕</span>
      </grid-item>
      <grid-item :link="{ path: '/component/cell'}">
        <img slot="icon" src="@/assets/images/snacks.png">
        <span slot="label">优食</span>
      </grid-item>
      <grid-item link="/component/cell">
        <img slot="icon" src="@/assets/images/bread.png">
        <span slot="label">现烤面包</span>
      </grid-item>
      <grid-item link="/component/cell">
        <img slot="icon" src="@/assets/images/drink.png">
        <span slot="label">水果茶饮</span>
      </grid-item>
    </grid>
    <div class="selector" style="border-top:0.4rem solid #f2f2f2;">
	    <group>
	    	<cell title="推荐购买" value="更多" is-link></cell>
    	</group>
    	<div class="goodslist" style="padding-bottom: 0.4rem;">
			<flexbox wrap="wrap" justify="space-between" direction="row" :gutter="0">
			    <flexbox-item :span="7/15" v-for="item in res" :key="item.index">
			    	<div class="flex-demo" @click="opengoodsdetail">
			    		<img src="@/assets/images/numthree.png"  class="ximg-demo"/>
			    		<p class="goodstitle">{{item.prodcutdesc}}</p>
			    		<div style="display:flex;height: 1rem;padding: 0 0.2rem;">
						    <div style="flex: 1;line-height: 1rem;text-align: left;color: #fa0000;font-size: 16px;">
						    	￥{{item.prodcutPrice}}
						    </div>
						    <div style="flex: 1;line-height: 1rem;text-align: right;align-items:center;">
			    				<img src="@/assets/images/shopcar.png"  class="shopcar"/>
						    </div>
			    		</div>
			    	</div>
			    </flexbox-item>
		    </flexbox>
	    </div>
    </div>
	<div :class="{mask,'db':isshow}">
	  <div :class="{bg,'detail-active':isshow,'db':isshow}" v-if="isshow" @click="hideview"></div>
	  <div :class="{selectshow,'tochangetype':isshow}"  v-if="isshow">
	    <div class="goods-item">
	      <div class="goods-itemimage">
	      	<img src="@/assets/images/numthree.png"  style='width: 100%;'/>
	      </div>
	      <div class="goods-itemname">
	        <div class="goods-name">资泊丽SPOLIR彩妆</div>
	        <div class="goods-itemprice">
	          <span class="goods-price">￥69.90</span>
	          <span class="time">time</span>
	          <span class="discount">￥49.90</span>
	        </div>
	      </div>
	    </div>
	    <div class="type-item">
	      <div class="type-title">分类选择</div>
	      <div>
	        <div :class="{goodstype,'active-itemtype':activeindex == n}" @click="choosegoodstype(n)"  data-type="n" v-for="n in 10" :key="n" >
	          <img src="@/assets/images/numthree.png"  style='width: 100%;'/>
	        </div>
	      </div>
	    </div>
	    <div class="type-item item-flex">
	      <div class="type-title">购买数量</div>
	      <div class="type-title text-r">
	        <div class="buy-item" >
	          <div class="reduce-btn" bindtap="reduce">-</div>
	          <div class="buy-num">
	          {{count}}
	          </div>
	          <span class="icon icon-add add-btn" bindtap="add"></span>
	        </div>
	      </div>
	    </div>
	    <div class="type-item">
	      <button class="submit-btn" hover-class="other-button-hover"> 确认 </button>
	    </div>
	  </div>
	</div>
	<Bottomnav></Bottomnav>
  </div>
</template>

<script>
import Bottomnav from './Bottomnav.vue'
const baseList = [{
  url: 'javascript:',
  img: require('@/assets/images/numone.png'),
  title: '轮播图一'
}, {
  url: 'javascript:',
  img: require('@/assets/images/numtwe.png'),
  title: '轮播图二'
}, {
  url: 'javascript:',
  img: require('@/assets/images/numthree.png'),
  title: '轮播图三'
}, {
  url: 'javascript:',
  img: require('@/assets/images/numfour.png'),
  title: '轮播图四'
}]	

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App ! This is Mine',
      value:'',
      demo03_list: baseList,
      list: [
        'https://o5omsejde.qnssl.com/demo/test1.jpg',
        'https://o5omsejde.qnssl.com/demo/test2.jpg',
        'https://o5omsejde.qnssl.com/demo/test0.jpg',
        'https://o5omsejde.qnssl.com/demo/test4.jpg',
        'https://o5omsejde.qnssl.com/demo/test5.jpg',
        'https://o5omsejde.qnssl.com/demo/test6.jpg',
        'https://o5omsejde.qnssl.com/demo/test7.jpg',
        'https://o5omsejde.qnssl.com/demo/test8.jpg'
      ],
      res:[],
      src:require('@/assets/images/numthree.png'),
      shopcar:require('@/assets/images/shopcar.png'),
      isshow:false,
      activeindex:1,
      count:'1',
      mask:'mask',
      bg:'bg',
      db:'db',
      selectshow:'selectshow',
      goodstype:'goods-itemtype'
    }
  },
  components:{
  	Bottomnav
  },
  mounted(){
  	this.getGoodList();
  },
  created(){

  },
  methods:{
  	getGoodList(){
  		this.$axios.get('http://localhost:8080/static/data.json').then(res=>{
  			this.res = res.data.result;
  		})
  	},
  	opengoodsdetail(){
		this.$router.replace('/Goods/Goodsdetail')
  	}
  }
}
</script>

<style scoped>
div .weui-grid__icon{
	width:0.8rem;
	height:0.8rem;
}
.vux-selector.weui-cell_select-after{
	padding-left: 0rem;
}
.selector /deep/ .weui-cells:before{
	height: 0rem;
	border:none;
}
.selector /deep/ .weui-cells:after{
	height: 0rem;
	border:none;
}
.selector /deep/ .vux-label{
	font-size: 18px;
}
.goodslist{
	width: 88%;
	margin: 0 auto;
	margin-top: 1px;
}
.flex-demo {
  text-align: center;
  color: #000;
  border-radius: 4px;
  box-shadow: 0px 0px 1px #2C3E50;
  background-clip: padding-box;
  margin-bottom: 0.26rem;
  height: 7rem;
}
.ximg-demo{
	height: 4rem;
	width: 100%;
	border-bottom: 1px solid #ccc;
}
.goodstitle{
	text-align: left;
	overflow: hidden;
	display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
	font-size: 14px;
	font-weight: bold;
	padding: 0.2rem;
}
.shopcar{
	width: 24px;
	vertical-align: middle;
    align-items: center;
}
/*新增*/
.mask{
  position:fixed;
  width:100%;
  height:100%;
  top: 0;
  z-index:1000;
  display:none;
}
.content{
  position: relative;
  background: #fff;
  padding-bottom: 100rpx;
  z-index: 999;
}
.content .title{
  font-size: 36rpx;
  line-height: 60rpx;
  padding: 20rpx 24rpx;
}
.content .price{
  color: #f23a46;
  font-size: 28rpx;
  padding: 0 24rpx;
  line-height: 80rpx;
}
.content .price text{
  font-size: 32rpx;
}
.content .price .buy{
  vertical-align: middle;
  width:66rpx;
  height:24rpx;
  text-align: center;
  line-height: 24rpx;
  margin-left:14rpx;
  color: #fff;
  font-size: 16rpx;
  border-radius: 12rpx;
  background: -webkit-linear-gradient(#4ae8e9,#00baee); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(#4ae8e9,#00baee); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(#4ae8e9,#00baee); /* Firefox 3.6 - 15 */
  background: linear-gradient(#4ae8e9,#00baee); /* 标准的语法 */
}
.content .details{
  position: relative;
  padding-top: 20rpx;
  padding: 20rpx 24rpx;
  border-top: 16rpx solid #ebebeb;
}

.wxParse-p{
  font-size: 28rpx;
  line-height: 50rpx;
  margin-bottom: 20rpx;
  overflow: hidden;
}
.fui-navbar .buybtn{
  color:#fff;
  background: -webkit-linear-gradient(#4ae8e9,#00baee); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(#4ae8e9,#00baee); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(#4ae8e9,#00baee); /* Firefox 3.6 - 15 */
  background: linear-gradient(#4ae8e9,#00baee); /* 标准的语法 */
}
/* 遮罩层 */
.bg {
  display: none;
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background-color: #000;
  z-index: 1001;
  -moz-opacity: 0.5;
  opacity: 0.5;
  filter: alpha(opacity=0.5);
}
.selectshow {
  position: absolute;
  bottom: -100%;
  left: 0rem;
  width: calc(100% - 0.69rem);
  padding: 0.4rem 0.35rem;
  border-top-left-radius: 0.2rem;
  border-top-right-radius: 0.2rem;
  background-color: #fff;
  z-index: 1002;
  overflow: auto;
}
.txt{
  margin-top: 20rpx;
  font-size: 28rpx;
  color: royalblue
}
.detail-active{
    animation:opacity 0.3s;
    animation-fill-mode:forwards;
}

@keyframes opacity
{
  from {
    -moz-opacity: 0;
    opacity: 0;
    filter: alpha(opacity=0);
  }
  to {
    -moz-opacity: 0.5;
    opacity: 0.5;
    filter: alpha(opacity=0.5);
  }
}
.tochangetype{
  animation:typeopacity 0.3s;
  animation-fill-mode:forwards;
}
@keyframes typeopacity
{
  0% {
    display: block;
    bottom: -17%;
    -moz-opacity: 0;
    opacity: 0;
    filter: alpha(opacity=0);
  }
  100% {
    bottom: 0%;
    -moz-opacity: 1;
    opacity: 1;
    filter: alpha(opacity=1);
  }
}
.time{
  width:66rpx;
  height: 24rpx;
  line-height: 24rpx;
  font-size: 16rpx;
  vertical-align: middle;
  color:#ffffff;
  display: inline-block;
  text-align: center;
  margin-left: 14rpx;
  margin-right: 7rpx;
  border-radius:12rpx;
  background: -webkit-linear-gradient(#4ae8e9,#00baee); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(#4ae8e9,#00baee); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(#4ae8e9,#00baee); /* Firefox 3.6 - 15 */
  background: linear-gradient(#4ae8e9,#00baee); /* 标准的语法 */
}
.discount{
  color:#999999;
  font-size:0.24rem;
}
.goods-item{
  padding-bottom: 0.32rem;
  border-bottom: 0.01rem solid #ebebeb;
}
.goods-itemimage{
  width:2.48rem;
  display:inline-block;
  border-radius: 0.5rem;
}
.goods-itemname{
  position:relative;
  display:inline-block;
  margin-left:0.28rem;
  width: calc(100% - 2.86rem);
  height:1.48rem;
  vertical-align:top;
}
.goods-name{
  height:60rpx;
}
.goods-itemprice{
  height:0.5rem;
  position:absolute;
  bottom:0;
  width: calc(100% - 2.86rem);
  line-height:50rpx;
}
.goods-price{
  font-size:14px;
  color:#fa0000;
}
.goodstype{
  width:1.5rem;
  height: 1.5rem;
  line-height: 1.5rem;
  text-align: center;
  display:inline-block;
  margin-right: 0.75rem;
  margin-bottom: 0.3rem;
  border:1rpx solid #dbdbdb;
  border-radius: 0.04rem;
  overflow: hidden;
}
.active-itemtype{
  border: 0.01rem solid #2cd5eb;
  background-color: #f4fdfe;
}
.type-item{
  padding-top: 16rpx;
}
.item-flex{
  display: flex;
  justify-content: space-between;
}
.type-title{
  flex:1;
  height: 0.6rem;
  line-height: 0.6rem;
  padding:0.24rem 0;
  font-size:16px;
  color:#808080;
}
.db{
	display: block;
}
.buy-item{
  height:40rpx;
  line-height:40rpx;
}
.buy-num{
  width: 57rpx;
  height:40rpx;
  display:inline-block;
  text-align:center;
}
.reduce-btn{
  width: 40rpx;
  height: 40rpx;
  border: 1rpx solid #dbdbdb;
  text-align: center;
  line-height: 40rpx;
  vertical-align: top;
  display:inline-block;
}
.add-btn{
  width: 40rpx;
  height: 40rpx;
  line-height: 40rpx;
  border: 1rpx solid #dbdbdb;
  text-align: center;
  vertical-align: top;
  display:inline-block;
}
.submit-btn{
  color:#fff;
  height: 0.88rem;
  width: 100%;
  border: none;
  line-height: 0.88rem;
  border-radius: 0.44rem;
  letter-spacing: 0.1rem;
  background: -webkit-linear-gradient(#4ae8e9,#00baee); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(#4ae8e9,#00baee); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(#4ae8e9,#00baee); /* Firefox 3.6 - 15 */
  background: linear-gradient(#4ae8e9,#00baee); /* 标准的语法 */
}


</style>
