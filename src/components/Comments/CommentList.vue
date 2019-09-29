<template>
  <div class="container" v-if="comments.length">
    <h3>Comments</h3>
    <CommentCard v-for="comment of comments" :comment="comment" :key="comment.id" />
  </div>
  <Loader v-else-if="isFetching" />
  <div class="container" v-else>No comment</div>
</template>

<script>
import CommentCard from "./CommentCard.vue";
import Loader from "../Loader.vue";
import axios from "axios";

export default {
  name: "CommentList",
  components: {
    CommentCard,
    Loader
  },

  data: () => ({
    comments: [],
    isFetching: false
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
        this.isFetching = true;
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${this.postId}/comments`
        );
        this.comments = data.filter(
          item => item.postId === parseInt(this.postId)
        );
        this.isFetching = false;
      } catch (error) {
        // Die error
        this.isFetching = false;
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
  width: 90%;
  margin-top: 10px;
  margin-left: 50px;
}
h3 {
  font-size: 120%;
  font-weight: 600;
  color: #4f4f4f;
  margin-bottom: 10px;
}
</style>
