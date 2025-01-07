<script setup>
import useMaximum from "../composables/useMaximum.js";

const maximum = 10;

const count = useMaximum(maximum);

function increment() {
  count.value += 1;
}

function decrement() {
  count.value -= 1;
}

</script>
<template>
  <h3>MyCounter Component</h3>
  Reactive variable count: <b>{{ count }}</b>
  <br><br>
  Maximum: <b>{{ maximum }}</b>
  <br><br>
  <button @click="increment">count + 1</button>
  &nbsp;
  <button @click="decrement">count - 1</button>
</template>