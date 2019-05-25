<template>
  <div id="app">
    <div class="main">
      <headers></headers>
      <router-view name="slideBar"></router-view>
      <router-view name="main"></router-view>
    </div>
  </div>
</template>

<script>
import headers from "./components/headers";
import postList from "./components/postList";
import articlee from "./components/postList";
import userInfo from "./components/userInfo";
import slideBar from "./components/slideBar";
export default {
  name: "App",
  components: {
    headers,
    postList,
    articlee,
    userInfo,
    slideBar
  }
};
</script>

<style>
*{
  margin: 0;padding: 0;
}
#app{
  background-color: #e1e1e1;
}
.main{
  width: 100%;
  margin: 0 auto;
}
</style>
