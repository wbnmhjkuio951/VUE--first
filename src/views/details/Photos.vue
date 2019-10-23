<template>
    <div class="photos">
      <div class="ph-header">
        <span id="title">剧照</span>
        <span id="about" @click="show=!show">全部(5)> </span>
        <van-image-preview
          v-model="show"
          :images="photo"
          @change="onChange"
        >
        </van-image-preview>
      </div>

        <div class="swiper-container zphotos">
          <div class="swiper-wrapper">
            <div class="swiper-slide mphotos" v-for="(item,index) in photo"  :key="item.filmId">
              <img :src="item" alt="">
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
        show: false,
        index: 0,
        photo: [

        ]
      }
    },
      props:[
        'photo'
      ],
      updated() {
        this.Pbanner()
      },
      methods:{
        Pbanner(){
          var swiper2= new Swiper('.zphotos',{
            slidesPerView : 2,
          })
        }

      }
    }
</script>

<style lang="less" scoped>
  @import url(../../assets/swiper.min.css);
.photos{
  width: 100%;
  height: 47vw;
  background-color: #ffffff;
  margin-top: 52vw;
  #title{
    text-align: left !important;
    color: #191a1b !important;
    font-size: 16px !important;
    position: static !important;
  }
  #about{
    position: relative !important;
    right: 0vw !important;
    top: 0vw;
    font-size: 14px;
    margin-left: 75vw;
  }
  img{
    margin-top: 2vw;
    width: 45vw;
    height: 30vw !important;
  }
  .mphotos{
    width: 45vw;
    height: 30vw;
  }
}
</style>
