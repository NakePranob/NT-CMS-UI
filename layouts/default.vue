<template>
    <div class='flex'>
        <div class="w-72 bg-white border-e dark:border-gray-700 h-screen px-4 pt-4">
            <img src="/img/logoText.png" alt="logo">
            <div class="mt-10 mb-[23px]">
                <UInputMenu
                    v-model="selected"
                    :search="search"
                    :loading="loading"
                    placeholder="Search..."
                    option-attribute="name"
                    trailing
                    by="id"
                />
            </div>
            <ul>
                <li>
                    <NuxtLink to="/login1" class="flex gap-2 items-center px-3 py-3 text-sm rounded" 
                    :class="{'bg-primary-app': $route.path === '/'}">
                        <UIcon name="i-heroicons-chart-pie" class="w-5 h-5" /> Dashboard 
                    </NuxtLink>
                </li>
            </ul>
        </div>
        <div class="flex-1 overflow-y-auto px-8 bg-slate-50 h-screen">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
const loading = ref(false)
const selected = ref()

async function search(q: string) {
  loading.value = true

  const users: any[] = await $fetch('https://jsonplaceholder.typicode.com/users', { params: { q } })

  loading.value = false

  return users
}
</script>