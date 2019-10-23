<template>
   <div class="banner">
     <van-swipe :autoplay="2000" indicator-color="white">
       <van-swipe-item v-for="(item) in list" :key="item.bannerId">
         <img :src="item.imgUrl" alt="">
       </van-swipe-item>
     </van-swipe>
     <router-link to="/city">
     <div class="city">
      {{$store.state.cityName}}
     </div>
     </router-link>
   </div>
</template>

<script>
  import { getToBanner } from  './Api/api'
    export default {
    data(){
      return{
        list:[]
      }
    },
      created() {
        this.getBanner()
      },
      methods:{
        getBanner(){
          getToBanner().then(result=>{
            //console.log(result.data)
            this.list=result.data
          })
        }
      }
    }
</script>

<style scoped lang="less">
.banner{
  width: 100%;
  height: 50vw;
  background-color: gainsboro;
  //position: fixed;
  top: 0vw;
  z-index: 100;
  img{
    width: 100%;
    height: 50vw;
  }
}
  .city{
    position: absolute;
    padding: 0 1vw 0 1vw;
    background-color: rgba(0,0,0,.5);
    top: 3vw;
    left: 3vw;
    border-radius: 2vw;
    opacity: .6;
    text-align: center;
    line-height: 7vw;
    color: #ffffff;
  }
</style>
