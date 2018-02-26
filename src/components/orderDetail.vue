<template>
  <div id="orderDetail">
    <yd-navbar title="隆饰板材订单系统" bgcolor="#1D2838" color="#fff">
      <router-link to="#" slot="left" @click.native="goback">
        <yd-navbar-back-icon color="#FFF">返回</yd-navbar-back-icon>
      </router-link>
    </yd-navbar>

    <div id="orderState">
      <yd-timeline>
        <yd-timeline-item>
          <p>【南宁市】您的订单正在配送途中，请您准备签收，感谢您的耐心等待。京东扫码付，单单享立减。</p>
          <p style="margin-top: 10px;">2017-08-18 08:24:18</p>
        </yd-timeline-item>
        <yd-timeline-item>
          <p>【南宁市】您的订单已到达【南宁安吉站】</p>
          <p style="margin-top: 10px;">2017-08-18 07:25:08</p>
        </yd-timeline-item>
        <yd-timeline-item>
          <p>【南宁市】您的订单在京东【南宁分拨中心】发货完成，准备送往京东【南宁安吉站】</p>
          <p style="margin-top: 10px;">2017-08-17 21:44:08</p>
        </yd-timeline-item>
      </yd-timeline>
    </div>

    <div id="form">
      <yd-cell-group>
        <yd-cell-item>
          <span slot="left">用户名：</span>
          <yd-input slot="right" required v-model="name" max="20"  :readonly="true" placeholder="请输入用户名"
                    :show-clear-icon="false"
                    :show-error-icon="false"
                    :show-success-icon="false"
                    :show-required-icon="false"
          ></yd-input>
        </yd-cell-item>

        <yd-cell-item>
          <span slot="left">电话：</span>
          <yd-input slot="right" required regex="mobile" v-model="mobile" :readonly="true"  placeholder="请输入电话"
                    :show-clear-icon="false"
                    :show-error-icon="false"
                    :show-success-icon="false"
                    :show-required-icon="false"
          ></yd-input>
        </yd-cell-item>


        <yd-cell-item>
          <span slot="left">省份：</span>
          <yd-input slot="right" required v-model="province" :readonly="true"  placeholder="请输入您所在的省份"
                    :show-clear-icon="false"
                    :show-error-icon="false"
                    :show-success-icon="false"
                    :show-required-icon="false"
          ></yd-input>
        </yd-cell-item>

        <yd-cell-item>
          <span slot="left">城市：</span>
          <yd-input slot="right" required v-model="city"  :readonly="true"  placeholder="请输入您所在的城市"
                    :show-clear-icon="false"
                    :show-error-icon="false"
                    :show-success-icon="false"
                    :show-required-icon="false"
          ></yd-input>
        </yd-cell-item>

        <yd-cell-item>
          <span slot="left">详细地址：</span>
          <yd-input slot="right" required v-model="addr" placeholder="请输入您所在的详细地址"
                    :show-clear-icon="false"
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

                  <yd-list-item  v-for="item, key in list" :key="key">
                    <!--<img slot="img" :src="item.img">-->
                    <span slot="title">{{item.product}}</span>
                    <yd-list-other slot="other">
                      <div>
                        <span class="demo-list-price">{{item.metal}}</span>
                        <span class="demo-list-price">--</span>
                        <span class="demo-list-del-price">{{item.color}}</span>
                      </div>
                      <div  style="padding-right: 20px">
                        {{item.count}}
                      </div>
                    </yd-list-other>
                  </yd-list-item>


          </yd-list>
        </div>

        <yd-cell-group title="备注" id="beizhu">
          <yd-cell-item>
            <yd-textarea slot="right" placeholder="请留言" v-model="remarks" :readonly="true"  maxlength="100"></yd-textarea>
          </yd-cell-item>
        </yd-cell-group>

      </yd-cell-group>


    </div>

  </div>
</template>

<script>
  export default {
    name: "order-detail",
    data() {
      return {
        name: '崔正阳',
        mobile: '15607110712',
        province: '河南',
        city: '安阳',
        addr: '文峰区三里屯A-115',
        remarks:'阿喀琉斯的飞机拉克丝',
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
      }
    }
  }
</script>

<style type="text/scss" lang="scss" scoped>
  @import "../assets/css/fonction.scss";


  #orderDetail{
    padding-bottom: rem(60);

    #orderState{
      margin-bottom:rem(30) ;

    }
  }
</style>
