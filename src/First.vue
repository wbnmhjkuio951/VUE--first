<template>
  <div>
    <hheader></hheader>
    <div>{{info}}</div>
    <ffooter></ffooter>
    <sswiper :list="bannerList"></sswiper>
    <aajax></aajax>
  </div>
</template>

<script>
    import hheader from './components/Header';
    import ffooter from './components/Footer';
    import sswiper from './components/Swiper';
    import aajax from './components/Ajax';
    export default {
      data(){
        return{
          info:'这是内容',
          bannerList:[],
        }
      },
      created(){
        this.getBanner()
      },
      methods:{
        getBanner(){
          this.bannerList=[
            {
              url:'https://res.lancome.com.cn/resources/2019/8/18/15661400460856199.jpg'
            },
            {
              url:'https://res.lancome.com.cn/resources/2019/8/13/15656911092968675.jpg'
            },
            {
              url:'https://res.lancome.com.cn/resources/2019/8/9/15653615245211941.jpg'
            },
            {
              url:'https://res.lancome.com.cn/resources/2019/8/18/15661399454906230.jpg'
            },
          ]
        }
      },
      components:{
        hheader,
        ffooter,
        sswiper,
        aajax,
      }
    }
</script>

<style scoped>

</style>
