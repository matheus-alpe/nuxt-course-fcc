<script lang="ts" setup>
const route = useRoute();
console.log(toRaw(route))
</script>

<template>
    <NuxtLayout>
        <header>
            <ul class="flex gap-5 underline text-sky-50">
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>

                <li>
                    <NuxtLink to="/events">Events</NuxtLink>
                </li>

                <li>
                    <!-- <NuxtLink to="/events/123">Events [id]</NuxtLink> -->
                    <NuxtLink :to="{ name: 'events-id', params: { id: 2 }  }">Events [id]</NuxtLink>
                </li>

                <li>
                    <NuxtLink to="/events/profile">Profile</NuxtLink>
                </li>
            </ul>
        </header>
        <NuxtPage />
    </NuxtLayout>
</template>
