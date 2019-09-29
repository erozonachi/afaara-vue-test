<template>
  <div id="app">
    <UserList />
  </div>
</template>

<script>
import UserList from "./components/Users/UserList.vue";

export default {
  name: "app",
  components: {
    UserList
  }
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  max-width: 800px;
  width: 100%;
  margin: 20px auto;
}
</style>
