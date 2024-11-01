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
        <div class="flex flex-col gap-2 md:flex-row justify-between">
            <div class="flex gap-2">
                <UDropdown :items="bulks" :popper="{ placement: 'bottom-start' }">
                    <UButton color="white" label="Bilk Action" trailing-icon="i-heroicons-chevron-down-20-solid" />
                </UDropdown>
                <UButton label="Apply" class="text-black" />
                <USelectMenu v-model="roleSelected" :options="role" multiple placeholder="Change role to.." />
                <UButton label="Filter" class="text-black" @click="filteredRows" />
            </div>
            <div class="flex gap-2">
                <UInput v-model="q" icon="i-heroicons-magnifying-glass" placeholder="Search..." />
                <UButton label="Search" class="text-black" @click="filteredRows" />
            </div>
        </div>
        <div class="flex justify-end opacity-60 py-2 pe-4">
            {{ pageCount }} item
        </div>
        <div class="border dark:border-gray-700 shadow-sm rounded-md">
            <UTable v-model="selected" :rows="rows" :columns="columns" @select="select">
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
            <div class="p-3 border-t dark:border-gray-700">
                <UPagination v-model="page" :page-count="pageCount" :total="peopleCount" :ui="{
                    wrapper: 'flex items-center gap-1',
                    rounded: '!rounded-full min-w-[32px] justify-center ring-0',
                }" />
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
const people = [
    {
        username: 'admin',
        name: 'Lindsay Walton',
        email: 'lindsay.walton@example.com',
        role: 'Editer',
        post: 0,
        image: '/img/404.jpg'
    },
    {
        username: 'user',
        name: 'Courtney Henry',
        email: 'courtney.henry@example.com',
        role: 'Admin',
        post: 1,
        image: ''
    },
    {
        username: 'admin',
        name: 'Lindsay Walton',
        email: 'lindsay.walton@example.com',
        role: 'Editer',
        post: 2,
        image: '/img/404.jpg'
    },
    {
        username: 'user',
        name: 'Courtney Henry',
        email: 'courtney.henry@example.com',
        role: 'Admin',
        post: 3,
        image: ''
    },
    {
        username: 'admin',
        name: 'Lindsay Walton',
        email: 'lindsay.walton@example.com',
        role: 'Editer',
        post: 4,
        image: '/img/404.jpg'
    },
    {
        username: 'user',
        name: 'Courtney Henry',
        email: 'courtney.henry@example.com',
        role: 'Admin',
        post: 5,
        image: ''
    },
    {
        username: 'admin',
        name: 'Lindsay Walton',
        email: 'lindsay.walton@example.com',
        role: 'Editer',
        post: 6,
        image: '/img/404.jpg'
    },
    {
        username: 'user',
        name: 'Courtney Henry',
        email: 'courtney.henry@example.com',
        role: 'Admin',
        post: 7,
        image: ''
    },
    {
        username: 'admin',
        name: 'Lindsay Walton',
        email: 'lindsay.walton@example.com',
        role: 'Editer',
        post: 0,
        image: '/img/404.jpg'
    },
    {
        username: 'user',
        name: 'Courtney Henry',
        email: 'courtney.henry@example.com',
        role: 'Admin',
        post: 1,
        image: ''
    },
    {
        username: 'admin',
        name: 'Lindsay Walton',
        email: 'lindsay.walton@example.com',
        role: 'Editer',
        post: 2,
        image: '/img/404.jpg'
    },
    {
        username: 'user',
        name: 'Courtney Henry',
        email: 'courtney.henry@example.com',
        role: 'Admin',
        post: 3,
        image: ''
    },
    {
        username: 'admin',
        name: 'Lindsay Walton',
        email: 'lindsay.walton@example.com',
        role: 'Editer',
        post: 4,
        image: '/img/404.jpg'
    },
    {
        username: 'user',
        name: 'Courtney Henry',
        email: 'courtney.henry@example.com',
        role: 'Admin',
        post: 5,
        image: ''
    },
    {
        username: 'admin',
        name: 'Lindsay Walton',
        email: 'lindsay.walton@example.com',
        role: 'Editer',
        post: 6,
        image: '/img/404.jpg'
    },
    {
        username: 'user',
        name: 'Courtney Henry',
        email: 'courtney.henry@example.com',
        role: 'Admin',
        post: 7,
        image: ''
    },
    {
        username: 'admin',
        name: 'Lindsay Walton',
        email: 'lindsay.walton@example.com',
        role: 'Editer',
        post: 0,
        image: '/img/404.jpg'
    },
    {
        username: 'user',
        name: 'Courtney Henry',
        email: 'courtney.henry@example.com',
        role: 'Admin',
        post: 1,
        image: ''
    },
    {
        username: 'admin',
        name: 'Lindsay Walton',
        email: 'lindsay.walton@example.com',
        role: 'Editer',
        post: 2,
        image: '/img/404.jpg'
    },
    {
        username: 'user',
        name: 'Courtney Henry',
        email: 'courtney.henry@example.com',
        role: 'Admin',
        post: 3,
        image: ''
    },
    {
        username: 'admin',
        name: 'Lindsay Walton',
        email: 'lindsay.walton@example.com',
        role: 'Editer',
        post: 4,
        image: '/img/404.jpg'
    },
    {
        username: 'user',
        name: 'Courtney Henry',
        email: 'courtney.henry@example.com',
        role: 'Admin',
        post: 5,
        image: ''
    },
    {
        username: 'admin',
        name: 'Lindsay Walton',
        email: 'lindsay.walton@example.com',
        role: 'Editer',
        post: 6,
        image: '/img/404.jpg'
    },
    {
        username: 'user',
        name: 'Courtney Henry',
        email: 'courtney.henry@example.com',
        role: 'Admin',
        post: 7,
        image: ''
    },
]

const page = ref(1)
const peopleCount = ref(people.length)
const pageCount = 4

const rows = ref([])

function select(row) {
    const index = selected.value.findIndex(item => item.id === row.id)
    if (index === -1) {
        selected.value.push(row)
    } else {
        selected.value.splice(index, 1)
    }
}

const selected = ref([])

const bulks = [
   [{
        label: 'Archive',
        icon: 'i-heroicons-archive-box-20-solid'
    }, {
        label: 'Set Publish Date',
        icon: 'i-heroicons-arrow-right-circle-20-solid'
    }], [{
        label: 'Delete',
        icon: 'i-heroicons-trash-20-solid'
    }]
]

const role = ['Admin', 'Menager', 'Editer']
const roleSelected = ref([])

const q = ref('')

onMounted(() => {
    filteredRows()
})

watch([page], () => {
    filteredRows()
})

const filteredRows = () => {
    let filtered = people;

    // ถ้ามี roleSelected ให้กรองตาม role ก่อน
    if (roleSelected.value.length > 0) {
        filtered = filtered.filter(person => roleSelected.value.includes(person.role));
    }

    // ถ้ามี q ให้กรองตามคำค้นหาด้วย
    if (q.value) {
        filtered = filtered.filter(person =>
            Object.values(person).some(value =>
                String(value).toLowerCase().includes(q.value.toLowerCase())
            )
        );
    }
    peopleCount.value = filtered.length;
    // ตัดแบ่งข้อมูลตามหน้า (pagination)
    rows.value = filtered.slice((page.value - 1) * pageCount, page.value * pageCount);
};
</script>