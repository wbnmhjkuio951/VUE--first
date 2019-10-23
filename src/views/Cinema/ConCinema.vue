<template>
  <div>
    <div class="film-head">
      {{con[com].name}} <span> {{con[com].grade}}分</span>
    </div>
    <div class="film-desc">
      {{con[com].category}} | {{con[com].runtime}} | {{con[com].director}}
    </div>
  </div>
</template>

<script>

    export default {
        props:[
          'con',
          'com'
        ],
      created(){

      },
      methods:{

      }
    }
</script>

<style scoped lang="less">
  .film-head{
    width: 100%;
    height: 7vw;
    position: relative;
    top: 2vw;
    text-align: center;
    line-height: 7vw;
  span{
    color:#ffb232;
    margin-left: 2vw;
  }
  }
  .film-desc{
    width: 100%;
    height: 5vw;
    margin-top: 3vw;
    text-align: center;
    font-size: 14px;
    color: grey;
    border-bottom: 0.1vw gainsboro;
  }
  .van-sticky{
    background-color: #ffffff;
  }
</style>
