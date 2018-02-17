<template>
  <div id="board">
    <yd-navbar title="板材订单系统" bgcolor="#1D2838" color="#fff">
      <router-link to="#" slot="left" @click.native="goback">
        <yd-navbar-back-icon color="#FFF">返回</yd-navbar-back-icon>
      </router-link>
    </yd-navbar>
    <div id="step">
      <yd-step current="1" currentColor="#3372CC">
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

        <yd-cell-item arrow href="#" @click.native="changeProduct">
          <span slot="left">产品名称</span>
          <span slot="right">{{product}}</span>
        </yd-cell-item>
        <yd-cell-item arrow href="#" @click.native="changeMetal">
          <span slot="left">材质</span>
          <span slot="right">{{metal}}</span>
        </yd-cell-item>
        <yd-cell-item arrow href="#" @click.native="changeColor">
          <span slot="left">花色</span>
          <span slot="right">{{color}}</span>
        </yd-cell-item>
        <yd-cell-item>
          <span slot="left">数量</span>
          <yd-input slot="right" v-model.number="count" ref="count" required  regex="^[0-9]*[1-9][0-9]*$"
                    :show-clear-icon="true"
                    :show-error-icon="false"
                    :show-success-icon="false"
                    :show-required-icon="false"
                    placeholder="请输入您要购买的数量"></yd-input>
        </yd-cell-item>

      </yd-cell-group>
    </div>
    <div class="nextBtn" style="text-align: right">
      <button id="addProduct" @click="addProduct">
        添加商品
      </button>
    </div>

    <div id="showPanel">
      <yd-list theme="4">
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
                <span slot="title" >{{item.product}}</span>
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
    <div class="nextBtn stepBtn">
      <yd-button size="large" bgcolor="#3372CC" color="#FFF" @click.native="handleClick">下一步</yd-button>
    </div>

    <!--产品-->
    <mt-popup
      v-model="popupVisible"
      position="bottom"
      popup-transition="popup-fade">
      <mt-picker
        :slots="productSlots"
        :showToolbar="true"
        style="text-align:right"
        :valueKey="'merchantNm'"
        :visibleItemCount="5"
        @change="onProductValuesChange">
        <div class="popupbar">
          <div class="popupbarlBt" @click="changeProduct">取消</div>
          <div class="popupbarT">产品类型</div>
          <div class="popupbarrBt" @click="changeProduct">完成</div>
        </div>
      </mt-picker>
    </mt-popup>
    <!--材质-->
    <mt-popup
      v-model="popupVisible2"
      position="bottom"
      popup-transition="popup-fade">
      <mt-picker
        :slots="metalSlots"
        :showToolbar="true"
        style="text-align:right"
        :valueKey="'merchantNm'"
        :visibleItemCount="5"
        @change="onMetalValuesChange">
        <div class="popupbar">
          <div class="popupbarlBt" @click="changeMetal">取消</div>
          <div class="popupbarT">材质</div>
          <div class="popupbarrBt" @click="changeMetal">完成</div>
        </div>
      </mt-picker>
    </mt-popup>
    <!--花色-->
    <mt-popup
      v-model="popupVisible3"
      position="bottom"
      popup-transition="popup-fade">
      <mt-picker
        :slots="colorSlots"
        :showToolbar="true"
        style="text-align:right"
        :valueKey="'merchantNm'"
        :visibleItemCount="5"
        @change="onColorValuesChange">
        <div class="popupbar">
          <div class="popupbarlBt" @click="changeColor">取消</div>
          <div class="popupbarT">花色</div>
          <div class="popupbarrBt" @click="changeColor">完成</div>
        </div>
      </mt-picker>
    </mt-popup>
  </div>
</template>

<script>
  export default {
    name: "board-order",
    data: function () {
      return {
        product: '',
        metal: "",
        color: "",
        count: '',
        popupVisible: false,
        popupVisible2: false,
        popupVisible3: false,
        productSlots: [
          {
            flex: 1,
            values: ['a', 'b', 'c', 'a1', 'b1', 'c1', 'a2', 'b2', 'c2', 'a3', 'b3', 'c3', 'a4', 'b4', 'c4'],
            className: 'slot1',
            textAlign: 'center'
          }
        ],
        metalSlots: [
          {
            flex: 1,
            values: ['a', 'b', 'c', 'a1', 'b1', 'c1', 'a2', 'b2', 'c2', 'a3', 'b3', 'c3', 'a4', 'b4', 'c4'],
            className: 'slot1',
            textAlign: 'center'
          }
        ],
        colorSlots: [
          {
            flex: 1,
            values: ['a', 'b', 'c', 'a1', 'b1', 'c1', 'a2', 'b2', 'c2', 'a3', 'b3', 'c3', 'a4', 'b4', 'c4'],
            className: 'slot1',
            textAlign: 'center'
          }
        ],
        list: [

        ]
      }
    },
    methods: {
      goback() {
        this.$router.go(-2)
      },
      addProduct() {
        if(this.$refs.count.valid){
          let item = {
            product: this.product,
            metal: this.metal,
            color: this.color,
            count: this.count
          }
          this.list.push(item);
        }
        else{
          console.log(this.$refs.count.valid)
          this.$dialog.toast({
            mes: '请输入的数量有误',
            timeout: 1000
          });
        }

      },
      changeProduct() {
        this.$data.popupVisible = !this.$data.popupVisible
      },
      changeMetal() {
        this.$data.popupVisible2 = !this.$data.popupVisible2
      },
      changeColor() {
        this.$data.popupVisible3 = !this.$data.popupVisible3
      },
      onProductValuesChange(picker, values) {
        this.product = picker.getValues()[0];
      },
      onMetalValuesChange(picker, values) {
        this.metal = picker.getValues()[0];
      },
      onColorValuesChange(picker, values) {
        this.color = picker.getValues()[0];
      },
      onButtonClick(index) {
        this.list.splice(index, 1)
      },
      handleEvents(type) {
        console.log('event: ', type)
      },
      handleClick(){

      }
    }
  }
</script>

<style type="text/scss" lang="scss" scoped>
  @import "../assets/css/fonction.scss";

  #board {
    min-height: 100%;
    padding-bottom: rem(90);

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
    #addProduct {
      display: inline-block;
      width: rem(100);
      line-height: rem(36);
      margin-top: rem(20);
      text-align: center;
      color: #1A8BFF;
      border: 1px solid #1A8BFF;
      border-radius: 6px;
    }

    #showPanel {
      margin-top: rem(30);
    }
    .mint-popup.mint-popup-bottom {
      width: 100%;
      .popupbar {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: rem(43.5);
        background: rgba(246, 246, 246, 0.90);
        border-bottom: 1px solid #ddd;
        border-top: 1px solid #ddd;
        .popupbarlBt {
          flex: 0 1 rem(45);
          text-align: right;
          font-size: rem(15);
          color: #1A8BFF;
          letter-spacing: -0.17px;
        }
        .popupbarT {
          flex: 1;
          text-align: center;
          font-size: rem(17);
          color: #000000;
          letter-spacing: -0.19px;
        }
        .popupbarrBt {
          flex: 0 1 rem(45);
          text-align: left;
          font-size: rem(15);
          color: #1A8BFF;
          letter-spacing: -0.17px;
        }
      }
    }

    .vux-swipeout {
      border-bottom: 1px solid #d9d9d9;
    }
  }


</style>
