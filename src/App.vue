<template>
  <div id="app">
    <UserList :users="users" :fetch="fetchUsers" />
  </div>
</template>

<script>
import UserList from "./components/Users/UserList.vue";
import axios from "axios";

export default {
  name: "app",
  components: {
    UserList
  },
  data: () => ({
    users: []
  }),
  methods: {
    fetchUsers: async function() {
      try {
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/users/`
        );
        this.users = data;
      } catch (error) {
        //console.log(error);
      }
    }
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
