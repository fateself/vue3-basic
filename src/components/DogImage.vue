<template>
  <div>
    <img :src="result.message" alt="" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";
export default defineComponent({
  async setup() {
    const dogData = await axios.get("https://dog.ceo/api/breeds/image/random");
    // console.log(1111);
    console.log(dogData.data);
    return {
      result: dogData.data,
    };
  },
});
</script>

<style>
</style>