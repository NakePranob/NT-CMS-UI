<template>
    <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
        <UButton color="white" label="Screen Options" :ui="{ rounded: 'rounded-t-none' }" trailing-icon="i-heroicons-chevron-down-20-solid" />
    </UDropdown>
</template>

<script setup>
    const items = [
        [
            {
                label: 'Archive',
                icon: 'i-heroicons-archive-box-20-solid'
            }, 
            {
                label: 'Move',
                icon: 'i-heroicons-arrow-right-circle-20-solid'
            }
        ], 
        [
            {
                label: 'Delete',
                icon: 'i-heroicons-trash-20-solid',
                shortcuts: ['⌘', 'D']
            }
        ]
    ]
</script>