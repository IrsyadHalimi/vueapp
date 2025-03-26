<script setup>
import MyCountries from './components/MyCountries.vue';
import { ref, provide } from 'vue';

const name = ref("");
provide("name", name);
</script>

<template>
  <b>Country</b>: <input type="text" v-model="name">
  <br>
  <MyCountries />
</template>

<style scoped>
</style>
