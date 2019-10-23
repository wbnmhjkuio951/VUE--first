<template>
    <div>
      <ul>
        <li v-for="(item) in list" v-if="item.isHot==1">
         {{item.name}}
        </li>
      </ul>
    </div>
</template>

<script>
  import { getCityList } from './Api/api'
    export default {
    data(){
      return{
        list:[]
      }
    },
        created() {
          this.getCityData()
        },
      methods:{
        getCityData(){
          getCityList().then(result=>{
            //this.cityList = result.data.cities
            console.log(result.data.cities)
            this.list=result.data.cities
          })
        },
      }
    }
</script>

<style scoped>

</style>
