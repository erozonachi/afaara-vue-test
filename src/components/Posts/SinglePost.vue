<template>
  <div class="posts-container" v-if="posts.length">
    <Navigator :path="`/users/${userId}/posts`" name="posts" title="single post" />
    <PostCard :post="post" />
    <CommentList :postId="postId" />
  </div>
  <Loader v-else-if="isFetching" />
  <div class="posts-container" v-else>No post found</div>
</template>

<script>
import { postMixin } from "./PostMixin";
import CommentList from "../Comments/CommentList.vue";

export default {
  name: "PostList",
  mixins: [postMixin],
  comments: {
    CommentList
  },
  data: function() {
    return {
      postId: this.$route.params.postId,
      userId: this.$route.params.id
    };
  },
  computed: {
    post: function() {
      return this.posts.filter(post => post.id === parseInt(this.postId))[0];
    }
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
