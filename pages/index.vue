<script lang="ts" setup>
const utils = useUtils()
utils.sayHello()
</script>

<template>
  <div>Index page {{ utils }}</div>
  <Alert />
  <img src="@/assets/blackat.png" />
</template>

