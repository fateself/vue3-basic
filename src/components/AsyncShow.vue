<template>
  <div class="AsyncShow">{{ result }}</div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "AsyncShow",
  setup() {
      console.log(1111)
    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve({
          result: 41,
        });
      }, 3000);
    });
  },
});
</script>

<style>
</style>