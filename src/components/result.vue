<template>
  <div id="result">
    <yd-navbar title="隆饰板材订单系统" bgcolor="#1D2838" color="#fff">
      <router-link to="#" slot="left" @click.native="goback">
        <yd-navbar-back-icon color="#FFF">返回</yd-navbar-back-icon>
      </router-link>
    </yd-navbar>
    <div id="step">
      <yd-step current="3" currentColor="#3372CC">
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
    <div v-if="result=='networkError'">
      <img class=" cImg" src="../assets/img/show2.png" alt="">
      <div class="introduce">网络不稳定，上传失败</div>
      <div class="nextBtn">
        <yd-button size="large" type="primary" color="#fff" bgcolor="#4A90E2" @click.native="reTry" >重试</yd-button>
      </div>
    </div>

    <div id="fail" v-if="result=='fail'">
      <img src="../assets/img/fail.png" class="resultIcon" alt="">
      <h2> 验证不通过</h2>
      <div class="introduce">
        <div class="title">
          <div class="hr">
            <hr/>
          </div>
          <span>不成功的可能原因</span>
          <div class="hr">
            <hr/>
          </div>

        </div>
        <div class="content">
          <div>•	没有正对镜头</div>
          <div>•	没有免冠</div>
          <div>•	拍摄时光线较差</div>
          <div>•	网络连接不稳定</div>
          <div>•	不是本人参与的检测</div>
        </div>
      </div>
      <div class="nextBtn">
        <yd-button size="large" type="primary" color="#fff" bgcolor="#4A90E2" @click.native="rePhoto">重新拍照进行身份验证
        </yd-button>
      </div>
    </div>

    <div id="success" v-if="result=='success'">
      <img src="../assets/img/success.png" class="resultIcon" alt="">
      <h2> 订单提交成功</h2>
      <div class="nextBtn">
        <yd-button size="large" type="primary" color="#fff" bgcolor="#4A90E2" @click.native="goHome">返回首页
        </yd-button>
      </div>
      <div class="nextBtn bb">
        <yd-button size="large" type="hollow" color="#4A90E2" bgcolor="#fff" @click.native="getServCont">查看订单
        </yd-button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      result: String
    },
    methods: {
      goback() {
        this.$router.go(-2)
      },
      reTry() {
        this.$router.push({path: `/ShengWuRenZheng`});
      },
      rePhoto(){
        this.$router.push({path: `/ShengWuRenZheng`});
//        let self=this;
//        wx.chooseImage({
//          count: 1, // 默认9
//          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
//          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
//          success: function (res) {
//            var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
//            self.$store.dispatch("shengWuRenZheng",{picLife:localIds})
//          }
//        });
      },
      goHome() {
        this.$router.push({path:"/home"})
      },
      getServCont() {
        // this.$router.push({path:"/servContent"})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/scss" lang="scss" scoped>
  @import "../assets/css/fonction.scss";

  #step {
    margin-top: rem(30);
  }
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

  .resultIcon {
    width: rem(56);
    height: rem(56);
    display: block;
    margin: auto;
    margin-top: rem(36);
  }

  #fail h2, #success h2 {

    text-align: center;
    margin-top: rem(20);
    ont-size: rem(17);
    color: #333333;
    letter-spacing: -0.19px;
    font-weight: normal;

  }

  #fail {
    .introduce {
      padding: 0 rem(30);
      .title {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;

        .hr {
          flex: 1;
          hr {
            background: #DDDDDD;
          }
        }
        span {
          flex: 1 0 rem(50);
          font-size: rem(13);
          color: #666666;
          letter-spacing: -0.08px;
          line-height: 20px;
        }
      }

      .content {
        font-size: rem(13);
        color: #666666;
        letter-spacing: -0.08px;
        line-height: 26px;
        text-align: left;
        padding-left: rem(69);
        margin-top: rem(20);
      }
    }
  }
  #success{
    .bb button{
      border: 1px solid #4A90E2;
    }
  }
</style>
