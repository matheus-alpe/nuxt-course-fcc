<script lang="ts" setup>
definePageMeta({
  middleware: 'logger'
})

const response = await $fetch('/api/hello')
console.log('response from server/api/hello:', response)

const response2 = await $fetch('/hello')
console.log('response from server/routes/hello:', response2)

const utils = useUtils()
utils.sayHello()
</script>

<template>
  <div>Index page {{ utils }}</div>
  <Alert />
  <img src="@/assets/blackat.png" />
</template>

