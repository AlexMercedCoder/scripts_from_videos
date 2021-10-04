<template>
  <div>
    <h1>Hello World</h1>
    <Counter cheese="gouda"/>
  </div>
</template>

<script>
import Counter from "./components/Counter.vue"

export default {
name: "App",
components: {
  Counter
}

}
</script>

<style>

</style>