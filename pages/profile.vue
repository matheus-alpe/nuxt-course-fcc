<script lang="ts" setup>
import { useCounterStore } from '~/stores/myStore'
const counterStore = useCounterStore()

counterStore.$subscribe((counter) => console.log('notified', counter))
</script>

<template>
  <div class="main flex flex-col gap-2"> 
    <Profile />
    <ProfileDetails />
    count: {{ counterStore.count }}
    doubleCount: {{ counterStore.doubleCount }}
    <button @click="counterStore.increment">increment</button>
  </div>
</template>

<style></style>
