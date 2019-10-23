<template>
  <div class="swiper-container banner">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in list" :key="index">
          <img :src="item.url" >
        </div>
    </div>

    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
    import  Swiper from "swiper"
    console.log(Swiper)
    export default {
      props:{
        list:Array
      },
      mounted(){
        this.banner();
      },
      methods: {
        banner(){
          new Swiper('.banner',{
            //direction: 'horizontal', // 垂直切换选项
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            //切换效果
            effect:'flip',
          })
        }
      }
    }

</script>

<style scoped>
@import url(../assets/swiper.min.css);
.banner{
  height: 400px;
  width:1200px;
  margin:0 auto;
}
.banner .swiper-slide img{
  width:100%;
  height: 400px;
}
</style>
