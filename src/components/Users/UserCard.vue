<template>
  <router-link to="'/users/' + user.id" class="user-card">
    <div class="content">
      <span class="avatar">{{user.name.charAt(0)}}</span>
      <h3>{{user.name}}</h3>
    </div>
    <div class="content">
      <div class="user-info">
        <img :src="phoneIcon" alt="Phone:" />
        <span>{{user.phone}}</span>
      </div>
      <div class="user-info">
        <img :src="emailIcon" alt="Email:" />
        <span>{{user.email}}</span>
      </div>
      <div class="user-info">
        <img :src="cityIcon" alt="City:" />
        <span>{{user.address.city}}</span>
      </div>
      <div class="user-info">
        <img :src="webIcon" alt="Website:" />
        <span>{{user.website}}</span>
      </div>
    </div>
  </router-link>
</template>

<script>
import phoneIcon from "../../assets/call.svg";
import emailIcon from "../../assets/email.svg";
import cityIcon from "../../assets/city.svg";
import webIcon from "../../assets/web.svg";
export default {
  name: "UserCard",
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    phoneIcon,
    emailIcon,
    cityIcon,
    webIcon
  })
};
</script>

<style scoped>
.user-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  max-width: 800px;
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0px 12px 6px rgba(0, 0, 0, 0.06);
  transition: 0.5s ease-in-out;
  cursor: pointer;
}
.user-card:hover {
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.12);
  border: 1px solid #4265ed;
}
.content {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 100%;
}
.content:first-of-type {
  margin-bottom: 20px;
}
.avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  box-sizing: border-box;
  background-color: #4265ed;
  color: #dddddd;
  font-size: 28px;
  font-weight: bold;
  margin-right: 10px;
}
h3 {
  font-size: 120%;
  font-weight: 600;
  color: #4f4f4f;
  text-transform: capitalize;
}
.user-info {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  width: 49%;
  color: #333333;
  margin-bottom: 10px;
}
.user-info img {
  margin: 0 10px;
  font-weight: bold;
  width: 20px;
}
.user-info span {
  font-size: 100%;
}
</style>
