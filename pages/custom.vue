<script lang="ts" setup>
definePageMeta({
  layout: 'custom',
})

const counter = useCounter()
const otherCounter = useState<number>('counter')
</script>

<template>
  <div>custom page</div>

  ---

  <Counter />

  ---

  <div class="bg-gray-500 w-fit p-2 rounded-xl">
    Counter: {{ counter }}
    <button class="bg-red-400 size-8" @click="counter--">-</button>
    <button class="bg-blue-400 size-8" @click="counter++">+</button>
  </div>

  ---

  <div class="bg-violet-500 w-fit p-2 rounded-xl">
    otherCounter: {{ otherCounter }}
    <button class="bg-red-400 size-8" @click="otherCounter--">-</button>
    <button class="bg-blue-400 size-8" @click="otherCounter++">+</button>
  </div>
</template>

<style></style>
