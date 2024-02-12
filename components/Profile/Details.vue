<script lang="ts" setup>
defineProps<{
    message?: string
}>();
</script>

<template>
    <div class="bg-pink-50 bg-opacity-5 p-2">{{ message }} details from profile</div>
</template>
