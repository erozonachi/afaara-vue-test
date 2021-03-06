import PostCard from "./PostCard.vue";
import Loader from "../Loader.vue";
import Navigator from "../Navigator.vue";
import axios from "axios";

export const postMixin = {
  components: {
    PostCard,
    Loader,
    Navigator
  },

  data: () => ({
    posts: [],
    isFetching: false
  }),
  computed: {
    userId: function () {
      return parseInt(this.$route.params.id);
    }
  },
  methods: {
    fetchPosts: async function () {
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
  created: async function () {
    await this.fetchPosts();
  }
}
