<template>
  <div>
    <div class="hello" v-if="a">
      <h1>{{ msg }}</h1>
      <h2>Essential Links</h2>
      <ul>
        <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
        <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
        <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
        <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
        <br>
        <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
      </ul>
      <h2>Ecosystem</h2>
      <ul>
        <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
        <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
        <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
        <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
      </ul>
      <ul>
        <li  v-for="(item,index) in a" ><a hre="">{{item.name}}</a></li>
      </ul>
    </div>
    <div v-else>
      aasdfasdfasd
    </div>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      a:[{name:"aa"},{name:"bb"}],
      msg: 'Welcome to Your Vue.js App'
    }
  },
  beforeRouteEnter (to, from, next) {

    console.log('组件路由勾子：beforeRouteEnter')
    console.log(this)  //undefined，不能用this来获取vue实例
    next(vm => {
      console.log('组件路由勾子beforeRouteEnter的next')
      console.log(vm)  //vm为vue的实例
      vm.$data.msg="next"
    })
  },
  beforeCreate:function () {
    console.log("beforeCreate");
    console.log(this);
//    console.log(this.$http.get("/asdfasdf"))
    this.$nextTick(() => {
      console.log('nextTick')  //回调里的函数一直到真实的dom渲染结束后，才执行
    })

  },
  created:function(){
    console.log("created");
    console.log(this);
    console.log(this.$data.msg)
  },
  beforeMount:function () {
    console.log("beforeMount");
    console.log(this);
  },
  mounted:function () {
    console.log("mounted");
    console.log(this);
    setTimeout(()=>{
      this.a.push({name:"cc"})
    },5000)
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    console.log("beforeRouteUpdate");
    console.log(this)    //可以访问vue实例
  },
  beforeRouteLeave (to, from, next) {
    console.log("beforeRouteLeave");
    console.log(this)    //可以访问vue实例
    console.log('组件路由勾子：beforeRouteLeave')
    next()
  },
  beforeUpdate(){
    console.log("beforeUpdate");
    console.log(this)    //可以访问vue实例
  },
  updated(){
    console.log("updated");
    console.log(this)    //可以访问vue实例
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
