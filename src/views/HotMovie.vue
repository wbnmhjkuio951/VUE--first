<template>
    <div class="hotmovie">
        <van-list v-model="loading" :finished="finished"   @load="onLoad">
       <ul class="MovieList">
         <li v-for="(item) in list" :key="item.filmId" @click="Todetail(item.filmId)">
           <img :src="item.poster" alt="" >
            <div class="listinfo">
              <!--电影名字-->
              <div class="movieName">
                <p>{{item.name}}</p>
              </div>
              <!--电影评分-->
              <div class="movieGrade">
                <p>观众评分: <span>{{item.grade}}</span></p>
              </div>
              <!--主演-->
              <div class="actor">
                主演:<span>这是主演</span>
              </div>
              <!--国家-->
              <div class="nation">
                <span>{{item.nation}} | {{item.runtime}}</span>
              </div>
              <!--购票-->
              <div class="buycost">
                <button>购票</button>
              </div>
            </div>
         </li>
       </ul>
        </van-list>
    </div>
</template>

<script>
  import {getList} from  './Api/api'
    export default {
      data() {
        return {
          list: [],
          loading: false,
          finished: false,
          pageInfo:{
            pageNum:0,
            pageSize:10,
            type:1,
          }
        }
      },
      created() {
      },
      methods: {
        Todetail(id){
            this.$router.push({
                name:'Detail',
                params:{
                  id:id
                }
          })
        },
        onLoad() {
          this.pageInfo.pageNum++
          //console.log(this.pageInfo.pageNum)
          let query= this.pageInfo
          getList(query).then(result => {
            if(result.status==0){
              this.loading=false;
              //console.log(result.data.films[0].poster)
              this.list=this.list.concat(result.data.films)
            }
            if (this.list.length >= result.data.total) {
              //console.log('加载完毕')
              this.finished = true;
            }
          })
          //console.log(this.list.length)
        },
      }
    }
</script>

<style lang="less">
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
  .MovieList{
    width: 100%;
    min-height: 93.3vw;
    list-style: none;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    position: absolute;
    top: 60vw;
    margin-bottom: 10vw;
    li{
      width: 100%;
      height: 36vw;
      border-bottom: 0.1vw solid gainsboro;
      background-color: #ffffff;
      img{
        width: 23vw;
        height: 26.7vw;
        position: absolute;
        left: 5vw;
        margin-top: 5vw;
      }
      .movieName {
        p {
          display: block;
          position: absolute;
          left: 30vw;
          margin-top: 5vw;
        }
      }
      .movieGrade{
        p{
          display: block;
          position: absolute;
          left: 30vw;
          margin-top: 11vw;
          color: gray;
        }
        span{
          color: #ff4d51;
        }
      }
      .actor{
        display: block;
        position: absolute;
        left: 30vw;
        margin-top: 17vw;
        color: gray;
      }
      .nation{
        display: block;
        position: absolute;
        left: 30vw;
        margin-top: 23vw;
        color: gray;
      }
      .buycost{
        button{
          width: 12vw;
          height: 7vw;
          color: #ff5f16;
          background-color: #ffffff;
          border: 1px solid #ff5f16;
          position: absolute;
          left: 85vw;
          margin-top: 13vw;
        }
      }
    }
  }
  .hotmovie{
    min-height: 100vw;
    background-color: #f4f4f4;
  }
  .listinfo{
    margin-top: 2vw;
  }
</style>
