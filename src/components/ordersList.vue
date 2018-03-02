<template>
  <div id="orders">
    <yd-navbar title="隆饰板材订单系统" bgcolor="#1D2838" color="#fff">
      <router-link to="/home" slot="left">
        <yd-navbar-back-icon color="#FFF">返回</yd-navbar-back-icon>
      </router-link>
    </yd-navbar>
    <div class="orderTable">
      <button-tab v-model="tabValue">
        <button-tab-item selected>正在进行中订单</button-tab-item>
        <button-tab-item @on-item-click="consoleIndex()">已完成订单</button-tab-item>
      </button-tab>
    </div>
    <div class="orderTableContent">
      <div v-show="tabValue==0">


        <yd-cell-item arrow type="label" v-for="item,index in unCompleteList" :key="item.num"
                      @click.native="showDetail(item.num)">
          <span slot="left" class="left">订单号：{{item.num}}</span>
          <span slot="right" class="right">{{item.name}}</span>
        </yd-cell-item>
        <div v-if="unCompleteList.length==0" style="text-align: center;padding: 10px">
          您没有订单
        </div>
      </div>
      <div v-show="tabValue==1">
        <yd-cell-item arrow type="label" v-for="item,index in completeList" :key="item.num"
                      @click.native="showDetail(item.num)">
          <span slot="left">订单号：{{item.num}}</span>
        </yd-cell-item>
        <div v-if="completeList.length==0" style="text-align: center;padding: 10px">
          您没有已完成的订单
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "orders-list",
    data() {
      return {
        tabValue: 0,
        unCompleteList: [],
        completeList: []
      }
    },
    methods: {
      goback() {
        this.$router.go(-2)
      },
      consoleIndex() {

      },
      showDetail(num) {
        console.log(num)
        this.$router.push({path:"/orderDetail/"+num})
      },
      initData() {
        this.$store.dispatch("getAllOrderList").then((data) => {
          data.completeList.forEach((item) => {
            this.completeList.push({
              num: item.orderNum,
              name:item.name
            })
          })
          data.unCompleteList.forEach((item) => {
            this.unCompleteList.push({
              num: item.orderNum,
              name:item.name
            })
          })
        })
      }
    },
    created: function () {
      this.$nextTick(() => {
        this.initData();
      })
    }
  }
</script>

<style type="text/scss" lang="scss" scoped>
  @import "../assets/css/fonction.scss";

  #orders {
    .orderTable {
      padding: rem(30) rem(15);
      border-bottom: 1px solid #d9d9d9;
    }
    .orderTableContent {
      border-bottom: 1px solid #d9d9d9;
      background: #ffffff;
    }

    .yd-cell-box {
      margin-bottom: 0;
    }
    .right,.left{
      font-size: rem(13);
    }
    .right{
      text-align: right;
    }
  }

  .vux-button-group > a.vux-button-group-current {
    color: #fff;
    background: #3372CC;
  }

  .vux-button-group > a.vux-button-tab-item-last:after {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    width: 200%;
    height: 1px;
    border-right: 1px solid #3372CC;
    border-top: 1px solid #3372CC;
    border-bottom: 1px solid #3372CC;
    border-left: none;
    color: #3372CC;
    height: 200%;
    -webkit-transform-origin: left top;
    transform-origin: left top;
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    z-index: 1;
    border-top-right-radius: rem(32);
    border-bottom-right-radius: rem(32);
  }

  .vux-button-group > a.vux-button-tab-item-first:after {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    width: 200%;
    height: 1px;
    border: 1px solid #3372CC;
    color: #3372CC;
    height: 200%;
    -webkit-transform-origin: left top;
    transform-origin: left top;
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    border-top-left-radius: rem(32);
    border-bottom-left-radius: rem(32);
  }

  .vux-button-group > a {
    display: block;
    position: relative;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    width: 100%;
    height: rem(30);
    padding: 0;
    font-size: rem(13);
    line-height: rem(31);
    text-align: center;
    color: #3372CC;
    white-space: nowrap;
    background: #fdfdfd;
    -webkit-tap-highlight-color: rgba(255, 0, 0, 0);
  }
</style>
