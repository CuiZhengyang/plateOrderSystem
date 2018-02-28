import config from "../config/config"
import Vue from "vue"
import router from "../router/index"
import myLoading from "../components/loading/myLoading"


const actions = {
  /**
   * 登录
   * @param context
   * @param option
   */
  login(context, option) {
    Vue.http.post(config.url.login, option).then(function ({data}) {
      if (data.statusCode == config.resCode.success) {
        context.commit("writeUserInfo", data.data)
        router.push({path: '/home'})
      }
      else {
        config.functions.tostNotify(data.msg)
      }
    }, function (response) {
      config.functions.tostNotify("请检查您的网络")
    })
  },
  /**
   * 获取所有板材的商品清单
   */
  getAllBoards(context) {
    return new Promise(function (resolve, reject) {
      let result = null;
      Vue.http.post(config.url.getAllBoards).then(function ({data}) {
        if (data.statusCode == config.resCode.success) {
          resolve(data.data)
        }
        else {
          config.functions.tostNotify(data.msg)
        }
      }, function (response) {
        config.functions.tostNotify("请检查您的网络")
      })
    })
  },
  /**
   * 改变板材订单管理系统的产品
   * @param context
   * @param option
   */
  changeProduct(context, option) {
    return new Promise(function (resolve, reject) {
      Vue.http.post(config.url.changeProduct, option).then(function ({data}) {
        if (data.statusCode == config.resCode.success) {
          resolve(data.data)
        }
        else {
          config.functions.tostNotify(data.msg)
        }
      }, function (response) {
        config.functions.tostNotify("请检查您的网络")
      })
    })
  },
  /**
   * 改变板材订单管理系统的材质
   * @param context
   * @param option
   */
  changeMetal(context, option) {
    return new Promise(function (resolve, reject) {
      Vue.http.post(config.url.changeMetal, option).then(function ({data}) {
        if (data.statusCode == config.resCode.success) {
          resolve(data.data)
        }
        else {
          config.functions.tostNotify(data.msg)
        }
      }, function (response) {
        config.functions.tostNotify("请检查您的网络")
      })
    })
  },
  /**
   * 添加板材订单
   * @param context
   * @param option
   */
  addBoardOrder(context, option) {
    option.name = context.state.name;
    option.tel = context.state.tel;
    option.uid = context.state.uid;
    option.rdetailAddr = context.state.province + context.state.city + context.state.detailAddr;
    if (option.type == "1")
      option.list = context.state.boardList;

    Vue.http.post(config.url.addBoardOrder, option).then(function ({data}) {
      myLoading.close("up");
      if (data.statusCode == config.resCode.success) {
        context.commit("delBoardList",-1)
        router.push({path: '/result/success'})
      }
      else if (data.statusCode == config.resCode.rlogin) {
        router.push({path: '/'})
      }
      else {
        config.functions.tostNotify(data.msg)
      }
    }, function (response) {
      config.functions.tostNotify("请检查您的网络")
      myLoading.close("up");
    })
  },
  /**
   * 查询所有的订单列表
   */
  getAllOrderList(context){
    return new Promise(function (resolve,reject) {
      Vue.http.get(config.url.getAllOrderList).then(function ({data}) {
        if (data.statusCode == config.resCode.success) {
          resolve(data.data)
        }
        else if (data.statusCode == config.resCode.rlogin) {
          router.push({path: '/'})
        }
        else {
          config.functions.tostNotify(data.msg)
        }
      },function () {
        config.functions.tostNotify("请检查您的网络")
      })
    })
  },
  /**
   * 获取订单详情
   */
  getOrderDetail(context,option){
    return new Promise(function (resolve,reject) {
      Vue.http.post(config.url.getOrderDetail,option).then(function ({data}) {
        if (data.statusCode == config.resCode.success) {
          resolve(data.data)
        }
        else if (data.statusCode == config.resCode.rlogin) {
          router.push({path: '/'})
        }
        else {
          config.functions.tostNotify(data.msg)
        }
      },function () {
        config.functions.tostNotify("请检查您的网络")
      })
    })
  }
}
export default actions;
