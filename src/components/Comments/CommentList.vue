<template>
  <div class="container" v-if="comments.length">
    <h3>Comments</h3>
    <CommentCard v-for="comment of comments" :comment="comment" :key="comment.id" />
  </div>
  <div class="container" v-else>No comment</div>
</template>

<script>
import CommentCard from "./CommentCard.vue";
import axios from "axios";

export default {
  name: "CommentList",
  components: {
    CommentCard
  },

  data: () => ({
    comments: []
  }),
  props: {
    postId: {
      type: String,
      required: true
    }
  },
  methods: {
    fetchComments: async function() {
      try {
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${this.postId}/comments`
        );
        this.comments = data.filter(
          item => item.userId === parseInt(this.postId)
        );
      } catch (error) {
        // Die error
      }
    }
  },
  created: async function() {
    await this.fetchComments();
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  max-width: 700px;
  width: 100%;
  margin-top: 10px;
  margin-right: 50px;
}
h3 {
  font-size: 120%;
  font-weight: 600;
  color: #4f4f4f;
  margin-bottom: 10px;
}
</style>
