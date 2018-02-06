<template>
  <div id="app">
    <left-Nav></left-Nav>

    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
// 引入左边导航组件
import leftNav from "@/components/common/leftNav";

export default {
  name: "App",
  components: {
    leftNav
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 100%;
}

.main {
  float: left;
  height: 100%;
  overflow: auto;
  width: 96%;
}
</style>
