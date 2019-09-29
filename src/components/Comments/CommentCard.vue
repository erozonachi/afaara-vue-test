<template>
  <div class="card">
    <div class="user-info">
      <span class="avatar">{{comment.name.charAt(0)}}</span>
      <h3>{{comment.name}}</h3>
    </div>
    <p>{{comment.body}}</p>
  </div>
</template>

<script>
export default {
  name: "CommentCard",
  props: {
    comment: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.card {
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
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);
  transition: 0.5s ease-in-out;
  background-color: rgba(255, 255, 255, 1);
}
.user-info {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 10px;
}
.avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  box-sizing: border-box;
  background-color: #4265ed;
  color: #dddddd;
  font-size: 28px;
  font-weight: bold;
  margin-right: 10px;
  text-transform: uppercase;
}
h3 {
  font-size: 100%;
  font-weight: 600;
  color: #4f4f4f;
  text-transform: capitalize;
}
p {
  font-size: 100%;
  color: #333333;
  text-align: left;
  margin-left: 20px;
  line-height: 18px;
}
@media (max-width: 550px) {
  .card {
    height: 250px;
  }
}
</style>
