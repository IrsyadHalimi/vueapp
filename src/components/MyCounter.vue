<script setup>
import { customRef } from "vue";

const formatDate = (date, format) => {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  if (format == "MM-DD-YYYY")
    return date.toLocaleDateString('en-US', options).replace(/\//g, '-');
  else if (format == "DD-MM-YYYY")
    return date.toLocaleDateString('en-GB', options).replace(/\//g, '-');
  else if (format == "MM/DD/YYYY")
    return date.toLocaleDateString('en-US', options);
  else if (format == "DD/MM/YYYY")
    return date.toLocaleDateString('en-GB', options);
}

const useFormatDate = (date, format) => {
  return customRef((track, trigger) => {
    let value = date;
    return {
      get() {
        track();
        return formatDate(value, format);
      },
      set(newValue) {
        value = newValue;
        trigger();
      }
    };
  });
};

const date = new Date();

const dateMMDDYYYY = useFormatDate(date, "MM-DD-YYYY");
const dateDDMMYYYY = useFormatDate(date, "DD-MM-YYYY");
const dateMMDDYYYY_slash = useFormatDate(date, "MM/DD/YYYY");
const dateDDMMYYYY_slash = useFormatDate(date, "DD/MM/YYYY");

</script>
<template>
  <h3>MyCounter Component</h3>
  <hr>
  Current date: {{ date }}
  <hr>
  Date (MM-DD-YYYY) : <b>{{ dateMMDDYYYY }}</b>
  <br><br>
  Date (DD-MM-YYYY) : <b>{{ dateDDMMYYYY }}</b>
  <br><br>
  Date (MM/DD/YYYY) : <b>{{ dateMMDDYYYY_slash }}</b>
  <br><br>
  Date (DD/MM/YYYY) : <b>{{ dateDDMMYYYY_slash }}</b>
  <br><br>
</template>