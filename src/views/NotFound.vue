<template>
  <div class="not-found-container">
    <div class="home-wrapper">
      <div class="home-content">
        <h1>NOT FOUND</h1>
        <h3>ERROR : 404</h3>
        <button @click="backHome">Go to Login</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();

const backHome = () => {
  router.push("/login");
};
</script>

<style scoped>
.not-found-container {
  background-color: whitesmoke;
  overflow: hidden;
}
.home-wrapper {
  background-color: black;
  background-size: cover;
  height: 100vh;
  color: #fff;
}
.home-wrapper h1,
.home-wrapper h3 {
  text-align: center;
  color: red;
}
.home-wrapper h1 {
  padding-top: 15rem;
  font-size: 5rem;
}
button {
  color: white;
  background-color: #2a6fb5;
  padding: 10px 40px;
  border: none;
  border-radius: 4px;
  margin: 2rem 0 0 35rem;
}
</style>