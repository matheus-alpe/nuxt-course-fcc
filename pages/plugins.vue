<script lang="ts" setup>
const { $pluginPrintNuxtApp } = useNuxtApp()
$pluginPrintNuxtApp()
</script>

<template>

  <div>
    <h1 class="text-xl font-bold">
      {{ $sayHello('Matheus') }}
    </h1>

    <input class="bg-black" type="text" v-focus />
  </div>
</template>

<style>

</style>
