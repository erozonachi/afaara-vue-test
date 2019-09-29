<template>
  <div id="app">
    <AppBar />
    <router-view></router-view>
  </div>
</template>

<script>
import AppBar from "./components/AppBar.vue";

export default {
  name: "app",
  components: {
    AppBar
  }
};
</script>

<style>
body {
  margin-top: 60px;
  background-color: #f4f4f4;
}
#app {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 20px auto;
}
</style>
