import config from "../config/config"
import Vue from "vue"
import router from "../router/index"



const actions = {
  /**
   * 登录
   * @param context
   * @param option
   */
  login(context,option){
    Vue.http.post(config.url.login,option).then(function ({data}) {
      if (data.statusCode == config.resCode.success) {
        context.commit("writeUserInfo",data.data)
        router.push({path:'/home'})
      }
      else {
        config.functions.tostNotify(data.msg)
      }
    },function (response) {
      config.functions.tostNotify("请检查您的网络")
    })
  },
  /**
   * 获取所有板材的商品清单
   */
  getAllBoards(context){
      return new Promise(function (resolve,reject) {
        let result=null;
        Vue.http.post(config.url.getAllBoards).then(function ({data}) {
          if (data.statusCode == config.resCode.success) {
            resolve(data.data)
          }
          else {
            config.functions.tostNotify(data.msg)
          }
        },function (response) {
          config.functions.tostNotify("请检查您的网络")
        })
      })
  },
  /**
   * 改变板材订单管理系统的产品
   * @param context
   * @param option
   */
  changeProduct(context,option){
    return new Promise(function (resolve,reject) {
       Vue.http.post(config.url.changeProduct,option).then(function ({data}) {
         if (data.statusCode == config.resCode.success) {
           resolve(data.data)
         }
         else {
           config.functions.tostNotify(data.msg)
         }
       },function (response) {
         config.functions.tostNotify("请检查您的网络")
       })
    })
  },
  /**
   * 改变板材订单管理系统的材质
   * @param context
   * @param option
   */
  changeMetal(context,option){
    return new Promise(function (resolve,reject) {
      Vue.http.post(config.url.changeMetal,option).then(function ({data}) {
        if (data.statusCode == config.resCode.success) {
          resolve(data.data)
        }
        else {
          config.functions.tostNotify(data.msg)
        }
      },function (response) {
        config.functions.tostNotify("请检查您的网络")
      })
    })
  }
}
export default actions;
