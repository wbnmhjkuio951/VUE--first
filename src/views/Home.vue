<template>
  <div class="home">
    <div class="header" >
      <banner></banner><!--//轮播-->

      <div v-show="seen" class="address">
        <span @click="$router.push('/city')">{{$store.state.cityName}}</span>
        <div class="arrow">
          <van-icon name="arrow-down" />
        </div>
        <p>电影</p>
      </div>

      <van-sticky @scroll="topscroll" >
      <ul class="title">
        <li><router-link to="/movie/HotMovie">正在热映</router-link></li>
        <li><router-link to="/movie/Coming">即将上映</router-link></li>
      </ul>
        </van-sticky>

      <router-view></router-view>
    </div>
  </div>

</template>

<script>
 import banner from './Banner.vue'
export default {
   data(){
     return{
       seen:false
     }
   },
components:{
  banner,
},
  methods:{
    topscroll(obj){
      //console.log(obj.scrollTop)
      if (obj.scrollTop>200){
        this.seen=true
      }else {
        this.seen=false
      }
    }
  }
}
</script>

<style  lang="less">
.header {
  width: 100%;
  height: 56vw;
  .title {
    width: 100%;
    height: 10vw;
    line-height: 10vw;
    font-size: 18px;
    background-color: #ffffff;
    border-bottom: .1vw solid gainsboro;
    display: flex;
    justify-content: space-around;
    list-style: none;
    //margin-top: 50vw;
    //position: fixed;
    z-index: 100;
  }
}
  .address{
    width: 100%;
    height: 10vw;
    position: fixed;
    background-color: #ffffff;
    top: 0vw;
    z-index: 100;
    span{
      position: absolute;
      left:3vw;
      top: 2.5vw;
      color:gray;
    }
    .arrow{
      position: absolute;
      left:10.7vw;
      top: 3.2vw;
      color:gray;
    }
    p{
      font-size: 18px;
      line-height: 10vw;
      text-align: center;
    }
  }
  .van-sticky--fixed{
    top: 9vw;
  }
</style>
