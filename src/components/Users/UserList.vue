<template>
  <div class="users-container" v-if="users">
    <UserCard v-for="user of users" :user="user" :key="user.id" />
  </div>
  <div class="users-container" v-else>No user found</div>
</template>

<script>
import UserCard from "./UserCard.vue";
import axios from "axios";

export default {
  name: "UserList",
  components: {
    UserCard
  },
  data: () => ({
    users: null
  }),
  methods: {
    fetchUsers: async function() {
      try {
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/users/`
        );
        this.users = data;
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<style scoped>
.users-container {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
}
</style>
