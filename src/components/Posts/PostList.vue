<template>
  <div class="posts-container" v-if="posts.length">
    <PostCard v-for="post of posts" :post="post" :key="post.id" />
  </div>
  <Loader v-else-if="isFetching" />
  <div class="posts-container" v-else>No post found</div>
</template>

<script>
import PostCard from "./PostCard.vue";
import Loader from "../Loader.vue";
import axios from "axios";

export default {
  name: "PostList",
  components: {
    PostCard,
    Loader
  },

  data: () => ({
    posts: [],
    isFetching: false
  }),
  methods: {
    fetchPosts: async function() {
      try {
        this.isFetching = true;
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${this.$route.params.id}/posts`
        );
        this.posts = data.filter(
          item => item.userId === parseInt(this.$route.params.id)
        );
        this.isFetching = false;
      } catch (error) {
        this.isFetching = false;
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
  max-width: 800px;
  width: 100%;
  margin-top: 20px;
}
</style>
