<template>
  <div>
    <ul class="list-ul" >
      <li v-for="(item,index) in Timelist" >
        <div class="showAt">{{item.showAt|getPremiereAo('hms')}}</div>
        <div class="endAt">{{item.endAt|getPremiereAo('hms')}} 散场</div>
        <div class="threed">{{item.filmLanguage}} {{item.imagery}}</div>
        <div class="hall">{{item.hallName}}</div>
        <div class="sale">￥{{item.salePrice/100}}</div>
        <div class="buy"><span>购票</span></div>
      </li>
    </ul>
  </div>
</template>

<script>
  import { getCinemaInfo } from '../Api/api'
    export default {
    data(){
      return{
        Timelist:[],
        TimeNum:{
          cinemaId:this.$route.params.id,
           idd:this.data
        },
      }
    },
      watch:{
        'data':{
          handler(val){
            //console.log(val)
            this.TimeNum.idd=val
            this.getTime()
          }
        }
      },
        props:[
          'data'
        ],
      created() {
          this.getTime()
      },
      methods:{
        getTime(){
          //console.log(1)
          let query=this.TimeNum
          getCinemaInfo(query).then(result=>{
            //console.log(result.data.schedules)
            this.Timelist=result.data.schedules
          })
        },
      }
    }
</script>

<style scoped lang="less">
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
    width: 40%;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
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
