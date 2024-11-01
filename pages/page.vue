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
                Add New Page
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
                <UInput v-model="q" icon="i-heroicons-magnifying-glass" placeholder="Search Pages" />
                <UButton label="Search" class="text-black" @click="filteredRows" />
            </div>
        </div>
        <div class="flex justify-end opacity-60 py-2 pe-4">
            {{ pageCount }} item
        </div>
        <div class="border dark:border-gray-700 shadow-sm rounded-md">
            <UTable v-model="selected" :rows="rows" :columns="columns" @select="select">
                <template #title-data="{ row }">
                    <div class="flex items-center gap-3 -my-2">
                        <div class="w-14 h-14 rounded bg-slate-100 flex justify-center items-center">
                            <img v-if="row.image" :src="row.image" :alt="row.title"
                                class="w-full h-full rounded object-cover">
                            <UIcon v-else name="i-heroicons-photo" class="w-2 h-2" />
                        </div>
                        <span class="font-medium">{{ row.title }}</span>
                    </div>
                </template>
                <template #date-data="{ row }">
                    <div>
                        <p>Publish</p>
                        <p>{{row.date}}</p>
                    </div>
                </template>
            </UTable>
            <div class="p-3 border-t dark:border-gray-700">
                <UPagination v-model="page" :page-count="pageCount" :total="peopleCount" :ui="{
                    wrapper: 'flex items-center gap-1',
                    rounded: '!rounded-full min-w-[32px] justify-center ring-0 shadow-none',
                }" />
            </div>
        </div>
    </div>
</template>

<script setup>
const columns = [{
    key: 'title',
    label: 'Title',
    sortable: true
}, {
    key: 'author',
    label: 'Author',
    sortable: true
}, {
    key: 'state',
    label: 'State'
}, {
    key: 'test',
    label: 'Test'
}, {
    key: 'tag',
    label: 'Tag'
}, {
    key: 'date',
    label: 'Date',
    sortable: true
}]
const pageData = [
    {
        title: 'Whitney Francis',
        author: 'Whitney Francis',
        state: 'Whitney Francis',
        test: '-',
        tag: 'Whitney Francis',
        post: 0,
        date: '2024/11/17 at 11:24 am',
        image: '/img/404.jpg'
    },
    {
        title: 'Whitney Francis',
        author: 'Whitney Francis',
        state: 'Whitney Francis',
        test: '-',
        tag: 'Whitney Francis',
        post: 0,
        date: '2024/11/17 at 11:24 am',
        image: ''
    },
]

const page = ref(1)
const peopleCount = ref(pageData.length)
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
    let filtered = pageData;

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