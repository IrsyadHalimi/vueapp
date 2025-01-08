<script setup>
import { defineProps, onUpdated } from 'vue';

const props = defineProps(["count", "doubleCount"]);

console.log("setup: count = ", props.count);

onUpdated(() => {
  console.log("updated: count = ", props.count);
})

</script>

<template>
  <h3>MyCounter Component</h3>
  Reactive variable count: <b>{{ count }}</b>
  <br />
  Computed variable doubleCount: <b>{{ doubleCount }}</b>
  <br />
  Input : <input type="text" v-bind:value="count" />
</template>