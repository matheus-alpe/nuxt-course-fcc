<script lang="ts" setup>
const { data, pending } = useFetch('/api/products')
</script>

<template>
  <h1>Products list</h1>
  <p v-if="pending">loading...</p>
  <pre v-else>{{ data }}</pre>
</template>
