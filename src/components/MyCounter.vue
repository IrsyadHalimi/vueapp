<script setup>
import { ref, computed } from 'vue';

const count = ref(0);
const doubleCount = computed(() => count.value * 2);

</script>

<template>
  <h3>MyCounter Component</h3>
  Reactive variable count: <b>{{ count }}</b>
  <br />
  Computed variable doubleCount: <b>{{ doubleCount }}</b>
  <br /><br />
  Input for count (using v-bind): <input type="text" :value="count"/>
  <br/><br/>
  Input for count (using v-model): <input type="text" v-model="count">
</template>