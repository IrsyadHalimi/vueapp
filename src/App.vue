<script setup>
import MyCounters from './components/MyCounters.vue';
import { ref, provide } from 'vue';

const total = ref(0);

provide('total', total);
</script>

<template>
  <MyCounters :nb="3" />
  <br/><hr/><br/>
  Overall Total: <b>{{ total }}</b>
</template>

<style scoped>
</style>
