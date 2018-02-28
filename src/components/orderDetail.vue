<template>
  <div id="orderDetail">
    <yd-navbar title="隆饰板材订单系统" bgcolor="#1D2838" color="#fff">
      <router-link to="#" slot="left" @click.native="goback">
        <yd-navbar-back-icon color="#FFF">返回</yd-navbar-back-icon>
      </router-link>
    </yd-navbar>

    <div id="orderState">
      <yd-timeline>
        <yd-timeline-item v-for="(item,index) in states" :key="index">
          <p>{{item.describes}}</p>
          <p style="margin-top: 10px;">{{item.time}}</p>
        </yd-timeline-item>

      </yd-timeline>
    </div>

    <div id="form">
      <yd-cell-group>
        <yd-cell-item>
          <span slot="left">收货人：</span>
          <yd-input slot="right" required v-model="name" max="20"  :readonly="true" placeholder="请输入用户名"
                    :show-clear-icon="false"
                    :show-error-icon="false"
                    :show-success-icon="false"
                    :show-required-icon="false"
          ></yd-input>
        </yd-cell-item>

        <yd-cell-item>
          <span slot="left">联系方式：</span>
          <yd-input slot="right" required regex="mobile" v-model="mobile" :readonly="true"  placeholder="请输入电话"
                    :show-clear-icon="false"
                    :show-error-icon="false"
                    :show-success-icon="false"
                    :show-required-icon="false"
          ></yd-input>
        </yd-cell-item>


        <yd-cell-item>
          <span slot="left">收货地址：</span>
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
        name: '',
        mobile: '',
        addr: '',
        remarks:'',
        list: [],
        states:[]
      }
    },
    methods: {
      goback() {
        this.$router.go(-2)
      }
    },
    created:function () {
      this.$nextTick(()=>{
        let orderNum=this.$route.params.orderNum;
        this.$store.dispatch("getOrderDetail",{
          orderNum:orderNum
        }).then((data)=>{
          this.name=data.name;
          this.mobile=data.tel;
          this.addr=data.rdetailAddr;
          this.remarks=data.remarks;

          data.goods.forEach((item)=>{
            this.list.push({
              product: item.name,
              metal: item.material,
              color: item.color,
              count: item.count,
            })
          })

          data.states.forEach((item)=>{
            this.states.push(item)
          })
        })
      })
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
