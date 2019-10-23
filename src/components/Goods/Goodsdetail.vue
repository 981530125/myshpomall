<template>
  <div>
    <div style="text-align: center;">
      <x-img :src="src" :webp-src="`${src}?type=webp`" class="goodslist-img" error-class="ximg-error" container="#vux_view_box_body"></x-img>
    </div>
    <div style="padding:0 10px">
      <flexbox justify="space-around;" style="height:80px;line-height:80px;">
        <flexbox-item>
          <div class="flex-share-l">
            <div>青酱熏鸡肉面包</div>
            <div style="goods-price">￥6</div>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="flex-share-r">
            <div style="text-align:center;height:40px;line-height:40px;">
              <i class="iconfont icon-fenxiang icon-fenxiang-style"></i>
            </div>
            <p style="text-align:center;height:40px;line-height:20px;">分享</p>
          </div>
        </flexbox-item>
      </flexbox>
    </div>
    <div style="clear:both;"></div>
    <div class="goods-item-prop">
      <div class="goods-iten-style">
        <group class="group">
          <cell-box is-link class="cell">
              <span>已选择：</span><span>个</span>
          </cell-box>
          <cell title="175克" style="font-size: 14px;color:#000">
            <i class="iconfont icon-weight icon-weight-style" style="display:block;margin-right:6px;" slot="icon"></i>
            <i class="iconfont icon-shijian icon-shijian-style" style="margin-right:10px;"></i>
            <span style="letter-spacing:1px;color: #000;font-size:14px;">现货可1小时内安排配送</span>
          </cell>
          <cell title="参考甜度" style="font-size: 14px;color:#000">
            <rater v-model="data5" star="✩" active-color="#FF9900" :margin="4" disabled></rater>
          </cell>
          <cell title="保鲜条件" style="font-size：14px;color:#000">
              <span style="font-size:14px;color:#000;">密封常温保存，48小时内尽快食用</span>
          </cell>
        </group>
      </div>
    </div>
    <sticky scroll-box="vux_view_box_body"  >
      <tab :line-width="1" :custom-bar-width="getBarWidth" active-color='#fc378c'>
        <tab-item :selected="demo4 === item.name" v-for="(item, index) in list4" @on-item-click="onItemClick(item, index)" @click="demo4 = item.name" :key="index">{{item.name}}</tab-item>
      </tab>
    </sticky>
    <div style="padding:0 10px;">
      <x-img :src="detailsrca" :webp-src="`${detailsrca}?type=webp`" class="goodslist-img" error-class="ximg-error" container="#vux_view_box_body"></x-img>
      <x-img :src="detailsrcb" :webp-src="`${detailsrcb}?type=webp`" class="goodslist-img" error-class="ximg-error" container="#vux_view_box_body"></x-img>
      <x-img :src="detailsrcc" :webp-src="`${detailsrcc}?type=webp`" class="goodslist-img" error-class="ximg-error" container="#vux_view_box_body"></x-img>
      <x-img :src="detailsrcd" :webp-src="`${detailsrcd}?type=webp`" class="goodslist-img" error-class="ximg-error" container="#vux_view_box_body"></x-img>
      <x-img :src="detailsrce" :webp-src="`${detailsrce}?type=webp`" class="goodslist-img" error-class="ximg-error" container="#vux_view_box_body"></x-img>
    </div>
    <div style="padding:0 10px;">
      <x-img :src="detailsrca" :webp-src="`${detailsrca}?type=webp`" class="goodslist-img" error-class="ximg-error" container="#vux_view_box_body"></x-img>
      <x-img :src="detailsrcb" :webp-src="`${detailsrcb}?type=webp`" class="goodslist-img" error-class="ximg-error" container="#vux_view_box_body"></x-img>
      <x-img :src="detailsrcc" :webp-src="`${detailsrcc}?type=webp`" class="goodslist-img" error-class="ximg-error" container="#vux_view_box_body"></x-img>
      <x-img :src="detailsrcd" :webp-src="`${detailsrcd}?type=webp`" class="goodslist-img" error-class="ximg-error" container="#vux_view_box_body"></x-img>
      <x-img :src="detailsrce" :webp-src="`${detailsrce}?type=webp`" class="goodslist-img" error-class="ximg-error" container="#vux_view_box_body"></x-img>
    </div>
    <div style="padding:0 10px;">
      <x-img :src="detailsrca" :webp-src="`${detailsrca}?type=webp`" class="goodslist-img" error-class="ximg-error" container="#vux_view_box_body"></x-img>
      <x-img :src="detailsrcb" :webp-src="`${detailsrcb}?type=webp`" class="goodslist-img" error-class="ximg-error" container="#vux_view_box_body"></x-img>
      <x-img :src="detailsrcc" :webp-src="`${detailsrcc}?type=webp`" class="goodslist-img" error-class="ximg-error" container="#vux_view_box_body"></x-img>
      <x-img :src="detailsrcd" :webp-src="`${detailsrcd}?type=webp`" class="goodslist-img" error-class="ximg-error" container="#vux_view_box_body"></x-img>
      <x-img :src="detailsrce" :webp-src="`${detailsrce}?type=webp`" class="goodslist-img" error-class="ximg-error" container="#vux_view_box_body"></x-img>
    </div>
    <ShoppingCart></ShoppingCart>
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
  </div>
</template>

<script>
import ShoppingCart from '../Shoppingcart/shopping-cart.vue'
export default {
  name: 'Goodsdetail',
  components:{
  	ShoppingCart
  },
  data () {
    return {
      list4: [{
          name:'详情',
          type:'detail'
        },
        {
          name:'评价',
          type:'Evaluation'
        },
        {
         name:'原料',
         type: 'materials'
        }],
      demo4: '详情',
      getBarWidth: function (index) {
        return '22px'
      },
      src: require('@/assets/images/01.png'),
      detailsrca:  require('@/assets/images/goodsdetail01.png'),
      detailsrcb:  require('@/assets/images/goodsdetail02.png'),
      detailsrcc:  require('@/assets/images/goodsdetail03.png'),
      detailsrcd:  require('@/assets/images/goodsdetail04.png'),
      detailsrce:  require('@/assets/images/goodsdetail05.png'),
      data5: 3,
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
  methods: {
    onItemClick(item,index){
      console.log(item);
      console.log(index);
    },
    choosetype(){
      this.isshow = true;
    },
    hideview(){
      this.isshow = false;
    },
    choosegoodstype(n){
      this.activeindex = n;
    }
  }
}
</script>

<style scoped>
.box {
  padding: 15px;
}
.goodslist-img{
  width: 100%;
  height: auto;
}
.flex-share-l{
  height:48px;
  line-height: 30px;
  font-size: 18px;
}
.flex-share-r{
  height:80px;
  width: 50px;
  float: right;
  
}
.icon-fenxiang-style{
  font-size:30px;
}
.goods-price{
  font-size: 20px;
}
.goods-item-prop{
  background-color: #f6f6f6;
  padding:15px;

}
.goods-iten-style{
  min-height:50px;
}
.group{
  border-radius:10px;
  overflow: hidden;
}
.icon-shijian-style{
  font-size: 16px;
}
</style>
<style>
.group .weui-cells{
  margin: 0 !important;
}
.group .weui-cell:before{
  border:none !important;
}
.group .weui-cells:after{
  border:none !important;
}
.cell{
  background-color:#efefef;
}
.conditions span{
  font-size: 14px;
  color:#000;
}
</style>