import Vue from 'vue'
import Vuex from 'vuex'
import actions from "./actions"
import mutations from "./mutations"
import config from "../config/config";

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    uid:config.functions.getCookie(config.const.cookName),
    city:"",
    detailAddr:"",
    name:"",
    province:"",
    tel:"",
    boardList:[],
    commodityList:[]
  },
  getters:{
  },
  mutations: mutations,
  actions: actions,
})

export default store;
