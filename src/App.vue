<script setup>
import MyCounter from './components/MyCounter.vue';
import { ref, provide, onMounted } from 'vue';

const name = ref("");
provide("name", name);

onMounted(()=>document.querySelector("input[type=text]").focus());
</script>

<template>
  <MyCounter />
</template>

<style scoped>
</style>
