<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style type="text/scss" lang="scss">
  @import "./assets/css/common.scss";
  #app {
    min-height: 100%;
  }

</style>
