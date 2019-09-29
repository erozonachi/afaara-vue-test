<template>
  <div class="users-container" v-if="users.length">
    <UserCard v-for="user of users" :user="user" :key="user.id" />
  </div>
  <Loader v-else-if="isFetching" />
  <div class="users-container" v-else>No user found</div>
</template>

<script>
import UserCard from "./UserCard.vue";
import Loader from "../Loader.vue";
import axios from "axios";

export default {
  name: "UserList",
  components: {
    UserCard,
    Loader
  },

  data: () => ({
    users: [],
    isFetching: false
  }),
  methods: {
    fetchUsers: async function() {
      try {
        this.isFetching = true;
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/users/`
        );
        this.users = data;
        this.isFetching = false;
      } catch (error) {
        this.isFetching = false;
      }
    }
  },
  created: async function() {
    await this.fetchUsers();
  }
};
</script>

<style scoped>
.users-container {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  max-width: 800px;
  width: 100%;
  margin-top: 20px;
}
</style>
