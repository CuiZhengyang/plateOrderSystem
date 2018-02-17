<template>
  <div id="color">
    <yd-navbar title="颜色展示" bgcolor="#1D2838" color="#fff">
      <router-link to="#" slot="left" @click.native="goback">
        <yd-navbar-back-icon color="#FFF">返回</yd-navbar-back-icon>
      </router-link>
    </yd-navbar>
    <div id="home-content">

      <div class="home-item bg1">
        <span>莫克布纹</span>
      </div>
      <div class="home-item bg2">
        <span>美瑞橡木</span>
      </div>
      <div class="home-item bg3">
        <span>锯齿橡木</span>
      </div>
      <div class="home-item bg4">
        <span>金碧辉煌</span>
      </div>
      <div class="home-item bg5">
        <span>江山如画</span>
      </div>
      <div class="home-item bg6">
        <span>沉香</span>
      </div>
      <div class="home-item bg7">
        <span>白玉兰</span>
      </div>
      <div class="home-item bg8">
        <span>傲雪凌峰</span>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "colors",
    methods: {
      goback() {
        this.$router.go(-2)
      }
    }
  }
</script>

<style type="text/scss" lang="scss" scoped>
  @import "../assets/css/fonction.scss";

  #home-content {
    padding: 0 rem(30);
    display: flex;
    margin-top: rem(15);
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    .home-item {
      flex: 0 0 rem(150);
      height: rem(120);

      margin: rem(15) 0 0 0;
      border-radius: rem(12);
      background-size: cover;

      span {
        margin-top: rem(48);
        display: block;
        font-size: 18px;
        color: #000;
        letter-spacing: -0.43px;
        text-align: center;
      }
    }
    .bg1{
      background-image: url("../assets/img/color/mokebuwen.jpg");
    }

    .bg2{
      background-image: url("../assets/img/color/meiruixiangmu.jpg");
    }
    .bg3{
      background-image: url("../assets/img/color/juchixiangmu.jpg");
    }
    .bg4{
      background-image: url("../assets/img/color/jinbihuihuang.jpg");
    }
    .bg5{
      background-image: url("../assets/img/color/jiangshanruhua.jpg");
    }
    .bg6{
      background-image: url("../assets/img/color/chenxiang.jpg");
    }
    .bg7{
      background-image: url("../assets/img/color/baiyulan.jpg");
    }
    .bg8{
      background-image: url("../assets/img/color/aoxuelingfeng.jpg");
    }
  }

</style>
