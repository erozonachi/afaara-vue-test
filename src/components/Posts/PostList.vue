<template>
  <div class="posts-container" v-if="posts.length">
    <PostCard v-for="post of posts" :post="post" :key="post.id" />
  </div>
  <div class="posts-container" v-else>No post found</div>
</template>

<script>
import PostCard from "./PostCard.vue";

export default {
  name: "PostList",
  components: {
    PostCard
  },
  props: {
    posts: {
      type: Array,
      required: true
    },
    fetch: {
      type: Function,
      required: true
    }
  },
  created: async function() {
    await this.fetch();
  }
};
</script>

<style scoped>
.posts-container {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
}
</style>
