<template>

    <div>
      <div class="banner"  v-if="list.length">

        <div class="swiper-container  aaa" >
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item) in list"  >
              <img :src="item.poster" alt="">
            </div>
          </div>
        </div>

      </div>

      <div>
        <div class="film-head">
          {{list[aaa].name}} <span> {{list[0].grade}}分</span>
        </div>
        <div class="film-desc">
          {{list[0].category}} | {{list[0].runtime}} | {{list[0].director}}
        </div>
      </div>
      <!--<con-cinema :con="list" :com="aaa"></con-cinema>-->
    </div>

</template>

<script>
  import Swiper from 'swiper'
  //import ConCinema from  './ConCinema'
  import {getToPic} from '../Api/api'

  export default {
    data() {
      return {
        list: [],
        num: {
          cinemaId: this.$route.params.id
        },
        sw:{},
        aaa:0,
      }
    },
   props:{

   },

    watch:{
      list
        (val){
        console.log('watch',val);
        this.banner()
        },
      deep:true,
      immediate:true
    },
    created() {

      this.getPic()
    },

    mounted(){
      console.log(111111111,this.list)
      //this.banner()
    },
    updated() {
      console.log('updated')
    },
    methods: {
      banner() {
        console.log(789456123)
        let _this=this
        this.sw= new Swiper('.aaa', {
          slidesPerView: 3,
          spaceBetween: 20,
          centeredSlides: true,
          observer:true,
          on: {
            slideChangeTransitionEnd: function(){
              //alert(this.activeIndex);//切换结束时，告诉我现在是第几个slide
              _this.aaa=this.activeIndex;
              console.log(_this.aaa)
            },
          },
          onSlideChangeEnd:function (swiper) {
            swiper.update();
            this.sw
          }
        });
      },

      getPic() {
        let query = this.num;
        getToPic(query).then(result => {
          //console.log(result.data.films)
          this.list = result.data.films
        })
      },
    },
    components:{
     // ConCinema
    }
  }
</script>

<style lang="less" scoped>
  @import "../../assets/swiper.min.css";
.banner{
  width: 100%;
  height: 40vw;
  margin-top: 2vw ;
  overflow: hidden;
}
  .swiper-container {
    width: 95%;
    height: 80%;
    margin-top: 3vw;
  }
  .sj{
    width: 5vw;
    height: 3vw;
    position: relative;
    left: 47%;
    top: -3vw  ;
    z-index: 100;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    transition: 300ms;
    transform: scale(0.8);
    img{
      width: 100%;
      height: 100%;
    }
  }
  .swiper-slide-active,.swiper-slide-duplicate-active{
    transform: scale(1);
  }
.film-head{
  width: 100%;
  height: 7vw;
  position: relative;
  top: 2vw;
  text-align: center;
  line-height: 7vw;
  span{
    color:#ffb232;
    margin-left: 2vw;
  }
}
  .film-desc{
    width: 100%;
    height: 5vw;
    margin-top: 3vw;
    text-align: center;
    font-size: 14px;
    color: grey;
    border-bottom: 0.1vw gainsboro;
  }
  .van-sticky{
    background-color: #ffffff;
  }

   .van-sticky--fixed{
     top: 10vw;
   }

  .swiper-slide-active{
    transform: scale(1) !important
  }
  .imgfilter{
  }
</style>
