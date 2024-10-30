<template>
    <div class="w-full pb-16">
        <div class="flex  gap-4 -mt-[1px] justify-end">
            <ScreenOptions/>
            <MenuHelp/>
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
        <UTable v-model="selected" :rows="people" @select="select" class="border shadow-sm rounded-md"/>
    </div>
</template>

<script setup>
    const people = [{
        id: 1,
        name: 'Lindsay Walton',
        title: 'Front-end Developer',
        email: 'lindsay.walton@example.com',
        role: 'Member'
    }, {
        id: 2,
        name: 'Courtney Henry',
        title: 'Designer',
        email: 'courtney.henry@example.com',
        role: 'Admin'
    }, {
        id: 3,
        name: 'Tom Cook',
        title: 'Director of Product',
        email: 'tom.cook@example.com',
        role: 'Member'
    }, {
        id: 4,
        name: 'Whitney Francis',
        title: 'Copywriter',
        email: 'whitney.francis@example.com',
        role: 'Admin'
    }, {
        id: 5,
        name: 'Leonard Krasner',
        title: 'Senior Designer',
        email: 'leonard.krasner@example.com',
        role: 'Owner'
    }]

    function select(row) {
        const index = selected.value.findIndex(item => item.id === row.id)
        if (index === -1) {
            selected.value.push(row)
        } else {
            selected.value.splice(index, 1)
        }
    }

    const selected = ref([people[1]])
</script>