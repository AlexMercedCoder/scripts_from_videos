<template>
  <div>
    <h1 @click="addOne">{{ counter }}</h1>
    <h2>{{ cheese }}</h2>
    <h3 v-for="num in arr" :key="num">{{num}}</h3>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Counter",
  props: ["cheese"],
  setup() {
    const counter = ref(0);

    const addOne = () => (counter.value += 1);

    const arr = ref([1,2,3,4])

    return { counter, addOne, arr };
  },
};
</script>

<style></style>
