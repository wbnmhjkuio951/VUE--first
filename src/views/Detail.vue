<template>
  <!--动态路由this.$route.params.xxx -->
  <!--<div>这是一个详情页,名字为{{this.$route.params.id}}</div>-->

  <de-header></de-header>
</template>

<script>
  import deHeader from '././details/Header'
  export default {

    components:{
      deHeader,
    },
    }
</script>

<style lang="less">

</style>
