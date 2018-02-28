<template>
  <div id="home">
    <yd-navbar title="隆饰板材订单系统" bgcolor="#1D2838" color="#fff">
      <router-link to="#" slot="right">
        <yd-icon name="ucenter-outline" color="#fff" @click.native="popupVisible = true"></yd-icon>
      </router-link>
    </yd-navbar>
    <div id="home-content">
      <div class="home-item bg1">
        <router-link to="/board">
          <i class="icon item1"></i>
          <span>板材订单</span>
        </router-link>
      </div>
      <div class="home-item bg2">
        <router-link to="/commodity">
          <i class="icon item2"></i>
          <span>五金订单</span>
        </router-link>
      </div>
      <div class="home-item bg3">
        <router-link to="/color">
          <i class="icon item3"></i>
          <span>产品花色展示</span>
        </router-link>
      </div>
      <div class="home-item bg4">
        <router-link to="/stockCheck">
          <i class="icon item4"></i>
          <span>库存查询系统</span>
        </router-link>
      </div>
      <div class="home-item bg5">
        <router-link to="/ordersList">
          <i class="icon item5"></i>
          <span>订单管理系统</span>
        </router-link>
      </div>
    </div>

    <yd-actionsheet :items="operates" v-model="popupVisible" cancel="取消"></yd-actionsheet>
  </div>

</template>

<script>
  export default {
    name: "homepage",
    data: function () {
      return {
        popupVisible: false,
        operates: [
          {
            label: '退出程序',
            callback: () => {
              this.$router.push({path: "/"});
            }
          },

        ],
      }
    }
  }
</script>

<style type="text/scss" lang="scss" scoped>
  @import "../assets/css/fonction.scss";

  #home {
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

        a {
          display: block;
          height: 100%;

          .icon {
            display: block;
            margin: auto;
            width: rem(56);
            height: rem(56);
            margin-top: rem(15);
            background-size: cover;
          }

          .item1 {
            background-image: url("../assets/img/01.png");
          }

          .item2 {
            background-image: url("../assets/img/02.png");
          }
          .item3 {
            background-image: url("../assets/img/03.png");
          }
          .item4 {
            background-image: url("../assets/img/04.png");
          }
          .item5 {
            background-image: url("../assets/img/05.png");
          }

          span {
            margin-top: rem(15);
            display: block;
            text-align: center;
            font-size: rem(18);
            color: #FFFFFF;
            letter-spacing: -0.43px;
          }
        }
      }

      .bg1 {
        background: #42A5F5;
      }

      .bg2 {
        background: #4ED0E1;
      }
      .bg3 {
        background: #66BA6A;
      }
      .bg4 {
        background: #EF5350;
      }
      .bg5 {
        background: #FFA726;
      }
    }

  }
</style>
