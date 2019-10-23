<template>
  <ul class="nav-bar">
    <li>
      <router-link exact to="/movie/HotMovie">
        <van-icon name="star-o" size="20px"/>
        <span>电影</span>
      </router-link>
    </li>
    <li>
      <router-link to="/About">
        <van-icon name="star-o" size="20px"/>
        <span>影院</span>
      </router-link>
    </li>
    <li>
      <router-link to="/MovieInfo">
        <van-icon name="star-o" size="20px"/>
        <span>资讯</span>
      </router-link>
    </li>
    <li>
      <router-link to="/My">
        <van-icon name="star-o" size="20px"/>
        <span>我的</span>
      </router-link>
    </li>
  </ul>
</template>
<script>
  export default {};
</script>
<style scoped>
  .nav-bar {
    height: 11vw;
    position: fixed;
    bottom: 0;
    padding-top: 2vw;
    width: 100%;
    z-index: 100;
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 0.2rem;
    background-color: #fff;
  }
  .nav-bar:before {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 1px;
    border-top: 1px solid #ededed;
    color: #ededed;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }
  .nav-bar li {
    flex: 1;
    text-align: center;
    height: 0.98rem;
  }
  .nav-bar a {
    color: #797d82;
    display: block;
    height: 0.98rem;
    line-height: 0.56rem;
    width: 100%;
    position: relative;
    padding-top: 0.08rem;
    box-sizing: border-box;
  }
  .nav-bar img {
    width: 5vw;
    height: 5vw;
  }
  .nav-bar span {
    position: absolute;
    top: 7vw;
    left: 50%;
    transform: translateX(-50%);
  }
.nav-bar .router-link-active{
  color:#ff5f16
}
</style>
