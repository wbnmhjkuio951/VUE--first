<template>
  <div id="app">

   <router-view></router-view>
    <jj-nav v-show="isshow"></jj-nav>

  </div>
</template>

<script>
  import jjNav from  './views/Nav'
  export default{
    data(){
      return{

      }
    },
    components:{
      jjNav
    },
    watch:{
      $route:{
        handler(newVal){
          //console.log(1)
          if (newVal.meta&&newVal.meta.show ){
            this.isshow=true
          }else {
            this.isshow=false
          }
        },
        immediate:true,
        deep:true,
      }
    },
  }
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
