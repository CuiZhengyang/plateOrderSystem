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
      component: Homepage
    },
    {
      path: '/color',
      name: 'Colors',
      component: Colors
    },
    {
      path: '/board',
      name: 'boardOrder',
      component: boardOrder
    },
    {
      path: '/commodity',
      name: 'commodityOrder',
      component: commodityOrder
    },
    {
      path: '/checkOrder',
      name: 'checkOrder',
      component: checkOrder
    },
    {
      path: '/stockCheck',
      name: 'stockCheck',
      component: stockCheck
    },
    {
      path: '/ordersList',
      name: 'ordersList',
      component: ordersList
    },
    {
      path: '/orderDetail/:orderNum',
      name: 'orderDetail',
      component: orderDetail,
      props:true
    },
    {
      path: '/result/:result',
      component: result,
      name: "result",
      meta: {
        requireAuth: true
      },
      props: true
    },
  ]
})


export default router;
