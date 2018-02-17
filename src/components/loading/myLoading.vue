<template>
  <div id="myloading">
    <yd-navbar title="生物认证" bgcolor="#1D2838" color="#fff">
      <!--<router-link to="/" slot="left">-->
      <!--<yd-navbar-back-icon>返回</yd-navbar-back-icon>-->
      <!--</router-link>-->
    </yd-navbar>
    <div id="up" v-if="loadType=='up'">
      <img class=" cImg bounce animated infinite" src="../../assets/img/show4.png" alt="" >
      <div class="introduce">后台处理中…请稍后…</div>
    </div>
    <div id="check" v-if="loadType=='check'">
      <img  class=" cImg bounce animated infinite" src="../../assets/img/show3.png" alt="" >
      <div class="introduce">身份验证中…请稍后…</div>
    </div>
    <!--<div id="logo">-->
      <!--<img src="../../assets/img/logo.png" alt="">-->
    <!--</div>-->
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue';
  import {NavBar, NavBarBackIcon, NavBarNextIcon} from 'vue-ydui/dist/lib.rem/navbar';
  /* 使用px：import {NavBar, NavBarBackIcon, NavBarNextIcon} from 'vue-ydui/dist/lib.px/navbar'; */

  Vue.component(NavBar.name, NavBar);
  Vue.component(NavBarBackIcon.name, NavBarBackIcon);
  Vue.component(NavBarNextIcon.name, NavBarNextIcon);
  export default {
    props: {
      loadType: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/scss" lang="scss">
  @import "../../assets/css/fonction";

  #myloading {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    background: #f5f5f5;
    z-index: 3000;

    padding-bottom: rem(75);
    /*background-image: url("../../assets/img/logo.png");*/
    background-size: rem(100);
    background-repeat: no-repeat;
    background-position: 50% 97%;

    .cImg {
      width: rem(280);
      height: rem(220);
      display: block;
      margin: auto;
      margin-top: rem(74);
    }
    .introduce {
      text-align: center;
      font-size: rem(15);
      color: #333333;
      letter-spacing: -0.36px;
      margin-top: rem(17);
    }
  }


</style>
