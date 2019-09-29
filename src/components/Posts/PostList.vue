<template>
  <div class="posts-container" v-if="posts.length">
    <Navigator path="/" name="users" title="posts" />
    <PostCard v-for="post of posts" :post="post" :key="post.id" />
  </div>
  <Loader v-else-if="isFetching" />
  <div class="posts-container" v-else>No post found</div>
</template>

<script>
import { postMixin } from "./PostMixin";

export default {
  name: "PostList",
  mixins: [postMixin]
};
</script>

<style scoped>
.posts-container {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  max-width: 800px;
  width: 100%;
  margin-top: 20px;
}
</style>
