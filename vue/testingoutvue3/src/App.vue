<template>
<div>
<h1>{{counter}}</h1>
<button @click="addOne">add One</button>
</div>
</template>

<script>
import {ref} from "vue"

export default {
  name: "counter",
  setup(){
    const counter = ref(0)
    const addOne = () => {
      counter.value = counter.value + 1
    }

    return {
      counter,
      addOne
    }
  }
}
</script>

<style>

</style>
