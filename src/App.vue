<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <h1>{{ count }}</h1>
  <button @click="increase">+1</button>
  <h1>x:{{ x }} y:{{ y }}</h1>
  <h1 v-if="isloading">isloading</h1>
  <img v-if="loaded" :src="result.message" alt="" />
  <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";
// import HelloWorld from "./components/HelloWorld.vue";

import { ref, onMounted, onUnmounted } from "vue";
import useMousePosition from "./hooks/useMousePosition";
import useLoading from "./hooks/useLoading";
interface DogResult {
  message: string;
  status: string;
}
export default defineComponent({
  name: "App",
  setup() {
    const count = ref(0);
    const increase = () => {
      console.log(count);
      count.value++;
    };
    const { x, y } = useMousePosition();
    const { result, isloading, loaded } = useLoading<DogResult>(
      "https://dog.ceo/api/breeds/image/random"
    );
    watch(result, () => {
      console.log(result.value?.message);
    });
    return {
      count,
      increase,
      x,
      y,
      result,
      isloading,
      loaded,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
