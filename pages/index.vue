<script lang="ts" setup>
definePageMeta({
  middleware: 'logger'
})
const utils = useUtils()
utils.sayHello()
</script>

<template>
  <div>Index page {{ utils }}</div>
  <Alert />
  <img src="@/assets/blackat.png" />
</template>

