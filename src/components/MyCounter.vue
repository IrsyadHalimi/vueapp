<script setup>
import { customRef } from "vue";

const count = customRef((track, trigger) => {
  let value = 0;
  return {
    get() {
      track();
      console.log("get value =", value);
      return value;
    },
    set(newValue) {
      value = newValue;
      trigger();
      console.log("set value =", value);
    }
  };
});

function increment() {
  console.log("before increment value");
  count.value += 1;
  console.log("after increment value");
}

</script>
<template>
  <h3>MyCounter Component</h3>
  Reactive variable count: <b>{{ count }}</b>
  <br />
  <button @click="increment">Count + 1</button>
</template>