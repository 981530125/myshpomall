<template>
  <div class="search">
    <!-- 搜索导航 -->
    <!--<SearchNav></SearchNav>-->
    <div class="shop" ref="shop">
      <!-- 左边 -->
      <div class="menu-wrapper">
        <ul>
          <!-- current -->
          <li
            class="menu-item"
            v-for="(goods,index) in searchgoods"
            :key="index"
            :class="{current: currentIndex === index}"
            @click="clickList(index)"
            ref="menuList"
            >
            <span>{{goods.name}}</span>
          </li>
        </ul>
      </div>
      <!-- 右边 -->
      <div class="shop-wrapper">
        <ul ref="itemList" class="shops-ul" >
          <li class="shops-li" v-for="(goods, index1) in searchgoods" :key="index1">
            <div class="shops-title">
              <h4>{{goods.name}}</h4>
            </div>
            <!--<ul class="phone-type" v-if="goods.tag === 'phone'">
              <li v-for="(phone,index) in goods.category" :key="index">
                <img :src="phone.icon" alt="">
              </li>
            </ul>-->
            <ul class="shops-items">
              <li v-for="(item, index2) in goods.items" :key="index2">
                <img :src="require('../assets/images/03.jpg')" alt="">
                <span>{{item.title}}</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <Bottomnav></Bottomnav>
  </div>
</template>

<script>
import Bottomnav from './Bottomnav.vue'
import BScroll from 'better-scroll'
export default {
  name: 'User',
  data () {
    return {
    	searchgoods:[],
    	scrollY:0,//右侧列表滑动的Y轴坐标
    	rightLiTops:[],//所有分类头部位置
    	lastheight:0
    }
  },
  components:{
  	Bottomnav
  },
  created(){
//		this.ajaxFun(),
		this.$axios.get('http://localhost:8080/static/user.json').then(res => {
      this.searchgoods = res.data.result;
   	})
	},
	mounted(){
		this.$refs.itemList.style.paddingBottom = this.$refs.shop.clientHeight-60+'px'
	},
	methods:{
		_initBScroll() {
        this.leftBscroll = new BScroll('.menu-wrapper',{
        	click:true   //允许better-scroll列表上的点击事件
        	//左边滚动
        })
        this.rightBscroll = new BScroll('.shop-wrapper',{
        	probeType : 3   //让better-scroll监听scroll事件
        	//右边滚动
        })
        this.rightBscroll.on('scroll',(pos) => {
          this.scrollY =Math.abs(Math.round(pos.y));
        })
　　},
		_initLeftScroll(index){
			let menu = this.$refs.menuList;
			let el = menu[index];
			this.leftBscroll.scrollToElement(el,300,0,-300)
		},
 		_initRightHeight(){
 			//求出右侧列表的高度
      let itemArray=[]; //定义一个伪数组
      let top = 0;
      itemArray.push(top)
      //获取右边所有li的礼
      let allList = this.$refs.itemList.getElementsByClassName('shops-li');
      
      //allList伪数组转化成真数组
      Array.prototype.slice.call(allList).forEach(li => {
      	this.lastheight = li.clientHeight;
        top += li.clientHeight; //获取所有li的每一个高度
        itemArray.push(top)
      });
      this.rightLiTops = itemArray;
      // console.log(this.rightLiTops)
    },
    clickList(index){
    	this.scrollY = this.rightLiTops[index];
    	this.rightBscroll.scrollTo(0,-this.scrollY,200,)
    	//
    	
    },
    getRightheight(){
    	
    }
	},
	watch:{
		searchgoods(){
			//监听搜索数据
			this.$nextTick(()=>{
				//左右两边滚动
				this._initBScroll();
				//右边列表的高度
				this._initRightHeight();
				//设置右侧最小滚动高度，防止高度无法滚到最顶部
				this.$refs.itemList.style.paddingBottom = this.$refs.shop.clientHeight-this.lastheight+'px'
			})
		},
	},
	computed:{
		//动态绑定class类名
		currentIndex() {
        for(let i=0;i< this.rightLiTops.length;i++) {
          let height1 = this.rightLiTops[i];
          let height2 = this.rightLiTops[i+1];
          if(!height2 || (this.scrollY >= height1 && this.scrollY < height2)){
            return i;
          }
        }
        return 0;
     }
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 	.search{
 		width: 100%;
    height: 100%;
    background-color: #f8f8f8;
    overflow: hidden;
 	}
 	.search .shop{
 			display: flex;
      position: absolute;
      top: 46px;
      bottom: 55px;
      width: 100%;
      overflow: hidden;
 	}
  .menu-wrapper{
    width: 80px;
    flex: 0 0 80px;
  }
  .menu-item{
  	width: 100%;
	  height: 60px;
	  background: #f8f8f8;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  font-family: lighter;
	  color: #666;
	  position: relative;
  }
  .menu-item span{
  	font-size: 14px;
  }
  .current{
  	color: #e02e24;
    background: #ffffff;
  }
  .current::before{
  	content: '';
	  background-color: #e02e24;
	  width: 4px;
	  height: 30px;
	  position: absolute;
	  left: 0;
  }
  .shop-wrapper{
  	flex: 1;
    background: #fff;
  }
  .shops-title{
  	display: flex;
	  flex-direction: row;
	  padding: 0 10px;
	  height :40px;
	  align-items: center;
	  justify-content: space-between;
	  color: #000;
	  font-weight: normal;
  }
  .shops-title h4{
  	text-decoration: none;
	  color: #000;
	  font-weight: normal;
	  font-size: 12px;
  }
  .shops-items{
  	display: flex ;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .shops-items li{
  	display: flex;
    flex-direction: column;
    width: 33%;
    height :3.73rem;
    justify-content: center;
    align-items: center ;
  }
  .shops-items li img{
  	width: 94%;
  	margin-bottom: 5px;
  }
  .shops-items li span{
  	color: #151516;
    font-size: 14px;
  }
  .phone-type{
  	width: 100%;
	  display: flex;
	  flex-direction: row;
	  flex-wrap: wrap;
	  border-bottom:1px solid #cccccc;
  }
  .phone-type li{
  	width :33.3%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px 0;
  }
  .phone-type img{
  	width: 70%;
  }
</style>
