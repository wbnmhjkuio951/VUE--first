<template>
    <div class="people">
      <p>演职人员</p>
      <div class="swiper-container img-people" >
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in data" :key="item.name">
            <p><img :src="item.avatarAddress" alt="" /></p>
            <span class="actorname">{{item.name}}</span>
            <span class="actorz">{{item.role}}</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    export default {
      data(){
        return{

        }
      },
      props:[
        'data'
      ],
      updated(){
        this.banner()
      },
       methods:{
         banner(){
           new Swiper('.img-people',{
             slidesPerView : 4,
             observeParents:false,   //注意这里！！
             observer:true,
           })
         }
       }
    }
</script>

<style lang="less" scoped>
  @import url(../../assets/swiper.min.css);
  .people{
    margin-top: 3vw;
    position: absolute;
    width: 100%;
    height: 45vw;
    background-color: #ffffff;
    p{
      font-size: 16px;
      text-align: left;
      color: #191a1b;
      position: absolute;
      left: 0vw;
    }
    .img-people{
      width: 100%;
      height: 40vw;
      margin-top: 7vw;
      img{
        width: 24vw;
        height: 24vw !important;
      }
      .actorname{
        display: block;
        position: absolute;
        top: 25vw;
        text-align: center;
        width: 24vw;
        z-index: 100000;
        font-size: 12px;
      }
      .actorz{
        display: block;
        position: absolute;
        top: 30vw;
        text-align: center;
        width: 24vw;
        z-index: 100000;
        font-size: 12px;
      }
    }
  }
  .swiper-slide{
    width: 25vw;
    height: 25vw;
  }
</style>
