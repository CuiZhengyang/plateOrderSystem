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
import  config from "../config/config"
  export default {
    name: "check-order",
    data() {
      return {
        remarks: '',
      }
    },
    methods: {
      goback() {
        this.$router.go(-2)
      },
      onButtonClick(index) {
        this.$store.commit("delBoardList", index)
      },
      handleEvents(type) {
        console.log('event: ', type)
      },
      handleClick() {
        if (!this.name)
        {
          config.functions.tostNotify("请输入收货人姓名")
        }
        else if (!this.mobile)
        {
          config.functions.tostNotify("请输入收货人联系方式")
        }
        else if (!this.province)
        {
          config.functions.tostNotify("请输入收货人所在省份")
        }
        else if (!this.city)
        {
          config.functions.tostNotify("请输入收货人所在城市")
        }
        else if (!this.addr)
        {
          config.functions.tostNotify("请输入收货人详细地址")
        }
        else{
          let  type=""
          if(this.$route.params.type=="board"){
            type=1
          }
          else{
            type=2
          }
          this.$store.dispatch("addOrder", {
            type: type,
            remarks: this.remarks
          })
        }

      }
    },
    computed: {
      name: {
        get: function () {
          return this.$store.state.name;
        },
        set: function (name) {
          let option = {
            name: name,
            tel: this.mobile,
            province: this.province,
            city: this.city,
            detailAddr: this.addr,
          }
          this.$store.commit("writeUserInfo", option)
        }
      },
      mobile: {
        get: function () {
          return this.$store.state.tel;
        },
        set: function (mobile) {
          let option = {
            name: this.name,
            tel: mobile,
            province: this.province,
            city: this.city,
            detailAddr: this.addr,
          }
          this.$store.commit("writeUserInfo", option)
        }
      },
      province: {
        get:function () {
          return this.$store.state.province;
        },
        set: function (province) {
          let option = {
            name: this.name,
            tel: this.mobile,
            province: province,
            city: this.city,
            detailAddr: this.addr,
          }
          this.$store.commit("writeUserInfo", option)
        }
      },
      city: {
        get:function () {
          return this.$store.state.city;
        },
        set: function (city) {
          let option = {
            name: this.name,
            tel: this.mobile,
            province: this.province,
            city: city,
            detailAddr: this.addr,
          }
          this.$store.commit("writeUserInfo", option)
        }
      },
      addr: {
        get:function () {
          return this.$store.state.detailAddr;
        },
        set: function (addr) {
          let option = {
            name: this.name,
            tel: this.mobile,
            province: this.province,
            city: this.city,
            detailAddr: addr,
          }
          this.$store.commit("writeUserInfo", option)
        }
      },
      list: function () {
        if(this.$route.params.type=="board"){
          return this.$store.state.boardList ? this.$store.state.boardList : [];
        }
        else{
          return this.$store.state.commodityList?this.$store.state.commodityList:[];
        }
      }
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
  .vux-swipeout {
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
