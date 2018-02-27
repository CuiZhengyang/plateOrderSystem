<template>
  <div id="checkOrder">
    <yd-navbar title="隆饰板材订单系统" bgcolor="#1D2838" color="#fff">
      <router-link to="#" slot="left" @click.native="goback">
        <yd-navbar-back-icon color="#FFF">返回</yd-navbar-back-icon>
      </router-link>
    </yd-navbar>
    <div id="step">
      <yd-step current="2" currentColor="#3372CC">
        <yd-step-item>
          <span slot="bottom">添加商品</span>
        </yd-step-item>
        <yd-step-item>
          <span slot="bottom">检查订单</span>
        </yd-step-item>
        <yd-step-item>
          <span slot="bottom">订单结果</span>
        </yd-step-item>
      </yd-step>

    </div>
    <div id="form">
      <yd-cell-group>
        <yd-cell-item>
          <span slot="left">用户名：</span>
          <yd-input slot="right" required v-model="name" max="20" placeholder="请输入用户名"
                    :show-clear-icon="true"
                    :show-error-icon="false"
                    :show-success-icon="false"
                    :show-required-icon="false"
          ></yd-input>
        </yd-cell-item>

        <yd-cell-item>
          <span slot="left">电话：</span>
          <yd-input slot="right" required regex="mobile" v-model="mobile" placeholder="请输入电话"
                    :show-clear-icon="true"
                    :show-error-icon="false"
                    :show-success-icon="false"
                    :show-required-icon="false"
          ></yd-input>
        </yd-cell-item>


        <yd-cell-item>
          <span slot="left">省份：</span>
          <yd-input slot="right" required v-model="province" placeholder="请输入您所在的省份"
                    :show-clear-icon="true"
                    :show-error-icon="false"
                    :show-success-icon="false"
                    :show-required-icon="false"
          ></yd-input>
        </yd-cell-item>

        <yd-cell-item>
          <span slot="left">城市：</span>
          <yd-input slot="right" required v-model="city" placeholder="请输入您所在的城市"
                    :show-clear-icon="true"
                    :show-error-icon="false"
                    :show-success-icon="false"
                    :show-required-icon="false"
          ></yd-input>
        </yd-cell-item>

        <yd-cell-item>
          <span slot="left">详细地址：</span>
          <yd-input slot="right" required v-model="addr" placeholder="请输入您所在的详细地址"
                    :show-clear-icon="true"
                    :show-error-icon="false"
                    :show-success-icon="false"
                    :show-required-icon="false"
          ></yd-input>
        </yd-cell-item>
        <yd-cell-item id="special">
          <span slot="left">商品列表：</span>
        </yd-cell-item>
        <div id="showPanel">
          <yd-list slot="right" theme="4" id="board">
            <swipeout v-for="item, key in list" :key="key">
              <swipeout-item @on-close="handleEvents('on-close')" @on-open="handleEvents('on-open')"
                             transition-mode="follow">
                <div slot="right-menu">
                  <!--<swipeout-button @click.native="onButtonClick('fav')" type="primary">aaaa</swipeout-button>-->
                  <swipeout-button @click.native="onButtonClick(key)" type="warn">删除</swipeout-button>
                </div>
                <div slot="content" class="demo-content vux-1px-t">
                  <yd-list-item>
                    <!--<img slot="img" :src="item.img">-->
                    <span slot="title">{{item.product}}</span>
                    <yd-list-other slot="other">
                      <div>
                        <span class="demo-list-price">{{item.metal}}</span>
                        <span class="demo-list-price">--</span>
                        <span class="demo-list-del-price">{{item.color}}</span>
                      </div>
                      <div>
                        <yd-spinner unit="1" width="3rem" v-model="item.count"></yd-spinner>
                      </div>
                    </yd-list-other>
                  </yd-list-item>
                </div>
              </swipeout-item>
            </swipeout>
          </yd-list>
        </div>

        <yd-cell-group title="备注" id="beizhu">
          <yd-cell-item>
            <yd-textarea slot="right" placeholder="请留言" v-model="remarks" maxlength="100"></yd-textarea>
          </yd-cell-item>
        </yd-cell-group>

      </yd-cell-group>


    </div>
    <div class="nextBtn stepBtn">
      <yd-button size="large" bgcolor="#3372CC" color="#FFF" @click.native="handleClick">下一步</yd-button>
    </div>
  </div>
</template>

<script>
  import myLoading from "./loading/myLoading"
  export default {
    name: "check-order",
    data() {
      return {
        remarks:'',
        list: [
          {
            product: "标题111标题标题标题标题",
            metal: 156.23,
            color: 89.36,
            count: 80
          },
          {
            product: "标题222标题标题标题标题",
            metal: 156.23,
            color: 89.36,
            count: 50
          },
          {
            product: "标题333标题标题标题标题",
            metal: 156.23,
            color: 89.36,
            count: 40
          },
          {
            product: "标题444标题标题标题标题",
            metal: 156.23,
            color: 89.36,
            count: 60
          }
        ]
      }
    },
    methods: {
      goback() {
        this.$router.go(-2)
      },
      onButtonClick(index) {
        this.list.splice(index, 1)
      },
      handleEvents(type) {
        console.log('event: ', type)
      },
      handleClick() {
        myLoading.open("up")
        setTimeout(function () {
          myLoading.close("up")
        },3000)
      }
    },
    computed:{
      name: function () {
        return this.$store.state.name;
      },
      mobile: function () {
        return this.$store.state.tel;
      },
      province: function () {
        return this.$store.state.province;
      },
      city: function () {
        return this.$store.state.city;
      },
      addr: function () {
        return this.$store.state.detailAddr;
      },
    }
  }
</script>

<style type="text/scss" lang="scss" scoped>
  @import "../assets/css/fonction.scss";

  #step {
    margin-top: rem(30);
  }

  #form {
    margin-top: rem(30);
    border-bottom: 1px solid #d9d9d9;
    border-top: 1px solid #d9d9d9;

    .yd-cell-box {
      margin-bottom: 0;
    }
  }

  #special.yd-cell-item:after {
    border-bottom: 0;
  }


  #checkOrder {
    padding-bottom: rem(90);
  }

  #showPanel {
    padding-left: rem(20);

  }

  /*.vux-swipeout {*/
  /*border-bottom: 1px solid #c9c9c9;*/
  /*}*/
  .vux-swipeout{
    position: relative;
  }
  .vux-swipeout:not(:last-child):after {
    content: "";
    position: absolute;
    z-index: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    border-bottom: 1px solid #d9d9d9;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
  }


</style>
