<template>
  <div class="posts-container" v-if="posts.length">
    <PostCard v-for="post of posts" :post="post" :key="post.id" />
  </div>
  <div class="posts-container" v-else>No post found</div>
</template>

<script>
import PostCard from "./PostCard.vue";
import axios from "axios";

export default {
  name: "PostList",
  components: {
    PostCard
  },

  data: () => ({
    posts: []
  }),
  methods: {
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
  },
  created: async function() {
    await this.fetchPosts();
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
