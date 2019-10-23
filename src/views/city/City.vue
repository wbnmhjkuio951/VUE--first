<template>
  <div class="zzz">
    <div class="he-se">
      <div class="header" >
        <span>当前城市-{{$store.state.cityName}}</span>
      </div>
      <div class="serach">
        <input type="text" placeholder="请输入城市名或拼音">
      </div>
    </div>
    <div class="add">
      <span>GPS定位你所在城市</span>
      <div class="add-a" @click="selectCity2($store.state.cityId,$store.state.cityName)">{{$store.state.cityName}}</div>
      <div class="hotcity">
        <span>热门城市</span>
        <ul class="city-index-detail">
          <li v-for="(item) in cityList" v-if="item.isHot==1" @click="selectCity2(item.cityId,item.name)">
            {{item.name}}
          </li>
        </ul>
      </div>
    </div>
    <hh-location @changeCity="selectCity" v-show="false"></hh-location>
    <hh-index-bar @changeCity="selectCity2" v-if="cityList.length" :indexes="indexes" :dataList="cityData"></hh-index-bar>
  </div>
</template>
<script>
  import HhLocation from '../../components/Location'
  import HhIndexBar  from './IndexBar'
  import {setCityId,setCityName} from '../Utils/local-data'
  import { getCityList } from '../Api/api'
  import { mapMutations } from 'vuex'
  export default {
    data(){
      return {
        cityList:[],
        HotCity:[],
        gpsCityName:'', // 定位城市名称
        gpsCityId:'',
        indexes:[], //存储的是所有城市拼音的首字母
        localCity:this.$store.state.cityName,
        localId:this.$store.state.cityId
      }
    },
    computed:{
      cityData(){
        // {A:[{}],B:[{}]}
        let result = {}  // 存储所有城市，是按城市的拼音首字母分类
        this.cityList.forEach(element => {
          let key = element.pinyin.charAt(0).toUpperCase()
          if(!result[key]){
            result[key] = []
            this.indexes.push(key)
          }
          result[key].push(element)
        });
        this.indexes.sort()
        //console.log(this.indexes)
        return result
      }
    },
    components:{
      HhLocation,
      HhIndexBar
    },
    created(){
      this.getCityData()
    },
    methods:{
      ...mapMutations(['setCityId','setCityName']),
      selectCity(name){
        // 根据当前城市名称获取相应的城市id
        // 将城市id以及名称存放在localStorage中和vuex中
        console.log('父组件拿到的城市....',name)
        this.gpsCityName = name
        this.getCityIdByName()
        this.setCity(this.gpsCityId,this.gpsCityName)
      },
      getCityData(){
        getCityList().then(result=>{
            this.cityList = result.data.cities
            //console.log(result.data.cities)
        })
      },
      getCityIdByName(){
        for(let i=0;i<this.cityList.length;i++){
          if(this.cityList[i].name == this.gpsCityName){
            this.gpsCityId = this.cityList[i].cityId
            break;
          }
        }
        //console.log(this.gpsCityId,this.gpsCityName)
      },
      // 存储当前城市的id以及名称
      setCity(id,name){
        //console.log('存储当前城市信息....')
        setCityId(id)
        setCityName(name)
        this.setCityId(id)
        this.setCityName(name)
      },
      selectCity2(id,name){
        this.setCity(id,name)
        this.$router.push('/movie/Hotmovie')
      }
    }
  }
</script>

<style lang="less" scoped>
  .zzz{
    background-color: #f4f4f4;
    width: 100%;
    min-height: 100vw;
  }
  .he-se{
    width: 100%;
    height: 20vw;

  }
  .header{
    width: 100%;
    height: 10vw;
    background-color: #ffffff;
    font-size: 18px;
    text-align: center;
    line-height: 10vw;
    position: fixed;
    z-index: 1000;
    top: 0vw;
  }
  .serach{
    width: 100%;
    height: 13vw;
    background-color: #f4f4f4;
    top: 10vw;
    z-index: 1000;
    position: fixed;
    input{
      border: none;
      display: block;
      width: 90%;
      height:8vw;
      margin: 2vw auto;
      font-size: 12px;
      color: grey;
    }
  }

  .add{
    width: 100%;
    height: 50vw;
    background-color: #ffffff;
    margin-top: 2vw;
    position: relative;
    span{
      font-size: 13px;
      color: grey;
      position: absolute;
      top: 3vw;
      left: 3vw;
    }
    .add-a{
      width: 26vw;
      height: 7vw;
      background-color: #f4f4f4;
      position: absolute;
      top: 10vw;
      left: 3vw;
      text-align: center;
      line-height: 7vw;
    }
    .hotcity{
      span{
        font-size: 13px;
        color: grey;
        position: absolute;
        top: 20vw;
        left: 3vw;
      }
      .city-index-detail{
        width: 96%;
        height: 20vw;
        position: absolute;
        top: 27vw;
        left: 4vw;
        display: flex;
        flex-wrap: wrap;
        li{
          width: 26vw;
          height: 7vw;
          background-color: #f4f4f4;
          text-align: center;
          line-height: 7vw;
          margin-right: 6vw;
        }
      }
    }
  }
</style>
