<script setup>
import { ref, computed } from 'vue';
import MyCounter from './components/MyCounter.vue';

const count = ref(0);
const doubleCount = computed(() => count.value * 2);
const increment = () => {
  count.value++;
};
</script>

<template>
  <MyCounter :count="count" :doubleCount="doubleCount"/>
  <br /><br />
  <button @click="increment()">count+1</button>
</template>

<style scoped>
</style>
