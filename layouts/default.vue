<template>
    <div class='flex'>
        <span @click="isOpen = !isOpen" class="lg:hidden fixed top-0 left-0 w-screen h-screen bg-slate-500/20 dark:bg-slate-800/20 z-10"
        :class="{'hidden': !isOpen}"></span>
        <div class="w-72 fixed top-0 border-e dark:border-gray-700 h-screen px-4 pt-4 backdrop-blur-3xl z-20 bg-white/80 dark:bg-neutral-950/0
        transition-all duration-300 ease-in-out shadow-xl lg:shadow-none"
            :class="{
            '-left-72': !isOpen,
            'left-0': isOpen
            }"
        >
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
            <ul class="flex flex-col gap-2">
                <li>
                    <NuxtLink to="/" class="flex gap-2 items-center px-3 py-3 font-semibold rounded"
                        :class="{ 'bg-primary-app dark:text-black': $route.path === '/' }">
                        <UIcon name="i-heroicons-chart-pie" class="w-5 h-5" /> Dashboard
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/page" class="flex gap-2 items-center px-3 py-3 font-semibold rounded"
                        :class="{ 'bg-primary-app dark:text-black': $route.path === '/pages' }">
                        <UIcon name="i-heroicons-document" class="w-5 h-5" /> Pages
                    </NuxtLink>
                </li>
                <li>
                    <button @click="isPostOpen = !isPostOpen" class="flex justify-between w-full items-center px-3 py-3 font-semibold rounded"
                        :class="{ 'bg-primary-app dark:text-black': isPostOpen }">
                        <div class="flex items-center gap-2"">
                            <UIcon name="i-heroicons-computer-desktop" class="w-5 h-5" /> Post
                        </div>
                        <UIcon name="i-heroicons-chevron-down-20-solid" class="w-5 h-5 opacity-40 -mt-1 dark:text-black" 
                        :class="{ 'rotate-180': isPostOpen }"/>
                    </button>
                    <div class="flex flex-col gap-3 rounded overflow-hidden bg-slate-100 lg:bg-slate-50 transition-all duration-300 ease-in-out"
                    :class="{ 'opacity-0 h-0': !isPostOpen, 'opacity-100 h-[112px] px-4 py-2 mt-1': isPostOpen }">
                        <NuxtLink 
                            to="/post"
                            :class="{
                                'opacity-60': $route.path !== '/post'
                            }"
                        >
                            All Post
                        </NuxtLink>
                        <NuxtLink 
                            to="#"
                            :class="{
                                'opacity-60': $route.path !== '/add-post'
                            }"
                        >
                            Add New
                        </NuxtLink>
                        <NuxtLink 
                            to="#"
                            :class="{
                                'opacity-60': $route.path !== '/category'
                            }"
                        >
                            Category
                        </NuxtLink>
                    </div>
                </li>
                <li>
                    <NuxtLink to="#" class="flex gap-2 items-center px-3 py-3 font-semibold rounded"
                        :class="{ 'bg-primary-app dark:text-black': $route.path === '/media' }">
                        <UIcon name="i-heroicons-photo" class="w-5 h-5" /> Media
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/user-and-role" class="flex gap-2 items-center px-3 py-3 font-semibold rounded"
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
        <div class="flex-1 overflow-y-auto h-screen flex justify-end">
            <nav class="z-10 flex items-center justify-between h-[60px] backdrop-blur-3xl
            border-b dark:border-gray-700 px-2 sm:px-8 fixed top-0 right-0 w-full transition-all duration-300 ease-in-out"
            :class="{
                'lg:w-[calc(100%-288px)]': isOpen
            }">
                <div class="flex items-center gap-2">
                    <button class="flex items-center" @click="isOpen = !isOpen">
                        <UIcon v-if="!isOpen" name="i-heroicons-bars-3-20-solid" class="w-6 h-6 opacity-40" />
                        <UIcon v-else name="i-heroicons-x-mark-20-solid" class="w-7 h-7 opacity-40" />
                    </button>
                    <p class="mt-[3px] font-medium">National Telecom Public Company Limited</p>
                </div>
                <div class="flex items-center gap-2">
                    <UAvatar
                        size="sm"
                        src="https://avatars.githubusercontent.com/u/739984?v=4"
                        alt="Avatar"
                    />
                    <p class="hidden sm:block">Howdy , National Telecom</p>
                    <UDropdown :items="items" :popper="{ placement: 'bottom-start' }" class="flex items-center gap-2">
                        <UIcon name="i-heroicons-chevron-down-20-solid" class="w-5 h-5 opacity-40 -mt-1" />
                    </UDropdown>
                </div>
            </nav>
            <div class="px-2 sm:px-8 flex justify-center mt-[60px]
            transition-all duration-300 ease-in-out"
            :class="{
                'w-full lg:w-[calc(100%-288px)]': isOpen,
                'w-full': !isOpen
            }">
                <div class="w-full max-w-[1280px]">
                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const loading = ref(false)
const selected = ref()
const isOpen = ref(false)
const isPostOpen = ref(false)

onMounted(() => {
  isOpen.value = window.innerWidth > 1024;
});

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