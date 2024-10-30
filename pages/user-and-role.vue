<template>
    <div class="w-full pb-16">
        <div class="flex  gap-4 -mt-[1px] justify-end">
            <ScreenOptions />
            <MenuHelp />
        </div>
        <div class="flex justify-between mb-8">
            <div>
                <h1 class="text-3xl font-semibold">User & Role</h1>
                <p class="underline opacity-40">
                    All (14) | Adminstrator (12) | Author (1)
                </p>
            </div>
            <UButton type="submit" :ui="{ rounded: 'rounded' }" leading-icon="i-heroicons-pencil-square"
                class="text-black border-[3px] border-primary-app-100 dark:border-primary-app-800 mt-6">
                Add New Post
            </UButton>
        </div>
        <div class="flex justify-between">
            <div class="flex gap-2">
                <USelectMenu v-model="bulkSelected" :options="bulk" multiple placeholder="Bulk actions"/>
                <UButton label="Apply" class="text-black"/>
                <USelectMenu v-model="roleSelected" :options="role" multiple placeholder="Change role to.."/>
                <UButton label="Filter" class="text-black"/>
            </div>
            <div class="flex gap-2">
                <UInput icon="i-heroicons-magnifying-glass" placeholder="Search..."/>
                <UButton label="Search" class="text-black"/>
            </div>
        </div>
        <div class="flex justify-end opacity-60 py-2 pe-4">
            10 item
        </div>
        <div class="border shadow-sm rounded-md">
            <UTable v-model="selected" :rows="people" :columns="columns" @select="select">
                <template #username-data="{ row }">
                    <div class="flex items-center gap-3 -my-2">
                        <div class="w-14 h-14 rounded bg-slate-100 flex justify-center items-center">
                            <img v-if="row.image" :src="row.image" :alt="row.username"
                                class="w-full h-full rounded object-cover">
                            <UIcon v-else name="i-heroicons-user" class="w-4 h-4" />
                        </div>
                        <span class="font-medium">{{ row.username }}</span>
                    </div>
                </template>
            </UTable>
            <div class="p-3 border-t">
                <UPagination v-model="page" :page-count="pageCount" :total="people.length" :ui="{
                    wrapper: 'flex items-center gap-1',
                    rounded: '!rounded-full min-w-[32px] justify-center ring-0',
                }"/>
            </div>
        </div>
    </div>
</template>

<script setup>
const columns = [{
    key: 'username',
    label: 'Username',
    sortable: true
}, {
    key: 'name',
    label: 'Name'
}, {
    key: 'email',
    label: 'Email'
}, {
    key: 'role',
    label: 'Role'
}, {
    key: 'post',
    label: 'Post'
}]
const people = [{
    username: 'admin',
    name: 'Lindsay Walton',
    email: 'lindsay.walton@example.com',
    role: 'editer',
    post: 7,
    image: '/img/logo.png'
}, {
    username: 'user',
    name: 'Courtney Henry',
    email: 'courtney.henry@example.com',
    role: 'Admin',
    post: 4,
    image: ''
}]

const page = ref(1)
const pageCount = 1

const rows = computed(() => {
  return people.slice((page.value - 1) * pageCount, (page.value) * pageCount)
})

function select(row) {
    const index = selected.value.findIndex(item => item.id === row.id)
    if (index === -1) {
        selected.value.push(row)
    } else {
        selected.value.splice(index, 1)
    }
}

const selected = ref([])

const bulk = ['Wade Cooper', 'Arlene Mccoy', 'Devon Webb']
const bulkSelected = ref([])

const role = ['Admin', 'Menager', 'Editer']
const roleSelected = ref([])

</script>