<template>
    <div class='flex'>
        <div class="w-72 bg-white dark:bg-gray-900 border-e dark:border-gray-700 h-screen px-4 pt-4">
            <img src="/img/logoText.png" alt="logo">
            <div class="mt-10 mb-[23px]">
                <UInputMenu v-model="selected" :search="search" :loading="loading" placeholder="Search..."
                    option-attribute="name" by="id">
                    <!-- Icon ด้านซ้าย (เช่น แว่นขยาย) -->
                    <template #leading>
                        <UIcon name="i-heroicons-magnifying-glass" class="w-4 h-4 text-gray-400" />
                    </template>
                </UInputMenu>
            </div>
            <ul>
                <li>
                    <NuxtLink to="#" class="flex gap-2 items-center px-3 py-3 font-semibold rounded"
                        :class="{ 'bg-primary-app dark:text-black': $route.path === '/' }">
                        <UIcon name="i-heroicons-chart-pie" class="w-5 h-5" /> Dashboard
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="#" class="flex gap-2 items-center px-3 py-3 font-semibold rounded"
                        :class="{ 'bg-primary-app dark:text-black': $route.path === '/pages' }">
                        <UIcon name="i-heroicons-document" class="w-5 h-5" /> Pages
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="#" class="flex gap-2 items-center px-3 py-3 font-semibold rounded"
                        :class="{ 'bg-primary-app dark:text-black': $route.path === '/post' }">
                        <UIcon name="i-heroicons-computer-desktop" class="w-5 h-5" /> Post
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="#" class="flex gap-2 items-center px-3 py-3 font-semibold rounded"
                        :class="{ 'bg-primary-app dark:text-black': $route.path === '/media' }">
                        <UIcon name="i-heroicons-photo" class="w-5 h-5" /> Media
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="#" class="flex gap-2 items-center px-3 py-3 font-semibold rounded"
                        :class="{ 'bg-primary-app dark:text-black': $route.path === '/user-and-role' }">
                        <UIcon name="i-heroicons-user-group" class="w-5 h-5" /> User & Role
                    </NuxtLink>
                    <NuxtLink to="/setting" class="flex gap-2 items-center px-3 py-3 font-semibold rounded"
                        :class="{ 'bg-primary-app dark:text-black': $route.path === '/setting' }">
                        <UIcon name="i-heroicons-cog-20-solid" class="w-5 h-5" /> Setting
                    </NuxtLink>
                </li>
            </ul>
        </div>
        <div class="flex-1 overflow-y-auto bg-slate-50 dark:bg-gray-800 h-screen">
            <nav
                class="flex items-center justify-between h-[60px] bg-white dark:bg-gray-900 border-b dark:border-gray-700 px-8">
                <div class="flex items-center gap-2">
                    <button class="flex items-center">
                        <UIcon name="i-heroicons-bars-3-20-solid" class="w-6 h-6 opacity-40" />
                    </button>
                    <p class="mt-1 font-medium hidden md:block">National Telecom Public Company Limited</p>
                </div>
                <div class="flex items-center">
                    <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
                        <span class="flex items-center gap-2"">
                            <UAvatar
                                size="sm"
                                src="https://avatars.githubusercontent.com/u/739984?v=4"
                                alt="Avatar"
                            />
                            Howdy , National Telecom
                            <UIcon name="i-heroicons-chevron-down-20-solid" class="w-5 h-5 opacity-40 -mt-1" />
                        </span>
                    </UDropdown>
                </div>
            </nav>
            <div class="px-8 py-8 flex justify-center">
                <div class=" max-w-[1280px] w-full">
                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const loading = ref(false)
const selected = ref()

const items = [
    [{
        label: 'Profile',
        avatar: {
            src: 'https://avatars.githubusercontent.com/u/739984?v=4'
        }
    }], [{
        label: 'Edit',
        icon: 'i-heroicons-pencil-square-20-solid',
        shortcuts: ['E'],
        click: () => {
            console.log('Edit')
        }
    }, {
        label: 'Duplicate',
        icon: 'i-heroicons-document-duplicate-20-solid',
        shortcuts: ['D'],
        disabled: true
    }], [{
        label: 'Archive',
        icon: 'i-heroicons-archive-box-20-solid'
    }, {
        label: 'Move',
        icon: 'i-heroicons-arrow-right-circle-20-solid'
    }], [{
        label: 'Delete',
        icon: 'i-heroicons-trash-20-solid',
        shortcuts: ['⌘', 'D']
    }]
]

async function search(q: string) {
    loading.value = true

    const users: any[] = await $fetch('https://jsonplaceholder.typicode.com/users', { params: { q } })

    loading.value = false

    return users
}
</script>


<style scoped>
div {
    font-family: "NTR", sans-serif;
}
</style>