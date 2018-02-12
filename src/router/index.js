import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
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
    }
  ]
})


export default router;
