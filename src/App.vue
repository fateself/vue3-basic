<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <h1>{{ count }}</h1>
  <h1>{{ error }}</h1>
  <Suspense>
    <!-- Suspense里面template必须有根节点，要不就不能显示多个组件！！！！！！ -->
    <template #default>
      <div>
        <async-show />
        <dog-image />
      </div>
    </template>
    <template #fallback>
      <div><h1>loading!!!!</h1></div>
    </template>
  </Suspense>
  <button @click="increase">+1</button>
  <button @click="openDialog">Open</button>
  <Dialog :isOpen="isOpen" @close-modal="closeDialog">My dialog!!!</Dialog>
  <h1>x:{{ x }} y:{{ y }}</h1>
  <h1 v-if="isloading">isloading</h1>
  <img v-if="loaded" :src="result.message" alt="" />
  <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";
// import HelloWorld from "./components/HelloWorld.vue";

import { ref, onMounted, onUnmounted, onErrorCaptured } from "vue";
import useMousePosition from "./hooks/useMousePosition";
import useLoading from "./hooks/useLoading";
import Dialog from "./components/Dialog.vue";
import AsyncShow from "./components/AsyncShow.vue";
import DogImage from "./components/DogImage.vue";
interface DogResult {
  message: string;
  status: string;
}
export default defineComponent({
  name: "App",
  components: {
    Dialog,
    AsyncShow,
    DogImage,
  },
  setup() {
    const isOpen = ref(false);
    const openDialog = () => {
      isOpen.value = true;
    };
    const closeDialog = () => {
      isOpen.value = false;
    };
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
    const error = ref(null);
    //检验请求错误
    onErrorCaptured((e: any) => {
      error.value = e;
      return true;
    });
    return {
      count,
      increase,
      x,
      y,
      result,
      isloading,
      loaded,
      isOpen,
      openDialog,
      closeDialog,
      error,
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
