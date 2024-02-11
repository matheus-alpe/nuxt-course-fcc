<script lang="ts" setup>
const nuxt = useNuxtApp()
const route = useRoute();
console.log(route.params, nuxt)
</script>

<template>
  <div>
    event: id: {{ $route.params.id }}
  </div>
</template>

