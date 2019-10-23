<template>
  <div class="comingsoon">
    <button><router-link to="/movie/HotMovie">返回首页</router-link></button>
    <div>这是即将上映的电影</div>
    <button @click="addnum(10)">添加数据</button>
    <button @click="reducenum(5)">减少数据</button>
    <button @click="Tadd(5)">延时添加</button>
    <div>这是一个数字：{{$store.state.num}}</div>
    <hr>
    <p>{{name}}：{{Info}}</p>

  </div>
</template>

<script>

  // mapState是一个方法可以简便获取store中的state
  // mapGetters是一个方法可以简便获取store中的getters
  import {mapState,mapGetters} from 'vuex'


    export default {
    computed:{
      ...mapState(['name']),
        ...mapGetters(['Info'])
    },
       methods:{
         addnum(val){
           this.$store.commit('addnum',val)
         },
         reducenum(val){
           this.$store.commit('reducenum',val)
         },
         Tadd(val){
           this.$store.dispatch('Tadd',val)
         }
       }
    }
</script>

<style lang="less">
  .comingsoon {
    position: absolute;
    top: 60vw;
    button {
      margin-top: 20px;
    }
  }
</style>
