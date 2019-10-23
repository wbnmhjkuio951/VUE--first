<template>
    <div class="he">
      <van-sticky class="addvan" :offset-top="-45">
       <div class="header-title">
         {{list.name}}
       </div>
        </van-sticky>

      <div class="tags">
           <ul class="tags-ul">
             <li v-for="(item,index) in list.services">
               <span>{{item.name}}</span>
             </li>
           </ul>
      </div>
      <div class="cin-address">
        <van-icon name="location-o" size="6vw" />
        <div class="address-des">
          {{list.address}}
        </div>
        <div class="van2">
        <van-icon name="phone-o" size="6vw" />
        </div>
      </div>
    </div>
</template>

<script>
  import { getToDes } from '../Api/api'
    export default {
      data(){
        return{
          list:[],
          num:{
            cinemaId:this.$route.params.id
          },
        }
      },
        created() {
        this.getDes()
        },
      methods:{
         getDes(){
           let query=this.num;
           getToDes(query).then(result=>{
             console.log(result)
             this.list=result.data.cinema
           })
         }
      }
    }
</script>

<style scoped lang="less" >
.he{
  width: 100%;
  height: 40vw;
  overflow: hidden;
  position: relative;
  .header-title{
    width: 100%;
    height: 10vw;
    margin: 10vw auto;
    text-align: center;
    line-height: 11vw;
    background-color: #ffffff;
    font-size: 17px;
    z-index: 1000;
  }
  .tags{
    min-width: 80%;
    height: 5vw;
    margin: 0 auto;
      .tags-ul{
        min-width: 80vw;
        height: 5vw;
        margin-top: -10vw;
        display: flex;
          li {
            font-size: 10px;
            color: #ffb232;
            margin: 0 auto;
            span {
              border: 0.1vw solid;
              padding: 0vw 1vw 0vw 1vw;
            }
        }
      }
  }
  .cin-address{
    width: 90%;
    height: 10vw;
    position: absolute;
    bottom: 0vw;
    left: 5vw;
    .van-icon{
      left: 0vw;
      top: 2vw;
    }
    .address-des{
      width: 75%;
      position: absolute;
      top: 2.8vw;
      left: 7vw;
      overflow: hidden;
      -o-text-overflow: ellipsis;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 14px;
    }
    .van2{
      position: absolute;
      top: 0vw;
       right: 2vw;
    }
  }
}
.van-sticky--fixed{
    top:-10vw;
}
</style>
