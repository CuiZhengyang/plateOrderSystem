import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Homepage from '@/components/Homepage'
import boardOrder from '@/components/boardOrder'
import Colors from '@/components/Colors'
import checkOrder from '@/components/checkOrder'
import result from '@/components/result'
import commodityOrder from '@/components/commodityOrder'
import stockCheck from '@/components/stockCheck'
import ordersList from '@/components/ordersList'
import orderDetail from '@/components/orderDetail'
import {Confirm, Alert, Toast, Notify, Loading} from 'vue-ydui/dist/lib.rem/dialog';
import config from "../config/config"

Vue.use(Router)

var router = new Router({
  mode: 'hash',
  base: "/plateOrderSystem/client/",
  routes: [
    {
      path: '/HelloWorld/:id',
      name: 'HelloWorld',
      component: HelloWorld,
      props:true
    },
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'Homepage',
      component: Homepage,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/color',
      name: 'Colors',
      component: Colors,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/board',
      name: 'boardOrder',
      component: boardOrder
    },
    {
      path: '/commodity',
      name: 'commodityOrder',
      component: commodityOrder,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/checkOrder/:type',
      name: 'checkOrder',
      component: checkOrder,
      props:true,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/stockCheck',
      name: 'stockCheck',
      component: stockCheck,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/ordersList',
      name: 'ordersList',
      component: ordersList,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/orderDetail/:orderNum',
      name: 'orderDetail',
      component: orderDetail,
      props:true,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/result/:result',
      component: result,
      name: "result",
      props: true,
      meta: {
        requireAuth: true
      }
    },
  ]
})

router.beforeEach(function (to,from,next) {
  if (!!config.functions.getCookie(config.const.cookName)) {
    next();
  }
  else{
    if (to.meta.requireAuth) {
      next({path: "/"});
    }
    else{
      next();
    }
  }
})

export default router;
