// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import vuex from './store/store'
import "./assets/js/remResize";

import VueResource  from "vue-resource"
import YDUI from 'vue-ydui';
import 'mint-ui/lib/style.css'
import 'vue-ydui/dist/ydui.rem.css';
import 'vue-ydui/dist/ydui.base.css';
import 'animate.css/animate.css'
import {InfiniteScroll} from 'vue-ydui/dist/lib.rem/infinitescroll';

/* 使用px：import 'vue-ydui/dist/ydui.px.css'; */
import { Picker } from 'mint-ui';
import { Popup } from 'mint-ui';
import { Loadmore } from 'mint-ui';

import App from './App'
import config from "./config/config"

//全局配置
Vue.config.silent = config.const.silent;
// Vue.config.performance=config.const.performance

Vue.component(Loadmore.name, Loadmore);
Vue.component(Popup.name, Popup);
Vue.component(Picker.name, Picker);
Vue.component(InfiniteScroll.name, InfiniteScroll);


Vue.use(YDUI);
Vue.use(VueResource);
Vue.config.productionTip = false;



import { Swipeout, SwipeoutItem, SwipeoutButton } from 'vux'
import { ButtonTab, ButtonTabItem } from 'vux'
Vue.component(ButtonTab.name, ButtonTab);
Vue.component(ButtonTabItem.name, ButtonTabItem);

Vue.component(Swipeout.name, Swipeout);
Vue.component(SwipeoutItem.name, SwipeoutItem);
Vue.component(SwipeoutButton.name, SwipeoutButton);

// Vue.http.options.emulateJSON = true;
// Vue.http.interceptors.push(function(request, next) {
//   // modify headers
//   console.log("aa")
//   // request.headers={'Content-Type': 'application/json'};
//   next();
// });







/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:vuex,
  template: '<App/>',
  components: { App }
})
