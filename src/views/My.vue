<template>
    <div class="My">
      <div class="he-img">
        <img src="https://assets.maizuo.com/h5/v5/public/app/img/bg.6837f67.png" alt="">
        <div class="login-info">

        </div>
        <a href="javascript:;">立即登录</a>
      </div>
      <!--订单-->
      <div class="order">
        <ul class="order-ul">
          <li>
            <van-icon name="video-o"  size="8vw" color="orange"/>
            <p>电影订单</p>
          </li>
          <li>
            <van-icon name="label-o"  size="8vw" color="green"/>
            <p>商品订单</p>
          </li>
        </ul>
      </div>
      <!--列表-->
      <div class="list">
        <ul class="list-ul">
          <li>
            <van-icon name="debit-pay"  size="6vw" color="orange"/>
            <span>卖座券</span>
            <van-icon name="arrow"  size="4vw" color="gainsboro" class="arrow"/>
          </li>
          <li>
            <van-icon name="bill-o"  size="6vw" color="orange"/>
            <span>组合红包</span>
            <van-icon name="arrow"  size="4vw" color="gainsboro" class="arrow"/>
          </li>
          <li>
            <van-icon name="balance-o"  size="6vw" color="orange"/>
            <span>余额</span>
            <van-icon name="arrow"  size="4vw" color="gainsboro" class="arrow"/>
          </li>
          <li style="border: none">
            <van-icon name="setting-o"  size="6vw" color="orange"/>
            <span>设置</span>
            <van-icon name="arrow"  size="4vw" color="gainsboro" class="arrow"/>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "My"
    }
</script>

<style lang="less">
  a{text-decoration: none;color: #ffffff}
  .My{min-height: 170vw;background-color: #f4f4f4;}
.he-img{
  width: 100%;
  position: relative;
  img{
    width: 100%;
    height: 40vw;
  }
  .login-info{
    width: 18vw;
    height: 18vw;
    background-color: #ffffff;
    position: absolute;
    top: 13vw;
    left: 10vw;
    border-radius: 50%;
  }
  a{
    position: absolute;
    top: 20vw;
    left: 32vw;
    color: #ffffff;
  }
}
  .order{
    width: 100%;
    height: 20vw;
    background-color: #ffffff;
    overflow: hidden;
    .order-ul{
      width: 65vw;
      height: 16vw;
      margin: 2vw auto;
      display: flex;
      justify-content: space-between;
    }
    li{
      width: 20vw;
      height: 16vw;
      .van-icon{
        margin-left: 6vw;
      }
      p{
        text-align: center;
        color: grey;
        font-size: 14px;
      }
    }
  }
  .list{
    width: 100%;
    height: 56vw;
    background-color: #ffffff;
    margin-top: 3vw;
    .list-ul{
      width: 97%;
      height: 56vw;
      float: right;

      li{
        width: 100%;
        height: 14vw;
        border-bottom: 0.1vw solid gainsboro;
        position: relative;
        .van-icon{
          position: absolute;
          left: 0vw;
          top: 4vw;
        }
        span{
          position: absolute;
          left: 11vw;
          top: 4.3vw;
        }
        .arrow{
          margin: 2vw 0 0 90vw  ;
        }
      }
    }
  }
</style>
