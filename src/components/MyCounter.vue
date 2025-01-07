<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

let timer;

const count = ref(0);

const doubleCount = computed(() => count.value * 2);

const increment = () => {
  count.value++;
};

const start = () => {
  timer = setInterval(function() {
    increment();
  }, 1000);
};

const stop = () => {
  clearInterval(timer);
};

onMounted(() => {
  start();
});

onUnmounted(() => {
  stop();
});

</script>
<template>
  <h3>MyCounter Component</h3>
  Reactive variable count: <b>{{ count }}</b>
  <br />
  Computed variable doubleCount : <b>{{ doubleCount }}</b>
</template>