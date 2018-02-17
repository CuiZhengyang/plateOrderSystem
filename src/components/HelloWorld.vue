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
    next(vm => {
      console.log('组件路由勾子beforeRouteEnter的next')
    })
  },
  beforeCreate () {
    console.log('组件：beforeCreate')
  },
  created () {
    this.$nextTick(() => {
      console.log('nextTick')
    })
    console.log('组件：created')
  },
  beforeMount () {
    console.log('组件：beforeMount')
  },
  mounted () {
    console.log('组件：mounted')
    console.log(this)
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
