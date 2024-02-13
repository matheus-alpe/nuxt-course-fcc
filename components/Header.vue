<script lang="ts" setup>

</script>

<template>
    <header class="bg-white bg-opacity-10 p-2 rounded-md mb-5">
        <ul class="flex gap-5 underline text-sky-50">
            <li>
                <NuxtLink to="/">Home</NuxtLink>
            </li>

            <li>
                <NuxtLink to="/profile">Profile</NuxtLink>
            </li>

            <li>
                <NuxtLink to="/events">Events</NuxtLink>
            </li>

            <li>
                <!-- <NuxtLink to="/events/123">Events [id]</NuxtLink> -->
                <NuxtLink :to="{ name: 'events-id', params: { id: 2 } }">Events [id]</NuxtLink>
            </li>

            <li>
                <NuxtLink to="/events/profile">Events/Profile</NuxtLink>
            </li>

            <li>
                <NuxtLink to="/custom">Custom</NuxtLink>
            </li>

            <li>
                <NuxtLink to="/plugins">Plugins</NuxtLink>
            </li>
        </ul>
    </header>
</template>
