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
    users: [],
    posts: []
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
    },
    fetchPosts: async function() {
      try {
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/users/1/posts`
        );
        this.posts = data.filter(item => item.userId === 1);
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
