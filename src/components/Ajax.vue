<template>
    <button @click="getData()">获取数据</button>
</template>

<script>
  import axios from  'axios'
    export default {
        methods:{
          getData(){
            axios.post('/api',{
              arr:1
            })
              .then(res=>{
                console.log(res)
              })
              .catch(err=>{
                console.log(err)
              })
          }
        }
    }
</script>

<style scoped>

</style>
