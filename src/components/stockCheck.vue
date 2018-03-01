<template>
  <div id="stockCheck">
    <yd-navbar title="隆饰板材订单系统" bgcolor="#1D2838" color="#fff">
      <router-link to="#" slot="left" @click.native="goback">
        <yd-navbar-back-icon color="#FFF">返回</yd-navbar-back-icon>
      </router-link>
    </yd-navbar>
    <div style="overflow-y: auto; position: relative; flex: 1">
      <yd-scrollnav :callback="handleClick">
        <!--<yd-search v-model="primaryKey" :on-submit="submitHandler"></yd-search>-->
        <yd-scrollnav-panel :label="item.label" v-for="(item,index) in this.labels" :key="index">

          <!--内容-->
          <div class="stock" v-for="(stock,index2) in list"  v-if="stock.type==item.label" :key="index2">
            <div class="stockType">{{stock.type}}</div>
            <div class="stockContent">
              <div class="stockName">{{stock.name}}</div>
              <div class="stockStandard">{{stock.standard}}</div>
            </div>
            <div class="stockState style2" v-if="stock.stockState=='缺货'">{{stock.stockState}}</div>
            <div class="stockState style1" v-else>{{stock.stockState}}</div>

          </div>
          <!--内容-->
        </yd-scrollnav-panel>
      </yd-scrollnav>
    </div>
  </div>
</template>

<script>
  export default {
    name: "stock-check",
    data() {
      return {
        primaryKey: "",
        labels: [
          // {label: '全部产品'},
          // {label: '烟灶推荐'},
          // {label: '净水饮水推荐'},
          // {label: '洗碗机推荐'},
          // {label: '电热推荐'},
          // {label: '燃热推荐'},
          // {label: '消毒柜推荐'},
          // {label: '嵌入式推荐'},
          // {label: '商用电器'},
          // {label: '活动说明'}
        ],
        list: [
          // {
          //   type:"种类001",
          //   name:"商品名称文字",
          //   standard:"规格文字规格文字",
          //   state:"正常"
          // },
          // {
          //   type:"种类001",
          //   name:"商品名称文字",
          //   standard:"规格文字规格文字",
          //   state:"缺货"
          // },
          // {
          //   type:"种类001",
          //   name:"商品名称文字",
          //   standard:"规格文字规格文字",
          //   state:"缺货"
          // },
          // {
          //   type:"种类001",
          //   name:"商品名称文字",
          //   standard:"规格文字规格文字",
          //   state:"正常"
          // },
          // {
          //   type:"种类001",
          //   name:"商品名称文字",
          //   standard:"规格文字规格文字",
          //   state:"正常"
          // },
          // {
          //   type:"种类001",
          //   name:"商品名称文字",
          //   standard:"规格文字规格文字",
          //   state:"正常"
          // },
          // {
          //   type:"种类001",
          //   name:"商品名称文字",
          //   standard:"规格文字规格文字",
          //   state:"正常"
          // },
          // {
          //   type:"种类001",
          //   name:"商品名称文字",
          //   standard:"规格文字规格文字",
          //   state:"正常"
          // },
          // {
          //   type:"种类001",
          //   name:"商品名称文字",
          //   standard:"规格文字规格文字",
          //   state:"正常"
          // },
          // {
          //   type:"种类001",
          //   name:"商品名称文字",
          //   standard:"规格文字规格文字",
          //   state:"正常"
          // },
          // {
          //   type:"种类001",
          //   name:"商品名称文字",
          //   standard:"规格文字规格文字",
          //   state:"正常"
          // }
        ]
      }
    },
    methods: {
      goback() {
        this.$router.go(-2)
      },
      handleClick(item) {
        // console.log("aaa" + item)
      },
      submitHandler() {

      }
    },
    created: function () {
      this.$nextTick(() => {
        this.$store.dispatch("showStockState").then((data) => {
          data.labels.forEach((item) => {
            this.labels.push({label: item})
          })
          this.list = data.list;
        })
      })
    }
  }
</script>

<style type="text/scss" lang="scss" scoped>
  @import "../assets/css/fonction.scss";

  #stockCheck {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;

    .stock {
      display: flex;
      align-items: center;
      position: relative;
      padding: rem(5) rem(15);

      .stockType {
        width: rem(80);

      }
      .stockContent {
        flex: 1;
        .stockName {
          font-size: rem(15);
          line-height: rem(23);
          letter-spacing: -0.36px;
        }
        .stockStandard {
          font-size: rem(12);
          line-height: rem(20);
          color: #333333;
          letter-spacing: -0.36px;
        }
      }
      .stockState {
        width: rem(60);
        text-align: center;
      }
      .style1 {
        color: forestgreen;
      }
      .style2 {
        color: red;
      }
    }
    .stock:not(:last-child) {
      border-bottom: 1px solid #d9d9d9;
    }
  }

</style>
