<template>
  <div class="users-container" v-if="users.length">
    <UserCard v-for="user of users" :user="user" :key="user.id" />
  </div>
  <div class="users-container" v-else>No user found</div>
</template>

<script>
import UserCard from "./UserCard.vue";

export default {
  name: "UserList",
  components: {
    UserCard
  },
  data: () => ({
    users: []
  })
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
