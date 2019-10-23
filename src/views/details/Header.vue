<template>
  <div class="detail">
    <!--大图   影片简介-->
    <div class="detail-h" style="background-color: #f4f4f4;">
      <div class="back" @click="$router.push('/')" v-show="true">
        <van-icon name="arrow-left" size="20px"/>
      </div>
      <van-sticky @scroll="topscroll">
      <div class="back-head" v-show="isshow">
        <van-icon name="arrow-left" size="20px" @click="$router.push('/')"/>
        {{list.name}}
      </div>
       </van-sticky>
      <div style="background-color:#ffffff;">
        <img :src="list.poster" alt="">
        <span>{{list.name}}</span>
        <!--<div class="D">{{list.filmType.name}}</div>-->
        <div class="grade">
          <p>{{list.grade}} <span>分</span></p>
        </div>
        <div class="category">
          <p>{{list.category}}</p>
        </div>
        <div class="premiereAt">
          <p>{{list.premiereAt|getPremiereAt('ymd')}}上映</p>
        </div>
        <div class="nation">
          <p>{{list.nation}}|{{list.runtime}}分钟</p>
        </div>
        <div class="synopsis" :class="{hide:ishide}" @click="ishide=!ishide">
          <p>{{list.synopsis}}</p>
        </div>
        <div class="arrowdown">
         <van-icon name="arrow-down"  />
        </div>
      </div>

      <!--演职人员-->
      <people :data="list.actors"></people>
      <!--剧照-->
      <photos :photo="list.photos"></photos>

    </div>


    <div class="nav-detail">
      <p>选座购票</p>
    </div>

  </div>
</template>

<script>
  import {getToDetail} from "../Api/api";
  import people from  '../details/People';
  import photos from  '../details/Photos';
  export default {
    data(){
      return{
        list:[],
        page:{
          filmId:this.$route.params.id
        },
        ishide:true,
      isshow:false
      }
    },
    created(){
      this.getDetail();
    },
    mounted(){

    },
    methods:{
      getDetail(){
        let query=this.page;
        getToDetail(query).then(result => {
          //console.log(result.data.film)
          this.list=result.data.film
        })
      },
      topscroll(obj){
        //console.log(obj.scrollTop)
        if (obj.scrollTop>10){
          this.isshow=true
        }else {
          this.isshow=false
        }
      }
    },
    components:{
      people,
      photos
    }
  }
</script>

<style scoped lang="less">
  .back{
    width: 8vw;
    height: 8vw;
    position: fixed;
    border-radius: 50%;
    background-color: rgba(153,153,153,.5);
    .van-icon{
      position: absolute;
      left:1.5vw;
      top: 1.5vw;
      z-index: 100;
      color: #000000;
    }
  }
  .back-head{
    width: 100%;
    height: 10vw;
    background-color: #ffffff;
    position: fixed;
    top: 0vw;
    text-align: center;
    line-height: 10vw;
    font-size: 18px;
    .van-icon{
      position: absolute;
      left: 0;
      top: 2.3vw;
    }
  }
  .detail{
    min-height: 200vw;
    background-color: #f4f4f4;
    .detail-h {
      min-height: 200vw;
      img {
        width: 100%;
        height: 60vw;
      }
      span {
        font-size: 18px;
        position: absolute;
        left: 0vw;
        top: 65vw;
      }

      .D {
        width: 5vw;
        height: 4vw;
        background-color: gainsboro;
        font-size: 12px;
        line-height: 4vw;
        border-right: 10px;
        color: #ffffff;
        position: absolute;
        left: 45vw;
        top: 66vw;
      }

      .grade {
        position: relative;

        p {
          font-size: 18px;
          font-style: italic;
          color: #ffb232;
          position: absolute;
          right: 10vw;
          top: 4.6vw;
        }

        span {
          font-size: 14px;
          top: 0vw;
          left: 6vw;
        }
      }

      .category {
        position: absolute;
        top: 72vw;
        font-size: 14px;
        color: gray;
      }

      .premiereAt {
        position: absolute;
        top: 77vw;
        font-size: 14px;
        color: gray;
      }

      .nation {
        position: absolute;
        top: 82vw;
        font-size: 14px;
        color: gray;
      }

      .synopsis {
        margin-top: 29vw;
        font-size: 14px;
        color: gray;
        background-color: #ffffff;
        transition: height 0.5s ease;
      }

      .synopsis.hide {
        height: 2.5rem;
        overflow: hidden;
        overflow: hidden;
      }
    }
  }

  .nav-detail{
    width: 100%;
    height: 10vw;
    background-color: #ff5f16;
    position: fixed;
    bottom: 0vw;
    z-index: 1000;
    p{
      text-align: center;
      color: #ffffff;
      line-height: 10vw;
    }
  }
  .van-icon {
    position: relative;
    left: 47.5%;
    color: gray;
  }
</style>
