<script setup>
import MyCountries from './components/MyCountries.vue';
import { ref } from 'vue';

const name = ref("");
</script>

<template>
  <b>Country</b>: <input type="text" v-model="name">
  <br>
  <MyCountries :name="name"/>
</template>

<style scoped>
</style>
