<template>
  <teleport to="#modal">
    <div class="Dialog" v-if="isOpen">
      <h1><slot>this is dialog!!!</slot></h1>
      <button @click="buttonClick">close</button>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Dialog",
  props: {
    isOpen: Boolean,
  },
  emits: {
    "close-modal": null,
  },
  setup(props, context) {
    const buttonClick = () => {
      context.emit("close-modal");
    };
    return {
      buttonClick,
    };
  },
});
</script>

<style>
.Dialog {
  width: 200px;
  height: 200px;
  border: 1px solid #ccc;
  background: #fff;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -100px;
  margin-top: -100px;
}
</style>