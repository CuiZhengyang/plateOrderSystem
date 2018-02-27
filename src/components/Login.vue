<template>
  <div id="login">
    <yd-navbar title="登录" bgcolor="#1D2838" color="#fff"></yd-navbar>
      <div id="logo">

      </div>
    <div id="form">
      <yd-cell-group>
        <yd-cell-item>
          <span slot="left">账号：</span>
          <yd-input slot="right" required v-model="name" max="20" ref="name" placeholder="请输入用户名"
                    :show-clear-icon="true"
                    :show-error-icon="false"
                    :show-success-icon="false"
                    :show-required-icon="false"
          ></yd-input>
        </yd-cell-item>
        <yd-cell-item>
          <span slot="left">密码：</span>
          <yd-input slot="right" type="password" required  max="20" min="6" v-model="password" ref="password" placeholder="请输入密码"
                    :show-clear-icon="true"
                    :show-error-icon="false"
                    :show-success-icon="false"
                    :show-required-icon="false"
          ></yd-input>
        </yd-cell-item>
      </yd-cell-group>

    </div>
    <div class="nextBtn">
      <yd-button size="large" bgcolor="#3372CC" color="#FFF" @click.native="handleClick">登录</yd-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        name: '',
        password: ''
      }
    },
    methods:{
      handleClick(){
        if(this.$refs.name.valid&&this.$refs.password.valid)
        {
          this.$store.dispatch("login",{
            name: this.name,
            password: this.password
          })
        }
        else if(!this.$refs.name.valid){
          this.$dialog.toast({
            mes: '请输入正确的用户名！',
            timeout: 1000
          });
        }
        else{
          this.$dialog.toast({
            mes: '请输入正确的6-20位的正确密码！',
            timeout: 1000
          });
        }
      }
    }
  }
</script>

<style type="text/scss" lang="scss" scoped>
  @import "../assets/css/fonction.scss";

  #logo{
    margin: auto;
    height: rem(120);
    width: rem(120);
    background: #1A8BFF;
    margin:rem(40) auto rem(30);
  }
  .yd-cell-item:after {
    margin-left: .24rem;
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
