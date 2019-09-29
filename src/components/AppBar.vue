<template>
  <nav>
    <div>
      A
      <span></span>
    </div>
    <div>
      F
      <span></span>
    </div>
    <div>
      A
      <span></span>
    </div>
    <div>
      A
      <span></span>
    </div>
    <div>
      R
      <span></span>
    </div>
    <div>
      A
      <span></span>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppBar"
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: #4265ed;
}
nav > div {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: rgba(255, 2555, 255, 0.9);
  color: #4265ed;
  font-size: 28px;
  font-weight: bold;
  margin: 0 2.5px;
}
nav > div > span {
  position: absolute;
  right: 1px;
  bottom: 1px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: rgba(255, 2555, 255, 0.9);
}
</style>
