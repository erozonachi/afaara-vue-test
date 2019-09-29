<template>
  <div class="user-card">
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
  </div>
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
}
.content {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 100%;
}
.avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  box-sizing: border-box;
  background-color: #4265ed;
  color: #dddddd;
  font-size: 32px;
  font-weight: bold;
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
}
.user-info img {
  margin: 0 10px;
  color: #333333;
  font-weight: bold;
  width: 20px;
}
.user-info span {
  font-size: 100%;
}
</style>
