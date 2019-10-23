<template>
  <div class="cinemas">
    <div class="he-cinemas">
      <div id="address">
        <div class="address-a">
          <span @click="$router.push('/city')">{{$store.state.cityName}}</span>
          <van-icon name="arrow-down" size="2vw"/>
        </div>
        <span class="address-b">影院</span>
        <div class="search">
          <van-icon name="search" size="6vw"/>
        </div>
      </div>
      <div class="address-list">
         <ul class="address-list-ul">
           <li>
             <div class="ul-a">
               <span>全城</span>
               <van-icon name="arrow-down" size="2vw" color="black"/>
             </div>
           </li>
           <li>
             <div class="ul-a">
               <span>APP订票</span>
               <van-icon name="arrow-down" size="2vw" color="black"/>
             </div>
           </li>
           <li>
             <div class="ul-a">
               <span>最近去过</span>
               <van-icon name="arrow-down" size="2vw" color="black"/>
             </div>
           </li>
         </ul>
      </div>
    </div>
    <div class="cinemas-list">
      <ul class="list-cinemas">
        <li v-for="(item,index) in list" :key="item.cinemaId" @click="Tocinema(item.cinemaId)">
        <div class="cinema-info">
          <span style="margin-bottom: 1vw">{{item.name}}</span>
          <span class="cinema-address">{{item.address}}</span>
        </div>
          <div class="cinema-price">
              <p>￥ <span>{{item.lowPrice/100}}</span> 起</p>
            <div class="distance">
              距离未知
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { getToCinema } from  './Api/api'
  export default  {
    methods: {
      go() {
        this.$router.push('/movie')
      },
      to(id) {
        this.$router.push('/Detail/' + id)
      },
      getCinema(){
        getToCinema().then(result=>{
          //console.log(result.data.cinemas)
          this.list=result.data.cinemas
        })
      },
      Tocinema(id){
        this.$router.push({
          name:'Cinema',
          params:{
            id:id
          }
        })
      },
    },
      data(){
        return{
          list:[]
        }
      },
      created(){
        this.getCinema()
      },
  }
</script>

<style lang="less">
.cinemas{
  overflow: hidden;}
  .he-cinemas{
    width: 100%;
    height: 25vw;
    background-color: #ffffff;
    border-bottom:0.1vw solid gainsboro;
    position: fixed;
    z-index: 1000;
    #address{
      width: 100%;
      height: 13vw;
      position: relative;
      overflow: hidden;
      .address-a{
        width: 11vw;
        height: 5vw;
        position: absolute;
        top: 3vw;
        left: 3vw;
        span{
          font-size: 13px;
        }
        .van-icon{
          left: 1vw !important;
        }
      }
      .address-b{
        display: block;
        text-align: center;
        margin-top: 2.5vw;
        font-size: 17px;
      }
      .search{
        width: 7vw;
        height: 7vw;
        position: absolute;
        right: 2vw;
        top: 2.5vw;
        .van-icon{
          left: 0vw;
        }
      }
    }
    .address-list{
      width: 100%;
      height: 12vw;
      .address-list-ul{
        width: 90%;
        height: 12vw;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        li{
          width: 30%;
          height: 12vw;
          font-size: 14px;
          font-weight: bold;
          .ul-a{
            margin: 3vw 0 0 7vw;
            span{
              color: grey;
            }
            .van-icon{
              left: 0vw;
            }
          }
        }
      }
    }
  }

  .list-cinemas{
    width: 100%;
    min-height: 100vw;
    margin-top: 25vw;
    li{
      width: 100%;
      height: 20vw;
      border-bottom: 0.1vw solid gainsboro;
      position: relative;
      .cinema-info{
        width: 70%;
        height: 15vw;
        position: absolute;
        top: 5vw;
        left: 2vw;
        span{
          display: block;
          max-width: 85%;
          overflow: hidden;
          -o-text-overflow: ellipsis;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .cinema-address{
          font-size: 12px;
          color: grey;
        }
      }
      .cinema-price{
        width: 30%;
        height: 15vw;
        position: absolute;
        right: 0vw;
        top:5vw;
        p{
          color: #ff5f16;
          font-size: 11px;
          display: inline;
          position: absolute;
          right: 5vw;
          span{
            font-size: 15px;
          }
        }
        .distance{
          color: grey;
          font-size: 12px;
          position: absolute;
          right: 5vw;
          top: 6vw;
        }
      }
    }
  }
</style>
