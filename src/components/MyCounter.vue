<script setup>
import { ref } from 'vue';

const count = ref(0);
const message = ref("");

const verifyKey = () => {
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const moves = ["Backspace", "ArrowLeft", "ArrowRight", "Delete", "Tab", "Home", "End"];
    let authorized;
    authorized = [...numbers, ...moves];
    if (!authorized.includes(event.key)) event.preventDefault()
}

const verifyMax100 = () => {
    message.value = "";
    if (parseInt(event.target.value) > 100) message.value = "Do not exceed 100!";
}

const eraseField = () => {
    event.target.value = "";
    count.value = "";
    message.value = "";
}
</script>

<template>
  <h3>MyCounter Component</h3>
  Reactive variable count: <input type="text" v-model="count" @keydown="verifyKey()"
  @input="verifyMax100()"
  @focus="eraseField()"/>
  <br/><br/>
  Entered value: <b>{{ count }}</b>
  <br/><br/>
  message: <b>{{ message }}</b>
</template>