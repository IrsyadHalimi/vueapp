<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const count = ref(0);
const props = defineProps(['index']);
const index = props.index || 1;

const emit = defineEmits(['incr']);

const increment = () => {
    count.value++;
    emit('incr', 1);
}
</script>

<template>
  <h3>{{ index }} - MyCounter Component</h3>
  Reactive variable count: <b>{{ count }}</b>
  <br/><br/>
  <button @click="increment()">count+1</button>
  <br>
</template>