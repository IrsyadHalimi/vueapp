<script setup>
import { defineProps, ref, onMounted, watch } from 'vue';
const props = defineProps(['name']);

const names = ref([]);

let countries = [];

onMounted(() => {
    var url = "https://restcountries.com/v3.1/all";
    fetch(url)
        .then((res) => res.text())
        .then((data) => {
            countries = JSON.parse(data).map(function(elem) {
            return elem.name.common;
        });
        countries = countries.sort((n1, n2) => {
            if (n1 > n2) return 1;
            if (n1 < n2) return -1;
            return 0;
        });
        names.value = countries;
    })
    .catch((err) => names.value = [err.toString()]);
});

watch(()=>props.name, (newName) => {
    let countriesFiltered = countries.filter((n) => {
        const reg = new RegExp("^" + newName, "i");
        if (n.match(reg)) return true;
        else return false;
    });
    names.value = countriesFiltered;
});

</script>

<template>
  <h3>Country List</h3>
  <div v-show="!countries.length">Fetching countries in progres...</div>
  Entered Country: {{ name }}
  <ul>
    <li v-for="n in names" :key="n">{{ n }}</li>
  </ul>
</template>