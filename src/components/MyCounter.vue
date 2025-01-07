<script setup>
import { ref, computed, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from "vue";

console.log("setup: The component is created in memory");

const count = ref(0);

const doubleCount = computed(function() {
  return count.value * 2;
});

const increment = () => {
  count.value++;
};

onBeforeMount(() => {
  console.log("onBeforeMount: The component is about to be mounted in the DOM.");
});

onMounted(() => {
  console.log("onMounted: The component has been mounted in the DOM");
});

onBeforeUpdate(() => {
  console.log("onBeforeUpdate: The component is about to be updated.");
});

onUpdated(() => {
  console.log("onUpdated: The component has been updated.");
});

onBeforeUnmount(() => {
  console.log("onBeforeUnmount: The component is about to be unmounted.");
});

onUnmounted(() => {
  console.log("onUnmounted: The component has been unmounted.");
})

</script>
<template>
  <h3>MyCounter Component</h3>
  Reactive variable count: <b>{{ count }}</b>
  <br />
  Computed variable doubleCount : <b>{{ doubleCount }}</b>
  <br /><br />
  <button @click="increment()">Count+1</button>
</template>