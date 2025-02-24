<script setup>
import { ref } from "vue"
const name = ref("");
let dates = [];
for (let year=2023; year > 1900; year--) dates.push(year);
const birthdate = ref("");
const maritalStatus = ref("");
const acceptConditions = ref([]);
</script>
<template>
    <h3>Input Form</h3>
    Name: <input type="text" v-model="name" />
    <br /><br />
    Date of Birth: 
    <select v-model="birthdate">
        <option v-for="date in dates" :value="date" :key="date">{{ date }}</option>
    </select>
    Marital Status:
    <input type="radio" value="M" id="maried" v-model="maritalStatus">
    <label for="maried">Married</label>
    <input type="radio" value="S" id="single" v-model="maritalStatus">
    <label for="single">Single</label>
    <input type="radio" value="D" id="divorced" v-model="maritalStatus">
    <label for="divorced">Divorced</label>
    <input type="radio" value="W" id="widowed" v-model="maritalStatus">
    <label for="widowed">Widowed</label>
    <br/><br/>
    <input type="checkbox" id="read" value="read" v-model="acceptConditions" />
    <label for="read">I have read the terms of use.</label>
    <br/><br/>
    <input type="checkbox" id="accept" value="accept" v-model="acceptConditions" />
    <label for="accept">I accept the general terms and conditions of sale.</label>
    <br/><br/>
    <h3>Reactive Variables</h3>
    name: <b>{{ name }}</b>
    <br /><br />
    birthdate: <b>{{ birthdate }}</b>
    <br /><br />
    maritalStatus: <b>{{ maritalStatus }}</b>
    <br /><br />
    acceptConditions: <b>{{ acceptConditions }}</b>
    <br /><br />
</template>
<style scoped>
h3 {
    background-color: gainsboro;
    padding: 5px;
}
</style>