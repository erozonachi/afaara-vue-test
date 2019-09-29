<template>
  <div class="container">
    <router-link :to="path" v-if="path">
      <img :src="backIcon" alt="back-arrow" />
      {{name}}
    </router-link>
    <h2>{{title}}</h2>
  </div>
</template>

<script>
import backIcon from "../assets/left-arrow.svg";

export default {
  name: "Navigator",
  props: {
    path: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      required: true
    }
  },
  data: () => ({
    backIcon
  })
};
</script>

<style scoped>
.container,
a {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #333333;
  font-size: 100%;
  font-weight: bold;
  text-transform: capitalize;
}
.container {
  margin-bottom: 40px;
}
.container a {
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);
  text-decoration: none;
  margin-right: 40px;
  background-color: #ffffff;
}
a:link {
  color: inherit;
}
a:active {
  color: inherit;
}
a:visited {
  color: inherit;
}
.container a img {
  height: 30px;
  margin-right: 5px;
}
.container h2 {
  font-size: 150%;
  font-weight: 600;
  color: #4f4f4f;
}
</style>
