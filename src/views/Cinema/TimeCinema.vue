<template>
    <div class="time">
        <div>
          <ul class="tabs-nav">
            <li v-for="(item,index) in CinemaNum.showDate"  @click="test(item)">
              <span :class="{active:isshow}">{{item|getPremiereAt('md')}}</span>
            </li>
          </ul>
        </div>
      <list-cinema :data="k" v-if="k.length"></list-cinema>
    </div>
</template>

<script>
  import Swiper from 'swiper'
  import { getCinemaNum } from '../Api/api'
  import ListCinema from  './ListCinema'
    export default {
        data(){
          return{
            isshow:false,
            timeTemp: (new Date()).valueOf(),
            CinemaNum:[],
            TimeList:{
              cinemaId:this.$route.params.id
            },
            k:['1567699200'],
          }
        },
      created(){
        this.getNum()
      },
      updated(){

      },
      methods:{
          is(){
            this.isshow=!this.isshow
          },

          getNum(){
            let query=this.TimeList;
            getCinemaNum(query).then(res=>{
              console.log(res.data.films[0])
              this.CinemaNum=res.data.films[0]
            })
          },
        test(id) {
            this.k=[];
         //console.log(id)
          this.k+=id;
          console.log(this.k)
        },

      },
      components:{
        ListCinema
      },
    }
</script>

<style lang="less" scoped>
  @import url(../../assets/swiper.min.css);
.time{
  width: 100%;
  height: 200vw;
  margin-top: 2vw;
  border-bottom: 0.1vw solid gainsboro;
  border-top: 0.1vw solid gainsboro;
  .tabs-nav{
    width: 96%;
    height: 10vw;
    float: right;
    display: flex;
    li{
      width: 28%;
      height: 10vw;
      margin-right: 1vw;
      span{
        line-height: 10vw;
      }
      .active{
        color: #ff5f16;
      }
    }
  }
}

.list-ul{
  width: 100%;
  min-height: 100vw;
  margin-top: 10vw;
  li{
    width: 100%;
    height: 20vw;
    position: relative;
    border-bottom: 0.1vw solid gainsboro;
    .showAt{
      position: absolute;
      top: 4vw;
      left: 4vw;
    }
    .endAt{
      position: absolute;
      top: 12vw;
      left: 4vw;
      font-size: 13px;
      color: grey;
    }
    .threed{
      position: absolute;
      top: 3.5vw;
      left: 32vw;
  }
    .hall{
      position: absolute;
      top: 12vw;
      left: 32vw;
      font-size: 13px;
      color: grey;
    }
    .sale{
      position: absolute;
      top: 8vw;
      left: 74vw;
      color: #ff5f16;
    }
    .buy{
      span{
        padding: .2vw;
        color: #ff5f16;
        border: 0.1vw solid #ff5f16;
        position: absolute;
        top: 7.8vw;
        left: 88vw;
      }
    }
  }
  }
</style>
