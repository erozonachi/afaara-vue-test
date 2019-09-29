<template>
  <div class="post-card">
    <h3>{{post.title}}</h3>
    <p>{{post.body}}</p>
  </div>
</template>

<script>
export default {
  name: "PostCard",
  props: {
    post: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.post-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  max-width: 800px;
  width: 100%;
  max-height: 300px;
  height: 210px;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0px 12px 6px rgba(0, 0, 0, 0.06);
  transition: 0.5s ease-in-out;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 1);
}
.post-card:hover {
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.12);
  border: 1px solid #4265ed;
}
h3 {
  font-size: 120%;
  font-weight: 600;
  color: #4f4f4f;
  text-transform: capitalize;
  margin-bottom: 20px;
}
p {
  font-size: 100%;
  color: #333333;
  text-align: left;
  margin-left: 20px;
  line-height: 18px;
}
</style>
