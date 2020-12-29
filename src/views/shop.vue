<template>
	<div id="main">
		<div class="sku-box store-content">
              <div class="box">
        <div class="nav-menu">
            <ul class="menu-wrap">
                <li class="menu-item">
                    <a href="javascript:;">坚果炒货</a>
                    <div class="children">
                        <ul v-for="(item,i) in menuList" v-bind:key="i">
                            <li v-for="(sub,j) in item" v-bind:key="j">
                                <a v-bind:href="sub?'/#/product/'+sub.id:''">
                                {{sub?sub.name :'坚果'}}</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="menu-item">
                    <a href="javascript:;">休闲零食</a>
                </li>
                <li class="menu-item">
                    <a href="javascript:;">饼干蛋糕</a>
                </li>
                <li class="menu-item">
                    <a href="javascript:;">蜜饯果干</a>
                </li>
                <li class="menu-item">
                    <a href="javascript:;">糖果巧克力</a>
                </li>        
            </ul>
        </div>
    <el-carousel indicator-position="outside">
    <el-carousel-item v-for="(item,index) in slideList" v-bind:key="index">
      <a v-bind:href="'/#/product/'+item.id"><img v-bind:src="item.img"></a>
    </el-carousel-item>
    </el-carousel>
    </div>
        <div class="ads-box">
        <a v-bind:href="'/#/product'+item.id" v-for="(item,index) in adsList" v-bind:key="index">
            <img v-bind:src="item.img">
        </a>
    </div>
    <div class="banner">
        <a href="">
            <img src="../assets/sources/pass.jpg">
        </a>
    
    </div>
			<div class="gray-box">
				<div class="item-box">
					<shop-item  v-bind:key="index" v-for="(item,index) in goodsList" v-bind:item="item"></shop-item>
				</div>
			</div>
		</div>
    <prompt v-if="maxCount"></prompt>
    
	</div>
</template>


<script>
import Carousel from 'element-ui';
import goodData from '@/lib/newGoodsData'
import shopItem from '@/components/shop-item'
import prompt from '@/components/prompt'

export default {
  
  data () {
    return {
      goodsList: goodData,
      slideList:[{ id:1, img:require('../assets/sources/lunbo-1.jpg'),},
            { id:2, img:require('../assets/sources/lunbo-2.jpg'),},
            { id:3, img:require('../assets/sources/lunbo-3.jpg'),},
            { id:4, img:require('../assets/sources/lunbo-4.jpg'),}],
      menuList:[[{id:1,name:'夏威夷果',},
                 {id:2,name:'松子',},
                 {id:3,name:'开心果',},
                 {id:4,name:'板栗',}]],
      adsList:[{id:1,img:require('../assets/sources/banner-1.jpg'),},
              {id:2,img:require('../assets/sources/banner-2.jpg'),},
              {id:3,img:require('../assets/sources/banner-3.jpg'),},
              {id:4,img:require('../assets/sources/banner-4.jpg'),}]
    }
  },
  components: {
    shopItem,
    prompt,
    Carousel
    
  },
  computed: {
    maxCount () {
      return this.$store.state.maxOff
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/base.scss';
@import '../assets/scss/mixin.scss';
.box{
    width: 1200px;
    margin: auto;
}
.el-carousel{
    img{
    width: 100%;
    height: 300px;
}
}
.nav-menu{
    position: absolute;
    width: 264px;
    height: 300px;
    z-index: 7;
    padding:17px 0;
    background-color: #55585a7a;
    box-sizing: border-box;
} 
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
    
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
.menu-item{
    height: 50px;
    line-height: 50px;
    a{
    position: relative;
    font-size: 16px;
    color: #ffffff;
    padding-left: 30px;
    display: block;
    &:after{
        position: absolute;
        top:17px;
        right: 30px;
        content: '';
        @include bgImg(10px,15px,"");
        }
    }
    &:hover{
        background-color: #ff6600;
        .children{
            display: block;
        }
    }
    .children{
        width: 600px;
        height: 80px;
        background-color: #ffffff;
        position: absolute;
        display: none;
        top:0;
        left: 264px;
        border: 1px solid #e5e5e5;
        ul{
            display: flex;
            justify-content: space-between;
            height: 75px;
            li{
                height: 75px;
                line-height: 75px;
                flex: 1;
                padding-left: 23px;
                vertical-align: middle;
            }
            a{
                color: #333333;
                font-size: 14px;
            }
        }
    }
}
.banner{
    width: 1200px;
    height: 120px;
    margin-top: 14px;
    margin-bottom:4px;
    img{
        width: 100%;
        height: 100%;
        
    }
}
.ads-box{
  width: 1200px;
  margin: auto;
    display: flex;
    justify-content: space-between;
    margin-top: 14px;
    margin-bottom: 14px;
    a{
        width: 245px;
        height: 70px;
    }
    img{
        width: 100%;
        height: 100%;
    }
}
.gray-box{
    width: 1200px;
    margin: auto;
    background-color: #f5f5f5;
    margin-top: 20px;
    }    
  .item-box{
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 10px;
      overflow: hidden;
    }
.sku-box{
    position:relative;
}
.sort-option{
    border-top: 1px solid #D8D8D8;
    color: #999;
}
.sort-option ul{
    height: 60px;
    line-height: 60px;
}
.sort-option li{
    position: relative;
    float: left;
    padding-left: 42px;
}
.sort-option li:first-child{
	padding-left: 9px;
}
.sort-option li:before{
	content: ' ';
    display: block;
    position: absolute;
    left: 20px;
    top: 50%;
    width: 2px;
    height: 2px;
    margin-top: -1px;
    background: #C7C7C7;
}
.sort-option li:first-child:before{
	display: none;
}
.sort-option a{
	display: block;
    font-size: 12px;
    color: #999;
}
.sort-option a.active, .sort-option a:hover{
    color: #5683EA;
}
.gray-box{
    background: #fff;
    border-radius: 8px;
    border: 1px solid #dcdcdc;
    border-color: rgba(0,0,0,.14);
    box-shadow: 0 3px 8px -6px rgba(0,0,0,.1);
}
.sku-box .item-box{
	clear: both;
    overflow: hidden;
    margin: 0 -1px -1px -1px;
}
</style>