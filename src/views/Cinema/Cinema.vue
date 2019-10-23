<template>
   <div>
     <he-cinema></he-cinema>
     <be-cinema ></be-cinema>
     <time-cinema></time-cinema>
   </div>
</template>

<script>
  import HeCinema from './HeCinema'
  import BeCinema from './BeCinema'
  import TimeCinema from './TimeCinema'
    export default {
       components:{
         HeCinema,
         BeCinema,
         TimeCinema
       },
       methods:{
         /*getin(e){
           console.log(e)
         }*/
       }
    }
</script>

<style lang="less">

</style>
