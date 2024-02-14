<script lang="ts" setup>
//const counter = useState('counter', () => Math.round(Math.random() * 1000))
const counter = useCounter()
</script>

<template>
    <div class="bg-black w-fit p-2 rounded-xl">
        Counter: {{ counter }}
        <button class="bg-red-400 size-8" @click="counter--">-</button>
        <button class="bg-blue-400 size-8" @click="counter++">+</button>
    </div>
</template>
